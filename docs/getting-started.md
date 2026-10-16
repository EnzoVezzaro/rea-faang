![RAE FAANG](assets/brand-logo-icon.png)

# Get started

Install RAE, choose a product, then give its Markdown skill to your coding agent. It provides research and directions for assessing candidate projects, planning the work and testing an independent implementation in your project. You can use the published CLI without cloning this repository.

## Prerequisites

- **Node.js 20+** (LTS recommended)
- **npm 10+** (ships with Node)
- **git**

Optional, depending on your project:

- **Docker** for containerized products
- **PostgreSQL 16+** for products with a database
- An agent runtime (for example **opencode**) if you intend to run ACE agents

The CLI and ACE run on Node.js. Installing the source checkout with `npm install` installs packages listed in its `package.json`. A global or one-off npm CLI install does not require a database or a running service to browse and validate the bundled catalog.

## Install the CLI

```bash
npx rae-faang --help
npx rae-faang products list
```

For repeated use, install the published package globally; it provides both `rae` and `rae-faang` commands:

```bash
npm install -g rae-faang
rae --help
```

The package includes the catalog, dossiers, candidate projects and schemas, so you can browse products, check catalog data and generate a skill without a source checkout.

## Work from the source repository

Clone the repository only when you need to edit catalog/source files, run the full project test suite and generators, or use repository-only tools such as REA capture:

```bash
git clone <your-repo-url> rae-faang
cd rae-faang
npm install
```

## Check your setup

Run the tests and catalog checks, then make sure ACE can read its configuration:

```bash
npx rae-faang research coverage  # product research status
npx rae-faang research validate  # bundled catalog integrity

# In a source checkout only:
npm test                               # deterministic project suite
npm run validate                       # catalog + research + generated-artifact integrity
ace status                             # ACE environment overview
ace config check                       # ace/v1 config validates
```

The tests should pass, validation should report no errors, and `ace config check` should print `config: OK`.

## Browse products and get an agent skill

Use the CLI to browse products, review alternative research and generate a Markdown skill for your coding agent. Start with its help:

```bash
npx rae-faang --help
```

Common one-off commands from npm:

```bash
# What products do we track?
npx rae-faang products list
npx rae-faang products list --company google --format json

# One product and its evidence dossier
npx rae-faang products show google-search
npx rae-faang research dossier google-search

# How complete is the research?
npx rae-faang research coverage
npx rae-faang research pending

# What is missing?
npx rae-faang gaps all
npx rae-faang opportunities validate

# Generate one portable Google Search skill for your coding agent
npx rae-faang google-search --out ./google-search.md

# Use `rae` after a global npm install
rae google-search --out ./google-search.md
```

Full reference: [cli-reference.md](cli-reference.md).

The product-ID command writes one Markdown file at `--out` (default `./<product-id>.md`). Give that file to your coding agent from the project where you want to work. It points the agent to product research and candidate projects, and helps it plan, build and test a scoped implementation. Alternative-coverage status describes the catalog's reuse research; it does not measure build feasibility. For batch skill generation, JSON reports or bundled-skill validation, use the explicit `skills generate`, `skills coverage` and `skills validate` commands in the CLI reference.

## Use ACE to coordinate agents

ACE (`ace-proagents`) reads its configuration from the `ace` key in the root
`package.json`. Check its status and available tools with:

```bash
ace --help
ace status
ace context --json
ace crew              # roster and budget
ace adapters list     # available providers
ace doctor --json     # diagnostics
```

### Product workspaces

In a source checkout, existing product workspaces under `products/<company>/<product>/` can run ACE. To build a product, give its Markdown skill to your coding agent in your project. A starter workspace is optional: scaffold one with `npx rae-faang build product <id> --out ./<id>` and install its dependencies before running its ACE shim:

```bash
cd products/netflix/netflix-streaming
ace status
ace config check
```

### Installing the full crew

Use `ace setup` when you are ready to configure a full agent crew. It asks about the goal, budget, and project directories, then sets up the governor, supervisors, workers, and their workspaces. Preview the changes first:

```bash
ace setup --dry-run    # see the plan without writing
ace setup --goal "…" --money "…" --projects products/google/google-search
```

Read the ACE skill at `.agents/skills/ace/SKILL.md` inside a workspace (if
present) for the interrogation and the six parts, or run `ace parts
--questions`.

See [agent-workflow.md](agent-workflow.md) for how agents use this.

## Common development commands

```bash
npm test                 # node:test suite for the CLI, schemas and the site
npm run validate         # research + alternatives + skills + site integrity
npm run verify           # validate + test
npm run gaps             # inventory shortfall report
npm run site:build       # regenerate the public website into site/
npx rae-faang <command> # one-off published CLI; `rae <command>` after global install
npm run cli -- <cmd>     # source checkout only
ace <cmd>               # ACE command (source checkout/workspace dependencies)
```

## Troubleshooting

| Problem | Solution |
|---|---|
| `node: command not found` | Install Node.js 20+ (nodejs.org or nvm). |
| `Cannot find module 'js-yaml'` | Run `npm install`. |
| `ace status` prints `runtime not available yet` | The root `lib/` is missing. Re-copy it: `cp -R node_modules/ace-proagents/lib ./lib`. |
| `INCOMPATIBLE_ADAPTER` from `ace config check` | You used a provider that isn't installed. Compare against `ace adapters list`. |
| `MISSING_CREDENTIAL` | Run `ace secret set <name>` for the required credential. |
| `research validate` reports errors | Fix the catalog line or research frontmatter the report names, then re-run. |
| A product's `ace` command fails | The workspace shim expects to sit under `products/<company>/<product>/`. |
| `ace` command is unavailable in a product workspace | Install the workspace dependencies with `npm install`; run ACE commands as `ace <command>`. |

## Choose a next step

- Open [`PLAN.md`](../PLAN.md) and choose one focused task.
- Read [`docs/catalog-and-schemas.md`](catalog-and-schemas.md) before editing the
  catalog or a research dossier.
- Read [`docs/agent-workflow.md`](agent-workflow.md) before running agents.
