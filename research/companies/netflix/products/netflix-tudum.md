---
schema_version: "1.0"
id: "netflix-tudum"
company_id: "netflix"
name: "Tudum"
aliases: []
product_type: "media"
categories:
  - "editorial"
official_url: "https://www.netflix.com/tudum"
official_docs_url: "https://help.netflix.com/en/node/123481"
official_source_urls:
  - "https://help.netflix.com/en/node/123481"
  - "https://about.netflix.com/news/meet-tudum-your-backstage-pass-to-the-netflix-stories-you-love"
lifecycle_status: "active"
research_status: "retired"
research_confidence: "verified"
alternative_status: "none_verified"
alternative_coverage: "unknown"
opportunity_status: "not_recommended"
last_researched_at: "2026-11-03T00:00:00Z"
last_verified_at: "2026-11-03T00:00:00Z"
next_review_at: null
research_version: 2
---

# Tudum

## Classification verdict

Tudum is an active Netflix editorial companion site, not a separate streaming
service or software product. Netflix describes it as an official companion site
with interviews, behind-the-scenes material, bonus videos, news and fan-oriented
content. It can personalize the experience after a Netflix sign-in, but it is a
content and editorial surface associated with Netflix Streaming.

To avoid counting an editorial surface as an independent buildable service, this
entry remains in the catalog only as a **retired inventory record** for traceability.
It is not an active product-research or build target.

## Evidence

- [Netflix Help: What is Tudum?](https://help.netflix.com/en/node/123481) identifies
  Tudum as Netflix's official companion site and describes its editorial content,
  personalization, language availability, and relationship to Netflix accounts.
- [About Netflix: Meet Tudum](https://about.netflix.com/news/meet-tudum-your-backstage-pass-to-the-netflix-stories-you-love)
  describes Tudum's purpose as going deeper into Netflix stories with news,
  interviews, and behind-the-scenes material.
- The REA capture at `catalog/rea/netflix/netflix-tudum.md` confirms that the
  public URL resolves to a Tudum editorial surface with sections such as Latest
  News, Shows, and Explore More.

## Scope boundary

Tudum does not get a separate software-replication plan. A build agent should not
interpret this record as a request to reproduce Netflix editorial content, private
account integrations, or copyrighted media. If a future project needs a fan
publication, evaluate a general CMS or publishing stack separately; that would be
a new, independently scoped product rather than a Tudum clone.

**Classification date:** 2026-11-03.  
**Status:** Active external site; retired from the REA build-product inventory.
