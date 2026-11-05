---
schema_version: "1.0"
id: "youtube-music"
company_id: "google"
name: "YouTube Music"
aliases: []
product_type: "media_streaming"
categories:
  - "music-streaming"
  - "podcasts"
  - "music-discovery"
lifecycle_status: "active"
official_url: "https://music.youtube.com/"
official_docs_url: "https://support.google.com/youtubemusic"
official_source_urls: ["https://support.google.com/youtubemusic/answer/6313529?hl=en-GB", "https://support.google.com/youtubemusic/answer/9266556?hl=en-GB", "https://support.google.com/youtubemusic/answer/9716522?hl=en", "https://support.google.com/youtubemusic/answer/13401025?hl=en-GB", "https://support.google.com/youtubemusic/answer/9231765?hl=en"]
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
command_source: "https://support.google.com/youtubemusic"
---
# 1. Executive summary

YouTube Music is Google's distinct music and podcast listening service at music.youtube.com and in dedicated mobile apps. It combines on-demand music videos, songs, albums, remixes, covers and podcasts with search, recommendations, playlists, a personal library and optional Premium benefits. It is related to YouTube and shares membership entitlements in some cases, but it is a separate product surface and should not be merged into the YouTube catalog row.

# 2. Product identity and ownership

- **Official name:** YouTube Music
- **Company:** Google LLC, part of Alphabet Inc.
- **Lifecycle:** active
- **Canonical website:** https://music.youtube.com/
- **Identity evidence:** Google's official YouTube Music Help describes the app as a place to watch music videos, connect with artists, and discover music and podcasts across devices.

# 3. Product capabilities

- On-demand playback of songs, albums, music videos, remixes, covers and podcasts.
- Search, artist and channel pages, personalized recommendations, mood/activity stations, Samples and Sound Search.
- Personal library with saved songs, albums, artists, playlists, podcasts and downloads.
- User music uploads that can be played from the uploader's own library.
- YouTube Music Premium benefits including ad-free music, background play, audio-only playback and music downloads; availability varies by account and region.

# 4. Technical architecture

The public product surface includes a web app at music.youtube.com, mobile apps, account-linked library and recommendation workflows, plus casting and selected device integrations. Google's public YouTube API catalog documents YouTube APIs, but this pass does not identify a separate general-purpose public YouTube Music API; implementation must not assume that YouTube Data API access is equivalent to YouTube Music access.

# 5. User workflows

A user searches or browses music and podcasts, starts playback, saves items to a library or playlist, follows artists, and receives recommendations based on activity and listening history. Premium members can enable background and audio-only playback and download supported content for offline use. Users can also upload personal audio files to their own library; uploaded items are not shared as a public catalog.

# 6. Pricing and access

YouTube Music offers an ad-supported experience and a paid YouTube Music Premium membership. Google documents regional availability, account eligibility, device limitations and different treatment for podcasts. This pass does not assert current pricing or eligibility for a specific account or country.

# 7. API and integration surface

Google documents YouTube APIs for YouTube app features, analytics, reporting and content ownership. The official YouTube Music Help documents web, mobile, Wear OS, Google Cast and selected device workflows. No dedicated public YouTube Music API was verified in this pass; integrations must be scoped to documented YouTube APIs or supported product surfaces rather than inferred from the music app.

# 8. Existing open-source alternatives

- **Navidrome (GPL-3.0):** self-hosted music streaming for a library the operator owns.
- **Funkwhale (AGPL-3.0):** self-hosted music sharing and streaming.

# 9. Alternative comparison

Navidrome and Funkwhale cover self-hosted library playback, playlists and related streaming workflows. They do not reproduce YouTube Music's licensed catalog, YouTube-derived music-video ecosystem, recommendation systems, Premium membership, regional licensing or Google account/device integrations. Coverage is partial.

# 10. Missing capabilities and opportunity analysis

A replacement would need catalog ingestion and licensing, search and discovery, recommendations, playback across web/mobile/devices, accounts and libraries, playlists, podcast support, offline rights, subscriptions, creator/rights workflows, privacy controls and regional content policy. A self-hosted alternative is more realistic for owned media than for the licensed catalog.

# 11. REA implementation strategy

Choose a narrow owned-library streaming workflow and reuse Navidrome or Funkwhale rather than attempting to reproduce Google's licensed catalog. Define media ownership, metadata, playlists, device access and offline behavior first. Do not claim YouTube Music API compatibility without a separately verified Google integration and permitted scopes.

# 12. Security, privacy, and compliance

The service processes account identity, listening history, playlists, uploads, recommendations and potentially family or child profiles. Verify account roles, content rights, upload privacy, retention, regional licensing, device authorization and least-privilege access before implementing an integration.

# 13. Sources and evidence

- [What is YouTube Music?](https://support.google.com/youtubemusic/answer/6313529?hl=en-GB) — official product identity, free/Premium capabilities and availability.
- [YouTube Music Premium benefits](https://support.google.com/youtubemusic/answer/9266556?hl=en-GB) — official background play, offline downloads and audio-only behavior.
- [Find music and podcasts](https://support.google.com/youtubemusic/answer/13401025?hl=en-GB) — official discovery, recommendations, library and Sound Search workflows.
- [Upload music to your library](https://support.google.com/youtubemusic/answer/9716522?hl=en) — official upload limits and private-library behavior.
- [Use YouTube Music on other apps and devices](https://support.google.com/youtubemusic/answer/9231765?hl=en) — official device, Wear OS, casting and web-app integrations.

# 14. Open questions

- Which countries, account types and membership tiers are in scope for a comparison?
- Is the target owned-library streaming, a licensed catalog, or an integration with supported YouTube surfaces?
- Which rights, offline, family-account and device requirements are mandatory?

# 15. Research history

- v1: dossier created with preliminary alternatives; research pending.
- v2: updated 2026-11-03 from official YouTube Music Help and Google developer documentation. Status: `researched`; licensing, ranking, proprietary recommendation systems and a dedicated public YouTube Music API remain outside the verified surface.
