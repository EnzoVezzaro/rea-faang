# 01 — Product vision: REA Search

| Field | Value |
|---|---|
| Product | REA Search (`google-search` workspace) |
| Target product | Google Search (`google-search`) |
| Status | Proposed specification — no implementation yet |
| Owner role | architect |
| Grounding | `opportunities/google-search.md`, `research/companies/google/products/google-search.md` |
| License | MIT (same as the REA FAANG repository) |

## Problem

General-web search is dominated by engines that operate a private crawl, a private
index, and a private ranking stack. A community that wants search over its own
corpus cannot own that pipeline end to end: it rents a commercial index or runs a
meta-search front end over somebody else's results. The dossier records **no
verified open-source alternative at Google's scale** and notes that SearXNG is a
meta-search proxy, not an owned index.

The realistic gap is not Google's index size. It is the **integration**: a
self-hostable pipeline that crawls a bounded corpus politely, indexes it with an
existing engine, ranks with open signals, and exposes a documented query API.

## Product statement

REA Search is a single-node, self-hostable search engine over a **bounded,
operator-supplied corpus**. An operator provides seeds or an open corpus slice;
the service crawls, indexes, and serves ranked results through a web UI and a JSON
API. Query text is not persisted by default.

## Target users

1. **Community/domain operator** — runs search over a documentation set, intranet,
   research corpus, or small web domain (10²–10⁶ documents on one node).
2. **Developer integrating search** — needs a documented JSON contract and a
   health endpoint, not a hosted vendor.
3. **Privacy-sensitive user** — expects no account, no profiling, and no query
   retention by default.

## Goals (MVP)

- G1: One documented command starts the service on a fresh machine.
- G2: Crawling a bounded seed set produces a searchable index.
- G3: `GET /search` returns ranked JSON with a stable, validated schema.
- G4: `robots.txt` and rate limits are honored by default.
- G5: Query text is not written to logs, disk, or the index database by default.
- G6: A representative query over the seeded corpus returns its target document
  on page 1 in **< 200 ms p95** on a single node (measured, see `07`).

## Non-goals

- Competing with Google's index size, crawl freshness, or ranking quality.
- Advertising, ad auctions, or monetisation.
- Knowledge-graph construction at web scale.
- Personalisation, cross-site profiling, or account systems.
- Rebuilding a crawler, index engine, or BM25 implementation from scratch when a
  maintained open component fits.
- Binary/app reverse engineering of Google Search; this is a clean-room,
  behaviour-level alternative built from public documentation.

## Success metrics

| Metric | Target | How measured |
|---|---|---|
| Startup reproducibility | 1 documented command, no manual steps | `MANUAL-01` |
| Index build | ≥100 seeded pages indexed | `AC-02` test |
| Query latency | p95 < 200 ms on the seeded corpus | `AC-05` benchmark |
| Robots compliance | 0 disallowed fetches in fixture test | `AC-04` test |
| Query privacy | 0 query strings persisted | `AC-06` test |
| Ranking usefulness | target document on page 1 for 10 curated queries | `AC-08` manual check |

## Honest limitations

- A single node does not provide web-scale freshness, deduplication across
  billions of pages, or Google-level ranking. The product is scoped to bounded
  corpora and says so in its UI and docs.
- Ranking quality is measured on a small curated set, not claimed as parity.
- Crawling is subject to `robots.txt`, terms of service, and applicable law; the
  default recommendation is to import an open corpus rather than crawl broadly.

## Open questions

- What corpus size keeps p95 under 200 ms on one node? Answer empirically in the
  MVP benchmark and record the result.
- Should the JSON API also expose an OpenSearch-compatible surface, or is a
  documented proprietary JSON contract sufficient for v1? Default: JSON contract
  in v1, compatibility evaluated after `AC-07`.
