/**
 * lib/cli-stack.mjs — `ace setup` and `ace parts`.
 *
 * `ace setup` is the installer: it interrogates, inspects, plans, applies and
 * verifies. It is the one command that turns an ordinary repository into one
 * where a governor, project supervisors and workers can operate.
 *
 * It is deliberately NOT part of the governance command surface: governance
 * commands refuse to act outside an initialized workspace, and this is the
 * command that initializes one.
 *
 *   ace setup                          interrogate on a terminal, then install
 *   ace setup --intake intake.json     answers from a file (the agent path)
 *   ace setup --goal "…" --money "…" --projects a,b   answers as flags
 *   ace setup --dry-run                print the plan; write nothing
 *   ace setup --parts herdr-spaces,govern   install a subset (dependencies come too)
 *   ace setup --force                  overwrite generated files that differ
 *
 * Exit codes: 0 installed and verified · 1 installed but a check failed or an
 * operator must act · 2 usage or intake error.
 *
 * Zero dependencies. Node builtins only.
 */

import fs from "node:fs";
import path from "node:path";
import readline from "node:readline/promises";

import * as intake from "./intake.mjs";
import * as stack from "./stack.mjs";

// ---------------------------------------------------------------------------
// answers: file, flags, or a terminal
// ---------------------------------------------------------------------------

const FLAG_TO_QUESTION = {
  "--goal": "goal",
  "--money": "money",
  "--projects": "projects",
  "--harness": "harness",
  "--cap": "cap",
  "--workers-per-project": "workers_per_project",
  "--browser": "browser",
  "--verification": "verification",
  "--first-task": "first_task",
  "--deadline": "deadline",
  "--model": "model",
};

function valueOf(argv, i) {
  const token = argv[i];
  const eq = token.indexOf("=");
  if (eq > 0) return { value: token.slice(eq + 1), skip: 0 };
  const next = argv[i + 1];
  if (next === undefined || next.startsWith("--")) return { value: true, skip: 0 };
  return { value: next, skip: 1 };
}

/** flags → answers. `--browser` alone means yes; `--browser=false` means no. */
export function answersFromFlags(argv) {
  const answers = {};
  const rest = [];
  for (let i = 0; i < argv.length; i++) {
    const token = argv[i];
    const isFlag = Object.keys(FLAG_TO_QUESTION).find((f) => token === f || token.startsWith(`${f}=`));
    if (!isFlag) {
      if (!token.startsWith("--")) rest.push(token);
      continue;
    }
    const { value, skip } = valueOf(argv, i);
    i += skip;
    const key = FLAG_TO_QUESTION[isFlag];
    if (key === "browser") answers.browser = value === true ? true : String(value) === "true";
    else answers[key] = value;
  }
  return { answers, rest };
}

/**
 * The interrogation, on a terminal. Every question prints WHY it matters, so an
 * operator who does not know what a browser space or a money line is can still
 * answer correctly.
 */
async function askInteractive(answers, facts) {
  const stdin = process.stdin;
  const stdout = process.stdout;
  const rl = readline.createInterface({ input: stdin, output: stdout });
  const out = { ...answers };
  try {
    stdout.write("\nACE setup — a few questions, then it builds.\n\n");
    for (const q of intake.QUESTIONS) {
      if (out[q.id] !== undefined && out[q.id] !== "") continue;
      const detected = q.detects ? facts[q.detects] : null;
      const shown = Array.isArray(detected) ? detected.join(", ") : detected;
      const def = out[q.id] ?? q.default ?? (shown || null);
      stdout.write(`  ${q.prompt}\n  why: ${q.why}\n`);
      if (q.kind === "choice") stdout.write(`  one of: ${q.choices.join(" | ")}\n`);
      const suffix = def !== null && def !== undefined ? ` [${Array.isArray(def) ? def.join(", ") : def}]` : " (optional)";
      const raw = (await rl.question(`  > ${suffix} `)).trim();
      if (!raw) {
        if (def !== null && def !== undefined) out[q.id] = def;
        continue;
      }
      if (q.kind === "bool") out[q.id] = /^(y|yes|true|1)$/i.test(raw);
      else if (q.kind === "number") out[q.id] = Number(raw);
      else if (q.kind === "list") out[q.id] = raw.split(/[,\n]/).map((v) => v.trim()).filter(Boolean);
      else out[q.id] = raw;
      stdout.write("\n");
    }
  } finally {
    rl.close();
  }
  return out;
}

// ---------------------------------------------------------------------------
// rendering
// ---------------------------------------------------------------------------

export function renderPlan(plan, facts) {
  const lines = [];
  lines.push(`ACE setup — ${plan.config.name}`);
  lines.push("");
  lines.push("intake");
  lines.push(`  goal        ${plan.config.goal.statement}`);
  lines.push(`  money       ${plan.config.money}`);
  lines.push(`  projects    ${plan.config.projects.map((p) => `${p.id} (${p.root})`).join(", ")}`);
  lines.push(`  harness     ${plan.config.harness}`);
  if (plan.config.model) lines.push(`  model       ${plan.config.model.provider}/${plan.config.model.model} (written into the ace key)`);
  lines.push(`  budget      ${plan.config.cap} worker(s), global across every project`);
  lines.push(`  browser     ${plan.config.browser ? "yes — one space per project" : "no"}`);
  lines.push(`  proof       ${plan.config.verification.map((v) => v.command).join(" && ") || "(none configured)"}`);
  if (plan.config.goal.deadline) lines.push(`  deadline    ${plan.config.goal.deadline}`);
  if (facts) {
    const detected = [];
    if (facts.is_git) detected.push(`git (${facts.branch ?? "detached"})`);
    detected.push(`node ${facts.node}`);
    if (facts.has_orchestration) detected.push("an existing orchestration/projects.json");
    if (facts.has_ace_key) detected.push("an existing ace key");
    if (facts.has_acc_memory) detected.push("an existing .acc-memory.md");
    lines.push(`  detected    ${detected.join(", ")}`);
  }
  lines.push("");
  lines.push(`plan — ${plan.parts.length} part(s), ${plan.writes.length} write(s)`);
  for (const part of plan.parts) {
    const own = plan.writes.filter((w) => w.part === part.id).map((w) => w.path);
    lines.push(`  ${part.id}`);
    lines.push(`      ${part.title}`);
    for (const p of own) lines.push(`      → ${p}`);
  }
  lines.push("");
  lines.push("linked");
  for (const link of plan.links) lines.push(`  ${link.from} → ${link.to}: ${link.name} — ${link.how}`);
  return lines.join("\n");
}

function renderVerify(verdict) {
  const lines = [];
  lines.push(`verify — ${verdict.passed} passed, ${verdict.failed} failed, ${verdict.skipped} not run`);
  for (const check of verdict.checks) {
    const mark = check.status === "pass" ? "ok  " : check.status === "fail" ? "FAIL" : "skip";
    lines.push(`  ${mark}  ${check.part.padEnd(20)} ${check.name}${check.detail ? `\n        ${check.detail}` : ""}`);
  }
  return lines.join("\n");
}

function nextSteps(context, plan) {
  const first = context.projects[0]?.id;
  return [
    "next",
    `  node orchestration/tabs.mjs plan        # the roster, and the budget with its source`,
    `  node orchestration/tabs.mjs up          # inside Herdr: create the tabs and start what fits`,
    first ? `  node orchestration/tabs.mjs govern      # the governor's brief across every project` : null,
    `  node orchestration/selftest.mjs         # this repo's own proof of the topology`,
    `  ace config check && ace crew            # the same projects, from ACE's runtime`,
  ]
    .filter(Boolean)
    .join("\n");
}

// ---------------------------------------------------------------------------
// commands
// ---------------------------------------------------------------------------

async function cmdSetup(args, ctx) {
  const dir = process.cwd();
  const dryRun = args.includes("--dry-run");
  const force = args.includes("--force");
  const json = args.includes("--json");
  const interactiveAllowed = Boolean(process.stdin.isTTY && process.stdout.isTTY);

  const intakeIdx = args.findIndex((a) => a === "--intake" || a.startsWith("--intake="));
  const { answers: flagAnswers } = answersFromFlags(args);

  let answers = { ...flagAnswers };
  let source = Object.keys(flagAnswers).length ? "flags" : null;

  if (intakeIdx >= 0) {
    const { value } = valueOf(args, intakeIdx);
    if (value === true || !fs.existsSync(String(value))) {
      ctx.writeStructuredError({
        code: "NO_SUCH_FILE",
        message: `--intake needs a readable JSON file (got ${JSON.stringify(value)})`,
        recoverable: true,
        suggestions: ["ace setup --intake intake.json", "or answer as flags: --goal … --money … --projects a,b"],
      });
      process.exitCode = 2;
      return;
    }
    let fileAnswers;
    try {
      fileAnswers = JSON.parse(fs.readFileSync(String(value), "utf8"));
    } catch (err) {
      ctx.writeStructuredError({
        code: "BAD_INTAKE",
        message: `intake file is not valid JSON: ${err.message}`,
        recoverable: true,
        suggestions: ["The intake file is one JSON object keyed by question id (run `ace parts --questions`)"],
      });
      process.exitCode = 2;
      return;
    }
    answers = { ...fileAnswers, ...answers };
    source = source ? "flags over file" : "file";
  }

  const facts = intake.inspect(dir);

  const partsIdx = args.findIndex((a) => a === "--parts" || a.startsWith("--parts="));
  let partIds = null;
  if (partsIdx >= 0) {
    const { value } = valueOf(args, partsIdx);
    partIds = Array.isArray(value) ? value : String(value).split(",").map((v) => v.trim()).filter(Boolean);
    const unknown = partIds.filter((id) => !stack.PART_IDS.includes(id));
    if (unknown.length) {
      ctx.writeStructuredError({
        code: "UNKNOWN_PART",
        message: `unknown part(s): ${unknown.join(", ")}`,
        recoverable: true,
        suggestions: [`Known parts: ${stack.PART_IDS.join(", ")}`, "ace parts"],
      });
      process.exitCode = 2;
      return;
    }
  }

  // Interrogate only what is still missing, and only on a terminal. Without a
  // terminal the refusal names the exact fields, so an agent can retry instead
  // of hanging on a prompt nobody sees.
  const missingNow = intake.validateAnswers(answers, facts);
  if (!missingNow.ok && interactiveAllowed) {
    answers = await askInteractive(answers, facts);
    source = source ? `${source} + terminal` : "terminal";
  }

  const resolved = intake.resolveContext({ dir, answers, facts });
  if (!resolved.ok) {
    ctx.writeStructuredError({
      code: "INTAKE_INVALID",
      message: `${resolved.violations.length} problem(s) with the intake — nothing was written`,
      recoverable: true,
      errors: resolved.violations,
      suggestions: [
        answersFromFlags(args).answers && "ace setup --goal \"…\" --money \"…\" --projects path/a,path/b",
        "ace setup --dry-run to see the plan without writing",
        "ace parts --questions for the full list of questions and defaults",
      ].filter(Boolean),
    });
    process.exitCode = 2;
    return;
  }

  const context = resolved.context;
  const parts = stack.partsFor(partIds);
  const plan = stack.planStack({ dir, context, parts, force });

  if (plan.violations.length) {
    ctx.writeStructuredError({
      code: "PLAN_INVALID",
      message: `${plan.violations.length} problem(s) with the plan — nothing was written`,
      recoverable: false,
      errors: plan.violations,
      suggestions: ["The ace package looks incomplete; reinstall it"],
    });
    process.exitCode = 2;
    return;
  }

  if (dryRun) {
    if (json) ctx.printJson({ command: "setup", dry_run: true, answers_from: source, facts, plan });
    else console.log(renderPlan(plan, facts));
    return;
  }

  const applied = stack.applyStack(plan, context, { force });
  const verdict = await stack.verifyStack(plan, context);

  if (json) {
    ctx.printJson({ command: "setup", answers_from: source, facts, plan, applied, verify: verdict });
    if (!verdict.ok) process.exitCode = 1;
    return;
  }

  console.log(renderPlan(plan, facts));
  console.log("");
  console.log(`apply — ${applied.written.length} written, ${applied.skipped.length} left alone`);
  for (const w of applied.written) console.log(`  + ${w.path}${w.note ? `  (${w.note})` : ""}`);
  for (const s of applied.skipped) console.log(`  = ${s.path}  (${s.reason})`);
  console.log("");
  console.log(renderVerify(verdict));
  console.log("");
  console.log(nextSteps(context, plan));
  if (!verdict.ok) {
    console.log("");
    console.log("A check failed. Fix it before starting the crew — an unverified topology is worse than none.");
    process.exitCode = 1;
  }
}

async function cmdParts(args, ctx) {
  const json = args.includes("--json");
  if (args.includes("--questions")) {
    const rows = intake.QUESTIONS.map((q) => ({
      id: q.id,
      prompt: q.prompt,
      kind: q.kind,
      required: Boolean(q.required),
      default: q.default ?? null,
      detects: q.detects ?? null,
      why: q.why,
    }));
    if (json) return ctx.printJson({ command: "parts --questions", questions: rows });
    for (const q of rows) {
      console.log(`  ${q.id}${q.required ? " (required)" : ""} — ${q.prompt}`);
      console.log(`      kind ${q.kind}${q.default !== null ? `, default ${JSON.stringify(q.default)}` : ""}${q.detects ? `, detected from the repo (${q.detects})` : ""}`);
      console.log(`      why  ${q.why}`);
    }
    return;
  }

  const id = args.find((a) => !a.startsWith("--"));
  if (id) {
    const part = stack.partById(id);
    if (!part) {
      ctx.writeStructuredError({
        code: "UNKNOWN_PART",
        message: `unknown part "${id}"`,
        recoverable: true,
        suggestions: [`Known parts: ${stack.PART_IDS.join(", ")}`],
      });
      process.exitCode = 2;
      return;
    }
    if (json) return ctx.printJson({ command: "parts show", part });
    console.log(`${part.id} — ${part.title}`);
    console.log(`  ${part.summary}`);
    console.log(`  installs: ${part.installs.join(", ")}`);
    console.log(`  requires: ${part.requires.join(", ") || "(nothing)"}`);
    console.log(`  verify:   ${part.verify}`);
    return;
  }

  if (json) return ctx.printJson({ command: "parts", parts: stack.PARTS });
  console.log("ACE installs six parts; none of them is usable alone.\n");
  for (const part of stack.PARTS) {
    console.log(`  ${part.id}`);
    console.log(`      ${part.title}`);
    console.log(`      ${part.summary}`);
    console.log(`      installs ${part.installs.join(", ")}`);
    if (part.requires.length) console.log(`      requires ${part.requires.join(", ")}`);
  }
  console.log("");
  console.log("The link between them is one name: project.id === its tab label === its browser space === basename(its tree).");
  console.log("Install with: ace setup   (interactive · --intake <file> · flags · --dry-run · --parts a,b)");
}

const HANDLERS = {
  setup: cmdSetup,
  parts: cmdParts,
};

export const COMMANDS = Object.keys(HANDLERS);

export async function run(command, args, ctx) {
  const handler = HANDLERS[command];
  if (!handler) {
    ctx.writeStructuredError({
      code: "COMMAND_NOT_FOUND",
      message: `Unknown stack command: ${command}`,
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
      suggestions: ["Re-run with --dry-run to see the plan without writing anything"],
    });
    process.exitCode = 1;
  }
}
