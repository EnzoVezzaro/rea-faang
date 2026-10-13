/**
 * exp-007-ace — lib/runtime.mjs
 *
 * Runtime state, context, events and lifecycle for the ACE package.
 * Zero dependencies. All state lives under <dir>/.ace/.
 *
 * Specification (what should exist) is separate from state (what does exist).
 * This module only ever touches state.
 */

import {
  appendFileSync,
  closeSync,
  existsSync,
  mkdirSync,
  openSync,
  readdirSync,
  readFileSync,
  renameSync,
  statSync,
  unlinkSync,
  writeFileSync,
} from "node:fs";
import { join, resolve, sep } from "node:path";
import { execFileSync } from "node:child_process";
import os from "node:os";

const VALID_STATUS = ["created", "installed", "ready", "running", "paused", "stopped"];

const EMPTY_STATE = () => ({
  status: "unknown",
  active: null,
  agents: [],
  tasks: [],
  updatedAt: null,
});

function aceDir(dir) {
  return join(dir, ".ace");
}

function readJsonFile(path) {
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch {
    return null;
  }
}

function writeJsonFile(path, obj) {
  writeFileSync(path, JSON.stringify(obj, null, 2) + "\n", "utf8");
}

function nowIso() {
  return new Date().toISOString();
}

/** Run git with a timeout; return stdout trimmed, or null on any failure. */
function git(args, cwd) {
  try {
    return execFileSync("git", args, {
      cwd,
      timeout: 30000,
      stdio: ["ignore", "pipe", "pipe"],
      encoding: "utf8",
    }).trim();
  } catch {
    return null;
  }
}

function gitVersion() {
  const out = git(["--version"], process.cwd());
  if (!out) return "2.x";
  const m = /(\d+)\.(\d+)/.exec(out);
  return m ? `${m[1]}.${m[2]}` : "2.x";
}

// ---------------------------------------------------------------------------
// lifecycle
// ---------------------------------------------------------------------------

export function initState(dir) {
  const ace = aceDir(dir);
  for (const sub of ["agents", "tasks", "context", "snapshots"]) {
    mkdirSync(join(ace, sub), { recursive: true });
  }
  const state = {
    status: "created",
    active: null,
    agents: [],
    tasks: [],
    updatedAt: nowIso(),
  };
  writeJsonFile(join(ace, "state.json"), state);
}

export function getState(dir) {
  const state = readJsonFile(join(aceDir(dir), "state.json"));
  if (!state) return EMPTY_STATE();
  return {
    status: state.status ?? "unknown",
    active: state.active ?? null,
    agents: Array.isArray(state.agents) ? state.agents : [],
    tasks: Array.isArray(state.tasks) ? state.tasks : [],
    updatedAt: state.updatedAt ?? null,
  };
}

export function setStatus(dir, status) {
  if (!VALID_STATUS.includes(status)) {
    throw new Error(
      `setStatus: invalid status "${status}" — must be one of ${VALID_STATUS.join("|")}`,
    );
  }
  const ace = aceDir(dir);
  const prev = readJsonFile(join(ace, "state.json")) ?? {};
  const state = {
    status,
    active: prev.active ?? null,
    agents: Array.isArray(prev.agents) ? prev.agents : [],
    tasks: Array.isArray(prev.tasks) ? prev.tasks : [],
    updatedAt: nowIso(),
  };
  writeJsonFile(join(ace, "state.json"), state);
}

// ---------------------------------------------------------------------------
// events
// ---------------------------------------------------------------------------

export function appendEvent(dir, ev) {
  if (!ev || typeof ev !== "object") {
    throw new Error("appendEvent: ev must be an object");
  }
  for (const k of ["id", "timestamp", "type", "actor"]) {
    if (typeof ev[k] !== "string" || ev[k].length === 0) {
      throw new Error(`appendEvent: ev.${k} must be a non-empty string`);
    }
  }
  const ace = aceDir(dir);
  mkdirSync(ace, { recursive: true });
  // The journal is an artifact other agents read, so anything secret-shaped is
  // redacted before it is written. Event shape itself is unchanged.
  const safe = { ...ev, metadata: redactSecrets(dir, ev.metadata ?? {}) };
  const line = JSON.stringify(safe) + "\n";
  appendFileSync(join(ace, "events.jsonl"), line, "utf8");
}

// ---------------------------------------------------------------------------
// agents / tasks
// ---------------------------------------------------------------------------

function readRecords(dir, sub, map) {
  const base = join(aceDir(dir), sub);
  if (!existsSync(base)) return [];
  const out = [];
  for (const name of readdirSync(base)) {
    if (!name.endsWith(".json")) continue;
    const rec = readJsonFile(join(base, name));
    if (!rec) continue;
    out.push(map(rec));
  }
  return out;
}

export function getAgents(dir) {
  return readRecords(dir, "agents", (r) => ({
    id: r.id ?? null,
    role: r.role ?? null,
    status: r.status ?? "idle",
    task: r.task ?? null,
    startedAt: r.startedAt ?? null,
    lastActivity: r.lastActivity ?? null,
  }));
}

export function getTasks(dir) {
  return readRecords(dir, "tasks", (r) => ({
    id: r.id ?? null,
    title: r.title ?? null,
    status: r.status ?? "pending",
    assignedTo: r.assignedTo ?? null,
    priority: r.priority ?? "normal",
    createdAt: r.createdAt ?? null,
  }));
}

// ---------------------------------------------------------------------------
// context
// ---------------------------------------------------------------------------

export function getContext(dir) {
  const branch = git(["rev-parse", "--abbrev-ref", "HEAD"], dir) ?? "";
  const commit = git(["rev-parse", "HEAD"], dir) ?? "";
  const pkg = readJsonFile(join(dir, "package.json"));
  const ace = pkg?.ace ?? {};
  return {
    host: { os: process.platform, arch: process.arch },
    runtime: { provider: "local" },
    project: { languages: [], frameworks: [] },
    git: { branch, commit },
    tools: Array.isArray(ace.tools) ? ace.tools : [],
    resources: { cpu: os.cpus().length, memory: os.totalmem() },
  };
}

// ---------------------------------------------------------------------------
// snapshots
// ---------------------------------------------------------------------------

export function snapshot(dir) {
  const ace = aceDir(dir);
  const id = "snap_" + Date.now();
  const state = readJsonFile(join(ace, "state.json")) ?? EMPTY_STATE();
  let spec = null;
  const specPath = join(dir, "package.json");
  if (existsSync(specPath)) {
    try {
      spec = JSON.parse(readFileSync(specPath, "utf8"))?.ace ?? null;
    } catch {
      spec = null;
    }
  }
  const snap = {
    id,
    at: nowIso(),
    spec,
    state,
    git: {
      branch: git(["rev-parse", "--abbrev-ref", "HEAD"], dir) ?? "",
      commit: git(["rev-parse", "HEAD"], dir) ?? "",
    },
  };
  mkdirSync(join(ace, "snapshots"), { recursive: true });
  writeJsonFile(join(ace, "snapshots", `${id}.json`), snap);
  return snap;
}

// ---------------------------------------------------------------------------
// phase 9 — restart reconciliation
// ---------------------------------------------------------------------------

export function processAlive(pid) {
  if (pid === null || pid === undefined || typeof pid !== "number") return false;
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}

/**
 * Reconcile durable state after a restart.
 *
 * Rules, applied in order:
 *   1. An agent recorded as active whose process is gone becomes `interrupted`
 *      — never silently "working".
 *   2. A lease that has expired is released (the owner is no longer live).
 *   3. A task owned by an interrupted agent is released back to `pending` for
 *      another attempt while attempts remain, otherwise it fails visibly.
 *   4. Nothing is deleted: history, evidence and checkpoints survive.
 *
 * Returns a report a supervisor can act on, and journals every change.
 */
export function reconcile(dir, { nowMs = Date.now(), by = "runtime" } = {}) {
  const report = { at: nowIso(), agents: [], tasks: [], leases: [], actions: [] };

  for (const lease of listLeases(dir)) {
    const expiresAt = Date.parse(lease.expiresAt ?? "");
    if (!Number.isFinite(expiresAt) || expiresAt <= nowMs) {
      const released = releaseLease(dir, lease.name, lease.owner);
      if (released.released) {
        report.leases.push({ name: lease.name, owner: lease.owner, reason: "expired" });
        report.actions.push(journalAction(dir, { type: "lease.expired", subject: lease.name, owner: lease.owner, by }));
      }
    }
  }

  const interrupted = new Set();
  for (const agent of getAgentRecords(dir)) {
    const active = ["working", "starting", "restarting"].includes(agent.status);
    if (!active) continue;
    if (processAlive(agent.pid)) {
      report.agents.push({ id: agent.id, action: "kept", reason: `pid ${agent.pid} is alive` });
      continue;
    }
    interrupted.add(agent.id);
    upsertAgent(dir, { id: agent.id, status: "interrupted" });
    report.agents.push({ id: agent.id, action: "interrupted", reason: agent.pid ? `pid ${agent.pid} is gone` : "no pid recorded" });
    appendEvent(dir, {
      id: `evt_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      timestamp: nowIso(),
      type: "agent.interrupted",
      actor: by,
      task: agent.task ?? null,
      metadata: { agent: agent.id, task: agent.task ?? null },
    });
    report.actions.push(journalAction(dir, { type: "agent.interrupted", subject: agent.id, by }));
  }

  const liveIds = new Set(
    getAgentRecords(dir)
      .filter((a) => ["working", "starting", "restarting", "idle"].includes(a.status))
      .map((a) => a.id),
  );

  for (const task of listTaskRecords(dir)) {
    if (!["assigned", "in_progress", "review"].includes(task.status)) continue;
    const ownerGone = task.owner && !liveIds.has(task.owner);
    if (!ownerGone) continue;
    releaseLease(dir, `task:${task.id}`, task.owner);
    const retryable = task.attempt < (task.max_attempts ?? 3);
    const moved = setTaskStatus(dir, task.id, retryable ? "pending" : "failed", {
      by,
      detail: retryable ? `owner ${task.owner} interrupted — returned to the queue for attempt ${task.attempt + 1}` : `owner ${task.owner} interrupted and attempts are exhausted`,
      patch: { owner: null, ownerRole: null },
    });
    report.tasks.push({ id: task.id, action: retryable ? "requeued" : "failed", owner: task.owner, ok: moved.ok });
    if (moved.ok) report.actions.push(journalAction(dir, { type: retryable ? "task.requeued" : "task.failed", subject: task.id, owner: task.owner, by }));
  }

  return report;
}

export function restore(dir, snapshotId) {
  const path = join(aceDir(dir), "snapshots", `${snapshotId}.json`);
  if (!existsSync(path)) {
    throw new Error(`restore: snapshot not found at ${path}`);
  }
  const snap = readJsonFile(path);
  if (!snap || !snap.state) {
    throw new Error(`restore: snapshot at ${path} has no state`);
  }
  const state = {
    ...snap.state,
    updatedAt: nowIso(),
  };
  writeJsonFile(join(aceDir(dir), "state.json"), state);
}

// ---------------------------------------------------------------------------
// phase 8 — advanced runtime
// ---------------------------------------------------------------------------

export function readEvents(dir, limit = Infinity) {
  const p = join(aceDir(dir), "events.jsonl");
  if (!existsSync(p)) return [];
  const events = [];
  for (const line of readFileSync(p, "utf8").split(/\r?\n/)) {
    if (!line.trim()) continue;
    try { events.push(JSON.parse(line)); } catch { /* skip malformed */ }
  }
  return Number.isFinite(limit) ? events.slice(-limit) : events;
}

function getPolicies(dir) {
  const p = join(dir, "package.json");
  if (!existsSync(p)) return {};
  try {
    return readJsonFile(p)?.ace ?? {};
  } catch {
    return {};
  }
}

// --- recover ---
export function recover(dir) {
  const ace = aceDir(dir);
  mkdirSync(join(ace, "agents"), { recursive: true });
  mkdirSync(join(ace, "tasks"), { recursive: true });
  const events = readEvents(dir);
  const agents = [];
  const tasks = [];
  let active = null;
  for (const ev of events) {
    const md = ev.metadata ?? {};
    switch (ev.type) {
      case "agent.spawned": {
        const id = md.agent ?? md.id ?? ev.id;
        agents.push({ id, role: md.role ?? "worker", status: md.status ?? "idle", task: md.task ?? null, startedAt: ev.timestamp, lastActivity: ev.timestamp });
        break;
      }
      case "task.created": {
        const id = md.task ?? md.id ?? ev.id;
        tasks.push({ id, title: md.title ?? id, status: md.status ?? "pending", assignedTo: md.assignedTo ?? null, priority: md.priority ?? "normal", createdAt: ev.timestamp });
        break;
      }
      case "agent.task_assigned": {
        const a = agents.find((x) => x.id === md.agent);
        if (a) { a.task = md.task ?? null; a.lastActivity = ev.timestamp; }
        break;
      }
      case "agent.status_changed": case "agent.stopped": {
        const a = agents.find((x) => x.id === md.agent);
        if (a) { a.status = md.status ?? a.status; a.lastActivity = ev.timestamp; }
        break;
      }
      case "task.status_changed": case "task.completed": {
        const t = tasks.find((x) => x.id === md.task);
        if (t) { t.status = md.status ?? t.status; }
        break;
      }
      case "orchestrator.started": {
        active = { agent: ev.actor ?? "orchestrator", role: "orchestrator", status: "working", task: md.task ?? null, startedAt: ev.timestamp };
        break;
      }
    }
  }
  writeJsonFile(join(ace, "state.json"), { status: "recovering", active, agents, tasks, updatedAt: nowIso() });
  setStatus(dir, "ready");
  return getState(dir);
}

// --- trackResources ---
function getDiskUsage(dir) {
  try {
    const out = execFileSync("df", ["-k", "-P", dir], { timeout: 10000, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
    const lines = out.trim().split("\n");
    if (lines.length < 2) return null;
    const cols = lines[1].trim().split(/\s+/);
    const availKb = Number(cols[3]);
    return Number.isFinite(availKb) ? availKb * 1024 : null;
  } catch { return null; }
}

export function trackResources(dir) {
  const ace = aceDir(dir);
  mkdirSync(join(ace, "context"), { recursive: true });
  const cur = process.cpuUsage();
  const prevPath = join(ace, "context", "resources.json");
  const prev = readJsonFile(prevPath);
  const delta = prev && prev.cpu ? { user: cur.user - (prev.cpu.user || 0), system: cur.system - (prev.cpu.system || 0) } : null;
  const rec = {
    cpu: { user: cur.user, system: cur.system, total: cur.user + cur.system, delta },
    memoryUsed: os.totalmem() - os.freemem(),
    memoryTotal: os.totalmem(),
    disk: getDiskUsage(dir),
    at: nowIso(),
  };
  writeJsonFile(prevPath, rec);
  return rec;
}

// ---------------------------------------------------------------------------
// phase 9 — leases: single-owner coordination for tasks and route changes
// ---------------------------------------------------------------------------

function leasesDir(dir) {
  return join(aceDir(dir), "leases");
}

export function readLease(dir, name) {
  return readJsonFile(join(leasesDir(dir), `${name}.json`));
}

export function listLeases(dir) {
  if (!existsSync(leasesDir(dir))) return [];
  return readdirSync(leasesDir(dir))
    .filter((n) => n.endsWith(".json"))
    .map((n) => readJsonFile(join(leasesDir(dir), n)))
    .filter(Boolean);
}

/**
 * Acquire a lease, or refuse because somebody else holds it.
 * A lease is the mechanism that prevents two owners acting on one task and
 * two agents mutating the same route at once. Expired leases are reclaimable;
 * a lease held by the same owner is refreshed (that is a re-entrant renew).
 */
export function acquireLease(dir, name, { owner, ttlSeconds = 120, nowMs = Date.now(), noWait = 0 } = {}) {
  if (typeof owner !== "string" || owner.length === 0) throw new Error("acquireLease: owner is required");
  mkdirSync(leasesDir(dir), { recursive: true });
  const p = join(leasesDir(dir), `${name}.json`);
  const existing = readJsonFile(p);
  if (existing && existing.owner !== owner) {
    const expiresAt = Date.parse(existing.expiresAt ?? "");
    const live = Number.isFinite(expiresAt) && expiresAt > nowMs;
    if (live && noWait >= 0) {
      return {
        ok: false,
        code: "LEASE_HELD",
        lease: existing,
        reason: `lease "${name}" is held by ${existing.owner} until ${existing.expiresAt}`,
      };
    }
  }
  const lease = {
    name,
    owner,
    acquiredAt: existing && existing.owner === owner ? existing.acquiredAt ?? nowIso() : nowIso(),
    renewedAt: nowIso(),
    expiresAt: new Date(nowMs + ttlSeconds * 1000).toISOString(),
    ttlSeconds,
  };
  // Write-then-rename so a reader never sees a half-written lease.
  const tmp = `${p}.${process.pid}.tmp`;
  writeFileSync(tmp, JSON.stringify(lease, null, 2) + "\n", "utf8");
  renameSync(tmp, p);
  return { ok: true, lease };
}

export function releaseLease(dir, name, owner = null) {
  const p = join(leasesDir(dir), `${name}.json`);
  const existing = readJsonFile(p);
  if (!existing) return { ok: true, released: false, reason: "no lease held" };
  if (owner && existing.owner !== owner) {
    return { ok: false, released: false, code: "NOT_LEASE_OWNER", reason: `lease "${name}" is held by ${existing.owner}, not ${owner}` };
  }
  unlinkSync(p);
  return { ok: true, released: true };
}

// ---------------------------------------------------------------------------
// phase 9 — durable tasks: ownership, attempts, evidence
// ---------------------------------------------------------------------------

export const TASK_STATUSES = [
  "pending",
  "assigned",
  "in_progress",
  "blocked",
  "review",
  "integrated",
  "done",
  "failed",
  "cancelled",
];

/** Legal transitions. Anything else is refused, so state cannot drift. */
export const TASK_TRANSITIONS = {
  pending: ["assigned", "failed", "cancelled"],
  assigned: ["in_progress", "pending", "failed", "cancelled"],
  in_progress: ["review", "blocked", "failed", "cancelled"],
  blocked: ["in_progress", "pending", "failed", "cancelled"],
  review: ["integrated", "in_progress", "failed", "cancelled"],
  // A failed post-merge check returns the task to active work: the handoff was
  // valid, the integrated workspace is not.
  integrated: ["done", "review", "in_progress", "failed"],
  done: [],
  failed: ["pending", "cancelled"],
  cancelled: [],
};

function tasksDir(dir) {
  return join(aceDir(dir), "tasks");
}

export function readTask(dir, id) {
  return readJsonFile(join(tasksDir(dir), `${id}.json`));
}

export function listTaskRecords(dir) {
  return readRecords(dir, "tasks", (r) => r);
}

export function saveTask(dir, task) {
  task.updatedAt = nowIso();
  writeJsonFile(join(tasksDir(dir), `${task.id}.json`), task);
  return task;
}

function newId(prefix) {
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

/**
 * Create a bounded task. A task always carries what a worker needs to act:
 * goal, acceptance criteria, workspace, ownership and its own config override.
 */
export function createTask(dir, spec = {}) {
  mkdirSync(tasksDir(dir), { recursive: true });
  const id = spec.id ?? newId("task");
  if (readTask(dir, id)) throw new Error(`createTask: task "${id}" already exists`);
  const task = {
    id,
    title: spec.title ?? id,
    goal: spec.goal ?? null,
    project: spec.project ?? null,
    status: "pending",
    priority: spec.priority ?? "normal",
    owner: null,
    ownerRole: null,
    attempt: 0,
    max_attempts: spec.max_attempts ?? 3,
    workspace: spec.workspace ?? null,
    acceptance_criteria: spec.acceptance_criteria ?? [],
    config: spec.config ?? {},
    origin: spec.origin ?? "ace",
    blockedBy: spec.blockedBy ?? [],
    evidence: [],
    history: [{ at: nowIso(), type: "created", by: spec.by ?? "supervisor", detail: spec.title ?? null }],
    createdAt: nowIso(),
    updatedAt: nowIso(),
  };
  saveTask(dir, task);
  appendEvent(dir, {
    id: newId("evt"),
    timestamp: nowIso(),
    type: "task.created",
    actor: spec.by ?? "supervisor",
    task: id,
    metadata: { task: id, title: task.title, project: task.project, priority: task.priority },
  });
  return task;
}

/**
 * Change a task's status, refusing illegal transitions.
 * Returns { ok, task } or { ok: false, code, reason }.
 */
export function setTaskStatus(dir, id, status, { by = "supervisor", detail = null, patch = {} } = {}) {
  const task = readTask(dir, id);
  if (!task) return { ok: false, code: "UNKNOWN_TASK", reason: `no task "${id}"` };
  if (!TASK_STATUSES.includes(status)) {
    return { ok: false, code: "UNKNOWN_STATUS", reason: `unknown status "${status}" (known: ${TASK_STATUSES.join(", ")})` };
  }
  const allowed = TASK_TRANSITIONS[task.status] ?? [];
  if (task.status !== status && !allowed.includes(status)) {
    return {
      ok: false,
      code: "INVALID_TRANSITION",
      reason: `cannot move task ${id} from ${task.status} to ${status} (allowed: ${allowed.join(", ") || "none"})`,
    };
  }
  if (task.status !== status) task.history.push({ at: nowIso(), type: status, by, detail });
  task.status = status;
  Object.assign(task, patch);
  saveTask(dir, task);
  appendEvent(dir, {
    id: newId("evt"),
    timestamp: nowIso(),
    type: "task.status_changed",
    actor: by,
    task: id,
    metadata: { task: id, status, owner: task.owner ?? null, detail },
  });
  return { ok: true, task };
}

/**
 * Claim a task for exactly one agent. Two supervisors racing on the same task
 * cannot both win: the lease decides, and the loser is told who holds it.
 */
export function claimTask(dir, id, { agent, project = null, workspace = null, ttlSeconds = 300, nowMs = Date.now() } = {}) {
  const task = readTask(dir, id);
  if (!task) return { ok: false, code: "UNKNOWN_TASK", reason: `no task "${id}"` };
  if (task.status === "done" || task.status === "cancelled") {
    return { ok: false, code: "TASK_CLOSED", reason: `task ${id} is ${task.status}` };
  }
  const held = acquireLease(dir, `task:${id}`, { owner: agent, ttlSeconds, nowMs });
  if (!held.ok) {
    return { ok: false, code: "DUPLICATE_OWNERSHIP", reason: held.reason, lease: held.lease };
  }
  if (task.owner && task.owner !== agent && task.status !== "pending") {
    const stale = readLease(dir, `task:${id}`);
    if (stale && stale.owner === task.owner) {
      releaseLease(dir, `task:${id}`, agent);
      return { ok: false, code: "DUPLICATE_OWNERSHIP", reason: `task ${id} is owned by ${task.owner}` };
    }
  }
  const next = task.status === "pending" || task.status === "blocked" || task.status === "failed" ? "assigned" : task.status;
  task.owner = agent;
  task.attempt += 1;
  if (workspace) task.workspace = workspace;
  const moved = setTaskStatus(dir, id, next, {
    by: agent,
    detail: `claimed by ${agent} (attempt ${task.attempt})`,
    patch: { owner: agent, ownerRole: "worker", attempt: task.attempt, project: project ?? task.project },
  });
  if (!moved.ok) {
    releaseLease(dir, `task:${id}`, agent);
    return moved;
  }
  return { ok: true, task: moved.task, lease: held.lease };
}

/** Release a claim without completing the task (blocked, failed, timed out). */
export function releaseTask(dir, id, { agent, reason = "released" } = {}) {
  const released = releaseLease(dir, `task:${id}`, agent);
  const task = readTask(dir, id);
  if (task && task.owner === agent) {
    saveTask(dir, { ...task, owner: null });
  }
  return { ok: true, released, reason };
}

export function pendingTasks(dir) {
  return listTaskRecords(dir).filter((t) => t.status === "pending" || t.status === "assigned" || t.status === "in_progress");
}

// --- enforcePolicies ---
export function enforcePolicies(dir, action) {
  if (!action || typeof action.type !== "string") return { allowed: false, reason: "invalid action" };
  const ws = getPolicies(dir);
  const fsMode = ws.filesystem?.mode ?? ws.filesystem?.scope;
  const netMode = ws.network?.mode;
  const gitPush = ws.git?.push;
  const prodAccess = ws.production?.access ?? ws.policies?.production_access;
  const mergeReview = ws.merge?.require_review ?? ws.policies?.require_review_before_merge;
  switch (action.type) {
    case "filesystem.write": {
      if (fsMode === "workspace") {
        const p = action.path;
        if (!p) return { allowed: false, reason: "filesystem.write requires a path" };
        const abs = resolve(dir, p);
        const root = resolve(dir);
        if (abs !== root && !abs.startsWith(root + sep)) return { allowed: false, reason: `filesystem.write outside workspace: ${p}` };
        return { allowed: true, reason: "within workspace scope" };
      }
      return { allowed: false, reason: "filesystem policy not declared (default deny)" };
    }
    case "network.connect": {
      if (netMode === "restricted") return { allowed: false, reason: "network.mode is restricted" };
      if (netMode) return { allowed: true, reason: `network.mode=${netMode}` };
      return { allowed: false, reason: "network policy not declared (default deny)" };
    }
    case "git.push": {
      if (gitPush === false) return { allowed: false, reason: "git.push is disabled" };
      if (gitPush === true) return { allowed: true, reason: "git.push enabled" };
      return { allowed: false, reason: "git.push policy not declared (default deny)" };
    }
    case "production.access": {
      if (prodAccess === false) return { allowed: false, reason: "production.access is disabled" };
      if (prodAccess === true) return { allowed: true, reason: "production.access enabled" };
      return { allowed: false, reason: "production.access policy not declared (default deny)" };
    }
    case "merge": {
      if (mergeReview === true) {
        if (action.reviewed === true) return { allowed: true, reason: "merge reviewed" };
        return { allowed: false, reason: "merge requires review" };
      }
      if (mergeReview === false) return { allowed: true, reason: "merge review not required" };
      return { allowed: false, reason: "merge policy not declared (default deny)" };
    }
    default:
      return { allowed: false, reason: `unknown action type: ${action.type}` };
  }
}

// ---------------------------------------------------------------------------
// phase 9 — checkpoints, routes, action journal, handoffs
// ---------------------------------------------------------------------------

function checkpointsDir(dir) {
  return join(aceDir(dir), "checkpoints");
}

/**
 * Preserve recoverable state before any recovery change (route switch,
 * restart). A resume must be able to continue from the last checkpoint
 * instead of replaying non-idempotent side effects.
 */
export function writeCheckpoint(dir, { agent, task = null, cursor = null, note = null, extra = {} } = {}) {
  if (!agent) throw new Error("writeCheckpoint: agent is required");
  mkdirSync(checkpointsDir(dir), { recursive: true });
  const previous = readCheckpoint(dir, agent);
  const checkpoint = {
    agent,
    task,
    cursor,
    note,
    route: extra.route ?? previous?.route ?? null,
    pendingWork: extra.pendingWork ?? previous?.pendingWork ?? [],
    at: nowIso(),
    sequence: (previous?.sequence ?? 0) + 1,
    history: [...(previous?.history ?? []).slice(-9), { at: nowIso(), task, cursor, note }],
  };
  writeJsonFile(join(checkpointsDir(dir), `${agent}.json`), checkpoint);
  appendEvent(dir, {
    id: `evt_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    timestamp: nowIso(),
    type: "checkpoint.written",
    actor: agent,
    task,
    metadata: { agent, task, cursor },
  });
  return checkpoint;
}

export function readCheckpoint(dir, agent) {
  return readJsonFile(join(checkpointsDir(dir), `${agent}.json`));
}

function routesDir(dir) {
  return join(aceDir(dir), "routes");
}

/** The active model/provider route for an agent, plus its change history. */
export function readRoute(dir, agent) {
  return readJsonFile(join(routesDir(dir), `${agent}.json`));
}

/**
 * Record a route for an agent. The caller must already hold the
 * `route:<agent>` lease — that is what stops two recoveries mutating the same
 * route concurrently.
 */
export function writeRoute(dir, agent, route, { reason = null, by = "governor", previous = null, checks = null } = {}) {
  if (!agent) throw new Error("writeRoute: agent is required");
  mkdirSync(routesDir(dir), { recursive: true });
  const prior = readRoute(dir, agent);
  const record = {
    agent,
    route: route ?? null,
    reason,
    by,
    previous: previous ?? prior?.route ?? null,
    checks,
    at: nowIso(),
    // A change from a known previous route is a switch even the first time it
    // is recorded, otherwise the failover budget is off by one.
    switches: (prior?.switches ?? 0) + ((prior?.route ?? previous) && route ? 1 : 0),
    history: [...(prior?.history ?? []).slice(-19), { at: nowIso(), route, reason, by, checks }],
  };
  writeJsonFile(join(routesDir(dir), `${agent}.json`), record);
  appendEvent(dir, {
    id: `evt_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    timestamp: nowIso(),
    type: "route.changed",
    actor: by,
    task: null,
    metadata: { agent, from: record.previous, to: route, reason },
  });
  return record;
}

/**
 * The recovery / failover / escalation journal. Every governance decision
 * that changed or would have changed something lands here, with its cause and
 * result — never a credential.
 */
export function journalAction(dir, action) {
  const ace = aceDir(dir);
  mkdirSync(ace, { recursive: true });
  const record = { at: nowIso(), ...redactSecrets(dir, action) };
  appendFileSync(join(ace, "actions.jsonl"), JSON.stringify(record) + "\n", "utf8");
  return record;
}

export function readActions(dir, limit = 50) {
  const p = join(aceDir(dir), "actions.jsonl");
  if (!existsSync(p)) return [];
  const lines = readFileSync(p, "utf8").split(/\r?\n/).filter(Boolean);
  return lines.slice(-limit).map((l) => {
    try { return JSON.parse(l); } catch { return null; }
  }).filter(Boolean);
}

function handoffsDir(dir) {
  return join(aceDir(dir), "handoffs");
}

/**
 * Write a structured handoff artifact: durable JSON on disk, not a chat
 * message. Everything a supervisor needs to accept or reject it is here.
 */
export function writeHandoff(dir, handoff) {
  if (!handoff || typeof handoff.task !== "string" || handoff.task.length === 0) {
    throw new Error("writeHandoff: handoff.task is required");
  }
  const attempt = Number.isInteger(handoff.attempt) ? handoff.attempt : 1;
  const target = join(handoffsDir(dir), handoff.task);
  mkdirSync(target, { recursive: true });
  const record = redactSecrets(dir, {
    task: handoff.task,
    attempt,
    from: handoff.from ?? null,
    project: handoff.project ?? null,
    role: handoff.role ?? null,
    status: handoff.status ?? "partial",
    summary: handoff.summary ?? null,
    changed_files: handoff.changed_files ?? [],
    artifacts: handoff.artifacts ?? [],
    commit: handoff.commit ?? null,
    branch: handoff.branch ?? null,
    diff: handoff.diff ?? null,
    commands: handoff.commands ?? [],
    checks_not_run: handoff.checks_not_run ?? [],
    decisions: handoff.decisions ?? [],
    unresolved: handoff.unresolved ?? [],
    risks: handoff.risks ?? [],
    committed: handoff.committed ?? null,
    pushed: handoff.pushed ?? null,
    workspace: handoff.workspace ?? null,
    next_action: handoff.next_action ?? null,
    at: nowIso(),
  });
  writeJsonFile(join(target, `${attempt}.json`), record);
  appendEvent(dir, {
    id: `evt_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    timestamp: nowIso(),
    type: "handoff.submitted",
    actor: record.from ?? "worker",
    task: record.task,
    metadata: { task: record.task, attempt, status: record.status },
  });
  return record;
}

export function readHandoff(dir, task, attempt = null) {
  const target = join(handoffsDir(dir), task);
  if (!existsSync(target)) return null;
  if (attempt !== null) return readJsonFile(join(target, `${attempt}.json`));
  const files = readdirSync(target).filter((n) => n.endsWith(".json")).sort((a, b) => Number.parseInt(b, 10) - Number.parseInt(a, 10));
  return files.length ? readJsonFile(join(target, files[0])) : null;
}

export function listHandoffs(dir, task) {
  const target = join(handoffsDir(dir), task);
  if (!existsSync(target)) return [];
  return readdirSync(target)
    .filter((n) => n.endsWith(".json"))
    .map((n) => readJsonFile(join(target, n)))
    .filter(Boolean)
    .sort((a, b) => (a.attempt ?? 0) - (b.attempt ?? 0));
}

/**
 * Verify a handoff before it is accepted: the fields a supervisor needs, a
 * declared status, and evidence for a completion claim. Returns
 * { ok, errors[], warnings[] } — an unverified handoff is never integrated.
 */
export function verifyHandoff(handoff) {
  const errors = [];
  const warnings = [];
  if (!handoff) return { ok: false, errors: ["no handoff artifact found"], warnings: [] };
  if (typeof handoff.task !== "string" || handoff.task.length === 0) errors.push("task id is missing");
  if (typeof handoff.from !== "string" || handoff.from.length === 0) errors.push("from (the reporting agent) is missing");
  const statuses = ["complete", "partial", "blocked", "failed"];
  if (!statuses.includes(handoff.status)) {
    errors.push(`status must be one of ${statuses.join("|")}, got ${JSON.stringify(handoff.status)}`);
  }
  if (typeof handoff.summary !== "string" || handoff.summary.length === 0) errors.push("summary is missing");
  if (!Array.isArray(handoff.changed_files) || handoff.changed_files.length === 0) {
    warnings.push("no changed files were reported");
  }
  if (!Array.isArray(handoff.commands) || handoff.commands.length === 0) {
    warnings.push("no verification commands were reported");
  }
  if (handoff.status === "complete") {
    const ran = (handoff.commands ?? []).some((c) => c && c.exitCode === 0);
    if (!ran) errors.push("a complete handoff must report at least one verification command that exited 0");
  }
  if (handoff.committed === null || handoff.committed === undefined) {
    warnings.push("committed/pushed state was not declared — treat changes as worktree-only");
  }
  return { ok: errors.length === 0, errors, warnings };
}

// --- spawnWorker ---
export function spawnWorker(dir, role) {
  if (!role || typeof role !== "string") throw new Error("spawnWorker: role must be a non-empty string");
  const ace = aceDir(dir);
  const agentsDir = join(ace, "agents");
  mkdirSync(agentsDir, { recursive: true });
  let max = 0;
  if (existsSync(agentsDir)) {
    for (const name of readdirSync(agentsDir)) {
      const m = new RegExp(`^${role.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}-(\\d+)\\.json$`).exec(name);
      if (m) max = Math.max(max, Number(m[1]));
    }
  }
  const id = `${role}-${max + 1}`;
  const rec = { id, role, status: "idle", task: null, startedAt: nowIso(), lastActivity: nowIso() };
  writeJsonFile(join(agentsDir, `${id}.json`), rec);
  appendEvent(dir, { id: `evt_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`, timestamp: nowIso(), type: "agent.spawned", actor: "orchestrator", metadata: { agent: id, role } });
  return id;
}

// --- healthcheck ---
export function healthcheck(dir) {
  const ws = getPolicies(dir);
  const hc = ws.lifecycle?.healthcheck;
  if (!hc) return { ok: true, detail: "no healthcheck defined" };
  let cmd;
  if (typeof hc === "string") cmd = hc;
  else if (typeof hc === "object" && typeof hc.command === "string") cmd = hc.command;
  else return { ok: false, detail: "healthcheck is not a command string" };
  try {
    const out = execFileSync("sh", ["-c", cmd], { timeout: 30000, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], cwd: dir });
    return { ok: true, output: out.trim() };
  } catch (e) {
    return { ok: false, output: (e?.stdout || "") + (e?.stderr || e?.message || "") };
  }
}

// ---------------------------------------------------------------------------
// phase 9 — secrets, redaction, heartbeats, agent records
// ---------------------------------------------------------------------------

const SECRET_VALUE_PATTERNS = [
  /sk-[A-Za-z0-9_-]{16,}/g,
  /ghp_[A-Za-z0-9]{20,}/g,
  /github_pat_[A-Za-z0-9_]{20,}/g,
  /AKIA[0-9A-Z]{16}/g,
  /-----BEGIN [A-Z ]*PRIVATE KEY-----/g,
];
const SECRET_KEY_RE = /(secret|token|password|passwd|api[_-]?key|apikey|credential|authorization|bearer|cookie)/i;
const SECRET_REF_RE = /^(secret:|env:)/;

export function secretsDir(dir) {
  return join(aceDir(dir), "secrets");
}

/** Secret *names* only — never values. Safe to print. */
export function listSecrets(dir) {
  const base = secretsDir(dir);
  if (!existsSync(base)) return [];
  return readdirSync(base).filter((n) => !n.startsWith("."));
}

/**
 * Store a secret value in .ace/secrets/<name>, mode 0600.
 * Configuration and events reference secrets by name (`secret:<name>`), never
 * by value.
 */
export function storeSecret(dir, name, value) {
  if (typeof name !== "string" || name.length === 0) throw new Error("storeSecret: name is required");
  if (typeof value !== "string" || value.length === 0) throw new Error("storeSecret: value is required");
  mkdirSync(secretsDir(dir), { recursive: true, mode: 0o700 });
  writeFileSync(join(secretsDir(dir), name), value + "\n", { mode: 0o600 });
  return { name, path: join(secretsDir(dir), name) };
}

export function readSecret(dir, name) {
  const p = join(secretsDir(dir), name);
  try {
    return readFileSync(p, "utf8").trim();
  } catch {
    return null;
  }
}

/** Every stored secret value, used for redaction. Never returned to callers that print. */
export function secretValues(dir) {
  return listSecrets(dir)
    .map((name) => readSecret(dir, name))
    .filter((v) => typeof v === "string" && v.length >= 6);
}

function maskValue(str, values) {
  let out = str;
  for (const secret of values) {
    if (secret && secret.length >= 6) out = out.split(secret).join("<redacted>");
  }
  for (const re of SECRET_VALUE_PATTERNS) out = out.replace(re, "<redacted>");
  return out;
}

/**
 * Recursively redact a value before it is written to a shared artifact.
 *   - keys that look like credentials are masked,
 *   - any stored secret value appearing anywhere is masked,
 *   - known token shapes are masked.
 * `secret:<name>` and `env:<VAR>` references are kept: they name a secret,
 * they do not contain one.
 */
export function redactSecrets(dir, value) {
  const values = dir ? secretValues(dir) : [];
  const walk = (node, keyName) => {
    if (Array.isArray(node)) return node.map((v) => walk(v, keyName));
    if (node && typeof node === "object") {
      const out = {};
      for (const [k, v] of Object.entries(node)) out[k] = walk(v, k);
      return out;
    }
    if (typeof node !== "string") return node;
    if (keyName && SECRET_KEY_RE.test(keyName) && !SECRET_REF_RE.test(node)) return "<redacted>";
    return maskValue(node, values);
  };
  return walk(value, null);
}

// --- heartbeats ---

function heartbeatsDir(dir) {
  return join(aceDir(dir), "heartbeats");
}

/**
 * Record that an agent is alive. A heartbeat carries what it is doing, on
 * which route, and how far its task has moved — a heartbeat alone never proves
 * progress, so the governor compares the movement fields too.
 */
export function writeHeartbeat(dir, hb) {
  if (!hb || typeof hb.agent !== "string" || hb.agent.length === 0) {
    throw new Error("writeHeartbeat: hb.agent is required");
  }
  mkdirSync(heartbeatsDir(dir), { recursive: true });
  const previous = readHeartbeat(dir, hb.agent);
  const record = {
    agent: hb.agent,
    role: hb.role ?? previous?.role ?? null,
    project: hb.project ?? previous?.project ?? null,
    status: hb.status ?? previous?.status ?? "working",
    task: hb.task ?? null,
    route: hb.route ?? previous?.route ?? null,
    // `pid: null` explicitly clears a previous claim; omitting pid keeps it.
    // A one-shot `ace heartbeat` asserts liveness without claiming a process,
    // because its own pid is about to exit.
    pid: hb.pid === null ? null : hb.pid ?? previous?.pid ?? null,
    progress: hb.progress ?? previous?.progress ?? null,
    sequence: (previous?.sequence ?? 0) + 1,
    firstAt: previous?.firstAt ?? nowIso(),
    at: hb.at ?? nowIso(),
  };
  writeJsonFile(join(heartbeatsDir(dir), `${hb.agent}.json`), record);
  return record;
}

export function readHeartbeat(dir, agent) {
  return readJsonFile(join(heartbeatsDir(dir), `${agent}.json`));
}

export function readHeartbeats(dir) {
  const base = heartbeatsDir(dir);
  if (!existsSync(base)) return [];
  return readdirSync(base)
    .filter((n) => n.endsWith(".json"))
    .map((n) => readJsonFile(join(base, n)))
    .filter(Boolean);
}

export function heartbeatAgeSeconds(hb, nowMs = Date.now()) {
  if (!hb || typeof hb.at !== "string") return null;
  const at = Date.parse(hb.at);
  if (!Number.isFinite(at)) return null;
  return Math.max(0, Math.round((nowMs - at) / 1000));
}

export function isStale(hb, thresholdSeconds, nowMs = Date.now()) {
  const age = heartbeatAgeSeconds(hb, nowMs);
  if (age === null) return true;
  return age > thresholdSeconds;
}

// --- agent records ---

/**
 * Create or update .ace/agents/<id>.json.
 * Unspecified fields are preserved, so a status touch never erases the route
 * or ownership a supervisor recorded earlier.
 */
export function upsertAgent(dir, agent) {
  if (!agent || typeof agent.id !== "string" || agent.id.length === 0) {
    throw new Error("upsertAgent: agent.id is required");
  }
  const agentsDir = join(aceDir(dir), "agents");
  mkdirSync(agentsDir, { recursive: true });
  const previous = readJsonFile(join(agentsDir, `${agent.id}.json`)) ?? {};
  const record = {
    id: agent.id,
    role: agent.role ?? previous.role ?? "worker",
    kind: agent.kind ?? previous.kind ?? null,
    project: agent.project ?? previous.project ?? null,
    supervisor: agent.supervisor ?? previous.supervisor ?? null,
    runtime: agent.runtime ?? previous.runtime ?? null,
    route: agent.route ?? previous.route ?? null,
    status: agent.status ?? previous.status ?? "idle",
    task: agent.task ?? null,
    pid: agent.pid === null ? null : agent.pid ?? previous.pid ?? null,
    restarts: agent.restarts ?? previous.restarts ?? 0,
    startedAt: previous.startedAt ?? nowIso(),
    lastActivity: nowIso(),
  };
  writeJsonFile(join(agentsDir, `${agent.id}.json`), record);
  return record;
}

/** Full agent records (getAgents() maps these down to the public shape). */
export function getAgentRecords(dir) {
  return readRecords(dir, "agents", (r) => r);
}

export function removeAgent(dir, id) {
  const p = join(aceDir(dir), "agents", `${id}.json`);
  if (!existsSync(p)) return false;
  unlinkSync(p);
  return true;
}
