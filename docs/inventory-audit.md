# Inventory audit — FAANG plus Microsoft

Snapshot: **2026-11-03**. This page records what one review pass found in each
company's public product catalogue and what the canonical catalog does about it.
It separates four things that were previously mixed: the canonical catalog, the
machine-built candidate manifest, duplicate/navigation rows, and retired
products.

## Method

- **Canonical catalog** — `catalog/products.jsonl`, one record per product, plus a
  research dossier, a generated skill and a REA web-surface report.
- **Candidate manifest** — `catalog/manifests/faang-expanded-candidates.json`,
  built by `node tools/expand-faang-inventory.mjs` from first-party catalog
  pages. It is intentionally noisy and never feeds the catalog directly.
- **Evidence** — only public first-party pages: vendor product directories,
  product pages, official documentation and official announcements. No account,
  no private surface, no decompilation.
- **Promotion rule** — a candidate becomes canonical only when its identity,
  product level and official URL are verified. Everything unpromoted stays in the
  candidate manifest; nothing is marked `research_status: complete` by this pass.

Run the same checks:

```bash
node tools/expand-faang-inventory.mjs        # rebuild the candidate manifest
npx rea-faang research coverage --format json
npx rea-faang gaps products
npm test && npm run validate
```

## Where rows live now

| Bucket | Location | Fields |
|---|---|---|
| Canonical, active | `catalog/products.jsonl` | `inventory_status: verified`, `research_status: pending` |
| Canonical, withdrawn | `catalog/products.jsonl` | `inventory_status: retired`, `research_status: retired`, `lifecycle_status: discontinued` |
| Candidate, unreviewed | `catalog/manifests/faang-expanded-candidates.json` | `inventory_status: candidate` |
| Duplicate / navigation | candidate manifest only, never promoted | `inventory_status: candidate` with the reason in this page |

A retired product is kept in the catalog on purpose: deleting it invites someone
to re-add the same product as new research.

## Batch results

### Microsoft (new company)

| Promoted to canonical | Type | Official source |
|---|---|---|
| `microsoft-windows` | operating_system | https://www.microsoft.com/en-us/windows/ |
| `microsoft-365` | consumer_subscription | https://www.microsoft.com/en-us/microsoft-365 |
| `microsoft-teams` | messaging | https://www.microsoft.com/en-us/microsoft-teams/group-chat-software |
| `microsoft-azure` | cloud_infrastructure | https://azure.microsoft.com/en-us |
| `microsoft-skype` (**retired** 2025-05-05) | messaging | https://support.microsoft.com/en-us/skype/skype-is-retiring-in-may-2025-what-you-need-to-know |

- **Real products still unpromoted** (identified, not added in this pass):
  Microsoft Edge, Microsoft Copilot, Microsoft 365 Copilot, Xbox, SQL Server,
  Visual Studio, Entra ID, Intune, Dynamics 365, Outlook (as a standalone app),
  OneDrive (as a standalone product), Windows Server.
- **Noise in the candidate manifest** — 380 Microsoft candidate rows, of which 38
  match navigation or editorial labels (`About Microsoft`, `Azure Blog`,
  `Admin self-help`, `Follow Microsoft Copilot`, `Find a plan`).
- **Duplicates** — 22 rows are a prefix or marketing variant of another row (for
  example `AI and Agents` vs `AI and Agents Get enterprise-ready AI.`,
  `Azure` vs `Azure cloud migration an modernization`). The generator's
  normalized-name merge does not catch marketing suffixes; these need review, not
  automatic promotion.
- **Notable collisions to resolve before promoting the rest** — `Microsoft 365`
  vs `Office 365` vs `Microsoft Office` are one subscription family with three
  labels and must not become three catalog entries; `Windows` covers client and
  server editions, so `Windows Server` needs an explicit scope decision.

### Google

- **Canonical** — 26 products after this pass (25 + `google-stadia`, retired).
- **Retired** — `google-stadia`, offline since 2023-01-18
  (https://blog.google/products-and-platforms/products/stadia/message-on-stadia-streaming-strategy/).
- **Missing, identified** — BigQuery (https://cloud.google.com/bigquery), Cloud
  Run (https://cloud.google.com/run), Google Kubernetes Engine
  (https://cloud.google.com/kubernetes-engine), Google Translate
  (https://translate.google.com/), Google Wallet (https://wallet.google/).
- **Noise** — 570 candidate rows; 27 are navigation/editorial (`About Google`,
  `Accessibility support`, `AI and Machine Learning`).
- **Duplicates** — 133 rows are prefixes or marketing expansions of another row
  (`AI and Agents` vs `AI and Agents Get enterprise-ready AI.`). Google's
  product directory also lists solution pages next to products, which is the main
  source of this noise.

### Amazon and AWS

- **Canonical** — 22 products (17 AWS + 5 Amazon).
- **Missing, identified** — Route 53 (https://aws.amazon.com/route53/), CloudWatch
  (https://aws.amazon.com/cloudwatch/), IAM (https://aws.amazon.com/iam/), Amazon
  Music (https://music.amazon.com/), Amazon Ads
  (https://advertising.amazon.com/).
- **Noise** — 275 AWS candidate rows; 15 are navigation or editorial
  (`AWS Free Tier`, `Why AWS`, `Analyst report`).
- **Duplicates** — 5 prefix duplicates; AWS product pages reuse service names with
  a marketing suffix, so the same service can appear twice.
- **Retired candidates** — Amazon Drive (retired 2023-12-31) was not promoted in
  this pass; it belongs in the same retired treatment as Skype and Stadia when the
  Amazon batch is reviewed.

### Apple

- **Canonical** — 20 products, all active.
- **Missing, identified** — Apple Maps (https://www.apple.com/maps/), Apple TV+
  (https://www.apple.com/apple-tv-plus/), Apple News+
  (https://www.apple.com/apple-news/), Apple Wallet
  (https://www.apple.com/wallet/), Apple Health
  (https://www.apple.com/health/).
- **Noise** — 240 candidate rows; 24 are navigation or support labels.
- **Duplicates** — 11 prefix duplicates (for example `iPhone` vs `iPhone 16 Pro`
  and `AirPods` vs `AirPods Pro`), which are product-line variations rather than
  distinct catalog entries.
- **Retired candidates** — iPod (discontinued 2022) was not promoted in this pass.

### Meta, Netflix

- **Meta** — 5 canonical products; the seed-only source yields no new candidates,
  so the next review needs `about.meta.com/technologies/` parsed by hand. Missing,
  identified: Messenger (https://www.messenger.com/), Meta Quest
  (https://www.meta.com/quest/), Meta AI (https://www.meta.ai/).
- **Netflix** — 6 canonical products (5 active + `netflix-dvd`, retired 2023-09-29,
  https://about.netflix.com/news/netflix-dvd-the-final-season). Missing,
  identified: Netflix Ads (https://ads.netflix.com/).
- Neither company produced candidate noise in this pass because both sources are
  seed-only and were not re-crawled.

## Totals for this pass

| Fact | Value |
|---|---|
| Canonical products before | 77 |
| Promoted | 4 active (Microsoft) + 3 retired |
| Canonical products after | 84 across 7 company entries |
| Retired in the canonical catalog | 3 (`microsoft-skype`, `google-stadia`, `netflix-dvd`) |
| Candidate rows reviewed | 1,480 (1,403 not canonical) |
| Navigation-like candidate rows | 104 |
| Prefix/marketing duplicates | 171 |
| Documented `command_status` in the new entries | 4 documented, 3 not_applicable |
| Research promoted to `complete` | 0 — every new entry is still `pending` |

## Known limits

- The candidate manifest is a crawl of marketing pages, so its noise rate is high
  by construction; only the canonical catalog is authoritative.
- Missing-product lists above are curated from the first-party directories, not
  exhaustive; they name the next promotions, not the full long tail.
- `command_status: documented` records that an official CLI/API/SDK exists and
  where it is documented. No command in the new entries was executed against a
  vendor system, and no vendor credential was used.
- All new research dossiers are `pending`: they record official identity, URL and
  documented surface, not verified capability parity.

## Next actions

1. Promote the remaining Microsoft flagships, resolving the Microsoft 365 /
   Office 365 / Office collision first.
2. Give Amazon Drive and iPod the same retired treatment as Skype, Stadia and
   Netflix DVD.
3. Extend the candidate generator to classify navigation rows and marketing
   suffixes so the manifest carries fewer duplicates on the next run.
