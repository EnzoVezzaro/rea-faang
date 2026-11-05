---
schema_version: "1.0"
id: "meta-threads"
company_id: "meta"
name: "Threads"
aliases: []
product_type: "social_network"
categories:
  - "microblogging"
official_url: "https://www.threads.net/"
official_docs_url: "https://developers.meta.com/resources/"
official_source_urls:
  - "https://about.fb.com/news/2023/07/introducing-threads-new-app-text-sharing/"
  - "https://about.fb.com/news/2024/06/what-is-the-fediverse/"
  - "https://about.fb.com/news/2024/08/new-threads-features-for-creators-and-businesses/"
  - "https://developers.meta.com/resources/"
lifecycle_status: "active"
research_status: "researched"
research_confidence: "verified"
alternative_status: "partial"
alternative_coverage: "unknown"
opportunity_status: "integrate_existing"
last_researched_at: "2026-11-03T00:00:00Z"
last_verified_at: "2026-11-03T00:00:00Z"
next_review_at: "2027-02-03T00:00:00Z"
research_version: 2
---

# Threads

## Research verdict

Threads is Meta's text-first social network for public conversations. Meta's
official materials verify text posts and replies, web access, feeds, creator and
business insights, a Threads API for permitted integrations, and optional
ActivityPub/fediverse interoperability. Threads is a separate product from
Instagram even though Instagram identity and sharing are involved in parts of the
experience.

Mastodon is a partial alternative: it covers federated microblogging, but it does
not reproduce Threads' account graph, product integrations, moderation model,
commercial tooling or exact feed experience.

## Product identity and boundary

- **Owner:** Meta Platforms, Inc.
- **Canonical product ID:** `meta-threads`
- **Lifecycle:** Active
- **Public entry point:** https://www.threads.net/
- **Product boundary:** Text-centric public posting, replies, feeds, discovery,
  creator/business tooling and optional fediverse interoperability.
- **Related catalog entries:** Instagram supplies a related identity and sharing
  context; Facebook, Messenger and WhatsApp remain separate products.

## Verified user capabilities

Official Meta materials verify that Threads users can:

1. Publish text updates with links, photos and video and interact through replies.
2. Use web and mobile experiences with feeds, search, topics, edit and sharing
   workflows that Meta documents as the product evolves.
3. Share posts to Instagram Stories and other surfaces.
4. Use creator and business insights, including views, replies, reposts and quotes.
5. Use the Threads API for permitted creator and business integrations.
6. Opt into fediverse sharing where eligible. Meta documents that public profiles
   in supported countries can share posts with other ActivityPub-compatible
   servers; availability and interaction limits vary.

## Technical boundary

The public sources verify user workflows, the API existence, and the optional
ActivityPub relationship. They do not establish Threads' ranking, moderation,
recommendation, identity, storage, ads, or internal API architecture. Do not infer
full protocol parity from the existence of fediverse sharing.

## Alternative assessment

### Mastodon — partial alternative

Mastodon is a mature, self-hostable federated microblogging platform. It covers
public text posts, follows, replies and federation, but not Threads' centralized
product experience, Meta identity integrations, business tooling or network graph.

ActivityPub interoperability makes Mastodon relevant to the same user job, but it
does not make the products equivalent.

## REA/build implications

For an independent implementation, choose either a self-hosted federated
microblogging workflow or a bounded creator-publishing workflow. Reuse Mastodon
where its ActivityPub model fits. Treat Threads API access, account permissions,
rate limits and fediverse eligibility as explicit external dependencies; do not
imitate private APIs or scrape Threads content.

## Evidence record

| Claim | Source | What it supports |
|---|---|---|
| Threads is a text-sharing app with posts, replies, links, photos and video | [Meta: Introducing Threads](https://about.fb.com/news/2023/07/introducing-threads-new-app-text-sharing/) | Product identity and core workflows |
| Threads can interoperate with ActivityPub/fediverse servers when enabled | [Meta: What is the Fediverse?](https://about.fb.com/news/2024/06/what-is-the-fediverse/) | Optional interoperability scope and limits |
| Threads provides creator/business insights and a Threads API | [Meta: Features for Creators and Businesses](https://about.fb.com/news/2024/08/new-threads-features-for-creators-and-businesses/) | Public integration surface and metrics |
| Meta lists Threads API developer resources | [Meta Developer Resources](https://developers.meta.com/resources/) | Official developer entry point |
| Mastodon provides federated microblogging | [Mastodon](https://joinmastodon.org/) | Alternative capability and scope |

## Known gaps

- API permissions, rate limits, supported account types and current endpoints need
  a dated developer check before implementation.
- Fediverse features vary by age, profile visibility, country and rollout state.
- Ranking, moderation, ads, recommendation and account-graph internals are not
  established by the public sources used here.

**Research date:** 2026-11-03.  
**Confidence:** Verified for documented public capabilities; partial for alternatives.
