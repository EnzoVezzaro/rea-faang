---
schema_version: "1.0"
id: "meta-facebook"
company_id: "meta"
name: "Facebook"
aliases: []
product_type: "social_network"
categories:
  - "social-network"
official_url: "https://www.facebook.com/"
official_docs_url: "https://www.facebook.com/help/"
official_source_urls:
  - "https://about.fb.com/news/2024/10/facebook-local-tab-messenger-communities-ai/"
  - "https://about.fb.com/news/2025/11/facebook-marketplace-gets-a-glow-up/"
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

# Facebook

## Research verdict

Facebook is Meta's active social-network platform combining personal profiles,
Feed, Pages, Groups, Events, Marketplace, video and local discovery. The public
evidence confirms those user-facing surfaces and ongoing product work. Messenger,
Instagram, WhatsApp and Meta Account remain separate catalog products even when
Facebook links to or shares data with them.

Mastodon and Diaspora provide partial federated alternatives for social publishing
and communities. Neither reproduces Facebook's combined groups, pages, events,
marketplace, identity graph, centralized discovery, or network effects.

## Product identity and boundary

- **Owner:** Meta Platforms, Inc.
- **Canonical product ID:** `meta-facebook`
- **Lifecycle:** Active
- **Public entry point:** https://www.facebook.com/
- **Product boundary:** The Facebook social-network experience and its integrated
  community, creator, commerce and discovery surfaces.
- **Related catalog entries:** Messenger handles messaging as its own product;
  Instagram, WhatsApp and Threads are separate social products; Meta Account is
  the account/identity surface.

## Verified user capabilities

Meta's official materials verify that Facebook supports:

1. Personal profiles and a Feed for social content and recommendations.
2. Groups, Pages and Events for communities, organizations and activities.
3. Marketplace for local and online buying/selling workflows, with listings,
   seller communication and partner checkout in documented flows.
4. Local and Explore discovery surfaces that can combine content from Marketplace,
   Groups, Events, Pages and creators.
5. Integrations with Messenger and Meta AI in selected Facebook experiences.

Feature availability, country coverage, account type, age restrictions and tests
change over time. The evidence does not imply that every feature is available to
every user.

## Technical boundary

The public sources verify product surfaces and selected developer resources. They
do not verify Facebook's ranking, recommendation, moderation, advertising,
identity-graph, storage, payments, or internal API architecture. Do not describe
those internals as facts without a more specific primary source.

## Alternative assessment

### Mastodon — partial community/social alternative

Mastodon provides federated social publishing through ActivityPub. It can cover
profiles, timelines and community interaction, but not Facebook's integrated
Marketplace, Pages, Events and centralized recommendation surface.

### Diaspora — partial decentralized alternative

Diaspora provides a decentralized social-network model. Its scope and ecosystem
differ from Facebook's product breadth and commercial infrastructure.

No single open-source project is treated as a drop-in Facebook replacement.

## REA/build implications

Choose a bounded job—federated communities, local listings, events, or social
publishing—rather than attempting to replicate Facebook wholesale. Reuse Mastodon
or Diaspora where their documented models fit. Do not scrape Facebook, copy user
content, imitate private APIs, or reproduce its identity and advertising systems
without authorization.

## Evidence record

| Claim | Source | What it supports |
|---|---|---|
| Facebook combines Local, Marketplace, Groups, Events, Pages and creator content | [Meta: Facebook Local](https://about.fb.com/news/2024/10/facebook-local-tab-messenger-communities-ai/) | Product surfaces and discovery workflows |
| Marketplace supports listings, seller interactions and partner checkout flows | [Meta: Marketplace](https://about.fb.com/news/2025/11/facebook-marketplace-gets-a-glow-up/) | Commerce surface and documented workflow |
| Meta publishes developer resources for platform integrations | [Meta Developer Resources](https://developers.meta.com/resources/) | Public integration entry point; not private API access |
| Mastodon is a federated social network | [Mastodon](https://joinmastodon.org/) | Alternative scope |
| Diaspora is a decentralized social network | [Diaspora Foundation](https://diasporafoundation.org/) | Alternative scope |

## Known gaps

- Facebook's complete API permissions, review process and rate limits require a
  current developer-surface check.
- Ranking, moderation, ads, payments, identity graph and internal architecture are
  not established by the sources used here.
- Marketplace, Dating, monetization and local features vary by region and account.

**Research date:** 2026-11-03.  
**Confidence:** Verified for documented public capabilities; partial for alternatives.
