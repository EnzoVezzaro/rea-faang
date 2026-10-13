---
name: google-maps
description: Use when researching, comparing, or building a free and open-source replacement for Google Maps (Google). Open-source status is available — see OpenStreetMap, Organic Maps, MapLibre, and more.
---

# Google Maps (`google-maps`)

| | |
|---|---|
| **Company** | Google (`google`) |
| **Product type** | `consumer_application` |
| **Categories** | `search`, `discovery` |
| **Official URL** | https://maps.google.com/ |
| **Open-source status** | **available** |

## What it is

Google Maps is a mapping and navigation platform: base map, satellite imagery, Street View, place data, routing, and a developer API.

## Core capabilities

- Map tiles and place search
- Turn-by-turn routing and traffic
- Satellite/Street View imagery
- Places and geocoding APIs

## Existing open source

| Project | License | What it covers | Notes |
|---|---|---|---|
| [OpenStreetMap](https://www.openstreetmap.org/) | ODbL-1.0 (data) | The open map dataset and community. | Data licence, not an app. |
| [Organic Maps](https://organicmaps.app/) | Apache-2.0 | Offline navigation app built on OSM data. | No live traffic. |
| [MapLibre](https://maplibre.org/) | BSD-3-Clause | Open map rendering library (fork of Mapbox GL). | Rendering library, not a data service. |
| [OSRM / Valhalla](https://project-osrm.org/) | BSD-2-Clause / Apache-2.0 | Self-hosted routing engines. | Pair with OSM data for turn-by-turn. |

## Gap

Live traffic, Street View imagery and Google’s place-data breadth have no open equivalent.

## Verdict

Available. Map data, rendering and routing are open source; only the proprietary imagery and traffic layers remain closed.

## Sources

- https://github.com/organicmaps/organicmaps
- https://tuta.com/blog/google-maps-alternatives-foss
- https://www.xda-developers.com/organic-maps-open-source-google-maps-alternative-delivers/

## Provenance

- Catalog record: [`catalog/products.jsonl`](../../products.jsonl) (`google-maps`)
- Research dossier: [`research/companies/google/products/google-maps.md`](../../../research/companies/google/products/google-maps.md)
- REA web-surface report: [`catalog/rea/google/google-maps.md`](../../rea/google/google-maps.md)
