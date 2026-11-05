---
schema_version: "1.0"
id: "microsoft-365"
company_id: "microsoft"
name: "Microsoft 365"
aliases: ["Office 365", "M365", "Microsoft Office"]
product_type: "consumer_subscription"
categories: ["productivity", "collaboration", "subscription"]
lifecycle_status: "active"
official_url: "https://www.microsoft.com/en-us/microsoft-365"
official_docs_url: "https://learn.microsoft.com/en-us/microsoft-365/"
official_source_urls: ["https://www.microsoft.com/en-us/microsoft-365", "https://www.microsoft.com/en-us/microsoft-365/products-apps-services", "https://learn.microsoft.com/en-us/microsoft-365/admin/admin-overview/what-is-microsoft-365-for-business", "https://learn.microsoft.com/en-us/graph/overview"]
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
command_source: "https://learn.microsoft.com/en-us/graph/overview"
---
# 1. Executive summary

Microsoft 365 is Microsoft's subscription platform for productivity and collaboration. It packages licensed applications and hosted services; it is not a single application and does not replace the separate catalog entries for OneDrive or Teams.

# 2. Product identity and ownership

**Official name:** Microsoft 365  
**Company:** Microsoft Corporation  
**Former name:** Office 365 for several plan families  
**Lifecycle status:** active  
**Official website:** https://www.microsoft.com/en-us/microsoft-365

Microsoft's product directory and business documentation identify Microsoft 365 as a family of applications and services with consumer, business and enterprise plan variants.

# 3. Product capabilities

- Licensed Word, Excel, PowerPoint, Outlook and OneNote applications, with plan-specific availability.
- Microsoft 365 cloud services including OneDrive, Outlook/Exchange, SharePoint, Teams, Planner, Calendar and related services.
- Web, desktop and mobile access, subject to plan and account type.
- Administrative surfaces for users, licenses, policies, security and compliance in business and enterprise plans.

OneDrive and Teams are cataloged separately because they have their own product identity, documentation and API surfaces. Their inclusion in a Microsoft 365 plan does not make them duplicate entries.

# 4. Technical architecture

Microsoft 365 is a managed, proprietary SaaS platform composed of client applications, hosted services, identity and administrative controls. Microsoft Graph provides a documented API gateway to Microsoft 365 data and services; it is an integration surface, not the implementation of the suite.

# 5. User workflows

A person or organisation selects a plan, authenticates with a Microsoft account or organisational identity, assigns licenses where applicable, and uses the licensed applications and hosted services. The exact applications, quotas, administration and compliance features depend on plan and tenant configuration.

# 6. Pricing and access

Microsoft publishes separate consumer, business and enterprise plans. This dossier verifies the existence and structure of those plan families, not current prices, regional availability or entitlement for a particular tenant.

# 7. API and integration surface

Microsoft Graph is the documented integration surface for Microsoft 365 data and services. Its documented core services include OneDrive, Outlook/Exchange, Calendar, Excel, SharePoint, Teams, Planner, To Do and related identity, security and compliance resources. Authentication and tenant permissions are required; no authenticated tenant access was assumed here.

# 8. Existing open-source alternatives

- LibreOffice (MPL-2.0): desktop office applications.
- ONLYOFFICE (AGPL-3.0): office editors and self-hosted collaboration components.
- Nextcloud (AGPL-3.0): self-hosted files, calendar and integrations.

# 9. Alternative comparison

These alternatives cover portions of Microsoft 365. None is verified here as a drop-in replacement for Microsoft's combined application catalog, hosted services, identity, licensing, administration and compliance model.

# 10. Missing capabilities and opportunity analysis

The main gap is integration: a single self-hosted control plane would need to combine office editing, files, mail/calendar, collaboration, identity, licensing and administration while preserving clear security boundaries.

# 11. REA implementation strategy

Compose existing open-source components only after selecting a narrow use case. Start with identity, document editing and file storage; add collaboration or mail only when the integration boundary, ownership and security model are defined.

# 12. Security, privacy, and compliance

Microsoft 365 data and administrative controls are tenant- and plan-dependent. Do not infer compliance, retention, permissions or data residency from the public product page. Any alternative stack must define authentication, authorization, encryption, backups, retention and audit evidence explicitly.

# 13. Sources and evidence

- [Microsoft 365](https://www.microsoft.com/en-us/microsoft-365) — official product and plan surface.
- [Microsoft 365 products, apps and services](https://www.microsoft.com/en-us/microsoft-365/products-apps-services) — official product directory.
- [Microsoft 365 for business overview](https://learn.microsoft.com/en-us/microsoft-365/admin/admin-overview/what-is-microsoft-365-for-business) — official plan and application documentation.
- [Microsoft Graph overview](https://learn.microsoft.com/en-us/graph/overview) — official API and core-service documentation.

# 14. Open questions

- Which plan family and region should a future comparison cover?
- Which Microsoft 365 service boundary should be evaluated next: identity, documents, mail/calendar or collaboration?
- Which alternative capability is important enough to validate with a separate technical test?

# 15. Research history

Record updated 2026-11-03 from official Microsoft product and documentation sources. Status: `researched`; the suite boundary is verified, while plan-specific pricing, entitlements and authenticated tenant behavior remain outside this pass.
