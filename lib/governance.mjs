/**
 * lib/governance.mjs — the Governor and Supervisor loops.
 *
 * Governor: keeps the environment moving toward each project's declared goal.
 * It checks supervisor liveness *and* evidence-backed progress, detects
 * unusable routes, recovers or replaces a supervisor's route, requests
 * diagnosis through the affected supervisor, escalates what it cannot recover,
 * and never talks to a worker directly.
 *
 * Supervisor: owns its project's execution — assigns bounded tasks, monitors
 * its own workers, switches their routes, verifies handoffs and integrates.
 *
 * Both cycles take an optional `verifyChecks(dir, only)` callback so the
 * verification mechanism stays swappable and tests stay deterministic.
 *
 * Zero dependencies. Node builtins only.
 */

import {
  buildCrew,
  canStart,
  checkWriteScope,
  computeOccupancy,
  nextRoute,
  routeLabel,
} from "./crew.mjs";
import { resolveAdapter } from "./adapters/index.mjs";
import * as rt from "./runtime.mjs";

export const DETECTION_CODES = [
  "SUPERVISOR_ABSENT",
  "SUPERVISOR_STALE",
  "SUPERVISOR_DEAD",
  "NO_PROGRESS",
  "ROUTE_UNAVAILABLE",
  "MISSING_CREDENTIAL",
  "CHAIN_EXHAUSTED",
  "BUDGET_EXHAUSTED",
  "DUPLICATE_OWNERSHIP",
  "TASK_STALLED",
  "REPEATED_FAILURE",
  "GOAL_UNREACHABLE",
  "ORPHAN_WORKER",
];

const severityRank = { critical: 3, high: 2, medium: 1, low: 0 };

// ---------------------------------------------------------------------------
// helpers
// ---------------------------------------------------------------------------

function liveRoute(dir, agent, fallback) {
  const recorded = rt.readRoute(dir, agent)?.route;
  return recorded ?? fallback ?? null;
}

function routeHealth(route, env) {
  if (!route) return { ok: false, detail: "no route configured" };
  const { adapter, ok, reason } = resolveAdapter("provider", route.provider);
  if (!ok) return { ok: false, detail: reason };
  try {
    return adapter.health(env) ?? { ok: true, detail: "no probe" };
  } catch (err) {
    return { ok: false, detail: String((err && err.message) || err) };
  }
}

/** Deliverable? Only a real multiplexer can be handed a message; local/fake cannot. */
function deliverability(config) {
  const provider = config?.adapters?.multiplexer?.provider ?? "none";
  const { adapter, ok, reason } = resolveAdapter("multiplexer", provider);
  if (!ok) return { delivered: false, provider, reason };
  if (["none", "fake"].includes(adapter.name)) {
    return { delivered: false, provider, reason: `multiplexer "${adapter.name}" cannot carry a message; the request is recorded in .ace/actions.jsonl` };
  }
  return { delivered: false, provider, reason: `multiplexer "${adapter.name}" is configured but no live delivery is wired in this build; the request is recorded` };
}

/**
 * Evidence that a supervisor is actually progressing — not merely breathing.
 * A fresh heartbeat with no task movement and no new events is NO progress.
 */
function progressEvidence(dir, supervisor, { nowMs, windowSeconds, tasks }) {
  const since = nowMs - windowSeconds * 1000;
  const events = rt.readEvents(dir).filter((ev) => {
    const at = Date.parse(ev.timestamp ?? "");
    return Number.isFinite(at) && at >= since;
  });
  const mine = events.filter(
    (ev) => ev.actor === supervisor.id || ev.metadata?.project === supervisor.project,
  );
  const moved = tasks.filter((t) => {
    if (supervisor.project && t.project && t.project !== supervisor.project) return false;
    const updated = Date.parse(t.updatedAt ?? "");
    return Number.isFinite(updated) && updated >= since;
  });
  const completed = tasks.filter((t) => t.status === "done" || t.status === "integrated");
  return {
    advanced: mine.length > 0 || moved.length > 0,
    events: mine.length,
    taskUpdates: moved.length,
    tasksCompleted: completed.length,
    windowSeconds,
  };
}

/** Which recovery decisions are still allowed by the bounding rules. */
function recoveryWindow(dir, subject, config, nowMs) {
  const actions = rt.readActions(dir, 200).filter((a) => a.subject === subject);
  const route = rt.readRoute(dir, subject);
  const restarts = actions.filter((a) => a.type === "route.replace" || a.type === "restart").length;
  const last = actions.length ? Date.parse(actions[actions.length - 1].at ?? "") : NaN;
  const cooldown = (config?.recovery?.cooldown_seconds ?? 60) * 1000;
  const inCooldown = Number.isFinite(last) && nowMs - last < cooldown;
  const maxRestarts = config?.recovery?.max_restarts ?? 3;
  const maxSwitches = config?.recovery?.max_route_switches ?? 3;
  const switches = route?.switches ?? 0;
  return {
    restarts,
    switches,
    inCooldown,
    maxRestarts,
    maxSwitches,
    canAct: !inCooldown && restarts < maxRestarts && switches < maxSwitches,
    reason: inCooldown
      ? `cooldown active (${Math.round((cooldown - (nowMs - last)) / 1000)}s remaining)`
      : restarts >= maxRestarts
        ? `restart budget exhausted (${restarts}/${maxRestarts})`
        : switches >= maxSwitches
          ? `route-switch budget exhausted (${switches}/${maxSwitches})`
          : null,
  };
}

// ---------------------------------------------------------------------------
// governor
// ---------------------------------------------------------------------------

/**
 * One governor cycle.
 *
 * opts:
 *   apply      — when false, decisions are computed and reported but nothing
 *                is written (used by `ace govern --dry-run` and tests)
 *   nowMs      — deterministic clock
 *   crew       — prebuilt crew (defaults to buildCrew(config))
 *   verifyChecks — injected verification runner
 *   env        — environment for credential/health probes
 */
export function governorCycle(dir, config, opts = {}) {
  const nowMs = opts.nowMs ?? Date.now();
  const env = opts.env ?? process.env;
  const apply = opts.apply !== false;
  const crew = opts.crew ?? buildCrew(config);
  const staleSeconds = config?.recovery?.stale_heartbeat_seconds ?? 90;
  const windowSeconds = config?.recovery?.progress_window_seconds ?? 900;

  const heartbeats = new Map(rt.readHeartbeats(dir).map((hb) => [hb.agent, hb]));
  const agents = rt.getAgentRecords(dir);
  const tasks = rt.listTaskRecords(dir);
  const adapters = deliverability(config);

  const supervisors = crew.supervisors.map((sup) => {
    const hb = heartbeats.get(sup.id) ?? null;
    const age = rt.heartbeatAgeSeconds(hb, nowMs);
    const record = agents.find((a) => a.id === sup.id) ?? null;
    const pidAlive = record?.pid ? rt.processAlive(record.pid) : null;
    const responsive = Boolean(hb) && age !== null && age <= staleSeconds;
    // A fresh heartbeat file left behind by a process that has since died is
    // exactly the false positive this check exists to catch: liveness needs
    // both a recent heartbeat and, when a pid was recorded, a live process.
    const alive = responsive && pidAlive !== false;
    const route = liveRoute(dir, sup.id, sup.route?.[0] ?? null);
    const health = routeHealth(route, env);
    return {
      id: sup.id,
      project: sup.project,
      alive,
      responsive,
      heartbeatAgeSeconds: age,
      pid: record?.pid ?? null,
      pidAlive,
      status: record?.status ?? (hb ? hb.status : "absent"),
      route,
      routeLabel: routeLabel(route),
      routeHealth: health,
      chain: sup.route ?? [],
      evidence: progressEvidence(dir, sup, { nowMs, windowSeconds, tasks }),
      recovery: recoveryWindow(dir, sup.id, config, nowMs),
    };
  });

  const detections = [];
  for (const sup of supervisors) {
    if (!sup.heartbeatAgeSeconds && sup.status === "absent") {
      detections.push({
        code: "SUPERVISOR_ABSENT",
        severity: "high",
        subject: sup.id,
        project: sup.project,
        detail: `no heartbeat and no agent record for supervisor ${sup.id}`,
      });
    } else if (sup.alive === false) {
      const dead = sup.pidAlive === false;
      detections.push({
        code: dead ? "SUPERVISOR_DEAD" : "SUPERVISOR_STALE",
        severity: dead ? "critical" : "high",
        subject: sup.id,
        project: sup.project,
        detail: dead
          ? `supervisor process pid ${sup.pid} is gone`
          : `last heartbeat ${sup.heartbeatAgeSeconds}s ago (threshold ${staleSeconds}s)`,
      });
    } else if (!sup.evidence.advanced) {
      detections.push({
        code: "NO_PROGRESS",
        severity: "medium",
        subject: sup.id,
        project: sup.project,
        detail: `heartbeat is fresh but no task movement or events in the last ${windowSeconds}s`,
      });
    }
    if (!sup.routeHealth.ok) {
      detections.push({
        code: "ROUTE_UNAVAILABLE",
        severity: "high",
        subject: sup.id,
        project: sup.project,
        detail: `route ${sup.routeLabel} is unusable: ${sup.routeHealth.detail}`,
      });
    }
    if (sup.chain.length <= 1 && !sup.routeHealth.ok) {
      detections.push({
        code: "CHAIN_EXHAUSTED",
        severity: "critical",
        subject: sup.id,
        project: sup.project,
        detail: `no fallback route is configured for ${sup.id}; add models.routes.supervisor.fallbacks`,
      });
    }
    if (sup.recovery.canAct === false && (sup.alive === false || !sup.routeHealth.ok)) {
      detections.push({
        code: "REPEATED_FAILURE",
        severity: "critical",
        subject: sup.id,
        project: sup.project,
        detail: `recovery is bounded out: ${sup.recovery.reason}`,
      });
    }
  }

  for (const worker of crew.workers) {
    if (!worker.supervisor) {
      detections.push({
        code: "ORPHAN_WORKER",
        severity: "high",
        subject: worker.id,
        project: worker.project,
        detail: `worker ${worker.id} has no supervisor — the governor will not manage it directly`,
      });
    }
  }

  const occupancy = computeOccupancy(config, agents);
  if (occupancy.refusals.length > 0) {
    for (const refusal of occupancy.refusals) {
      detections.push({
        code: "BUDGET_EXHAUSTED",
        severity: "medium",
        subject: refusal.runtime,
        detail: `runtime ${refusal.runtime} exceeds its cap (${refusal.used}/${refusal.cap})`,
      });
    }
  }

  // duplicate ownership: one task, two live claimants
  const byOwner = new Map();
  for (const task of tasks) {
    if (!["assigned", "in_progress"].includes(task.status) || !task.owner) continue;
    byOwner.set(task.owner, [...(byOwner.get(task.owner) ?? []), task.id]);
  }
  for (const task of tasks) {
    if (!["assigned", "in_progress"].includes(task.status)) continue;
    const owners = [task.owner, task.claimants].flat().filter(Boolean);
    const distinct = new Set(owners);
    if (distinct.size > 1) {
      detections.push({
        code: "DUPLICATE_OWNERSHIP",
        severity: "critical",
        subject: task.id,
        project: task.project,
        detail: `task ${task.id} has multiple claimants: ${[...distinct].join(", ")}`,
      });
    }
    const updated = Date.parse(task.updatedAt ?? "");
    if (Number.isFinite(updated) && nowMs - updated > windowSeconds * 1000) {
      detections.push({
        code: "TASK_STALLED",
        severity: "medium",
        subject: task.id,
        project: task.project,
        detail: `task ${task.id} has not moved in ${Math.round((nowMs - updated) / 1000)}s (owner ${task.owner ?? "none"})`,
      });
    }
  }

  const actions = [];
  const escalations = [];

  for (const detection of detections) {
    const liveness = ["SUPERVISOR_DEAD", "SUPERVISOR_STALE", "SUPERVISOR_ABSENT"].includes(detection.code);
    if (liveness || detection.code === "ROUTE_UNAVAILABLE") {
      const sup = supervisors.find((s) => s.id === detection.subject);
      if (!sup) continue;
      // A silent supervisor on a healthy route is a liveness problem and needs
      // a restart; a supervisor whose route is unusable needs a route switch.
      // Conflating them produces recovery actions that cannot work.
      const decision = liveness && sup.routeHealth.ok
        ? planRestart(dir, config, sup, { nowMs, apply, deliver: opts.deliver, env })
        : planRouteRecovery(dir, config, sup, { nowMs, apply, env });
      actions.push(decision);
      if (decision.escalate) escalations.push(decision.escalate);
    }
    if (detection.code === "NO_PROGRESS") {
      const sup = supervisors.find((s) => s.id === detection.subject);
      if (!sup) continue;
      const request = {
        type: "request_diagnosis",
        subject: sup.id,
        project: sup.project,
        reason: detection.detail,
        detail: detection.detail,
        delivered: adapters.delivered,
        delivery: adapters.reason,
        at: new Date(nowMs).toISOString(),
      };
      if (apply) {
        rt.journalAction(dir, request);
        rt.appendEvent(dir, {
          id: `evt_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
          timestamp: new Date(nowMs).toISOString(),
          type: "governor.request_diagnosis",
          actor: "governor",
          task: null,
          metadata: { supervisor: sup.id, detail: detection.detail, delivered: adapters.delivered },
        });
      }
      actions.push({ ...request, ok: true, planned: !apply });
    }
    if (["REPEATED_FAILURE", "CHAIN_EXHAUSTED", "DUPLICATE_OWNERSHIP", "ORPHAN_WORKER", "GOAL_UNREACHABLE"].includes(detection.code)) {
      escalations.push({
        subject: detection.subject,
        project: detection.project,
        code: detection.code,
        reason: detection.detail,
        needsOperator: true,
        at: new Date(nowMs).toISOString(),
      });
    }
  }

  const goal = goalStatus(dir, config, tasks);

  const report = {
    command: "govern",
    at: new Date(nowMs).toISOString(),
    applied: apply,
    scope: crew.governor.scope,
    goal,
    supervisors,
    detections,
    actions,
    escalations,
    budget: {
      limit: occupancy.limit,
      occupied: occupancy.occupied,
      available: occupancy.available,
      byRuntime: occupancy.byRuntime,
      runtimeCaps: occupancy.runtimeCaps,
      countsGovernor: occupancy.countsGovernor,
      countsSupervisors: occupancy.countsSupervisors,
    },
    adapters: { multiplexer: config?.adapters?.multiplexer?.provider ?? "none", delivery: adapters.reason },
    checksNotRun: checksNotRun(config, opts),
  };
  // `ok` means "nothing here needs an operator": a detection that was acted on
  // successfully is not an open problem, but an unanswered one is.
  const recoveredSubjects = new Set(actions.filter((a) => a.ok).map((a) => a.subject));
  const unresolved = detections.filter(
    (d) => severityRank[d.severity] >= severityRank.high && !recoveredSubjects.has(d.subject),
  );
  report.unresolvedDetections = unresolved.map((d) => `${d.code}:${d.subject}`);
  report.ok = escalations.length === 0 && unresolved.length === 0;

  if (apply) {
    rt.journalAction(dir, {
      type: "governor.cycle",
      subject: crew.governor.id,
      detections: detections.map((d) => d.code),
      actions: actions.map((a) => `${a.type}:${a.subject}`),
      escalations: escalations.length,
      ok: report.ok,
    });
  }
  return report;
}

/**
 * Route recovery for one supervisor: checkpoint, take the route lease, switch
 * to the next validated route in the chain, release. A route is only switched
 * when the replacement passes validation (provider known, credentials present,
 * model declared) — otherwise the governor escalates instead of pretending.
 */
function planRouteRecovery(dir, config, sup, { nowMs, apply, env = process.env }) {
  const subject = sup.id;
  const current = sup.route;
  const next = nextRoute(sup.chain, current);

  const base = { subject, project: sup.project, from: routeLabel(current), at: new Date(nowMs).toISOString() };

  if (sup.recovery.canAct === false) {
    const escalate = { ...base, code: "REPEATED_FAILURE", reason: sup.recovery.reason, needsOperator: true };
    return { ...base, type: "escalate", ok: false, escalate, reason: sup.recovery.reason, planned: !apply };
  }

  if (!next) {
    const escalate = { ...base, code: "CHAIN_EXHAUSTED", reason: `no fallback route left for ${subject}`, needsOperator: true };
    return { ...base, type: "escalate", ok: false, escalate, reason: escalate.reason, planned: !apply };
  }

  const health = routeHealth(next, env);
  if (!health.ok) {
    const escalate = { ...base, code: "ROUTE_UNAVAILABLE", reason: `fallback route ${routeLabel(next)} is also unusable: ${health.detail}`, needsOperator: true };
    return { ...base, type: "escalate", ok: false, escalate, reason: escalate.reason, planned: !apply, checked: routeLabel(next) };
  }

  if (!apply) {
    return { ...base, type: "route.replace", to: routeLabel(next), ok: true, planned: true, reason: `planned: ${routeLabel(current)} → ${routeLabel(next)}` };
  }

  // Preserve recoverable state before changing the route.
  rt.writeCheckpoint(dir, { agent: subject, route: next, note: `pre-failover from ${routeLabel(current)}` });
  const lease = rt.acquireLease(dir, `route:${subject}`, {
    owner: "governor",
    ttlSeconds: config?.recovery?.lease_seconds ?? 120,
    nowMs,
  });
  if (!lease.ok) {
    return { ...base, type: "route.replace", to: routeLabel(next), ok: false, code: "LEASE_HELD", reason: lease.reason, planned: false };
  }
  try {
    rt.writeRoute(dir, subject, next, {
      reason: `route ${routeLabel(current)} unusable: ${sup.routeHealth.detail}`,
      by: "governor",
      previous: current,
      checks: { provider: next.provider, model: next.model, health: health.detail },
    });
    const action = rt.journalAction(dir, { type: "route.replace", subject, from: routeLabel(current), to: routeLabel(next), cause: sup.routeHealth.detail });
    return { ...base, type: "route.replace", to: routeLabel(next), ok: true, reason: `switched ${routeLabel(current)} → ${routeLabel(next)}`, journaled: action.at };
  } finally {
    rt.releaseLease(dir, `route:${subject}`, "governor");
  }
}

/**
 * Liveness recovery for one supervisor: restart it through the configured
 * runtime controls. Delivery is honest — with no delivery function, or with a
 * runtime that cannot start an agent, nothing is restarted and the cycle
 * escalates rather than claiming a recovery that did not happen.
 */
function planRestart(dir, config, sup, { nowMs, apply, deliver, env = process.env }) {
  const subject = sup.id;
  const base = {
    subject,
    project: sup.project,
    at: new Date(nowMs).toISOString(),
    from: sup.routeLabel ?? null,
  };

  if (sup.recovery.canAct === false) {
    return {
      ...base,
      type: "restart",
      ok: false,
      planned: !apply,
      reason: sup.recovery.reason,
      escalate: { ...base, code: "REPEATED_FAILURE", reason: sup.recovery.reason, needsOperator: true },
    };
  }

  if (!apply) {
    // A dry run predicts the real outcome: with no way to deliver a restart, a
    // real cycle escalates, so the preview does too. It still writes nothing.
    const deliverable = typeof deliver === "function";
    const preview = {
      ...base,
      type: "restart",
      ok: deliverable,
      planned: true,
      delivered: false,
      reason: deliverable
        ? `planned: restart ${subject}`
        : "planned: the restart is not deliverable, so a real cycle escalates to the operator",
    };
    if (!deliverable) {
      preview.escalate = {
        ...base,
        code: "SUPERVISOR_UNRECOVERED",
        reason: `supervisor ${subject} is not running and cannot be restarted automatically`,
        needsOperator: true,
      };
    }
    return preview;
  }

  rt.writeCheckpoint(dir, { agent: subject, route: sup.route, note: "pre-restart checkpoint" });

  let delivery = {
    ok: false,
    detail: "no delivery function was provided — start it with the configured runtime controls or by hand",
  };
  if (typeof deliver === "function") {
    try {
      delivery = deliver({ action: { type: "restart", subject }, governor: sup, config }) ?? delivery;
    } catch (err) {
      delivery = { ok: false, detail: String((err && err.message) || err) };
    }
  }

  rt.journalAction(dir, {
    type: "restart",
    subject,
    delivered: Boolean(delivery.ok),
    detail: delivery.detail ?? null,
    cause: sup.status,
  });

  const action = {
    ...base,
    type: "restart",
    ok: Boolean(delivery.ok),
    delivered: Boolean(delivery.ok),
    reason: delivery.ok
      ? `restarted ${subject}: ${delivery.detail ?? "delivered"}`
      : `restart recorded but not delivered — ${delivery.detail}`,
  };
  if (!delivery.ok) {
    action.escalate = {
      ...base,
      code: "SUPERVISOR_UNRECOVERED",
      reason: `supervisor ${subject} is ${sup.status === "absent" ? "not running" : `not responding (status ${sup.status})`} and could not be restarted automatically`,
      needsOperator: true,
    };
  }
  return action;
}

function goalStatus(dir, config, tasks) {
  const statement = config?.goal?.statement ?? null;
  const milestones = Array.isArray(config?.goal?.milestones) ? config.goal.milestones : [];
  const done = tasks.filter((t) => t.status === "done" || t.status === "integrated").length;
  const open = tasks.filter((t) => ["pending", "assigned", "in_progress", "review", "blocked"].includes(t.status)).length;
  return {
    statement,
    milestones,
    tasksDone: done,
    tasksOpen: open,
    aligned: statement === null ? "no goal declared — set goal.statement in the ace key" : open === 0 && done > 0 ? "goal reached" : "in progress",
  };
}

function checksNotRun(config, opts) {
  const notRun = [];
  if (!opts.verifyChecks) notRun.push("workspace verification (no verifyChecks runner was injected into this cycle)");
  const provider = config?.adapters?.multiplexer?.provider ?? "none";
  if (provider === "none" || provider === "fake") notRun.push(`live agent dispatch (multiplexer provider "${provider}")`);
  notRun.push("provider quota and usage APIs (no quota endpoint is integrated in this build)");
  return notRun;
}

// ---------------------------------------------------------------------------
// supervisor
// ---------------------------------------------------------------------------

/**
 * One supervisor cycle for a project: assign, monitor, switch worker routes,
 * verify handoffs, integrate.
 *
 * opts: { project, apply, nowMs, verifyChecks(dir, check), env }
 */
export function supervisorCycle(dir, config, opts = {}) {
  const nowMs = opts.nowMs ?? Date.now();
  const apply = opts.apply !== false;
  const env = opts.env ?? process.env;
  const crew = opts.crew ?? buildCrew(config);
  const project = opts.project ?? crew.supervisors[0]?.project ?? "primary";
  const supervisor = crew.supervisors.find((s) => s.project === project) ?? crew.supervisors[0];

  const heartbeats = new Map(rt.readHeartbeats(dir).map((hb) => [hb.agent, hb]));
  const agents = rt.getAgentRecords(dir);
  const tasks = rt.listTaskRecords(dir).filter((t) => !t.project || t.project === project);
  const workers = crew.workers.filter((w) => w.project === project);
  const staleSeconds = config?.recovery?.stale_heartbeat_seconds ?? 90;

  const workerReports = workers.map((worker) => {
    const hb = heartbeats.get(worker.id) ?? null;
    const age = rt.heartbeatAgeSeconds(hb, nowMs);
    const record = agents.find((a) => a.id === worker.id) ?? null;
    const route = liveRoute(dir, worker.id, worker.route?.[0] ?? null);
    const status = record?.status ?? (hb ? hb.status : "absent");
    const pidDead = record?.pid ? !rt.processAlive(record.pid) : false;
    // A worker that has never reported is not "unresponsive" — it has not
    // started. Only a worker with a live claim or a stale heartbeat is
    // treated as needing a route change.
    const everReported = Boolean(hb) || (record && ["working", "starting", "restarting"].includes(record.status));
    const state = ["working", "starting"].includes(status)
      ? "working"
      : status === "blocked"
        ? "blocked"
        : status === "failed"
          ? "failed"
          : status === "done"
            ? "done"
            : "waiting";
    return {
      id: worker.id,
      role: worker.role,
      status,
      state,
      heartbeatAgeSeconds: age,
      stale: everReported && (pidDead || age === null || age > staleSeconds),
      pidDead,
      task: record?.task ?? hb?.task ?? null,
      route,
      routeLabel: routeLabel(route),
      chain: worker.route ?? [],
    };
  });

  const assignments = [];
  const routeChanges = [];
  const blockers = [];
  const verifications = [];

  // 1. assign bounded tasks to idle workers
  for (const task of tasks) {
    if (!["pending", "assigned"].includes(task.status)) continue;
    if (task.owner) continue;
    const idle = workerReports.filter((w) => w.state === "waiting" && !w.task);
    const target = idle.find((w) => task.required_role && w.role === task.required_role) ?? idle[0] ?? null;
    if (!target) {
      blockers.push({ code: "NO_IDLE_WORKER", subject: task.id, detail: `task ${task.id} is waiting and every worker in ${project} is busy` });
      continue;
    }
    if (!validScope(task, supervisor)) continue;
    if (!apply) {
      assignments.push({ task: task.id, worker: target.id, planned: true, ok: true });
      continue;
    }
    const claim = rt.claimTask(dir, task.id, {
      agent: target.id,
      project,
      workspace: task.workspace ?? supervisor.workspace,
      ttlSeconds: config?.recovery?.lease_seconds ?? 120,
      nowMs,
    });
    if (!claim.ok) {
      blockers.push({ code: claim.code, subject: task.id, detail: claim.reason });
      continue;
    }
    rt.upsertAgent(dir, { id: target.id, task: task.id, status: "assigned", project });
    rt.journalAction(dir, { type: "task.assigned", subject: task.id, worker: target.id, project, by: supervisor.id });
    assignments.push({ task: task.id, worker: target.id, ok: true });
  }

  // 2. monitor workers; the supervisor owns worker route choices
  for (const worker of workerReports) {
    if (!worker.stale) continue;
    if (worker.status === "absent" && !worker.task) continue;
    const next = nextRoute(worker.chain, worker.route);
    if (!next) {
      blockers.push({ code: "CHAIN_EXHAUSTED", subject: worker.id, detail: `worker ${worker.id} is unresponsive and its route chain has no fallback` });
      continue;
    }
    const health = routeHealth(next, env);
    if (!health.ok) {
      blockers.push({ code: "ROUTE_UNAVAILABLE", subject: worker.id, detail: `fallback ${routeLabel(next)} unusable: ${health.detail}` });
      continue;
    }
    if (!apply) {
      routeChanges.push({ worker: worker.id, from: routeLabel(worker.route), to: routeLabel(next), planned: true, ok: true });
      continue;
    }
    rt.writeCheckpoint(dir, { agent: worker.id, task: worker.task, note: `pre-failover from ${routeLabel(worker.route)}` });
    const lease = rt.acquireLease(dir, `route:${worker.id}`, {
      owner: supervisor.id,
      ttlSeconds: config?.recovery?.lease_seconds ?? 120,
      nowMs,
    });
    if (!lease.ok) {
      blockers.push({ code: "LEASE_HELD", subject: worker.id, detail: lease.reason });
      continue;
    }
    try {
      rt.writeRoute(dir, worker.id, next, {
        reason: `worker ${worker.id} unresponsive (heartbeat age ${worker.heartbeatAgeSeconds ?? "unknown"}s)`,
        by: supervisor.id,
        previous: worker.route,
      });
      rt.upsertAgent(dir, { id: worker.id, status: "restarting", route: next });
      routeChanges.push({ worker: worker.id, from: routeLabel(worker.route), to: routeLabel(next), ok: true });
    } finally {
      rt.releaseLease(dir, `route:${worker.id}`, supervisor.id);
    }
  }

  // 3. verify handoffs in review, then integrate and re-run checks
  for (const task of tasks.filter((t) => t.status === "review")) {
    const handoff = rt.readHandoff(dir, task.id);
    const verdict = rt.verifyHandoff(handoff);
    const entry = {
      task: task.id,
      attempt: handoff?.attempt ?? null,
      from: handoff?.from ?? null,
      accepted: verdict.ok,
      errors: verdict.errors,
      warnings: verdict.warnings,
    };
    if (!verdict.ok) {
      verifications.push(entry);
      blockers.push({ code: "HANDOFF_REJECTED", subject: task.id, detail: verdict.errors.join("; ") });
      continue;
    }
    if (!apply) {
      verifications.push({ ...entry, planned: true });
      continue;
    }
    rt.setTaskStatus(dir, task.id, "integrated", { by: supervisor.id, detail: `handoff attempt ${handoff.attempt} verified` });
    const checks = typeof opts.verifyChecks === "function" ? runChecks(opts.verifyChecks, dir, config) : null;
    entry.checks = checks;
    if (checks && !checks.ok) {
      // The handoff was valid but the integrated workspace does not pass.
      // Ownership is retained and the task returns to active work, so the same
      // worker fixes it — releasing the claim here would orphan the rework.
      rt.setTaskStatus(dir, task.id, "in_progress", {
        by: supervisor.id,
        detail: "integration checks failed after merge — rework required",
        patch: { integration: { ok: false, at: new Date(nowMs).toISOString(), attempt: handoff.attempt, checks } },
      });
      blockers.push({ code: "INTEGRATION_CHECK_FAILED", subject: task.id, detail: "the workspace checks failed after integration" });
    } else {
      rt.setTaskStatus(dir, task.id, "done", { by: supervisor.id, detail: "integrated and verified" });
      rt.releaseTask(dir, task.id, { agent: task.owner, reason: "completed" });
    }
    verifications.push(entry);
  }

  const report = {
    command: "supervise",
    at: new Date(nowMs).toISOString(),
    applied: apply,
    supervisor: supervisor?.id ?? null,
    project,
    workspace: supervisor?.workspace ?? ".",
    workers: workerReports,
    assignments,
    routeChanges,
    verifications,
    blockers,
    budget: computeOccupancy(config, agents) && {
      limit: computeOccupancy(config, agents).limit,
      occupied: computeOccupancy(config, agents).occupied,
      available: computeOccupancy(config, agents).available,
    },
    goal: goalStatus(dir, config, tasks),
    checksNotRun: [
      ...(opts.verifyChecks ? [] : ["workspace verification (no verifyChecks runner injected)"]),
      ...(apply ? [] : ["no state was written (dry run)"]),
    ],
  };
  report.ok = blockers.length === 0;

  if (apply) {
    rt.journalAction(dir, {
      type: "supervisor.cycle",
      subject: supervisor?.id ?? project,
      assignments: assignments.length,
      routeChanges: routeChanges.length,
      blockers: blockers.length,
      ok: report.ok,
    });
  }
  return report;
}

function validScope(task, supervisor) {
  const workspace = task.workspace ?? supervisor?.workspace;
  if (!workspace) return true;
  const check = checkWriteScope(workspace, ".", { crossProjectRoots: [] });
  return check.allowed;
}

function runChecks(verifyChecks, dir, config) {
  const wanted = config?.verification?.checks ?? ["lint", "typecheck", "test", "build"];
  const results = wanted.map((name) => {
    try {
      const r = verifyChecks(dir, name);
      const check = r?.checks?.find((c) => c.name === name) ?? r?.checks?.[0];
      return { name, ok: Boolean(check?.ok), configured: Boolean(check?.configured), exitCode: check?.exitCode ?? null };
    } catch (err) {
      return { name, ok: false, configured: true, error: String((err && err.message) || err) };
    }
  });
  return { ok: results.every((r) => r.ok), checks: results };
}

/** Should a worker of this runtime be allowed to start right now? */
export function budgetVerdict(dir, config, candidate) {
  return canStart(config, rt.getAgentRecords(dir), candidate);
}
