![RAE FAANG](assets/brand-logo-icon.png)

# CLI reference

Use the published npm CLI to browse products, read research, compare candidate open-source projects and generate a Markdown skill for your coding agent. The skill helps your agent plan work in your project. The CLI can check catalog data; it does not build or test your implementation.

## Run the CLI

One-off use from npm:

```bash
npx rae-faang products list
npx rae-faang research dossier google-search
npx rae-faang google-search --out ./google-search.md
```

Or install globally for the `rae` and `rae-faang` commands:

```bash
npm install -g rae-faang
rae products list
rae google-search --out ./google-search.md
```

The published package includes the catalog, research dossiers, candidate projects, schemas and skill generator. From npm, `npx rae-faang <id> --out ./<id>.md` writes one portable product skill; omitting `--out` writes `./<id>.md`. This shorthand does not create a kit directory. The explicit `skills generate <id>` form is also available; batch generation writes under `./rae-skills/`. To create a kit directory with `skill.md` and `mcp.json`, use `npx rae-faang build agent-kit <id> --out ./<id>-agent`. No source checkout is needed for bundled catalog, research and skill commands. In a source checkout use `npm run cli -- <group> <command> [options]`. `npx` may prompt to confirm a one-off package install; `--yes` is optional and omitted here so users see that prompt.

## Options available on every command

| Option | Description |
|---|---|
| `--format json` | Machine-readable output. Stable; covered by tests. |
| `--help`, `-h` | Show usage. |
| `--version`, `-v` | Show the CLI version. |

## Exit codes

| Code | Meaning |
|---|---|
| `0` | Success (or a report with nothing wrong). |
| `1` | Validation failure, unknown command, or a missing record. |

Validation commands return exit code `1` when they find errors, so CI can stop a build when records need attention.

---

## `products`

| Command | Description |
|---|---|
| `products list` | List catalogued products. |
| `products show <product-id>` | Show one product's full record. |

**Options:** `--company <id>` filter by company, `--status <status>` filter by
`research_status`, `--alt-status <status>` filter by `alternative_status`,
`--format json`. The table column `alt:` reports `alternative_status`
(`unassessed`, `none_verified`, `unknown`, `partial`, `adequate`, `mature`) —
the research label the catalog page and product skills use.

```bash
npx rae-faang products list --company amazon_aws
npx rae-faang products show google-search --format json
```

---

## `companies`

| Command | Description |
|---|---|
| `companies list` | List registered company entries. |
| `companies show <company-id>` | Show one company record. |

**Options:** `--format json`.

```bash
npx rae-faang companies list
npx rae-faang companies show netflix --format json
```

---

## `research`

| Command | Description |
|---|---|
| `research coverage` | Show each company's catalog and research counts, plus missing, stale, invalid, orphaned, or duplicate records. |
| `research dossier <product-id>` | Print the dossier Markdown for a product; use `--format json` to return `{ id, name, markdown }`. |
| `research pending` | List products with `research_status: pending`. |
| `research stale` | List products with `research_status: stale`. |
| `research validate` | Check catalog records and research frontmatter against the schemas, then report mismatched IDs, unknown companies, duplicates, and orphaned files. |

**Options:** `--company <id>` (coverage), `--format json`.

```bash
npx rae-faang research coverage --format json
npx rae-faang research dossier google-search
npx rae-faang research dossier google-search --format json
npx rae-faang research validate
npx rae-faang research pending
```

`research validate` exits `1` when any error is found (missing files are
warnings, not errors). `research dossier <product-id>` returns the dossier contents
bundled with the package, so an agent can read evidence without a clone.

---

## `gaps`

| Command | Description |
|---|---|
| `gaps products` | Compare catalog entries with the target inventory and list products missing from each company. |
| `gaps alternatives` | List products by `alternative_status` / `alternative_coverage`. |
| `gaps opportunities` | Find `build_missing` products without an `opportunities/<id>.md` spec. |
| `gaps all` | Run all three. |

**Options:** `--company <id>`, `--manifest <path>` (defaults to
`catalog/manifests/faang.json`), `--status <status>` (alternatives),
`--format json`.

```bash
npx rae-faang gaps products
npx rae-faang gaps alternatives --status none_verified
npx rae-faang gaps all --format json
```

---

## `alternatives`

| Command | Description |
|---|---|
| `alternatives list` | Show the alternatives and comparisons recorded in product research dossiers, with each product's status and coverage. |
| `alternatives validate` | Check that alternative status and coverage agree. For example, a `mature` alternative cannot have `unknown` coverage. |
| `alternatives coverage` | Summarise counts by coverage classification and by status. |

**Options:** `--product <id>` (list), `--format json`.

```bash
npx rae-faang alternatives coverage
npx rae-faang alternatives validate
```

---

## `opportunities`

| Command | Description |
|---|---|
| `opportunities list` | Group products by opportunity status and show which ones have a build specification. |
| `opportunities show <product-id>` | Show a product's opportunity classification and its spec, if present. |
| `opportunities validate` | Ensure every `build_missing` product has an `opportunities/<id>.md` spec. |
| `opportunities export` | Emit all classified opportunities as one JSON document for downstream use. `--out <file>` also writes it to a file. |

**Options:** `--format json`.

```bash
npx rae-faang opportunities validate
npx rae-faang opportunities export > opportunities.json
# or write directly:
npx rae-faang opportunities export --out opportunities.json
```

---

## Generate product skills and optional workspaces

| Command | Description |
|---|---|
| `skills generate <product-id>` | Compile and write one skill. From an npm-installed package, default output is `./<product-id>.md`; `--out FILE` selects an explicit file. Batch options process products under `./rae-skills/<company>/<product-id>.md`. In a source checkout, default output is the canonical `catalog/skills/<company>/<product-id>.md`. |
| `skills validate [<product-id>]` | Check required sections, IDs and traceability against the bundled canonical skill; supports `--company ID` and `--all`. |
| `skills coverage` | Report per-product missing research and catalog-wide skill-generation coverage; does not write files. |
| `build agent-kit <product-id>` | Generate a copy of the product-specific Markdown build skill (`skill.md`) and optional MCP configuration in a separate directory (default: `./<product-id>-agent`; override with `--out DIR`). Give the skill to your coding agent in the project where you want the product built. |
| `build product <product-id>` | Optionally scaffold a starter workspace with an ACE shim, `package.json`, and specification files (default: `./<product-id>`; override with `--out DIR`). Give the product's Markdown skill to your coding agent in the project where you want to build; the scaffold is optional. Existing workspaces are left alone unless you pass `--force`. |
| `rea capture <product-id>` | Capture observations from the product's public web pages with REA; requires the repository research tools, not just the installed CLI package. |
| `alternatives clone <product-id>` | Clone a listed open-source project. By default, the CLI chooses the first non-proprietary entry. Use `--alt NAME` to choose a project, `--repo URL` to set its repository, or `--into DIR` to choose where it goes. |
| `<product-id>` | Shorthand: generate one portable Markdown skill. Use `--out FILE` to choose the output path (default: `./<product-id>.md`). Give the file to your coding agent; the agent builds in your project. With `--alt NAME`, clone a listed alternative instead. |

```bash
npx rae-faang google-search --out ./google-search.md
npx rae-faang skills generate --all --format json
npx rae-faang skills validate --all
npx rae-faang skills coverage --format json
npx rae-faang build agent-kit gmail --out ./gmail-agent
npx rae-faang gmail --out ./gmail.md
npx rae-faang build product gmail --out ./gmail-workspace
npx rae-faang research dossier gmail
npx rae-faang alternatives clone aws-s3 --into ./alternatives
npx rae-faang aws-s3 --alt "Ceph (RADOS Gateway)"
```

## Use the CLI from another tool

Pass `--format json` when another script or program needs to read command output. For example:

```bash
npx rae-faang research coverage --format json \
  | node -e "let s='';process.stdin.on('data',d=>s+=d).on('end',()=>{const j=JSON.parse(s);console.log(j.total.cataloged)})"
```
