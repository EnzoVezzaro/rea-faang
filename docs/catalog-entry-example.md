# One catalog entry, end to end: `google-search`

This page traces a single canonical entry through every surface the repository
owns. It is the reference example for the rest of the catalog: the same six
artifacts exist per product, and nothing here is hand-written twice.

It is an **inspection of the current state**, not an implementation of Google
Search and not a new output path. Everything below was produced by the committed
generators and verified with the committed validators.

## 1. Canonical record — `catalog/products.jsonl`

One line, one product. The record as it exists today:

```json
{
  "id": "google-search",
  "company_id": "google",
  "name": "Google Search",
  "product_type": "consumer_application",
  "categories": ["search", "discovery"],
  "aliases": [],
  "official_url": "https://www.google.com/",
  "official_docs_url": null,
  "official_source_urls": [],
  "lifecycle_status": "active",
  "research_status": "pending",
  "research_confidence": "unverified",
  "alternative_status": "none_verified",
  "alternative_coverage": "unknown",
  "opportunity_status": "build_missing",
  "last_researched_at": null,
  "last_verified_at": null,
  "next_review_at": null,
  "research_version": 1,
  "evidence": [],
  "capabilities": [],
  "inventory_status": "verified",
  "command_status": "pending"
}
```

How to read the status fields against `catalog/schema/product.schema.json`:

| Field | Value here | Meaning |
|---|---|---|
| `inventory_status` | `verified` | The product exists, is a product (not a feature, bundle or navigation row), and its official URL is first-party. This is an **identity** claim only. |
| `research_status` | `pending` | No dossier section has been claim-verified yet. The schema enum is `pending` / `in_progress` / `researched` / `retired` — the "complete" state is spelled **`researched`**. |
| `command_status` | `pending` | An official API is named in unverified dossier prose, but no command has been captured and cited. `not_applicable` would mean no CLI/API exists at all; that has not been established either. |
| `research_confidence` | `unverified` | Nothing in this entry has been independently confirmed. |
| `alternative_status` | `none_verified` | No open-source project has been verified as an alternative. It does **not** claim none exists. |

## 2. Research dossier — `research/companies/google/products/google-search.md`

YAML frontmatter mirrors the catalog record:

```yaml
schema_version: "1.0"
id: "google-search"
company_id: "google"
name: "Google Search"
product_type: "consumer_application"
categories: ["search", "discovery"]
lifecycle_status: "active"
official_url: "https://www.google.com/"
official_docs_url: null
research_status: "pending"
research_confidence: "unverified"
alternative_status: "none_verified"
alternative_coverage: "unknown"
opportunity_status: "build_missing"
last_researched_at: null
research_version: 1
```

The body carries the 15 numbered sections the schema and CLI expect (executive
summary, identity, capabilities, architecture, workflows, pricing, API surface,
open-source alternatives, comparison, opportunity analysis, REA strategy,
security/privacy, sources, open questions, research history), plus the two
trailing alternative/strategy sections this product already had.

**What is verified:** the file parses, its IDs match the catalog, and
`research validate` accepts it.
**What is pending:** every prose claim. `evidence[]` is empty,
`last_researched_at` is `null`, and section 13 lists three URLs that no record
cites claim-by-claim. That is exactly why `research_status` stays `pending`.

## 3. REA observation — `catalog/rea/google/google-search.md`

This entry **already has** a reproducible REA capture, indexed (no separate JSON
index exists; `catalog/rea/README.md` is the index):

| | |
|---|---|
| Report | `catalog/rea/google/google-search.md` |
| Raw evidence | `catalog/rea/evidence/google-search.json` |
| Target / resolved URL | `https://www.google.com/` |
| Status | `captured` |
| Captured | `2026-10-13T18:59:53.994Z` |
| Evidence ID | `ev_3e6b1b7bf15e482d0a6171b0d87cf84325c79f1ed9fb2be997a8f6eea24ee10a` |
| Provider | `rea-playwright-browser-scenario v1` (headless Chromium 155) |
| Confidence / completeness | `observed` / `complete` |

What the capture actually observed: the public homepage, three landmarks
(`navigation`, `search`, `contentinfo`), eleven links, six controls. No headings
were exposed.

**Bounded claim.** This is one anonymous homepage load. It does not establish
ranking behavior, index size, result quality, the Custom Search API, signed-in
behavior or any performance number. Those stay in the unknowns list, and the
report says so.

## 4. Open-source alternative and its status

Canonical answer, from the record and `npx rea-faang alternatives list
--product google-search`: **`none_verified`**, coverage `unknown`. The dossier's
section 8 reads "None verified. Some search engines exist (DuckDuckGo, SearX) but
do not index at Google's scale."

The generated skill also carries three **candidate leads** from
`tools/skills/catalog-data.mjs`, each marked unverified:

| Candidate | Catalog license (unverified) | Limitation recorded |
|---|---|---|
| [SearXNG](https://github.com/searxng/searxng) | AGPL-3.0 | Meta-search front end; proxies other engines, no index of its own |
| [YaCy](https://yacy.net/) | GPL-2.0 | Owned peer-to-peer index, but a very different corpus and scale |
| [Whoogle](https://github.com/benbusby/whoogle-search) | MIT | Self-hosted front end over Google's index |

None has been cloned, executed, license-reviewed or security-reviewed. So: a
candidate list exists, a **verified** open-source alternative does not. Do not
read the candidate table as parity.

## 5. Generated skill — `catalog/skills/google/google-search.md`

559 lines, produced by the compiler from five inputs: the catalog record, the
company record, the research dossier, the REA report with its raw evidence, and
the curated open-source landscape. It does **not** read
`opportunities/google-search.md`; that spec is consumed only by
`npx rea-faang gaps opportunities`. Do not hand-edit the skill; regenerate it.

```yaml
---
name: google-search
description: "Evidence-aware build skill for Google Search (google-search); investigate, assess reuse, implement scoped behavior and verify."
---
```

Sections present: product description; an operating procedure before section 1
(inputs, authorized REA with the real commands, evidence ledger, capability
workflow and limits extraction, foundation gate, plan, build in the consumer
project, verification, expected outputs, stop conditions); 1 identity and scope;
2 capability map; 3 user workflows; 4 interaction and interface; 5 functional
requirements and traceability; 6 data model; 7 APIs/integrations; 8 architecture;
9 open-source foundation with a mandatory decision gate (REUSE / INTEGRATE /
EXTEND / BUILD / INVESTIGATE MORE); 10 security and privacy; 11 error handling;
12 testing and behavioral verification; 13 implementation roadmap; 14 evidence,
uncertainty and exclusions; 15 downstream execution instructions with acceptance
criteria, test plan and clean-room limits.

Its opening banner states the research status is pending, that candidate
coverage is not an endorsement, and that the compiler fetches neither websites
nor candidate source. Section 9 never asserts that no alternative exists: with
zero candidates the verdict is **UNKNOWN / PENDING** plus the search the
consumer must run.

The compiler enforces this: `validateSkillText` rejects a skill without the
operating procedure, the real REA CLI invocation, all five verdict tokens, or the
product's own CLI generation command. `npx rea-faang skills validate --all`
reports 84/84 valid.

## 6. The CLI commands, as they exist

```bash
# list and inspect the entry
npx rea-faang products list --company google --format json
npx rea-faang products show google-search --format json
npx rea-faang research dossier google-search --format json
npx rea-faang alternatives list --product google-search --format json

# three equivalent ways to obtain the canonical skill
npx rea-faang google-search --out ./google-search.md
npx rea-faang skills generate google-search --out ./google-search.md
npx rea-faang build agent-kit google-search --out ./google-search-agent

# in a source checkout the same command with no --out rewrites
# catalog/skills/google/google-search.md in place

# validate
npx rea-faang research validate --format json
npx rea-faang skills validate --all
npm test
npm run validate
```

`npm run validate` is the CI gate: it runs the research, alternative and
opportunity validators, checks the skills are up to date, and fails on site
drift.

The catalog page for a product offers the same Markdown three ways: a download
link, a copy button that reads the page's `agent-kit.md`, and the printed
command. All five outputs below were compared byte for byte for
`google-search` and are identical (`sha256 72bf5e5a…`):

| Route | File |
|---|---|
| Canonical | `catalog/skills/google/google-search.md` |
| Product-ID shorthand | `npx rea-faang google-search --out ./google-search.md` |
| Explicit generate | `npx rea-faang skills generate google-search --out ./google-search.md` |
| Agent kit | `npx rea-faang build agent-kit google-search --out ./google-search-agent` → `skill.md` |
| Page download / copy | `site/catalog/google-search/agent-kit.md` |

## 7. Verified vs pending, in one table

| Artifact | State | Why |
|---|---|---|
| Catalog record | **verified** (identity) | Exists, product-level, first-party URL, schema-valid |
| Dossier file | **pending** (claims) | Empty `evidence[]`, no `last_researched_at`, prose uncited |
| REA capture | **observed** (one surface) | Anonymous homepage load, evidence ID recorded; no API or ranking coverage |
| Open-source alternative | **none verified** | Three candidate leads, all unverified |
| Generated skill | **generated, pending research** | Compiles and validates; states its own limits |
| `command_status` | **pending** | No official command captured and cited |
| Opportunity spec | **proposed** | `07-acceptance-criteria.md` maps each criterion to a test or manual check, but nothing is implemented |

## 8. One real discrepancy, recorded not fixed

The generated skill's description says *"Alternative coverage is partial
alternative coverage"*. That string is built from the generator's `status:
'partial'` field in `tools/skills/catalog-data.mjs`, while the canonical record
says `alternative_status: none_verified` and `alternative_coverage: unknown`.
The two layers disagree in wording. The canonical record is authoritative; the
generator's phrasing is a known reporting bug and is left as-is here so this
example does not silently change generated output.

## Validation for this page

Run on 2026-11-03 from the repository root, after regenerating skills and site:

| Command | Exit | Result |
|---|---|---|
| `npm test` | 0 | 58 tests, 58 pass, 0 fail |
| `npm run validate` | 0 | research, alternatives, opportunities clean; skills-catalog up to date (84 files + index); site-build up to date (190 files) |
| `npx rea-faang skills validate --all` | 0 | every bundled skill valid, including `google-search` |
| `npx rea-faang research coverage --company google` | 0 | 26 cataloged, 0 researched, 25 pending, 0 invalid |
