![RAE FAANG](assets/logo.svg)

# RAE FAANG documentation

Start here to use the product catalog and give a product-specific Markdown skill to your coding agent.
The catalog covers products from Meta, Amazon, Apple, Netflix and Google, with research and open-source
projects for your agent to evaluate before building in your project.

These guides describe the repository as it works today. Use them and the code when older notes
disagree.

## Contributor entry points

This is an open-source research catalog — most useful contributions touch catalog data,
research evidence, product skills, or the deterministic tooling.

- **First build or install?** [`getting-started.md`](getting-started.md).
- **Change the catalog?** [`catalog-and-schemas.md`](catalog-and-schemas.md), then run
  `npm run validate` (CI gate) and `npm test`.
- **Improve a product skill?** Edit `catalog/skills/<company>/<product>.md` or the generator
  in `tools/skills-catalog.mjs`, then `npm run skills:catalog` so the index rebuilds.
- **Improve the site?** Edit the templates in `tools/site/` or `site/styles.css`, then
  `npm run site:build` — everything else under `site/` is generated output.
- **Ship a change?** Follow the contribution loop in
  [`CONTRIBUTING.md`](../CONTRIBUTING.md), and record user-visible changes in
  [`CHANGELOG.md`](../CHANGELOG.md).
- **Research a product?** Fill the dossier sections and cite evidence, then check coverage
  with `rae research coverage --company <id>`.

## Contents

| Document | What it covers |
|---|---|
| [getting-started.md](getting-started.md) | Install the CLI, get a product skill, and use it with your coding agent |
| [cli-reference.md](cli-reference.md) | Browse products, check research, compare alternatives, and generate agent skills |
| [catalog-and-schemas.md](catalog-and-schemas.md) | Product records, research dossiers, alternative coverage, and validation |
| [agent-workflow.md](agent-workflow.md) | How product skills guide your agent and how ACE can coordinate a team |
| [product-research-and-build-plan.md](product-research-and-build-plan.md) | How to make product research and agent instructions actionable |

Repository-root documents:

- [`README.md`](../README.md): product overview, catalog scope, and agent skills.
- [`CHANGELOG.md`](../CHANGELOG.md): release history per version.
- [`AGENTS.md`](../AGENTS.md): the agent operating model and handoff protocol.
- [`CONTRIBUTING.md`](../CONTRIBUTING.md): contributing as a human.
- [`PLAN.md`](../PLAN.md): what to build next.
- [`DESIGN.md`](../DESIGN.md): the visual design system.
- [`REA_FAANG_PRODUCTS.md`](../REA_FAANG_PRODUCTS.md): the raw FAANG product
  inventory used as a source for the catalog.

## About `.docs/`

The `.docs/` directory contains original design notes from before the current CLI and ACE layout.
They are kept for reference, but details such as provider names, product names and setup steps may
be out of date. Use this documentation and the code for current instructions.
