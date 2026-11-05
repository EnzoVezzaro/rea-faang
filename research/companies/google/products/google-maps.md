---
schema_version: "1.0"
id: "google-maps"
company_id: "google"
name: "Google Maps"
aliases: []
product_type: "consumer_application"
categories:
  - "maps"
  - "navigation"
  - "geospatial"
official_url: "https://maps.google.com/"
official_docs_url: "https://developers.google.com/maps/documentation"
official_source_urls:
  - "https://developers.google.com/maps/faq"
  - "https://developers.google.com/maps/documentation/javascript/overview"
  - "https://developers.google.com/maps/billing-and-pricing"
  - "https://support.google.com/maps/answer/6291838"
  - "https://support.google.com/maps/answer/6291839"
lifecycle_status: "active"
research_status: "researched"
research_confidence: "verified"
alternative_status: "partial"
alternative_coverage: "unknown"
opportunity_status: "research_further"
last_researched_at: "2026-11-03T00:00:00Z"
last_verified_at: "2026-11-03T00:00:00Z"
next_review_at: "2027-02-03T00:00:00Z"
research_version: 2
evidence:
  - id: "ev-google-maps-identity"
    url: "https://maps.google.com/"
    source_type: "official_website"
    publisher: "Google"
    title: "Google Maps"
    accessed_at: "2026-11-03T00:00:00Z"
    claim: "The canonical public product surface is Google Maps at maps.google.com."
    claim_type: "product_identity"
    supporting_excerpt_or_summary: "The official URL resolves to the Google Maps web surface; the repository records a dated REA capture with search, directions, menu, saved and recent controls."
    reliability: "primary"
    verification_status: "verified"
  - id: "ev-google-maps-platform"
    url: "https://developers.google.com/maps/faq"
    source_type: "developer_documentation"
    publisher: "Google for Developers"
    title: "Google Maps Platform FAQ"
    accessed_at: "2026-11-03T00:00:00Z"
    claim: "Google Maps Platform provides APIs and SDKs for maps, routes, places and related location services."
    claim_type: "api_surface"
    supporting_excerpt_or_summary: "Google lists Maps, Routes and Places APIs/SDKs, setup requirements, API keys, billing, usage limits and restrictions on accessing map tiles and imagery."
    reliability: "primary"
    verification_status: "verified"
  - id: "ev-google-maps-documentation"
    url: "https://developers.google.com/maps/documentation"
    source_type: "developer_documentation"
    publisher: "Google for Developers"
    title: "Google Maps Platform documentation"
    accessed_at: "2026-11-03T00:00:00Z"
    claim: "Google documents distinct Maps, Routes, Places, Environment and Dataset capabilities."
    claim_type: "capability"
    supporting_excerpt_or_summary: "The official documentation separates map rendering, directions and optimization, place search/details, geospatial environment data and datasets, with platform-specific APIs and SDKs."
    reliability: "primary"
    verification_status: "verified"
  - id: "ev-google-maps-javascript"
    url: "https://developers.google.com/maps/documentation/javascript/overview"
    source_type: "developer_documentation"
    publisher: "Google for Developers"
    title: "Maps JavaScript API overview"
    accessed_at: "2026-11-03T00:00:00Z"
    claim: "The Maps JavaScript API supports interactive 2D/3D maps, markers, custom data layers, styling and Places data."
    claim_type: "capability"
    supporting_excerpt_or_summary: "Google documents web map rendering, markers, style customization, custom data layers, administrative boundaries and Places library usage."
    reliability: "primary"
    verification_status: "verified"
  - id: "ev-google-maps-pricing"
    url: "https://developers.google.com/maps/billing-and-pricing"
    source_type: "developer_documentation"
    publisher: "Google for Developers"
    title: "Google Maps Platform pricing and billing"
    accessed_at: "2026-11-03T00:00:00Z"
    claim: "Google Maps Platform uses usage-based pricing with service-specific billable events, free usage caps and billing requirements."
    claim_type: "pricing"
    supporting_excerpt_or_summary: "The official pricing documentation describes pay-as-you-go billing, subscriptions, usage monitoring and free monthly billable events by SKU."
    reliability: "primary"
    verification_status: "verified"
  - id: "ev-google-maps-offline"
    url: "https://support.google.com/maps/answer/6291838"
    source_type: "developer_documentation"
    publisher: "Google Maps Help"
    title: "Download areas and navigate offline in Google Maps"
    accessed_at: "2026-11-03T00:00:00Z"
    claim: "Google Maps supports downloading selected map areas for offline driving navigation, with limitations by region and mode."
    claim_type: "capability"
    supporting_excerpt_or_summary: "Google Help documents downloading map areas and offline driving navigation, while noting that transit, bicycling, walking, traffic and alternate routes may be unavailable offline."
    reliability: "primary"
    verification_status: "verified"
  - id: "ev-google-maps-features"
    url: "https://support.google.com/maps/answer/6291839"
    source_type: "developer_documentation"
    publisher: "Google Maps Help"
    title: "Discover helpful features in Google Maps"
    accessed_at: "2026-11-03T00:00:00Z"
    claim: "Google Maps documents saved places, location sharing, offline maps, route preferences, Street View and measurement features."
    claim_type: "capability"
    supporting_excerpt_or_summary: "Google Help lists user workflows for saved places, location sharing, offline maps, route options, Street View and measuring distances."
    reliability: "primary"
    verification_status: "verified"
---

# 1. Executive summary

Google Maps is Google's consumer mapping, place-discovery and navigation surface, with a separate Google Maps Platform of APIs and SDKs. Official documentation verifies maps, routes, places, geospatial datasets, web rendering, directions, offline-map behavior and usage-based pricing. The public evidence does not establish Google's internal geospatial data pipeline, proprietary imagery rights, global traffic quality or complete parity between consumer Maps and developer Platform products.

This dossier promotes `google-maps` to `researched` for documented public and developer behavior. It keeps the consumer application, Platform APIs and data/licensing boundaries explicit and treats the dated REA capture as a limited public-surface observation.

# 2. Product identity and ownership

- **Canonical name:** Google Maps
- **Stable catalog ID:** `google-maps`
- **Company:** Google
- **Product type:** consumer mapping, places and navigation application
- **Official product URL:** https://maps.google.com/
- **Official developer documentation:** https://developers.google.com/maps/documentation
- **Lifecycle:** active at the time of review
- **Identity evidence:** `ev-google-maps-identity`, plus `catalog/rea/google/google-maps.md`
- **Related surfaces:** Google Maps Platform, Street View, Places, Routes, Google Earth and Waze; related does not mean the same product contract

Google Maps consumer features and Google Maps Platform APIs/SDKs are related but not interchangeable. The catalog keeps one product identity because the current row describes the public Maps surface; a future API-specific row should be added only if its lifecycle, owner or evidence scope requires it.

# 3. Product capabilities

The following claims are supported by the official sources in the evidence ledger:

1. **Interactive map rendering:** Maps JavaScript API supports interactive 2D/3D maps, markers, custom styles and custom data layers.
2. **Routes and navigation:** Google documents directions, travel modes, traffic-aware routes, route optimization and mobile Navigation SDKs.
3. **Places and geospatial data:** Google documents place search/details, autocomplete, geocoding, address validation, datasets and environment-related APIs.
4. **Consumer workflows:** Google Help documents saved places, route options, location sharing, Street View, measurement and offline map downloads.
5. **Developer integration:** Maps Platform provides APIs and SDKs for web, Android and iOS, with API-key, billing and quota requirements.
6. **Usage-based billing:** Google documents billable events, free monthly usage caps, SKU pricing, monitoring and subscriptions.

Not established by these sources: internal tile generation, global traffic ingestion, proprietary imagery and place-data licensing, ranking/recommendation models, exact routing algorithms, complete regional availability or a service-level guarantee.

# 4. Technical architecture

**Verified public model:** map or mobile client → Maps, Routes, Places or related Platform API/SDK → rendered map, place data, route or geospatial result. The JavaScript documentation verifies web rendering and custom layers; the Platform documentation separates Maps, Routes, Places, Environment and Dataset product families.

**Not verified:** tile stores, imagery processing, traffic and incident ingestion, geocoding index, routing graph, edge cache, mobile synchronization, recommendation systems and internal access controls. These remain `UNKNOWN`; no proprietary architecture is inferred.

# 5. User workflows

The REA capture observed the public Maps surface with Search, Directions, Menu, Saved, Recents and Get app controls. Official help supports searching places, selecting route options, saving locations, sharing location, exploring Street View, measuring distances and downloading selected areas for offline driving navigation.

The following remain surface-, device- or account-dependent and were not independently exercised: live navigation, traffic updates, transit and cycling routes, reviews, business editing, location history, account personalization, Street View coverage, offline expiry, incident reporting, accessibility behavior, errors, retries and cancellation.

# 6. Pricing and access

The consumer Maps surface is available as a public application with account- and region-dependent features. Google Maps Platform requires selecting APIs or SDKs, configuring a Google Cloud project and API key, and meeting current billing and usage requirements. Platform pricing is usage- and SKU-dependent with free monthly usage caps; it is not a promise that all consumer Maps data or features are free to embed.

No API key, billing account, paid request or production map data was used during this research.

# 7. API and integration surface

- **Maps:** Maps JavaScript API, Maps SDKs, Static Maps, Map Tiles, Street View and Maps URLs.
- **Routes:** Routes API, Roads API, Route Optimization API and Navigation SDKs.
- **Places:** Places API/SDKs, Places Library, autocomplete, details, geocoding and address validation.
- **Other services:** Environment, Datasets, Elevation, Time Zone and related geospatial APIs.
- **Consumer web/mobile:** search, directions, saved places, offline areas, Street View and sharing workflows.

Before integration, verify API key restrictions, quotas, billable events, storage/caching terms, attribution, data retention, region support and restrictions on downloading or recreating Google's tiles and imagery.

# 8. Existing open-source alternatives

The curated landscape identifies partial alternatives covering different layers:

- **OpenStreetMap:** open map data under ODbL; it is a data/community project, not a complete hosted Maps replacement.
- **Organic Maps:** offline navigation application using open map data; it does not provide Google's live traffic or imagery ecosystem.
- **MapLibre:** open map-rendering libraries; they require compatible tile/data services.
- **OSRM / Valhalla:** self-hostable routing engines; they require map data and operational infrastructure.

None is verified here as a drop-in replacement for the combined Google Maps consumer experience, Places breadth, proprietary Street View, global traffic or Maps Platform contract.

# 9. Alternative comparison

The evidence supports **partial** alternative coverage. OpenStreetMap supplies data, MapLibre supplies rendering, OSRM/Valhalla supply routing, and Organic Maps supplies an offline consumer application. A complete independent stack still requires tile hosting, geocoding, place search, routing, updates, offline packaging, privacy controls and possibly licensed traffic or transit data. Alternative coverage remains `unknown` until current version, license, maintenance, security and target-region reviews are completed.

# 10. Missing capabilities and opportunity analysis

The opportunity is a bounded, privacy-first mapping or navigation product using open data and explicit regional scope—not a claim to reproduce Google's global service. A viable first slice could target one region, offline maps, place search, routing and local storage. Proprietary imagery, global traffic, transit breadth, commercial place data and global reliability remain out of scope.

# 11. REA implementation strategy

Use the REA report only to reproduce the observed public entry controls. For an independent implementation, compare OpenStreetMap, MapLibre, Organic Maps, OSRM and Valhalla against the declared region, offline requirement, routing quality, data license, update cadence and privacy policy. Do not copy Google tiles, imagery or protected data, and do not claim Maps parity.

# 12. Security, privacy and compliance

Location and movement data are sensitive. An independent implementation must define local versus server storage, location permissions, sharing consent, account isolation, deletion/export, telemetry defaults, map-data attribution, tile access controls, API-key restrictions, billing alerts and regional privacy obligations. No compliance certification or privacy parity claim is made.

# 13. Sources and evidence

| Evidence ID | Source | Scope |
|---|---|---|
| `ev-google-maps-identity` | https://maps.google.com/ | Product identity and public Maps surface |
| `ev-google-maps-platform` | https://developers.google.com/maps/faq | Platform APIs, SDKs, setup and restrictions |
| `ev-google-maps-documentation` | https://developers.google.com/maps/documentation | Maps, Routes, Places, Environment and Dataset capabilities |
| `ev-google-maps-javascript` | https://developers.google.com/maps/documentation/javascript/overview | Web rendering, markers, styles and Places library |
| `ev-google-maps-pricing` | https://developers.google.com/maps/billing-and-pricing | Usage-based pricing, free caps and billing |
| `ev-google-maps-offline` | https://support.google.com/maps/answer/6291838 | Offline map download and limitations |
| `ev-google-maps-features` | https://support.google.com/maps/answer/6291839 | Saved places, routes, sharing, Street View and measurement |
| REA capture | `catalog/rea/google/google-maps.md` | Dated public-surface observation only |

# 14. Open questions and exclusions

- Full signed-in consumer workflows and live navigation were not captured.
- Traffic, transit, Street View and place-data coverage varies by region and contract.
- API billing, quotas, attribution and data-use restrictions must be checked for the target service.
- Internal routing, imagery, tile, ranking and geospatial data systems are not public evidence here.
- Open-source alternatives require separate current license, maintenance and security reviews.
- No API key, billing account, private location data or production integration was accessed.

# 15. Research history

- **2026-11-03:** reviewed official Google Maps Platform, Google Maps Help and Maps JavaScript documentation; reconciled them with the existing REA public-surface capture; promoted the dossier from `pending` to `researched` with verified evidence and explicit unknowns.
- **Next review:** 2027-02-03, or sooner if Maps Platform pricing, APIs, terms or public consumer capabilities change materially.
