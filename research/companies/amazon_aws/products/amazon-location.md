---
schema_version: "1.0"
id: "amazon-location"
company_id: "amazon_aws"
name: "Amazon Location Service"
aliases:
  - "Amazon Location"
  - "AWS Location Service"
product_type: "cloud_infrastructure"
categories:
  - "maps"
  - "places"
  - "routes"
  - "geofencing"
  - "asset-tracking"
lifecycle_status: "active"
official_url: "https://aws.amazon.com/location/"
official_docs_url: "https://docs.aws.amazon.com/location/latest/developerguide/"
official_source_urls:
  - "https://aws.amazon.com/location/"
  - "https://aws.amazon.com/documentation-overview/location/"
  - "https://docs.aws.amazon.com/location/latest/developerguide/"
  - "https://docs.aws.amazon.com/location/latest/APIReference/"
  - "https://docs.aws.amazon.com/cli/latest/reference/location/"
research_status: "pending"
research_confidence: "unverified"
alternative_status: "none_verified"
alternative_coverage: "unknown"
opportunity_status: "research_further"
last_researched_at: null
last_verified_at: null
next_review_at: null
research_version: 1
---

# 1. Executive summary

Amazon Location Service is AWS's managed location platform for adding maps, places, routes, device tracking and geofencing to applications. It exposes separate APIs and resources for maps, search/geocoding, route planning, trackers and geofences, with authentication through API keys, Cognito or IAM.

# 2. Product identity and ownership

- **Official name:** Amazon Location Service
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Product page:** https://aws.amazon.com/location/

# 3. Product capabilities

- Render dynamic and static maps with application overlays.
- Search places and points of interest, geocode and reverse-geocode addresses.
- Calculate routes, optimize stops and account for traffic or vehicle restrictions.
- Track device/asset positions in real time and historically.
- Define geofences and trigger events when devices enter or exit boundaries.
- Use SDKs, API keys, Cognito/IAM, CloudTrail and AWS service integrations.

# 4. Technical architecture

The public surface includes map resources, place indexes, route calculators, trackers, geofence collections, device positions, event streams, API keys, styles, providers, quotas and regional endpoints. Map/place/route provider data and attribution constraints require explicit REA verification.

# 5. User workflows

Users create the relevant map/place/route resources, configure authentication, call APIs or SDKs from applications, publish positions to trackers, define geofence polygons, subscribe to events and display results on web/mobile maps. Tracking and geofencing workflows must account for data privacy, event latency and provider attribution.

# 6. Pricing and access

Location is an AWS pay-as-you-go service with request-based billing and a documented free-tier/trial period subject to quotas and account conditions. Current pricing, provider, Region and data-retention behavior require verification from official pricing documentation.

# 7. API and integration surface

- Developer guide: https://docs.aws.amazon.com/location/latest/developerguide/
- API reference: https://docs.aws.amazon.com/location/latest/APIReference/
- AWS CLI namespace: `aws location`
- CLI reference: https://docs.aws.amazon.com/cli/latest/reference/location/
- Integrations include Cognito, IAM, EventBridge, CloudWatch, CloudTrail, S3 and web/mobile SDKs.
- Exact provider, route, geofence, tracker, quota and authentication behavior requires REA capture.

# 8. Existing open-source alternatives

Potentially relevant alternatives include OpenStreetMap, MapLibre, MapLibre Native, Valhalla, OSRM, GraphHopper, Pelias, Nominatim, TileServer GL, Traccar and PostGIS. These cover different map, routing, geocoding, tracking or geofencing surfaces and are not claimed equivalents to the managed AWS service.

# 9. Alternative comparison

Open-source geospatial stacks can provide maps, tiles, routing, search and tracking, but a clean-room equivalent would still need to combine managed provider data, APIs, attribution, authentication, global scale, geofences, trackers and operational guarantees.

# 10. Missing capabilities and opportunity analysis

REA should map map styles/providers, place indexes, geocoding, route options and restrictions, tracker updates, geofence geometry/events, SDK behavior, authentication, quotas, Regions, data attribution, privacy and failure recovery.

# 11. REA implementation strategy

Use the official Amazon Location product page, developer guide, API reference, CLI reference and provider/attribution documentation as research surfaces. A clean-room implementation should use independently licensed geospatial data and software, document provider and routing differences, and avoid copying AWS control-plane or proprietary provider data.

# 12. Security, privacy, and compliance

Research must verify API-key lifecycle, IAM/Cognito permissions, device identity, tracker/geofence data, encryption, CloudTrail, event authorization, location privacy, retention/deletion, provider terms and data residency.

# 13. Evidence register

- https://aws.amazon.com/location/ — official maps, places, routes, trackers and geofences scope.
- https://aws.amazon.com/location/getting-started/ — official setup and API-selection workflow.
- https://docs.aws.amazon.com/location/latest/developerguide/ — official developer guide.
- https://docs.aws.amazon.com/location/latest/APIReference/ — official API surface.
- https://docs.aws.amazon.com/cli/latest/reference/location/ — official CLI surface.

# 14. Unknowns

- Complete provider, map, place, route, tracker and geofence matrix.
- Exact event latency, quotas, Region and data-retention behavior.
- SDK, API-key, Cognito/IAM and attribution edge cases.
- Current pricing and free-tier conditions.
- Verified open-source alternatives for the complete managed workflow.

# 15. Research status

`pending`: official identity and broad scope are established; complete REA capture, command verification, provider/attribution analysis, alternatives and acceptance review remain outstanding.
