# 06 — Architecture

Status: proposed. Single-node, containerised, reusable components. No component
here requires proprietary code or access-control bypass.

## Components

```
seeds.txt / JSONL ──▶ crawler worker ──▶ normaliser ──▶ OpenSearch index
                          │                                   ▲
                          └── robots cache, rate limiter      │
                                                              │
browser / API client ──▶ query service (Node.js) ── BM25 query ┘
                              │
                              └── static UI (server-rendered)
```

| Component | Responsibility | Build or reuse |
|---|---|---|
| Query service | HTTP routes, validation, rendering, health | Build (Node.js 20, ESM, standard library + minimal deps) |
| Crawler worker | seeds, robots, politeness, extraction, queue | Build wiring; reuse `undici`, `robots-parser`, an HTML extractor |
| Index engine | inverted index, BM25, storage | Reuse OpenSearch |
| UI | search form, results, pagination | Build (server-rendered HTML; no framework required) |
| Orchestration | one-command startup | Reuse Docker Compose |

## Deployment

- `docker compose up` starts three services: `opensearch`, `search`, `crawler`.
- Volumes: `opensearch-data` for the index, `crawl-data` for the queue and seeds.
- The query service exposes `PORT` (default `8080`); OpenSearch is not published
  to the host by default.
- Healthchecks: OpenSearch cluster health, query service `/health`.

## Data flow

1. **Ingest.** The crawler reads seeds, enforces a page budget, and fetches with a
   per-host delay and a global concurrency cap.
2. **Normalise.** HTML is parsed; scripts/styles are removed; title, text,
   canonical URL, language, and content hash are extracted.
3. **Index.** Documents are bulk-upserted by `canonicalUrl` (see `04`).
4. **Query.** The service validates parameters, queries OpenSearch with BM25,
   applies documented boosts, and shapes the response envelope.
5. **Render.** The UI consumes the same JSON contract as external clients; there
   is no privileged path.

## Ranking

- Baseline: BM25 over `title` (boost 2.0) and `text` (see mapping in `04`).
- Optional P1 boosts: freshness (decay on `fetchedAt`) and host diversity (penalise
  repeated `site` in the top N). Weights are configuration, published in the
  README, and covered by a test that asserts a changed weight changes ordering.
- No behavioural signals, click models, or personalisation.
- Deterministic tie-break by `url` ascending (`REQ-RANK-03`).

## Failure modes

| Failure | Behaviour |
|---|---|
| OpenSearch down at startup | `/health` → `503`, status `starting`; process stays up. |
| OpenSearch down at query time | `/search` → `503 INDEX_NOT_READY`; no partial results. |
| Crawl target times out | Entry counted as `failed`, crawl continues. |
| `robots.txt` unreachable | Treat as disallow-all for that host (conservative). |
| Disk full during index | Bulk write fails, crawl reports `failed`, existing index still queries. |
| Duplicate crawl run | Second run → `409 CRAWL_RUNNING`. |

## Resource bounds

- One OpenSearch shard, zero replicas.
- Default page budget 200, body cap 2 MB, timeout 10 s, per-host delay 1 s.
- Bounded top-N (`limit ≤ 50`) and a documented maximum query length.
- The MVP claims p95 < 200 ms on the seeded corpus only, with the corpus size and
  hardware recorded next to the measurement.

## Security boundaries

- Crawler refuses private, loopback, and link-local addresses (`08`).
- Admin routes require `ADMIN_TOKEN`; search routes are public.
- The service never executes fetched content; parsing is static.
- No authentication bypass, no crawling behind logins, no proprietary source.

## Extensibility

- `REQ-CRAWL-06` imports WARC/JSONL through the same document model.
- `REQ-IDX-04` bulk indexing is the seam for a future multi-node deployment.
- The JSON contract is the seam for an OpenSearch-compatible surface later.

## What this architecture does not claim

Google-level crawl freshness, billions-of-documents sharding, knowledge-graph
answers, or ranking parity. Those remain out of scope in `01` and `03`.
