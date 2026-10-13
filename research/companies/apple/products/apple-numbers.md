---
schema_version: "1.0"
id: "apple-numbers"
company_id: "apple"
name: "Numbers"
aliases: []
product_type: "productivity_application"
categories:
  - "productivity"
official_url: "https://www.apple.com/numbers/"
official_docs_url: null
official_source_urls: []
lifecycle_status: "active"
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

Numbers is Apple's spreadsheet application, part of the iWork suite. It distinguishes itself from traditional spreadsheets with a canvas-based approach where tables, charts, and media exist as objects on a free-form canvas rather than a single grid. It emphasizes visual presentation, collaboration, and cross-device sync via iCloud.

# 2. Product identity and ownership

- **Official name:** Numbers
- **Company and business unit:** Apple Inc.
- **Parent organization:** Apple Inc.
- **Original launch date:** 2007 (iWork '08)
- **Current lifecycle status:** active
- **Previous names:** None
- **Acquisitions or ownership changes:** None
- **Related products:** Pages, Keynote, iCloud, iWork for iCloud
- **Official website:** https://www.apple.com/numbers/
- **Official documentation:** https://support.apple.com/numbers

# 3. Product capabilities

- **Canvas-based model:** Multiple tables, charts, images, shapes on a free-form canvas
- **Table features:** Categories (grouping), pivot tables, smart categories, filters, sorting
- **Formulas:** 250+ functions, compatible with Excel formulas, custom functions via JavaScript
- **Charts:** Interactive 2D/3D charts, donut, radar, scatter, mixed charts
- **Data entry:** Forms for data entry on iOS/iPadOS
- **Collaboration:** Real-time co-editing via iCloud, comments, change tracking
- **Import/Export:** Excel (.xlsx), CSV, TSV, Numbers '09, PDF, Excel XML
- **Cross-platform:** macOS, iOS, iPadOS, iCloud web (numbers.icloud.com)
- **Templates:** 30+ built-in templates for budgets, invoices, planners, etc.
- **Apple Pencil support:** Drawing, annotation, handwriting to text (Scribble)
- **Accessibility:** VoiceOver, Dynamic Type, high contrast
- **Shortcuts integration:** Automate workflows

# 4. Technical architecture

- **Document format:** Proprietary package format (.numbers) - ZIP archive with XML (SPX), metadata, preview images
- **iCloud sync:** Document-level sync with conflict resolution
- **Web version:** JavaScript/Canvas-based editor on iCloud.com
- **Formula engine:** Custom calculation engine with Excel compatibility layer
- **Rendering:** Core Graphics, Core Animation, Metal for charts
- **No public SDK or API for programmatic access**

# 5. User workflows

Users create documents from templates or blank canvas, add tables and charts, enter data, apply formulas, style visually, and share via iCloud link or export. Key workflows: budgeting, invoicing, project tracking, grade books, event planning. Advanced: categories for grouping, pivot tables, interactive charts, form-based data entry on iPad.

# 6. Pricing and access

Free with Apple ID on supported devices (Mac, iPhone, iPad) and web. No subscription required. iCloud storage counts against free 5GB tier (paid upgrades available).

# 7. API and integration surface

- **No public API** for document manipulation
- **Shortcuts actions:** Create document, add table, set cell value, get cell value
- **iWork file format:** Reverse-engineered by some tools (libetonyek, numbers-parser)
- **Export automation:** AppleScript (macOS), Shortcuts (iOS/macOS)

# 8. Existing open-source alternatives

- **LibreOffice Calc:** Feature-complete spreadsheet, grid-based, ODF/.xlsx
- **OnlyOffice Spreadsheet:** Web/desktop, Excel-compatible UI, collaborative
- **Collabora Online:** LibreOffice-based web suite
- **EtherCalc:** Web-based, real-time collaborative, minimal features
- **SheetJS (js-xlsx):** Library for reading/writing spreadsheet formats
- **Univer:** React-based spreadsheet with collaborative editing
- **Luckysheet / x-spreadsheet:** Web spreadsheet components
- **No open-source alternative uses the canvas-based multi-table model**

# 9. Alternative comparison

LibreOffice Calc and OnlyOffice are the closest functional equivalents for traditional spreadsheet work. They lack Numbers' canvas model, form-based data entry, and seamless Apple ecosystem integration. Web-based alternatives (Univer, EtherCalc) offer collaboration but not the desktop/iPad experience.

# 10. Missing capabilities and opportunity analysis

Canvas-based multi-table model, form-based data entry on mobile, Apple Pencil integration, iCloud real-time collaboration, and Apple ecosystem integration are unique. An open alternative could adopt the canvas model with ODF/Excel compatibility.

# 11. RAE implementation strategy

Build a canvas-based spreadsheet using web technologies (Canvas/WebGL or DOM) with ODF/.xlsx import-export. Prioritize: multiple tables per sheet, categories/grouping, interactive charts, form view for mobile. Consider Univer or Luckysheet as a base.

# 12. Security, privacy, and compliance

Documents stored in iCloud use Apple's encryption. Local files are unencrypted by default (FileVault protects at rest). Open alternative should support end-to-end encryption for cloud sync, local encryption, and standard spreadsheet security (cell protection, sheet protection).

# 13. Sources and evidence

- https://www.apple.com/numbers/ (product page)
- https://support.apple.com/numbers (user guide)
- https://www.libreoffice.org/ (alternative reference)
- https://github.com/SheetJS/sheetjs (format library)

# 14. Open questions

- Can the canvas model be implemented with good performance on large datasets?
- What is the best approach for Excel formula compatibility?
- How to handle real-time collaboration without a central server (CRDTs)?

# 15. Research history

Initial research record created 2026-01-13. No prior research events.

---

# 16. Alternative comparison (continued)

LibreOffice Calc remains the most complete open-source spreadsheet. The canvas model is Numbers' key differentiator; replicating it would require a novel UI approach.

---

# 17. RAE implementation strategy (continued)

Phase 1: Web-based canvas spreadsheet with single-table sheets, ODF import/export. Phase 2: Multi-table canvas, categories, charts. Phase 3: Mobile form view, real-time collaboration (Yjs/Automerge). Phase 4: Native apps via Tauri/Electron.