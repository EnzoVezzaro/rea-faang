---
schema_version: "1.0"
id: "google-ads"
company_id: "google"
name: "Google Ads"
aliases: ["Ads"]
product_type: "advertising_technology"
categories: ["advertising", "campaign-management", "measurement"]
lifecycle_status: "active"
official_url: "https://ads.google.com/"
official_docs_url: "https://developers.google.com/google-ads/api"
official_source_urls: ["https://developers.google.com/google-ads/api/docs/get-started/introduction", "https://developers.google.com/google-ads/api/docs/concepts/api-structure", "https://developers.google.com/google-ads/api/docs/ads/overview", "https://developers.google.com/google-ads/api/docs/api-policy/access-levels"]
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
command_source: "https://developers.google.com/google-ads/api/docs/get-started/introduction"
---
# 1. Executive summary

Google Ads is Google's online advertising platform for creating, delivering, measuring and optimizing campaigns across Google networks. It combines advertiser accounts, campaigns, ad groups, ads, assets, budgets, targeting, bidding, conversions and reporting with an auction and policy ecosystem.

# 2. Product identity and ownership

- **Official name:** Google Ads
- **Company:** Google LLC, part of Alphabet Inc.
- **Lifecycle:** active
- **Canonical website:** https://ads.google.com/
- **Identity evidence:** Google's Ads API documentation identifies customer accounts, campaigns, ad groups, ads, assets, budgets, bidding and reporting as the core model.

# 3. Product capabilities

- Create and manage Search, Display, Shopping, Video, App, Demand Gen and Performance Max campaigns.
- Configure budgets, targeting, assets, keywords, ad groups and bidding strategies.
- Measure conversions and query performance metrics, segments and resources with GAQL.
- Manage account hierarchies, users, links, audiences and campaign experiments.
- Automate account operations through the Ads API, scripts, bulk tools and Editor.

# 4. Technical architecture

The public API is resource-oriented and organizes customers into account hierarchies, campaigns, ad groups and ads. Google exposes gRPC and REST interfaces, client libraries, reporting services and mutation services. Auction, ranking, fraud, policy enforcement and inventory infrastructure are proprietary.

# 5. User workflows

An advertiser creates or selects a customer account, defines a campaign objective and budget, configures targeting and creative assets, then submits ads for policy review. Campaigns serve when eligible, and the advertiser monitors metrics, conversions and costs, adjusting bids, assets and budgets.

# 6. Pricing and access

Advertisers pay for qualifying interactions or delivery according to campaign type, bidding and auction conditions. API access requires Google Cloud project credentials, OAuth and current project access levels; production access and operation limits are controlled by Google's policy. This pass does not assert current prices, account eligibility or campaign performance.

# 7. API and integration surface

The Google Ads API supports account management, campaign and ad mutation, GAQL reporting, conversion uploads, bidding, audiences, assets, experiments and links to other Google services. Google documents gRPC and REST interfaces, OAuth credentials and project-level access controls. API credentials and customer access must never be stored in this repository.

# 8. Existing open-source alternatives

- **Revive Adserver (GPL-2.0):** self-hosted ad-serving and campaign-management software.

# 9. Alternative comparison

Revive covers portions of self-hosted ad serving, inventory and campaign delivery. It does not reproduce Google's advertiser demand, search/display/video inventory, auction, targeting scale, measurement ecosystem, policy enforcement or Ads API. Coverage is partial; the marketplace is not replicated.

# 10. Missing capabilities and opportunity analysis

A replacement would need advertiser and publisher sides, inventory and auction logic, campaign and creative workflows, targeting, conversion measurement, billing, fraud prevention, policy review, privacy controls, reporting and integrations with search, video and commerce surfaces.

# 11. REA implementation strategy

Start with a bounded first-party ad server or sponsorship workflow using Revive or a custom integration, with explicit inventory, consent, reporting and billing boundaries. Do not claim Google Ads compatibility or access to Google inventory without licensed APIs, account authorization and policy review.

# 12. Security, privacy, and compliance

Advertising systems process identifiers, behavioral signals, conversion data, payment information and potentially sensitive audience attributes. Verify consent, data minimization, access roles, conversion uploads, retention, regional requirements, fraud controls and ad-policy enforcement before deployment.

# 13. Sources and evidence

- [Introduction to the Google Ads API](https://developers.google.com/google-ads/api/docs/get-started/introduction) — official account, campaign, reporting and automation surface.
- [Google Ads API structure](https://developers.google.com/google-ads/api/docs/concepts/api-structure) — official resource hierarchy and services.
- [Ads overview](https://developers.google.com/google-ads/api/docs/ads/overview) — official ad resources, formats and policy validation.
- [Access levels and permissible use](https://developers.google.com/google-ads/api/docs/api-policy/access-levels) — official API access and operation limits.

# 14. Open questions

- Is the target a first-party ad server, an ad marketplace or an Ads API integration?
- What consent, billing, fraud, policy and measurement requirements apply?
- Which campaign types, reporting fields and conversion semantics require compatibility tests?

# 15. Research history

Record updated 2026-11-03 from official Google Ads API sources. Status: `researched`; auction internals, current commercial terms, account eligibility and policy decisions remain outside this pass.
