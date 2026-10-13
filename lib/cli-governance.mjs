/**
 * lib/cli-governance.mjs — the governance command surface.
 *
 * Kept out of ace.mjs so the CLI entry stays small; `ace.mjs` owns the router
 * and passes its shared helpers in as `ctx` (workspaceInitialized,
 * notInitialized, writeStructuredError, printJson, printTable, runVerifyChecks).
 *
 * Commands:
 *   ace config    [show] | check | set <key=value> [--task <id>]
 *   ace crew      [--json] | spawn <role> [--project P] [--runtime R] [--dry-run]
 *   ace govern    [--dry-run] [--json]         one governor cycle
 *   ace supervise [--project P] [--dry-run] [--json]   one supervisor cycle
 *   ace task      add | list | show | claim | start | review | integrate | done | fail | block | cancel
 *   ace handoff   submit <task> --file <path> | list <task> | verify <task>
 *   ace route     show <agent> | set <agent> <provider:model> [--reason R]
 *   ace heartbeat --agent <id> [--role R] [--status S] [--task T] [--route p:m] [--pid N]
 *   ace watchdog  [status] | cycle [--dry-run] | on [--interval N] | off | run [--max-cycles N]
 *   ace bots      [status] | enable <provider> | disable | intake --file <json> | inbox | deliver
 *   ace adapters  [list] [--kind K] | health | audit
 *
 * Exit codes: 0 success, 1 an operator action is required (escalation, rejected
 * handoff, failed check), 2 usage or configuration error.
 *
 * Zero dependencies. Node builtins only.
 */

import fs from "node:fs";
import path from "node:path";

import * as rt from "./runtime.mjs";
import * as configLib from "./config.mjs";
import * as crewLib from "./crew.mjs";
import * as governanceLib from "./governance.mjs";
import * as adapters from "./adapters/index.mjs";
import * as botsLib from "./bots.mjs";
import * as watchdogLib from "./watchdog.mjs";

// ---------------------------------------------------------------------------
// argument parsing
// ---------------------------------------------------------------------------

const VALUE_FLAGS = new Set([
  "--name", "--project", "--runtime", "--role", "--agent", "--status", "--task",
  "--route", "--pid", "--interval", "--file", "--attempt", "--from", "--by",
  "--goal", "--criteria", "--priority", "--workspace", "--reason", "--title",
  "--id", "--max-cycles", "--limit", "--kind", "--provider", "--model", "--since",
]);

export function parseArgs(argv) {
  const positionals = [];
  const flags = {};
  for (let i = 0; i < argv.length; i++) {
    const token = argv[i];
    if (token.startsWith("--")) {
      const eq = token.indexOf("=");
      if (eq >= 0) {
        flags[token.slice(0, eq)] = token.slice(eq + 1);
        continue;
      }
      const next = argv[i + 1];
      if (VALUE_FLAGS.has(token) && next !== undefined && !next.startsWith("--")) {
        flags[token] = next;
        i++;
        continue;
      }
      flags[token] = true;
      continue;
    }
    positionals.push(token);
  }
  return { positionals, flags };
}

function usage(ctx, command, message, suggestions) {
  ctx.writeStructuredError({ code: "BAD_USAGE", message, recoverable: true, suggestions });
  process.exitCode = 2;
}

function nowish(flags) {
  const raw = flags["--now"];
  if (typeof raw === "string") {
    const parsed = Date.parse(raw);
    if (Number.isFinite(parsed)) return parsed;
  }
  return Date.now();
}

// ---------------------------------------------------------------------------
// shared workspace + config helpers
// ---------------------------------------------------------------------------

function workspace(ctx, command) {
  const dir = process.cwd();
  if (!ctx.workspaceInitialized(dir)) {
    ctx.notInitialized(command);
    return null;
  }
  const resolved = configLib.resolveConfig({ dir });
  return { dir, resolved, effective: resolved.effective };
}

function validationOf(resolved) {
  return configLib.validateEffective(resolved.effective, { layers: resolved.layers });
}

/**
 * Governance acts on the environment, so it refuses to act on a configuration
 * that does not validate. Actionable errors, never a partial run.
 */
function requireValidConfig(ctx, resolved, command) {
  const verdict = validationOf(resolved);
  if (!verdict.ok) {
    ctx.writeStructuredError({
      code: "CONFIG_INVALID",
      message: `${command} refuses to act on an invalid effective configuration (${verdict.errors.length} problem(s))`,
      recoverable: true,
      errors: verdict.errors.map((e) => ({ code: e.code, where: e.where, message: e.message, fix: e.fix })),
      suggestions: ["Run `ace config check` for the full list and fixes"],
    });
    process.exitCode = 2;
    return null;
  }
  return verdict;
}

function isDryRun(flags) {
  return flags["--dry-run"] === true || flags["--apply"] === false;
}

function tableRow(columns, values) {
  return Object.fromEntries(columns.map((c, i) => [c, values[i]]));
}

// ---------------------------------------------------------------------------
// config
// ---------------------------------------------------------------------------

async function cmdConfig(args, ctx) {
  const { positionals, flags } = parseArgs(args);
  const sub = positionals[0] ?? "show";
  const ws = workspace(ctx, "config");
  if (!ws) return;
  const { dir, resolved } = ws;

  if (sub === "set") {
    const pair = positionals[1];
    if (!pair) {
      return usage(ctx, "config", "config set needs a key=value pair", [
        "ace config set concurrency.max_active_agents=6",
        "ace config set experimental.management_bots.enabled=true",
      ]);
    }
    let parsed;
    try {
      parsed = configLib.parseOverridePair(pair);
    } catch (err) {
      return usage(ctx, "config", err.message, ["Values are typed: true/false/null, integers, JSON objects, or strings"]);
    }
    const taskId = flags["--task"];
    if (typeof taskId === "string") {
      const task = rt.readTask(dir, taskId);
      if (!task) {
        ctx.writeStructuredError({ code: "UNKNOWN_TASK", message: `no task "${taskId}"`, recoverable: true, suggestions: ["ace task list"] });
        process.exitCode = 1;
        return;
      }
      rt.saveTask(dir, { ...task, config: { ...(task.config ?? {}), ...parsed.patch } });
      if (flags["--json"]) ctx.printJson({ command: "config set", layer: "task", task: taskId, config: parsed.patch });
      else console.log(`task override written: ${taskId} → ${parsed.key}`);
      return;
    }
    const merged = configLib.writeSessionOverride(dir, parsed.patch);
    if (flags["--json"]) ctx.printJson({ command: "config set", layer: "session", effective_patch: parsed.patch, session: merged });
    else console.log(`session override written: ${parsed.key} (highest precedence layer — survives until it is removed from .ace/session.json)`);
    return;
  }

  const verdict = validationOf(resolved);

  if (sub === "check") {
    const payload = {
      command: "config check",
      ok: verdict.ok,
      errors: verdict.errors,
      security: resolved.security,
      warnings: resolved.warnings,
      layers: configLib.LAYER_ORDER.filter((name) => resolved.layers[name] !== null),
    };
    if (flags["--json"]) {
      ctx.printJson(payload);
    } else if (verdict.ok) {
      console.log("config: OK — the effective configuration validates");
      console.log(`layers present: ${payload.layers.join(" < ")}`);
      if (resolved.warnings.length) for (const w of resolved.warnings) console.log(`  ! ${w}`);
    } else {
      console.log(`config: FAIL — ${verdict.errors.length} problem(s)`);
      for (const e of verdict.errors) {
        console.log(`  ✗ [${e.code}] ${e.where}`);
        console.log(`      ${e.message}`);
        if (e.fix) console.log(`      fix: ${e.fix}`);
      }
    }
    if (!verdict.ok) process.exitCode = 1;
    return;
  }

  if (sub !== "show") {
    return usage(ctx, "config", `unknown config subcommand "${sub}"`, ["ace config [show] [--resolve] [--json]", "ace config check", "ace config set key=value"]);
  }

  const payload = {
    command: "config",
    dir,
    effective: configLib.redactConfig(resolved.effective),
    layers: configLib.LAYER_ORDER.filter((name) => resolved.layers[name] !== null),
    warnings: resolved.warnings,
    security: resolved.security,
    validation: { ok: verdict.ok, errors: verdict.errors },
  };
  if (flags["--resolve"]) payload.sources = resolved.sources;

  if (flags["--json"]) {
    ctx.printJson(payload);
    return;
  }
  console.log(`Effective configuration (${payload.layers.join(" < ")})`);
  console.log(`  max_active_agents: ${resolved.effective.concurrency?.max_active_agents ?? 4}`);
  console.log(`  governor runtime:  ${resolved.effective.roles?.governor?.runtime ?? resolved.effective.orchestrator?.runtime ?? "—"}`);
  console.log(`  supervisors:       ${(resolved.effective.roles?.supervisors ?? []).map((s) => s.project).join(", ") || "—"}`);
  console.log(`  workers declared:  ${crewLib.declaredWorkerCount(resolved.effective)}`);
  console.log(`  multiplexer:       ${resolved.effective.adapters?.multiplexer?.provider ?? "none"}`);
  console.log(`  watchdog:          ${resolved.effective.watchdog?.enabled === false ? "disabled" : "enabled"}`);
  console.log(`  management bots:   ${resolved.effective.experimental?.management_bots?.enabled === true ? `enabled (${resolved.effective.experimental.management_bots.provider})` : "off (experimental)"}`);
  if (flags["--resolve"]) {
    console.log("Precedence — which layer last set each key:");
    for (const [key, layer] of Object.entries(resolved.sources ?? {}).sort()) {
      console.log(`  ${key} ← ${layer}`);
    }
  }
  for (const w of resolved.warnings) console.log(`  ! ${w}`);
  console.log(resolved.security.ok ? "security floor: intact" : `security floor: ${resolved.security.violations.length} violation(s)`);
  for (const v of resolved.security.violations) console.log(`  ✗ ${v.message}`);
  console.log(verdict.ok ? "validation: OK" : `validation: FAIL (${verdict.errors.length}) — run \`ace config check\``);
  console.log("precedence: defaults < installation < environment < project < task < session");
}

// ---------------------------------------------------------------------------
// crew
// ---------------------------------------------------------------------------

async function cmdCrew(args, ctx) {
  const { positionals, flags } = parseArgs(args);
  const sub = positionals[0] ?? "show";
  const ws = workspace(ctx, "crew");
  if (!ws) return;
  const { dir, effective } = ws;
  const crew = crewLib.buildCrew(effective);
  const agents = rt.getAgentRecords(dir);
  const occupancy = crewLib.computeOccupancy(effective, agents);

  if (sub === "spawn") {
    const role = positionals[1];
    if (!role) return usage(ctx, "crew", "crew spawn needs a role", ["ace crew spawn backend --project primary"]);
    const project = typeof flags["--project"] === "string" ? flags["--project"] : crew.projects[0]?.project ?? "primary";
    const runtime = typeof flags["--runtime"] === "string" ? flags["--runtime"] : crew.governor.runtime;
    const id = typeof flags["--name"] === "string" ? flags["--name"] : `${project}-${role}`;
    const existing = agents.find((a) => a.id === id);
    if (existing && ["working", "starting", "restarting", "idle"].includes(existing.status)) {
      ctx.writeStructuredError({
        code: "AGENT_EXISTS",
        message: `agent "${id}" already exists with status ${existing.status}`,
        recoverable: true,
        suggestions: ["Use --name to give the new agent a different id", "ace crew --json shows the live roster"],
      });
      process.exitCode = 1;
      return;
    }
    const verdict = crewLib.canStart(effective, agents, { runtime, role });
    if (!verdict.allowed) {
      // The budget is enforced here, in the same code path every caller uses —
      // a second runtime cannot spend the project budget independently.
      ctx.writeStructuredError({
        code: verdict.code ?? "BUDGET_EXHAUSTED",
        message: verdict.reason,
        recoverable: true,
        budget: { limit: occupancy.limit, occupied: occupancy.occupied, byRuntime: occupancy.byRuntime, runtimeCaps: occupancy.runtimeCaps },
        suggestions: [
          "Raise concurrency.max_active_agents (four is the default, not a maximum)",
          "Or wait for a running agent to finish",
        ],
      });
      process.exitCode = 1;
      return;
    }
    if (isDryRun(flags)) {
      const payload = { command: "crew spawn", dryRun: true, agent: id, role, project, runtime, budget: verdict.reason };
      if (flags["--json"]) ctx.printJson(payload);
      else console.log(`would spawn ${id} (${role}, runtime ${runtime}) — ${verdict.reason}`);
      return;
    }
    const record = rt.upsertAgent(dir, { id, role: "worker", kind: role, project, runtime, status: "idle", supervisor: crew.projects.find((p) => p.project === project)?.supervisor ?? null });
    rt.journalAction(dir, { type: "agent.spawned", subject: id, role, project, runtime, by: "operator" });
    rt.appendEvent(dir, {
      id: `evt_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      timestamp: new Date().toISOString(),
      type: "agent.spawned",
      actor: "operator",
      task: null,
      metadata: { agent: id, role, project, runtime },
    });
    const payload = { command: "crew spawn", agent: record.id, role: record.kind, project, runtime, budget: verdict.reason };
    if (flags["--json"]) ctx.printJson(payload);
    else console.log(`spawned ${record.id} (${role}, runtime ${runtime}) — ${verdict.reason}`);
    return;
  }

  if (sub !== "show") {
    return usage(ctx, "crew", `unknown crew subcommand "${sub}"`, ["ace crew [--json]", "ace crew spawn <role> [--project P]"]);
  }

  const payload = {
    command: "crew",
    governor: crew.governor,
    supervisors: crew.supervisors,
    workers: crew.workers,
    projects: crew.projects,
    live: agents.map((a) => ({ id: a.id, role: a.kind ?? a.role, status: a.status, runtime: a.runtime, task: a.task, route: a.route ? crewLib.routeLabel(a.route) : null })),
    budget: {
      limit: occupancy.limit,
      occupied: occupancy.occupied,
      available: occupancy.available,
      byRuntime: occupancy.byRuntime,
      runtimeCaps: occupancy.runtimeCaps,
      countsGovernor: occupancy.countsGovernor,
      countsSupervisors: occupancy.countsSupervisors,
    },
    boundary: "governor → worker is refused in code (crew.checkRoute); the governor asks the worker's supervisor",
  };

  if (flags["--json"]) {
    ctx.printJson(payload);
    return;
  }
  console.log("GOVERNOR");
  console.log(`  ${crew.governor.id} — scope ${crew.governor.scope}, runtime ${crew.governor.runtime}, route ${crew.governor.route.map(crewLib.routeLabel).join(" → ")}`);
  console.log("SUPERVISORS");
  for (const s of crew.supervisors) {
    console.log(`  ${s.id} — project ${s.project}, workspace ${s.workspace}, route ${s.route.map(crewLib.routeLabel).join(" → ")}`);
  }
  console.log("WORKERS (declared)");
  if (!crew.workers.length) console.log("  (none declared)");
  for (const w of crew.workers) {
    const live = agents.find((a) => a.id === w.id);
    console.log(`  ${w.id} — role ${w.role}, project ${w.project}, route ${w.route.map(crewLib.routeLabel).join(" → ")}${live ? `, live: ${live.status}` : ", not running"}`);
  }
  console.log(`BUDGET ${occupancy.occupied}/${occupancy.limit} active${Object.keys(occupancy.byRuntime).length ? ` (${Object.entries(occupancy.byRuntime).map(([r, n]) => `${r}:${n}`).join(", ")})` : ""}`);
  if (Object.keys(occupancy.runtimeCaps).length) {
    console.log(`  per-runtime caps: ${Object.entries(occupancy.runtimeCaps).map(([r, c]) => `${r}≤${c}`).join(", ")}`);
  }
  for (const ignored of occupancy.ignored) console.log(`  · not counted: ${ignored.id} — ${ignored.reason}`);
  console.log("boundary: the governor talks to supervisors only; a governor → worker message is refused");
}

// ---------------------------------------------------------------------------
// govern / supervise
// ---------------------------------------------------------------------------

async function cmdGovern(args, ctx) {
  const { flags } = parseArgs(args);
  const ws = workspace(ctx, "govern");
  if (!ws) return;
  const { dir, resolved, effective } = ws;
  if (!requireValidConfig(ctx, resolved, "govern")) return;

  const apply = !isDryRun(flags);
  const crew = crewLib.buildCrew(effective);
  const report = governanceLib.governorCycle(dir, effective, {
    apply,
    crew,
    nowMs: nowish(flags),
    verifyChecks: ctx.runVerifyChecks,
  });

  if (flags["--json"]) {
    ctx.printJson(report);
  } else {
    console.log(`governor cycle ${apply ? "" : "(dry run) "}at ${report.at} — scope ${report.scope}`);
    console.log(`goal: ${report.goal.statement ?? "(none declared)"} — ${report.goal.aligned} (${report.goal.tasksDone} done, ${report.goal.tasksOpen} open)`);
    console.log(`budget: ${report.budget.occupied}/${report.budget.limit} active`);
    for (const s of report.supervisors) {
      const beat = s.heartbeatAgeSeconds === null ? "no heartbeat" : `heartbeat ${s.heartbeatAgeSeconds}s`;
      const evidence = s.evidence.advanced ? `progress: yes (${s.evidence.events} events, ${s.evidence.taskUpdates} task updates)` : `progress: none in ${s.evidence.windowSeconds}s`;
      console.log(`  ${s.id} [${s.project}] ${s.alive ? "alive" : "NOT ALIVE"} — ${beat}; route ${s.routeLabel} ${s.routeHealth.ok ? "ok" : `UNUSABLE (${s.routeHealth.detail})`}; ${evidence}`);
    }
    if (!report.detections.length) console.log("detections: none");
    for (const d of report.detections) console.log(`  [${d.severity}] ${d.code} ${d.subject} — ${d.detail}`);
    for (const a of report.actions) console.log(`  action ${a.type} ${a.subject}${a.to ? ` → ${a.to}` : ""}: ${a.ok ? "ok" : "not applied"} — ${a.reason}`);
    for (const e of report.escalations) console.log(`  ESCALATION ${e.code} ${e.subject} — ${e.reason} (operator action required)`);
    console.log("not run:");
    for (const c of report.checksNotRun) console.log(`  · ${c}`);
  }

  if (report.escalations.length > 0) process.exitCode = 1;
}

async function cmdSupervise(args, ctx) {
  const { flags } = parseArgs(args);
  const ws = workspace(ctx, "supervise");
  if (!ws) return;
  const { dir, resolved, effective } = ws;
  if (!requireValidConfig(ctx, resolved, "supervise")) return;

  const apply = !isDryRun(flags);
  const crew = crewLib.buildCrew(effective);
  const project = typeof flags["--project"] === "string" ? flags["--project"] : crew.supervisors[0]?.project;
  const report = governanceLib.supervisorCycle(dir, effective, {
    apply,
    crew,
    project,
    nowMs: nowish(flags),
    verifyChecks: ctx.runVerifyChecks,
  });

  if (flags["--json"]) {
    ctx.printJson(report);
  } else {
    console.log(`supervisor cycle ${apply ? "" : "(dry run) "}at ${report.at} — ${report.supervisor} (project ${report.project})`);
    for (const w of report.workers) {
      console.log(`  ${w.id} [${w.role}] ${w.state} — heartbeat ${w.heartbeatAgeSeconds === null ? "none" : `${w.heartbeatAgeSeconds}s`}, route ${w.routeLabel}, task ${w.task ?? "none"}`);
    }
    if (!report.workers.length) console.log("  (no workers declared for this project)");
    for (const a of report.assignments) console.log(`  assign ${a.task} → ${a.worker}${a.planned ? " (planned)" : ""}`);
    for (const r of report.routeChanges) console.log(`  route change ${r.worker}: ${r.from} → ${r.to}${r.planned ? " (planned)" : ""}`);
    for (const v of report.verifications) console.log(`  handoff ${v.task} attempt ${v.attempt}: ${v.accepted ? "accepted" : `REJECTED — ${v.errors.join("; ")}`}`);
    for (const b of report.blockers) console.log(`  blocker ${b.code} ${b.subject} — ${b.detail}`);
    console.log(`budget: ${report.budget ? `${report.budget.occupied}/${report.budget.limit} active` : "n/a"}`);
    for (const c of report.checksNotRun) console.log(`  not run: ${c}`);
  }

  const critical = report.blockers.filter((b) => ["HANDOFF_REJECTED", "INTEGRATION_CHECK_FAILED", "CHAIN_EXHAUSTED", "ROUTE_UNAVAILABLE", "INVALID_TRANSITION"].includes(b.code));
  if (critical.length > 0) process.exitCode = 1;
}

// ---------------------------------------------------------------------------
// task
// ---------------------------------------------------------------------------

async function cmdTask(args, ctx) {
  const { positionals, flags } = parseArgs(args);
  const sub = positionals[0] ?? "list";
  const ws = workspace(ctx, "task");
  if (!ws) return;
  const { dir, effective } = ws;
  const project = typeof flags["--project"] === "string" ? flags["--project"] : effective.roles?.supervisors?.[0]?.project ?? "primary";

  if (sub === "add") {
    const title = (typeof flags["--title"] === "string" ? flags["--title"] : positionals[1]) ?? null;
    if (!title) return usage(ctx, "task", "task add needs a title", ['ace task add "bounded unit of work" --goal "why" --criteria "check1,check2"']);
    const task = rt.createTask(dir, {
      title,
      goal: typeof flags["--goal"] === "string" ? flags["--goal"] : null,
      project,
      priority: typeof flags["--priority"] === "string" ? flags["--priority"] : "normal",
      workspace: typeof flags["--workspace"] === "string" ? flags["--workspace"] : null,
      acceptance_criteria: typeof flags["--criteria"] === "string" ? flags["--criteria"].split(",").map((s) => s.trim()).filter(Boolean) : [],
      by: typeof flags["--by"] === "string" ? flags["--by"] : "supervisor",
    });
    if (flags["--json"]) ctx.printJson({ command: "task add", task });
    else console.log(`created ${task.id} — ${task.title} (project ${task.project}, priority ${task.priority})`);
    return;
  }

  if (sub === "list") {
    const all = flags["--all"] === true;
    const tasks = rt.listTaskRecords(dir).filter((t) => all || !["done", "cancelled"].includes(t.status));
    if (flags["--json"]) {
      ctx.printJson({ command: "task list", count: tasks.length, tasks });
      return;
    }
    if (!tasks.length) {
      console.log(all ? "No tasks." : "No open tasks (use --all to include closed).");
      return;
    }
    ctx.printTable(
      tasks.map((t) => ({
        id: t.id,
        title: (t.title ?? "").slice(0, 40),
        status: t.status,
        owner: t.owner ?? "—",
        attempt: `${t.attempt ?? 0}/${t.max_attempts ?? 3}`,
        project: t.project ?? "—",
      })),
      [
        { header: "ID", key: "id" },
        { header: "TITLE", key: "title" },
        { header: "STATUS", key: "status" },
        { header: "OWNER", key: "owner" },
        { header: "ATT", key: "attempt" },
        { header: "PROJECT", key: "project" },
      ]
    );
    return;
  }

  if (sub === "show") {
    const id = positionals[1];
    if (!id) return usage(ctx, "task", "task show needs a task id", ["ace task list --all"]);
    const task = rt.readTask(dir, id);
    if (!task) {
      ctx.writeStructuredError({ code: "UNKNOWN_TASK", message: `no task "${id}"`, recoverable: true, suggestions: ["ace task list --all"] });
      process.exitCode = 1;
      return;
    }
    if (flags["--json"]) {
      ctx.printJson({ command: "task show", task, handoffs: rt.listHandoffs(dir, id), lease: rt.readLease(dir, `task:${id}`) });
      return;
    }
    console.log(`${task.id} — ${task.title}`);
    console.log(`  status ${task.status} · owner ${task.owner ?? "—"} · attempt ${task.attempt}/${task.max_attempts} · priority ${task.priority}`);
    if (task.goal) console.log(`  goal: ${task.goal}`);
    if (task.acceptance_criteria?.length) console.log(`  acceptance: ${task.acceptance_criteria.join(" | ")}`);
    if (task.workspace) console.log(`  workspace: ${task.workspace}`);
    for (const h of task.history ?? []) console.log(`  [${h.at}] ${h.type} by ${h.by}${h.detail ? ` — ${h.detail}` : ""}`);
    return;
  }

  if (sub === "claim") {
    const id = positionals[1];
    const agent = flags["--agent"];
    if (!id || typeof agent !== "string") return usage(ctx, "task", "task claim needs a task id and --agent", ["ace task claim task_123 --agent primary-backend"]);
    const claimed = rt.claimTask(dir, id, { agent, project, workspace: flags["--workspace"] ?? null });
    if (!claimed.ok) {
      ctx.writeStructuredError({ code: claimed.code, message: claimed.reason, recoverable: true, suggestions: ["One authoritative owner per task: release or finish the current claim first"] });
      process.exitCode = 1;
      return;
    }
    // --json must stay a single document on stdout, so the prose line is only
    // printed in the human path.
    if (flags["--json"]) ctx.printJson({ command: "task claim", task: claimed.task });
    else console.log(`claimed ${id} for ${agent} (attempt ${claimed.task.attempt}, status ${claimed.task.status})`);
    return;
  }

  if (["start", "review", "integrate", "done", "fail", "block", "cancel", "status"].includes(sub)) {
    const id = positionals[1];
    const explicit = sub === "status" ? positionals[2] : null;
    if (!id) return usage(ctx, "task", `task ${sub} needs a task id`, ["ace task list --all"]);
    const target = sub === "status" ? explicit : { start: "in_progress", review: "review", integrate: "integrated", done: "done", fail: "failed", block: "blocked", cancel: "cancelled" }[sub];
    if (!target) return usage(ctx, "task", `task status needs a status`, [`Known: ${rt.TASK_STATUSES.join(", ")}`]);
    const by = typeof flags["--by"] === "string" ? flags["--by"] : "supervisor";
    const moved = rt.setTaskStatus(dir, id, target, { by, detail: typeof flags["--reason"] === "string" ? flags["--reason"] : null });
    if (!moved.ok) {
      ctx.writeStructuredError({ code: moved.code, message: moved.reason, recoverable: true, suggestions: ["Illegal transitions are refused so task state cannot drift"] });
      process.exitCode = 1;
      return;
    }
    if (sub === "done" || sub === "cancel" || sub === "fail") rt.releaseTask(dir, id, { agent: moved.task.owner, reason: target });
    if (flags["--json"]) ctx.printJson({ command: `task ${sub}`, task: moved.task });
    else console.log(`${id} → ${target}`);
    return;
  }

  return usage(ctx, "task", `unknown task subcommand "${sub}"`, [
    "ace task add <title> | list [--all] | show <id>",
    "ace task claim <id> --agent <agent>",
    "ace task start|review|integrate|done|fail|block|cancel <id>",
  ]);
}

// ---------------------------------------------------------------------------
// handoff
// ---------------------------------------------------------------------------

async function cmdHandoff(args, ctx) {
  const { positionals, flags } = parseArgs(args);
  const sub = positionals[0] ?? "list";
  const ws = workspace(ctx, "handoff");
  if (!ws) return;
  const { dir } = ws;

  if (sub === "submit") {
    const task = positionals[1];
    const file = flags["--file"];
    if (!task || typeof file !== "string") {
      return usage(ctx, "handoff", "handoff submit needs a task id and --file", ["ace handoff submit task_123 --file report.json"]);
    }
    if (!fs.existsSync(file)) {
      ctx.writeStructuredError({ code: "NO_SUCH_FILE", message: `handoff file not found: ${file}`, recoverable: true, suggestions: ["Write the handoff JSON first, then submit it"] });
      process.exitCode = 2;
      return;
    }
    let parsed;
    try {
      parsed = JSON.parse(fs.readFileSync(file, "utf8"));
    } catch (err) {
      ctx.writeStructuredError({ code: "MALFORMED_HANDOFF", message: `handoff file is not valid JSON: ${err.message}`, recoverable: true, suggestions: ["A handoff is a structured JSON artifact, not free text"] });
      process.exitCode = 2;
      return;
    }
    const attempt = typeof flags["--attempt"] === "string" ? Number.parseInt(flags["--attempt"], 10) : undefined;
    const record = rt.writeHandoff(dir, {
      ...parsed,
      task,
      attempt: Number.isFinite(attempt) ? attempt : parsed.attempt ?? 1,
      from: typeof flags["--from"] === "string" ? flags["--from"] : parsed.from,
    });
    const verdict = rt.verifyHandoff(record);
    if (flags["--json"]) ctx.printJson({ command: "handoff submit", handoff: record, verdict });
    else {
      console.log(`submitted handoff for ${task} (attempt ${record.attempt}, status ${record.status})`);
      for (const w of verdict.warnings) console.log(`  ! ${w}`);
      for (const e of verdict.errors) console.log(`  ✗ ${e}`);
      if (!verdict.ok) console.log("  the supervisor will reject this until the errors above are fixed");
    }
    return;
  }

  if (sub === "verify") {
    const task = positionals[1];
    if (!task) return usage(ctx, "handoff", "handoff verify needs a task id", ["ace handoff verify task_123"]);
    const handoff = rt.readHandoff(dir, task);
    const verdict = rt.verifyHandoff(handoff);
    if (flags["--json"]) ctx.printJson({ command: "handoff verify", task, handoff, verdict });
    else if (!handoff) console.log(`no handoff artifact for ${task}`);
    else {
      console.log(`handoff ${task} attempt ${handoff.attempt} from ${handoff.from}: ${verdict.ok ? "ACCEPTABLE" : "REJECTED"}`);
      for (const w of verdict.warnings) console.log(`  ! ${w}`);
      for (const e of verdict.errors) console.log(`  ✗ ${e}`);
    }
    if (!verdict.ok) process.exitCode = 1;
    return;
  }

  if (sub === "list") {
    const task = positionals[1];
    if (task) {
      const handoffs = rt.listHandoffs(dir, task);
      if (flags["--json"]) {
        ctx.printJson({ command: "handoff list", task, count: handoffs.length, handoffs });
        return;
      }
      if (!handoffs.length) console.log(`No handoffs for ${task}.`);
      for (const h of handoffs) console.log(`  attempt ${h.attempt} from ${h.from} — ${h.status}: ${h.summary ?? "(no summary)"}`);
      return;
    }
    const base = path.join(dir, ".ace", "handoffs");
    const tasks = fs.existsSync(base) ? fs.readdirSync(base) : [];
    if (flags["--json"]) {
      ctx.printJson({ command: "handoff list", tasks });
      return;
    }
    if (!tasks.length) console.log("No handoffs yet.");
    for (const t of tasks) {
      const last = rt.readHandoff(dir, t);
      console.log(`  ${t} — attempt ${last?.attempt ?? "?"} from ${last?.from ?? "?"} (${last?.status ?? "?"})`);
    }
    return;
  }

  return usage(ctx, "handoff", `unknown handoff subcommand "${sub}"`, [
    "ace handoff submit <task> --file <json>",
    "ace handoff list [<task>]",
    "ace handoff verify <task>",
  ]);
}

// ---------------------------------------------------------------------------
// route / heartbeat
// ---------------------------------------------------------------------------

async function cmdRoute(args, ctx) {
  const { positionals, flags } = parseArgs(args);
  const sub = positionals[0] ?? "show";
  const ws = workspace(ctx, "route");
  if (!ws) return;
  const { dir, effective } = ws;
  const crew = crewLib.buildCrew(effective);

  const agentId = sub === "show" ? positionals[1] : positionals[1];
  if (!agentId) return usage(ctx, "route", `route ${sub} needs an agent id`, ["ace route show governor", "ace route set governor opencode:model-name --reason 'primary down'"]);

  const chainFor = (id) => (id === crew.governor.id
    ? crew.governor.route
    : crew.supervisors.find((s) => s.id === id)?.route ?? crew.workers.find((w) => w.id === id)?.route ?? []);

  if (sub === "show") {
    const recorded = rt.readRoute(dir, agentId);
    const chain = agentId === crew.governor.id
      ? crew.governor.route
      : crew.supervisors.find((s) => s.id === agentId)?.route ?? crew.workers.find((w) => w.id === agentId)?.route ?? [];
    const payload = { command: "route show", agent: agentId, active: recorded?.route ?? chain[0] ?? null, chain, switches: recorded?.switches ?? 0, history: recorded?.history ?? [] };
    if (flags["--json"]) ctx.printJson(payload);
    else {
      console.log(`${agentId} route: ${crewLib.routeLabel(payload.active)}${recorded ? ` (switches: ${recorded.switches})` : " (no change recorded)"}`);
      console.log(`  chain: ${chain.map(crewLib.routeLabel).join(" → ") || "—"}`);
      for (const h of payload.history) console.log(`  [${h.at}] ${crewLib.routeLabel(h.route)} — ${h.reason ?? "no reason"} (by ${h.by})`);
    }
    return;
  }

  if (sub === "set") {
    const spec = positionals[2];
    if (!spec || !spec.includes(":")) return usage(ctx, "route", "route set needs <provider:model>", ["ace route set primary-backend openai:gpt-5 --reason 'quota exhausted'"]);
    const [provider, ...modelParts] = spec.split(":");
    const model = modelParts.join(":");
    const { adapter, ok, reason } = adapters.resolveAdapter("provider", provider);
    if (!ok) {
      ctx.writeStructuredError({ code: "INCOMPATIBLE_ADAPTER", message: reason, recoverable: true, suggestions: [`Known providers: ${Object.keys(adapters.ADAPTERS.provider).join(", ")}`] });
      process.exitCode = 2;
      return;
    }
    const health = adapter.health(process.env);
    if (!health.ok) {
      ctx.writeStructuredError({ code: "ROUTE_UNAVAILABLE", message: `refusing to set ${provider}:${model} — ${health.detail}`, recoverable: true, suggestions: ["Fix the credential or pick another provider; routes are validated before they are written"] });
      process.exitCode = 1;
      return;
    }
    if (isDryRun(flags)) {
      if (flags["--json"]) ctx.printJson({ command: "route set", dryRun: true, agent: agentId, route: `${provider}:${model}`, health: health.detail });
      else console.log(`would set ${agentId} → ${provider}:${model} (${health.detail})`);
      return;
    }
    const lease = rt.acquireLease(dir, `route:${agentId}`, { owner: "operator", ttlSeconds: effective.recovery?.lease_seconds ?? 120 });
    if (!lease.ok) {
      ctx.writeStructuredError({ code: "LEASE_HELD", message: lease.reason, recoverable: true, suggestions: ["Another recovery is already changing this route; concurrent mutations are refused"] });
      process.exitCode = 1;
      return;
    }
    let current = null;
    try {
      rt.writeCheckpoint(dir, { agent: agentId, note: "pre-route-change" });
      // Record what the route was before, so the history and the failover
      // counter reflect a real change rather than an unrecorded one.
      current = rt.readRoute(dir, agentId)?.route ?? chainFor(agentId)[0] ?? null;
      rt.writeRoute(dir, agentId, { provider, model, role: "operator", index: 0, primary: true }, {
        reason: typeof flags["--reason"] === "string" ? flags["--reason"] : "operator route change",
        by: typeof flags["--by"] === "string" ? flags["--by"] : "operator",
        previous: current,
      });
      rt.upsertAgent(dir, { id: agentId, route: { provider, model } });
    } finally {
      rt.releaseLease(dir, `route:${agentId}`, "operator");
    }
    const written = rt.readRoute(dir, agentId);
    if (flags["--json"]) {
      ctx.printJson({
        command: "route set",
        agent: agentId,
        route: written?.route ?? { provider, model },
        previous: current,
        switches: written?.switches ?? null,
      });
    } else {
      console.log(`${agentId} → ${provider}:${model}`);
    }
    return;
  }

  return usage(ctx, "route", `unknown route subcommand "${sub}"`, ["ace route show <agent>", "ace route set <agent> <provider:model>"]);
}

async function cmdHeartbeat(args, ctx) {
  const { flags } = parseArgs(args);
  const ws = workspace(ctx, "heartbeat");
  if (!ws) return;
  const { dir, effective } = ws;
  const agent = flags["--agent"];
  if (typeof agent !== "string") return usage(ctx, "heartbeat", "heartbeat needs --agent", ["ace heartbeat --agent primary-backend --status working --task task_123"]);

  let route = null;
  if (typeof flags["--route"] === "string" && flags["--route"].includes(":")) {
    const [provider, ...rest] = flags["--route"].split(":");
    route = { provider, model: rest.join(":") };
  }
  const status = typeof flags["--status"] === "string" ? flags["--status"] : "working";
  const hb = rt.writeHeartbeat(dir, {
    agent,
    role: typeof flags["--role"] === "string" ? flags["--role"] : undefined,
    project: typeof flags["--project"] === "string" ? flags["--project"] : effective.roles?.supervisors?.[0]?.project ?? "primary",
    status,
    task: typeof flags["--task"] === "string" ? flags["--task"] : null,
    route,
    // No pid claim by default: this process exits as soon as the heartbeat is
    // written, and claiming it would make the governor see a dead agent. A
    // long-lived agent passes --pid explicitly.
    pid: typeof flags["--pid"] === "string" ? Number.parseInt(flags["--pid"], 10) : null,
  });
  rt.upsertAgent(dir, { id: agent, role: hb.role ?? "worker", project: hb.project, status, task: hb.task ?? null, route, pid: hb.pid });
  if (flags["--json"]) ctx.printJson({ command: "heartbeat", heartbeat: hb });
  else console.log(`heartbeat ${hb.agent} (#${hb.sequence}) ${hb.status}${hb.task ? ` on ${hb.task}` : ""}`);
}

// ---------------------------------------------------------------------------
// watchdog
// ---------------------------------------------------------------------------

async function cmdWatchdog(args, ctx) {
  const { positionals, flags } = parseArgs(args);
  const sub = positionals[0] ?? "status";
  const ws = workspace(ctx, "watchdog");
  if (!ws) return;
  const { dir, effective } = ws;

  if (sub === "status") {
    const status = watchdogLib.watchdogStatus(dir, effective);
    if (flags["--json"]) return ctx.printJson({ command: "watchdog status", ...status });
    console.log(`watchdog: ${status.running ? `RUNNING (pid ${status.pid})` : status.enabled ? "armed, not running" : "disabled"}`);
    console.log(`  governor ${status.governor.agent}: ${status.governor.alive ? "alive" : "NOT ALIVE"}${status.governor.heartbeatAgeSeconds !== null ? `, heartbeat ${status.governor.heartbeatAgeSeconds}s ago` : ", no heartbeat"}`);
    console.log(`  route ${status.governor.routeLabel}`);
    console.log(`  restarts ${status.restarts}/${status.maxRestarts}, cooldown ${status.cooldownSeconds}s, cycles ${status.cycleCount}`);
    console.log(`  ${status.note}`);
    for (const e of status.escalations ?? []) console.log(`  ESCALATION ${e.code} — ${e.reason}`);
    return;
  }

  if (sub === "cycle") {
    const report = watchdogLib.watchdogCycle(dir, effective, { apply: !isDryRun(flags), nowMs: nowish(flags), env: process.env });
    if (flags["--json"]) return ctx.printJson(report);
    console.log(`watchdog cycle ${report.applied ? "" : "(dry run) "}at ${report.at}`);
    console.log(`  governor ${report.governor.alive ? "alive" : "NOT ALIVE"} — ${report.governor.routeLabel}`);
    if (!report.action) console.log("  no action needed");
    else console.log(`  action ${report.action.type}: ${report.action.ok ? "ok" : "not applied"} — ${report.action.reason}${report.action.delivered === false ? " (recorded, not delivered)" : ""}`);
    for (const e of report.escalations) console.log(`  ESCALATION ${e.code} — ${e.reason}`);
    for (const c of report.checksNotRun) console.log(`  not run: ${c}`);
    if (report.escalations.length) process.exitCode = 1;
    return;
  }

  if (sub === "on") {
    const result = watchdogLib.watchdogStart(dir, effective, {
      intervalSeconds: typeof flags["--interval"] === "string" ? Number.parseInt(flags["--interval"], 10) : undefined,
    });
    if (flags["--json"]) return ctx.printJson({ command: "watchdog on", ...result });
    console.log(result.spawned === false ? `watchdog armed (not spawned): ${result.reason ?? "spawn disabled"}` : `watchdog ON — pid ${result.pid}, every ${result.intervalSeconds}s`);
    return;
  }

  if (sub === "off") {
    const result = watchdogLib.watchdogStop(dir, effective);
    if (flags["--json"]) return ctx.printJson({ command: "watchdog off", ...result });
    console.log(result.wasRunning ? `watchdog OFF — stopped pid ${result.pid}` : "watchdog was not running");
    return;
  }

  if (sub === "run") {
    const json = Boolean(flags["--json"]);
    // Without --max-cycles this is a foreground loop that runs until it is
    // interrupted; with it, it stops after N cycles. Either way a cycle is
    // reported as it lands, one JSON document per cycle under --json — the
    // same shape `ace autopilot run` uses.
    const result = await watchdogLib.watchdogRun(dir, effective, {
      intervalSeconds: typeof flags["--interval"] === "string" ? Number.parseInt(flags["--interval"], 10) : undefined,
      maxCycles: typeof flags["--max-cycles"] === "string" ? Number.parseInt(flags["--max-cycles"], 10) : undefined,
      onCycle: (report, meta) => {
        if (json) {
          process.stdout.write(`${JSON.stringify({ command: "watchdog cycle", cycle: meta.cycle, report }, null, 2)}\n`);
          return;
        }
        const governor = report.governor ?? {};
        console.log(`watchdog cycle ${meta.cycle} at ${report.at}: governor ${governor.alive ? "alive" : "NOT ALIVE"} — ${governor.routeLabel ?? "no route"}`);
        if (!report.action) console.log("  no action needed");
        else console.log(`  action ${report.action.type}: ${report.action.ok ? "ok" : "not applied"}${report.action.delivered === false ? " (recorded, not delivered)" : ""} — ${report.action.reason}`);
        for (const e of report.escalations ?? []) console.log(`  ESCALATION ${e.code} — ${e.reason}`);
      },
    });
    if (!json) {
      console.log(`watchdog stopped after ${result.cycles} cycle(s), interval ${result.intervalSeconds}s — ${result.state}`);
    }
    return;
  }

  return usage(ctx, "watchdog", `unknown watchdog subcommand "${sub}"`, [
    "ace watchdog [status] | cycle [--dry-run] | on [--interval N] | off | run [--max-cycles N] [--json]",
    "run loops until interrupted; --max-cycles N bounds it; --json streams one document per cycle",
  ]);
}

// ---------------------------------------------------------------------------
// bots
// ---------------------------------------------------------------------------

async function cmdBots(args, ctx) {
  const { positionals, flags } = parseArgs(args);
  const sub = positionals[0] ?? "status";
  const ws = workspace(ctx, "bots");
  if (!ws) return;
  const { dir, effective } = ws;

  if (sub === "status") {
    const status = botsLib.botStatus(effective, process.env);
    if (flags["--json"]) return ctx.printJson({ command: "bots status", ...status });
    console.log(`management bots: ${status.enabled ? `ENABLED (${status.provider})` : "OFF (experimental — off by default)"}`);
    console.log(`  ready: ${status.ready ? "yes" : "no"} — ${status.reason}`);
    console.log(`  connection: ${status.connection.configured ? "configured" : "not configured"}${status.connection.detail ? ` — ${status.connection.detail}` : ""}`);
    console.log("  a bot can only submit work through ace's budget and policies; it never launches its own agents");
    return;
  }

  if (sub === "enable" || sub === "disable") {
    const enable = sub === "enable";
    const provider = enable ? positionals[1] ?? "gitbot" : null;
    if (enable && provider && !["gitbot", "opendots", "custom"].includes(provider)) {
      return usage(ctx, "bots", `unknown management-bot provider "${provider}"`, ["Providers: gitbot (default), opendots, custom"]);
    }
    const json = Boolean(flags["--json"]);
    if (isDryRun(flags)) {
      if (json) return ctx.printJson({ command: `bots ${sub}`, dryRun: true, enabled: enable, provider });
      console.log(enable ? `would enable ${provider} in the session override layer` : "would disable management bots in the session override layer");
      return;
    }
    const patch = enable
      ? { experimental: { management_bots: { enabled: true, provider } } }
      : { experimental: { management_bots: { enabled: false } } };
    configLib.writeSessionOverride(dir, patch);
    const after = configLib.resolveConfig({ dir });
    const verdict = configLib.validateEffective(after.effective, { layers: after.layers });
    const fix = verdict.ok
      ? null
      : "ace config set experimental.management_bots.endpoint=<url> (and identity, secret_ref, projects)";
    if (json) {
      ctx.printJson({
        command: `bots ${sub}`,
        dryRun: false,
        enabled: enable,
        provider: enable ? provider : null,
        layer: "session",
        valid: verdict.ok,
        errors: verdict.ok ? [] : verdict.errors,
        // Enabling is recorded even when settings are still missing, but the
        // endpoint stays closed and the exit code says an operator must finish.
        ready: botsLib.botStatus(after.effective).ready,
        fix,
      });
    } else {
      console.log(enable
        ? `management bots enabled for this workspace (${provider}) via the session override layer`
        : "management bots disabled (session override layer)");
      if (!verdict.ok) {
        console.log(`  ! the configuration does not validate — ${verdict.errors.length} problem(s); the intake endpoint stays closed`);
        for (const e of verdict.errors.slice(0, 6)) console.log(`    [${e.code}] ${e.where}: ${e.message}`);
        console.log(`  fix with: ${fix}`);
      }
    }
    // Exit 1 is the documented "an operator must act" code: an enabled intake
    // with missing settings accepts nothing, so this is not a success yet.
    if (!verdict.ok) process.exitCode = 1;
    return;
  }

  if (sub === "intake") {
    const file = flags["--file"];
    if (typeof file !== "string") return usage(ctx, "bots", "bots intake needs --file", ["ace bots intake --file request.json"]);
    if (!fs.existsSync(file)) {
      ctx.writeStructuredError({ code: "NO_SUCH_FILE", message: `request file not found: ${file}`, recoverable: true, suggestions: ["Provide the inbound request as JSON"] });
      process.exitCode = 2;
      return;
    }
    let request;
    try {
      request = JSON.parse(fs.readFileSync(file, "utf8"));
    } catch (err) {
      ctx.writeStructuredError({ code: "BAD_REQUEST", message: `request file is not valid JSON: ${err.message}`, recoverable: true, suggestions: ["A management-bot request is structured JSON"] });
      process.exitCode = 2;
      return;
    }
    const result = botsLib.intake(dir, effective, request, { apply: !isDryRun(flags) });
    if (flags["--json"]) ctx.printJson({ command: "bots intake", ...result });
    else if (result.accepted) console.log(`accepted ${result.taskId} for ${request.project} (from ${request.source})`);
    else console.log(`refused: ${result.code} — ${result.reason}`);
    if (!result.accepted) process.exitCode = 1;
    return;
  }

  if (sub === "inbox") {
    const records = botsLib.inbox(dir);
    if (flags["--json"]) return ctx.printJson({ command: "bots inbox", count: records.length, records });
    if (!records.length) return console.log("Bot inbox is empty.");
    for (const r of records) console.log(`  ${r.request_id} → ${r.taskId} (${r.source ?? "?"}, ${r.at ?? "?"})`);
    return;
  }

  if (sub === "deliver") {
    const { adapter, ok } = adapters.resolveAdapter("management-bot", effective.experimental?.management_bots?.provider ?? "gitbot");
    const deliverFn = ok
      ? () => ({ ok: false, detail: `no live transport is implemented for the ${adapter.name} management-bot adapter in this build — deliveries stay queued and are retried` })
      : () => ({ ok: false, detail: "no management-bot adapter is resolvable" });
    const result = botsLib.deliverPending(dir, effective, deliverFn, { nowMs: nowish(flags) });
    if (flags["--json"]) return ctx.printJson({ command: "bots deliver", ...result });
    console.log(`deliveries: attempted ${result.attempted}, delivered ${result.delivered}, failed ${result.failed}, gave up ${result.gaveUp}`);
    return;
  }

  return usage(ctx, "bots", `unknown bots subcommand "${sub}"`, [
    "ace bots [status] | enable <provider> | disable | intake --file <json> | inbox | deliver",
  ]);
}

// ---------------------------------------------------------------------------
// adapters
// ---------------------------------------------------------------------------

async function cmdAdapters(args, ctx) {
  const { positionals, flags } = parseArgs(args);
  const sub = positionals[0] ?? "list";
  const dir = process.cwd();

  if (sub === "audit") {
    const rows = adapters.auditRegistry();
    if (flags["--json"]) return ctx.printJson({ command: "adapters audit", ok: rows.every((r) => r.ok), rows });
    console.log(`adapter contract audit: ${rows.every((r) => r.ok) ? "OK" : "FAIL"} (${rows.length} adapters)`);
    for (const r of rows.filter((r) => !r.ok)) console.log(`  ✗ ${r.kind}:${r.name} missing ${r.missing.join(", ")}`);
    if (!rows.every((r) => r.ok)) process.exitCode = 1;
    return;
  }

  if (sub === "health") {
    const resolved = ctx.workspaceInitialized(dir) ? configLib.resolveConfig({ dir }) : { effective: configLib.defaultConfig() };
    const rows = adapters.healthAll(resolved.effective, process.env);
    if (flags["--json"]) return ctx.printJson({ command: "adapters health", ok: rows.every((r) => r.ok), rows });
    for (const r of rows) console.log(`  ${r.ok ? "✓" : "✗"} ${r.kind}:${r.provider} (${r.where}) — ${r.detail}`);
    return;
  }

  const kind = typeof flags["--kind"] === "string" ? flags["--kind"] : null;
  const kinds = kind ? [kind] : adapters.ADAPTER_KINDS;
  const rows = kinds.flatMap((k) =>
    adapters.listAdapters(k).map((a) => ({ kind: k, name: a.name, capabilities: a.capabilities.join(", "), requiresEnv: a.requiresEnv.join(", ") || "—", describe: a.describe }))
  );
  if (flags["--json"]) return ctx.printJson({ command: "adapters list", kinds, adapters: rows });
  ctx.printTable(rows, [
    { header: "KIND", key: "kind" },
    { header: "PROVIDER", key: "name" },
    { header: "CAPABILITIES", key: "capabilities" },
    { header: "CREDENTIALS", key: "requiresEnv" },
  ]);
  console.log("  swap any of these through the ace key: adapters.<kind>.provider");
}

// ---------------------------------------------------------------------------
// dispatcher
// ---------------------------------------------------------------------------

/**
 * A machine-readable governance snapshot: the read-only surface a UI or an
 * operator dashboard can consume, and the payload behind `ace status --json`.
 * Never contains a credential.
 */
export function governanceSnapshot(dir) {
  const resolved = configLib.resolveConfig({ dir });
  const effective = resolved.effective;
  const crew = crewLib.buildCrew(effective);
  const agents = rt.getAgentRecords(dir);
  const occupancy = crewLib.computeOccupancy(effective, agents);
  const tasks = rt.listTaskRecords(dir);
  const heartbeats = rt.readHeartbeats(dir);
  const byStatus = {};
  for (const task of tasks) byStatus[task.status] = (byStatus[task.status] ?? 0) + 1;

  return {
    at: new Date().toISOString(),
    goal: {
      statement: effective.goal?.statement ?? null,
      milestones: effective.goal?.milestones ?? [],
      tasksDone: (byStatus.done ?? 0) + (byStatus.integrated ?? 0),
      tasksOpen: (byStatus.pending ?? 0) + (byStatus.assigned ?? 0) + (byStatus.in_progress ?? 0) + (byStatus.review ?? 0) + (byStatus.blocked ?? 0),
    },
    crew: {
      governor: { id: crew.governor.id, scope: crew.governor.scope, route: crewLib.routeLabel(crew.governor.route[0]) },
      supervisors: crew.supervisors.map((s) => ({ id: s.id, project: s.project, workspace: s.workspace, route: crewLib.routeLabel(rt.readRoute(dir, s.id)?.route ?? s.route[0]) })),
      workers: crew.workers.map((w) => ({ id: w.id, role: w.role, project: w.project })),
    },
    live: agents.map((a) => ({
      id: a.id,
      role: a.kind ?? a.role,
      status: a.status,
      project: a.project,
      runtime: a.runtime,
      task: a.task,
      route: a.route ? crewLib.routeLabel(a.route) : null,
    })),
    budget: {
      limit: occupancy.limit,
      occupied: occupancy.occupied,
      available: occupancy.available,
      byRuntime: occupancy.byRuntime,
      runtimeCaps: occupancy.runtimeCaps,
      countsGovernor: occupancy.countsGovernor,
      countsSupervisors: occupancy.countsSupervisors,
    },
    tasks: { total: tasks.length, byStatus, pending: rt.pendingTasks(dir).map((t) => t.id) },
    heartbeats: heartbeats.map((hb) => ({ agent: hb.agent, status: hb.status, task: hb.task, ageSeconds: rt.heartbeatAgeSeconds(hb) })),
    watchdog: watchdogLib.watchdogStatus(dir, effective),
    bots: botsLib.botStatus(effective, process.env),
    adapters: adapters.healthAll(effective, process.env).map((a) => ({ kind: a.kind, provider: a.provider, ok: a.ok, detail: a.detail })),
    configuration: {
      valid: validationOf(resolved).ok,
      errors: validationOf(resolved).errors.map((e) => ({ code: e.code, where: e.where, message: e.message, fix: e.fix })),
      layers: configLib.LAYER_ORDER.filter((name) => resolved.layers[name] !== null),
      security: resolved.security,
    },
  };
}

const HANDLERS = {
  config: cmdConfig,
  crew: cmdCrew,
  govern: cmdGovern,
  supervise: cmdSupervise,
  task: cmdTask,
  handoff: cmdHandoff,
  route: cmdRoute,
  heartbeat: cmdHeartbeat,
  watchdog: cmdWatchdog,
  bots: cmdBots,
  adapters: cmdAdapters,
};

export const COMMANDS = Object.keys(HANDLERS);

export async function run(command, args, ctx) {
  const handler = HANDLERS[command];
  if (!handler) {
    ctx.writeStructuredError({
      code: "COMMAND_NOT_FOUND",
      message: `Unknown governance command: ${command}`,
      recoverable: true,
      suggestions: [`Known: ${COMMANDS.join(", ")}`],
    });
    process.exitCode = 2;
    return;
  }
  try {
    await handler(args, ctx);
  } catch (err) {
    ctx.writeStructuredError({
      code: "COMMAND_FAILED",
      message: `${command}: ${(err && err.message) || err}`,
      recoverable: false,
      suggestions: ["Re-run with --json for structured output", "ace doctor reports environment problems"],
    });
    process.exitCode = 1;
  }
}
