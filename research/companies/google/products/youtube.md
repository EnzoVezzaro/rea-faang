---
schema_version: "1.0"
id: "youtube"
company_id: "google"
name: "YouTube"
aliases: []
product_type: "media"
categories:
  - "video-platform"
  - "creator-platform"
  - "live-streaming"
  - "advertising"
lifecycle_status: "active"
official_url: "https://www.youtube.com/"
official_docs_url: "https://developers.google.com/youtube/apis"
official_source_urls: ["https://support.google.com/youtube/", "https://developers.google.com/youtube/apis", "https://developers.google.com/youtube/terms/developer-policies-guide", "https://developers.google.com/youtube/data/live/getting-started", "https://developers.google.com/youtube/analytics"]
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
command_source: "https://developers.google.com/youtube/apis"
---
# 1. Executive summary

YouTube is Google's video hosting, playback, creator and live-streaming platform. It provides public channels and videos, search and discovery, playlists, subscriptions, comments, live events and creator analytics, with monetization and rights-management surfaces for eligible users and partners. YouTube Music, YouTube TV and YouTube Kids are related but separate catalog products.

# 2. Product identity and ownership

- **Official name:** YouTube
- **Company:** YouTube LLC, part of Google/Alphabet Inc.
- **Lifecycle:** active
- **Canonical website:** https://www.youtube.com/
- **Identity evidence:** Official Google developer documentation identifies YouTube app features, Data, Live Streaming, Analytics, Reporting and Content ID APIs as distinct YouTube integration surfaces.

# 3. Product capabilities

- Upload, manage, publish and play user and partner video content.
- Channels, subscriptions, playlists, search, comments and sharing.
- Live event scheduling and stream management.
- Creator analytics and reporting, subject to authorization and API scope.
- Content ownership and rights workflows through restricted Content ID surfaces.
- Embedded playback through the IFrame Player API and related widgets.

# 4. Technical architecture

The public surface exposes a web and app experience, embedded playback, creator channels, live streaming, APIs and reporting. The public documentation does not disclose YouTube's internal transcoding, CDN, recommendation, moderation, ranking, advertising or rights-enforcement implementation. Those capabilities must be treated as proprietary beyond the documented behavior and API contracts.

# 5. User and developer workflows

Viewers discover and play videos, subscribe to channels, create playlists and interact with content. Creators use channels and Studio workflows to upload, manage, publish and analyze content. Authorized applications can use the Data API for documented video/channel/playlist operations, the Live Streaming API for live events, and Analytics/Reporting APIs for permitted reporting. API clients must preserve the standard player experience and comply with YouTube policies.

# 6. Pricing and access

YouTube has an ad-supported public experience and paid or creator-specific programs such as YouTube Premium, channel memberships and other monetization features. Availability, monetization eligibility, regional access and API quotas vary by account, country, content and program. This pass does not assert current pricing or a channel's eligibility.

# 7. API and integration surface

Google documents the YouTube Data API, Live Streaming API, IFrame Player API, Analytics API, Reporting API, Content ID API and player/widgets. Content ID is restricted to eligible YouTube Partners. API access requires the documented authentication, quota, privacy and policy controls; a public API is not permission to download, mirror, modify or replace YouTube playback.

# 8. Existing open-source alternatives

- **PeerTube (AGPL-3.0):** federated, self-hostable video publishing and streaming platform.
- **Invidious (AGPL-3.0):** alternative front end that depends on YouTube; not an independent video platform.
- **FreeTube (AGPL-3.0):** desktop client focused on privacy; not a hosting or creator platform.

# 9. Alternative comparison

PeerTube is the closest open platform for self-hosted and federated video publishing, while Invidious and FreeTube are clients/front ends that depend on YouTube. None reproduces YouTube's content catalog, creator network, global delivery, recommendation system, advertising, rights management or partner ecosystem. Coverage is partial.

# 10. Missing capabilities and opportunity analysis

A replacement would need video ingestion and transcoding, storage and CDN delivery, playback, search, recommendations, identity, channels, moderation, copyright and rights workflows, live streaming, analytics, monetization, safety, privacy and regional compliance. A bounded niche or federated platform is feasible; a general YouTube clone is not supported by this research.

# 11. REA implementation strategy

Use PeerTube for a self-hosted/federated video platform or FreeTube for a privacy-oriented client. Define content ownership, moderation, storage, delivery, federation, creator identity and monetization before building. If integrating YouTube, use only documented APIs and the embedded player, preserve standard playback and obtain the required permissions. Do not scrape or mirror YouTube content.

# 12. Security, privacy, and compliance

YouTube workflows process account identity, viewing history, uploads, comments, analytics, rights data and potentially child-directed content. API clients must obtain consent, provide privacy and deletion controls, protect credentials, respect content and community policies, preserve playback integrity and avoid unauthorized data collection or downloads.

# 13. Sources and evidence

- [YouTube APIs and services](https://developers.google.com/youtube/apis) — official API inventory and access modes.
- [Developer policies guide](https://developers.google.com/youtube/terms/developer-policies-guide) — official privacy, playback, metrics and independent-value requirements.
- [Live Streaming API overview](https://developers.google.com/youtube/data/live/getting-started) — official live-event and stream-management surface.
- [YouTube Analytics and Reporting](https://developers.google.com/youtube/analytics) — official creator analytics and reporting surface.
- [YouTube API terms](https://developers.google.com/youtube/terms/api-services-terms-of-service) — official API contractual requirements.

# 14. Open questions

- Is the target a creator tool, embedded player, analytics product, federated platform or full video service?
- Which content ownership, moderation, monetization and regional requirements are mandatory?
- Which YouTube API scopes, quotas, audits and privacy obligations apply to the integration?

# 15. Research history

- v1: dossier contained broad editorial claims and preliminary alternatives; research pending.
- v2: rewritten 2026-11-03 from official YouTube Help and Google developer documentation. Status: `researched`; proprietary infrastructure, content licensing, ranking and partner operations remain outside the verified public surface.
