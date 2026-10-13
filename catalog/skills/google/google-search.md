---
name: google-search
description: Use when researching, comparing, or building a free and open-source replacement for Google Search (Google). Open-source status is partial — see SearXNG, YaCy, Whoogle.
---

# Google Search (`google-search`)

| | |
|---|---|
| **Company** | Google (`google`) |
| **Product type** | `consumer_application` |
| **Categories** | `search`, `discovery` |
| **Official URL** | https://www.google.com/ |
| **Open-source status** | **partial** |

## What it is

Google Search is the dominant general-web search engine: a crawler fleet, an inverted index, a ranking stack driven by hundreds of signals, and a knowledge graph, all served at web scale.

## Core capabilities

- Web crawl and indexing at web scale
- Ranking and relevance (link graph + behavioural signals)
- Spell correction, query suggestions, knowledge graph, featured snippets
- Universal search (images, video, news) and personalisation

## Existing open source

| Project | License | What it covers | Notes |
|---|---|---|---|
| [SearXNG](https://github.com/searxng/searxng) | AGPL-3.0 | Privacy-respecting metasearch front end; self-hostable. | Proxies other engines — no index of its own. |
| [YaCy](https://yacy.net/) | GPL-2.0 | Peer-to-peer crawler and index; a genuinely owned index. | Small corpus and a very different scale from Google. |
| [Whoogle](https://github.com/benbusby/whoogle-search) | MIT | Self-hosted, ad-free Google front end. | Depends on Google’s index; not an independent engine. |

## Gap

No self-hostable project provides the whole owned crawl → index → rank → query pipeline at a useful general-web scale; the metasearch projects rent someone else’s index.

## Verdict

Partial. The pieces are open source (crawlers, OpenSearch/Meilisearch, BM25), but the integrated, owned general-web engine is not — a bounded-corpus pipeline remains a build opportunity.

## Sources

- https://www.reddit.com/r/selfhosted/comments/19eqv5k/google_search_self_hosted_alternative/
- https://homelabcompass.com/alternatives/self-hosted-search-engine
- https://www.xda-developers.com/self-hosted-search-engine-pros-cons/

## Provenance

- Catalog record: [`catalog/products.jsonl`](../../products.jsonl) (`google-search`)
- Research dossier: [`research/companies/google/products/google-search.md`](../../../research/companies/google/products/google-search.md)
- REA web-surface report: [`catalog/rea/google/google-search.md`](../../rea/google/google-search.md)
