---
schema_version: "1.0"
id: "google-analytics"
company_id: "google"
name: "Google Analytics"
aliases: ["GA4"]
product_type: "business_software"
categories: ["web-analytics", "product-analytics", "measurement"]
lifecycle_status: "active"
official_url: "https://analytics.google.com/"
official_docs_url: "https://developers.google.com/analytics"
official_source_urls: ["https://support.google.com/analytics/answer/9212670", "https://developers.google.com/analytics", "https://developers.google.com/analytics/devguides/config/admin/v1", "https://developers.google.com/analytics/devguides/collection/protocol/ga4"]
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
command_source: "https://developers.google.com/analytics"
---
# 1. Executive summary

Google Analytics is Google's web and app measurement platform. It collects events from tagged web and app streams, produces realtime and detailed reports, and exposes reporting, configuration and server-to-server measurement interfaces.

# 2. Product identity and ownership

- **Official name:** Google Analytics
- **Company:** Google LLC, part of Alphabet Inc.
- **Lifecycle:** active
- **Canonical website:** https://analytics.google.com/
- **Identity evidence:** Google's Help and developer documentation identify Analytics reports, properties, streams, events and APIs as the product's core model.

# 3. Product capabilities

- Collect web and app events and show realtime, overview and detail reports.
- Analyze acquisition, engagement, retention, monetization and user behavior.
- Configure accounts, properties, streams, dimensions, metrics, audiences and links.
- Query data with the Analytics Data API and manage configuration with the Admin API.
- Send server-side or offline events through the GA4 Measurement Protocol.

# 4. Technical architecture

The public model includes accounts, properties, web/app data streams, events, user properties, dimensions, metrics and reports. Google operates collection, processing, attribution, storage and reporting infrastructure; internal processing and ranking details are proprietary.

# 5. User workflows

A team creates a property and stream, installs tagging or an SDK, defines events and permissions, then uses reports to inspect traffic, engagement and conversions. Developers can query reports, manage configuration and supplement client-side collection with server-side Measurement Protocol events.

# 6. Pricing and access

Access and limits depend on Analytics properties, account permissions, region and whether the property uses standard or 360 capabilities. APIs require authorization and property access. This pass does not assert current pricing, quota or a particular property's entitlement.

# 7. API and integration surface

Google documents the Analytics Data API for reporting, the Admin API for account/property configuration and the GA4 Measurement Protocol for HTTPS event collection. Measurement Protocol supplements tagging or Firebase collection rather than replacing it, and malformed payloads may still receive a 2xx response, so validation is required.

# 8. Existing open-source alternatives

- **Matomo (GPL-3.0):** self-hosted web analytics with data ownership and reporting.
- **Plausible Analytics (AGPL-3.0):** lightweight privacy-oriented web analytics.
- **Umami (MIT):** self-hosted privacy-focused web analytics and dashboards.

# 9. Alternative comparison

These projects cover core web analytics and ownership of collected data. They do not reproduce Google's cross-platform ecosystem, GA4 event model, Ads/Firebase integrations, managed scale, attribution behavior or APIs. Coverage is partial and depends on the target workflow.

# 10. Missing capabilities and opportunity analysis

A replacement would need consent-aware collection, web/app SDKs, event governance, identity and session modeling, reporting, attribution, retention controls, exports, integrations, permissions and a reliable migration path from GA4 schemas.

# 11. REA implementation strategy

Start with privacy-preserving web analytics and an explicit event schema. Use Matomo, Plausible or Umami where their capabilities fit; add app collection, reporting APIs and integrations only after defining consent, retention, ownership and compatibility requirements.

# 12. Security, privacy, and compliance

Analytics can contain identifiers, device data, location, behavior and conversion information. Verify consent signals, IP and user-data handling, retention, deletion, access roles, API scopes, exports and data residency before deploying an alternative.

# 13. Sources and evidence

- [Overview of Google Analytics reports](https://support.google.com/analytics/answer/9212670) — official report model and workflows.
- [Google Analytics for developers](https://developers.google.com/analytics) — official Data API, Admin API and Measurement Protocol entry points.
- [Google Analytics Admin API](https://developers.google.com/analytics/devguides/config/admin/v1) — official configuration surface.
- [Measurement Protocol](https://developers.google.com/analytics/devguides/collection/protocol/ga4) — official server-side event collection constraints.

# 14. Open questions

- Is the target web analytics, app analytics or cross-platform measurement?
- Which GA4 event, report, audience and integration semantics require compatibility?
- What consent, retention, deletion and data-residency requirements govern deployment?

# 15. Research history

Record updated 2026-11-03 from official Google Analytics Help and Google Developers sources. Status: `researched`; current quotas, pricing and proprietary processing remain outside this pass.
