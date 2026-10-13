/**
 * lib/intake.mjs — what ACE asks before it installs anything.
 *
 * The installer is not a template dump. It interrogates the operator (or the
 * agent acting for them) about THIS project, reads whatever the tree already
 * says about itself, and only then decides what to write. Two repos with the
 * same answers get the same setup; a different repo gets a different one.
 *
 * Three pure steps, so each can be tested without a terminal:
 *
 *   QUESTIONS            the interrogation — every question says WHY it matters
 *   validateAnswers()    what is missing or unusable, with the fix
 *   inspect(dir)         what the tree itself already tells us (facts)
 *   resolveContext()     answers + facts → the context every part is built from
 *
 * The context carries one load-bearing invariant, inherited from the stack the
 * installer writes: a project's id, its tab label, its browser space and the
 * basename of its tree are ONE name —
 *
 *     project.id === project.browser_space === basename(project.root)
 *
 * resolveContext() refuses to build a project where those disagree, because a
 * setup that names one thing three ways is the bug this stack exists to remove.
 *
 * Zero dependencies. Node builtins only.
 */

import fs from "node:fs";
import path from "node:path";

/** Coding harnesses the multiplexer can attach. Freebuff has no `agent start`
 *  value in Herdr, so it is offered but is not the default. */
export const HARNESSES = ["opencode", "claude", "codex", "gemini", "freebuff"];

/** Directory names that usually hold a repo's independent work areas. */
const WORKSPACE_BASES = ["experiments", "packages", "apps", "services", "projects", "modules", "sites", "tools", "workers"];

/** Top-level directories that are never a work area on their own. */
const NOT_A_PROJECT = new Set([
  ".git", ".github", ".ace", ".acc", ".agents", ".vercel", "node_modules", "dist", "build", "out",
  "coverage", "docs", "doc", "scripts", "tools", "lib", "src", "test", "tests", "public", "assets",
  "orchestration", "proagents", "engine", "infra", "config", "site",
]);

/**
 * The interrogation. `detects` names a fact from inspect() that becomes the
 * default, so an operator can accept what the tree already implies instead of
 * typing it again. `why` is not decoration: it is the reason a wrong answer
 * produces a broken setup, and it is printed with the question.
 */
export const QUESTIONS = [
  {
    id: "goal",
    prompt: "What outcome must this crew produce?",
    kind: "text",
    required: true,
    why: "the governor reports progress against the goal; with no declared goal every cycle is directionless",
  },
  {
    id: "money",
    prompt: "Which dollar can this work produce?",
    kind: "text",
    required: true,
    why: "a task that cannot name its dollar is not dispatched — this stack refuses work it cannot price",
  },
  {
    id: "projects",
    prompt: "Which trees does the crew work in? Each one gets a tab, a browser space and its own supervisor.",
    kind: "list",
    required: true,
    detects: "candidate_roots",
    why: "a project IS a space: its id, its tab label, its browser space and its tree name are one name",
  },
  {
    id: "harness",
    prompt: "Which coding harness should the agents run on?",
    kind: "choice",
    choices: HARNESSES,
    default: "opencode",
    why: "the harness is what the multiplexer attaches into each pane; the rest of the setup only names it",
  },
  {
    id: "model",
    prompt: "Which model should the crew use, as provider/model? (optional — leave it and no route is written)",
    kind: "text",
    required: false,
    why: "written into the ace key as the default route; without it ACE's own default applies until `ace route set` changes it",
  },
  {
    id: "cap",
    prompt: "How many workers may be running at once, across every project?",
    kind: "number",
    default: 4,
    min: 0,
    max: 64,
    why: "one global worker budget — not per project. The control plane is never counted against it",
  },
  {
    id: "workers_per_project",
    prompt: "How many workers should each project start with?",
    kind: "number",
    default: 1,
    min: 1,
    max: 8,
    why: "declared workers that do not fit the cap are trimmed and logged, not silently dropped",
  },
  {
    id: "browser",
    prompt: "Does any of this work need a browser?",
    kind: "bool",
    detects: "browser_work_suggested",
    default: false,
    why: "when yes, each project also gets its own browser space, named after the same project id",
  },
  {
    id: "verification",
    prompt: "What proves a change is done? (the commands the crew must re-run)",
    kind: "list",
    detects: "detected_verification",
    why: "a handoff that claims DONE without a command and its exit status is not accepted",
  },
  {
    id: "first_task",
    prompt: "What is the first task the crew should run? (optional, one line)",
    kind: "text",
    required: false,
    why: "an empty queue is allowed, but a queue with no money line is not",
  },
  {
    id: "deadline",
    prompt: "Any deadline worth writing down? (optional)",
    kind: "text",
    required: false,
    why: "recorded in the goal so a reviewer can tell a busy crew from a late one",
  },
];

function questionById(id) {
  return QUESTIONS.find((q) => q.id === id) ?? null;
}

// ---------------------------------------------------------------------------
// answers
// ---------------------------------------------------------------------------

/** One line per answer, for the plan's provenance block. */
export function answeredFrom(answers) {
  return Object.entries(answers || {})
    .filter(([, v]) => v !== undefined && v !== null && !(Array.isArray(v) && v.length === 0))
    .map(([k, v]) => ({ question: k, answer: Array.isArray(v) ? v.join(", ") : String(v) }));
}

function asList(value) {
  if (Array.isArray(value)) return value.map((v) => String(v).trim()).filter(Boolean);
  if (typeof value === "string" && value.trim()) return value.split(/[,\n]/).map((v) => v.trim()).filter(Boolean);
  return [];
}

/**
 * Validate the answers. Every error carries `field` and `fix`, because the
 * caller is often an agent that must repair the intake without a human.
 */
export function validateAnswers(answers, facts = {}) {
  const errors = [];
  const a = answers || {};

  for (const q of QUESTIONS) {
    const value = a[q.id];
    if (q.required && (value === undefined || value === null || (typeof value === "string" && !value.trim()))) {
      const detected = q.detects ? facts[q.detects] : null;
      const suggestion = Array.isArray(detected) && detected.length ? detected.join(", ") : detected ? String(detected) : null;
      errors.push({
        field: q.id,
        message: `"${q.id}" is required — ${q.prompt}`,
        fix: suggestion ? `detected: ${suggestion}` : `answer it in the intake file`,
      });
    }
  }

  if (a.harness !== undefined && !HARNESSES.includes(String(a.harness))) {
    errors.push({ field: "harness", message: `unknown harness "${a.harness}"`, fix: `use one of: ${HARNESSES.join(", ")}` });
  }

  for (const key of ["cap", "workers_per_project"]) {
    if (a[key] === undefined) continue;
    const q = questionById(key);
    const n = Number(a[key]);
    if (!Number.isFinite(n) || n < q.min || n > q.max) {
      errors.push({ field: key, message: `${key} must be a number between ${q.min} and ${q.max}, got ${JSON.stringify(a[key])}`, fix: `use a number in [${q.min}, ${q.max}]` });
    }
  }

  const projects = asList(a.projects);
  if (a.projects !== undefined && !projects.length) {
    errors.push({ field: "projects", message: "projects is empty", fix: "name at least one tree the crew works in" });
  }

  return { ok: errors.length === 0, errors };
}

// ---------------------------------------------------------------------------
// inspection — what the tree already says about itself
// ---------------------------------------------------------------------------

function readJsonFile(file) {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch {
    return null;
  }
}

function listDirs(dir) {
  try {
    return fs
      .readdirSync(dir, { withFileTypes: true })
      .filter((e) => e.isDirectory() && !e.name.startsWith(".") && e.name !== "node_modules")
      .map((e) => e.name);
  } catch {
    return [];
  }
}

/** A candidate work area: a directory that looks like it owns code or docs. */
function looksLikeProject(dir) {
  return (
    fs.existsSync(path.join(dir, "package.json")) ||
    fs.existsSync(path.join(dir, "README.md")) ||
    fs.existsSync(path.join(dir, "pyproject.toml")) ||
    fs.existsSync(path.join(dir, "go.mod")) ||
    fs.existsSync(path.join(dir, "Cargo.toml"))
  );
}

/**
 * Facts, never assumptions. `detected_verification` only reports scripts the
 * manifest actually declares — an invented "npm test" would make a verification
 * step that proves nothing.
 */
export function inspect(dir) {
  const pkg = readJsonFile(path.join(dir, "package.json"));
  const scripts = pkg?.scripts ?? {};
  const detectedVerification = ["lint", "typecheck", "type-check", "test", "build"]
    .filter((name) => typeof scripts[name] === "string")
    .map((name) => ({
      name,
      command: name === "type-check" ? "npm run type-check" : `npm run ${name}`,
    }));

  const candidates = [];
  for (const base of WORKSPACE_BASES) {
    const baseDir = path.join(dir, base);
    if (!fs.existsSync(baseDir)) continue;
    for (const name of listDirs(baseDir)) {
      const rel = `${base}/${name}`;
      if (looksLikeProject(path.join(dir, rel))) candidates.push(rel);
    }
  }
  if (!candidates.length) {
    for (const name of listDirs(dir)) {
      if (NOT_A_PROJECT.has(name)) continue;
      const rel = name;
      if (looksLikeProject(path.join(dir, rel))) candidates.push(rel);
    }
  }

  // Browser work is *suggested* when the manifest or the tree already reaches
  // for a browser; it is never assumed.
  const deps = { ...(pkg?.dependencies ?? {}), ...(pkg?.devDependencies ?? {}) };
  const browserDep = ["playwright", "puppeteer", "puppeteer-core", "@playwright/test", "selenium-webdriver"].some((d) => d in deps);
  const browserDir = ["e2e", "playwright", "tests/e2e"].some((p) => fs.existsSync(path.join(dir, p)));

  let isGit = false;
  let branch = null;
  try {
    isGit = fs.existsSync(path.join(dir, ".git"));
    const head = fs.readFileSync(path.join(dir, ".git", "HEAD"), "utf8").trim();
    branch = head.startsWith("ref: refs/heads/") ? head.slice("ref: refs/heads/".length) : null;
  } catch {
    /* a repo without .git/HEAD is a normal state, not an error */
  }

  return {
    dir,
    is_git: isGit,
    branch,
    manifest: pkg ? { name: pkg.name ?? null, scripts: Object.keys(scripts), workspaces: pkg.workspaces ?? null } : null,
    has_ace_key: Boolean(pkg?.ace),
    has_orchestration: fs.existsSync(path.join(dir, "orchestration", "projects.json")),
    has_acc_config: fs.existsSync(path.join(dir, ".acc", "config", "config.yaml")),
    has_acc_memory: fs.existsSync(path.join(dir, ".acc-memory.md")),
    has_agents_md: fs.existsSync(path.join(dir, "AGENTS.md")),
    candidate_roots: candidates.slice(0, 12),
    detected_verification: detectedVerification,
    browser_work_suggested: browserDep || browserDir,
    node: process.version,
  };
}

// ---------------------------------------------------------------------------
// context — the tailored thing every part is built from
// ---------------------------------------------------------------------------

/**
 * Project ids become agent names, tab labels and browser-space ids, so they
 * must satisfy the multiplexer's own rule: `[a-z][a-z0-9_-]{0,31}`. The 20-char
 * cap leaves room for the `-supervisor` suffix inside that budget.
 */
export function sanitizeId(text) {
  let id = String(text ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 20)
    .replace(/-+$/g, "");
  // Nothing usable in, nothing invented out: a name with no letters or digits is
  // not a name, and the caller reports it as a violation instead of shipping a
  // project the multiplexer cannot attach.
  if (!id) return "";
  if (!/^[a-z]/.test(id)) id = `p-${id}`.slice(0, 20).replace(/-+$/g, "");
  return id;
}

export function isValidAgentName(name) {
  return /^[a-z][a-z0-9_-]{0,31}$/.test(String(name));
}

function oneLine(text, fallback = "") {
  return String(text ?? fallback).replace(/\s+/g, " ").trim();
}

function agentNameFor(projectId, suffix) {
  return `${projectId}-${suffix}`.slice(0, 32);
}

/**
 * Answers + facts → context. Refuses (with reasons) rather than writing a setup
 * whose names disagree, whose project list is empty, or whose roots do not
 * exist: a generated topology that lies about the repo is worse than no
 * topology.
 */
export function resolveContext({ dir, answers, facts = inspect(dir) }) {
  const violations = [];
  const validation = validateAnswers(answers, facts);
  if (!validation.ok) {
    return { ok: false, context: null, violations: validation.errors.map((e) => `${e.field}: ${e.message}${e.fix ? ` (${e.fix})` : ""}`), validation };
  }
  const a = answers;

  const roots = asList(a.projects);
  const seenIds = new Map();
  const projects = [];

  for (const root of roots) {
    const cleaned = root.replace(/^\.\//, "").replace(/\/+$/, "");
    const abs = path.resolve(dir, cleaned);
    if (!fs.existsSync(abs)) {
      violations.push(`project root "${cleaned}" does not exist under ${dir} — a project is a real tree, not a name`);
      continue;
    }
    const id = sanitizeId(path.basename(cleaned));
    if (!id) {
      violations.push(`project root "${cleaned}" produces no usable id`);
      continue;
    }
    if (seenIds.has(id)) {
      violations.push(`project id "${id}" is already taken by "${seenIds.get(id)}" — ids are tab labels and browser spaces, so they must be unique`);
      continue;
    }
    seenIds.set(id, cleaned);

    const harness = String(a.harness ?? "opencode");
    const workers = Math.max(1, Number(a.workers_per_project ?? 1));
    const agents = [{ role: "supervisor", name: agentNameFor(id, "supervisor"), harness, priority: 1 }];
    for (let i = 0; i < workers; i++) {
      agents.push({
        role: "worker",
        name: agentNameFor(id, i === 0 ? "worker" : `worker-${i + 1}`),
        harness,
        priority: 2 + i,
        pool: "project",
        owned_paths: [cleaned],
      });
    }
    for (const agent of agents) {
      if (!isValidAgentName(agent.name)) {
        violations.push(`agent name "${agent.name}" is not attachable by the multiplexer (must match [a-z][a-z0-9_-]{0,31})`);
      }
    }

    projects.push({
      id,
      title: `${cleaned} — ${oneLine(a.goal).slice(0, 80) || "work area"}`,
      cwd: cleaned,
      root: cleaned,
      browser_space: id,
      owned_paths: [cleaned, `orchestration/state/${id}`],
      forbidden_paths: [],
      money: oneLine(a.money),
      agents,
      tasks: [],
    });
  }

  // Isolation is computed, not typed: every project is forbidden from every
  // other project's tree and state directory.
  for (const project of projects) {
    project.forbidden_paths = projects
      .filter((other) => other.id !== project.id)
      .flatMap((other) => [other.root, `orchestration/state/${other.id}`]);
  }

  const firstTask = oneLine(a.first_task);
  if (firstTask && projects.length) {
    const project = projects[0];
    const slug = sanitizeId(firstTask).slice(0, 12) || "first";
    project.tasks.push({
      id: `t1-${slug}`,
      title: firstTask,
      priority: 1,
      status: "pending",
      money: project.money,
      prompt: [
        firstTask,
        "",
        `Scope: write only inside ${project.root}. Do not read or write another project's tree or its state directory.`,
        "The handoff is the deliverable: write it as described below, with each acceptance line backed by the evidence that proves it.",
        "If you cannot finish, write the BLOCKED handoff and name the exact blocker instead of reporting success.",
      ].join("\n"),
      acceptance: [
        "the handoff artifact exists at the declared path and carries real evidence for every claim",
        "the verification commands above were run and their exit status recorded",
      ],
    });
  }

  // A pinned model is optional and validated: `provider/model`, because that is
  // the form ACE's route layer and the opencode session API both take. An
  // unparsable value is refused here rather than silently dropped — a --model
  // flag that quietly does nothing is worse than no flag.
  let model = null;
  if (a.model !== undefined && String(a.model).trim()) {
    const raw = String(a.model).trim();
    const slash = raw.indexOf("/");
    if (slash <= 0 || slash === raw.length - 1) {
      violations.push(`model must be "<provider>/<id>" (got "${raw}") — e.g. opencode/some-model`);
    } else {
      model = { provider: raw.slice(0, slash), model: raw.slice(slash + 1) };
    }
  }

  const cap = Number(a.cap ?? 4);
  const verification = asList(a.verification).length
    ? asList(a.verification).map((command) => ({ name: command.replace(/^npm run /, "").replace(/\s+/g, "-"), command }))
    : facts.detected_verification ?? [];

  const context = {
    dir,
    name: facts.manifest?.name || path.basename(dir),
    goal: { statement: oneLine(a.goal), deadline: oneLine(a.deadline) || null },
    money: oneLine(a.money),
    harness: String(a.harness ?? "opencode"),
    model,
    cap,
    browser: a.browser === true || String(a.browser) === "true",
    verification,
    projects,
    facts,
    answered: answeredFrom(a),
  };

  return { ok: violations.length === 0, context, violations, validation };
}
