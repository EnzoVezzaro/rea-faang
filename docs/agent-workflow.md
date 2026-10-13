# Agent Workflow (ACE)

REA FAANG uses **ACE** (`ace-proagents`) as its agent orchestration framework: a
git-native package ecosystem for reproducible, orchestrator-driven agent
environments (spec `ace/v1`). ACE has **zero runtime dependencies** — it is a
single Node ESM CLI plus a `lib/` of modules.

The companion document [`AGENTS.md`](../AGENTS.md) is the day-to-day operating
manual (roles, commands, handoff artifact). This document explains the model
behind it.

## Why ACE

- **Zero runtime dependencies** — Node ESM only (`ace.mjs`), Node 20+.
- **Git stays the source of truth** — the environment is described by
  `package.json` (the `ace` key) + `ace-lock.json`, not by hidden state.
- **Specification is not state** — what should exist is committed; what actually
  exists (missions, heartbeats, leases, routes, handoffs) lives in `.ace/` and
  `orchestration/state/` and is not published.
- **Self-contained workspaces** — the repository and each product can each run
  the CLI.
- **Governance built in** — Governor → Supervisor → Worker.
- **Swappable adapters** — every capability has providers (see `adapters list`).

## Where things live

```
/                         root ACE workspace (the whole repository)
├── ace.mjs               ACE CLI (copied from ace-proagents)
├── lib/                  ACE modules (copied from ace-proagents)
├── ace-lock.json         resolved dependencies
├── package.json          the `ace` key: spec, agents, adapters, policies…
├── .ace/                 runtime state (gitignored)
├── ace-context.md        (optional) operator notes
├── catalog/ research/    the product-intelligence layer (see catalog doc)
└── products/<company>/<product>/
    ├── ace.mjs           shim → repository-level CLI, run with this dir as cwd
    ├── package.json      product `ace` key + scripts
    └── specs/            the specification set
```

Both `ace.mjs` and `lib/` at the root are **copies** from the installed
`ace-proagents` package. To upgrade:

```bash
npm update ace-proagents
cp node_modules/ace-proagents/ace.mjs ./ace.mjs
cp -R node_modules/ace-proagents/lib ./lib
```

Product `ace.mjs` files are three-line shims that run the root CLI with the
product as the working directory, so there is only one real CLI to keep current.

## Configuration and layers

The effective configuration is the merge of several layers. Inspect it:

```bash
node ace.mjs config --resolve   # show the merged config and its layers
node ace.mjs config check       # validate it (actionable errors)
```

The root `package.json` `ace` key declares:

- `spec: "ace/v1"` and the workspace name/goal/milestones;
- `orchestrator` and `agents.workers` with roles and capabilities;
- `tools` the crew may use (`git`, `github`, `filesystem`, `terminal`,
  `web-search`);
- `adapters` binding each capability to a provider — `workspace: git-worktree`,
  `agent-runtime: opencode`, `context: acc`, `handoff: proagents`,
  `verification: package-scripts`, `persistence: filesystem`;
- `policies` (`require_review_before_merge: true`), `concurrency`
  (`max_active_agents`), and `lifecycle` behaviour.

If `config check` reports `INCOMPATIBLE_ADAPTER`, you used a provider ACE does
not ship. Cross-check with `node ace.mjs adapters list`.

## Roles

Specialised workers, one owner per task:

| Role | Produces |
|---|---|
| researcher | Evidence-backed product dossiers |
| architect | Specification sets, data models, API contracts, opportunity specs |
| frontend / backend | Product implementation |
| tester | Tests and acceptance-criteria verification |
| reviewer | Review, security, performance |
| documenter | `docs/`, READMEs, migration guides |

## Task lifecycle

```
add → claim → start → review → integrate → done
```

- `task claim` pins a single owner (lease enforced).
- `task start` records the agent heartbeat.
- `task review` opens the handoff for acceptance.
- `task integrate` merges verified work.

Inspect state with `node ace.mjs tasks`, `node ace.mjs agents`,
`node ace.mjs events --limit 20`, and `node ace.mjs logs`.

## Handoff and verification

An agent submits a structured artifact (`ace handoff submit <task> --file …`);
a supervisor accepts or rejects it (`ace handoff verify <task>`). At least one
command must show exit code `0`, changed files must match the task scope, and
anything unverified must be named. The full artifact shape and checklist are in
[`AGENTS.md`](../AGENTS.md) §3–4.

Verification runs through the `package-scripts` adapter. Configure the commands
ACE should run, then:

```bash
node ace.mjs verify            # configured verification (lint/typecheck/test/build)
npm run verify                 # this repo: validate + test
```

## The development loop

```
investigate → understand → reimplement → verify → release and improve
```

Specialised agents move work through that loop per product. The deterministic
CLI is the arbiter at the boundaries: a dossier is only "researched" when
`research validate` is clean and the coverage report agrees, and a build task is
only done when its tests pass.

## Governance

- **Governor** — watches liveness, progress, and budget; fails over and escalates
  (`node ace.mjs govern`).
- **Supervisor** — assigns, monitors, verifies, integrates (`node ace.mjs supervise`).
- **Watchdog** — an independent control plane for governor failures
  (`node ace.mjs watchdog status`).

Budgets and the roster: `node ace.mjs crew`. The money line per task is part of
the ACE model; `ace setup` writes the arrangement that enforces it.

## Skills

ACE ships an agent skill, `.agents/skills/ace/SKILL.md`, which is the manual for
the interrogation, the six parts, and the rules for driving an installed crew.
Load it before running the installer, and run `node ace.mjs parts --questions`
for the full intake question list.

## Scaling

- **Phase 1 (now):** one root workspace; catalog and research led by CLI-verified
  agents; product workspaces in specs.
- **Phase 2:** one product end-to-end (research → specs → build → verified
  release).
- **Phase 3+:** multiple products, shared infrastructure, cross-product tasks,
  and the governor/supervisor hierarchy above a growing worker pool.
