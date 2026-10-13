/**
 * exp-007-ace — lib/registry.mjs
 *
 * Local file-backed registry + git-native install.
 * Zero dependencies. Registry lives at <ACE_DIR>/.ace-registry/ (gitignored).
 *
 * JSON-only: package.json carries the workspace spec under its "ace" key.
 * No YAML anywhere.
 */

import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";

const HERE = dirname(fileURLToPath(import.meta.url));
const ACE_DIR = resolve(HERE, ".."); // repo root (ace-proagents)
const REPO_ROOT = resolve(ACE_DIR, "..", ".."); // repo root
const REGISTRY_DIR = join(ACE_DIR, ".ace-registry");
const WORKSPACES_DIR = join(ACE_DIR, ".ace", "workspaces");

// ---------------------------------------------------------------------------
// helpers
// ---------------------------------------------------------------------------

function readJson(path) {
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch {
    return null;
  }
}

function writeJson(path, obj) {
  writeFileSync(path, JSON.stringify(obj, null, 2) + "\n", "utf8");
}

function sha256(text) {
  return createHash("sha256").update(text, "utf8").digest("hex");
}

function listPackageDirs() {
  if (!existsSync(REGISTRY_DIR)) return [];
  const out = [];
  for (const name of readdirSync(REGISTRY_DIR)) {
    if (existsSync(join(REGISTRY_DIR, name, "package.json"))) out.push(name);
  }
  return out.sort();
}

// ---------------------------------------------------------------------------
// search / info
// ---------------------------------------------------------------------------

export function searchLocal(query) {
  const q = String(query ?? "").toLowerCase();
  if (!q) return [];
  const out = [];
  for (const name of listPackageDirs()) {
    const pkg = readJson(join(REGISTRY_DIR, name, "package.json"));
    if (!pkg) continue;
    const hay = `${pkg.name ?? ""} ${pkg.description ?? ""}`.toLowerCase();
    let score = 0;
    let idx = hay.indexOf(q);
    while (idx !== -1) {
      score++;
      idx = hay.indexOf(q, idx + q.length);
    }
    if (score > 0) {
      out.push({ name: pkg.name ?? name, description: pkg.description ?? "", version: pkg.version ?? "0.0.0", score });
    }
  }
  return out.sort((a, b) => b.score - a.score);
}

export function infoLocal(name) {
  const dir = join(REGISTRY_DIR, name);
  const pkgPath = join(dir, "package.json");
  if (!existsSync(pkgPath)) return null;
  const pkg = readJson(pkgPath);
  if (!pkg) return null;

  const ace = pkg.ace ?? {};
  const workers = ace.agents?.workers;
  const agents = Array.isArray(workers)
    ? workers.map((w) => (typeof w === "string" ? w : w?.role)).filter(Boolean)
    : [];

  return {
    name: pkg.name ?? name,
    version: pkg.version ?? "0.0.0",
    description: pkg.description ?? "",
    orchestrator: ace.orchestrator ?? null,
    agents,
    tools: Array.isArray(ace.tools) ? ace.tools : [],
    runtime: ace.runtime?.provider ?? null,
    repository: pkg.repository ?? null,
    dependencies: Object.keys(pkg.dependencies ?? pkg.ace?.dependencies ?? {}),
  };
}

// ---------------------------------------------------------------------------
// git-native install
// ---------------------------------------------------------------------------

function parseRef(ref) {
  const s = String(ref ?? "");
  if (s.startsWith("github:")) {
    const rest = s.slice("github:".length);
    const [path, hash] = rest.split("#");
    const parts = path.split("/");
    const user = parts[0];
    const repo = parts[1];
    if (!user || !repo) throw new Error(`installGit: malformed github ref "${ref}"`);
    return { url: `https://github.com/${user}/${repo}.git`, name: repo, ref: hash ?? null };
  }
  if (s.startsWith("git+https://") || s.startsWith("git+http://")) {
    const rest = s.slice("git+".length);
    const [url, hash] = rest.split("#");
    const name = url.split("/").pop()?.replace(/\.git$/, "") ?? "workspace";
    return { url, name, ref: hash ?? null };
  }
  throw new Error(`installGit: unsupported ref "${ref}" (use github:user/repo[#ref] or git+https://...)`);
}

function gitErrorMessage(e) {
  const raw = e?.stderr ? String(e.stderr) : (e?.message ?? String(e));
  const lines = raw.split("\n").map((l) => l.trim()).filter(Boolean);
  const errLine = lines.find((l) => /error|fatal|not found|did not match|could not|unable/i.test(l));
  return (errLine ?? lines[lines.length - 1] ?? "unknown git error").slice(0, 200);
}

export function installGit(ref) {
  const { url, name, ref: checkoutRef } = parseRef(ref);
  const dir = join(WORKSPACES_DIR, name);
  if (existsSync(dir)) {
    throw new Error(`installGit: workspace already exists at ${dir}`);
  }
  mkdirSync(WORKSPACES_DIR, { recursive: true });
  const cloneArgs = ["clone", "--depth", "1"];
  if (checkoutRef) cloneArgs.push("--branch", checkoutRef);
  cloneArgs.push(url, dir);
  try {
    execFileSync("git", cloneArgs, {
      timeout: 30000,
      stdio: ["ignore", "pipe", "pipe"],
      encoding: "utf8",
    });
  } catch (e) {
    throw new Error(`installGit: git clone failed for ${url} — ${gitErrorMessage(e)}`);
  }
  if (checkoutRef) {
    try {
      execFileSync("git", ["-C", dir, "checkout", checkoutRef], {
        timeout: 30000,
        stdio: ["ignore", "pipe", "pipe"],
        encoding: "utf8",
      });
    } catch (e) {
      throw new Error(`installGit: checkout ${checkoutRef} failed in ${dir} — ${gitErrorMessage(e)}`);
    }
  }
  let version = "0.0.0";
  const pkgPath = join(dir, "package.json");
  if (existsSync(pkgPath)) {
    try {
      const pkg = readJson(pkgPath);
      if (pkg?.version) version = String(pkg.version);
      else if (pkg?.ace?.version) version = String(pkg.ace.version);
    } catch {
      /* keep default */
    }
  }
  return { dir, version };
}

// ---------------------------------------------------------------------------
// publish
// ---------------------------------------------------------------------------

export function publishLocal(pkg) {
  const dir = pkg?.dir;
  if (!dir || !existsSync(dir)) {
    throw new Error(`publishLocal: package dir not found: ${dir}`);
  }
  const pkgPath = join(dir, "package.json");
  if (!existsSync(pkgPath)) {
    throw new Error(`publishLocal: package.json not found at ${pkgPath}`);
  }
  const manifest = readJson(pkgPath);
  if (!manifest) {
    throw new Error(`publishLocal: could not parse ${pkgPath}`);
  }
  const name = manifest.name;
  if (!name) {
    throw new Error(`publishLocal: package.json has no name`);
  }
  const pkgText = readFileSync(pkgPath, "utf8");
  const integrity = "sha256:" + sha256(pkgText);

  const dest = join(REGISTRY_DIR, name);
  mkdirSync(dest, { recursive: true });
  // metadata record: preserve the full package.json (including the ace key)
  // and add the integrity hash of that package.json.
  writeJson(join(dest, "package.json"), { ...manifest, integrity });

  return { name, version: manifest.version ?? "0.0.0", integrity };
}
