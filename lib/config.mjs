/**
 * lib/config.mjs — effective configuration for an ACE workspace.
 *
 * Precedence (low → high), documented and deterministic:
 *
 *   built-in defaults  <  installation profile  <  environment profile
 *                      <  project config        <  task override  <  session override
 *
 * Where each layer lives:
 *
 *   defaults      code (defaultConfig() below)
 *   installation  $ACE_HOME/profile.json          ($ACE_HOME defaults to ~/.ace)
 *   environment   $ACE_PROFILE_FILE               (+ ACE_MAX_ACTIVE_AGENTS convenience)
 *   project       <workspace>/package.json → "ace"
 *   task          <workspace>/.ace/tasks/<id>.json → "config"
 *   session       <workspace>/.ace/session.json
 *
 * Desired configuration (package.json + ace-lock.json) stays separate from
 * runtime state (.ace/). This module only reads that state to *layer* it; it
 * never writes anything except the explicit session/task setters.
 *
 * Security policies are enforced separately from precedence: a lower-trust
 * layer (project, task, session) may not loosen a security key that an
 * operator-owned layer (installation or environment profile) explicitly set.
 * See LAYER_AUTHORITY for why the built-in defaults are not a floor.
 *
 * Zero dependencies. Node builtins only.
 */

import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { deepMerge } from "./pkg.mjs";
import {
  ADAPTER_KINDS,
  adapterConfigs,
  missingCredentials,
  resolveAdapter,
} from "./adapters/index.mjs";

export const LAYER_ORDER = ["defaults", "installation", "environment", "project", "task", "session"];

/**
 * Layers whose *explicit* setting becomes a security floor.
 *
 * The built-in defaults are deliberately not here. They describe the shipped
 * baseline (management bots off, network restricted), not an operator
 * decision — and a floor made of defaults would mean no package could ever
 * enable a gated feature in its own `package.json`, which is not a security
 * property, just an unusable setting. Only a profile the operator wrote
 * (installation or environment) can pin a security key against lower layers.
 */
export const LAYER_AUTHORITY = ["installation", "environment"];

/**
 * Keys a lower-trust layer may never loosen once a higher-authority layer has
 * set them. `loosen(prev, next)` answers "is next weaker than prev?".
 */
export const SECURITY_KEYS = [
  { path: "network.mode", loosen: (prev, next) => prev === "restricted" && next !== "restricted" },
  { path: "filesystem.mode", loosen: (prev, next) => prev === "workspace" && next !== "workspace" },
  { path: "git.push", loosen: (prev, next) => prev === false && next === true },
  { path: "policies.require_review_before_merge", loosen: (prev, next) => prev === true && next === false },
  { path: "policies.production_access", loosen: (prev, next) => prev === false && next === true },
  { path: "production.access", loosen: (prev, next) => prev === false && next === true },
  { path: "experimental.management_bots.enabled", loosen: (prev, next) => prev === false && next === true },
];

/** Flags whose presence in config marks them as "explicitly enabled". */
export const MAX_ACTIVE_AGENTS_DEFAULT = 4;

// ---------------------------------------------------------------------------
// built-in defaults
// ---------------------------------------------------------------------------

export function defaultConfig() {
  return {
    spec: "ace/v1",
    default_agent_limit: MAX_ACTIVE_AGENTS_DEFAULT,
    roles: {
      governor: {
        role: "governor",
        scope: "environment",
        heartbeat_seconds: 30,
        idle_mode: "monitor",
      },
      supervisors: [
        {
          role: "supervisor",
          project: "primary",
          workspace: ".",
        },
      ],
      workers: [],
    },
    concurrency: {
      max_active_agents: MAX_ACTIVE_AGENTS_DEFAULT,
      count_governor: false,
      count_supervisors: false,
      runtime_overrides: {},
      enforce_across_runtimes: true,
      allow_project_raise: true,
    },
    models: {
      default: { provider: "opencode", model: "fledge-alpha-free" },
      routes: {},
    },
    recovery: {
      stale_heartbeat_seconds: 90,
      progress_window_seconds: 900,
      max_restarts: 3,
      max_route_switches: 3,
      cooldown_seconds: 60,
      lease_seconds: 120,
      backoff_seconds: 30,
    },
    adapters: {
      multiplexer: { provider: "herdr" },
      workspace: { provider: "git-worktree" },
      "agent-runtime": { provider: "local" },
      provider: { provider: "local" },
      context: { provider: "filesystem" },
      handoff: { provider: "filesystem" },
      tools: { provider: "filesystem" },
      verification: { provider: "package-scripts" },
      persistence: { provider: "filesystem" },
      watchdog: { provider: "local" },
    },
    watchdog: {
      enabled: true,
      interval_seconds: 60,
      restarts_allowed: 3,
      cooldown_seconds: 120,
    },
    experimental: {
      management_bots: {
        enabled: false,
        provider: "gitbot",
        endpoint: null,
        identity: null,
        secret_ref: null,
        projects: {},
        permissions: [],
        delivery: { max_attempts: 3, backoff_seconds: 30 },
      },
    },
    context: {
      sharing: "isolated",
      providers: [],
    },
    goal: {
      statement: null,
      milestones: [],
    },
    verification: {
      checks: ["lint", "typecheck", "test", "build"],
      require_evidence: true,
    },
  };
}

// ---------------------------------------------------------------------------
// path helpers
// ---------------------------------------------------------------------------

function isPlainObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function clone(value) {
  if (Array.isArray(value)) return value.map(clone);
  if (isPlainObject(value)) {
    const out = {};
    for (const key of Object.keys(value)) out[key] = clone(value[key]);
    return out;
  }
  return value;
}

/**
 * Layer merge semantics for configuration overrides.
 *
 * Objects merge recursively and scalars replace — but an array REPLACES the
 * one below it, unlike package composition (`pkg.compose`, which concatenates
 * declarations from extended packages and dedupes by role/name). The
 * difference matters: two supervisors both carry `role: "supervisor"`, so
 * concatenate-and-dedupe-by-role would silently drop the second project's
 * supervisor. A project that declares an array means exactly that array.
 *
 * To extend a route chain from a higher layer, restate it in full.
 */
export function mergeOverride(target, source) {
  if (isPlainObject(target) && isPlainObject(source)) {
    const out = { ...target };
    for (const key of Object.keys(source)) {
      out[key] = key in out ? mergeOverride(out[key], source[key]) : clone(source[key]);
    }
    return out;
  }
  return clone(source);
}

export function getPath(obj, dotted) {
  let cur = obj;
  for (const part of dotted.split(".")) {
    if (cur === null || typeof cur !== "object") return undefined;
    cur = cur[part];
  }
  return cur;
}

export function setPath(obj, dotted, value) {
  const parts = dotted.split(".");
  let cur = obj;
  for (const part of parts.slice(0, -1)) {
    if (cur[part] === null || typeof cur[part] !== "object") cur[part] = {};
    cur = cur[part];
  }
  cur[parts[parts.length - 1]] = value;
  return obj;
}

function readJson(p) {
  try {
    const parsed = JSON.parse(fs.readFileSync(p, "utf8"));
    return parsed && typeof parsed === "object" ? parsed : null;
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// layers
// ---------------------------------------------------------------------------

export function aceHome(env = process.env) {
  return env.ACE_HOME && env.ACE_HOME.length > 0 ? env.ACE_HOME : path.join(os.homedir(), ".ace");
}

/** Coerce the operator's convenience env var into a concurrency patch. */
function envOverrides(env) {
  const out = {};
  const raw = env.ACE_MAX_ACTIVE_AGENTS;
  if (raw !== undefined && raw !== "") {
    const n = Number.parseInt(String(raw), 10);
    if (Number.isFinite(n)) out.concurrency = { max_active_agents: n };
  }
  return out;
}

/**
 * Read every layer for a workspace. Missing or malformed files are warnings,
 * never throws — a broken session override must not make the workspace unusable.
 */
export function readLayers({ dir, taskId = null, env = process.env, extra = {} } = {}) {
  const warnings = [];
  const layers = { defaults: defaultConfig(), installation: null, environment: null, project: null, task: null, session: null };

  const installPath = path.join(aceHome(env), "profile.json");
  if (fs.existsSync(installPath)) {
    const parsed = readJson(installPath);
    if (parsed) layers.installation = parsed;
    else warnings.push(`installation profile at ${installPath} is not valid JSON — ignored`);
  }

  if (env.ACE_PROFILE_FILE) {
    if (fs.existsSync(env.ACE_PROFILE_FILE)) {
      const parsed = readJson(env.ACE_PROFILE_FILE);
      if (parsed) layers.environment = parsed;
      else warnings.push(`environment profile at ${env.ACE_PROFILE_FILE} is not valid JSON — ignored`);
    } else {
      warnings.push(`ACE_PROFILE_FILE points at ${env.ACE_PROFILE_FILE}, which does not exist — ignored`);
    }
  } else if (Object.keys(envOverrides(env)).length > 0) {
    layers.environment = envOverrides(env);
  }

  if (dir) {
    const pkg = readJson(path.join(dir, "package.json"));
    if (pkg && pkg.ace && typeof pkg.ace === "object") layers.project = pkg.ace;
    else warnings.push(`${path.join(dir, "package.json")} has no "ace" key — project layer is empty`);

    const taskPath = taskId ? path.join(dir, ".ace", "tasks", `${taskId}.json`) : null;
    if (taskPath && fs.existsSync(taskPath)) {
      const task = readJson(taskPath);
      if (task && task.config && typeof task.config === "object") layers.task = task.config;
      else warnings.push(`task ${taskId} declares no config override`);
    }

    const sessionPath = path.join(dir, ".ace", "session.json");
    if (fs.existsSync(sessionPath)) {
      const parsed = readJson(sessionPath);
      if (parsed) layers.session = parsed;
      else warnings.push(`session override at ${sessionPath} is not valid JSON — ignored`);
    }
  }

  for (const [name, value] of Object.entries(extra)) {
    if (value && typeof value === "object") layers[name] = value;
  }

  return { layers, warnings };
}

/**
 * Merge layers in precedence order and record which layer last set each leaf
 * path (used by `ace config --resolve` to explain where a value came from).
 */
export function mergeLayers(layers) {
  let effective = {};
  const sources = {};

  for (const name of LAYER_ORDER) {
    const layer = layers[name];
    if (!layer || typeof layer !== "object") continue;
    effective = mergeOverride(effective, layer);
    collectPaths(layer, "", sources, name);
  }

  return { effective, sources };
}

function collectPaths(obj, prefix, sources, layerName) {
  if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
    sources[prefix] = layerName;
    return;
  }
  for (const [key, value] of Object.entries(obj)) {
    const next = prefix ? `${prefix}.${key}` : key;
    if (value !== null && typeof value === "object" && !Array.isArray(value)) {
      collectPaths(value, next, sources, layerName);
    } else {
      sources[next] = layerName;
    }
  }
}

/**
 * Security floor: a lower-trust layer must not loosen a security key that a
 * higher-authority layer set. Returns every violation with both values.
 */
export function checkSecurityFloor(layers) {
  const violations = [];
  for (const key of SECURITY_KEYS) {
    let floor = undefined;
    let floorLayer = null;
    for (const name of LAYER_AUTHORITY) {
      const value = layers[name] ? getPath(layers[name], key.path) : undefined;
      if (value !== undefined) {
        floor = value;
        floorLayer = name;
      }
    }
    if (floor === undefined) continue;
    for (const name of ["project", "task", "session"]) {
      const value = layers[name] ? getPath(layers[name], key.path) : undefined;
      if (value === undefined) continue;
      if (key.loosen(floor, value)) {
        violations.push({
          code: "SECURITY_OVERRIDE_DENIED",
          path: key.path,
          floor: { layer: floorLayer, value: floor },
          attempted: { layer: name, value },
          message: `${name} config loosens ${key.path} (${JSON.stringify(floor)} → ${JSON.stringify(value)}) set by the ${floorLayer} layer`,
          fix: `Move this change to the installation or environment profile, or leave ${key.path} at ${JSON.stringify(floor)}`,
        });
      }
    }
  }
  return { ok: violations.length === 0, violations };
}

/**
 * Resolve the effective configuration for a workspace.
 * Returns the merged object, per-path sources, the raw layers (for auditing),
 * warnings, and the security-floor verdict. Never throws.
 */
export function resolveConfig(options = {}) {
  const { layers, warnings } = readLayers(options);
  const { effective, sources } = mergeLayers(layers);
  const floor = checkSecurityFloor(layers);
  return { effective, sources, layers, warnings, security: floor };
}

// ---------------------------------------------------------------------------
// validation of the *effective* configuration
// ---------------------------------------------------------------------------

function err(code, where, message, fix) {
  return { code, where, message, fix };
}

const ADAPTER_KEY_TO_KIND = Object.fromEntries(ADAPTER_KINDS.map((k) => [k, k]));

/**
 * Validate the effective configuration, not just the input files.
 * Every error carries a code and an actionable fix.
 */
export function validateEffective(config, { env = process.env, layers = null } = {}) {
  const errors = [];

  if (!config || typeof config !== "object") {
    return { ok: false, errors: [err("UNSUPPORTED_SETTING", "<root>", "effective config is not an object", "Run `ace init` to scaffold a package.json with an \"ace\" key")] };
  }

  if (config.spec !== undefined && config.spec !== "ace/v1") {
    errors.push(err("UNSUPPORTED_SETTING", "spec", `spec must be "ace/v1", got ${JSON.stringify(config.spec)}`, "Set \"ace\".spec to \"ace/v1\""));
  }

  // roles
  const roles = config.roles;
  if (roles !== undefined && (roles === null || typeof roles !== "object" || Array.isArray(roles))) {
    errors.push(err("UNSUPPORTED_SETTING", "roles", "roles must be an object", "roles declares governor, supervisors[] and workers[]"));
  } else if (roles) {
    if (roles.supervisors !== undefined && !Array.isArray(roles.supervisors)) {
      errors.push(err("UNSUPPORTED_SETTING", "roles.supervisors", "roles.supervisors must be an array", "Use [{ \"role\": \"supervisor\", \"project\": \"primary\" }]"));
    }
    for (const [i, sup] of (roles.supervisors ?? []).entries()) {
      if (!sup || typeof sup !== "object") {
        errors.push(err("UNSUPPORTED_SETTING", `roles.supervisors[${i}]`, "each supervisor must be an object", "Give it at least { role, project }"));
        continue;
      }
      if (typeof sup.project !== "string" || sup.project.length === 0) {
        errors.push(err("UNSUPPORTED_SETTING", `roles.supervisors[${i}].project`, "supervisor.project is required", "Name the project this supervisor owns"));
      }
      if (sup.workspace !== undefined && typeof sup.workspace !== "string") {
        errors.push(err("UNSUPPORTED_SETTING", `roles.supervisors[${i}].workspace`, "supervisor.workspace must be a path string", "e.g. \"..\" or \"worktrees/api\""));
      }
    }
    if (roles.workers !== undefined && !Array.isArray(roles.workers)) {
      errors.push(err("UNSUPPORTED_SETTING", "roles.workers", "roles.workers must be an array", "Use [{ \"role\": \"backend\" }]"));
    }
    for (const [i, worker] of (roles.workers ?? []).entries()) {
      if (!worker || typeof worker !== "object" || typeof worker.role !== "string" || worker.role.length === 0) {
        errors.push(err("UNSUPPORTED_SETTING", `roles.workers[${i}]`, "each worker needs a non-empty role", "Use { \"role\": \"backend\", \"runtime\": \"opencode\" }"));
      }
    }
  }

  // concurrency
  const c = config.concurrency;
  if (c !== undefined && (c === null || typeof c !== "object" || Array.isArray(c))) {
    errors.push(err("UNSUPPORTED_SETTING", "concurrency", "concurrency must be an object", "e.g. { \"max_active_agents\": 4 }"));
  } else if (c) {
    const limit = c.max_active_agents;
    if (limit !== undefined && (!Number.isInteger(limit) || limit < 1)) {
      errors.push(err("UNSUPPORTED_SETTING", "concurrency.max_active_agents", `must be an integer >= 1, got ${JSON.stringify(limit)}`, "Set concurrency.max_active_agents to a positive integer (default 4)"));
    }
    if (c.runtime_overrides !== undefined) {
      if (c.runtime_overrides === null || typeof c.runtime_overrides !== "object" || Array.isArray(c.runtime_overrides)) {
        errors.push(err("UNSUPPORTED_SETTING", "concurrency.runtime_overrides", "runtime_overrides must map runtime → integer cap", "e.g. { \"opencode\": 2 }"));
      } else {
        for (const [runtime, cap] of Object.entries(c.runtime_overrides)) {
          if (!Number.isInteger(cap) || cap < 0) {
            errors.push(err("UNSUPPORTED_SETTING", `concurrency.runtime_overrides.${runtime}`, "per-runtime caps must be integers >= 0", "Use 0 to pause a runtime"));
          }
        }
      }
    }
  }

  // recovery numbers
  const r = config.recovery;
  if (r !== undefined) {
    if (!r || typeof r !== "object" || Array.isArray(r)) {
      errors.push(err("UNSUPPORTED_SETTING", "recovery", "recovery must be an object", "See defaultConfig() for the shape"));
    } else {
      for (const key of ["stale_heartbeat_seconds", "progress_window_seconds", "max_restarts", "max_route_switches", "cooldown_seconds", "lease_seconds", "backoff_seconds"]) {
        const v = r[key];
        if (v === undefined) continue;
        if (typeof v !== "number" || !Number.isFinite(v) || v < 0) {
          errors.push(err("UNSUPPORTED_SETTING", `recovery.${key}`, `${key} must be a non-negative number, got ${JSON.stringify(v)}`, "See defaultConfig().recovery"));
        }
      }
    }
  }

  // models
  const models = config.models;
  if (models !== undefined && (models === null || typeof models !== "object" || Array.isArray(models))) {
    errors.push(err("UNSUPPORTED_SETTING", "models", "models must be an object", "e.g. { \"default\": { \"provider\": \"opencode\", \"model\": \"fledge-alpha-free\" } }"));
  } else if (models) {
    if (models.default !== undefined) {
      const invalid = modelSelectionError(models.default, "models.default");
      if (invalid) errors.push(invalid);
    }
    if (models.routes !== undefined) {
      if (models.routes === null || typeof models.routes !== "object" || Array.isArray(models.routes)) {
        errors.push(err("UNSUPPORTED_SETTING", "models.routes", "routes must map a role to a chain", "e.g. { \"worker\": { \"primary\": {...}, \"fallbacks\": [...] } }"));
      } else {
        for (const [role, chain] of Object.entries(models.routes)) {
          const entries = Array.isArray(chain) ? chain : [chain?.primary, ...(chain?.fallbacks ?? [])];
          const real = entries.filter(Boolean);
          if (real.length === 0) {
            errors.push(err("INVALID_MODEL", `models.routes.${role}`, `route chain for "${role}" has no entries`, "Declare at least a primary { provider, model } or remove the key"));
            continue;
          }
          real.forEach((sel, i) => {
            const invalid = modelSelectionError(sel, `models.routes.${role}[${i}]`);
            if (invalid) errors.push(invalid);
          });
        }
      }
    }
  }

  // adapters (declared, known, contract-valid)
  const adapters = config.adapters;
  if (adapters !== undefined && (adapters === null || typeof adapters !== "object" || Array.isArray(adapters))) {
    errors.push(err("UNSUPPORTED_SETTING", "adapters", "adapters must be an object of kind → { provider }", "See defaultConfig().adapters"));
  }

  for (const spec of adapterConfigs(config)) {
    const kind = spec.kind;
    if (!ADAPTER_KEY_TO_KIND[kind]) {
      errors.push(err("INCOMPATIBLE_ADAPTER", spec.where, `unknown adapter kind "${kind}"`, `Known kinds: ${ADAPTER_KINDS.join(", ")}`));
      continue;
    }
    const { adapter, ok, reason } = resolveAdapter(kind, spec.provider);
    if (!ok) {
      errors.push(err("INCOMPATIBLE_ADAPTER", spec.where, reason, `Choose a provider that ships with ACE, or implement the ${kind} adapter contract in lib/adapters/`));
      continue;
    }
    const verdict = adapter.validate(spec.cfg ?? {});
    if (!verdict.ok) {
      const fix = kind === "management-bot"
        ? `Complete ${spec.where}: endpoint, identity, secret_ref and a projects mapping — or set experimental.management_bots.enabled to false`
        : `Fix ${spec.where} or point it at another ${kind} provider`;
      for (const message of verdict.errors ?? ["adapter rejected its configuration"]) {
        errors.push(err("INCOMPATIBLE_ADAPTER", spec.where, `${kind}:${spec.provider} — ${message}`, fix));
      }
    }
  }

  // credentials for providers that are actually active
  const missing = missingCredentials(config, env);
  for (const item of missing) {
    const suggestion = item.kind === "management-bot"
      ? "Provide the credential server-side, then set experimental.management_bots.secret_ref to a name written with `ace secret set <name>`"
      : `Export ${item.env.join(" / ")}, or route this ${item.kind} to a provider that needs no credential`;
    errors.push(err("MISSING_CREDENTIAL", item.where, `${item.kind}:${item.provider} needs ${item.env.join(", ")}`, suggestion));
  }

  // experimental management bots fail closed on incomplete security configuration
  // The management-bot adapter selection and its own validation are already
  // covered by adapterConfigs() above; only the bot-specific policy is added
  // here, so one problem is never reported twice.
  const bots = config.experimental?.management_bots;
  if (bots?.enabled === true) {
    if (Array.isArray(bots.permissions) && bots.permissions.includes("*")) {
      errors.push(err("UNSUPPORTED_SETTING", "experimental.management_bots.permissions", "wildcard permission is not allowed", "List the operations the bot may request explicitly"));
    }
  }

  // security floor
  if (layers) {
    const floor = checkSecurityFloor(layers);
    errors.push(...floor.violations.map((v) => err(v.code, v.path, v.message, v.fix)));
  }

  return { ok: errors.length === 0, errors };
}

function modelSelectionError(sel, where) {
  if (sel === null || typeof sel !== "object" || Array.isArray(sel)) {
    return err("INVALID_MODEL", where, "a model selection must be an object", "Use { \"provider\": \"opencode\", \"model\": \"<id>\" }");
  }
  if (typeof sel.provider !== "string" || sel.provider.length === 0) {
    return err("INVALID_MODEL", where, "provider must be a non-empty string", "Name the model provider, e.g. \"opencode\"");
  }
  if (typeof sel.model !== "string" || sel.model.length === 0) {
    return err("INVALID_MODEL", where, "model must be a non-empty model identifier", "e.g. \"fledge-alpha-free\"; a provider alone cannot be routed");
  }
  if (/\s/.test(sel.model)) {
    return err("INVALID_MODEL", where, `model id must not contain spaces, got ${JSON.stringify(sel.model)}`, "Use the provider's exact model identifier");
  }
  return null;
}

// ---------------------------------------------------------------------------
// budget policy (installation may pin the limit; project may raise it)
// ---------------------------------------------------------------------------

/**
 * A project/task layer may raise the active-agent limit only when the
 * higher-authority layers allow it (`concurrency.allow_project_raise`).
 * Returns { allowed, limit, reason } for the requested limit.
 */
export function checkBudgetRaise(effective) {
  const requested = effective.concurrency?.max_active_agents ?? MAX_ACTIVE_AGENTS_DEFAULT;
  const pinned = effective.concurrency?.pinned_limit;
  const allowsRaise = effective.concurrency?.allow_project_raise !== false;
  if (typeof pinned === "number" && requested > pinned && !allowsRaise) {
    return {
      allowed: false,
      limit: pinned,
      reason: `installation policy pins max_active_agents to ${pinned} and forbids project raises`,
    };
  }
  return { allowed: true, limit: requested, reason: null };
}

// ---------------------------------------------------------------------------
// session and task overrides
// ---------------------------------------------------------------------------

export function sessionPath(dir) {
  return path.join(dir, ".ace", "session.json");
}

export function readSessionOverride(dir) {
  return readJson(sessionPath(dir));
}

/** Merge a dotted-path patch into .ace/session.json (the highest-precedence layer). */
export function writeSessionOverride(dir, patch) {
  const current = readSessionOverride(dir) ?? {};
  const merged = mergeOverride(current, patch);
  fs.mkdirSync(path.dirname(sessionPath(dir)), { recursive: true });
  fs.writeFileSync(sessionPath(dir), JSON.stringify(merged, null, 2) + "\n", "utf8");
  return merged;
}

/** Parse `a.b.c=value` into a typed patch object ({ a: { b: { c: value } } }). */
export function parseOverridePair(pair) {
  const eq = String(pair).indexOf("=");
  if (eq < 1) throw new Error(`override must look like key=value, got "${pair}"`);
  const key = pair.slice(0, eq).trim();
  const raw = pair.slice(eq + 1).trim();
  let value;
  if (raw === "true") value = true;
  else if (raw === "false") value = false;
  else if (raw === "null") value = null;
  else if (/^-?\d+$/.test(raw)) value = Number.parseInt(raw, 10);
  else if (raw.startsWith("{") || raw.startsWith("[")) value = JSON.parse(raw);
  else value = raw;
  return { key, value, patch: setPath({}, key, value) };
}

/** Which layer last set each requested path, for `ace config --resolve`. */
export function explainSources(resolved, paths) {
  return paths.map((p) => ({ path: p, layer: resolved.sources[p] ?? null }));
}

/** Mask anything that looks like a credential before it reaches stdout or logs. */
export function redactConfig(value) {
  const SECRET_KEY = /(secret|token|password|api[_-]?key|credential)/i;
  const walk = (node, keyName) => {
    if (Array.isArray(node)) return node.map((v) => walk(v, keyName));
    if (node && typeof node === "object") {
      const out = {};
      for (const [k, v] of Object.entries(node)) out[k] = walk(v, k);
      return out;
    }
    if (typeof node === "string" && keyName && SECRET_KEY.test(keyName)) {
      return node.startsWith("secret:") || node.startsWith("env:") ? node : "<redacted>";
    }
    return node;
  };
  return walk(value, null);
}
