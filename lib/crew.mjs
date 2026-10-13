/**
 * lib/crew.mjs — roles, the central concurrency budget, model/provider routes,
 * the Governor → Supervisor → Worker communication boundary, and write scopes.
 *
 * This module is pure: it takes a resolved configuration plus a roster of
 * live agents and returns verdicts. It never touches the filesystem, so it is
 * deterministic and testable without a workspace.
 *
 * Zero dependencies. Node builtins only.
 */

import path from "node:path";

export const ROLE_GOVERNOR = "governor";
export const ROLE_SUPERVISOR = "supervisor";
export const ROLE_WORKER = "worker";

export const ACTIVE_STATUSES = ["working", "starting", "restarting"];
export const INACTIVE_STATUSES = ["idle", "done", "stopped", "failed", "blocked"];

// ---------------------------------------------------------------------------
// roster
// ---------------------------------------------------------------------------

/**
 * Build the crew from the effective config.
 *   { governor, supervisors[], workers[], projects[] }
 * each entry carries its id, role, project, runtime, route chain and owner.
 */
export function buildCrew(config) {
  const defaults = config?.models?.default ?? { provider: "local", model: "local" };
  const governorCfg = config?.roles?.governor ?? {};
  const runtimeDefault = config?.adapters?.["agent-runtime"]?.provider ?? "local";

  const governor = {
    id: "governor",
    role: ROLE_GOVERNOR,
    scope: governorCfg.scope ?? "environment",
    runtime: governorCfg.runtime ?? config?.orchestrator?.runtime ?? runtimeDefault,
    route: routeChain(config, ROLE_GOVERNOR, null, defaults),
    heartbeatSeconds: governorCfg.heartbeat_seconds ?? config?.recovery?.stale_heartbeat_seconds ?? 90,
    idleMode: governorCfg.idle_mode ?? "monitor",
    countsTowardBudget: config?.concurrency?.count_governor === true,
  };

  const supervisorEntries = Array.isArray(config?.roles?.supervisors) && config.roles.supervisors.length > 0
    ? config.roles.supervisors
    : [{ role: ROLE_SUPERVISOR, project: "primary", workspace: "." }];

  const supervisors = supervisorEntries.map((sup, i) => {
    const project = sup.project ?? `project-${i + 1}`;
    return {
      id: sup.id ?? `${project}-supervisor`,
      role: ROLE_SUPERVISOR,
      project,
      runtime: sup.runtime ?? runtimeDefault,
      workspace: sup.workspace ?? ".",
      route: routeChain(config, ROLE_SUPERVISOR, project, defaults),
      heartbeatSeconds: sup.heartbeat_seconds ?? config?.recovery?.stale_heartbeat_seconds ?? 90,
      countsTowardBudget: config?.concurrency?.count_supervisors === true,
    };
  });

  // `roles.workers` is the governance view; `agents.workers` is the ace/v1
  // native declaration that `ace init` scaffolds. Governance extends the
  // package, so it must read both rather than silently seeing no workers.
  const workerEntries = Array.isArray(config?.roles?.workers) && config.roles.workers.length > 0
    ? config.roles.workers
    : Array.isArray(config?.agents?.workers)
      ? config.agents.workers
      : [];
  const workers = workerEntries.map((worker, i) => {
    const project = worker.project ?? supervisors[0]?.project ?? "primary";
    const owner = supervisors.find((s) => s.project === project) ?? supervisors[0] ?? null;
    return {
      id: worker.id ?? `${project}-${worker.role ?? `worker-${i + 1}`}`,
      role: worker.role ?? `worker-${i + 1}`,
      kind: ROLE_WORKER,
      project,
      supervisor: owner ? owner.id : null,
      runtime: worker.runtime ?? runtimeDefault,
      route: routeChain(config, ROLE_WORKER, project, defaults, worker.role),
      countsTowardBudget: true,
    };
  });

  const projects = supervisors.map((s) => ({
    project: s.project,
    supervisor: s.id,
    workspace: s.workspace,
    workers: workers.filter((w) => w.project === s.project).map((w) => w.id),
  }));

  return { governor, supervisors, workers, projects };
}

/** Does this config declare any worker at all? Used to warn, not to block. */
export function declaredWorkerCount(config) {
  if (Array.isArray(config?.roles?.workers) && config.roles.workers.length > 0) return config.roles.workers.length;
  return Array.isArray(config?.agents?.workers) ? config.agents.workers.length : 0;
}

// ---------------------------------------------------------------------------
// model / provider routes
// ---------------------------------------------------------------------------

/**
 * The ordered route chain for a role: primary first, then fallbacks.
 * Accepts either `models.routes.<role>` = [sel, ...] or
 * { primary: sel, fallbacks: [sel, ...] }. Falls back to models.default.
 */
export function routeChain(config, role, project = null, defaults = null, workerRole = null) {
  const routes = config?.models?.routes ?? {};
  const keys = [];
  if (workerRole && project) keys.push(`${project}.${workerRole}`);
  if (workerRole) keys.push(workerRole);
  if (project) keys.push(`${project}.${role}`);
  keys.push(role);

  const sel = keys.map((k) => routes[k]).find((v) => v !== undefined);
  let chain = [];
  if (Array.isArray(sel)) chain = sel;
  else if (sel && typeof sel === "object") chain = [sel.primary, ...(sel.fallbacks ?? [])];
  chain = chain.filter((s) => s && typeof s === "object" && typeof s.model === "string");

  const base = defaults ?? config?.models?.default ?? { provider: "local", model: "local" };
  if (chain.length === 0) {
    return [normaliseSelection(base, role, 0)];
  }
  return chain.map((s, i) => normaliseSelection({ ...base, ...s }, role, i));
}

function normaliseSelection(sel, role, index) {
  return {
    provider: sel.provider ?? "local",
    model: sel.model,
    role,
    index,
    primary: index === 0,
  };
}

/** The next usable route after `current`, or null when the chain is exhausted. */
export function nextRoute(chain, current) {
  if (!Array.isArray(chain) || chain.length === 0) return null;
  if (!current) return chain.length > 1 ? chain[1] : null;
  const i = chain.findIndex((r) => r.provider === current.provider && r.model === current.model);
  if (i === -1) return chain[0];
  return i + 1 < chain.length ? chain[i + 1] : null;
}

/** One-line route label, safe to print (never contains a credential). */
export function routeLabel(route) {
  if (!route) return "n/a";
  return `${route.provider}:${route.model}`;
}

// ---------------------------------------------------------------------------
// the central concurrency budget
// ---------------------------------------------------------------------------

/**
 * The budget in force: a single global limit, optional per-runtime caps, and
 * whether each role counts toward it. Four is the default, not a ceiling.
 */
export function budget(config) {
  const c = config?.concurrency ?? {};
  return {
    limit: Number.isInteger(c.max_active_agents) ? c.max_active_agents : 4,
    countGovernor: c.count_governor === true,
    countSupervisors: c.count_supervisors === true,
    runtimeOverrides: { ...(c.runtime_overrides ?? {}) },
    enforceAcrossRuntimes: c.enforce_across_runtimes !== false,
  };
}

function countsTowardBudget(agent, b) {
  const role = agent.role ?? agent.kind;
  if (role === ROLE_GOVERNOR) return b.countGovernor;
  if (role === ROLE_SUPERVISOR) return b.countSupervisors;
  return true;
}

function isActive(agent) {
  return ACTIVE_STATUSES.includes(agent.status ?? "idle");
}

/**
 * Centralised occupancy: counts every active agent across every runtime,
 * because separate runtimes must not each spend the project budget.
 *   { limit, occupied, available, counted[], ignored[], byRuntime{}, runtimeCaps, refusals[] }
 */
export function computeOccupancy(config, agents = []) {
  const b = budget(config);
  const counted = [];
  const ignored = [];
  const byRuntime = {};

  for (const agent of agents) {
    const runtime = agent.runtime ?? "local";
    if (!isActive(agent)) {
      ignored.push({ id: agent.id, reason: `status ${agent.status ?? "idle"} is not active` });
      continue;
    }
    if (!countsTowardBudget(agent, b)) {
      ignored.push({ id: agent.id, reason: `${agent.role ?? agent.kind} does not count toward the worker budget` });
      continue;
    }
    counted.push({ id: agent.id, role: agent.role ?? agent.kind, runtime });
    byRuntime[runtime] = (byRuntime[runtime] ?? 0) + 1;
  }

  const runtimeCaps = b.runtimeOverrides;
  const runtimeAvailable = {};
  const refusals = [];
  for (const [runtime, cap] of Object.entries(runtimeCaps)) {
    const used = byRuntime[runtime] ?? 0;
    runtimeAvailable[runtime] = Math.max(0, cap - used);
    if (used > cap) refusals.push({ runtime, code: "RUNTIME_CAP_EXCEEDED", used, cap });
  }

  return {
    limit: b.limit,
    occupied: counted.length,
    available: Math.max(0, b.limit - counted.length),
    counted,
    ignored,
    byRuntime,
    runtimeCaps,
    runtimeAvailable,
    refusals,
    countsGovernor: b.countGovernor,
    countsSupervisors: b.countSupervisors,
    enforceAcrossRuntimes: b.enforceAcrossRuntimes,
  };
}

/**
 * May a new agent of this role/runtime start?
 * Both the global limit and any per-runtime cap must pass — that is what
 * "enforced centrally across all runtimes" means here.
 */
export function canStart(config, agents, candidate) {
  const occ = computeOccupancy(config, agents);
  const runtime = candidate?.runtime ?? "local";
  const b = budget(config);

  if (b.enforceAcrossRuntimes === false) {
    return { allowed: true, reason: "concurrency.enforce_across_runtimes is false — budget not enforced", occupancy: occ };
  }

  const cap = b.runtimeOverrides[runtime];
  if (cap !== undefined) {
    const used = occ.byRuntime[runtime] ?? 0;
    if (used >= cap) {
      return {
        allowed: false,
        code: "RUNTIME_CAP_REACHED",
        reason: `runtime "${runtime}" is at its configured cap (${used}/${cap})`,
        occupancy: occ,
      };
    }
  }

  if (occ.occupied >= occ.limit) {
    return {
      allowed: false,
      code: "BUDGET_EXHAUSTED",
      reason: `active-agent limit reached (${occ.occupied}/${occ.limit}); raise concurrency.max_active_agents to run more`,
      occupancy: occ,
    };
  }

  return { allowed: true, reason: `${occ.occupied + 1}/${occ.limit} active after start`, occupancy: occ };
}

// ---------------------------------------------------------------------------
// the Governor boundary
// ---------------------------------------------------------------------------

/**
 * Routing policy, enforced in code rather than by prompt.
 *
 *   governor → supervisor   allowed (the only management path the governor has)
 *   governor → worker       REFUSED — the governor requests worker action
 *                           through the responsible supervisor
 *   supervisor → worker     allowed (for its own project)
 *   supervisor → governor   allowed (status reports)
 *   worker → anyone         allowed (handoff reports)
 *
 * Cross-project messages are refused unless context.sharing is "shared".
 */
/**
 * The governance role of an agent, independent of how it is named.
 * A worker's `role` is its specialty ("backend"), and its governance role is
 * carried in `role: "worker"` or `kind`; a policy that compared literal role
 * names would let a specialist slip past the governor boundary.
 */
export function governanceRole(agent) {
  if (!agent) return null;
  if (agent.role === ROLE_GOVERNOR || agent.kind === ROLE_GOVERNOR) return ROLE_GOVERNOR;
  if (agent.role === ROLE_SUPERVISOR || agent.kind === ROLE_SUPERVISOR) return ROLE_SUPERVISOR;
  return ROLE_WORKER;
}

export function checkRoute(from, to, config = null) {
  if (!from || !to) {
    return { allowed: false, code: "BAD_ROUTE", reason: "route requires a from and a to agent" };
  }
  const sharing = config?.context?.sharing ?? "isolated";
  const fromRole = governanceRole(from);
  const toRole = governanceRole(to);

  if (fromRole === ROLE_GOVERNOR && toRole === ROLE_WORKER) {
    return {
      allowed: false,
      code: "GOVERNOR_WORKER_BOUNDARY",
      reason: `the governor must not message workers directly (${from.id} → ${to.id}); request action from the worker's supervisor instead`,
    };
  }

  if (fromRole === ROLE_WORKER && toRole === ROLE_WORKER && from.project !== to.project && sharing !== "shared") {
    return {
      allowed: false,
      code: "CROSS_PROJECT_DENIED",
      reason: `cross-project message refused (${from.project} → ${to.project}); set context.sharing to "shared" to allow it`,
    };
  }

  // context.sharing enables cross-project context and peer messages; it never
  // transfers ownership, so a supervisor still may not direct another
  // project's worker.
  if (fromRole === ROLE_SUPERVISOR && toRole === ROLE_WORKER && to.project && from.project && to.project !== from.project) {
    return {
      allowed: false,
      code: "CROSS_PROJECT_DENIED",
      reason: `supervisor ${from.id} owns ${from.project} and may not direct ${to.id} (${to.project})`,
    };
  }

  return { allowed: true, code: null, reason: `allowed: ${from.role} → ${to.role}` };
}

/**
 * The governor's management path: given a worker, who must it ask?
 * Returns the owning supervisor entry, or a refusal when the crew is
 * malformed (a worker with no supervisor is an escalation, not a shortcut).
 */
export function supervisorFor(crew, workerId) {
  const worker = crew.workers.find((w) => w.id === workerId);
  if (!worker) return { ok: false, reason: `unknown worker "${workerId}"`, code: "UNKNOWN_WORKER" };
  const supervisor = crew.supervisors.find((s) => s.id === worker.supervisor) ?? crew.supervisors.find((s) => s.project === worker.project);
  if (!supervisor) return { ok: false, reason: `worker "${workerId}" has no supervisor — escalate to the operator`, code: "ORPHAN_WORKER" };
  return { ok: true, supervisor };
}

// ---------------------------------------------------------------------------
// isolation
// ---------------------------------------------------------------------------

/**
 * Is `target` inside the workspace a task owns? Terminal panes are not a
 * security boundary, so this check is enforced before any recorded write and
 * is the same check `enforcePolicies` uses for filesystem.scope.
 */
export function checkWriteScope(workspaceRoot, target, { crossProjectRoots = [] } = {}) {
  if (typeof target !== "string" || target.length === 0) {
    return { allowed: false, code: "NO_PATH", reason: "a write needs an explicit path" };
  }
  const root = path.resolve(workspaceRoot);
  const abs = path.resolve(root, target);

  for (const other of crossProjectRoots) {
    if (!other) continue;
    const otherRoot = path.resolve(other);
    if (otherRoot === root) continue;
    if (abs === otherRoot || abs.startsWith(otherRoot + path.sep)) {
      return {
        allowed: false,
        code: "CROSS_PROJECT_WRITE",
        reason: `refused: ${abs} belongs to another project (${otherRoot}); work in your own workspace`,
      };
    }
  }

  if (abs !== root && !abs.startsWith(root + path.sep)) {
    return { allowed: false, code: "OUT_OF_SCOPE_WRITE", reason: `refused: ${abs} is outside the assigned workspace ${root}` };
  }

  return { allowed: true, code: null, reason: `within ${root}` };
}

/** Every project root other than `keep`, for cross-project write refusal. */
export function projectRoots(crew, baseDir, keep = null) {
  return crew.supervisors
    .filter((s) => s.project !== keep)
    .map((s) => (path.isAbsolute(s.workspace) ? s.workspace : path.resolve(baseDir, s.workspace)))
    .filter((root) => root !== path.resolve(baseDir));
}
