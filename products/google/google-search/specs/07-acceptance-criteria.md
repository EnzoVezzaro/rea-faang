# 07 — Acceptance criteria

Status: proposed. Every criterion below is checkable without judgement. **Test IDs
name the file that must exist and pass**; **manual IDs** are reproducible steps
with an expected, observable result. A criterion is met only when its check has
run and its output is recorded.

Test commands run from `products/google/google-search/` unless stated otherwise.

## Automated criteria

| ID | Criterion | Test file | Assertion |
|---|---|---|---|
| AC-01 | A missing/empty query returns `400 INVALID_QUERY`; a 257-character query is rejected. | `tests/api/validation.test.mjs` | Status `400`, JSON `error.code` equals `INVALID_QUERY`, no HTML body. |
| AC-02 | Seeding ≥100 fixture pages produces a searchable index with ≥100 documents. | `tests/ingest/index.test.mjs` | `/health` reports `indexReady: true` and `documents >= 100` after the run. |
| AC-03 | A unique phrase from a seeded fixture returns that document on page 1, first result. | `tests/search/contract.test.mjs` | `results[0].url` equals the fixture URL; response validates against the `05` schema. |
| AC-04 | The crawler never fetches a path disallowed by `robots.txt` and respects the per-host delay. | `tests/ingest/robots.test.mjs` | Fixture server records zero disallowed requests; observed gap ≥ configured delay. |
| AC-05 | p95 `tookMs` < 200 ms for 20 repetitions of a representative query on the seeded corpus. | `tests/perf/latency.test.mjs` | Computed p95 < 200; the test logs corpus size, document count, and hardware. |
| AC-06 | Query text is never persisted: not in logs, not in the data directory, not in the index. | `tests/privacy/no-query-persistence.test.mjs` | A unique marker query is absent from captured logs, `crawl-data`, and an index dump. |
| AC-07 | `GET /health` distinguishes ready-empty from not-ready and returns 503 when the engine is down. | `tests/api/health.test.mjs` | Empty index → `200` with `documents: 0`, `indexReady: true`; stopped engine → `503`. |
| AC-08 | Pagination is stable and non-overlapping: pages 1–3 for a multi-hit query return distinct, ordered URLs. | `tests/search/pagination.test.mjs` | No URL repeats across pages; order matches the single-page ordering. |
| AC-09 | `POST /admin/crawl` without a valid token returns `401`; with the token returns `202`. | `tests/api/admin-auth.test.mjs` | Both statuses and codes match `05`; no crawl starts on `401`. |
| AC-10 | Re-indexing an unchanged document does not duplicate it; the document count stays constant. | `tests/ingest/idempotency.test.mjs` | Count before equals count after; `canonicalUrl` is unique. |
| AC-11 | The crawler refuses private, loopback, and link-local seed URLs and addresses. | `tests/ingest/ssrf.test.mjs` | `127.0.0.1`, `10.0.0.1`, `169.254.169.254`, `file:` and `ftp:` seeds are rejected with `INVALID_SEED`. |
| AC-12 | A timeout, 500, oversized body, and non-HTML response are skipped without aborting the crawl. | `tests/ingest/failure-isolation.test.mjs` | Crawl completes; summary counts `failed`/`skipped`; index still queryable. |
| AC-13 | `GET /health` and `/search` never echo the raw query string. | `tests/privacy/no-echo.test.mjs` | A marker query is absent from response bodies and headers, including error responses. |

Fixtures must live under `tests/fixtures/` and be served by a local HTTP server
bound to loopback; tests must not depend on the public internet.

## Manual checks

### MANUAL-01 — One-command start

1. From a clean checkout without volumes: `docker compose up`.
2. Wait for the healthcheck to pass.
3. `curl -s localhost:8080/health` returns `200` with `indexReady: true`.
4. `docker compose down -v`, then repeat steps 1–3 successfully.

Expected: no manual step beyond providing seeds; the second run also passes.

### MANUAL-02 — UI search flow

1. Open `http://localhost:8080/`.
2. Search a phrase present in the seeded corpus.
3. Confirm title, URL, snippet, and site are shown; open a result.
4. Paginate once and confirm no duplicate result appears.

Expected: results render without JavaScript; pagination is stable.

### MANUAL-03 — Ranking usefulness

1. Prepare 10 curated queries whose intended page is known from the fixtures.
2. Run each through `GET /search`.
3. Record the rank of the intended page.

Expected: at least 8 of 10 intended pages appear on page 1. Record the actual
score; do not claim parity with Google.

### MANUAL-04 — Corpus import

1. Provide a 50-document JSONL file matching the `04` schema.
2. `POST /admin/import` with the operator token.
3. Search for a phrase unique to the import.

Expected: the imported document is returned; the crawl was not required.

## Checklist for calling the MVP complete

- [ ] AC-01 … AC-13 pass in the workspace test suite.
- [ ] MANUAL-01 … MANUAL-04 recorded with their observed output.
- [ ] `npm test` in `products/google/google-search/` exits 0.
- [ ] The measured corpus size, document count, hardware, and p95 latency are
      recorded in the workspace README.
- [ ] No criterion is satisfied by a skipped or deleted test.
