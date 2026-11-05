# 09 — Integration points

Status: proposed. Each integration names the contract, the direction of data, and
what the MVP does and does not support.

## 1. Index engine — OpenSearch

- **Contract:** OpenSearch 2.x REST API over the compose network.
- **Direction:** write (bulk index), read (search, count, cluster health).
- **Used for:** inverted index, BM25, aggregations for document counts.
- **Constraints:** one shard, zero replicas; mapping created at startup (`04`).
- **Not supported in v1:** cross-cluster search, snapshots to remote storage,
  multi-node sharding. These are additive later and do not change the public API.

## 2. Crawl targets — HTTP(S) and robots.txt

- **Contract:** RFC 9309 `robots.txt`; HTTP/1.1 and HTTP/2 via `undici`.
- **Direction:** read.
- **Rules:** honour `Disallow`, `Allow` precedence, `Crawl-delay` when larger than
  the configured floor; treat fetch failure as disallow-all.
- **Not supported:** authenticated pages, form submission, JavaScript-rendered
  content, CAPTCHA solving, access-control bypass.

## 3. Corpus import — WARC and JSONL

- **Contract:** JSONL lines matching the `04` document schema; WARC subset for
  `REQ-CRAWL-06`.
- **Direction:** read.
- **Use case:** import a bounded Common Crawl slice or an allowed site export
  instead of crawling.
- **Constraints:** validation failures name the line number and do not partially
  index a malformed record.

## 4. Search clients — JSON API

- **Contract:** `05-api-contracts.md` (`GET /search`, `GET /health`,
  `POST /admin/*`).
- **Direction:** bidirectional.
- **Compatibility:** additive changes only in v1; removing a field requires a
  versioned path.
- **Not supported:** an OpenSearch-compatible DSL endpoint (deferred), GraphQL,
  and authenticated per-user results.

## 5. Web UI

- **Contract:** server-rendered HTML over the same JSON API semantics.
- **Direction:** read.
- **Accessibility:** form labels, keyboard-operable pagination, visible focus,
  semantic result list; no JavaScript required for the core flow.
- **Not supported:** client-side routing, offline mode, personalisation.

## 6. REA FAANG catalogue

- **Contract:** the product record `google-search` in `catalog/products.jsonl` and
  the dossier `research/companies/google/products/google-search.md`.
- **Direction:** read (the workspace consumes catalog metadata).
- **Rule:** the workspace does not write into the catalogue; catalogue changes go
  through the CLI validators (`npm run validate`).
- **Evidence:** the opportunity spec `opportunities/google-search.md` is the
  bridge from research to this specification set.

## 7. Observability

- **Contract:** `/health` JSON; structured stdout logs without query text.
- **Direction:** write.
- **Fields:** timestamp, level, event, crawl counts, duration. No `q`, no IP, no
  user agent.
- **Not supported:** hosted metrics/tracing integrations; the MVP stays
  dependency-free and self-hosted.

## 8. Packaging and startup

- **Contract:** `docker compose up` with `compose.yaml`; environment variables in
  `04`.
- **Direction:** operator-provided configuration.
- **Verification:** `MANUAL-01`.
- **Not supported:** Kubernetes manifests, Helm charts, managed cloud templates.

## Integration test policy

Integrations with OpenSearch run against a real container in CI when Docker is
available; otherwise they run against a recorded fixture and the skip is recorded
in the handoff. Tests never call the public internet.
