# AGENTS.md — How to work in this repository

Audience: AI coding agents and the humans directing them. Read this before
opening a task. It explains the two systems in this repo, the roles, the workflow,
and the rules that keep machine-assisted development trustworthy.

> **The mission: make the products of the world's biggest technology companies free, open source, and accessible to everyone.**

---

## 1. The two systems

This repository has two cooperating layers. Know which one you are touching.

| Layer | What it is | Where |
|---|---|---|
| **Product intelligence** | A deterministic CLI + catalog + research dossiers. It *validates and reports*; it never guesses. | `src/cli.js`, `catalog/`, `research/` |
| **ACE environment** | `ace-proagents` — the agent orchestration framework (`ace/v1`). It schedules agents, tasks, handoffs, and governance. | root `ace.mjs` + `lib/`, the `ace` key in `package.json`, `.ace/` runtime state |

**Division of labour:** agents *discover and propose*; the CLI *validates and
reconciles*. If the CLI disagrees with a claim, the CLI wins.

The canonical documentation set lives in [`docs/`](docs/README.md). `.docs/` is
historical design material and is **not** authoritative where it conflicts.

---

## 2. Roles

ACE declares these workers in the root `package.json` `ace.agents.workers`:

| Role | Owns |
|---|---|
| `researcher` | Product dossiers, evidence, alternatives sections |
| `architect` | Specification sets, data models, API contracts, opportunity specs |
| `frontend` | Client implementation in a product workspace |
| `backend` | Service implementation in a product workspace |
| `tester` | Automated tests, acceptance-criteria verification |
| `reviewer` | Code review, security, performance |
| `documenter` | `docs/`, READMEs, migration guides |

A task is owned by exactly one agent at a time. ACE enforces the lease.

---

## 3. Command reference

Run these from the repository root unless noted. Use the `ace` CLI for all ACE commands: `ace <cmd>`.

**Environment**
```bash
ace status            # runtime overview + governance snapshot
ace context --json    # host, runtime, git, tools
ace config check      # validate the effective ace/v1 config
ace config --resolve  # show the merged config layers
ace adapters list     # available providers; adapters health|audit
ace doctor --json     # environment diagnostics
```

**Deterministic catalogue work (the source of truth)**
```bash
rae products list [--company ID] [--status STATUS] [--format json]
rae research coverage [--company ID] [--format json]
rae research validate [--format json]     # structural integrity
rae gaps all                              # inventory shortfalls
rae opportunities validate                # build_missing w/ specs
npm run validate   # research + alternatives validation
npm test           # node:test suite over the CLI + schemas
```

**Task lifecycle**
```bash
ace task add --title "<t>" --project <p> --role <r>
ace task list
ace task claim <id> --agent <agent>
ace task start <id>
ace task review <id>      # -> integrate | done
ace task integrate <id>
ace handoff submit <task> --file handoff.json
ace handoff verify <task>
```

**Governance**
```bash
ace crew            # roster, live budget
ace govern          # one governor cycle
ace supervise       # one supervisor cycle: assign, verify, integrate
ace watchdog status
ace verify          # run configured verification
```

---

## 4. The handoff protocol

A task is **not** complete because an agent says so. It is complete when its
handoff artifact is verified.

1. **Claim** the task (`task claim`) so no one else takes it.
2. **Do the work** in the smallest change that satisfies the acceptance criteria.
3. **Verify** — run the task's commands and capture their real exit codes.
4. **Submit a handoff** — `ace handoff submit <task> --file handoff.json`.
5. **Verification** — a supervisor (or `handoff verify`) accepts or rejects it.

### Handoff artifact

```json
{
  "taskId": "task-123",
  "attempt": 1,
  "agentId": "backend-1",
  "agentRole": "backend",
  "status": "completed",
  "summary": "Implemented POST /api/media with validation and thumbnailing",
  "changedFiles": ["src/api/media/upload.ts", "tests/media/upload.test.ts"],
  "commands": [
    { "command": "npm test", "exitCode": 0, "duration": 4500 }
  ],
  "checksNotRun": ["load-test"],
  "decisions": ["Used the existing storage adapter rather than a new one"],
  "risks": ["Uploads >50MB are untested"],
  "recommendedNextAction": "Integration-test the upload flow",
  "completedAt": "2026-10-13T14:30:00Z"
}
```

### Acceptance checklist

- [ ] At least one command in `commands[]` exited `0`.
- [ ] `changedFiles` match the task scope.
- [ ] `checksNotRun` explains anything left unverified.
- [ ] `npm test` and `npm run validate` pass if the change touched the catalogue.
- [ ] `recommendedNextAction` is specific and actionable.

---

## 5. How to do the common jobs

**Add or change a product record**
1. Add one line to `catalog/products.jsonl` (valid `product_type` — check
   `catalog/schema/product.schema.json`).
2. Create `research/companies/<company>/products/<id>.md` with valid frontmatter.
3. Run `rae research validate` until clean, then `npm test`.

**Add or change the open-source landscape or the website**
1. Edit `tools/skills/catalog-data.mjs` (alternatives, links, licences, verdicts)
   or `docs/*.md`.
2. Run `npm run skills:catalog && npm run site:build` — the site is generated;
   `npm run validate` fails with drift until both are rebuilt.
3. Everything under `site/` except `styles.css` is generated output; edit the
   templates in `tools/site/`, not the built pages.

**Research a product**
Fill sections 1–15 of its dossier from public, authorized sources; cite each
material claim in `evidence[]`; set `research_status`, `last_researched_at`, and
`research_confidence`. Then `rae research coverage --company <id>`.

**Specify a product**
Work inside `products/<company>/<product>/specs/` — follow the standard set
(`01-product-vision` → `10-migration-guide`). Acceptance criteria (`07`) must be
testable.

**Add a product workspace**
```
products/<company>/<product>/
├── ace.mjs        # product workspace CLI shim; invoke as `ace`
├── package.json   # needs an "ace" key; copy the shape from a sibling
└── specs/
```
Then from that directory: `ace config check` must pass.

**Note:** use the `ace` CLI for ACE commands in the root or a product workspace. The workspace package resolves the installed ACE CLI; invoke it with `ace <command>`.

---

## 6. Rules

- **Evidence first.** No material claim without a cited, public source.
- **Clean room.** Only publicly observable behavior and authorized interfaces.
  No decompilation, proprietary source, protected assets, or access-control
  bypass. See the *Responsible Reverse Engineering* section of the README.
- **The CLI is the arbiter.** A red `research validate` or failing `npm test`
  blocks a handoff.
- **Never weaken verification.** Do not delete a test, loosen a schema, swallow
  an error, or add a suppression to make a check pass. Fix the cause.
- **One owner per task.** Do not edit a file another live task owns.
- **Keep the plan honest.** When something is aspirational, say so — in specs,
  in docs, and in commit messages.

---

## 7. See also

- [`docs/getting-started.md`](docs/getting-started.md) — set up and run.
- [`docs/agent-workflow.md`](docs/agent-workflow.md) — the multi-agent loop.
- [`docs/cli-reference.md`](docs/cli-reference.md) — every CLI command.
- [`docs/catalog-and-schemas.md`](docs/catalog-and-schemas.md) — data formats.
- [`PLAN.md`](PLAN.md) — what to build next.
- [`CONTRIBUTING.md`](CONTRIBUTING.md) — contributing as a human.
