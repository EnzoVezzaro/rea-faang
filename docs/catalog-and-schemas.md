# Catalog & Schemas

The catalog is the project's memory of what exists and how well it has been
researched. Everything here is validated by `node src/cli.js research validate`.

## Layout

```
catalog/
├── companies.json               # registered company entries
├── products.jsonl               # one JSON product record per line
├── manifests/
│   ├── faang.json               # target inventory (in-scope counts per company)
│   └── research-coverage.json   # tracked coverage snapshot
├── sources/
│   └── seed-inventory.json      # raw seed source data
└── schema/
    ├── product.schema.json
    ├── company.schema.json
    ├── alternative.schema.json
    └── evidence.schema.json

research/
└── companies/<company_id>/products/<product_id>.md   # the research dossier
```

`research/companies/` directory names must match the `company_id` used in the
catalog: `google`, `apple`, `amazon`, `amazon_aws`, `netflix`, `meta`.

## Product record (`catalog/products.jsonl`)

One JSON object per line. Required fields:

| Field | Type | Notes |
|---|---|---|
| `id` | string | `^[a-z][a-z0-9-]*$`, stable, unique |
| `company_id` | string | Must resolve to a company in `companies.json` |
| `name` | string | Official product name |
| `product_type` | enum | See below |
| `lifecycle_status` | enum | `active`, `preview`, `beta`, `deprecated`, `discontinued`, `acquired`, `renamed`, `unknown` |
| `official_url` | uri | `http(s)` |
| `research_status` | enum | `pending`, `in_progress`, `researched`, `stale`, `insufficient_evidence` |

Common optional fields: `categories[]`, `aliases[]`, `official_docs_url`,
`official_source_urls[]`, `research_confidence` (`verified`/`unverified`/`low`),
`alternative_status`, `alternative_coverage`, `opportunity_status`,
`last_researched_at`, `last_verified_at`, `next_review_at`,
`research_version`, `evidence[]`, `capabilities[]`.

### `product_type` values

`consumer_application`, `consumer_subscription`, `search`, `browser`,
`social_network`, `messaging`, `productivity_application`, `developer_tool`,
`api`, `sdk`, `cloud_infrastructure`, `compute`, `serverless`,
`container_orchestration`, `storage`, `database`, `networking`, `security`,
`ai_application`, `ai_model`, `ai_agent_platform`, `machine_learning_framework`,
`data_platform`, `media_streaming`, `media`, `games`, `hardware`,
`operating_system`, `creative_software`, `advertising_technology`,
`business_software`, `robotics`, `autonomous_system`, `research_platform`,
`open_source_project`, `discontinued`.

The canonical list is `catalog/schema/product.schema.json`; a test asserts every
catalog record uses a value from it.

### `alternative_status`

`unassessed`, `none_verified`, `unknown`, `partial`, `adequate`, `mature`.
`alternative_coverage` is currently restricted to `unknown` (to be widened as
coverage is assessed).

### `opportunity_status`

`unassessed`, `reuse_existing`, `integrate_existing`, `extend_existing`,
`build_missing`, `research_further`, `not_recommended`.

`build_missing` **must** have a spec at `opportunities/<product_id>.md`
(enforced by `opportunities validate`).

## Opportunity specs

`opportunities/<product_id>.md` connects research to implementation. The full
format and rules are in [`opportunities/README.md`](../opportunities/README.md);
in short, a spec states why the gap is real, the alternatives considered, the
MVP scope and explicit non-goals, an architecture sketch, and **testable**
acceptance criteria, all grounded in the product's dossier.

## REA web-surface reports

`catalog/rea/` holds an automated reverse-engineering observation of each
product's **public web surface**, produced with [REA](https://github.com/morluto/rea)
(`rea-agents`).

```
catalog/rea/
├── README.md                       index (per company) + method
├── <company_id>/<product_id>.md    one report per product
└── evidence/<product_id>.json      the raw REA Evidence, for provenance
```

Each report records the target, the resolved URL, the page title, the observed
headings, landmarks, links and controls, REA's own limitations, and the Evidence
ID. It is generated, not hand-written:

```bash
npm run rea:catalog                       # every catalog product (needs Chrome)
node tools/rea-catalog.mjs --company google
node tools/rea-catalog.mjs --only netflix-streaming --wait 6000
```

**Scope:** REA analyses concrete targets — binaries, app bundles, websites — not
product concepts. Without the vendors' artifacts, the only available target is
each product's public `official_url`, captured through REA's Playwright browser
scenario provider. Only public, unauthenticated pages are observed; no login and
no access-control bypass. Reports therefore describe the **web surface at capture
time**, not the product's internals, and a few targets are consent walls or app
shells rather than the product itself. Raw evidence is kept so any claim can be
re-checked.

## Company record (`catalog/companies.json`)

An object keyed by `company_id`. Fields: `id`, `name`, `common_name`,
`former_names[]`, `parent_organization`, `official_website`,
`product_directory`, `developer_portal`, `open_source_organization`,
`engineering_blog`, `research_portal`, `brand_resource_page`, `subsidiaries[]`,
`date_last_verified`, `evidence[]`.

`amazon_aws` is a separate entry with `parent_organization: "amazon"` so AWS
services are tracked distinctly.

## Research dossier

Path: `research/companies/<company_id>/products/<product_id>.md`.

A YAML frontmatter block followed by a body of numbered sections 1–15 (plus the
migration guide where used):

```
---
id: "netflix-streaming"
company_id: "netflix"
name: "Netflix Streaming"
product_type: "media_streaming"
official_url: "https://www.netflix.com/"
lifecycle_status: "active"
research_status: "pending"
...
---

# 1. Executive summary
...
```

The CLI parses the frontmatter, validates it against `product.schema.json`, and
checks that `id` and `company_id` match the catalog record.

> Note: the CLI's validator checks required fields, enums, patterns, and
> `uri`/`date`/`date-time` formats. It does **not** yet enforce
> `additionalProperties: false`, so extra frontmatter keys such as
> `schema_version` are tolerated. Keep frontmatter to documented fields anyway.

## Manifests

- **`manifests/faang.json`** — the target inventory. `companies.<id>.in_scope`
  is the number of products expected for that company; `gaps products` compares
  it to the catalog. `total_in_scope` is the overall target.
- **`manifests/research-coverage.json`** — a tracked snapshot of coverage. Refresh
  it from `node src/cli.js research coverage --format json`.

## How to add a product

1. Add a line to `catalog/products.jsonl` with a valid `product_type` and a
   unique `id`.
2. Create `research/companies/<company_id>/products/<id>.md` with valid
   frontmatter (same `id` and `company_id`).
3. If it is `build_missing`, create `opportunities/<id>.md` (see
   [`opportunities/README.md`](../opportunities/README.md)).
4. Run:
   ```bash
   node src/cli.js research validate
   npm test
   ```
   Both must pass.

## How to add a company

1. Add an entry to `catalog/companies.json`.
2. Add its `in_scope` count to `catalog/manifests/faang.json`.
3. Add `research/companies/<id>/products/` and start adding dossiers.
