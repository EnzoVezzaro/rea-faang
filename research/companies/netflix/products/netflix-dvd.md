---
schema_version: "1.0"
id: "netflix-dvd"
company_id: "netflix"
name: "Netflix DVD"
aliases: ["Netflix DVD by mail", "DVD.com"]
product_type: "media"
categories: ["rental", "physical-media"]
lifecycle_status: "discontinued"
official_url: "https://dvd.netflix.com/"
official_docs_url: null
official_source_urls: ["https://about.netflix.com/news/netflix-dvd-the-final-season"]
research_status: "retired"
research_confidence: "unverified"
alternative_status: "partial"
alternative_coverage: "unknown"
opportunity_status: "not_recommended"
last_researched_at: null
last_verified_at: 2026-11-03T00:00:00Z
next_review_at: null
research_version: 1
inventory_status: "retired"
command_status: "not_applicable"
command_source: null
---
# 1. Executive summary

Netflix DVD was Netflix's disc-by-mail rental service. Netflix announced the wind-down in April 2023 and shipped the final discs on 29 September 2023.

**Retired:** Netflix shipped the final discs on 29 September 2023 (https://about.netflix.com/news/netflix-dvd-the-final-season).

# 2. Product identity and ownership

**Official name:** Netflix DVD
**Company:** Netflix, Inc.
**Lifecycle status:** discontinued (final discs shipped 29 September 2023)
**Official website:** https://dvd.netflix.com/ (service retired)

# 3. Product capabilities

- DVD and Blu-ray rental by mail with a subscriber queue
- Shipping and return logistics
- All capabilities are historical: the final discs shipped on 29 September 2023

# 4. Technical architecture

The service was a physical logistics operation backed by a web queue; no public API or client implementation was ever documented.

# 5. User workflows

Historically: build a queue, receive discs by mail, return them in prepaid envelopes. The service closed after 25 years.

# 6. Pricing and access

Monthly subscription tiers by number of discs out at once; no longer sold.

# 7. API and integration surface

No official API or SDK remains for the retired service; command status is not_applicable, recorded with the official announcement as the source.

# 8. Existing open-source alternatives

Jellyfin (GPL-2.0) is the open, self-hosted equivalent for streaming media you already own.

# 9. Alternative comparison

Jellyfin replaces the streaming use case, not the mail-order logistics; the catalog does not treat physical fulfilment as software to replicate.

# 10. Missing capabilities and opportunity analysis

None: out of scope because the product is retired.

# 11. REA implementation strategy

No implementation. Keep the record so the inventory does not re-add a retired product.

# 12. Security, privacy, and compliance

No user data is stored by this catalog; the announcement documents Netflix's own closure handling.

# 13. Sources and evidence

- https://about.netflix.com/news/netflix-dvd-the-final-season

# 14. Open questions

- None outstanding: the product is out of scope.

# 15. Research history

Record created 2026-11-03 from public official sources during the FAANG+Microsoft inventory expansion. Status: `retired`; nothing beyond official documentation and public announcements is asserted.
