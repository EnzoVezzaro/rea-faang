# 02 — User workflows

Status: proposed. Each workflow lists preconditions, the observable steps, and the
failure path. Requirement IDs are defined in `03-feature-catalog.md` and
verified by the criteria in `07-acceptance-criteria.md`.

## W1 — Operator starts the service

**Actor:** operator with Docker and a seed file.
**Precondition:** fresh checkout, `seeds.txt` with one URL per line.

1. Operator runs `docker compose up`.
2. The service starts OpenSearch, the crawler worker, the query API, and the UI.
3. `GET /health` returns `200` with `{"status":"starting"}` until the index is
   ready, then `{"status":"ok","documents":N,"indexReady":true}`.
4. If OpenSearch is unreachable, the API returns `503` with a machine-readable
   error and the container logs name the missing dependency; it does not crash
   silently.

**Failure path:** an unreadable or empty `seeds.txt` leaves the service healthy but
idle, with `documents: 0` and a warning in the logs. Requirement: `REQ-OPS-02`.

## W2 — Operator crawls a bounded corpus

**Actor:** operator.
**Precondition:** seeds are configured; `CRAWL_MAX_PAGES` and `CRAWL_RATE_LIMIT`
are set.

1. Operator triggers the crawl (`POST /admin/crawl` with the operator token, or the
   documented worker command).
2. For each URL the crawler checks `robots.txt` for its user agent, waits for the
   configured delay, fetches with a size/time limit, extracts title/text/links,
   and enqueues same-host links within the page budget.
3. Progress is observable: `GET /health` document count increases; the crawl
   summary reports fetched, skipped, disallowed, and failed counts.
4. Re-running a crawl updates changed documents by content hash and does not
   duplicate unchanged ones.

**Failure path:** a fetch timeout, non-2xx status, oversized body, or disallowed
path is counted and skipped; it does not abort the crawl. Requirement: `REQ-CRAWL-04`.

## W3 — End user searches

**Actor:** end user in a browser.
**Precondition:** index contains at least one document.

1. User opens `/` and types a query.
2. The UI calls `GET /search?q=<query>&page=1&limit=10`.
3. Results render with title, URL, snippet, and site; the page shows total hits
   and query time.
4. User paginates with `page=2`; results do not repeat page 1.
5. User applies `site:` or the site filter; only matching hosts remain.

**Failure path:** an empty query returns `400`; a query with no matches returns
`200` with `results: []` and `total: 0`. Requirement: `REQ-API-03`.

## W4 — End user refines a query

1. From a results page the user edits the query or selects a suggested refinement.
2. The UI issues a new `GET /search` request; the previous page is not mutated.
3. Suggestions, when enabled, are derived from index terms only and are labelled
   as query suggestions, not personalisation.

Requirement: `REQ-UX-02`.

## W5 — Operator inspects index health

1. Operator calls `GET /health`.
2. The response reports `status`, `documents`, `indexReady`, `lastCrawlAt`, and
   `version`.
3. A document count of zero with `indexReady: true` is valid for an empty index
   and is distinguishable from `indexReady: false`.

Requirement: `REQ-OPS-03`.

## W6 — Privacy check on the query path

1. A user submits a unique query string.
2. The operator inspects API logs, the application data directory, and the
   OpenSearch indices.
3. The query string is absent from all three. Only aggregate counters (for example
   total queries served) may be recorded, and they are documented.

Requirement: `REQ-PRIV-01`; verified by `AC-06`.

## Out of workflow scope

- Account creation, saved searches, and cross-device history.
- Advertising or sponsored results.
- Personalised ranking based on user identity.
- Crawling behind authentication or bypassing access controls.
