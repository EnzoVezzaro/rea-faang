// exp-007-ace — lib/pkg.mjs
// Package format: parse/validate, lockfile, compose, resolveDependencies, doctor.
// Zero-dependency Node ESM. Only node builtins.
// Contract: ace-proagents/PLAN.md §3 (MVP) + §9 (phases 7-8)

import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { execFileSync } from "node:child_process";

// ---------------------------------------------------------------------------
// loadPackage(dir) -> { manifest, workspace, dir }
// Reads ONLY <dir>/package.json. workspace = manifest.ace (null if absent).
// No YAML parsing — the workspace spec lives in package.json's "ace" key.
// ---------------------------------------------------------------------------

export function loadPackage(dir) {
  const manifestPath = path.join(dir, "package.json");

  let manifest;
  try {
    manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  } catch (err) {
    throw new Error(`loadPackage: cannot read ${manifestPath} — ${err.message}`);
  }

  const workspace = isPlainObject(manifest) && isPlainObject(manifest.ace)
    ? manifest.ace
    : null;

  return { manifest, workspace, dir };
}

// ---------------------------------------------------------------------------
// validateWorkspace(obj) -> { ok, errors[] }
// Rules: spec === "ace/v1", name non-empty string, orchestrator.runtime/role
// present, agents.workers is array.
// ---------------------------------------------------------------------------

export function validateWorkspace(obj) {
  const errors = [];

  if (!obj || typeof obj !== "object" || Array.isArray(obj)) {
    return { ok: false, errors: ["workspace must be an object"] };
  }

  if (obj.spec !== "ace/v1") {
    errors.push('spec must be "ace/v1"');
  }

  if (typeof obj.name !== "string" || obj.name.length === 0) {
    errors.push("name must be a non-empty string");
  }

  const orch = obj.orchestrator;
  if (!orch || typeof orch !== "object" || Array.isArray(orch)) {
    errors.push("orchestrator must be an object");
  } else {
    if (typeof orch.runtime !== "string" || orch.runtime.length === 0) {
      errors.push("orchestrator.runtime is required");
    }
    if (typeof orch.role !== "string" || orch.role.length === 0) {
      errors.push("orchestrator.role is required");
    }
  }

  const agents = obj.agents;
  if (!agents || typeof agents !== "object" || Array.isArray(agents)) {
    errors.push("agents must be an object");
  } else if (!Array.isArray(agents.workers)) {
    errors.push("agents.workers must be an array");
  }

  // entry is optional; if present it must be an object of role -> relative path.
  if (obj.entry !== undefined) {
    if (typeof obj.entry !== "object" || obj.entry === null || Array.isArray(obj.entry)) {
      errors.push("entry must be an object mapping roles to relative paths");
    } else {
      for (const [k, v] of Object.entries(obj.entry)) {
        if (typeof v !== "string" || v.length === 0) {
          errors.push(`entry.${k} must be a non-empty string path`);
        }
      }
    }
  }

  return { ok: errors.length === 0, errors };
}

// ---------------------------------------------------------------------------
// readLockfile(dir) -> { packages: { name: { version, integrity } } } | null
// Reads <dir>/ace-lock.json — plain JSON.parse, no YAML.
// ---------------------------------------------------------------------------

export function readLockfile(dir) {
  const lockPath = path.join(dir, "ace-lock.json");
  if (!fs.existsSync(lockPath)) return null;

  let text;
  try {
    text = fs.readFileSync(lockPath, "utf8");
  } catch (err) {
    throw new Error(`readLockfile: cannot read ${lockPath} — ${err.message}`);
  }

  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch (err) {
    throw new Error(`readLockfile: cannot parse ${lockPath} — ${err.message}`);
  }

  if (parsed && typeof parsed === "object" && parsed.packages) {
    return parsed;
  }
  return null;
}

// ---------------------------------------------------------------------------
// writeLockfile(dir, lock) -> void
// Writes <dir>/ace-lock.json — JSON.stringify, pretty-printed.
// ---------------------------------------------------------------------------

export function writeLockfile(dir, lock) {
  const lockPath = path.join(dir, "ace-lock.json");
  const json = JSON.stringify(lock, null, 2) + "\n";
  fs.writeFileSync(lockPath, json, "utf8");
}

// ---------------------------------------------------------------------------
// Deep-merge helpers (used by compose)
// ---------------------------------------------------------------------------

function isPlainObject(v) {
  return v !== null && typeof v === "object" && !Array.isArray(v);
}

function clone(v) {
  if (Array.isArray(v)) return v.map(clone);
  if (isPlainObject(v)) {
    const out = {};
    for (const k of Object.keys(v)) out[k] = clone(v[k]);
    return out;
  }
  return v;
}

function deepEqual(a, b) {
  if (a === b) return true;
  if (typeof a !== typeof b) return false;
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    return a.every((x, i) => deepEqual(x, b[i]));
  }
  if (isPlainObject(a) && isPlainObject(b)) {
    const ka = Object.keys(a);
    const kb = Object.keys(b);
    if (ka.length !== kb.length) return false;
    return ka.every((k) => k in b && deepEqual(a[k], b[k]));
  }
  return false;
}

/**
 * Array membership with smart dedupe: objects carrying a `role` or `name`
 * key are considered equal when that key matches; everything else falls
 * back to deep equality.
 */
function arrayContains(arr, item) {
  if (isPlainObject(item) && ("role" in item || "name" in item)) {
    const key = "role" in item ? "role" : "name";
    return arr.some((x) => isPlainObject(x) && x[key] === item[key]);
  }
  return arr.some((x) => deepEqual(x, item));
}

/**
 * Deep-merge two values.
 *   - plain object + plain object  -> recursive merge (source wins on scalar)
 *   - array + array               -> concatenate, deduped
 *   - anything else               -> source wins (replaces target)
 */
export function deepMerge(target, source) {
  if (isPlainObject(target) && isPlainObject(source)) {
    const out = { ...target };
    for (const k of Object.keys(source)) {
      out[k] = k in out ? deepMerge(out[k], source[k]) : clone(source[k]);
    }
    return out;
  }
  if (Array.isArray(target) && Array.isArray(source)) {
    const out = [...target];
    for (const item of source) {
      if (!arrayContains(out, item)) out.push(clone(item));
    }
    return out;
  }
  return clone(source);
}

/**
 * Resolve one `extends` entry to a workspace object from the deps pool.
 * Entries may be: a string name (matched against dep.name), an integer
 * index into deps, or an inline object spec (used as-is).
 * Returns null when the entry cannot be resolved.
 */
function resolveDep(entry, pool) {
  if (isPlainObject(entry)) return entry;
  if (typeof entry === "number" && Number.isInteger(entry)) {
    const d = pool[entry];
    return d && typeof d === "object" ? d : null;
  }
  if (typeof entry === "string") {
    const byName = pool.find((d) => d && typeof d === "object" && d.name === entry);
    if (byName) return byName;
    if (/^\d+$/.test(entry)) {
      const d = pool[Number(entry)];
      return d && typeof d === "object" ? d : null;
    }
  }
  return null;
}

// ---------------------------------------------------------------------------
// compose(spec, deps) -> merged spec  (PLAN.md §9 phase 7)
//
// Merge semantics:
//   1. Parents come from spec.extends, resolved against the deps pool by
//      name or index. When extends is absent/empty, every dep is treated
//      as a parent (imperative composition: compose(child, [parent])).
//   2. Parents merge first (in extends order), the child spec last, so the
//      child wins on scalar conflict.
//   3. Arrays concatenate (parents first, child last) and are deduped by
//      role/name when items carry those keys.
//   4. Objects deep-merge recursively.
//   5. spec.overrides is deep-merged on top of everything.
//   6. spec.capabilities is filtered to those a runtime descriptor in deps
//      reports available; with no runtime descriptor, all are kept.
//   7. The input spec is never mutated; the result is a fresh object.
//   8. Consumed composition directives (extends, overrides) are stripped
//      from the output — a composed spec is flat and resolved.
// ---------------------------------------------------------------------------

export function compose(spec, deps) {
  const pool = Array.isArray(deps) ? deps : [];
  const src = isPlainObject(spec) ? spec : {};

  // 1. Determine the parent list
  let parents;
  if (Array.isArray(src.extends) && src.extends.length > 0) {
    parents = [];
    for (const entry of src.extends) {
      const resolved = resolveDep(entry, pool);
      if (resolved) parents.push(resolved);
    }
  } else {
    parents = pool.filter((d) => isPlainObject(d));
  }

  // 2. Merge parents first, child last
  let merged = {};
  for (const parent of parents) merged = deepMerge(merged, parent);
  merged = deepMerge(merged, src);

  // 3. Apply overrides on top
  if (isPlainObject(src.overrides)) {
    merged = deepMerge(merged, src.overrides);
  }

  // 4. Filter capabilities against a runtime descriptor, if one is present
  if (Array.isArray(merged.capabilities)) {
    const runtime = pool.find(
      (d) => isPlainObject(d) && !d.spec && Array.isArray(d.capabilities),
    );
    if (runtime) {
      const available = new Set(runtime.capabilities);
      merged.capabilities = merged.capabilities.filter((c) => available.has(c));
    }
  }

  // 5. Strip consumed directives
  delete merged.extends;
  delete merged.overrides;

  return merged;
}

// ---------------------------------------------------------------------------
// resolveDependencies(manifest, registry) -> { ok, graph, conflicts }
// (PLAN.md §9 phase 7)
//
// Walks manifest.dependencies ({ name: range }), resolves each to the highest
// version in the registry that satisfies the range, and reports any
// requirement that no registry version can satisfy as a conflict.
// Supported ranges: exact "1.2.3", caret "^1.2.3", tilde "~1.2.3",
// comparison operators (">=", "<=", ">", "<", "="), and "*" / "" (any).
// ---------------------------------------------------------------------------

function parseVersion(v) {
  const m = String(v).match(/^(\d+)\.(\d+)\.(\d+)/);
  if (!m) return null;
  return { major: +m[1], minor: +m[2], patch: +m[3] };
}

function compareVersions(a, b) {
  const pa = parseVersion(a);
  const pb = parseVersion(b);
  if (!pa || !pb) return String(a).localeCompare(String(b));
  if (pa.major !== pb.major) return pa.major - pb.major;
  if (pa.minor !== pb.minor) return pa.minor - pb.minor;
  return pa.patch - pb.patch;
}

export function satisfies(version, range) {
  const v = parseVersion(version);
  if (!v) return false;
  const r = String(range).trim();
  if (r === "*" || r === "") return true;

  // Caret: ^1.2.3 := >=1.2.3 <2.0.0; ^0.2.3 := >=0.2.3 <0.3.0; ^0.0.3 := >=0.0.3 <0.0.4
  let m = r.match(/^\^(\d+)\.(\d+)\.(\d+)$/);
  if (m) {
    const major = +m[1];
    const minor = +m[2];
    const patch = +m[3];
    if (v.major !== major) return false;
    if (major === 0) {
      if (minor === 0) return v.minor === 0 && v.patch === patch;
      return v.minor === minor && v.patch >= patch;
    }
    return v.minor > minor || (v.minor === minor && v.patch >= patch);
  }

  // Tilde: ~1.2.3 := >=1.2.3 <1.3.0
  m = r.match(/^~(\d+)\.(\d+)\.(\d+)$/);
  if (m) {
    return v.major === +m[1] && v.minor === +m[2] && v.patch >= +m[3];
  }

  // Comparison operators
  m = r.match(/^(>=|<=|>|<|=)?\s*(\d+)\.(\d+)\.(\d+)$/);
  if (m) {
    const op = m[1] || "=";
    const target = `${m[2]}.${m[3]}.${m[4]}`;
    const cmp = compareVersions(version, target);
    switch (op) {
      case ">=": return cmp >= 0;
      case "<=": return cmp <= 0;
      case ">": return cmp > 0;
      case "<": return cmp < 0;
      case "=":
      default: return cmp === 0;
    }
  }

  // Exact version
  if (parseVersion(r)) return compareVersions(version, r) === 0;

  return false;
}

export function resolveDependencies(manifest, registry) {
  const deps =
    isPlainObject(manifest) && isPlainObject(manifest.dependencies)
      ? manifest.dependencies
      : {};
  const reg = Array.isArray(registry) ? registry : [];

  const graph = {};
  const conflicts = [];

  for (const [name, range] of Object.entries(deps)) {
    const rangeStr = String(range);
    const satisfying = reg
      .filter((r) => isPlainObject(r) && r.name === name && typeof r.version === "string")
      .filter((r) => satisfies(r.version, rangeStr));

    if (satisfying.length === 0) {
      conflicts.push({ name, ranges: [rangeStr] });
    } else {
      satisfying.sort((a, b) => compareVersions(b.version, a.version));
      graph[name] = satisfying[0].version;
    }
  }

  return { ok: conflicts.length === 0, graph, conflicts };
}

// ---------------------------------------------------------------------------
// doctor(dir) -> { ok, checks, warnings }  (PLAN.md §9 phase 7)
// ---------------------------------------------------------------------------

function commandAvailable(cmd, args) {
  try {
    const out = execFileSync(cmd, args, { timeout: 5000, stdio: "pipe" });
    return { ok: true, detail: String(out).trim().split("\n")[0] };
  } catch {
    return { ok: false, detail: `${cmd} not available` };
  }
}

function checkCapability(cap) {
  switch (cap) {
    case "terminal":
      return { ok: true, detail: "node runtime available" };
    case "filesystem":
      return { ok: true, detail: "node fs available" };
    case "network": {
      const ifaces = os.networkInterfaces();
      const names = Object.keys(ifaces);
      return { ok: names.length > 0, detail: `${names.length} interface(s)` };
    }
    case "git":
      return commandAvailable("git", ["--version"]);
    case "docker":
      return commandAvailable("docker", ["--version"]);
    case "github":
      return commandAvailable("gh", ["--version"]);
    case "gpu":
      return { ok: false, detail: "no GPU probe on this platform" };
    default:
      return { ok: true, detail: "no probe available; assumed present" };
  }
}

export function doctor(dir) {
  const checks = [];
  const warnings = [];

  // Runtime present
  const runtimeOk = typeof process.execPath === "string" && process.execPath.length > 0;
  checks.push({
    name: "runtime",
    ok: runtimeOk,
    detail: runtimeOk ? `node ${process.version}` : "process.execPath unavailable",
  });

  // Host OS
  checks.push({
    name: "host",
    ok: true,
    detail: `${process.platform}/${process.arch}`,
  });

  // Memory
  const totalMem = os.totalmem();
  checks.push({
    name: "memory",
    ok: totalMem > 0,
    detail: `${Math.round(totalMem / (1024 * 1024))} MB total`,
  });

  // CPU
  const cpus = os.cpus();
  checks.push({
    name: "cpu",
    ok: cpus.length > 0,
    detail: `${cpus.length} core(s)`,
  });

  // Required capabilities from the ace spec in package.json
  let workspace = null;
  try {
    workspace = loadPackage(dir).workspace;
  } catch (err) {
    warnings.push(`cannot load workspace: ${err.message}`);
  }

  if (workspace && Array.isArray(workspace.capabilities)) {
    for (const cap of workspace.capabilities) {
      const result = checkCapability(cap);
      checks.push({ name: `capability:${cap}`, ok: result.ok, detail: result.detail });
    }
  }

  return { ok: checks.every((c) => c.ok), checks, warnings };
}
