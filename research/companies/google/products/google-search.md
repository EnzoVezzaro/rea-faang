---
schema_version: "1.0"
id: "google-search"
company_id: "google"
name: "Google Search"
aliases: []
product_type: "consumer_application"
categories:
  - "search"
  - "discovery"
lifecycle_status: "active"
official_url: "https://www.google.com/"
official_docs_url: "https://developers.google.com/search/docs/fundamentals/how-search-works"
official_source_urls:
  - "https://developers.google.com/search/docs/appearance/ranking-systems-guide"
  - "https://developers.google.com/search/docs/essentials/technical"
  - "https://support.google.com/websearch/answer/134479?hl=en"
  - "https://developers.google.com/custom-search/v1/overview"
research_status: "researched"
research_confidence: "verified"
alternative_status: "partial"
alternative_coverage: "unknown"
opportunity_status: "build_missing"
last_researched_at: "2026-11-03T00:00:00Z"
last_verified_at: "2026-11-03T00:00:00Z"
next_review_at: "2027-02-03T00:00:00Z"
research_version: 2
evidence:
  - id: "ev-google-search-identity"
    url: "https://www.google.com/"
    source_type: "official_website"
    publisher: "Google"
    title: "Google Search"
    accessed_at: "2026-11-03T00:00:00Z"
    claim: "The canonical public product surface is Google Search at google.com."
    claim_type: "product_identity"
    supporting_excerpt_or_summary: "The official product URL resolves to the Google Search homepage; the repository also records a dated REA capture of that public surface."
    reliability: "primary"
    verification_status: "verified"
  - id: "ev-google-search-how-works"
    url: "https://developers.google.com/search/docs/fundamentals/how-search-works"
    source_type: "developer_documentation"
    publisher: "Google Search Central"
    title: "In-depth guide to how Google Search works"
    accessed_at: "2026-11-03T00:00:00Z"
    claim: "Google Search publicly documents crawling, indexing and serving search results as three stages."
    claim_type: "capability"
    supporting_excerpt_or_summary: "The official guide describes URL discovery and crawling, indexing page content into the Google index, and serving relevant results for a query."
    reliability: "primary"
    verification_status: "verified"
  - id: "ev-google-search-ranking"
    url: "https://developers.google.com/search/docs/appearance/ranking-systems-guide"
    source_type: "developer_documentation"
    publisher: "Google Search Central"
    title: "A guide to Google Search ranking systems"
    accessed_at: "2026-11-03T00:00:00Z"
    claim: "Google documents automated ranking systems that use many factors and signals to select relevant results."
    claim_type: "capability"
    supporting_excerpt_or_summary: "The guide describes page-level ranking systems, signals and named systems such as passage ranking and RankBrain; it does not disclose proprietary implementation details."
    reliability: "primary"
    verification_status: "verified"
  - id: "ev-google-search-technical"
    url: "https://developers.google.com/search/docs/essentials/technical"
    source_type: "developer_documentation"
    publisher: "Google Search Central"
    title: "Google Search technical requirements"
    accessed_at: "2026-11-03T00:00:00Z"
    claim: "Google publishes public eligibility requirements involving crawler access, successful responses and indexable content."
    claim_type: "capability"
    supporting_excerpt_or_summary: "The official page lists Googlebot access, HTTP 200 responses and indexable content as minimum technical requirements for eligibility; eligibility does not guarantee indexing or serving."
    reliability: "primary"
    verification_status: "verified"
  - id: "ev-google-search-help"
    url: "https://support.google.com/websearch/answer/134479?hl=en"
    source_type: "official_website"
    publisher: "Google Search Help"
    title: "Learn search tips & how results relate to your search on Google"
    accessed_at: "2026-11-03T00:00:00Z"
    claim: "Google Search publicly documents query terms, spelling, links, location, language, content types and SafeSearch as relationships or controls users may encounter."
    claim_type: "capability"
    supporting_excerpt_or_summary: "The help page describes basic text and voice search, spelling correction, direct answers, link relationships, location/language context, content filters and SafeSearch."
    reliability: "primary"
    verification_status: "verified"
  - id: "ev-google-search-custom-api"
    url: "https://developers.google.com/custom-search/v1/overview"
    source_type: "api_specification"
    publisher: "Google for Developers"
    title: "Custom Search JSON API"
    accessed_at: "2026-11-03T00:00:00Z"
    claim: "Google documents a JSON API for retrieving web and image results from a configured Programmable Search Engine, with an API key and current availability limits."
    claim_type: "api_surface"
    supporting_excerpt_or_summary: "The official documentation states that the API returns JSON, requires a configured search engine and API key, is closed to new customers, and gives existing customers a transition date of 2027-01-01."
    reliability: "primary"
    verification_status: "verified"
---

# 1. Executive summary

Google Search is Google's public web-search product. Google documents a three-stage model—crawling, indexing and serving results—and separately documents automated ranking systems and public search controls. The public documentation does not establish the proprietary implementation, internal data model, exact ranking weights or operational scale of an independent replica.

This dossier promotes the product to `researched` for documented public behavior and records remaining unknowns explicitly. The dated REA capture covers only the unauthenticated Google homepage; it is not evidence of the complete search-results workflow.

# 2. Product identity and ownership

- **Canonical name:** Google Search
- **Stable catalog ID:** `google-search`
- **Company:** Google
- **Product type:** consumer application; search and discovery
- **Official product URL:** https://www.google.com/
- **Official documentation:** https://developers.google.com/search/docs/fundamentals/how-search-works
- **Lifecycle:** active at the time of review
- **Identity evidence:** `ev-google-search-identity`, plus `catalog/rea/google/google-search.md`
- **Supported versions/platform matrix:** not published as a single public matrix; treat as unknown and verify per implementation scope

No duplicate product row was found for `google-search` in the canonical catalog. Programmable Search Engine and the Custom Search JSON API are related interfaces, not separate identities for this row.

# 3. Product capabilities

The following claims are supported by the official sources in the evidence ledger:

1. **Crawling and URL discovery:** Google describes automated crawlers discovering and fetching public pages, subject to access and crawl constraints.
2. **Indexing:** Google describes analyzing page content and storing information in its index; indexing is not guaranteed.
3. **Serving results:** Google describes returning information it considers relevant to a query from the index.
4. **Automated ranking:** Google documents ranking systems and many signals, while withholding proprietary implementation details.
5. **Query assistance and result context:** Google Help documents spelling correction, related terms, direct answers, links, location, language, content types and SafeSearch as behaviors or controls users may encounter.
6. **Programmable interfaces:** Google documents Programmable Search Engine and a JSON API for configured search engines. The Custom Search JSON API is closed to new customers and existing customers are given a 2027-01-01 transition date.

Not established by these sources: Google-scale performance, private personalization data, exact algorithms, internal services, ranking weights, full result composition, or regional feature parity.

# 4. Technical architecture

**Verified public model:** crawler/URL-discovery stage → indexing stage → result-serving stage. The public guide describes Googlebot, rendering, indexing, canonicalization and a large Google index at a conceptual level.

**Not verified:** service boundaries, storage engines, ranking implementation, model training, replication, queues, caches, deployment topology, data retention and private personalization systems. These remain `UNKNOWN`; this dossier does not infer them from common search-engine architecture.

# 5. User workflows

The official help documentation supports a basic user path: enter a query, optionally use voice or search refinements, and inspect results and result-context explanations. The REA capture observed the unauthenticated start page with a search control, voice and image controls, settings, navigation and footer links, but did not activate a query.

The following workflow details remain unverified and must not be presented as complete product behavior: result rendering and pagination, loading and empty states, SafeSearch enforcement in each surface, personalization persistence, account-dependent behavior, cancellation, retry, ranking explanations, accessibility behavior after submission, and error recovery.

# 6. Pricing and access

The core public Search homepage has no product-pricing contract established in this review. The Custom Search JSON API is a separate developer interface: its official documentation says it requires a configured Programmable Search Engine and API key, is closed to new customers, and has a transition deadline for existing customers. Do not use API pricing or quotas as evidence about the consumer Search product.

# 7. API and integration surface

- **Custom Search JSON API:** JSON retrieval of web or image results from a configured Programmable Search Engine; API key required; current availability limitations are documented at the official API page.
- **Programmable Search Engine:** configurable site or collection search, image search and presentation controls; the official overview documents client-side embedding and the JSON API.
- **Public web UI:** observed homepage controls are recorded in the REA report; no claim is made about undocumented endpoints or private browser traffic.

Authentication, quotas, errors, retries, idempotency and regional availability must be read from the current official API documentation before an independent integration is designed.

# 8. Existing open-source alternatives

The curated landscape identifies three partial candidates, each covering a different scope:

- **SearXNG:** AGPL-3.0 metasearch engine that aggregates other search services; it does not provide an owned Google-scale index.
- **YaCy:** free/distributed search software with crawler and local/distributed index capabilities; its scope and network model differ materially from Google Search.
- **Whoogle:** self-hosted privacy-oriented front end for Google Search; it depends on Google's service and is not an independent search engine.

These are candidates for evaluation, not verified replacements or approved foundations. Alternative coverage remains `unknown` in the canonical product record until a separate license, version, maintenance, security and capability review is completed.

# 9. Alternative comparison

The evidence supports a **partial** landscape, not parity. SearXNG is relevant when the goal is privacy-preserving aggregation; YaCy is relevant when the goal is an owned or distributed crawl/index; Whoogle is relevant when the goal is a self-hosted presentation layer over Google results. None covers the full public Search product and none should be represented as a drop-in equivalent.

# 10. Missing capabilities and opportunity analysis

The opportunity is a bounded, independently implemented search product with an explicit corpus and measurable scope—not a claim to reproduce Google's proprietary general-web service. A viable first slice could define a permitted corpus, crawl policy, indexing format, query interface, ranking baseline, privacy policy and observability. General-web scale, private ranking, personalized results and proprietary data sources remain out of scope until separately evidenced and authorized.

# 11. REA implementation strategy

Use the REA public-surface report only to reproduce the observed starting-page contract and to guide further authorized observation. For any independent implementation, choose a foundation only after evaluating the three candidates against the declared corpus, license, maintenance and security requirements. If none satisfies the bounded scope, record `BUILD` or `INVESTIGATE MORE`; do not claim parity.

# 12. Security, privacy and compliance

The official help material indicates that location, language, region, search activity and SafeSearch can affect the user experience. It does not provide a complete retention or internal privacy model for this dossier. An independent implementation must define data minimization, query-log retention, account isolation, location controls, SafeSearch policy, abuse/rate limits, deletion/export behavior and secrets handling before implementation. No compliance certification or privacy parity claim is made.

# 13. Sources and evidence

| Evidence ID | Source | Scope |
|---|---|---|
| `ev-google-search-identity` | https://www.google.com/ | Product identity and public homepage |
| `ev-google-search-how-works` | https://developers.google.com/search/docs/fundamentals/how-search-works | Crawling, indexing and serving model |
| `ev-google-search-ranking` | https://developers.google.com/search/docs/appearance/ranking-systems-guide | Public description of ranking systems and limits |
| `ev-google-search-technical` | https://developers.google.com/search/docs/essentials/technical | Public crawl/index eligibility requirements |
| `ev-google-search-help` | https://support.google.com/websearch/answer/134479?hl=en | Query behavior, context and user controls |
| `ev-google-search-custom-api` | https://developers.google.com/custom-search/v1/overview | JSON API contract and current availability notes |
| REA capture | `catalog/rea/google/google-search.md` | Dated unauthenticated homepage observation only |

# 14. Open questions and exclusions

- Full result-page workflow and error/recovery states are not captured.
- Exact ranking signals, weights, models and infrastructure are proprietary or undocumented.
- Supported platform/version matrix and regional feature availability are not consolidated here.
- API quotas, authorization details and transition behavior must be checked again before integration.
- Alternative repositories still require a separate version, license, maintenance and security audit.
- No private surfaces, authentication bypass, binary analysis or internal architecture inference is included.

# 15. Research history

- **2026-11-03:** reviewed official Google Search Central, Google Search Help and Google Developers sources; reconciled them with the existing REA homepage capture; promoted the dossier from `pending` to `researched` with verified evidence and explicit unknowns.
- **Next review:** 2027-02-03, or sooner if the official API availability or public Search documentation changes materially.
