# 08 — Security model

Status: proposed. Scope: a self-hosted single-node search service that fetches
public pages and serves public queries. Threats are listed with the control that
addresses them and the check that proves it.

## Assets

- The index contents and the crawl queue.
- The operator token (`ADMIN_TOKEN`).
- Users' query text, which must not become stored data.
- The host network, which the crawler can reach on the operator's behalf.

## Threats and controls

| # | Threat | Control | Verified by |
|---|---|---|---|
| T1 | SSRF: a seed or discovered link targets loopback, private, link-local, or cloud metadata addresses. | Resolve and reject non-public IP ranges before connect; allow only `http(s)`; re-check after redirects; cap redirects. | AC-11 |
| T2 | Crawl bomb: huge bodies, slow responses, infinite link depth. | Body-size cap, per-request timeout, page budget, depth limit, same-host follow policy. | AC-12 |
| T3 | robots/terms violation. | Fetch and cache `robots.txt`; treat unreachable robots as disallow-all; configurable crawl delay. | AC-04 |
| T4 | Query privacy leak. | No query logging; no query stored in the index or on disk; only aggregate counters. | AC-06, AC-13 |
| T5 | Unauthorised crawl/import. | Admin routes require `Authorization: Bearer $ADMIN_TOKEN`; token compared in constant time; no default token. | AC-09 |
| T6 | XSS via fetched content. | Text is extracted, never executed; UI escapes all output; no `innerHTML` with source text; CSP without `unsafe-inline` for scripts. | UI test (AC-03 fixture with script payload) |
| T7 | Query injection into the engine. | Build engine queries from structured parameters; validate paging and sort against allowlists; never concatenate raw query DSL. | AC-01, AC-03 |
| T8 | Error-message disclosure. | Stable error codes; no stack traces, hostnames, or query text in responses. | AC-13 |
| T9 | Dependency compromise. | Minimal dependencies, pinned lockfile, licence review, no post-install scripts from untrusted packages. | Manual review (record in handoff) |
| T10 | Denial of service on search. | Query length cap, page-size cap, optional per-IP rate limit returning `429`; bounded result window. | AC-01, MANUAL-02 |
| T11 | Index tampering by a non-operator. | OpenSearch not published to the host; only the compose network reaches it. | MANUAL-01 (port check) |

## Privacy defaults

- No accounts, cookies, or user identifiers are required to search.
- Query strings are not logged. If request logging is enabled for debugging, the
  `q` parameter is redacted before the log line is written, and the redaction is
  covered by AC-06.
- IP addresses are not stored. If a rate limiter keeps counters, they are
  in-memory, keyed by a salted hash, and documented.
- No third-party analytics, fonts, or scripts on the search page.
- The UI states that the deployment is self-hosted and does not profile users.

## Clean-room and legal boundaries

- Only public pages, `robots.txt`, and official documentation are used.
- No authentication bypass, no decompilation, no proprietary assets, no leaked
  data.
- Fetched content is indexed for search only; the project does not redistribute
  copyrighted page bodies beyond the snippet needed to show a result.
- Operators are responsible for the seeds they choose and for applicable terms
  and law; the README says so.

## Secrets

- `ADMIN_TOKEN` comes from the environment; it is never committed, logged, or
  returned by an endpoint.
- Startup fails closed for admin routes if the token is unset: they return `503`
  rather than allowing anonymous access.
- The token is compared in constant time to avoid timing leaks.

## Residual risks

- A public deployment can still be scraped or abused within rate limits; the MVP
  documents rate limiting as optional and does not claim DDoS protection.
- Single-node storage has no replication; disk loss loses the index (re-crawl or
  re-import is the recovery path).
- Snapshot content can contain personal data published by third parties; takedown
  and re-crawl procedures are an operator responsibility documented in `10`.
