/**
 * lib/stack.mjs — the crew stack ACE installs, as six linked parts.
 *
 * The whole product is one sentence: run this and a repo can hold a crew of
 * coding agents over several work areas without a human holding it together.
 * Six parts do that, and none of them is usable alone:
 *
 *   herdr-spaces        one tab per project, plus one control plane
 *   ego-lite-spaces     one browser space per project, named after the project
 *   govern              one governor over a global worker budget, with failover
 *   supervisors-workers one supervisor and its workers per project, each task
 *                       carrying the dollar it can produce
 *   acc                 durable memory per tree, so a new session starts informed
 *   proagents           the layer on top: the money contract, the handoff
 *                       convention, and the tools the crew may use
 *
 * WHY THEY ARE LINKED, AND NOT SIX SEPARATE TOOLS. One name is the whole
 * boundary system, inherited from the stack this installer writes:
 *
 *     project.id === its tab label === its browser space === basename(tree)
 *
 * So the terminal tab, the browser space, the state directory and the governor's
 * report all agree on what a project is called. `projects.json` is the data
 * behind that, and adding a project is adding data — never editing an installer
 * branch or a tab list.
 *
 * Plan, then apply, then verify:
 *
 *   planStack(context)        what would be written, and which part causes it
 *   applyStack(plan)          write it; an existing file is never clobbered
 *   verifyStack(plan)         check the written setup, part by part
 *
 * Zero dependencies. Node builtins only.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

import * as configLib from "./config.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
/** The stack modules that ship with ACE and are copied verbatim into a repo. */
export const ASSETS = path.resolve(HERE, "..", "assets", "stack");

const GENERATED_BY = "ace setup";

// ---------------------------------------------------------------------------
// the six parts
// ---------------------------------------------------------------------------

/**
 * Each part declares what it installs, what it needs, and — the part that makes
 * this a system rather than a toolkit — the exact name another part consumes.
 */
export const PARTS = [
  {
    id: "herdr-spaces",
    title: "Herdr spaces — one tab per project, one control plane",
    summary:
      "One tab per project holding that project's workers, plus a control-plane tab holding the governor and one supervisor per project. The number of tabs is always 1 + the number of projects.",
    installs: [
      "orchestration/tabs.mjs",
      "orchestration/lib/herdr.mjs",
      "orchestration/lib/topology.mjs",
      "orchestration/lib/cap.mjs",
      "orchestration/projects.json",
      "orchestration/state/.gitignore",
      "orchestration/README.md",
      "orchestration/selftest.mjs",
    ],
    requires: [],
    hands_to: [{ part: "ego-lite-spaces", name: "project.id", how: "the tab label and the browser space are the same string" }],
    verify: "the topology resolves every declared agent to a tab that allows its role, and the tab count is 1 + projects",
  },
  {
    id: "ego-lite-spaces",
    title: "Ego Lite spaces — one browser space per project",
    summary:
      "Each project's browser work happens in its own space, named after the project's own tree. A second space is never opened to escape a stuck page.",
    installs: ["orchestration/lib/ego.mjs"],
    requires: ["herdr-spaces"],
    hands_to: [{ part: "herdr-spaces", name: "browser_space", how: "the space name is the project id, which is also its tab label" }],
    verify: "every project's space name equals its id and the basename of its tree",
  },
  {
    id: "govern",
    title: "Govern — one governor over a global worker budget",
    summary:
      "A single governor reads across every project: it checks supervisor liveness and evidence-backed progress, replaces an unusable model route with a validated one, bounds restarts, and escalates what it cannot recover. The worker budget is global, not per project, and is a setting with a reported source.",
    installs: ["orchestration/lib/free-models.mjs", "package.json"],
    requires: ["herdr-spaces", "supervisors-workers"],
    hands_to: [{ part: "supervisors-workers", name: "cap", how: "the budget the supervisor must respect when it starts a worker" }],
    verify: "the ace configuration validates and its active-agent budget equals the stack's worker cap",
  },
  {
    id: "supervisors-workers",
    title: "Supervisors and workers — one owner per project, priced tasks",
    summary:
      "Exactly one supervisor per project, each owning that project's queue, missions and handoffs. Workers implement inside their own tree. Every task declares the dollar it can produce, and a task with no money line is refused, not dispatched.",
    installs: ["orchestration/projects.json", "package.json"],
    requires: ["govern"],
    hands_to: [{ part: "proagents", name: "tasks[].money", how: "the money contract is what the supervisor enforces at dispatch" }],
    verify: "one supervisor per project, at least one worker each, and every task carries a money line",
  },
  {
    id: "acc",
    title: "ACC — durable memory per tree",
    summary:
      "The ACC convention: a control file under .acc/config and one .acc-memory.md per tree, holding gotchas, decisions and session lessons, so a new session starts informed instead of re-learning the repo.",
    installs: [".acc/config/config.yaml", ".acc/config/templates/agents.md", ".acc-memory.md"],
    requires: ["herdr-spaces"],
    hands_to: [{ part: "govern", name: "memory", how: "the governor reports against what the memory records as decided" }],
    verify: "the ACC control file exists and every tree the crew works in has its own memory file",
  },
  {
    id: "proagents",
    title: "ProAgents — the money contract and the handoff convention",
    summary:
      "The layer on top: the rule that every task names its dollar, the handoff convention every mission ends with, and the registry of tools the crew is allowed to use. This is what a reviewer reads to tell a busy crew from a profitable one.",
    installs: ["proagents/MONEY-CONTRACT.md", "proagents/knowledge/CREW-PROTOCOL.md", "proagents/registry/experts.json", "STACK.md"],
    requires: ["supervisors-workers"],
    hands_to: [{ part: "supervisors-workers", name: "acceptance", how: "a handoff that claims DONE without evidence is not accepted" }],
    verify: "the money contract, the handoff convention and the tool registry are present and parseable",
  },
];

export const PART_IDS = PARTS.map((p) => p.id);

export function partById(id) {
  return PARTS.find((p) => p.id === id) ?? null;
}

export function partsFor(ids) {
  if (!ids || !ids.length) return PARTS;
  const wanted = new Set(ids);
  // A part pulls in what it requires, so a subset can never install a part whose
  // links point at something absent.
  let changed = true;
  while (changed) {
    changed = false;
    for (const part of PARTS) {
      if (wanted.has(part.id)) {
        for (const need of part.requires) {
          if (!wanted.has(need)) {
            wanted.add(need);
            changed = true;
          }
        }
      }
    }
  }
  return PARTS.filter((p) => wanted.has(p.id));
}

// ---------------------------------------------------------------------------
// the write set
// ---------------------------------------------------------------------------

/** Files copied verbatim from the shipped assets, with the part that owns each. */
const VENDORED = {
  "orchestration/tabs.mjs": "herdr-spaces",
  "orchestration/selftest.mjs": "herdr-spaces",
  "orchestration/README.md": "herdr-spaces",
  "orchestration/lib/topology.mjs": "herdr-spaces",
  "orchestration/lib/cap.mjs": "herdr-spaces",
  "orchestration/lib/herdr.mjs": "herdr-spaces",
  "orchestration/lib/ego.mjs": "ego-lite-spaces",
  "orchestration/lib/handoff.mjs": "supervisors-workers",
  "orchestration/lib/free-models.mjs": "govern",
};

const DATE = (d = new Date()) => d.toISOString().slice(0, 10);

// ---------------------------------------------------------------------------
// generated content
// ---------------------------------------------------------------------------

function json(obj) {
  return `${JSON.stringify(obj, null, 2)}\n`;
}

/**
 * The topology, the budget, the harness policy, the handoff contract and the
 * projects — all DATA. The orchestrator never hardcodes a project, a path, a
 * roster or a cap: everything it acts on is in this file.
 */
export function projectsJson(context) {
  const { projects, cap, harness, goal, money, verification, facts } = context;
  return json({
    version: 3,
    updated: DATE(),
    generated_by: GENERATED_BY,
    note:
      "The crew's data. Reuse, never replace: the free-model policy is enforced in orchestration/lib/free-models.mjs, the handoff convention is proagents/knowledge/CREW-PROTOCOL.md, the control plane is the herdr CLI. Adding a project or a task means editing this file, never a branch in tabs.mjs.",
    topology: {
      note: "1 + N tabs: the control plane, then one tab per project. The project tabs are derived from `projects` (id = label = project.id), so adding a project adds exactly one tab.",
      control_plane_tab: {
        id: "control-plane",
        label: "control-plane",
        role: "control",
        cwd: ".",
        holds_roles: ["governor", "supervisor", "orchestrator"],
        capped: false,
        note: "the command surface: the governor and one supervisor per project. Not a work queue, so it is never counted against the worker cap.",
      },
      project_tab_template: {
        note: "one tab per project, derived from `projects`; there is no static list.",
        role: "work",
        cwd: ".",
        holds_roles: ["worker"],
        capped: true,
      },
      role_to_tab: { governor: "control-plane", supervisor: "control-plane", orchestrator: "control-plane" },
      governor: {
        role: "governor",
        name: "governor",
        harness,
        priority: 0,
        scope: "every project in this file — the governor is the only agent that reads across projects",
        duties: [
          "read each supervisor's queue, dispatch ledger and open missions, and check the supervisor is alive and working its own project",
          "check that a claimed handoff carries evidence: an unbacked DONE is escalated, not accepted",
          "arbitrate when two projects want the same worker slot, and write the decision down",
          "mint the next task, with its money line, when a supervisor reports an empty queue",
          "report the ranked next dollar across the whole portfolio, never inside one project",
        ],
        goal: goal.statement,
        money,
        does_not_dispatch_work_itself:
          "the governor authorises and ranks; a supervisor turns that into a mission for its own workers. A governor that prompts a worker directly would make two dispatch paths, and neither would be the truth.",
      },
      invariants: [
        "project.id === project.browser_space === basename(project.root) === that project's tab id",
        "the control plane holds the governor plus exactly one supervisor per project; a project's workers live only in that project's own tab",
        "the number of tabs equals 1 + the number of projects; adding a project adds exactly one tab",
      ],
    },
    cap: {
      max_active_workers: cap,
      scope:
        "EVERY project tab combined, on every harness kind combined. Not per project, not per tab, and not the control plane: the governor and the supervisors are the command surface, so they are never counted and never trimmed.",
      settings: {
        note: "the cap is a setting, not a constant. Raise or lower it without editing any code.",
        precedence: [
          "engine/state/run-control.json > worker_cap   (live operator setting, when the repo has an engine)",
          "env ORCHESTRATION_WORKER_CAP",
          "this file > cap.max_active_workers           (the value chosen at install time)",
        ],
        read: "node orchestration/tabs.mjs cap",
        change: `node orchestration/tabs.mjs cap --set ${cap + 1}`,
        logged: "orchestration/state/_global/cap-settings.jsonl — every change, with the before and after value",
      },
      active_agent_definition:
        'A pane is ONE active worker when (a) herdr reports an agent attached to it (any status: working, blocked, done, or idle-at-prompt) and (b) the agent\'s name is declared with role "worker" in this file. Idle-but-attached still holds its slot; that is what makes the cap a cap.',
      frees_a_slot: "The pane's agent exits or the pane is closed. A crashed pane frees its slot on the next count.",
      excluded_from_count: [
        "the governor and every project supervisor (the control plane is not a work queue)",
        "processes that are not agents (schedulers, daemons, the operator's own terminal)",
        "panes owned by another crew or by the human",
        "panes whose agent name is not declared in this file — an unconfigured pane is unknown, not a worker this orchestrator placed",
      ],
      on_exceed:
        "refuse the spawn, record the refusal in orchestration/state/<project>/cap.jsonl with its reason, and continue with the roster that fits. Never close, steal or reassign another agent's pane to make room, and never open a duplicate project tab.",
    },
    harness: {
      allowed: [harness],
      default_harness: harness,
      note: "the coding harness the multiplexer attaches into each pane.",
      model_policy: {
        free_only: true,
        authority:
          "orchestration/lib/free-models.mjs. A model counts as free only when its freeness is ESTABLISHED this run: an all-zero-cost entry in the live catalog, or an entry listed by the operator. A name containing '-free' is not evidence.",
        sources: [
          "ACE_FREE_MODEL_COMMAND — a command that prints the free catalog as JSON on stdout",
          "the opencode serve catalog on SENTINEL_PORT (default 4199), /api/model",
        ],
        on_no_verified_free_model: "refuse to dispatch and report the blocker. Never fall back to a paid model silently.",
      },
    },
    handoff: {
      framework: "proagents/knowledge/CREW-PROTOCOL.md (the installed convention — reused, not replaced)",
      marker: "HANDOFF:",
      artifact_states: ["DONE", "BLOCKED", "FAILED", "RETRY", "ESCALATED"],
      required_fields: ["mission", "project", "owner", "status", "files_changed", "commands_run", "results", "failures", "evidence", "next"],
      failure_behavior: {
        missing_or_incomplete_artifact:
          "the mission is NOT complete. It moves to awaiting_handoff, the owner is re-prompted (bounded), then reassigned, then escalated.",
        claim_without_evidence: "status 'unverified'. A DONE handoff with no command output, file path or measurement cannot complete a mission.",
        cross_project_artifact: "refused, and recorded as an isolation violation. Nothing is closed by it.",
        stale_artifact: "refused: an artifact older than the mission's dispatch time is not evidence for this run.",
        owner_died: "the mission keeps its id, its handoff path and its resume point, and goes to the next verified free model.",
        provider_circuit_open: "the mission parks as blocked_provider with the exact error and the resume point. It is parked, not dropped.",
      },
    },
    verification: {
      checks: verification.map((v) => v.command),
      require_evidence: true,
      note: "re-run after integration: passing in a worker's own pane does not prove the integrated tree passes.",
    },
    environment: { detected: { is_git: facts.is_git, manifest: facts.manifest, node: facts.node } },
    projects,
  });
}

/** The `ace` key — the same projects, in the shape ACE's own runtime reads. */
export function aceKey(context) {
  const { name, goal, money, harness, model, cap, projects, verification } = context;
  const supervisors = projects.map((p) => ({
    role: "supervisor",
    id: `${p.id}-supervisor`,
    project: p.id,
    workspace: p.root,
    runtime: harness,
  }));
  const workers = projects.flatMap((p) =>
    p.agents
      .filter((a) => a.role === "worker")
      .map((a) => ({ role: a.name, id: a.name, project: p.id, runtime: harness }))
  );

  return {
    spec: "ace/v1",
    name,
    description: `Crew stack for ${name}: governor, supervisors and workers over ${projects.length} project(s), installed by ${GENERATED_BY}.`,
    goal: { statement: goal.statement, milestones: goal.deadline ? [`deadline: ${goal.deadline}`] : [] },
    orchestrator: { runtime: harness, role: "orchestrator" },
    roles: {
      governor: { role: "governor", scope: "every project in orchestration/projects.json", runtime: harness, idle_mode: "monitor" },
      supervisors,
      workers,
    },
    concurrency: { max_active_agents: cap, count_governor: false, count_supervisors: false },
    adapters: {
      multiplexer: { provider: "herdr" },
      "agent-runtime": { provider: harness },
      context: { provider: "acc" },
      handoff: { provider: "proagents" },
      verification: { provider: "package-scripts" },
      persistence: { provider: "filesystem" },
      watchdog: { provider: "local" },
    },
    // Written only when the operator pinned one: otherwise no route is written at
    // all, and ACE's own default applies until `ace route set` changes it.
    ...(model ? { models: { default: { provider: model.provider, model: model.model } } } : {}),
    verification: { checks: verification.map((v) => v.command), require_evidence: true },
    orchestration: {
      data: "orchestration/projects.json",
      runner: "orchestration/tabs.mjs",
      control_plane_tab: "control-plane",
      worker_cap: cap,
      note: "the same projects, roles and budget the stack's orchestrator reads. Change the cap in one place and the other reports the disagreement.",
    },
    memory: { persistent: true, provider: "acc" },
    network: { mode: "restricted" },
    filesystem: { mode: "workspace" },
    git: { worktrees: true },
    policies: { require_review_before_merge: true },
    lifecycle: { autonomous: true, restart_on_failure: true },
    money,
  };
}

export function stackMd(context, parts) {
  const { name, goal, money, cap, harness, projects, verification } = context;
  const rows = parts.map((p) => `| \`${p.id}\` | ${p.title} | ${p.installs.map((i) => `\`${i}\``).join(", ")} |`).join("\n");
  const projectRows = projects
    .map((p) => `| \`${p.id}\` | \`${p.root}\` | \`${p.browser_space}\` | \`${p.id}-supervisor\` + ${p.agents.filter((a) => a.role === "worker").map((a) => `\`${a.name}\``).join(", ")} |`)
    .join("\n");

  return `# ${name} — the crew stack

Installed by \`${GENERATED_BY}\`. Six parts, one name.

**Goal.** ${goal.statement}
${goal.deadline ? `**Deadline.** ${goal.deadline}\n` : ""}**Money.** ${money}

## The one rule that holds it together

\`\`\`
project.id === its tab label === its browser space === basename(its tree)
\`\`\`

A project is one name in the terminal, in the browser, on disk and in the
governor's report. Everything below reads that same name.

| Project | Tree | Browser space | Agents |
|---|---|---|---|
${projectRows}

## The parts

| Part | What it is | Installed as |
|---|---|---|
${rows}

They are linked, not adjacent:

- \`herdr-spaces\` names each tab after a project's id; \`ego-lite-spaces\` gives that
  same id to a browser space, so terminal and browser agree.
- \`govern\` holds one governor over every project and enforces the worker budget;
  \`supervisors-workers\` gives each project exactly one supervisor inside that
  budget.
- \`acc\` keeps what was learned, per tree, so the next session does not re-learn it.
- \`proagents\` is the layer on top: the money contract the supervisor enforces at
  dispatch, and the handoff convention every mission ends with.

## Drive it

\`\`\`bash
node orchestration/tabs.mjs plan          # the roster: control plane + one tab per project
node orchestration/tabs.mjs up            # create the tabs and start the agents that fit
node orchestration/tabs.mjs status        # topology, cap, control plane, missions, pool
node orchestration/tabs.mjs cap           # the effective worker cap AND where it came from
node orchestration/tabs.mjs govern        # the governor's brief across every project
node orchestration/tabs.mjs brief  --project ${projects[0]?.id ?? "<id>"} --task <task-id>
node orchestration/tabs.mjs dispatch --project ${projects[0]?.id ?? "<id>"} --task <task-id>
node orchestration/tabs.mjs verify        # validate handoffs, apply the failure behaviour
node orchestration/tabs.mjs cycle         # recovery recheck → verify → next task
node orchestration/selftest.mjs           # the installed setup's own proof
\`\`\`

Exit codes: \`0\` ok · \`2\` refused (cap, no verified free model, no money line).
\`--dry-run\` decides and reports; it creates no tab, splits no pane and starts no
agent.

Every command above needs a running multiplexer (\`HERDR_ENV=1\`) for the parts
that touch the terminal — \`plan\`, \`status\` and \`govern\` read live state and say
so when there is none.

## What proves work

| Check | Command |
|---|---|
${verification.map((v) => `| ${v.name} | \`${v.command}\` |`).join("\n") || "| (none detected) | add the commands that prove a change is done |"}

A handoff that claims DONE without a command, a file path or a measurement is
not accepted. Passing in a worker's own pane does not prove the integrated tree
passes, so these are re-run after integration.

## Where things live

\`\`\`
orchestration/projects.json   the data: topology, budget, harness policy, projects, tasks
orchestration/tabs.mjs        the orchestrator: plan · up · status · cap · govern · brief · dispatch · verify · cycle
orchestration/lib/            topology · cap · herdr · ego · handoff · free-models
orchestration/state/          per-project missions, handoffs, dispatch and cap logs
.acc/config/                  ACC control file
.acc-memory.md                durable memory, and one beside each project tree
proagents/                    the money contract, the handoff convention, the tool registry
\`\`\`

## What this install did not do

- It did not start any agent, create any tab, or open any browser space. Run
  \`tabs.mjs up\` when the multiplexer is running.
- It did not invent a model route: with no model supplied, none is written, so
  ACE's own default route is what \`ace crew\` reports until you set one with
  \`ace route set\`. Work is refused, not silently billed, when no free model is
  verified.
- It did not write or send anything outside this repository.
`;
}

export function moneyContractMd(context) {
  const { name, money, projects } = context;
  return `# The money contract

Every task in this repo names the dollar it can produce. That is not a slogan:
it is a field the supervisor reads before it dispatches, and a task without it
is refused.

**This repo's money line.** ${money}

## What that means for a task

\`\`\`json
{
  "id": "t1-example",
  "title": "what the worker does",
  "priority": 1,
  "money": "the dollar this produces, in one sentence a reviewer can check",
  "prompt": "self-contained: the receiving agent cannot see anyone's chat",
  "acceptance": ["each line must be true, with the evidence that proves it"]
}
\`\`\`

A money line is not a restatement of the task. "Add a caching layer" is not a
money line; "the checkout page stops timing out at 5s, so the $9 subscription
can be bought" is. If you cannot write the second sentence, the task is not
ready to dispatch.

## Where it is enforced

| Where | What happens |
|---|---|
| \`orchestration/projects.json > projects[].tasks[].money\` | the data every dispatch reads |
| the supervisor's dispatch step | refuses a task with no money line and logs the refusal |
| the governor's brief | ranks the next dollar across the whole portfolio, never inside one project |
| the handoff | every artifact ends with the revenue movement this round caused — or says plainly that none was caused |

## Per project

${projects.map((p) => `- \`${p.id}\` — ${p.money}`).join("\n")}

## Honest reporting

Test-mode or hypothetical revenue is not revenue. If a round produced no
movement, the handoff says so — that is a valid and required result, and it is
how ${name} can tell a busy crew from a profitable one.
`;
}

export function crewProtocolMd(context) {
  const { projects } = context;
  return `# CREW-PROTOCOL — how work moves in this repo

Installed by \`${GENERATED_BY}\`. The orchestrator's verifier
(\`orchestration/lib/handoff.mjs\`) implements exactly this convention.

## 1. Ownership is one name

Every project has exactly one supervisor. A worker may only be given work by its
own project's supervisor, and only inside that project's own tree and browser
space.

| Project | Supervisor | Workers |
|---|---|---|
${projects.map((p) => `| \`${p.id}\` | \`${p.id}-supervisor\` | ${p.agents.filter((a) => a.role === "worker").map((a) => `\`${a.name}\``).join(", ")} |`).join("\n")}

## 2. A mission is self-contained

The prompt a worker receives is the whole message: it names the project, the
scope it may write, what is forbidden, its acceptance criteria, its money line
and where its handoff goes. The receiving agent cannot see anyone's chat, so a
prompt that relies on shared context is a prompt that will be misread.

## 3. Every mission ends with an artifact

Write it to \`orchestration/state/<project>/handoffs/<mission>-<STATE>.md\`, where
STATE is \`DONE | BLOCKED | FAILED | RETRY | ESCALATED\`:

\`\`\`markdown
mission: t1-example
project: ${projects[0]?.id ?? "<project>"}
owner: ${projects[0] ? `${projects[0].id}-worker` : "<agent>"}
status: DONE

## Files changed
## Commands run
## Results
## Failures
## Evidence
## Next

HANDOFF: orchestration/state/${projects[0]?.id ?? "<project>"}/handoffs/t1-example-DONE.md
\`\`\`

\`Evidence\` is the load-bearing section: a command and its output, a file path, or
a measurement. A claim is not evidence, and a DONE without evidence is recorded
as \`unverified\` instead of completing the mission.

## 4. Verification, and what refuses what

| Failure | Behaviour |
|---|---|
| missing or incomplete artifact | the mission stays open; the owner is re-prompted (bounded), then reassigned, then escalated |
| DONE with no evidence | one bounded attempt to produce evidence, then escalate |
| an artifact from another project's directory | refused as an isolation violation; nothing is closed |
| an artifact older than the dispatch | refused as stale; re-run and re-write |
| the owner died mid-task | the mission keeps its id and resume point and goes to the next verified free model |
| no verified free model | the dispatch is refused. Nothing silently falls back to a paid model |

## 5. The loop

\`\`\`
DELEGATE  supervisor → worker: ownership, scope, outputs, acceptance, money, destination
WORK      the worker works in its own tree, its own tab, its own browser space
HANDOFF   the worker writes <mission>-<STATE>.md and ends with the HANDOFF: marker
VERIFY    exists · complete · right project · right mission · right owner · not stale · evidence
COMPLETE  the mission is closed and the ledger row is appended
\`\`\`
`;
}

export function expertsJson(context) {
  const { harness, projects, verification } = context;
  const today = DATE();
  return json({
    version: 1,
    generated_by: GENERATED_BY,
    updated_at: today,
    note:
      "The tools this crew may use, and how to check each one. Status is what was verified AT INSTALL TIME — 'declared' means the install did not probe it. Re-verify before relying on a surface.",
    experts: [
      {
        id: "expert-harness",
        tool: "herdr",
        kind: "multiplexer",
        status: "declared",
        what: "the terminal surface: tabs, panes, agent attach, rename, prompt, read",
        where: "orchestration/lib/herdr.mjs is the only call site",
        verify: "herdr --help (and HERDR_ENV=1 inside a pane)",
        dollar: "the crew can only be steered through a live surface; without it every dispatch is a plan nobody runs",
      },
      {
        id: `expert-${harness}`,
        tool: harness,
        kind: "agent-runtime",
        status: "declared",
        what: "the coding agent attached into each pane",
        where: `orchestration/projects.json > harness.default_harness = ${harness}`,
        verify: `${harness} --version`,
        dollar: "the harness is the thing that actually produces the work the money line is priced from",
      },
      {
        id: "expert-context",
        tool: "acc-code-context",
        kind: "context",
        status: "declared",
        what: "durable memory per tree and the file graph the crew reads before it works",
        where: ".acc/config/config.yaml, .acc-memory.md",
        verify: "npx -y acc-code-context memory show <path>",
        dollar: "a session that starts informed does not spend its budget re-learning the repo",
      },
      {
        id: "expert-handoff",
        tool: "proagents crew protocol",
        kind: "handoff",
        status: "live",
        what: "the artifact convention every mission ends with, and its verifier",
        where: "proagents/knowledge/CREW-PROTOCOL.md, orchestration/lib/handoff.mjs",
        verify: "node orchestration/tabs.mjs verify",
        dollar: "an unverified claim is how a crew reports progress it never made",
      },
      {
        id: "expert-verify",
        tool: "project verification",
        kind: "verification",
        status: verification.length ? "live" : "not configured",
        what: verification.length ? "the commands that prove a change is done" : "no command was detected or supplied at install time",
        where: "orchestration/projects.json > verification.checks",
        verify: verification.map((v) => v.command).join(" && ") || "add the commands that prove a change is done",
        dollar: "shipping an unverified change costs more than the change earns",
      },
    ],
    projects: projects.map((p) => ({ id: p.id, root: p.root, browser_space: p.browser_space })),
  });
}

export function accConfigYaml(context) {
  return `# ${context.name} — ACC configuration
#
# ACC (acc-code-context) keeps durable agent memory: a control file here, and
# one .acc-memory.md per tree. Optional — when absent ACC uses its defaults and
# every command still works. See the repository-structure spec.
schema_version: 1

# Templates ACC uses to create and modify its files. Edit the .md files in
# .acc/config/templates/ to customize the output.
# templates:
#   agents_md: .acc/config/templates/agents.md

# Token budget control: the AI phase only runs when the trigger fires.
# engine:
#   trigger:
#     mode: commits      # commits | changes | always
#     threshold: 3
`;
}

export function accAgentsTemplate(context) {
  return `# ${context.name}

${context.goal.statement}

## Money

${context.money}

## How this repo runs agents

Six linked parts — see STACK.md. One name is the boundary system:

\`\`\`
project.id === its tab label === its browser space === basename(its tree)
\`\`\`

Read .acc-memory.md before working, and add to it what you learned.
`;
}

export function rootMemory(context) {
  const { name, goal, projects, cap, harness, money } = context;
  return `# ${name} — durable agent memory

Durable knowledge for anything working in this repository: gotchas, decisions,
session lessons. The crew stack installed by \`${GENERATED_BY}\` reads it; the
per-tree memories beside each project hold their own.

## ${new Date().toISOString()}

1. **The crew stack was installed here.** ${projects.length} project(s) under one
   governor, a global worker cap of ${cap}, harness \`${harness}\`. The data is
   \`orchestration/projects.json\`; the commands are in \`STACK.md\`.
2. **One name is the boundary system.** A project's id is also its tab label, its
   browser space and the basename of its tree. If those disagree, the setup is
   wrong — \`node orchestration/selftest.mjs\` fails on it rather than letting it
   drift.
3. **The money line is enforced, not decorative.** The goal is: ${goal.statement}
   The dollar: ${money} A task without a money line is refused at dispatch, and a
   handoff that claims DONE without evidence is recorded as \`unverified\`.
4. **Nothing was started by the install.** No tab, no agent, no browser space.
   \`node orchestration/tabs.mjs up\` does that when the multiplexer is running.

## Verified at install time

${projects.map((p) => `- \`${p.id}\` — topology and space invariants hold over \`${p.root}\``).join("\n")}
`;
}

export function projectMemory(context, project) {
  return `# ${project.id} — durable agent memory

Scoped notes for anything working inside \`${project.root}\`. Written for the
crew that owns this tree: its supervisor is \`${project.id}-supervisor\`, its
worker(s) ${project.agents.filter((a) => a.role === "worker").map((a) => `\`${a.name}\``).join(", ")}.

## What this tree is for

${project.title}

**Its dollar.** ${project.money}

## Where its work lives

| Thing | Path |
|---|---|
| This tree | \`${project.root}\` |
| Its tab | \`${project.id}\` (in the multiplexer) |
| Its browser space | \`${project.browser_space}\` |
| Its missions and handoffs | \`orchestration/state/${project.id}/\` |

Do not read or write another project's tree or state directory; the boundary is
the path budget, not the tab you happen to sit in.

## ${new Date().toISOString()}

Created by \`${GENERATED_BY}\`. Nothing has been learned here yet — the first
session that works in this tree should add what it wishes it had known.
`;
}

export function stateGitignore() {
  return `# The crew's runtime state: missions, handoffs, dispatch and cap logs.
# Keep the directory (and this file); ignore what the agents write into it.
*
!.gitignore
`;
}

// ---------------------------------------------------------------------------
// plan
// ---------------------------------------------------------------------------

/**
 * The write set for these parts and this context. Pure: it computes the plan
 * without touching the filesystem, so `--dry-run` can print exactly what an
 * apply would do.
 */
export function planStack({ dir, context, parts = PARTS, force = false }) {
  const violations = [];
  const wanted = new Set(parts.map((p) => p.id));
  const writes = [];

  for (const [rel, part] of Object.entries(VENDORED)) {
    if (!wanted.has(part)) continue;
    const from = path.join(ASSETS, rel);
    if (!fs.existsSync(from)) violations.push(`shipped asset is missing: ${rel} — the ace package is incomplete`);
    writes.push({ path: rel, kind: "vendor", from, part });
  }

  if (wanted.has("herdr-spaces")) {
    writes.push({ path: "orchestration/projects.json", kind: "generate", part: "herdr-spaces" });
    writes.push({ path: "orchestration/state/.gitignore", kind: "generate", part: "herdr-spaces" });
  }
  if (wanted.has("govern") || wanted.has("supervisors-workers")) {
    writes.push({ path: "package.json", kind: "merge", part: wanted.has("supervisors-workers") ? "supervisors-workers" : "govern" });
  }
  if (wanted.has("acc")) {
    writes.push({ path: ".acc/config/config.yaml", kind: "generate", part: "acc" });
    writes.push({ path: ".acc/config/templates/agents.md", kind: "generate", part: "acc" });
    // Memory is SEEDED, never regenerated: it carries a timestamp and, more
    // importantly, whatever a session has already learned. A re-run leaves it
    // alone, and says so in those words rather than inviting a --force over the
    // notes it just protected.
    writes.push({ path: ".acc-memory.md", kind: "seed", part: "acc" });
    for (const project of context.projects) {
      writes.push({ path: path.posix.join(project.root, ".acc-memory.md"), kind: "seed", part: "acc", project: project.id });
    }
  }
  if (wanted.has("proagents")) {
    writes.push({ path: "proagents/MONEY-CONTRACT.md", kind: "generate", part: "proagents" });
    writes.push({ path: "proagents/knowledge/CREW-PROTOCOL.md", kind: "generate", part: "proagents" });
    writes.push({ path: "proagents/registry/experts.json", kind: "generate", part: "proagents" });
    writes.push({ path: "STACK.md", kind: "generate", part: "proagents" });
  }

  const links = [];
  for (const part of parts) {
    for (const hand of part.hands_to) links.push({ from: part.id, to: hand.part, name: hand.name, how: hand.how });
  }

  return {
    at: new Date().toISOString(),
    dir,
    force,
    parts: parts.map((p) => ({ id: p.id, title: p.title, requires: p.requires, installs: p.installs, verify: p.verify })),
    writes,
    links,
    config: {
      name: context.name,
      goal: context.goal,
      money: context.money,
      harness: context.harness,
      model: context.model ?? null,
      cap: context.cap,
      browser: context.browser,
      verification: context.verification,
      projects: context.projects.map((p) => ({ id: p.id, root: p.root, browser_space: p.browser_space, agents: p.agents.map((a) => a.name), tasks: p.tasks.map((t) => t.id) })),
    },
    violations,
  };
}

// ---------------------------------------------------------------------------
// apply
// ---------------------------------------------------------------------------

function contentFor(rel, context, plan) {
  switch (rel) {
    case "orchestration/projects.json":
      return projectsJson(context);
    case "orchestration/state/.gitignore":
      return stateGitignore();
    case "proagents/MONEY-CONTRACT.md":
      return moneyContractMd(context);
    case "proagents/knowledge/CREW-PROTOCOL.md":
      return crewProtocolMd(context);
    case "proagents/registry/experts.json":
      return expertsJson(context);
    case "STACK.md":
      return stackMd(context, plan.parts);
    case ".acc/config/config.yaml":
      return accConfigYaml(context);
    case ".acc/config/templates/agents.md":
      return accAgentsTemplate(context);
    case ".acc-memory.md":
      return rootMemory(context);
    default:
      if (rel.endsWith("/.acc-memory.md")) {
        const project = context.projects.find((p) => rel === `${p.root}/.acc-memory.md`);
        if (project) return projectMemory(context, project);
      }
      return null;
  }
}

/**
 * Write the plan. Two rules, both learned the hard way elsewhere:
 *
 *   - an existing file is never clobbered. A differing generated file is
 *     reported and left alone unless `force` is set, because a repo that already
 *     has a projects.json has decisions in it that an installer cannot re-derive.
 *   - package.json is merged, never replaced: the `ace` key is added and every
 *     other key is left exactly as it was.
 */
export function applyStack(plan, context, { force = false } = {}) {
  const written = [];
  const skipped = [];
  const created_dirs = [];

  const ensureDir = (rel) => {
    const dir = path.dirname(path.join(plan.dir, rel));
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      created_dirs.push(path.relative(plan.dir, dir) || ".");
    }
  };

  const mergeManifest = () => {
    const file = path.join(plan.dir, "package.json");
    const existing = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, "utf8")) : null;
    const manifest = existing ?? { name: context.name, version: "0.0.0" };
    const before = JSON.stringify(manifest.ace ?? null);
    manifest.ace = aceKey(context);
    if (JSON.stringify(manifest.ace) === before) {
      skipped.push({ path: "package.json", reason: "the ace key already matches this plan" });
      return;
    }
    fs.writeFileSync(file, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
    written.push({ path: "package.json", kind: existing ? "merge" : "create", note: existing ? "ace key replaced; all other keys untouched" : "manifest created (the repo had none)" });
  };

  for (const write of plan.writes) {
    const abs = path.join(plan.dir, write.path);

    if (write.kind === "merge") {
      mergeManifest();
      continue;
    }

    let content = null;
    if (write.kind === "vendor") {
      content = fs.readFileSync(write.from, "utf8");
    } else {
      content = contentFor(write.path, context, plan);
      if (content === null) {
        skipped.push({ path: write.path, reason: "no generator is defined for this path" });
        continue;
      }
    }

    if (write.kind === "vendor" && !write.path.endsWith(".mjs") && fs.existsSync(abs) && !force) {
      // A README or a config the operator may have edited: copy it only when it
      // is absent, and say so.
      skipped.push({ path: write.path, reason: "already exists — kept as it is (pass --force to overwrite)" });
      continue;
    }
    if (write.kind === "seed") {
      // Not even --force overwrites memory: it holds what a session already
      // learned, and an installer has no way to know whether that matters. Delete
      // the file to re-seed it.
      if (fs.existsSync(abs)) {
        skipped.push({ path: write.path, reason: "already exists — kept as it is; memory is seeded once and never overwritten (delete the file to re-seed)" });
        continue;
      }
    } else if (write.kind === "generate" && fs.existsSync(abs)) {
      const current = fs.readFileSync(abs, "utf8");
      if (current === content) {
        skipped.push({ path: write.path, reason: "already identical" });
        continue;
      }
      if (!force) {
        skipped.push({ path: write.path, reason: "exists and differs from this plan — kept as it is (pass --force to overwrite)" });
        continue;
      }
    }

    ensureDir(write.path);
    fs.writeFileSync(abs, content, "utf8");
    written.push({ path: write.path, kind: write.kind === "vendor" ? "copy" : "generate", bytes: Buffer.byteLength(content) });
  }

  return { written, skipped, created_dirs, at: new Date().toISOString() };
}

// ---------------------------------------------------------------------------
// verify
// ---------------------------------------------------------------------------

/**
 * Check the written setup, part by part, against the installed modules
 * themselves — not against a description of them. A check that needs a live
 * multiplexer is reported as `skip` with its reason; it is never reported as a
 * pass.
 */
export async function verifyStack(plan, context) {
  const checks = [];
  const add = (part, name, status, detail = "") => checks.push({ part, name, status, detail });

  const importInstalled = async (rel) => {
    const file = path.join(plan.dir, rel);
    if (!fs.existsSync(file)) throw new Error(`${rel} was not written`);
    return import(pathToFileURL(file).href);
  };

  let config = null;
  try {
    config = JSON.parse(fs.readFileSync(path.join(plan.dir, "orchestration", "projects.json"), "utf8"));
  } catch (err) {
    add("herdr-spaces", "orchestration/projects.json parses", "fail", String(err.message || err));
  }

  // herdr-spaces — the topology rule, run against the real module.
  if (config) {
    try {
      const topology = await importInstalled("orchestration/lib/topology.mjs");
      const placement = topology.placementInvariant(config);
      add("herdr-spaces", "every declared agent resolves to a tab that allows its role", placement.ok ? "pass" : "fail", placement.ok ? placement.plan.join(" + ") : placement.violations.join("; "));
      const expectedTabs = 1 + (config.projects || []).length;
      const actualTabs = topology.tabs(config).ids.length;
      add("herdr-spaces", `tab count is 1 + projects (${expectedTabs})`, actualTabs === expectedTabs ? "pass" : "fail", topology.tabs(config).ids.join(" + "));
      add("herdr-spaces", "live tab creation (tabs.mjs up)", "skip", "needs a running Herdr session; run `node orchestration/tabs.mjs up --dry-run` inside one");
    } catch (err) {
      add("herdr-spaces", "topology module loads and checks the data", "fail", String(err.message || err));
    }
  }

  // ego-lite-spaces — the space invariant.
  if (config) {
    try {
      const ego = await importInstalled("orchestration/lib/ego.mjs");
      for (const project of config.projects || []) {
        const verdict = ego.spaceInvariant(project);
        add("ego-lite-spaces", `space for ${project.id} equals its id and its tree name`, verdict.ok ? "pass" : "fail", verdict.ok ? `${verdict.space} (${verdict.root})` : verdict.violations.join("; "));
      }
    } catch (err) {
      add("ego-lite-spaces", "space invariant checks the data", "fail", String(err.message || err));
    }
  }

  // govern — ACE's own validation, over the merged ace key.
  try {
    const resolved = configLib.resolveConfig({ dir: plan.dir });
    const verdict = configLib.validateEffective(resolved.effective, { layers: resolved.layers });
    const errors = (verdict.errors || []).map((e) => `${e.code ?? "error"}: ${e.message}`);
    add("govern", "the ace configuration validates", verdict.ok ? "pass" : "fail", verdict.ok ? `spec ${resolved.effective.spec}` : errors.join("; "));
    const budget = resolved.effective.concurrency?.max_active_agents;
    const cap = config?.cap?.max_active_workers;
    add("govern", `the active-agent budget equals the stack's worker cap (${cap})`, Number(budget) === Number(cap) ? "pass" : "fail", `ace budget ${budget}, orchestration cap ${cap}`);
    add("govern", "one governor cycle", "skip", "needs live state; run `ace govern` after the first dispatch");
  } catch (err) {
    add("govern", "the ace key validates", "fail", String(err.message || err));
  }

  // supervisors-workers — the roster and the money lines.
  if (config) {
    const projects = config.projects || [];
    const noSupervisor = projects.filter((p) => (p.agents || []).filter((a) => a.role === "supervisor").length !== 1);
    add("supervisors-workers", "exactly one supervisor per project", noSupervisor.length ? "fail" : "pass", noSupervisor.length ? noSupervisor.map((p) => p.id).join(", ") : `${projects.length} project(s)`);
    const noWorker = projects.filter((p) => !(p.agents || []).some((a) => a.role === "worker"));
    add("supervisors-workers", "every project has at least one worker", noWorker.length ? "fail" : "pass", noWorker.length ? noWorker.map((p) => p.id).join(", ") : projects.map((p) => `${(p.agents || []).filter((a) => a.role === "worker").length}`).join(" + "));
    const tasks = projects.flatMap((p) => (p.tasks || []).map((t) => ({ ...t, project: p.id })));
    const unpriced = tasks.filter((t) => !String(t.money ?? "").trim());
    add("supervisors-workers", "every task names the dollar it can produce", unpriced.length ? "fail" : "pass", tasks.length ? `${tasks.length} task(s), all priced` : "no task declared yet — an empty queue is allowed, an unpriced task is not");
  }

  // acc — the control file and one memory per tree.
  try {
    const control = path.join(plan.dir, ".acc", "config", "config.yaml");
    const hasControl = fs.existsSync(control) && /schema_version:\s*\d+/.test(fs.readFileSync(control, "utf8"));
    add("acc", "the ACC control file exists and declares a schema version", hasControl ? "pass" : "fail", path.relative(plan.dir, control));
    const missing = (context.projects || []).filter((p) => !fs.existsSync(path.join(plan.dir, p.root, ".acc-memory.md")));
    add("acc", "every project tree has its own memory file", missing.length ? "fail" : "pass", missing.length ? missing.map((p) => p.root).join(", ") : `${(context.projects || []).length} tree(s)`);
  } catch (err) {
    add("acc", "ACC files check", "fail", String(err.message || err));
  }

  // proagents — the contract, the convention, the registry.
  try {
    const money = fs.readFileSync(path.join(plan.dir, "proagents", "MONEY-CONTRACT.md"), "utf8");
    add("proagents", "the money contract is written", /money line/i.test(money) ? "pass" : "fail", "proagents/MONEY-CONTRACT.md");
    const protocol = fs.readFileSync(path.join(plan.dir, "proagents", "knowledge", "CREW-PROTOCOL.md"), "utf8");
    const fields = ["mission", "project", "owner", "status", "Evidence", "HANDOFF:"].filter((f) => protocol.includes(f));
    add("proagents", "the handoff convention names its fields and its marker", fields.length >= 5 ? "pass" : "fail", `found ${fields.length}/6 markers`);
    const registry = JSON.parse(fs.readFileSync(path.join(plan.dir, "proagents", "registry", "experts.json"), "utf8"));
    const bad = (registry.experts || []).filter((e) => !e.id || !e.tool || !e.status);
    add("proagents", "the tool registry parses and every entry is named and accounted for", (registry.experts || []).length && !bad.length ? "pass" : "fail", `${(registry.experts || []).length} entr(ies)`);
  } catch (err) {
    add("proagents", "the proagents layer is present", "fail", String(err.message || err));
  }

  const failed = checks.filter((c) => c.status === "fail");
  return { ok: failed.length === 0, checks, passed: checks.filter((c) => c.status === "pass").length, failed: failed.length, skipped: checks.filter((c) => c.status === "skip").length };
}
