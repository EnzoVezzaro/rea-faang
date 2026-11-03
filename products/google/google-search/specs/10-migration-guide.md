# 10 — Migration guide

Status: proposed. This guide covers moving to RAE Search from nothing, from a
meta-search front end, and from a bare index engine. It also covers rollback.

## From nothing (first deployment)

1. `git clone` the repository; enter `products/google/google-search/`.
2. Create `crawl-data/seeds.txt` with one absolute `https://` URL per line.
3. Set `ADMIN_TOKEN` in the environment or a local `.env` that is gitignored.
4. `docker compose up`.
5. Wait for `curl -s localhost:8080/health` to report `indexReady: true`.
6. Trigger the crawl: `curl -X POST -H "Authorization: Bearer $ADMIN_TOKEN" localhost:8080/admin/crawl`.
7. Search from `http://localhost:8080/`.

**Verification:** `MANUAL-01` and `MANUAL-02`.

## From a meta-search front end (SearXNG)

A meta-search front end proxies other engines and has no index of its own. There
is no index to migrate; the migration is a re-ingest.

1. Export the list of sites the front end prioritised (or curate a seed list).
2. Put those sites in `seeds.txt`, within the page budget.
3. Run the crawl and verify `MANUAL-03` with queries your users actually use.
4. Keep the old front end running until ranking is acceptable; switch DNS or the
   link, not the data.

**What you gain:** an owned index and query privacy. **What you lose:** web-wide
coverage and the upstream engines' freshness. State both in your own docs.

## From Elasticsearch or OpenSearch (existing index)

If you already run an index engine with a compatible document set:

1. Map your fields to the `04` document schema. `canonicalUrl` is required and
   unique; `title` and `text` are the searchable fields.
2. Either point `OPENSEARCH_URL` at the existing cluster, or export documents to
   JSONL and use `POST /admin/import`.
3. Create the index mapping from `04`; do not rely on dynamic mapping.
4. Reindex with the document schema; verify counts before switching traffic.
5. Run `AC-03`, `AC-08`, and `AC-10` against the migrated corpus.

**Compatibility notes:** field names differ from arbitrary schemas; there is no
automatic synonym or analyser migration in v1. Custom analysers must be declared
in the mapping before indexing.

## From a WARC or Common Crawl subset

1. Select a bounded slice and convert records to the `04` JSONL document schema.
2. `POST /admin/import` with the operator token.
3. Verify `/health` document count and run `MANUAL-04`.
4. Record the slice identifier and record count in your deployment notes.

## Configuration migration

| Old setting | New setting | Note |
|---|---|---|
| index URL | `OPENSEARCH_URL` | No credentials in the URL; use the engine's own auth if needed. |
| crawl delay | `CRAWL_RATE_LIMIT_MS` | Per host, milliseconds. |
| page cap | `CRAWL_MAX_PAGES` | Per run. |
| API port | `PORT` | Default `8080`. |
| admin key | `ADMIN_TOKEN` | Required for `/admin/*`; no default. |

## Rollback

1. Keep the previous deployment's compose file and volumes.
2. Stop the new service: `docker compose down` (do not use `-v`).
3. Restart the previous service and point traffic back.
4. The new index volume is independent; removing it is a separate, explicit step.
5. Record the rollback reason and the last good commit in the operations log.

**Data loss:** `docker compose down -v` deletes the index and crawl queue. Recovery
is a re-crawl or re-import, not a restore.

## Upgrade procedure

1. Read the changelog for mapping or contract changes.
2. Back up the index volume (`opensearch-data`).
3. Apply the new version; mappings are additive in v1.
4. Run `AC-01` … `AC-13` and one manual search before restoring traffic.

## Known migration limits

- No automatic ranking-parity evaluation against Google; use `MANUAL-03`.
- No built-in synonym/analyser migration.
- Single node only; a multi-node move requires a new deployment, not an in-place
  scale-up.
- Crawling behind authentication is out of scope; import an allowed export
  instead.
