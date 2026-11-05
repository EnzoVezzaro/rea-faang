# Opportunity: Google Search (google-search)

| | |
|---|---|
| **Target product** | Google Search (`google-search`) |
| **Company** | google |
| **Classification** | build_missing |
| **Status** | proposed |
| **Proposed alternative** | REA Search |
| **License** | MIT |

## Why this is a build opportunity

Google Search is the dominant general-web search engine. The dossier records
that **no qualifying open-source alternative exists at its scale**
(`alternative_status: none_verified`): projects such as DuckDuckGo and SearX
either depend on a commercial index or are meta-search front ends over other
engines, and none provides a self-hostable crawler → index → rank pipeline that a
community can own end to end. See
[`research/companies/google/products/google-search.md`](../research/companies/google/products/google-search.md).

The realistic opportunity is **not** to out-index Google. It is to make the *core
search pipeline* — crawl, index, rank, query — available as self-hostable,
privacy-respecting open source, so that domain-specific and community search can
exist without renting a commercial index.

## Alternatives considered

| Project | Why it is not enough |
|---|---|
| SearX / SearXNG | Meta-search only — proxies results from other engines; no index of its own. |
| DuckDuckGo | Proprietary; uses Bing/Crawl-derived indexes; not self-hostable. |
| Elasticsearch / OpenSearch / Meilisearch / Typesense | Excellent indexing and ranking engines, but they are *libraries/services*, not a complete crawl → index → query product. |
| Common Crawl | A public corpus, not a search engine; no query surface. |

The gap is the **integration**: a complete, owned pipeline that reuses these
building blocks rather than rebuilding them.

## Proposed scope (MVP)

A single-node, self-hostable search engine over a **bounded corpus**:

1. **Ingest** — crawl an operator-provided seed list (respecting `robots.txt`,
   rate limits, and a crawl budget), *or* import an existing open corpus subset
   (for example a bounded Common Crawl slice or an allowed site export).
2. **Index** — build an inverted index using an existing engine (OpenSearch,
   Meilisearch, or Typesense) rather than a hand-written index.
3. **Rank** — BM25 plus open, documented signals (freshness, host authority from
   the link graph). No proprietary personalization.
4. **Query** — a web UI and a documented JSON API (`GET /search?q=…`), plus an
   OpenSearch-compatible endpoint where practical.
5. **Privacy** — self-hosted; query text is **not** persisted by default.

## Out of scope (non-goals)

- General-web competition or parity with Google's index size or freshness.
- Advertising, ad auctions, or monetization.
- A knowledge graph at Google's scale.
- Personalized ranking or cross-site user profiling.
- Reimplementing a crawler/index/ranker from scratch when an open component fits.

## Architecture sketch

```
 seeds / open corpus ──▶ crawler (bounded, polite) ──▶ extract & normalize
                                                              │
                                                              ▼
                                              index engine (OpenSearch/etc.)
                                                              │
                        query API  ◀── ranking (BM25 + open signals) ──┘
```

Reused: an existing HTTP crawl library, an existing index/search engine, an
existing queue/scheduler. Built: the pipeline wiring, the ranking configuration,
the JSON API contract, and the privacy-preserving defaults.

## Acceptance criteria

- [ ] `docker compose up` (or one documented command) starts the engine on a
      fresh machine with no manual steps beyond providing seeds.
- [ ] Crawling a bounded seed set of ≥ 100 pages produces a searchable index.
- [ ] `GET /search?q=<term>` returns ranked results as JSON matching the
      documented schema; verified by a contract test.
- [ ] A representative query over the seeded corpus returns its top result in
      the first page and in < 200 ms on a single node (measured on the seeded
      corpus, not assumed).
- [ ] The crawler honors `robots.txt` and a configurable rate limit; verified by
      a test against a fixture site.
- [ ] Query text is not written to logs, disk, or the database by default;
      verified by a test asserting no persistence on the query path.
- [ ] A health endpoint reports index status and document count.
- [ ] Self-hosting instructions reproduce the build from a clean checkout.

## Risks and open questions

- **Scale ceiling.** A single-node design limits corpus size; the honest claim is
  bounded/domain search, not web scale.
- **Crawl ethics and legality.** Crawling must respect `robots.txt`, terms, and
  applicable law; the default should favor importing an existing open corpus.
- **Ranking quality.** BM25 + small signals will not match Google; success is
  "useful for a bounded corpus", measured, not parity.
- Open question (from the dossier): what is the minimum viable indexing scale
  for a credible alternative? Answered empirically in the MVP.

## Evidence

- https://about.google — Google corporate information.
- https://developers.google.com/search — Search documentation.
- https://github.com/searxng/searxng — meta-search reference (no owned index).
- https://commoncrawl.org/ — public corpus usable as an import source.
