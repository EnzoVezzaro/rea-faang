---
schema_version: "1.0"
id: "google-sheets"
company_id: "google"
name: "Google Sheets"
aliases: ["Sheets"]
product_type: "productivity_application"
categories: ["spreadsheets", "collaboration", "productivity"]
lifecycle_status: "active"
official_url: "https://sheets.google.com/"
official_docs_url: "https://developers.google.com/workspace/sheets"
official_source_urls: ["https://support.google.com/docs/answer/6000292", "https://support.google.com/docs/answer/9331169", "https://developers.google.com/workspace/sheets/api/guides/concepts", "https://developers.google.com/workspace/sheets/api/reference/rest"]
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
command_source: "https://developers.google.com/workspace/sheets/api/guides/concepts"
---
# 1. Executive summary

Google Sheets is Google's online spreadsheet application for creating, formatting, analysing and collaboratively editing spreadsheets. It is part of Google Workspace and stores files through Drive, but it has its own spreadsheet model and Sheets API.

# 2. Product identity and ownership

**Official name:** Google Sheets  
**Company:** Google LLC, part of Alphabet Inc.  
**Lifecycle status:** active  
**Official website:** https://sheets.google.com/

Google's official help and developer documentation identify Sheets as an online spreadsheet application with a distinct spreadsheet resource and API.

# 3. Product capabilities

- Create, edit and format spreadsheets with values, formulas and functions.
- Charts, filters, pivot tables, protected ranges and version history.
- Share spreadsheets with viewer, commenter or editor permissions.
- Collaborative editing, comments, tasks and access controls.
- Apps Script, add-ons and Sheets API automation.

Sheets is separate from Drive because Drive provides storage and file permissions while Sheets provides the spreadsheet editor and calculation model. It is also separate from Docs even though both are Workspace editors.

# 4. Technical architecture

Sheets is a managed web application backed by Drive storage and Google identity. The Sheets API exposes spreadsheets, sheets, cells, values, formatting and metadata; the calculation engine and real-time collaboration implementation are proprietary.

# 5. User workflows

A user creates or opens a spreadsheet, enters values or formulas, formats and analyses data, shares the file with collaborators, and reviews versions or protected ranges. Applications can create spreadsheets, read and write cell values, update formatting and manage connected data through the API.

# 6. Pricing and access

Access depends on Google account type, Workspace edition, organisation policies and spreadsheet permissions. This research verifies the editor and access model, not current plan pricing, quotas or a particular account's entitlement.

# 7. API and integration surface

The Google Sheets API is a REST interface for creating spreadsheets, reading and writing values, updating formatting and managing connected sheets. Apps Script and Workspace add-ons provide additional automation. OAuth scopes and spreadsheet permissions are required for real operations.

# 8. Existing open-source alternatives

- Grist (Apache-2.0): self-hosted relational spreadsheet and database-like tables.
- ONLYOFFICE Docs (AGPL-3.0): self-hosted collaborative spreadsheet editor.
- Collabora Online (MPL-2.0): LibreOffice-based browser spreadsheet editor.

# 9. Alternative comparison

These projects cover spreadsheet editing or structured tables. None is verified here as a drop-in replacement for Sheets' Google account ecosystem, Drive integration, collaboration model, calculation behavior and API surface.

# 10. Missing capabilities and opportunity analysis

The integration gap combines spreadsheet calculation, real-time collaboration, sharing, version history, protected ranges, storage, identity and automation under one managed service.

# 11. REA implementation strategy

Choose a narrow spreadsheet workflow and reuse an existing editor or relational spreadsheet. Define formula compatibility, sharing, revision, permissions and storage integration before attempting broader parity.

# 12. Security, privacy, and compliance

Spreadsheets can contain sensitive data and formulas. Verify sharing inheritance, protected ranges, link access, API scopes, version retention and organisation policies; do not infer access from a spreadsheet URL alone.

# 13. Sources and evidence

- [How to use Google Sheets](https://support.google.com/docs/answer/6000292) — official spreadsheet capabilities.
- [Collaborate in Sheets](https://support.google.com/docs/answer/9331169) — official sharing, versioning and protection behavior.
- [Google Sheets API overview](https://developers.google.com/workspace/sheets/api/guides/concepts) — official API capabilities.
- [Google Sheets API REST reference](https://developers.google.com/workspace/sheets/api/reference/rest) — official resources and endpoints.

# 14. Open questions

- Which formulas, charts and data workflows should a future comparison cover?
- Is the target a general spreadsheet, a database-like table or a reporting workflow?
- What permission, versioning and audit requirements must an alternative satisfy?

# 15. Research history

Record updated 2026-11-03 from official Google Sheets Help and Google Developers sources. Status: `researched`; plan-specific access, quotas, calculation internals and authenticated behavior remain outside this pass.
