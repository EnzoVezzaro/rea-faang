---
schema_version: "1.0"
id: "google-drive"
company_id: "google"
name: "Google Drive"
aliases: ["Drive", "My Drive", "Shared drives"]
product_type: "storage"
categories: ["cloud-storage", "file-sync", "file-sharing", "collaboration"]
lifecycle_status: "active"
official_url: "https://drive.google.com/"
official_docs_url: "https://developers.google.com/workspace/drive/api/guides/about-sdk"
official_source_urls: ["https://support.google.com/drive/answer/2424384", "https://developers.google.com/workspace/drive/api/guides/about-sdk", "https://developers.google.com/workspace/drive/api/reference/rest/v3", "https://support.google.com/drive/answer/7166529"]
research_status: "researched"
research_confidence: "verified"
alternative_status: "partial"
alternative_coverage: "unknown"
opportunity_status: "reuse_existing"
last_researched_at: 2026-11-03T00:00:00Z
last_verified_at: 2026-11-03T00:00:00Z
next_review_at: 2027-02-03T00:00:00Z
research_version: 2
inventory_status: "verified"
command_status: "documented"
command_source: "https://developers.google.com/workspace/drive/api/guides/about-sdk"
---
# 1. Executive summary

Google Drive is Google's cloud file-storage, organisation and sharing service. It is included in Google Workspace but has its own product identity, user interface, permissions model and Drive API; it is distinct from Google Cloud Storage.

# 2. Product identity and ownership

**Official name:** Google Drive  
**Company:** Google LLC, part of Alphabet Inc.  
**Lifecycle status:** active  
**Official website:** https://drive.google.com/

Google's official documentation describes personal My Drive storage and shared drives for collaborative ownership and access.

# 3. Product capabilities

- Upload, create, organise, search, download and sync files and folders.
- Share files and folders with viewer, commenter and editor permissions.
- Shared drives for team-owned files and collaborative access.
- Integration with Docs, Sheets, Slides, Meet and third-party applications.
- File metadata, revisions, labels, changes, permissions and activity surfaces through the Drive API.

Drive is a separate catalog entry from Google Workspace because Workspace is the suite and Drive is the storage and file-sharing service inside or alongside that suite.

# 4. Technical architecture

Drive is a managed cloud service with user-owned My Drive locations, shared drives, files, folders, permissions, metadata and revisions. The Drive API is a REST interface for interacting with Drive storage; the service implementation and storage infrastructure are proprietary.

# 5. User workflows

A user uploads or creates a file, organises it in My Drive or a shared drive, shares it with selected people or groups, and edits it through an integrated Google editor or compatible application. Access is governed by file, folder, shared-drive and organisation policies.

# 6. Pricing and access

Storage and feature availability depend on account type, Google Workspace edition, organisation policy and current Google plans. This research verifies the service and access model, not current storage quotas, prices or a particular account's entitlement.

# 7. API and integration surface

The Google Drive API provides files, folders, drives, permissions, revisions, changes, comments, labels and activity-related resources. OAuth 2.0 scopes govern application access; broad Drive scopes are sensitive or restricted and must not be assumed available without user or administrator authorization.

# 8. Existing open-source alternatives

- Nextcloud (AGPL-3.0): self-hosted file storage, sync and sharing.
- Seafile (AGPL-3.0): self-hosted file synchronisation and collaboration.
- ownCloud (AGPL-3.0): self-hosted file sync, sharing and governance.

# 9. Alternative comparison

These alternatives cover storage, synchronisation and sharing. None is verified here as a drop-in replacement for Drive's Google editor integration, shared-drive model, account ecosystem, API surface and managed operation.

# 10. Missing capabilities and opportunity analysis

The main integration gap is the combination of storage, editors, identity, permissions, sharing inheritance, search, activity and third-party application access under one managed service.

# 11. REA implementation strategy

Reuse an existing self-hosted file platform rather than building storage from scratch. Define file ownership, sharing inheritance, sync, editor integration, backups and audit requirements before comparing parity.

# 12. Security, privacy, and compliance

Files and sharing permissions are sensitive. Verify OAuth scopes, organisation sharing policies, shared-drive membership, retention, backups and audit logging; do not infer access from a public Drive URL alone.

# 13. Sources and evidence

- [How to use Google Drive](https://support.google.com/drive/answer/2424384) — official user capabilities.
- [Google Drive API overview](https://developers.google.com/workspace/drive/api/guides/about-sdk) — official service identity and API model.
- [Google Drive API REST reference](https://developers.google.com/workspace/drive/api/reference/rest/v3) — official resources and operations.
- [Share and manage access](https://support.google.com/drive/answer/7166529) — official permissions and sharing behavior.

# 14. Open questions

- Which account type and region should a future storage comparison cover?
- Which workflow matters most: personal sync, shared drives or editor integration?
- What permission, retention and audit requirements must an alternative satisfy?

# 15. Research history

Record updated 2026-11-03 from official Google Drive Help and Google Developers sources. Status: `researched`; plan-specific quotas, account entitlements and authenticated tenant behavior remain outside this pass.
