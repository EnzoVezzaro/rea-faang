# 04 — Data models

Status: proposed. Names are normative for the implementation. All timestamps are
UTC ISO 8601 strings.

## 1. Document

The unit of indexing and retrieval.

```json
{
  "url": "https://example.org/docs/start",
  "canonicalUrl": "https://example.org/docs/start",
  "title": "Getting started",
  "text": "Full extracted body text …",
  "language": "en",
  "site": "example.org",
  "fetchedAt": "2026-11-02T12:00:00Z",
  "contentHash": "sha256:9f2c…",
  "status": 200,
  "contentType": "text/html"
}
```

| Field | Type | Required | Rules |
|---|---|---|---|
| `url` | string | yes | Absolute `http(s)` URL as fetched, fragment removed. |
| `canonicalUrl` | string | yes | `<link rel="canonical">` when present, else `url`. Identity for upserts. |
| `title` | string | yes | Extracted `<title>` or first `h1`; empty string allowed. |
| `text` | string | yes | Visible text after script/style removal; may be empty for non-HTML. |
| `language` | string | no | BCP 47 tag from markup when available; `null` otherwise. Never guessed. |
| `site` | string | yes | Hostname without `www.` prefix. |
| `fetchedAt` | string | yes | Time of the successful fetch. |
| `contentHash` | string | yes | `sha256:` + hex of the normalised text. |
| `status` | integer | yes | HTTP status of the fetch. |
| `contentType` | string | yes | Response `Content-Type` without parameters. |

**Invariants**

- `canonicalUrl` is unique across the index (`REQ-IDX-02`).
- A re-crawl that produces the same `contentHash` must not change `fetchedAt` in a
  way that implies fresh content; `fetchedAt` records the last successful fetch.
- `text` never contains script or style content.

## 2. Crawl queue entry

Persisted by the worker (filesystem or engine index); not exposed by the API.

```json
{
  "url": "https://example.org/docs/start",
  "host": "example.org",
  "depth": 0,
  "discoveredFrom": null,
  "state": "pending",
  "attempts": 0,
  "nextEligibleAt": "2026-11-02T12:00:01Z"
}
```

`state` ∈ `pending | fetching | indexed | skipped | failed`.
`attempts` is capped at 3; at the cap the entry becomes `failed` with a reason.
`nextEligibleAt` enforces the per-host delay (`REQ-CRAWL-03`).

## 3. Crawl summary

Returned by the admin crawl trigger and written to the operator log.

```json
{
  "startedAt": "2026-11-02T12:00:00Z",
  "finishedAt": "2026-11-02T12:04:10Z",
  "fetched": 120,
  "indexed": 96,
  "unchanged": 20,
  "skipped": 3,
  "disallowed": 7,
  "failed": 4,
  "budget": 200
}
```

Counts must satisfy `fetched + skipped + disallowed + failed = attempted` and
`indexed + unchanged + failed ≤ fetched`.

## 4. Query request and response

Request parameters are defined in `05-api-contracts.md`. The response envelope:

```json
{
  "query": "privacy search",
  "page": 1,
  "limit": 10,
  "total": 42,
  "tookMs": 12,
  "results": [
    {
      "url": "https://example.org/docs/privacy",
      "title": "Privacy",
      "snippet": "…matched terms highlighted…",
      "site": "example.org",
      "score": 7.31
    }
  ]
}
```

`snippet` is derived from indexed text around the matched terms; it is never
invented or generated. `score` is the engine score and is not a probability.

## 5. Index mapping (OpenSearch)

```json
{
  "settings": { "index": { "number_of_shards": 1, "number_of_replicas": 0 } },
  "mappings": {
    "properties": {
      "canonicalUrl": { "type": "keyword" },
      "url": { "type": "keyword" },
      "title": { "type": "text", "boost": 2.0 },
      "text": { "type": "text" },
      "language": { "type": "keyword" },
      "site": { "type": "keyword" },
      "fetchedAt": { "type": "date" },
      "contentHash": { "type": "keyword" },
      "status": { "type": "integer" },
      "contentType": { "type": "keyword" }
    }
  }
}
```

- One shard, zero replicas: the single-node MVP favours simplicity over
  availability (`06`).
- `boost` on `title` implements `REQ-RANK-01`.
- The mapping is created before the API reports `indexReady: true`
  (`REQ-IDX-03`).

## 6. Configuration

Environment variables, with defaults that make the service safe:

| Variable | Default | Meaning |
|---|---|---|
| `PORT` | `8080` | Query API port. |
| `OPENSEARCH_URL` | `http://opensearch:9200` | Index engine endpoint. |
| `CRAWL_SEEDS_FILE` | `/data/seeds.txt` | Seed list. |
| `CRAWL_MAX_PAGES` | `200` | Page budget per run. |
| `CRAWL_RATE_LIMIT_MS` | `1000` | Minimum delay per host. |
| `CRAWL_MAX_BODY_BYTES` | `2000000` | Response size cap. |
| `CRAWL_TIMEOUT_MS` | `10000` | Per-request timeout. |
| `ADMIN_TOKEN` | none (required for admin routes) | Operator token. |
| `QUERY_MAX_LENGTH` | `256` | Reject longer queries. |
| `QUERY_PAGE_SIZE_MAX` | `50` | Pagination cap. |

Secrets are read from the environment and never written to the repository or
logs.

## 7. What is deliberately not stored

- Query strings, IP addresses, user agents, and referrers (`REQ-PRIV-01`).
- Per-user identifiers or sessions.
- Full raw HTML after extraction; only the extracted document is indexed.
