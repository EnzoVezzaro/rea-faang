---
schema_version: "1.0"
id: "google-news"
company_id: "google"
name: "Google News"
aliases: ["News"]
product_type: "media"
categories: ["news-aggregation", "personalization", "media"]
lifecycle_status: "active"
official_url: "https://news.google.com/"
official_docs_url: "https://support.google.com/googlenews/"
official_source_urls: ["https://support.google.com/googlenews/answer/9005749", "https://support.google.com/googlenews/answer/9010862", "https://support.google.com/news/publisher-center/answer/9607025", "https://support.google.com/news/publisher-center/"]
research_status: "researched"
research_confidence: "verified"
alternative_status: "partial"
alternative_coverage: "unknown"
opportunity_status: "research_further"
last_researched_at: 2026-11-03T00:00:00Z
last_verified_at: 2026-11-03T00:00:00Z
next_review_at: 2027-02-03T00:00:00Z
research_version: 2
inventory_status: "verified"
command_status: "documented"
command_source: "https://support.google.com/googlenews/answer/9005749"
---
# 1. Executive summary

Google News is Google's news aggregation and personalization service. It presents headlines and coverage from publishers on the web and mobile, supports following topics, sources and locations, and uses automated selection plus account and region context. It is distinct from Google Search's general results and News tab, although the surfaces are related.

# 2. Product identity and ownership

- **Official name:** Google News
- **Company:** Google LLC, part of Alphabet Inc.
- **Lifecycle:** active
- **Canonical website:** https://news.google.com/
- **Identity evidence:** Google Help and Publisher Center documentation describe Google News as a separate news experience with its own feed, personalization and publisher surfaces.

# 3. Product capabilities

- Aggregate news coverage from eligible publishers and web crawls.
- Present headlines, local news, full coverage, briefings and publisher features.
- Personalize content using language, region, followed topics/sources and activity signals.
- Follow or hide topics, locations and sources; save stories and manage notifications.
- Provide publisher surfaces such as News Showcase and Reader Revenue Manager integration.

# 4. Technical architecture

Google documents automated story selection, personalization, publisher eligibility and crawler-based discovery. Ranking algorithms, source evaluation, personalization implementation and infrastructure are proprietary. Google News is not a general-purpose public news API in this catalog entry.

# 5. User workflows

A user opens Google News, reads headlines or full coverage, follows a topic or source, adjusts preferences, saves a story or manages notifications. Publishers expose eligible content through normal web crawling and applicable policies; participating publishers may use additional Showcase or revenue features.

# 6. Pricing and access

The reader experience depends on account, language, region, device and publisher access. Some stories may be paywalled; News Showcase and subscription features depend on country and publisher participation. This pass does not assert publisher eligibility or current commercial terms.

# 7. API and integration surface

The public official material reviewed documents reader, publisher, crawl and revenue surfaces rather than a general Google News content API. Publisher Center and Search Console workflows support discovery and measurement. Do not claim API access or automated ingestion of Google News content without a separate, current authorization review.

# 8. Existing open-source alternatives

- **FreshRSS (AGPL-3.0):** self-hosted RSS aggregator with source subscriptions and a web UI.
- **Miniflux (AGPL-3.0):** minimalist self-hosted RSS reader and server.
- **Tiny Tiny RSS (GPL-2.0):** self-hosted feed aggregation and filtering.

# 9. Alternative comparison

RSS readers cover following known feeds, reading and local filtering. They do not reproduce Google's publisher discovery, automated story clustering, personalized ranking, local-news surfaces, News Showcase or Google account activity signals. Coverage is partial.

# 10. Missing capabilities and opportunity analysis

A broader replacement would need feed and crawl ingestion, deduplication, story clustering, source quality controls, personalization, regional relevance, notifications, publisher tooling, rights/paywall handling and transparent ranking controls.

# 11. REA implementation strategy

Start with explicit RSS subscriptions and transparent source/topic filtering. Add clustering and local indexing only with clear provenance and opt-in personalization. Do not scrape Google News or imply publisher rights; ingest sources through permitted feeds and documented APIs.

# 12. Security, privacy, and compliance

News preferences and activity can reveal interests, location and sensitive topics. Verify account controls, notification handling, publisher rights, paywall boundaries, crawl directives, retention and ranking transparency before operating an alternative.

# 13. Sources and evidence

- [How Google News stories are selected](https://support.google.com/googlenews/answer/9005749) — official selection and personalization behavior.
- [Customize what you find on Google News](https://support.google.com/googlenews/answer/9010862) — official topic, source and location controls.
- [News content across Google](https://support.google.com/news/publisher-center/answer/9607025) — official publisher discovery and News surfaces.
- [Publisher Center Help](https://support.google.com/news/publisher-center/) — official publisher and News Showcase surfaces.

# 14. Open questions

- Which regions, languages and publisher feeds should an alternative target?
- Is the goal a personal RSS reader, a publisher discovery system or a ranked news service?
- What provenance, rights, ranking transparency and notification controls are mandatory?

# 15. Research history

Record updated 2026-11-03 from official Google News Help and Publisher Center sources. Status: `researched`; proprietary ranking, publisher eligibility decisions and account-specific personalization remain outside this pass.
