---
schema_version: "1.0"
id: "microsoft-onedrive"
company_id: "microsoft"
name: "Microsoft OneDrive"
aliases:
  - "OneDrive"
  - "OneDrive for Business"
product_type: "storage"
categories:
  - "storage"
  - "file-sharing"
  - "sync"
  - "collaboration"
official_url: "https://www.microsoft.com/en-us/microsoft-365/onedrive/online-cloud-storage"
official_docs_url: "https://learn.microsoft.com/en-us/onedrive"
official_source_urls:
  - "https://www.microsoft.com/en-us/microsoft-365/onedrive/online-cloud-storage"
  - "https://learn.microsoft.com/en-us/onedrive"
  - "https://learn.microsoft.com/en-us/graph/api/resources/onedrive"
  - "https://learn.microsoft.com/en-us/onedrive/developer/"
  - "https://support.microsoft.com/en-us/onedrive/store-your-work-files-on-onedrive"
lifecycle_status: "active"
research_status: "researched"
research_confidence: "verified"
alternative_status: "partial"
alternative_coverage: "unknown"
opportunity_status: "reuse_existing"
last_researched_at: "2026-11-03T00:00:00Z"
last_verified_at: "2026-11-03T00:00:00Z"
next_review_at: "2027-02-03T00:00:00Z"
research_version: 1
evidence:
  - id: "ev-microsoft-onedrive-identity"
    url: "https://www.microsoft.com/en-us/microsoft-365/onedrive/online-cloud-storage"
    source_type: "official_website"
    publisher: "Microsoft"
    title: "Microsoft OneDrive"
    accessed_at: "2026-11-03T00:00:00Z"
    claim: "OneDrive is Microsoft's cloud file storage, sharing and synchronization product."
    claim_type: "product_identity"
    supporting_excerpt_or_summary: "The official product page describes secure cloud storage, file access, sharing, editing and device support."
    reliability: "primary"
    verification_status: "verified"
  - id: "ev-microsoft-onedrive-graph"
    url: "https://learn.microsoft.com/en-us/graph/api/resources/onedrive"
    source_type: "developer_documentation"
    publisher: "Microsoft Learn"
    title: "Working with files in Microsoft Graph"
    accessed_at: "2026-11-03T00:00:00Z"
    claim: "Microsoft Graph exposes Drive and DriveItem resources for OneDrive files, folders, sharing and related operations."
    claim_type: "api_surface"
    supporting_excerpt_or_summary: "The official API documentation describes drives, DriveItems, paths, sharing links, permissions and common OneDrive resources."
    reliability: "primary"
    verification_status: "verified"
  - id: "ev-microsoft-onedrive-platform"
    url: "https://learn.microsoft.com/en-us/onedrive/developer/"
    source_type: "developer_documentation"
    publisher: "Microsoft Learn"
    title: "OneDrive and SharePoint developer platform"
    accessed_at: "2026-11-03T00:00:00Z"
    claim: "The OneDrive developer platform covers personal OneDrive, OneDrive for Business and SharePoint Online through Microsoft Graph and related components."
    claim_type: "api_surface"
    supporting_excerpt_or_summary: "Microsoft documents Graph integration, the file picker, file handlers and shared access patterns across OneDrive and SharePoint."
    reliability: "primary"
    verification_status: "verified"
  - id: "ev-microsoft-onedrive-sync"
    url: "https://support.microsoft.com/en-us/onedrive/store-your-work-files-on-onedrive"
    source_type: "official_website"
    publisher: "Microsoft Support"
    title: "Store your work files on OneDrive"
    accessed_at: "2026-11-03T00:00:00Z"
    claim: "OneDrive documents upload, sharing, collaboration, offline access and sync to computer file systems."
    claim_type: "capability"
    supporting_excerpt_or_summary: "Microsoft Support describes storing, sharing, editing, accessing across devices and synchronizing files for offline work."
    reliability: "primary"
    verification_status: "verified"
  - id: "ev-microsoft-onedrive-api-differences"
    url: "https://learn.microsoft.com/en-us/onedrive/developer/rest-api/concepts/direct-endpoint-differences"
    source_type: "developer_documentation"
    publisher: "Microsoft Learn"
    title: "OneDrive API endpoint differences"
    accessed_at: "2026-11-03T00:00:00Z"
    claim: "Microsoft documents different endpoint and permission behavior for personal OneDrive, OneDrive for Business and SharePoint scenarios, with Graph as the preferred endpoint."
    claim_type: "status"
    supporting_excerpt_or_summary: "The official documentation distinguishes endpoint namespaces, discovery and permission scopes across OneDrive variants."
    reliability: "primary"
    verification_status: "verified"
---

# 1. Executive summary

Microsoft OneDrive is Microsoft's cloud file storage, sharing and synchronization product. Official evidence verifies its product identity, Drive and DriveItem API model, file-picker and file-handler integrations, sharing and permission surfaces, and desktop sync workflows. OneDrive personal, OneDrive for Business and SharePoint document libraries are related but have different identity, endpoint and permission behavior.

# 2. Product identity and ownership

- **Canonical name:** Microsoft OneDrive
- **Stable catalog ID:** `microsoft-onedrive`
- **Company:** Microsoft
- **Product type:** cloud storage and file collaboration
- **Official product URL:** https://www.microsoft.com/en-us/microsoft-365/onedrive/online-cloud-storage
- **Official documentation:** https://learn.microsoft.com/en-us/onedrive
- **Lifecycle:** active at review time
- **Identity evidence:** `ev-microsoft-onedrive-identity`, plus `catalog/rea/microsoft/microsoft-onedrive.md`

OneDrive personal, OneDrive for Business and SharePoint Online are not collapsed into identical contracts here. The shared Graph model is documented, while account and permission differences remain explicit.

# 3. Product capabilities

1. **Cloud file storage:** files and folders are stored in logical drives and accessed across supported devices.
2. **Sharing and permissions:** DriveItems can be shared through links, invitations and permission scopes.
3. **Synchronization:** Microsoft Support documents sync to Windows and macOS file systems and offline access.
4. **Developer integration:** Graph exposes Drive and DriveItem resources, paths, children, shares, thumbnails and content operations.
5. **Embedding and extensions:** the developer platform documents a file picker and file handlers for opening, previewing or manipulating content.

Plan limits, tenant policies, account type, regional behavior and feature availability are not assumed from these public pages.

# 4. Technical architecture

**Verified public model:** OneDrive and SharePoint file stores are represented through logical `Drive` containers and `DriveItem` resources. Microsoft Graph is the preferred common endpoint for personal OneDrive, OneDrive for Business and SharePoint Online, while direct endpoints remain relevant in some scenarios.

**Not verified:** storage internals, replication, encryption implementation, malware scanning, conflict-resolution algorithms, indexing, thumbnail generation, retention enforcement and internal service topology.

# 5. User workflows

Official evidence supports uploading, browsing, sharing, editing, synchronizing and working offline. Developer documentation supports addressing items by ID or path, listing children, creating sharing links, selecting files with the picker and reacting to changes with APIs such as delta and webhooks.

Signed-in tenant administration, complex sharing inheritance, quota behavior, conflict resolution, recovery, compliance holds and every client-platform workflow require separate environment-specific verification.

# 6. Pricing and access

OneDrive access and storage depend on account type, plan, tenant and platform. No account, tenant, private file, paid plan or production Graph permission was accessed during this research.

# 7. API and integration surface

- Microsoft Graph `Drive` and `DriveItem` resources.
- User, group, site and shared-drive addressing.
- Path and ID addressing, children, content, thumbnails and sharing links.
- File picker, file handlers, delta synchronization and webhooks.
- Permission scopes that differ between personal and business/SharePoint contexts.

Before integration, verify account type, consent, least-privilege scopes, tenant policy, item permissions, upload limits, webhook lifecycle and data-retention requirements.

# 8. Existing open-source alternatives

Potential foundations include Nextcloud, ownCloud, Seafile and Pydio Cells. They provide self-hosted file storage, sharing and synchronization, but their APIs, identity, collaboration, mobile clients, policy controls and operational model differ from OneDrive.

# 9. Alternative comparison

Alternative coverage is **partial**. Self-hosted file platforms can cover storage, sharing and sync, but none is verified here as a drop-in replacement for Microsoft's Graph resource model, Office integration, SharePoint relationship, tenant controls, account ecosystem and client behavior.

# 10. Missing capabilities and opportunity analysis

A bounded independent implementation should choose a self-hosted file platform or build a focused storage and sharing layer. Reproducing OneDrive's global storage, Microsoft 365 integration, Graph compatibility and enterprise compliance plane is out of scope without separate research.

# 11. REA implementation strategy

Use the REA capture only for public OneDrive product-surface observations. For an independent implementation, compare Nextcloud, ownCloud, Seafile and Pydio Cells against the declared storage, identity, sharing, sync, API and compliance requirements. Do not copy Microsoft branding, protected assets or proprietary service behavior.

# 12. Security, privacy and compliance

Files, sharing links, access tokens, metadata, previews and tenant information are sensitive. Any independent implementation must define encryption, access control, sharing-link expiry, audit logs, malware handling, deletion, retention, backups, webhook authentication and incident response. No compliance certification or security parity claim is made.

# 13. Sources and evidence

| Evidence ID | Source | Scope |
|---|---|---|
| `ev-microsoft-onedrive-identity` | https://www.microsoft.com/en-us/microsoft-365/onedrive/online-cloud-storage | Product identity and public product surface |
| `ev-microsoft-onedrive-graph` | https://learn.microsoft.com/en-us/graph/api/resources/onedrive | Drive, DriveItem, sharing and addressing model |
| `ev-microsoft-onedrive-platform` | https://learn.microsoft.com/en-us/onedrive/developer/ | Developer platform, picker and file handlers |
| `ev-microsoft-onedrive-sync` | https://support.microsoft.com/en-us/onedrive/store-your-work-files-on-onedrive | Sync, sharing and offline workflows |
| `ev-microsoft-onedrive-api-differences` | https://learn.microsoft.com/en-us/onedrive/developer/rest-api/concepts/direct-endpoint-differences | Endpoint and permission distinctions |
| REA capture | `catalog/rea/microsoft/microsoft-onedrive.md` | Dated public product-page observation |

# 14. Open questions and exclusions

- Personal, business and SharePoint behavior must be tested separately.
- Storage internals, encryption implementation, compliance processing and conflict resolution are not established here.
- Full signed-in, tenant, sharing, mobile, desktop-client and recovery workflows were not captured.
- Alternative platforms require separate current license, version, maintenance and security reviews.

# 15. Research history

- **2026-11-03:** reviewed official OneDrive product, Microsoft Learn, Graph and Support sources; promoted the candidate after verifying identity, public storage/API/sync surfaces and explicit account-type unknowns.
- **Next review:** 2027-02-03, or sooner if OneDrive, Graph, permissions or sync documentation changes materially.
