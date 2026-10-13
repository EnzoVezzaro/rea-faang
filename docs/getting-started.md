# Getting Started

Set up the environment and prove it works.

## Prerequisites

- **Node.js 20+** (LTS recommended)
- **npm 10+** (ships with Node)
- **git**

Optional, depending on what you build:

- **Docker** for containerized products
- **PostgreSQL 16+** for products with a database
- An agent runtime (for example **opencode**) if you intend to run ACE agents

The core CLI and the ACE governance CLI have no runtime dependencies beyond
Node — both are zero-dependency ESM.

## Install

```bash
git clone <your-repo-url> rae-faang
cd rae-faang
npm install
```

`npm install` pulls the two CLI dependencies (`js-yaml`, `minimist`) and
`ace-proagents` (dev). Nothing is built.

## Verify the setup

```bash
npm test                              # deterministic CLI suite (should pass)
npm run validate                      # catalog + research integrity
node src/cli.js research coverage     # product research status
node ace.mjs status                   # ACE environment overview
node ace.mjs config check             # ace/v1 config validates
```

Expected: tests pass, `validate` reports no errors, `config check` prints
`config: OK`.

## Run the Product Intelligence CLI

The CLI is the source of truth for the catalog. Start at the help:

```bash
npm run cli -- --help          # or: node src/cli.js --help
```

Common commands:

```bash
# What products do we track?
node src/cli.js products list
node src/cli.js products list --company google --format json

# One product in detail
node src/cli.js products show google-search

# How complete is the research?
node src/cli.js research coverage
node src/cli.js research pending

# What is missing?
node src/cli.js gaps all
node src/cli.js opportunities validate
```

Full reference: [cli-reference.md](cli-reference.md).

## Run ACE (the agent environment)

ACE (`ace-proagents`) is configured through the `ace` key in the root
`package.json` and runs from a zero-dependency CLI:

```bash
node ace.mjs --help
node ace.mjs status
node ace.mjs context --json
node ace.mjs crew              # roster and budget
node ace.mjs adapters list     # available providers
node ace.mjs doctor --json     # diagnostics
```

### Product workspaces

Each product under `products/<company>/<product>/` is its own ACE workspace. Run
commands from inside it; the product `ace.mjs` shim invokes the repository-level
CLI with the product as the working directory:

```bash
cd products/netflix/netflix-streaming
node ace.mjs status
node ace.mjs config check
```

### Installing the full crew

`ace setup` installs the complete crew stack (terminal spaces, browser spaces, a
governor, supervisors, workers, and a money line per task). It is interactive and
needs to know the goal, the money, and the project trees:

```bash
node ace.mjs setup --dry-run    # see the plan without writing
node ace.mjs setup --goal "…" --money "…" --projects products/google/google-search
```

Read the ACE skill at `.agents/skills/ace/SKILL.md` inside a workspace (if
present) for the interrogation and the six parts, or run `node ace.mjs parts
--questions`.

See [agent-workflow.md](agent-workflow.md) for how agents actually use this.

## Development commands

```bash
npm test                 # node:test suite for the CLI and schemas
npm run validate         # research + alternatives validation
npm run verify           # validate + test
npm run gaps             # inventory shortfall report
node src/cli.js <cmd>    # any CLI command directly
node ace.mjs <cmd>       # any ACE command
```

## Troubleshooting

| Problem | Solution |
|---|---|
| `node: command not found` | Install Node.js 20+ (nodejs.org or nvm). |
| `Cannot find module 'js-yaml'` | Run `npm install`. |
| `node ace.mjs status` prints `runtime not available yet` | The root `lib/` is missing. Re-copy it: `cp -R node_modules/ace-proagents/lib ./lib`. |
| `INCOMPATIBLE_ADAPTER` from `ace config check` | You used a provider that isn't installed. Compare against `node ace.mjs adapters list`. |
| `MISSING_CREDENTIAL` | Run `node ace.mjs secret set <name>` for the required credential. |
| `research validate` reports errors | Fix the catalog line or research frontmatter the report names, then re-run. |
| A product's `node ace.mjs` fails | The shim expects to sit three levels below the repo root (`products/<company>/<product>/`). |
| Tests fail after `npm update ace-proagents` | Re-copy the CLI at the root: `cp node_modules/ace-proagents/ace.mjs ./ace.mjs && cp -R node_modules/ace-proagents/lib ./lib`. |

## Next steps

- Read [`PLAN.md`](../PLAN.md) and pick a task.
- Read [`docs/catalog-and-schemas.md`](catalog-and-schemas.md) before editing the
  catalog or a research dossier.
- Read [`docs/agent-workflow.md`](agent-workflow.md) before running agents.
