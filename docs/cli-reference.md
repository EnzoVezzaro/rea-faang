# CLI Reference — `src/cli.js`

The deterministic product-intelligence CLI. It reads the catalog and research
dossiers, validates them against the JSON Schemas, and reports gaps. It never
mutates the catalog.

```bash
node src/cli.js <group> <command> [product-id] [options]
npm run cli -- <group> <command> [options]   # equivalent
```

## Global options

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

`validate` commands set the exit code from the findings, so they are safe to use
in CI: a non-empty error list exits `1`.

---

## `products`

| Command | Description |
|---|---|
| `products list` | List catalogued products. |
| `products show <product-id>` | Show one product's full record. |

**Options:** `--company <id>` filter by company, `--status <status>` filter by
`research_status`, `--format json`.

```bash
node src/cli.js products list --company amazon_aws
node src/cli.js products show google-search --format json
```

---

## `companies`

| Command | Description |
|---|---|
| `companies list` | List registered company entries. |
| `companies show <company-id>` | Show one company record. |

**Options:** `--format json`.

```bash
node src/cli.js companies list
node src/cli.js companies show netflix --format json
```

---

## `research`

| Command | Description |
|---|---|
| `research coverage` | Coverage report per company: catalogued, with research file, valid frontmatter, pending/researched/stale/invalid. Also lists missing files, orphaned files, invalid frontmatter, and duplicates. |
| `research pending` | List products with `research_status: pending`. |
| `research stale` | List products with `research_status: stale`. |
| `research validate` | Validate catalog lines and research frontmatter against the schema; check `company_id` resolution, ID/company consistency, duplicates, and orphaned files. |

**Options:** `--company <id>` (coverage), `--format json`.

```bash
node src/cli.js research coverage --format json
node src/cli.js research validate
node src/cli.js research pending
```

`research validate` exits `1` when any error is found (missing files are
warnings, not errors).

---

## `gaps`

| Command | Description |
|---|---|
| `gaps products` | Compare the catalog against the inventory manifest; report missing/excess per company and unlisted products. |
| `gaps alternatives` | List products by `alternative_status` / `alternative_coverage`. |
| `gaps opportunities` | Find `build_missing` products without an `opportunities/<id>.md` spec. |
| `gaps all` | Run all three. |

**Options:** `--company <id>`, `--manifest <path>` (defaults to
`catalog/manifests/faang.json`), `--status <status>` (alternatives),
`--format json`.

```bash
node src/cli.js gaps products
node src/cli.js gaps alternatives --status none_verified
node src/cli.js gaps all --format json
```

---

## `alternatives`

| Command | Description |
|---|---|
| `alternatives list` | Extract the "existing alternatives" and "comparison" sections from research dossiers, with each product's alternative status/coverage. |
| `alternatives validate` | Check alternative status/coverage consistency (for example, `mature` with `unknown` coverage is an error). |
| `alternatives coverage` | Summarise counts by coverage classification and by status. |

**Options:** `--product <id>` (list), `--format json`.

```bash
node src/cli.js alternatives coverage
node src/cli.js alternatives validate
```

---

## `opportunities`

| Command | Description |
|---|---|
| `opportunities list` | List products by `opportunity_status`, flagging which have a spec. |
| `opportunities show <product-id>` | Show a product's opportunity classification and its spec, if present. |
| `opportunities validate` | Ensure every `build_missing` product has an `opportunities/<id>.md` spec. |
| `opportunities export` | Emit all classified opportunities as one JSON document for downstream use. |

**Options:** `--format json`.

```bash
node src/cli.js opportunities validate
node src/cli.js opportunities export > opportunities.json
```

---

## Programmatic use

`--format json` is the integration surface. Example:

```bash
node src/cli.js research coverage --format json \
  | node -e "let s='';process.stdin.on('data',d=>s+=d).on('end',()=>{const j=JSON.parse(s);console.log(j.total)})"
```
