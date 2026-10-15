![RAE FAANG](assets/brand-logo-icon.png)

# CLI reference

Use `rae` to browse products, read research, compare candidate open-source projects and generate a Markdown skill for your coding agent. The skill helps your agent plan work in your project. The CLI can check catalog data; it does not build or test your implementation.

## Run the CLI

```bash
npm install -g rae-faang
rae products list
```

The published `rae-faang` package includes the catalog, research dossiers, candidate projects and skill generator. It installs both `rae` and `rae-faang` commands. You can browse products, read dossiers, validate catalog data and generate a skill without cloning the source repository.

In a source checkout, the same commands run through the local package:

```bash
npx rae <group> <command> [product-id] [options]
npm run cli -- <group> <command> [options]   # equivalent
```

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
rae products list --company amazon_aws
rae products show google-search --format json
```

---

## `companies`

| Command | Description |
|---|---|
| `companies list` | List registered company entries. |
| `companies show <company-id>` | Show one company record. |

**Options:** `--format json`.

```bash
rae companies list
rae companies show netflix --format json
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
rae research coverage --format json
rae research dossier google-search
rae research dossier google-search --format json
rae research validate
rae research pending
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
rae gaps products
rae gaps alternatives --status none_verified
rae gaps all --format json
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
rae alternatives coverage
rae alternatives validate
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
rae opportunities validate
rae opportunities export > opportunities.json
# or write directly:
rae opportunities export --out opportunities.json
```

---

## Generate product skills and optional workspaces

| Command | Description |
|---|---|
| `build agent-kit <product-id>` | Generate a copy of the product-specific Markdown build skill (`skill.md`) and optional MCP configuration in a separate directory (default: `./<product-id>-agent`; override with `--out DIR`). Give the skill to your coding agent in the project where you want the product built. |
| `build product <product-id>` | Optionally scaffold a starter workspace with an ACE shim, `package.json`, and specification files (default: `./<product-id>`; override with `--out DIR`). Give the product's Markdown skill to your coding agent in the project where you want to build; the scaffold is optional. Existing workspaces are left alone unless you pass `--force`. |
| `rea capture <product-id>` | Capture observations from the product's public web pages with REA; requires the repository research tools, not just the installed CLI package. |
| `alternatives clone <product-id>` | Clone a listed open-source project. By default, the CLI chooses the first non-proprietary entry. Use `--alt NAME` to choose a project, `--repo URL` to set its repository, or `--into DIR` to choose where it goes. |
| `<product-id>` | Shorthand: generate the product's agent skill. Use `--out DIR` to choose where to save it. Give the skill to your coding agent; the agent builds in your project. With `--alt NAME`, clone a listed alternative instead. |

```bash
rae build agent-kit gmail --out ./gmail-agent
rae gmail --out ./gmail-agent
rae build product gmail --out ./gmail-workspace
rae research dossier gmail
rae alternatives clone aws-s3 --into ./alternatives
rae aws-s3 --alt "Ceph (RADOS Gateway)"
```

## Use the CLI from another tool

Pass `--format json` when another script or program needs to read command output. For example:

```bash
rae research coverage --format json \
  | node -e "let s='';process.stdin.on('data',d=>s+=d).on('end',()=>{const j=JSON.parse(s);console.log(j.total)})"
```
