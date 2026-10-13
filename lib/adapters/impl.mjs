/**
 * lib/adapters/impl.mjs — deterministic fake adapters.
 *
 * Tests must be able to exercise the whole orchestration layer without a
 * commercial credential, a network call, a real terminal, or a cent of
 * provider cost. These implementations satisfy exactly the same contract as
 * the real ones (see lib/adapters/index.mjs), so swapping a fake in proves
 * something about the code paths a real provider will use.
 *
 * Nothing here touches the network, spawns a process, or writes outside an
 * explicitly supplied workspace directory.
 *
 * Zero dependencies. Node builtins only.
 */

import { readHandoff, listHandoffs, verifyHandoff, writeHandoff } from "../runtime.mjs";

/** FNV-1a, so a completion is a pure function of its prompt. */
function hash(input) {
  const text = String(input);
  let h = 0x811c9dc5;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(16).padStart(8, "0");
}

// ---------------------------------------------------------------------------
// multiplexer
// ---------------------------------------------------------------------------

/**
 * opts.failStart — names this multiplexer refuses to start, so a caller can
 * test the "agent is already running / pane busy" branch without a terminal.
 */
export function createFakeMultiplexer(opts = {}) {
  const panes = new Map();
  const failStart = new Set(opts.failStart ?? []);
  let seq = 0;

  return {
    name: "fake",
    kind: "multiplexer",
    capabilities: ["pane", "agent_control", "deterministic"],
    requiresEnv: [],
    describe: () => "In-memory fake multiplexer — no terminal is created, attached or controlled.",
    validate: () => ({ ok: true, errors: [] }),
    health: () => ({ ok: true, detail: "available" }),
    status: () => ({ provider: "fake", panes: panes.size, test: true }),
    ops: {
      list: () => [...panes.values()].map((p) => ({ ...p })),
      start: ({ name, kind = "worker", cwd = null } = {}) => {
        if (failStart.has(name)) {
          return { ok: false, code: "agent_pane_busy", detail: `fake multiplexer refuses to start "${name}"` };
        }
        seq += 1;
        const pane = { id: `pane-${seq}`, name: name ?? `pane-${seq}`, kind, cwd };
        panes.set(pane.id, pane);
        return { ok: true, id: pane.id, pane: pane.id };
      },
      stop: (id) => (panes.delete(id) ? { ok: true, id } : { ok: false, code: "NO_PANE", id }),
      rename: (id, name) => {
        const pane = panes.get(id);
        if (!pane) return { ok: false, code: "NO_PANE", id };
        pane.name = name;
        return { ok: true, id, name };
      },
    },
  };
}

// ---------------------------------------------------------------------------
// agent runtime
// ---------------------------------------------------------------------------

export function createFakeRuntime(opts = {}) {
  const records = new Map();
  let seq = 0;

  return {
    name: "fake",
    kind: "agent-runtime",
    capabilities: ["record", "deterministic"],
    requiresEnv: [],
    describe: () => "In-memory fake agent runtime — records lifecycle calls and never spawns a process.",
    validate: () => ({ ok: true, errors: [] }),
    health: () => ({ ok: true, detail: "available" }),
    status: () => ({ provider: "fake", agents: records.size, test: true }),
    ops: {
      start: ({ name, role = "worker", cwd = null } = {}) => {
        if ((opts.failStart ?? []).includes(name)) {
          return { ok: false, code: "agent_start_failed", detail: `fake runtime refuses to start "${name}"` };
        }
        seq += 1;
        const id = `${name ?? "agent"}-${seq}`;
        records.set(id, { id, name: name ?? id, role, cwd, status: "starting" });
        return { ok: true, id };
      },
      stop: (id) => {
        const record = records.get(id);
        if (!record) return { ok: false, code: "NO_AGENT", id };
        record.status = "stopped";
        return { ok: true, id };
      },
      status: (id) => {
        const record = records.get(id);
        return record ? { ...record } : null;
      },
      list: () => [...records.values()].map((r) => ({ ...r })),
    },
  };
}

// ---------------------------------------------------------------------------
// model provider
// ---------------------------------------------------------------------------

/**
 * opts.unhealthy / opts.failure — makes health() and complete() report an
 * unusable provider, which is how the governor's failover path is tested
 * without waiting for a real quota to run out.
 */
export function createFakeProvider(opts = {}) {
  const calls = { count: 0 };
  const failure = opts.failure ?? (opts.unhealthy === true ? "provider unhealthy" : null);
  const models = Object.freeze([
    Object.freeze({ id: "fake-deep", context: 200_000 }),
    Object.freeze({ id: "fake-fast", context: 32_000 }),
  ]);

  return {
    name: "fake",
    kind: "provider",
    capabilities: ["chat", "deterministic", "fault_injection"],
    requiresEnv: [],
    describe: () => "Deterministic fake provider — makes no network call, costs nothing, and can be scripted to fail.",
    validate: () => ({ ok: true, errors: [] }),
    health: () => (failure ? { ok: false, detail: failure } : { ok: true, detail: "available" }),
    status: () => ({ provider: "fake", calls: calls.count, unhealthy: Boolean(failure), test: true }),
    ops: {
      models: () => [...models],
      complete: ({ prompt = "", model = "fake-fast" } = {}) => {
        calls.count += 1;
        if (failure) return { ok: false, code: "PROVIDER_UNAVAILABLE", detail: failure };
        return { ok: true, model, output: `fake:${hash(prompt)}:${model}` };
      },
    },
  };
}

// ---------------------------------------------------------------------------
// context
// ---------------------------------------------------------------------------

export function createFakeContext(opts = {}) {
  const items = [];

  return {
    name: "fake",
    kind: "context",
    capabilities: ["index", "retrieve", "deterministic"],
    requiresEnv: [],
    describe: () => "In-memory fake context store — deterministic token matching, no index on disk.",
    validate: () => ({ ok: true, errors: [] }),
    health: () => ({ ok: true, detail: "available" }),
    status: () => ({ provider: "fake", items: items.length, test: true }),
    ops: {
      index: (batch = []) => {
        for (const item of batch) {
          items.push({ id: item?.id ?? `item-${items.length + 1}`, text: String(item?.text ?? "") });
        }
        return { ok: true, indexed: batch.length };
      },
      retrieve: (query = "") => {
        const tokens = String(query).toLowerCase().split(/\s+/).filter(Boolean);
        return items
          .map((item) => ({
            id: item.id,
            score: tokens.filter((token) => item.text.toLowerCase().includes(token)).length,
          }))
          .filter((match) => match.score > 0)
          // Ties break on id so the same query always returns the same order.
          .sort((a, b) => b.score - a.score || a.id.localeCompare(b.id));
      },
    },
  };
}

// ---------------------------------------------------------------------------
// handoff
// ---------------------------------------------------------------------------

/**
 * The handoff fake delegates to the real durable artifacts, because the point
 * of the handoff layer is that a report survives the process that wrote it.
 * Without `opts.dir` there is nowhere durable to write, and every operation
 * says so instead of silently succeeding.
 */
export function createFakeHandoff(opts = {}) {
  const dir = opts.dir ?? null;
  const guard = () =>
    dir ? null : { ok: false, code: "NO_WORKSPACE", detail: "createFakeHandoff({ dir }) needs a workspace directory" };

  return {
    name: "fake",
    kind: "handoff",
    capabilities: ["assign", "report", "verify", "deterministic"],
    requiresEnv: [],
    describe: () =>
      dir
        ? `Fake handoff adapter writing the real durable artifacts in ${dir}`
        : "Fake handoff adapter with no workspace — every operation reports NO_WORKSPACE.",
    validate: () => ({ ok: true, errors: [] }),
    health: () => (dir ? { ok: true, detail: "available" } : { ok: false, detail: "no workspace dir configured" }),
    status: () => ({ provider: "fake", dir, test: true }),
    ops: {
      assign: (task) => {
        const missing = guard();
        if (missing) return missing;
        return { ok: true, task: task?.id ?? task?.task ?? null };
      },
      report: (handoff = {}) => {
        const missing = guard();
        if (missing) return missing;
        if (typeof handoff.task !== "string" || handoff.task.length === 0) {
          return { ok: false, code: "BAD_HANDOFF", detail: "a handoff needs a task id" };
        }
        return { ok: true, handoff: writeHandoff(dir, handoff) };
      },
      verify: (task, attempt = null) => {
        const missing = guard();
        if (missing) return missing;
        const handoff = readHandoff(dir, task, attempt);
        return { ...verifyHandoff(handoff), handoff };
      },
      list: (task) => {
        const missing = guard();
        if (missing) return missing;
        return { ok: true, handoffs: listHandoffs(dir, task) };
      },
    },
  };
}

// ---------------------------------------------------------------------------
// verification
// ---------------------------------------------------------------------------

export function createFakeVerification(opts = {}) {
  const failing = new Set(opts.fail ?? []);

  return {
    name: "fake",
    kind: "verification",
    capabilities: ["run", "deterministic"],
    requiresEnv: [],
    describe: () => "Deterministic fake verification — the caller scripts which checks fail.",
    validate: () => ({ ok: true, errors: [] }),
    health: () => ({ ok: true, detail: "available" }),
    status: () => ({ provider: "fake", failing: [...failing], test: true }),
    ops: {
      run: (dir, check) => {
        const ok = !failing.has(check);
        return { name: check, ok, configured: true, exitCode: ok ? 0 : 1, dir };
      },
    },
  };
}

// ---------------------------------------------------------------------------
// workspace
// ---------------------------------------------------------------------------

export function createFakeWorkspace(opts = {}) {
  const spaces = new Map();
  let seq = 0;

  return {
    name: "fake",
    kind: "workspace",
    capabilities: ["isolate", "deterministic"],
    requiresEnv: [],
    describe: () => "In-memory fake workspace backend — no worktree, branch or directory is created on disk.",
    validate: () => ({ ok: true, errors: [] }),
    health: () => ({ ok: true, detail: "available" }),
    status: () => ({ provider: "fake", workspaces: spaces.size, test: true }),
    ops: {
      create: ({ name, root = null } = {}) => {
        seq += 1;
        const id = `ws-${seq}`;
        spaces.set(id, { id, name: name ?? id, root });
        return { ok: true, id };
      },
      list: () => [...spaces.values()].map((s) => ({ ...s })),
      remove: (id) => (spaces.delete(id) ? { ok: true, id } : { ok: false, code: "NO_WORKSPACE", id }),
    },
  };
}

// ---------------------------------------------------------------------------
// collection
// ---------------------------------------------------------------------------

export const FAKES = {
  multiplexer: createFakeMultiplexer,
  workspace: createFakeWorkspace,
  "agent-runtime": createFakeRuntime,
  provider: createFakeProvider,
  context: createFakeContext,
  handoff: createFakeHandoff,
  verification: createFakeVerification,
};

/** One instance of every fake kind, keyed by kind. */
export function allFakes(opts = {}) {
  return Object.fromEntries(Object.entries(FAKES).map(([kind, create]) => [kind, create(opts)]));
}
