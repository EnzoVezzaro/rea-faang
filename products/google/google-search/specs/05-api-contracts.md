# 05 — API contracts

Status: proposed. Base path: `/`. All responses are `application/json; charset=utf-8`
except the UI routes. Errors use the envelope below and never include stack traces,
query text, or internal hostnames.

```json
{ "error": { "code": "INVALID_QUERY", "message": "q must be 1–256 characters" } }
```

## GET /search

Search the index.

### Parameters

| Name | Type | Default | Rules |
|---|---|---|---|
| `q` | string | — | Required. 1–256 characters after trimming. |
| `page` | integer | `1` | ≥ 1. |
| `limit` | integer | `10` | 1–50. |
| `site` | string | — | Hostname filter, exact match on `site`. |
| `lang` | string | — | BCP 47 tag, exact match on `language`. |
| `sort` | string | `relevance` | `relevance` or `freshness`. |

### Response `200`

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
      "snippet": "…",
      "site": "example.org",
      "score": 7.31
    }
  ]
}
```

- `total` is the number of matching documents, not the number returned.
- Results for equal scores are ordered by `url` ascending (`REQ-RANK-03`).
- `tookMs` is the server-side search time, integer milliseconds.
- `results` is `[]` with `total: 0` when nothing matches; that is not an error.

### Errors

| Status | Code | When |
|---|---|---|
| `400` | `INVALID_QUERY` | `q` missing, empty, or > 256 characters. |
| `400` | `INVALID_PAGING` | `page < 1` or `limit` outside 1–50. |
| `400` | `INVALID_SORT` | Unknown `sort` value. |
| `503` | `INDEX_NOT_READY` | Mapping missing or engine unreachable. |

## GET /health

Liveness and readiness. No authentication.

### Response `200`

```json
{
  "status": "ok",
  "documents": 96,
  "indexReady": true,
  "lastCrawlAt": "2026-11-02T12:04:10Z",
  "version": "0.1.0"
}
```

- `status` ∈ `ok | starting | degraded`.
- `indexReady: false` means queries will return `503`.
- `documents: 0` with `indexReady: true` is a valid empty index (`REQ-OPS-02`).
- `lastCrawlAt` is `null` before the first crawl.

### Response `503`

Returned when the engine cannot be reached. The process stays up so the operator
can see the failure.

## POST /admin/crawl

Start a bounded crawl. Requires `Authorization: Bearer $ADMIN_TOKEN`.

### Request

```json
{ "seeds": ["https://example.org/"], "maxPages": 100 }
```

Both fields are optional; omitted values come from configuration. `maxPages` is
capped by `CRAWL_MAX_PAGES`.

### Response `202`

```json
{ "runId": "crawl_20261102T120000Z", "state": "running" }
```

| Status | Code | When |
|---|---|---|
| `401` | `UNAUTHORIZED` | Missing or wrong token. |
| `409` | `CRAWL_RUNNING` | A crawl is already active. |
| `400` | `INVALID_SEED` | A seed is not an absolute `http(s)` URL or targets a private address. |

## POST /admin/import

Import documents from a JSONL file matching the `04` document schema. Requires
the admin token. Returns `202` with the same `runId` shape.

| Status | Code | When |
|---|---|---|
| `401` | `UNAUTHORIZED` | Missing or wrong token. |
| `400` | `INVALID_DOCUMENT` | A line fails schema validation; the response names the line number only. |

## Contract rules

1. Unknown query parameters are ignored; unknown enum values are `400`.
2. Every response is valid JSON; the API never returns HTML error pages.
3. `Content-Type` is checked before JSON parsing by clients; the server sets it.
4. Field names are stable. Removing a field requires a versioned path.
5. No endpoint echoes the raw query string in an error message or header.
6. Rate limiting, when enabled, returns `429` with `Retry-After` seconds and does
   not include the query text.

## Compatibility

The v1 contract is a documented JSON API. An OpenSearch-compatible DSL surface is
deferred (`03`, P2) and would be additive.
