---
schema_version: "1.0"
id: "google-workspace"
company_id: "google"
name: "Google Workspace"
aliases: ["G Suite", "Google Apps"]
product_type: "productivity_application"
categories: ["productivity", "collaboration", "subscription"]
lifecycle_status: "active"
official_url: "https://workspace.google.com/"
official_docs_url: "https://developers.google.com/workspace"
official_source_urls: ["https://workspace.google.com/", "https://developers.google.com/workspace/products", "https://developers.google.com/workspace/guides/get-started", "https://developers.google.com/workspace/admin/overview"]
research_status: "researched"
research_confidence: "verified"
alternative_status: "partial"
alternative_coverage: "unknown"
opportunity_status: "integrate_existing"
last_researched_at: 2026-11-03T00:00:00Z
last_verified_at: 2026-11-03T00:00:00Z
next_review_at: 2027-02-03T00:00:00Z
research_version: 2
inventory_status: "verified"
command_status: "documented"
command_source: "https://developers.google.com/workspace/guides/get-started"
---
# 1. Executive summary

Google Workspace is Google's hosted productivity and collaboration suite. It combines services such as Gmail, Calendar, Meet, Chat, Drive, Docs, Sheets and Slides with identity, administration and developer APIs. The component products retain separate catalog entries because they have their own identities and API surfaces.

# 2. Product identity and ownership

**Official name:** Google Workspace  
**Company:** Google LLC, part of Alphabet Inc.  
**Former names:** Google Apps and G Suite  
**Lifecycle status:** active  
**Official website:** https://workspace.google.com/

Google's administrator documentation treats Workspace as a managed collection of core and additional services, with editions and controls that vary by organisation and plan.

# 3. Product capabilities

- Gmail email, Calendar scheduling and Meet video meetings.
- Drive storage and sharing, with Docs, Sheets, Slides and related editors.
- Chat, Tasks, Forms, Sites, Keep, Vault and other plan- or configuration-dependent services.
- Admin Console, identity, device and user management, policy controls and audit features.
- Apps Script, REST APIs, add-ons, Chat apps and Marketplace integrations.

Drive, Docs, Meet and Calendar are separate catalog entries where present. Their inclusion in Workspace describes suite composition; it does not duplicate their individual product records.

# 4. Technical architecture

Workspace is a multi-tenant hosted suite with service-specific applications, identity, storage, administration and API surfaces. Public documentation describes APIs, authentication, add-ons and administrative controls; proprietary service implementation is not asserted.

# 5. User workflows

An organisation selects an edition, configures users and services in the Admin Console, and uses the enabled applications for mail, calendars, documents, files, chat and meetings. Developers create a Google Cloud project, enable required APIs, configure OAuth and credentials, then extend or integrate Workspace.

# 6. Pricing and access

Workspace has multiple editions and plan-dependent capabilities. This research verifies the suite structure and access model, not current prices, regional availability, storage quotas or entitlement for a specific domain.

# 7. API and integration surface

Google documents REST APIs, Apps Script, add-ons, Chat apps, Marketplace APIs and the Admin SDK. The official setup flow requires a Google Cloud project, enabled APIs, authentication, OAuth consent and access credentials; no authenticated Workspace domain is assumed here.

# 8. Existing open-source alternatives

- Nextcloud (AGPL-3.0): self-hosted files, calendar, collaboration and integrations.
- ONLYOFFICE (AGPL-3.0): office editors and collaborative document components.
- Collabora Online (MPL-2.0): LibreOffice-based collaborative editing.
- CryptPad (AGPL-3.0): privacy-focused encrypted collaborative documents.

# 9. Alternative comparison

These projects cover portions of Workspace. A composed Nextcloud plus office stack can approximate selected workflows, but no alternative is verified here as a drop-in replacement for the combined email, calendar, files, editors, meetings, identity, administration, retention and API ecosystem.

# 10. Missing capabilities and opportunity analysis

The central gap is the integrated operated suite: real-time editing, mail, calendar, meetings, identity, administration, audit and retention must work together under one coherent policy model.

# 11. REA implementation strategy

Choose one workflow rather than rebuilding Workspace wholesale. Start with identity, files and document collaboration, define mail/calendar and meeting boundaries, then test administration, retention and audit evidence before expanding.

# 12. Security, privacy, and compliance

Mail, files, chats, documents and audit data are sensitive. Do not infer retention, DLP, encryption, residency or compliance from the public product page; verify edition, domain settings, enabled services and administrative policies.

# 13. Sources and evidence

- [Google Workspace](https://workspace.google.com/) — official suite surface.
- [Google Workspace developer products](https://developers.google.com/workspace/products) — official APIs, apps and Admin Console surfaces.
- [Develop on Google Workspace](https://developers.google.com/workspace/guides/get-started) — official integration and authentication setup.
- [Admin SDK API overview](https://developers.google.com/workspace/admin/overview) — official administration APIs.

# 14. Open questions

- Which Workspace edition and region should a future comparison cover?
- Which component workflow should be evaluated first: documents, mail, calendar or meetings?
- What retention and audit requirements would an alternative stack need to satisfy?

# 15. Research history

Record updated 2026-11-03 from official Google Workspace and Google Developers sources. Status: `researched`; plan-specific pricing, quotas, domain settings and authenticated behavior remain outside this pass.
