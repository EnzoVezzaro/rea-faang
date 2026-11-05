---
schema_version: "1.0"
id: "microsoft-teams"
company_id: "microsoft"
name: "Microsoft Teams"
aliases: ["Teams", "Teams Free"]
product_type: "messaging"
categories: ["collaboration", "meetings"]
lifecycle_status: "active"
official_url: "https://www.microsoft.com/en-us/microsoft-teams/group-chat-software"
official_docs_url: "https://learn.microsoft.com/en-us/microsoftteams/"
official_source_urls: ["https://www.microsoft.com/en-us/microsoft-teams/group-chat-software", "https://learn.microsoft.com/en-us/microsoftteams/teams-overview", "https://learn.microsoft.com/en-us/graph/api/resources/teams-api-overview"]
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
command_source: "https://learn.microsoft.com/en-us/graph/api/resources/teams-api-overview"
---
# 1. Executive summary

Microsoft Teams is Microsoft's hosted collaboration and communications product for chat, channels, meetings, calling and shared work. It is tightly integrated with Microsoft 365, but it remains a separate product identity and catalog entry.

# 2. Product identity and ownership

**Official name:** Microsoft Teams  
**Company:** Microsoft Corporation  
**Lifecycle status:** active  
**Official website:** https://www.microsoft.com/en-us/microsoft-teams/group-chat-software

Microsoft's administrator documentation describes Teams as a collaboration workspace built on Microsoft 365 groups and Microsoft Graph, with its own administration, licensing and lifecycle controls.

# 3. Product capabilities

- Persistent direct and channel-based chat.
- Scheduled and ad-hoc meetings, calls, screen sharing and plan-dependent recording or events.
- Shared work through files, tabs, apps, calendars and connected Microsoft 365 services.
- Team, channel, membership, policy, guest and lifecycle administration.

Teams is separate from Microsoft 365 in this catalog because it has its own user-facing identity, admin surface and API resources. Its integration with OneDrive, SharePoint and Microsoft 365 does not make those entries duplicates.

# 4. Technical architecture

Teams is a managed cloud service built on Microsoft 365 groups, Microsoft Graph and Microsoft-operated clients and services. Public documentation describes the collaboration model and APIs, not proprietary implementation details.

# 5. User workflows

An organisation creates or joins a team, configures channels and membership, communicates in chat or meetings, and shares work through connected files and applications. Administrators manage policies, access, lifecycle and compliance according to tenant and license configuration.

# 6. Pricing and access

Teams availability and feature entitlements depend on account type, plan, region and licensing. This research verifies the product and its documented capabilities, not current prices or a particular tenant's entitlement.

# 7. API and integration surface

Microsoft Graph documents Teams resources and operations for teams, channels, members, messages, tabs, apps and meetings. Teams administration is also documented through the Teams admin center and PowerShell. Authentication, permissions and tenant policy are required for real operations.

# 8. Existing open-source alternatives

- Element (AGPL-3.0): Matrix-based chat, rooms and calls with self-hosting options.
- Jitsi (Apache-2.0): self-hosted audio/video meetings and screen sharing.
- Mattermost (MIT): self-hosted team messaging and collaboration.

# 9. Alternative comparison

Element and Mattermost cover persistent team messaging; Jitsi covers meetings. None is verified here as a drop-in replacement for Teams' combined chat, meetings, files, apps, identity, tenant administration and compliance model.

# 10. Missing capabilities and opportunity analysis

The integration boundary is the main gap: a composed open stack must join messaging, meetings, identity, file collaboration, app extensibility, administration and retention without weakening security or auditability.

# 11. REA implementation strategy

Start with one narrow collaboration workflow. Select a chat system and meeting system, connect them through a common identity provider, define file ownership and retention, and test administration and audit evidence before claiming parity.

# 12. Security, privacy, and compliance

Chat history, recordings, files and membership data are sensitive. Do not infer retention, encryption, compliance or guest access from public marketing pages; verify each tenant policy and document the corresponding controls.

# 13. Sources and evidence

- [Microsoft Teams](https://www.microsoft.com/en-us/microsoft-teams/group-chat-software) — official product surface.
- [Introduction to Microsoft Teams for admins](https://learn.microsoft.com/en-us/microsoftteams/teams-overview) — official architecture and administration documentation.
- [Microsoft Teams Graph API overview](https://learn.microsoft.com/en-us/graph/api/resources/teams-api-overview) — official API surface.

# 14. Open questions

- Which Teams plan and region should a future comparison cover?
- Which collaboration workflow should be tested first: chat, meetings, files or administration?
- What retention and audit requirements would an alternative stack need to satisfy?

# 15. Research history

Record updated 2026-11-03 from official Microsoft product and documentation sources. Status: `researched`; plan-specific licensing, tenant behavior and private implementation details remain outside this pass.
