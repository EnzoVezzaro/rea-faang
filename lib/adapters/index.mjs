/**
 * lib/adapters/index.mjs — adapter contract + registry.
 *
 * Core orchestration must never import a concrete product. Every swappable
 * capability (multiplexer, workspace, agent runtime, model provider, context,
 * handoff, tools, verification, persistence, watchdog, management bot) is
 * resolved here by name from the effective configuration.
 *
 * Adapter contract (every adapter object, fake or real):
 *
 *   {
 *     name: string,                  // the value used in config, e.g. "herdr"
 *     kind: string,                  // one of ADAPTER_KINDS
 *     capabilities: string[],        // what this adapter can actually do
 *     requiresEnv: string[],         // env vars that must exist to be usable
 *     describe(): string,            // one line, honest about limits
 *     validate(cfg): { ok, errors[] },
 *     health(env, cfg): { ok, detail },
 *     status(env, cfg): object,      // never contains secret values
 *     ops: { ... }                   // kind-specific lifecycle operations
 *   }
 *
 * Adapters that cannot be used on this host report it through health()/status
 * instead of throwing, so a missing product degrades to a visible message.
 *
 * Zero dependencies. Node builtins only.
 */

export const ADAPTER_KINDS = [
  "multiplexer",
  "workspace",
  "agent-runtime",
  "provider",
  "context",
  "handoff",
  "tools",
  "verification",
  "persistence",
  "watchdog",
  "management-bot",
];

/** Methods every adapter must implement to satisfy the contract. */
export const CONTRACT_METHODS = ["describe", "validate", "health", "status"];

/**
 * The registry. `env` lists the environment variables a provider needs before
 * it can be considered usable; config validation reports MISSING_CREDENTIAL
 * for an *active* provider whose variables are unset.
 *
 * Nothing here shells out at import time — health() is what probes, and only
 * when asked.
 */
function isLoopback(hostname) {
  return hostname === "localhost" || hostname === "127.0.0.1" || hostname === "::1" || hostname === "[::1]";
}

/**
 * Shared validation for every management-bot adapter.
 *
 * Verified against upstream documentation on 2026-10-13, because the security
 * rule below depends on it and must not be invented:
 *
 *   - GitBot's README states plainly that it "has no authentication" and warns
 *     that "anyone who can reach its port can use the agents running on your
 *     machine", advising that it stay on a trusted network and be kept off the
 *     public internet. So a GitBot endpoint is only trusted when it is loopback.
 *   - OpenDots is a self-hosted template whose conversations require CopilotKit
 *     Intelligence (hosted, Docker evaluation, or a licensed self-hosted
 *     deployment), so a remote deployment carries a credentialed service rather
 *     than trust by network position.
 *
 * A non-loopback endpoint is therefore refused unless the operator supplies all
 * three of: a server-side credential reference, HTTPS, and an explicit opt-in.
 * Missing security configuration fails closed.
 */
function validateManagementBot(cfg) {
  if (!cfg || typeof cfg !== "object") return { ok: false, errors: ["management-bot config must be an object"] };
  const errors = [];

  for (const key of ["endpoint", "identity"]) {
    if (typeof cfg[key] !== "string" || cfg[key].length === 0) {
      errors.push(`experimental.management_bots.${key} is required`);
    }
  }
  if (!cfg.projects || typeof cfg.projects !== "object" || Object.keys(cfg.projects).length === 0) {
    errors.push("experimental.management_bots.projects must map at least one inbound project to an ACE project");
  }

  let url = null;
  if (typeof cfg.endpoint === "string" && cfg.endpoint.length > 0) {
    try {
      url = new URL(cfg.endpoint);
      if (url.protocol !== "http:" && url.protocol !== "https:") {
        errors.push(`experimental.management_bots.endpoint must be an http(s) URL, got ${url.protocol}`);
      }
    } catch {
      errors.push(`experimental.management_bots.endpoint is not a valid URL: ${cfg.endpoint}`);
    }
  }

  if (url && !isLoopback(url.hostname)) {
    if (url.protocol !== "https:") {
      errors.push(`a non-loopback endpoint must use https (got ${cfg.endpoint}) — an inbound surface reachable from the network is not trusted by network position`);
    }
    if (typeof cfg.secret_ref !== "string" || cfg.secret_ref.length === 0) {
      errors.push(`a non-loopback endpoint requires experimental.management_bots.secret_ref naming the server-side credential`);
    }
    if (cfg.allow_remote_endpoint !== true) {
      errors.push(`refusing a non-loopback endpoint (${cfg.endpoint}) without an explicit opt-in: the default provider documents no authentication of its own. Keep it loopback, or front it with an authenticated proxy and set experimental.management_bots.allow_remote_endpoint to true`);
    }
  }

  return { ok: errors.length === 0, errors };
}

export const ADAPTERS = {
  multiplexer: {
    herdr: {
      name: "herdr",
      kind: "multiplexer",
      capabilities: ["pane", "tab", "workspace", "agent_control", "worktree"],
      requiresEnv: [],
      describe: "Herdr terminal multiplexer — the reference multiplexer; panes, tabs, workspaces, agent control.",
      validate: (cfg) => (cfg && cfg.session ? { ok: true, errors: [] } : { ok: true, errors: [] }),
      health: () => ({ ok: true, detail: "declared (no live probe at config time)" }),
      status: () => ({ provider: "herdr", probed: false }),
      ops: ["list", "start", "stop", "rename", "split"],
    },
    tmux: {
      name: "tmux",
      kind: "multiplexer",
      capabilities: ["pane", "window", "session"],
      requiresEnv: [],
      describe: "tmux — panes and windows only; no agent-aware control, no worktrees.",
      validate: () => ({ ok: true, errors: [] }),
      health: () => ({ ok: true, detail: "declared" }),
      status: () => ({ provider: "tmux", probed: false }),
      ops: ["list", "start", "stop", "rename"],
    },
    none: {
      name: "none",
      kind: "multiplexer",
      capabilities: [],
      requiresEnv: [],
      describe: "No multiplexer — agents are recorded in state, never attached to a terminal surface.",
      validate: () => ({ ok: true, errors: [] }),
      health: () => ({ ok: true, detail: "not configured (state-only agents)" }),
      status: () => ({ provider: "none", probed: false }),
      ops: [],
    },
  },

  workspace: {
    "git-worktree": {
      name: "git-worktree",
      kind: "workspace",
      capabilities: ["isolate", "branch", "cleanup", "diff"],
      requiresEnv: [],
      describe: "One git worktree per workspace root — the reference isolation backend.",
      validate: () => ({ ok: true, errors: [] }),
      health: () => ({ ok: true, detail: "declared (git required at use time)" }),
      status: () => ({ provider: "git-worktree", probed: false }),
      ops: ["create", "list", "remove"],
    },
    branch: {
      name: "branch",
      kind: "workspace",
      capabilities: ["branch", "diff"],
      requiresEnv: [],
      describe: "Branches in a shared checkout — cheaper than worktrees, weaker isolation.",
      validate: () => ({ ok: true, errors: [] }),
      health: () => ({ ok: true, detail: "declared" }),
      status: () => ({ provider: "branch", probed: false }),
      ops: ["create", "list"],
    },
    directory: {
      name: "directory",
      kind: "workspace",
      capabilities: ["isolate"],
      requiresEnv: [],
      describe: "A separate directory — isolation by path only; no git integration.",
      validate: () => ({ ok: true, errors: [] }),
      health: () => ({ ok: true, detail: "declared" }),
      status: () => ({ provider: "directory", probed: false }),
      ops: ["create", "list"],
    },
  },

  "agent-runtime": {
    opencode: {
      name: "opencode",
      kind: "agent-runtime",
      capabilities: ["coding", "tools", "streaming", "subagents"],
      requiresEnv: [],
      describe: "OpenCode CLI — coding agent runtime.",
      validate: () => ({ ok: true, errors: [] }),
      health: () => ({ ok: true, detail: "declared (invoked by the multiplexer adapter)" }),
      status: () => ({ provider: "opencode", probed: false }),
      ops: ["start", "stop", "status"],
    },
    claude: {
      name: "claude",
      kind: "agent-runtime",
      capabilities: ["coding", "tools"],
      requiresEnv: [],
      describe: "Claude Code CLI — coding agent runtime.",
      validate: () => ({ ok: true, errors: [] }),
      health: () => ({ ok: true, detail: "declared" }),
      status: () => ({ provider: "claude", probed: false }),
      ops: ["start", "stop", "status"],
    },
    codex: {
      name: "codex",
      kind: "agent-runtime",
      capabilities: ["coding", "tools"],
      requiresEnv: [],
      describe: "Codex CLI — coding agent runtime.",
      validate: () => ({ ok: true, errors: [] }),
      health: () => ({ ok: true, detail: "declared" }),
      status: () => ({ provider: "codex", probed: false }),
      ops: ["start", "stop", "status"],
    },
    gemini: {
      name: "gemini",
      kind: "agent-runtime",
      capabilities: ["coding", "tools"],
      requiresEnv: [],
      describe: "Gemini CLI — coding agent runtime.",
      validate: () => ({ ok: true, errors: [] }),
      health: () => ({ ok: true, detail: "declared" }),
      status: () => ({ provider: "gemini", probed: false }),
      ops: ["start", "stop", "status"],
    },
    local: {
      name: "local",
      kind: "agent-runtime",
      capabilities: ["record"],
      requiresEnv: [],
      describe: "Local recording runtime — tracks agents and tasks in .ace/ without attaching an external CLI.",
      validate: () => ({ ok: true, errors: [] }),
      health: () => ({ ok: true, detail: "available" }),
      status: () => ({ provider: "local", probed: true }),
      ops: ["start", "stop", "status"],
    },
    fake: {
      name: "fake",
      kind: "agent-runtime",
      capabilities: ["record", "deterministic"],
      requiresEnv: [],
      describe: "Deterministic fake runtime for tests — no process is ever spawned.",
      validate: () => ({ ok: true, errors: [] }),
      health: () => ({ ok: true, detail: "available" }),
      status: () => ({ provider: "fake", probed: true, test: true }),
      ops: ["start", "stop", "status"],
    },
  },

  provider: {
    opencode: {
      name: "opencode",
      kind: "provider",
      capabilities: ["chat", "tools", "free_tier"],
      requiresEnv: [],
      describe: "OpenCode model gateway (subscription or free-tier models).",
      validate: () => ({ ok: true, errors: [] }),
      health: () => ({ ok: true, detail: "declared" }),
      status: () => ({ provider: "opencode", probed: false }),
      ops: ["models"],
    },
    anthropic: {
      name: "anthropic",
      kind: "provider",
      capabilities: ["chat", "tools", "long_context"],
      requiresEnv: ["ANTHROPIC_API_KEY"],
      describe: "Anthropic API — requires ANTHROPIC_API_KEY.",
      validate: () => ({ ok: true, errors: [] }),
      health: (env) => (env?.ANTHROPIC_API_KEY ? { ok: true, detail: "key present" } : { ok: false, detail: "ANTHROPIC_API_KEY is not set" }),
      status: () => ({ provider: "anthropic", probed: false }),
      ops: ["models"],
    },
    openai: {
      name: "openai",
      kind: "provider",
      capabilities: ["chat", "tools"],
      requiresEnv: ["OPENAI_API_KEY"],
      describe: "OpenAI API — requires OPENAI_API_KEY.",
      validate: () => ({ ok: true, errors: [] }),
      health: (env) => (env?.OPENAI_API_KEY ? { ok: true, detail: "key present" } : { ok: false, detail: "OPENAI_API_KEY is not set" }),
      status: () => ({ provider: "openai", probed: false }),
      ops: ["models"],
    },
    google: {
      name: "google",
      kind: "provider",
      capabilities: ["chat", "tools", "long_context"],
      requiresEnv: ["GOOGLE_API_KEY"],
      describe: "Google Generative AI — requires GOOGLE_API_KEY (or GEMINI_API_KEY).",
      validate: () => ({ ok: true, errors: [] }),
      health: (env) =>
        env?.GOOGLE_API_KEY || env?.GEMINI_API_KEY
          ? { ok: true, detail: "key present" }
          : { ok: false, detail: "GOOGLE_API_KEY / GEMINI_API_KEY is not set" },
      status: () => ({ provider: "google", probed: false }),
      ops: ["models"],
    },
    local: {
      name: "local",
      kind: "provider",
      capabilities: ["chat"],
      requiresEnv: [],
      describe: "A local model server on this host (no credential).",
      validate: () => ({ ok: true, errors: [] }),
      health: () => ({ ok: true, detail: "declared (assumed reachable at use time)" }),
      status: () => ({ provider: "local", probed: false }),
      ops: ["models"],
    },
    fake: {
      name: "fake",
      kind: "provider",
      capabilities: ["chat", "deterministic", "fault_injection"],
      requiresEnv: [],
      describe: "Deterministic fake provider for tests — never makes a network call.",
      validate: () => ({ ok: true, errors: [] }),
      health: () => ({ ok: true, detail: "available" }),
      status: () => ({ provider: "fake", probed: true, test: true }),
      ops: ["models"],
    },
  },

  context: {
    acc: {
      name: "acc",
      kind: "context",
      capabilities: ["index", "retrieve", "memory"],
      requiresEnv: [],
      describe: "ACC (agents-code-context) — file-backed index and durable memory.",
      validate: () => ({ ok: true, errors: [] }),
      health: () => ({ ok: true, detail: "declared (npx acc-code-context at use time)" }),
      status: () => ({ provider: "acc", probed: false }),
      ops: ["index", "retrieve"],
    },
    filesystem: {
      name: "filesystem",
      kind: "context",
      capabilities: ["retrieve"],
      requiresEnv: [],
      describe: "Plain file reads — no index, no memory layer.",
      validate: () => ({ ok: true, errors: [] }),
      health: () => ({ ok: true, detail: "available" }),
      status: () => ({ provider: "filesystem", probed: true }),
      ops: ["retrieve"],
    },
    fake: {
      name: "fake",
      kind: "context",
      capabilities: ["index", "retrieve", "deterministic"],
      requiresEnv: [],
      describe: "Deterministic fake context store for tests.",
      validate: () => ({ ok: true, errors: [] }),
      health: () => ({ ok: true, detail: "available" }),
      status: () => ({ provider: "fake", probed: true, test: true }),
      ops: ["index", "retrieve"],
    },
  },

  handoff: {
    proagents: {
      name: "proagents",
      kind: "handoff",
      capabilities: ["assign", "report", "verify", "durable"],
      requiresEnv: [],
      describe: "ProAgents handoff framework — structured, durable task artifacts.",
      validate: () => ({ ok: true, errors: [] }),
      health: () => ({ ok: true, detail: "declared" }),
      status: () => ({ provider: "proagents", probed: false }),
      ops: ["assign", "report", "verify"],
    },
    filesystem: {
      name: "filesystem",
      kind: "handoff",
      capabilities: ["assign", "report", "verify", "durable"],
      requiresEnv: [],
      describe: "ACE's own durable handoff artifacts under .ace/handoffs/ (always available).",
      validate: () => ({ ok: true, errors: [] }),
      health: () => ({ ok: true, detail: "available" }),
      status: () => ({ provider: "filesystem", probed: true }),
      ops: ["assign", "report", "verify"],
    },
    fake: {
      name: "fake",
      kind: "handoff",
      capabilities: ["assign", "report", "verify", "deterministic"],
      requiresEnv: [],
      describe: "Deterministic fake handoff adapter for tests.",
      validate: () => ({ ok: true, errors: [] }),
      health: () => ({ ok: true, detail: "available" }),
      status: () => ({ provider: "fake", probed: true, test: true }),
      ops: ["assign", "report", "verify"],
    },
  },

  tools: {
    gh: {
      name: "gh",
      kind: "tools",
      capabilities: ["github"],
      requiresEnv: [],
      describe: "GitHub CLI tools surface.",
      validate: () => ({ ok: true, errors: [] }),
      health: () => ({ ok: true, detail: "declared" }),
      status: () => ({ provider: "gh", probed: false }),
      ops: [],
    },
    filesystem: {
      name: "filesystem",
      kind: "tools",
      capabilities: ["read", "write"],
      requiresEnv: [],
      describe: "Filesystem tools, bounded by the active scope check.",
      validate: () => ({ ok: true, errors: [] }),
      health: () => ({ ok: true, detail: "available" }),
      status: () => ({ provider: "filesystem", probed: true }),
      ops: [],
    },
  },

  verification: {
    "package-scripts": {
      name: "package-scripts",
      kind: "verification",
      capabilities: ["run", "structured_result"],
      requiresEnv: [],
      describe: "Runs the workspace's own lint/typecheck/test/build scripts through `ace verify`.",
      validate: () => ({ ok: true, errors: [] }),
      health: () => ({ ok: true, detail: "available" }),
      status: () => ({ provider: "package-scripts", probed: true }),
      ops: ["run"],
    },
    fake: {
      name: "fake",
      kind: "verification",
      capabilities: ["run", "deterministic"],
      requiresEnv: [],
      describe: "Deterministic fake verification for tests (pass/fail scripted).",
      validate: () => ({ ok: true, errors: [] }),
      health: () => ({ ok: true, detail: "available" }),
      status: () => ({ provider: "fake", probed: true, test: true }),
      ops: ["run"],
    },
  },

  persistence: {
    filesystem: {
      name: "filesystem",
      kind: "persistence",
      capabilities: ["durable", "json", "jsonl"],
      requiresEnv: [],
      describe: "ACE's own .ace/ tree — JSON records and a JSONL event journal.",
      validate: () => ({ ok: true, errors: [] }),
      health: () => ({ ok: true, detail: "available" }),
      status: () => ({ provider: "filesystem", probed: true }),
      ops: ["read", "write", "append"],
    },
  },

  watchdog: {
    local: {
      name: "local",
      kind: "watchdog",
      capabilities: ["detect", "lease", "restart", "escalate"],
      requiresEnv: [],
      describe: "ACE's own control plane — an independent process that can restart the governor without its model.",
      validate: () => ({ ok: true, errors: [] }),
      health: () => ({ ok: true, detail: "available" }),
      status: () => ({ provider: "local", probed: true }),
      ops: ["status", "run", "off"],
    },
    external: {
      name: "external",
      kind: "watchdog",
      capabilities: ["detect", "escalate"],
      requiresEnv: [],
      describe: "An external supervisor (launchd/systemd/cron) that restarts `ace watchdog run` — detection is delegated to the OS.",
      validate: () => ({ ok: true, errors: [] }),
      health: () => ({ ok: true, detail: "declared (host scheduler required)" }),
      status: () => ({ provider: "external", probed: false }),
      ops: ["status"],
    },
  },

  "management-bot": {
    gitbot: {
      name: "gitbot",
      kind: "management-bot",
      capabilities: ["intake", "messaging", "approvals"],
      requiresEnv: [],
      describe:
        "GitBot (github.com/gitbot-hq/GitBot) — a local server that runs Claude Code, Codex or OpenCode, with bots, threads and per-bot permissions. Default provider once management bots are enabled. Upstream documents no authentication of its own, so an endpoint is trusted only on loopback; ACE supplies the intake adapter either way.",
      validate: (cfg) => validateManagementBot(cfg),
      health: (env, cfg) => {
        const v = validateManagementBot(cfg);
        if (!v.ok) return { ok: false, detail: v.errors.join("; ") };
        return { ok: true, detail: `endpoint declared (${cfg.endpoint}) — no live handshake performed` };
      },
      status: (env, cfg) => ({
        provider: "gitbot",
        endpoint: cfg?.endpoint ?? null,
        identity: cfg?.identity ?? null,
        secretRef: cfg?.secret_ref ?? null,
        probed: false,
      }),
      ops: ["intake", "notify"],
    },
    opendots: {
      name: "opendots",
      kind: "management-bot",
      capabilities: ["intake", "messaging"],
      requiresEnv: [],
      describe:
        "OpenDots (github.com/CopilotKit/OpenDots) — a self-hosted template for always-on agents whose conversations require CopilotKit Intelligence. Same intake contract as GitBot; a remote endpoint needs a credential reference, HTTPS and an explicit opt-in.",
      validate: (cfg) => validateManagementBot(cfg),
      health: (env, cfg) => {
        const v = validateManagementBot(cfg);
        if (!v.ok) return { ok: false, detail: v.errors.join("; ") };
        return { ok: true, detail: `endpoint declared (${cfg.endpoint}) — no live handshake performed` };
      },
      status: (env, cfg) => ({
        provider: "opendots",
        endpoint: cfg?.endpoint ?? null,
        identity: cfg?.identity ?? null,
        secretRef: cfg?.secret_ref ?? null,
        probed: false,
      }),
      ops: ["intake", "notify"],
    },
    custom: {
      name: "custom",
      kind: "management-bot",
      capabilities: ["intake"],
      requiresEnv: [],
      describe: "A custom management-bot adapter supplied by the operator; ACE validates the same intake contract.",
      validate: (cfg) => validateManagementBot(cfg),
      health: (env, cfg) => {
        const v = validateManagementBot(cfg);
        return v.ok ? { ok: true, detail: "custom adapter declared" } : { ok: false, detail: v.errors.join("; ") };
      },
      status: (env, cfg) => ({ provider: "custom", endpoint: cfg?.endpoint ?? null, probed: false }),
      ops: ["intake"],
    },
  },
};

// `describe` is written as a string in the registry above because that is the
// readable form; the adapter contract calls it a method. Normalise once here
// rather than wrapping 34 identical arrow functions by hand.
for (const group of Object.values(ADAPTERS)) {
  for (const adapter of Object.values(group)) {
    if (typeof adapter.describe === "string") {
      const text = adapter.describe;
      adapter.describe = () => text;
    }
  }
}

/** Providers that exist in the modelled world but are not implemented here. */
export const KNOWN_UNIMPLEMENTED = {
  persistence: { sqlite: "no sqlite adapter is implemented; ACE persists to .ace/ (provider: filesystem)" },
  context: { vector: "no vector-store adapter is implemented; use acc or filesystem" },
  workspace: { docker: "no container isolation adapter is implemented; use git-worktree, branch or directory" },
};

/**
 * Resolve an adapter by kind and provider name.
 * Returns { adapter, ok, reason }: `ok: false` for unknown names or known but
 * unimplemented ones, with a reason that says what to do instead.
 */
export function resolveAdapter(kind, name) {
  if (!ADAPTER_KINDS.includes(kind)) {
    return { adapter: null, ok: false, reason: `unknown adapter kind "${kind}" (known: ${ADAPTER_KINDS.join(", ")})` };
  }
  const group = ADAPTERS[kind] ?? {};
  if (typeof name !== "string" || name.length === 0) {
    return { adapter: null, ok: false, reason: `adapter "${kind}" has no provider configured` };
  }
  const adapter = group[name];
  if (adapter) return { adapter, ok: true, reason: null };
  const unimplemented = KNOWN_UNIMPLEMENTED[kind]?.[name];
  if (unimplemented) {
    return { adapter: null, ok: false, reason: `adapter "${kind}:${name}" is not implemented — ${unimplemented}` };
  }
  return {
    adapter: null,
    ok: false,
    reason: `unknown ${kind} provider "${name}" (known: ${Object.keys(group).join(", ") || "none"})`,
  };
}

export function listAdapters(kind) {
  const group = ADAPTERS[kind];
  if (!group) return [];
  return Object.values(group).map((a) => ({
    name: a.name,
    kind: a.kind,
    capabilities: [...a.capabilities],
    requiresEnv: [...a.requiresEnv],
    describe: typeof a.describe === "function" ? a.describe() : String(a.describe),
  }));
}

/** Verify an adapter object satisfies the contract. Used by `ace doctor` and tests. */
export function checkContract(adapter) {
  const missing = [];
  if (!adapter || typeof adapter !== "object") return { ok: false, missing: ["<not an object>"] };
  if (typeof adapter.name !== "string" || adapter.name.length === 0) missing.push("name");
  if (typeof adapter.kind !== "string" || !ADAPTER_KINDS.includes(adapter.kind)) missing.push("kind");
  if (!Array.isArray(adapter.capabilities)) missing.push("capabilities[]");
  if (!Array.isArray(adapter.requiresEnv)) missing.push("requiresEnv[]");
  for (const m of CONTRACT_METHODS) {
    if (typeof adapter[m] !== "function") missing.push(`${m}()`);
  }
  return { ok: missing.length === 0, missing };
}

/** Every adapter in the registry, checked against the contract. */
export function auditRegistry() {
  const out = [];
  for (const kind of ADAPTER_KINDS) {
    for (const adapter of Object.values(ADAPTERS[kind] ?? {})) {
      const check = checkContract(adapter);
      out.push({ kind, name: adapter.name, ok: check.ok, missing: check.missing });
    }
  }
  return out;
}

/** Credentials an *active* configuration is missing, per kind. Never returns values. */
export function missingCredentials(config, env = process.env) {
  const out = [];
  for (const spec of adapterConfigs(config)) {
    const { adapter, ok, reason } = resolveAdapter(spec.kind, spec.provider);
    if (!ok) continue;
    if (adapter.requiresEnv.length === 0) continue;
    const missing = adapter.requiresEnv.filter((k) => !env || !env[k]);
    if (missing.length) out.push({ kind: spec.kind, provider: adapter.name, env: missing, where: spec.where });
  }
  return out;
}

/** Adapter health for every kind in the effective config. */
export function healthAll(config, env = process.env) {
  const out = [];
  for (const spec of adapterConfigs(config)) {
    const { adapter, ok, reason } = resolveAdapter(spec.kind, spec.provider);
    if (!ok) {
      out.push({ kind: spec.kind, provider: spec.provider, where: spec.where, ok: false, detail: reason });
      continue;
    }
    let health;
    try {
      health = adapter.health(env, spec.cfg) ?? { ok: true, detail: "no health probe" };
    } catch (err) {
      health = { ok: false, detail: String((err && err.message) || err) };
    }
    out.push({ kind: spec.kind, provider: adapter.name, where: spec.where, ok: Boolean(health.ok), detail: health.detail ?? "" });
  }
  return out;
}

/**
 * Every provider selection in the effective config, with the config path it
 * came from so errors can point at the file a human must edit.
 * `models` may declare per-role routes; those are adapter selections too.
 */
export function adapterConfigs(config) {
  const specs = [];
  const push = (kind, provider, where, cfg) => specs.push({ kind, provider, where, cfg });

  const adapters = config?.adapters ?? {};
  for (const kind of ADAPTER_KINDS) {
    if (kind === "management-bot") continue;
    const entry = adapters[kind];
    const provider = typeof entry === "string" ? entry : entry?.provider;
    if (provider) push(kind, provider, `adapters.${kind}.provider`, typeof entry === "object" ? entry : {});
  }

  const orchestratorRuntime = config?.orchestrator?.runtime ?? config?.roles?.governor?.runtime;
  if (orchestratorRuntime) push("agent-runtime", orchestratorRuntime, "orchestrator.runtime", {});

  for (const supervisor of config?.roles?.supervisors ?? []) {
    if (supervisor?.runtime) push("agent-runtime", supervisor.runtime, `roles.supervisors[${supervisor.project ?? "?"}].runtime`, {});
  }
  for (const worker of config?.roles?.workers ?? []) {
    if (worker?.runtime) push("agent-runtime", worker.runtime, `roles.workers[${worker.role ?? "?"}].runtime`, {});
  }

  const modelSelections = [
    ["models.default", config?.models?.default],
    ["roles.governor.model", config?.roles?.governor?.model],
  ];
  for (const [where, sel] of modelSelections) {
    if (sel?.provider) push("provider", sel.provider, `${where}.provider`, {});
  }
  for (const [role, chain] of Object.entries(config?.models?.routes ?? {})) {
    const entries = Array.isArray(chain) ? chain : [chain?.primary, ...(chain?.fallbacks ?? [])];
    entries.filter(Boolean).forEach((sel, i) => {
      if (sel?.provider) push("provider", sel.provider, `models.routes.${role}[${i}].provider`, {});
    });
  }

  // Management bots are only active when the experimental feature is enabled.
  if (config?.experimental?.management_bots?.enabled === true) {
    const bot = config.experimental.management_bots;
    push("management-bot", bot.provider ?? "gitbot", "experimental.management_bots.provider", bot);
  }

  return specs;
}
