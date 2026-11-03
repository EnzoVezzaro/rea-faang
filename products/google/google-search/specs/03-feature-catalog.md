# 03 — Feature catalog (MVP)

Status: proposed. Priority: **P0** = required for the first working build, **P1** =
required before calling the MVP complete, **P2** = explicitly deferred.

Every feature maps to at least one acceptance criterion in
`07-acceptance-criteria.md`. "Reuse" names an open component the implementation
may adopt; nothing here requires hand-writing an index or ranker.

## Ingest

| ID | Feature | Priority | Behaviour | Reuse |
|---|---|---|---|---|
| REQ-CRAWL-01 | Seed ingestion | P0 | Read seeds from a file or the admin API; validate scheme is `http(s)`; reject private/loopback addresses. | `undici` |
| REQ-CRAWL-02 | Robots compliance | P0 | Fetch and cache `/robots.txt` per host; skip disallowed paths; honour `Crawl-delay` when larger than the configured floor. | `robots-parser` |
| REQ-CRAWL-03 | Bounded, polite crawl | P0 | Per-host delay, global concurrency cap, page budget, request timeout, max body size; same-host link following. | `undici` |
| REQ-CRAWL-04 | Failure isolation | P0 | Timeouts, 4xx/5xx, oversized or non-HTML bodies are counted and skipped without aborting the crawl. | — |
| REQ-CRAWL-05 | Content normalisation | P0 | Extract title, text, canonical URL, language, content hash; strip scripts/styles; de-duplicate identical hashes. | `cheerio` or equivalent |
| REQ-CRAWL-06 | Corpus import | P1 | Import a WARC/JSONL subset without crawling; same document model. | WARC reader |

## Index

| ID | Feature | Priority | Behaviour | Reuse |
|---|---|---|---|---|
| REQ-IDX-01 | Inverted index | P0 | Write documents to an index engine with BM25 scoring; one index per deployment. | OpenSearch |
| REQ-IDX-02 | Idempotent upsert | P0 | Document identity is the canonical URL; re-index replaces by URL, not by append. | OpenSearch |
| REQ-IDX-03 | Index readiness | P0 | The API reports `indexReady: false` until the mapping exists and the first shard is available. | OpenSearch |
| REQ-IDX-04 | Bulk indexing | P1 | Batch writes with bounded memory and retry on transient engine errors. | OpenSearch bulk API |

## Ranking and query

| ID | Feature | Priority | Behaviour | Reuse |
|---|---|---|---|---|
| REQ-RANK-01 | BM25 baseline | P0 | Rank with the engine's BM25 over title and body fields, with title boosted. | OpenSearch |
| REQ-RANK-02 | Documented boosts | P1 | Freshness and host-diversity boosts with configurable weights; the formula is published. | OpenSearch function scores |
| REQ-RANK-03 | Deterministic tie-break | P0 | Equal scores break by canonical URL ascending so results are reproducible. | — |
| REQ-API-01 | `GET /search` | P0 | Query, page, limit, optional site and language filters; JSON response per `05`. | — |
| REQ-API-02 | Pagination | P0 | `page` and `limit` with a documented maximum; stable ordering across pages. | — |
| REQ-API-03 | Input validation | P0 | Empty/oversized query or out-of-range paging returns `400` with a JSON error. | — |
| REQ-API-04 | Health | P0 | `GET /health` returns status, document count, readiness, last crawl time, version. | — |

## User interface

| ID | Feature | Priority | Behaviour | Reuse |
|---|---|---|---|---|
| REQ-UX-01 | Search page | P0 | Server-rendered form and results; works without JavaScript for the core flow. | — |
| REQ-UX-02 | Query refinement | P1 | Edit query, paginate, filter by site; no client-side state required. | — |
| REQ-UX-03 | Result provenance | P0 | Each result shows title, URL, snippet, and site; no fabricated snippets. | — |

## Privacy and operations

| ID | Feature | Priority | Behaviour | Reuse |
|---|---|---|---|---|
| REQ-PRIV-01 | No query persistence | P0 | Query strings are not logged, cached to disk, or stored in the index; aggregate counters only. | — |
| REQ-PRIV-02 | No accounts/profiling | P0 | No cookies required for search; no user identifiers. | — |
| REQ-OPS-01 | One-command start | P0 | `docker compose up` starts engine, crawler, API, UI. | Docker Compose |
| REQ-OPS-02 | Empty-corpus behaviour | P0 | Healthy but idle with zero documents and a warning. | — |
| REQ-OPS-03 | Diagnostics | P0 | `/health` distinguishes ready-empty from not-ready. | — |
| REQ-OPS-04 | Admin protection | P0 | Crawl/import endpoints require an operator token from the environment. | — |

## Explicitly deferred (P2)

- Distributed crawling and multi-node sharding.
- Knowledge graph or entity panels.
- Image/video/news verticals.
- Personalisation, accounts, and saved searches.
- OpenSearch-compatible query DSL endpoint (revisit after `AC-07`).
- Spell correction and query suggestions beyond index-derived terms.

## Build order

1. Document model + index mapping (`04`) and `/health` (`REQ-API-04`).
2. Crawl one seed with robots and limits (`REQ-CRAWL-01..05`).
3. Index and query with BM25 (`REQ-IDX-01`, `REQ-RANK-01`, `REQ-API-01`).
4. UI over the API (`REQ-UX-01`, `REQ-UX-03`).
5. Privacy and admin tests (`REQ-PRIV-01`, `REQ-OPS-04`).
6. Measure latency and record the corpus size (`AC-05`).
