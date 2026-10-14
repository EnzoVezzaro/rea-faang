![RAE FAANG](assets/logo.svg)

# Agent workflow

Each product's Markdown file is the build skill for that product. Download it from the product page or generate it with the `rae` CLI, then give it to your coding agent in your project. The skill guides your agent through research, reuse decisions, implementation and verification; your agent builds the independent product in your project. Alternative-coverage labels describe research into existing projects; they do not determine whether the product can be built. ACE (`ace-proagents`) is optional for coordinating a team of agents.

Use [`AGENTS.md`](../AGENTS.md) for the command list and handoff template. This guide explains how the parts fit together.

## What ACE manages (source repository)

The installed RAE package includes the product CLI, catalog data and generators. You do not need the RAE source checkout to get a product skill: install the CLI, generate the skill, and use it from your own project. Clone this repository only when you need its source files, ACE configuration, generators or full project checks.

## What ACE manages

- **Configuration:** `package.json` and `ace-lock.json` describe the workspace and its tools.
- **Task state:** the repository stores active missions, assignments and handoffs in runtime directories.
- **Your product build:** give the product's Markdown skill to your coding agent in your project. Optionally scaffold a starter workspace with `rae build product <id> --out ./<id>` and use ACE there; the scaffold is optional, not where the skill has to be used.
- **Review:** governors and supervisors coordinate work; workers take one task at a time.
- **Adapters:** providers connect ACE to the workspace, agent runtime and verification tools. Run `ace adapters list` in the source repository to see what's available.

## Where things live

```
/                         root ACE workspace (the whole repository)
├── node_modules/.bin/ace  ACE CLI installed from ace-proagents
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

ACE is installed from the `ace-proagents` package and invoked through its `ace` CLI. Run `npm update ace-proagents` to upgrade it. Product workspaces use their installed `ace` CLI from their own directory. Invoke ACE commands as `ace <command>`.

## Configuration and layers

ACE combines its configuration layers before it runs. View the result and check it with:

```bash
ace config --resolve   # show the merged config and its layers
ace config check       # validate it (actionable errors)
```

The `ace` section in the root `package.json` sets:

- `spec: "ace/v1"` and the workspace name/goal/milestones;
- `orchestrator` and `agents.workers` with roles and capabilities;
- `tools` the crew may use (`git`, `github`, `filesystem`, `terminal`,
  `web-search`);
- `adapters` binding each capability to a provider: `workspace: git-worktree`,
  `agent-runtime: opencode`, `context: acc`, `handoff: proagents`,
  `verification: package-scripts`, `persistence: filesystem`;
- `policies` (`require_review_before_merge: true`), `concurrency`
  (`max_active_agents`), and `lifecycle` behaviour.

If `config check` reports `INCOMPATIBLE_ADAPTER`, compare the configured provider with the list from `ace adapters list`.

## Roles

Each task has one owner. The roles describe the work each agent handles:

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

Inspect state with `ace tasks`, `ace agents`, `ace events --limit 20`, and `ace logs`.

## Handoff and verification

When a task is done, the agent submits a handoff with `ace handoff submit <task> --file <path>`. A supervisor checks it with `ace handoff verify <task>`. The handoff records changed files, commands and exit codes, checks that remain, decisions and risks. At least one verification command must pass. See [`AGENTS.md`](../AGENTS.md) for the template and checklist.

Configure the verification commands for the workspace, then run them through ACE:

```bash
ace verify            # configured verification (lint/typecheck/test/build)
npm run verify                 # this repo: validate + test
```

## Build a product with its skill

1. Choose the FAANG product you want to build and download or generate its Markdown skill.
2. Give that product skill to your coding agent in your project.
3. Ask your agent to review product evidence and current projects, then decide what to reuse.
4. Have the agent build and test an independent version of the product in your project.
5. Review the result and the actual verification output.

ACE can coordinate this work when you want multiple agents, shared task state and reviewed handoffs. The catalog CLI checks research structure and alternative coverage; your coding agent builds the product in your project, where your project's tests check implementation behavior.

## Governance

- **Governor:** monitors progress and budget, then handles escalation. Run `ace govern`.
- **Supervisor:** assigns tasks, checks handoffs and integrates accepted work. Run `ace supervise`.
- **Watchdog:** monitors the governor. Check it with `ace watchdog status`.

Use `ace crew` to inspect the roster and budget. `ace setup` configures the crew and per-task budget for a project.

## Skills

ACE ships an agent skill, `.agents/skills/ace/SKILL.md`, which is the manual for
the interrogation, the six parts, and the rules for driving an installed crew.
Read it before running setup. To see the intake questions first, run `ace parts --questions`.

## Scaling

- **Use a skill now:** give any product's Markdown skill to your coding agent and build in your project.
- **Improve the catalog:** contribute product research, clearer agent instructions, better alternative assessments, tests and documentation.
- **Phase 3 and later:** work on more products, share useful infrastructure, and coordinate cross-product tasks across agent teams.
