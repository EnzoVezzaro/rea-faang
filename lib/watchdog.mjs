/**
 * lib/watchdog.mjs — the independent control plane.
 *
 * The governor cannot recover itself: if its process or its model is gone,
 * there is nothing left inside the governor to reason with. This module is a
 * separate process that watches the governor from outside and performs one
 * pre-authorized recovery action, or escalates.
 *
 * Three rules make that safe:
 *
 *   1. Single owner — every recovery takes the `watchdog:governor` lease first,
 *      so two watchdogs (or a watchdog and a governor) can never both mutate
 *      the same route.
 *   2. Bounded — restarts are capped by `watchdog.restarts_allowed` and spaced
 *      by `watchdog.cooldown_seconds`; past the bound the watchdog escalates to
 *      the operator instead of thrashing.
 *   3. Honest delivery — nothing here claims a process was restarted unless a
 *      delivery function actually reported success. With no delivery function
 *      configured the action is recorded only, and says so.
 *
 * The recovered route is validated before it is switched to: a replacement
 * that is unknown or has no credentials is skipped, never installed.
 *
 * Zero dependencies. Node builtins only.
 */

import fs from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";

import * as rt from "./runtime.mjs";
import { buildCrew, nextRoute, routeChain, routeLabel } from "./crew.mjs";
import { resolveAdapter } from "./adapters/index.mjs";
import { resolveConfig } from "./config.mjs";

const WATCHDOG_VERSION = 1;
const WATCHDOG_DEFAULT_INTERVAL = 60;
const WATCHDOG_HISTORY_LIMIT = 25;
const WATCHDOG_LEASE = "watchdog:governor";
const WATCHDOG_MAX_ACTIONS_SCANNED = 200;

export const WATCHDOG_ACTIONS = ["watchdog.route.replace", "watchdog.restart", "watchdog.escalate", "watchdog.cycle"];

// ---------------------------------------------------------------------------
// state file (.ace/watchdog.json) — mirrors the autopilot loop's shape
// ---------------------------------------------------------------------------

function watchdogFile(dir) {
  return path.join(dir, ".ace", "watchdog.json");
}

function watchdogLogFile(dir) {
  return path.join(dir, ".ace", "watchdog.log");
}

function readJson(p) {
  try {
    const parsed = JSON.parse(fs.readFileSync(p, "utf8"));
    return parsed && typeof parsed === "object" ? parsed : null;
  } catch {
    return null;
  }
}

function writeJson(p, obj) {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, JSON.stringify(obj, null, 2) + "\n", "utf8");
}

function defaultWatchdogFile() {
  return {
    version: WATCHDOG_VERSION,
    state: "IDLE",
    pid: null,
    intervalSeconds: WATCHDOG_DEFAULT_INTERVAL,
    cycleCount: 0,
    lastCycle: null,
    history: [],
    updatedAt: new Date().toISOString(),
  };
}

function loadWatchdogFile(dir) {
  const parsed = readJson(watchdogFile(dir));
  if (!parsed) return defaultWatchdogFile();
  return { ...defaultWatchdogFile(), ...parsed };
}

function saveWatchdogFile(dir, file) {
  file.updatedAt = new Date().toISOString();
  writeJson(watchdogFile(dir), file);
  return file;
}

function clampInterval(raw, fallback) {
  if (raw === undefined || raw === null) return fallback;
  const n = Number.parseInt(String(raw), 10);
  if (!Number.isFinite(n)) return fallback;
  return Math.min(86_400, Math.max(5, n));
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ---------------------------------------------------------------------------
// observing the governor
// ---------------------------------------------------------------------------

/**
 * The governor identity comes from the crew, and liveness needs *both*
 * signals: a heartbeat that is not stale, and — when a pid was recorded — a
 * process that still exists. A heartbeat file left behind by a dead process is
 * the exact false positive this watchdog exists to catch.
 */
function governorView(dir, config, nowMs) {
  const crew = buildCrew(config);
  const id = crew.governor.id;
  const heartbeat = rt.readHeartbeat(dir, id);
  const agent = rt.getAgentRecords(dir).find((a) => a.id === id) ?? null;
  const threshold = config?.recovery?.stale_heartbeat_seconds ?? 90;
  const age = rt.heartbeatAgeSeconds(heartbeat, nowMs);
  const stale = heartbeat === null ? true : rt.isStale(heartbeat, threshold, nowMs);
  const pid = agent?.pid ?? heartbeat?.pid ?? null;
  const pidAlive = pid === null || pid === undefined ? null : rt.processAlive(pid);
  const chain = routeChain(config, "governor");
  const recorded = rt.readRoute(dir, id)?.route ?? null;
  const route = recorded ?? chain[0] ?? null;
  const ever = Boolean(heartbeat || agent);

  return {
    agent: id,
    alive: !stale && pidAlive !== false,
    heartbeatAgeSeconds: age,
    stale,
    pid,
    pidAlive,
    route,
    routeLabel: route ? routeLabel(route) : "none",
    chain,
    thresholdSeconds: threshold,
    ever,
  };
}

function governorReport(view) {
  return {
    agent: view.agent,
    alive: view.alive,
    heartbeatAgeSeconds: view.heartbeatAgeSeconds,
    stale: view.stale,
    pid: view.pid,
    pidAlive: view.pidAlive,
    route: view.route,
    routeLabel: view.routeLabel,
  };
}

function observeNote(view) {
  if (!view.ever) return "no governor heartbeat recorded — the governor has never run here";
  if (view.pidAlive === false) return `governor process pid ${view.pid} is gone (heartbeat age ${view.heartbeatAgeSeconds}s)`;
  if (view.stale) return `governor heartbeat is ${view.heartbeatAgeSeconds}s old (threshold ${view.thresholdSeconds}s)`;
  return `governor heartbeat is fresh (${view.heartbeatAgeSeconds}s, threshold ${view.thresholdSeconds}s)`;
}

// ---------------------------------------------------------------------------
// bounding
// ---------------------------------------------------------------------------

function watchdogActions(dir) {
  return rt
    .readActions(dir, WATCHDOG_MAX_ACTIONS_SCANNED)
    .filter((a) => typeof a.type === "string" && a.type.startsWith("watchdog."));
}

/**
 * How much recovery is still allowed. Counts only actions that actually changed
 * something (route replacements and restarts) — a cycle that merely observed
 * is not a restart.
 */
function bound(dir, config, nowMs) {
  const acted = watchdogActions(dir).filter((a) => a.type === "watchdog.route.replace" || a.type === "watchdog.restart");
  const maxRestarts = config?.watchdog?.restarts_allowed ?? 3;
  const cooldownMs = (config?.watchdog?.cooldown_seconds ?? 120) * 1000;
  const last = acted.length > 0 ? Date.parse(acted[acted.length - 1].at ?? "") : Number.NaN;
  const elapsed = Number.isFinite(last) ? nowMs - last : Number.POSITIVE_INFINITY;
  const cooldownActive = Number.isFinite(last) && elapsed < cooldownMs;
  const overBudget = acted.length >= maxRestarts;

  return {
    ok: !overBudget && !cooldownActive,
    overBudget,
    cooldownActive,
    restarts: acted.length,
    maxRestarts,
    cooldownSeconds: Math.round(cooldownMs / 1000),
    cooldownRemainingSeconds: cooldownActive ? Math.max(0, Math.round((cooldownMs - elapsed) / 1000)) : 0,
    reason: overBudget
      ? `restart budget exhausted (${acted.length}/${maxRestarts})`
      : cooldownActive
        ? `cooldown active (${Math.max(0, Math.round((cooldownMs - elapsed) / 1000))}s remaining)`
        : null,
  };
}

// ---------------------------------------------------------------------------
// choosing a validated replacement route
// ---------------------------------------------------------------------------

/**
 * The next candidate after the route that is currently active. When nothing is
 * recorded yet, the primary is the target — not its fallback, which is what a
 * naive "next in chain" walk would pick.
 */
function nextCandidate(chain, current) {
  if (!current) return chain[0] ?? null;
  return nextRoute(chain, current);
}

/**
 * Walk the chain from `current` until a candidate validates. Validation is the
 * adapter's own health probe (known provider, credentials present, model
 * declared): an unusable replacement is skipped, not installed.
 */
function chooseReplacement(chain, current, env) {
  const tried = [];
  let candidate = nextCandidate(chain, current);
  while (candidate) {
    const resolved = resolveAdapter("provider", candidate.provider);
    let health;
    if (!resolved.ok) {
      health = { ok: false, detail: resolved.reason };
    } else {
      try {
        health = resolved.adapter.health(env) ?? { ok: true, detail: "no health probe" };
      } catch (err) {
        health = { ok: false, detail: String((err && err.message) || err) };
      }
    }
    tried.push({ route: routeLabel(candidate), ok: Boolean(health.ok), detail: health.detail ?? "" });
    if (health.ok) return { ok: true, route: candidate, health, tried };
    candidate = nextRoute(chain, candidate);
  }
  return { ok: false, route: null, health: null, tried };
}

// ---------------------------------------------------------------------------
// status
// ---------------------------------------------------------------------------

export function watchdogStatus(dir, config) {
  const nowMs = Date.now();
  const file = loadWatchdogFile(dir);
  const running = rt.processAlive(file.pid);
  const view = governorView(dir, config, nowMs);
  const limits = bound(dir, config, nowMs);
  const lease = rt.readLease(dir, WATCHDOG_LEASE);
  const actions = watchdogActions(dir);
  const escalations = actions
    .filter((a) => a.type === "watchdog.escalate")
    .slice(-5)
    .map((a) => ({ code: a.code ?? null, reason: a.reason ?? null, at: a.at ?? null }));
  const last = actions.length > 0 ? actions[actions.length - 1] : null;

  return {
    command: "watchdog",
    enabled: config?.watchdog?.enabled !== false,
    running,
    pid: running ? file.pid : null,
    recordedPid: file.pid ?? null,
    state: file.state,
    spawned: file.spawned ?? null,
    intervalSeconds: file.intervalSeconds,
    cycleCount: file.cycleCount ?? 0,
    governor: governorReport(view),
    note: observeNote(view),
    lease: lease ? { name: lease.name, owner: lease.owner, expiresAt: lease.expiresAt } : null,
    restarts: limits.restarts,
    maxRestarts: limits.maxRestarts,
    cooldownSeconds: limits.cooldownSeconds,
    bounded: { ok: limits.ok, reason: limits.reason },
    escalations,
    lastAction: last ? { type: last.type, at: last.at, from: last.from ?? null, to: last.to ?? null } : null,
    updatedAt: file.updatedAt ?? null,
  };
}

// ---------------------------------------------------------------------------
// one recovery cycle
// ---------------------------------------------------------------------------

/**
 * One watchdog cycle.
 *
 * opts:
 *   nowMs        — deterministic clock
 *   env          — environment used for credential/health probes
 *   apply        — false computes and reports without writing anything
 *   deliver      — ({ action, governor, config }) => ({ ok, detail }); how a
 *                  real restart is handed to the host. Absent means the action
 *                  is recorded only, and reported as such.
 *   spawnGovernor — accepted alias for deliver
 */
export function watchdogCycle(dir, config, opts = {}) {
  const nowMs = opts.nowMs ?? Date.now();
  const env = opts.env ?? process.env;
  const apply = opts.apply !== false;
  const view = governorView(dir, config, nowMs);
  const limits = bound(dir, config, nowMs);
  const deliver = opts.deliver ?? opts.spawnGovernor ?? null;

  const checksNotRun = [
    ...(typeof deliver === "function" ? [] : ["process restart (no delivery function configured — recovery is recorded, not executed)"]),
    ...(apply ? [] : ["no state was written (dry run)"]),
    "external supervision (launchd/systemd/cron) — not probed from inside this process",
  ];

  const report = {
    command: "watchdog cycle",
    at: new Date(nowMs).toISOString(),
    applied: apply,
    governor: governorReport(view),
    action: null,
    restarts: limits.restarts,
    bounded: { ok: limits.ok, reason: limits.reason, maxRestarts: limits.maxRestarts, cooldownSeconds: limits.cooldownSeconds },
    escalations: [],
    checksNotRun,
    note: observeNote(view),
    ok: true,
  };

  if (view.alive) return report;

  const escalate = (code, reason) => {
    report.ok = false;
    report.escalations.push({ subject: view.agent, code, reason, needsOperator: true, at: report.at });
    report.action = {
      type: "escalate",
      subject: view.agent,
      from: view.routeLabel,
      to: null,
      ok: false,
      code,
      reason,
      delivered: false,
    };
    if (apply) rt.journalAction(dir, { type: "watchdog.escalate", subject: view.agent, code, reason });
    return report;
  };

  // Bounded first: past the budget the correct action is to stop acting and
  // tell the operator, not to keep switching routes.
  if (!limits.ok) {
    return escalate(limits.overBudget ? "RESTART_BUDGET_EXHAUSTED" : "COOLDOWN_ACTIVE", limits.reason);
  }

  const choice = chooseReplacement(view.chain, view.route, env);
  if (!choice.ok) {
    return escalate(
      "CHAIN_EXHAUSTED",
      `no usable replacement route for ${view.agent} (tried: ${choice.tried.map((t) => `${t.route} — ${t.detail}`).join("; ") || "none configured"})`,
    );
  }

  const reason = view.ever
    ? `governor unresponsive (${observeNote(view)})`
    : "no governor heartbeat recorded — activating a route for an absent governor";

  if (!apply) {
    report.action = {
      type: "route.replace",
      subject: view.agent,
      from: view.routeLabel,
      to: routeLabel(choice.route),
      ok: true,
      planned: true,
      delivered: false,
      reason: `would switch ${view.routeLabel} → ${routeLabel(choice.route)}`,
      checks: choice.tried,
    };
    return report;
  }

  // Single owner: without the lease another watchdog may already be recovering.
  const lease = rt.acquireLease(dir, WATCHDOG_LEASE, {
    owner: "watchdog",
    ttlSeconds: config?.recovery?.lease_seconds ?? 120,
    nowMs,
  });
  if (!lease.ok) {
    report.ok = false;
    report.action = {
      type: "restart",
      subject: view.agent,
      from: view.routeLabel,
      to: routeLabel(choice.route),
      ok: false,
      code: lease.code ?? "LEASE_HELD",
      reason: `${lease.code ?? "LEASE_HELD"}: ${lease.reason}`,
      delivered: false,
    };
    return report;
  }

  try {
    // Preserve recoverable state before changing the route — a resume continues
    // from the checkpoint instead of replaying side effects.
    rt.writeCheckpoint(dir, {
      agent: view.agent,
      note: `pre-watchdog-recovery from ${view.routeLabel}`,
      extra: { route: choice.route },
    });
    rt.writeRoute(dir, view.agent, choice.route, {
      reason,
      by: "watchdog",
      previous: view.route,
      checks: { provider: choice.route.provider, model: choice.route.model, health: choice.health.detail },
    });

    let delivered = false;
    let delivery = "recovery recorded — no delivery function is configured, so no process was restarted";
    if (typeof deliver === "function") {
      try {
        const outcome = deliver({ action: { type: "route.replace", to: choice.route }, governor: view, config }) ?? {};
        delivered = outcome.ok === true;
        delivery = outcome.detail ?? (delivered ? "delivery reported success" : "delivery reported failure");
      } catch (err) {
        delivered = false;
        delivery = `delivery failed: ${String((err && err.message) || err)}`;
      }
    }

    rt.journalAction(dir, {
      type: "watchdog.route.replace",
      subject: view.agent,
      from: view.routeLabel,
      to: routeLabel(choice.route),
      cause: report.note,
      delivered,
      delivery,
      checks: choice.tried,
    });

    report.action = {
      type: "route.replace",
      subject: view.agent,
      from: view.routeLabel,
      to: routeLabel(choice.route),
      ok: true,
      code: null,
      reason,
      delivered,
      delivery,
      checks: choice.tried,
    };
  } finally {
    rt.releaseLease(dir, WATCHDOG_LEASE, "watchdog");
  }

  rt.journalAction(dir, {
    type: "watchdog.cycle",
    subject: view.agent,
    action: report.action?.type ?? "none",
    restarts: limits.restarts + 1,
    ok: report.ok,
  });
  return report;
}

// ---------------------------------------------------------------------------
// the detached loop
// ---------------------------------------------------------------------------

export function watchdogStart(dir, config, opts = {}) {
  const file = loadWatchdogFile(dir);
  if (rt.processAlive(file.pid)) {
    return {
      command: "watchdog on",
      started: false,
      alreadyRunning: true,
      pid: file.pid,
      intervalSeconds: file.intervalSeconds,
      state: file.state,
    };
  }

  file.intervalSeconds = clampInterval(opts.intervalSeconds, config?.watchdog?.interval_seconds ?? file.intervalSeconds);

  // Tests record the intent without starting a process; nothing else should
  // ever pass spawn:false, because a watchdog that is not running protects
  // nothing.
  if (opts.spawn === false) {
    file.state = "RUNNING";
    file.pid = null;
    file.spawned = false;
    saveWatchdogFile(dir, file);
    return {
      command: "watchdog on",
      started: true,
      spawned: false,
      pid: null,
      intervalSeconds: file.intervalSeconds,
      state: file.state,
      note: "intent recorded without spawning a process (spawn: false)",
    };
  }

  const logFd = fs.openSync(watchdogLogFile(dir), "a");
  let child;
  try {
    child = spawn(process.execPath, [fileURLToPath(import.meta.url), "run", "--interval", String(file.intervalSeconds)], {
      cwd: dir,
      env: process.env,
      detached: true,
      stdio: ["ignore", logFd, logFd],
    });
    child.unref();
  } finally {
    fs.closeSync(logFd);
  }

  file.state = "RUNNING";
  file.spawned = true;
  file.pid = child.pid ?? null;
  saveWatchdogFile(dir, file);

  return {
    command: "watchdog on",
    started: true,
    spawned: true,
    pid: file.pid,
    intervalSeconds: file.intervalSeconds,
    state: file.state,
    log: path.relative(dir, watchdogLogFile(dir)),
  };
}

export function watchdogStop(dir, config) {
  const file = loadWatchdogFile(dir);
  // Read the pid before clearing it: the report must name the process that was
  // signalled, or an operator cannot tell what this call actually stopped.
  const recordedPid = file.pid ?? null;
  const wasRunning = rt.processAlive(recordedPid);
  let stopped = false;
  if (wasRunning && recordedPid !== null) {
    try {
      process.kill(recordedPid, "SIGTERM");
      stopped = true;
    } catch {
      // The process exited between the liveness check and the signal; the state
      // below is still truthful.
    }
  }
  file.state = "IDLE";
  file.pid = null;
  file.spawned = false;
  saveWatchdogFile(dir, file);
  return { command: "watchdog off", stopped, wasRunning, pid: wasRunning ? recordedPid : null, state: file.state };
}

/**
 * The loop body used by the detached process. One cycle per interval, history
 * trimmed, and a cycle that throws is recorded rather than killing the loop —
 * a watchdog that stops watching is worse than one that logs a bad cycle.
 */
export async function watchdogRun(dir, config, opts = {}) {
  const file = loadWatchdogFile(dir);
  const intervalSeconds = clampInterval(opts.intervalSeconds, file.intervalSeconds);
  const maxCycles = Number.isFinite(opts.maxCycles) ? Math.max(1, opts.maxCycles) : Number.POSITIVE_INFINITY;
  let cycles = 0;
  let last = null;

  while (cycles < maxCycles) {
    const at = new Date().toISOString();
    try {
      last = watchdogCycle(dir, config, opts);
    } catch (err) {
      last = { at, ok: false, error: String((err && err.message) || err), action: null, escalations: [] };
    }
    file.cycleCount = (file.cycleCount ?? 0) + 1;
    file.lastCycle = last.at ?? at;
    file.state = "RUNNING";
    file.history = [
      ...(file.history ?? []),
      {
        cycle: file.cycleCount,
        at: last.at ?? at,
        action: last.action?.type ?? "none",
        ok: last.ok !== false,
        escalations: last.escalations?.length ?? 0,
        error: last.error ?? null,
      },
    ].slice(-WATCHDOG_HISTORY_LIMIT);
    saveWatchdogFile(dir, file);
    cycles += 1;
    // The caller can report each cycle as it lands (the CLI streams one JSON
    // document per cycle, matching `ace autopilot run`).
    if (typeof opts.onCycle === "function") opts.onCycle(last, { cycle: cycles, intervalSeconds });
    if (cycles >= maxCycles) break;
    await sleep(intervalSeconds * 1000);
  }

  return { command: "watchdog run", cycles, intervalSeconds, state: file.state, last };
}

// ---------------------------------------------------------------------------
// program entry — only when this file is executed, never when imported
// ---------------------------------------------------------------------------

const isMain = (() => {
  const argv1 = process.argv[1];
  if (!argv1) return false;
  try {
    return import.meta.url === pathToFileURL(argv1).href;
  } catch {
    return false;
  }
})();

if (isMain) {
  const dir = process.cwd();
  const sub = process.argv[2] ?? "status";
  const flag = (name) => {
    const i = process.argv.indexOf(name);
    return i === -1 ? undefined : process.argv[i + 1];
  };
  const config = resolveConfig({ dir }).effective;
  const print = (o) => process.stdout.write(JSON.stringify(o, null, 2) + "\n");

  if (sub === "status") print(watchdogStatus(dir, config));
  else if (sub === "on") print(watchdogStart(dir, config, { intervalSeconds: flag("--interval") }));
  else if (sub === "off") print(watchdogStop(dir, config));
  else if (sub === "run") {
    const max = Number.parseInt(flag("--max-cycles") ?? "", 10);
    print(await watchdogRun(dir, config, {
      intervalSeconds: flag("--interval"),
      maxCycles: Number.isFinite(max) ? max : undefined,
    }));
  } else {
    process.stderr.write(`watchdog: unknown subcommand "${sub}" — use status | on | off | run\n`);
    process.exitCode = 2;
  }
}
