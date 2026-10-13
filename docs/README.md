# REA FAANG — Documentation

This is the canonical documentation set. It describes what the repository
actually does today. Where anything here conflicts with older material, treat
this set and the code as authoritative.

## Contents

| Document | What it covers |
|---|---|
| [getting-started.md](getting-started.md) | Install, run the CLI, start ACE, run tests, troubleshoot |
| [cli-reference.md](cli-reference.md) | Every `src/cli.js` command, flag, and exit code |
| [catalog-and-schemas.md](catalog-and-schemas.md) | The catalog, research dossiers, frontmatter, and JSON Schemas |
| [agent-workflow.md](agent-workflow.md) | The ACE environment and the multi-agent development loop |

Repository-root documents:

- [`README.md`](../README.md) — mission and project overview.
- [`AGENTS.md`](../AGENTS.md) — the agent operating model and handoff protocol.
- [`CONTRIBUTING.md`](../CONTRIBUTING.md) — contributing as a human.
- [`PLAN.md`](../PLAN.md) — what to build next.
- [`DESIGN.md`](../DESIGN.md) — the visual design system.
- [`REA_FAANG_PRODUCTS.md`](../REA_FAANG_PRODUCTS.md) — the raw FAANG product
  inventory used as a source for the catalog.

## About `.docs/`

The `.docs/` directory holds the **original design notes** written before the
current CLI and ACE layout existed. They are kept for history. They are **not**
authoritative and contain stale details — for example, provider names ACE no
longer ships (`git-worktrees`, `markdown-files`, `json-files`), product names
that were never created (`REA-social`, `REA-connect`), and an ACE workflow that
predates the `ace setup` installer.

If you need a fact about how the project works, use `docs/` and the code.
