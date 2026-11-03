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
official_source_urls: ["https://www.microsoft.com/en-us/microsoft-365", "https://learn.microsoft.com/en-us/microsoft-365/"]
research_status: "pending"
research_confidence: "unverified"
alternative_status: "partial"
alternative_coverage: "unknown"
opportunity_status: "research_further"
last_researched_at: null
last_verified_at: 2026-11-03T00:00:00Z
next_review_at: null
research_version: 1
inventory_status: "verified"
command_status: "documented"
command_source: "https://learn.microsoft.com/en-us/graph/overview"
---
# 1. Executive summary

Microsoft 365 bundles the Office applications with cloud storage, email and collaboration under a per-user subscription; the client applications are proprietary and the service is observed through documented APIs.


# 2. Product identity and ownership

**Official name:** Microsoft 365
**Company:** Microsoft Corporation
**Former name:** Office 365 (business plans)
**Lifecycle status:** active
**Official website:** https://www.microsoft.com/en-us/microsoft-365

# 3. Product capabilities

- Word, Excel, PowerPoint and Outlook for desktop, web and mobile
- OneDrive storage with sharing and version history
- Teams chat and meetings included in the subscription
- Microsoft 365 admin center for users, licences and policy

# 4. Technical architecture

The suite is a set of proprietary client applications plus hosted services. Public documentation covers the service APIs and admin surfaces, not the implementations.

# 5. User workflows

A user signs in with a work or personal account, edits documents in a browser or desktop client, stores files in OneDrive and collaborates in Teams. Administrators assign licences and policies in the admin center.

# 6. Pricing and access

Sold as per-user subscriptions across consumer, business and enterprise plans; the catalog records the plans' existence, not current prices.

# 7. API and integration surface

Official surface: Microsoft Graph, documented at https://learn.microsoft.com/en-us/graph/overview, exposes mail, files, calendar and user objects. Command status: documented, source is the official Graph documentation.

# 8. Existing open-source alternatives

LibreOffice (MPL-2.0) covers offline documents; ONLYOFFICE (AGPL-3.0) adds a self-hosted collaboration server; Nextcloud (AGPL-3.0) covers files, calendar and office integration.

# 9. Alternative comparison

Each alternative covers a slice and none reproduces the tenant, licence and identity model that defines the subscription. Comparisons here are capability-based, not parity claims.

# 10. Missing capabilities and opportunity analysis

Integration is the gap: files, mail, chat, documents and identity under one administered tenant. That is a build opportunity for a composed stack.

# 11. RAE implementation strategy

Compose existing projects (Nextcloud + ONLYOFFICE + an open mail/chat server) behind a single identity provider, and document the integration and its limits.

# 12. Security, privacy, and compliance

Document and mail data are sensitive; a self-hosted alternative should default to no third-party telemetry, encryption at rest and explicit retention.

# 13. Sources and evidence

- https://www.microsoft.com/en-us/microsoft-365
- https://learn.microsoft.com/en-us/microsoft-365/

# 14. Open questions

- Which integration gaps matter most for a small organisation: identity, mail or documents?
- Can Nextcloud and ONLYOFFICE be administered through one control plane?

# 15. Research history

Record created 2026-11-03 from public official sources during the FAANG+Microsoft inventory expansion. Status: `pending`; nothing beyond official documentation and public announcements is asserted.
