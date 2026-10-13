---
name: netflix-streaming
description: Use when researching, comparing, or building a free and open-source replacement for Netflix Streaming (Netflix). Open-source status is partial — see Jellyfin, PeerTube, Kodi, and more.
---

# Netflix Streaming (`netflix-streaming`)

| | |
|---|---|
| **Company** | Netflix (`netflix`) |
| **Product type** | `media_streaming` |
| **Categories** | `media_streaming` |
| **Official URL** | https://www.netflix.com/ |
| **Open-source status** | **partial** |

## What it is

Netflix Streaming is a subscription video-on-demand service: a licensed and original content library delivered through adaptive streaming, recommendations and DRM.

## Core capabilities

- Adaptive-bitrate streaming at scale
- Personalised recommendations
- Profiles, parental controls, offline downloads
- DRM (Widevine/FairPlay/PlayReady)

## Existing open source

| Project | License | What it covers | Notes |
|---|---|---|---|
| [Jellyfin](https://jellyfin.org/) | GPL-2.0 | Fully open, self-hosted media server and streaming. | The clearest open replacement for the software. |
| [PeerTube](https://joinpeertube.org/) | AGPL-3.0 | Federated video hosting/streaming. | Platform-level alternative. |
| [Kodi](https://kodi.tv/) | GPL-2.0 | Open media centre. | Client-side playback. |
| [Plex / Emby](https://www.plex.tv/) | proprietary | Popular media servers. | Not open source. |

## Gap

The licensed content library, the recommendation model and the DRM/content-licensing arrangements cannot be open-sourced.

## Verdict

Partial. The streaming software is open source (Jellyfin); the catalogue, recommendations and rights are pending and will remain so.

## Sources

- https://jellyfin.org/
- https://selfhostedworld.com/alternative/netflix
- https://www.howtogeek.com/we-ditched-popular-paid-subscriptions-for-these-open-source-self-hosted-alternatives/

## Provenance

- Catalog record: [`catalog/products.jsonl`](../../products.jsonl) (`netflix-streaming`)
- Research dossier: [`research/companies/netflix/products/netflix-streaming.md`](../../../research/companies/netflix/products/netflix-streaming.md)
- REA web-surface report: [`catalog/rea/netflix/netflix-streaming.md`](../../rea/netflix/netflix-streaming.md)
