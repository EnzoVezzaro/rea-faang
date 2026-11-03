# Research batch plan

Snapshot: **2026-11-02**. This plan turns the pending research into ordered,
reviewable batches. It does not mark any dossier as researched; promotion happens
only when a dossier's evidence is filled and the validators pass.

## Current state (verified)

| Fact | Value | Source |
|---|---|---|
| Catalogued products | 77 | `catalog/products.jsonl` |
| In-scope inventory | 77 (no missing) | `catalog/manifests/faang.json`, `npx rae-faang gaps products` |
| Research status | 0 researched, 77 pending | `npx rae-faang research coverage` |
| Alternative landscape | 40 available, 29 partial, 8 pending | `tools/skills/catalog-data.mjs` |
| REA web-surface reports | 77 | `catalog/rea/` |
| Product workspaces | 16, all with placeholder specs | `products/<company>/<product>/specs/` |

Reproduce these numbers with:

```bash
npx rae-faang gaps products
npx rae-faang research coverage --format json
npx rae-faang alternatives coverage --format json
npx rae-faang skills coverage --format json
```

**There is no catalog inventory gap.** The remaining work is depth: every dossier
is `research_status: pending`, and the counts above describe candidate research,
not verified product parity.

## Batch rules

- One batch is one review unit; do not mix companies in a promotion handoff unless
  the batch says so.
- Sources: official product pages, official documentation, published pricing,
  published protocols, and unauthenticated help-centre pages. No private surfaces,
  no decompilation, no access-control bypass.
- Each material claim gets a primary source in `evidence[]`. Unknowns are recorded
  as unknowns — never filled with inference.
- An alternative is described by what it verifiably covers; no parity claims.
- Definition of done for a dossier: sections 1–15 filled, `research_status:
  researched`, `last_researched_at` set, `research_confidence` justified,
  `evidence[]` populated, and `npx rae-faang research validate` clean.

## Batch 1 — No verified alternative + the build-critical product (9)

Highest reuse value: these products currently have no verified open-source
candidate, so research decides whether they are build opportunities.

| Product | Company | Why now |
|---|---|---|
| `google-search` | google | Full spec set and opportunity spec exist; evidence unblocks implementation. |
| `apple-ios` | apple | No verified alternative; platform surface. |
| `apple-macos` | apple | No verified alternative; platform surface. |
| `amazon-prime` | amazon | No verified alternative; subscription/loyalty surface. |
| `google-ads` | google | No verified alternative; ad platform surface. |
| `apple-messages` | apple | No verified alternative; messaging surface. |
| `apple-pay` | apple | No verified alternative; payments surface. |
| `netflix-games` | netflix | No verified alternative; games surface. |
| `netflix-tudum` | netflix | No verified alternative; animation tooling surface. |

**Sources to consult:** official product and support pages; published developer
documentation and API references where they exist; platform security/franking
documentation for Apple surfaces; published protocol documentation (for example
messaging/payment standards) where the product implements one.

**Expected unknowns:** shipped platform behaviour that is not publicly documented;
hardware or secure-element dependencies; regional availability; licensing of any
candidate alternative.

## Batch 2 — Workspace products with partial coverage (5)

These already have a workspace and placeholder specs, so completed research feeds
specification work directly.

| Product | Company | Workspace |
|---|---|---|
| `google-gemini` | google | `products/google/google-gemini` |
| `apple-xcode` | apple | `products/apple/apple-xcode` |
| `apple-safari` | apple | `products/apple/apple-safari` |
| `netflix-streaming` | netflix | `products/netflix/netflix-streaming` |
| `meta-llama` | meta | `products/meta/meta-llama` |

**Sources:** official documentation for each product, public model/system cards
for `meta-llama`, public browser and IDE documentation for `apple-safari` and
`apple-xcode`, public streaming/encoding documentation for `netflix-streaming`.

**Expected unknowns:** model weights and licences for hosted variants; private
ranking and encoding stacks; gatekeeper/notarisation details.

## Batch 3 — Remaining Google partials (6)

`google-drive`, `google-docs`, `google-sheets`, `google-photos`, `google-play`,
`youtube-music`.

**Sources:** Google Workspace documentation, Photos API documentation, Play
Console/developer policies, YouTube Music help pages.

**Expected unknowns:** storage quotas and regional pricing; proprietary media
processing; content licensing.

## Batch 4 — Remaining Apple partials (8)

`apple-vision-pro`, `apple-iphone`, `apple-ipad`, `apple-watch`, `apple-icloud`,
`apple-facetime`, `apple-siri`, `apple-music`.

**Sources:** Apple support pages, developer documentation, published accessory and
service specifications, public privacy pages.

**Expected unknowns:** hardware-only capabilities; private cloud behaviour; content
licensing for media services.

## Batch 5 — Remaining partials across AWS, Amazon, Netflix, Meta (9)

`aws-bedrock`, `aws-sagemaker`, `amazon-alexa`, `amazon-kindle`, `amazon-luna`,
`netflix-kids`, `netflix-profiles`, `meta-instagram`, `meta-facebook`.

**Sources:** AWS service documentation and pricing, Amazon device/service
documentation, Netflix help centre, Meta developer and transparency documentation.

**Expected unknowns:** managed-model availability and pricing; device firmware
behaviour; recommendation and ranking internals.

## Batch 6 — Products with a mature candidate listed (40)

All remaining catalogued products with `available` coverage. Research is still
pending and must not be inferred from the existence of an alternative. Group by
company and process after Batches 1–5, because a candidate already exists and the
marginal value of a new dossier is lower.

## Blockers and limits (real)

1. **No private or binary inspection.** Platform-level behaviour that is only
   observable in binaries or behind authentication stays an explicit unknown. No
   Hopper/Ghidra/IDA analysis is installed or authorized here.
2. **Public-source rate limits.** REA captures and documentation reads must respect
   robots.txt and site terms; a failed capture is recorded, not retried abusively.
3. **Evidence review is human.** A dossier is promoted only after a reviewer
   confirms each material claim traces to a cited source; automation cannot grant
   confidence.
4. **No parity claims.** Alternative coverage labels describe research, not build
   feasibility or product parity.

## Suggested next action

Start Batch 1 with `google-search`, because its specification set is already
written and its evidence directly unblocks acceptance criteria. Promote it only
after `npx rae-faang research validate` and a reviewer check pass.
