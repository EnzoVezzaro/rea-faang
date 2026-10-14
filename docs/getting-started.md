![RAE FAANG](assets/logo.svg)

# Get started

Install RAE, choose a product, and give its Markdown skill to your coding agent. The agent uses the product-specific directions to build and verify an independent implementation in your project. The published CLI works without cloning the RAE source repository.

## Prerequisites

- **Node.js 20+** (LTS recommended)
- **npm 10+** (ships with Node)
- **git**

Optional, depending on your project:

- **Docker** for containerized products
- **PostgreSQL 16+** for products with a database
- An agent runtime (for example **opencode**) if you intend to run ACE agents

The CLI and ACE run on Node.js. `npm install` also installs the packages listed in this repository's `package.json`. You do not need a database or a running service to browse and validate the catalog.

## Install the CLI

```bash
npm install -g rae-faang
rae --help
```

The published package provides `rae` and `rae-faang` commands and bundles the product catalog, dossiers, alternative landscape, and validation schemas. No source checkout is needed to browse products, read a dossier, check catalog data, or generate a product's agent skill.

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
rae research coverage                 # product research status
rae research validate                 # bundled catalog integrity

# In a source checkout only:
npm test                              # deterministic project suite
npm run validate                      # catalog + research + generated-artifact integrity
ace status                             # ACE environment overview
ace config check                       # ace/v1 config validates
```

The tests should pass, validation should report no errors, and `ace config check` should print `config: OK`.

## Browse products and get an agent skill

Use the CLI to browse products, check alternative research, and generate the Markdown build skill for the product you want your coding agent to build in your project. Start with its help:

```bash
rae --help
```

Common commands:

```bash
# What products do we track?
rae products list
rae products list --company google --format json

# One product and its evidence dossier
rae products show google-search
rae research dossier google-search

# How complete is the research?
rae research coverage
rae research pending

# What is missing?
rae gaps all
rae opportunities validate

# Generate the Google Search skill for your coding agent
rae google-search --out ./google-search-agent
```

Full reference: [cli-reference.md](cli-reference.md).

Give the generated product skill to your coding agent in the project where you want the product built. The skill tells the agent what to research, which existing projects to evaluate, and how to plan, build and verify the product. Alternative-coverage status describes only the catalog's reuse research; it does not limit what your agent can build.

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

In a source checkout, existing product workspaces under `products/<company>/<product>/` can run ACE. To build a product, give its Markdown skill to your coding agent in your project. A starter workspace is optional: scaffold one with `rae build product <id> --out ./<id>` and install its dependencies before running its ACE shim:

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
rae <cmd>               # installed CLI (use npx rae in a source checkout)
ace <cmd>              # any ACE command
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
