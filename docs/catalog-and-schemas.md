![RAE FAANG](assets/brand-logo-icon.png)

# Catalog and schemas

The catalog records the products in scope, their companies and the research status for each one. Run `rae research validate` to check record structure and consistency. It does not assess whether research is complete or claims are correct.

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

The directory under `research/companies/` must match the product's `company_id`: `google`, `apple`, `amazon`, `amazon_aws`, `netflix`, or `meta`.

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

See `catalog/schema/product.schema.json` for the allowed values. A test checks that every product record uses one of them.

### `alternative_status`

`unassessed`, `none_verified`, `unknown`, `partial`, `adequate`, `mature`.
`alternative_coverage` is restricted to `unknown` (to be widened as coverage is
assessed).

### `opportunity_status`

`unassessed`, `reuse_existing`, `integrate_existing`, `extend_existing`,
`build_missing`, `research_further`, `not_recommended`.

`build_missing` **must** have a spec at `opportunities/<product_id>.md`
(enforced by `opportunities validate`).

## Opportunity specs

An opportunity spec at `opportunities/<product_id>.md` turns research into a proposed build. Follow [`opportunities/README.md`](../opportunities/README.md): explain the unmet need, compare alternatives, define the MVP and non-goals, sketch the architecture, and write testable acceptance criteria. Base those choices on the product dossier.

## REA web-surface reports

`catalog/rea/` holds [REA](https://github.com/morluto/rea) (`rea-agents`)
reverse-engineering observations of each product's **public web surface**.

```
catalog/rea/
├── README.md                       index (per company) + method
├── <company_id>/<product_id>.md    one report per product
└── evidence/<product_id>.json      the raw REA Evidence, for provenance
```

Each report records the page REA visited, its title, visible headings, links and controls, the tool's limitations, and an Evidence ID. Generate reports with:

```bash
npm run rea:catalog                       # every catalog product (needs Chrome)
node tools/rea-catalog.mjs --company google
node tools/rea-catalog.mjs --only netflix-streaming --wait 6000
```

**What these reports show:** REA observes public, unauthenticated pages at each product's `official_url`; it does not sign in or bypass access controls. A report records what the page showed at capture time, not how the product works internally. Some pages may show a consent screen or app shell. The raw evidence documents what REA recorded.

## Open-source skills catalog

`catalog/skills/` contains one coding-agent build skill per product. Each file starts with the required `name` and `description` fields, then gives the agent product context, candidate open-source projects, build guidance and verification steps. Give the product's Markdown file to your agent in the project where you want to build.

```
catalog/skills/
├── README.md                      index (per company) + status counts
└── <company_id>/<product_id>.md   one skill-structured file per product
```

Each Markdown file is the skill for building that product with a coding agent. It directs the agent to assess existing projects, choose what to reuse, implement the product in the user's project, and verify the result. The coverage status below describes only the catalog's research into open-source alternatives—it is not a product-build status.

| Status | Meaning |
|---|---|
| `available` | The catalog lists a mature open-source project for the product's core job that can run locally or be self-hosted. Evaluate its coverage before adopting it; the listing is a reuse lead, not a complete build. |
| `partial` | Listed open-source projects cover some of the product's core jobs, but a specific gap remains. The gap may involve scale, a proprietary service, licensed content, or hardware. |
| `pending` | This catalog has not verified a suitable open-source alternative. The product skill remains available; ask your agent to review evidence and current projects, then build the product in your project. |

Product facts come from `catalog/products.jsonl`. Alternative projects and their coverage notes are maintained in `tools/skills/catalog-data.mjs`; the generated per-product Markdown files are the agent skills and list their sources. Regenerate them with:

```bash
npm run skills:catalog                          # write every file + index
node tools/skills-catalog.mjs --check           # verify, no writes
node tools/skills-catalog.mjs --company google
node tools/skills-catalog.mjs --index-only
```

`npm run validate` includes `--check`, so CI fails if a generated file drifts
from the data. Licence identifiers are as reported by each project; re-verify
them before you rely on one. This catalog maps the landscape and gives no legal
advice.

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

The CLI reads the YAML frontmatter, checks it against `product.schema.json`, and confirms that its `id` and `company_id` match the catalog.

> Note: the CLI's validator checks required fields, enums, patterns, and
> `uri`/`date`/`date-time` formats. It does **not** yet enforce
> `additionalProperties: false`, so extra frontmatter keys such as
> `schema_version` are tolerated. Keep frontmatter to documented fields anyway.

## Manifests

- **`manifests/faang.json`**: the target inventory. `companies.<id>.in_scope`
  is the number of products expected for that company; `gaps products` compares
  it to the catalog. `total_in_scope` is the overall target.
- **`manifests/research-coverage.json`**: a tracked snapshot of coverage. Refresh
  it from `rae research coverage --format json`.

## Add a product to the catalog

1. Add a record to `catalog/products.jsonl`. Give it a unique `id` and a valid `product_type`.
2. Create `research/companies/<company_id>/products/<id>.md`. Its frontmatter must use the same `id` and `company_id`.
3. If it is `build_missing`, create `opportunities/<id>.md` (see
   [`opportunities/README.md`](../opportunities/README.md)).
4. Add its summary, capabilities, alternative status, candidate projects and sources to `tools/skills/catalog-data.mjs`. Run `npm run skills:catalog` and `npm run site:build` to regenerate the product page and site. The check fails if a product has no catalog entry or generated page.
5. Run the catalog checks and tests:
   ```bash
   rae research validate
   npm test
   ```
   Both commands must pass.

## Research and build a product

Use the [research, documentation and build plan](product-research-and-build-plan.md) for per-product evidence standards, alternative assessments and guidance for making each Markdown skill actionable for a coding agent. A generated skill is the starting instruction set; your agent should review the cited sources and validate its assumptions in your project before building.

## How to add a company

1. Add an entry to `catalog/companies.json`.
2. Add its `in_scope` count to `catalog/manifests/faang.json`.
3. Add `research/companies/<id>/products/` and start adding dossiers.
