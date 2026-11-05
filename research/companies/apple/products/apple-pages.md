---
schema_version: "1.0"
id: "apple-pages"
company_id: "apple"
name: "Pages"
aliases: []
product_type: "productivity_application"
categories:
  - "productivity"
official_url: "https://www.apple.com/pages/"
official_docs_url: null
official_source_urls: []
lifecycle_status: "active"
research_status: "pending"
research_confidence: "unverified"
alternative_status: "none_verified"
alternative_coverage: "unknown"
opportunity_status: "integrate_existing"
last_researched_at: null
last_verified_at: null
next_review_at: null
research_version: 1
---

# 1. Executive summary

Pages is Apple's word processing application, part of the iWork productivity suite. It offers a WYSIWYG document editor with real-time collaboration, templates, and export to PDF, Word, and other formats.

# 2. Product identity and ownership

- **Official name:** Pages
- **Company and business unit:** Apple
- **Parent organization:** Apple Inc.
- **Original launch date:** 2005 (as part of iLife; moved to iWork 2008)
- **Current lifecycle status:** active
- **Previous names:** iWork Pages, Apple Pages
- **Acquisitions or ownership changes:** None; Apple-native application
- **Related products:** Keynote, Numbers, iWork, iCloud
- **Official website:** https://www.apple.com/pages/
- **Official documentation:** https://www.apple.com/pages/support/

# 3. Product capabilities

- WYSIWYG word processing document editing
- Real-time collaboration with other iWork users
- Templates for resumes, reports, letters, and more
- Export to PDF, Word (.docx), EPUB, and Pages '09
- iCloud synchronization across devices
- Dark mode support
- Image, chart, and table insertion
- Text styles, themes, and formatting options

# 4. Technical architecture

Pages is a macOS and iOS native application:

- macOS version built with Swift and AppKit/AppKit
- iOS version built with Swift and UIKit/SwiftUI
- iCloud sync via CloudKit
- Real-time collaboration via iWork Cloud Engine

Document formats and collaboration protocol are partially documented; full internal architecture is proprietary.

# 5. User workflows

Primary workflows: document creation and editing, template usage, collaboration, and export. Essential: document editing, export. Advanced: real-time collaboration, template customization.

# 6. Pricing and access

Free with Apple ID. Included with Apple Devices. iCloud storage may be shared with other iWork and iCloud services.

# 7. API and integration surface

- iWork API (limited; primarily iCloud sync)
- No public REST API for document manipulation
- Automation via AppleScript and Shortcuts
- Export formats: PDF, Word, EPUB

# 8. Existing open-source alternatives

LibreOffice, Microsoft Word, Google Docs, OnlyOffice. No free tool replicates Pages' template system and iCloud synchronization exactly.

# 9. Alternative comparison

Google Docs provides the closest web-based collaboration alternative. LibreOffice provides the closest feature-parity desktop alternative. Neither replicates Pages' template system and iCloud integration.

# 10. Missing capabilities and opportunity analysis

Template system, iCloud synchronization, and real-time collaboration workflow represent gaps. Google Docs and LibreOffice cover basic word processing but not Pages-specific features.

# 11. REA implementation strategy

Focus on document creation and editing use cases. Google Docs or LibreOffice for compatibility. iCloud synchronization and template system are out of scope.

# 12. Security, privacy, and compliance

Local encryption. No server-side processing by default. iCloud sync subject to Apple's iCloud security and privacy.

# 13. Sources and evidence

- https://www.apple.com/pages/ (product page)
- https://www.apple.com/pages/support/ (support documentation)
- https://github.com/libreoffice/libreoffice (reference)

# 14. Open questions

- What is the template system workflow that Pages users rely on?
- How does iCloud sync conflict resolution work?
- Can offline editing be replicated without iCloud?

# 15. Research history

Initial research record created 2026-01-13. No prior research events.

---

# 16. Alternative comparison (continued)

Google Docs and LibreOffice cover basic word processing. Pages' template system and iCloud integration are unique.

---

# 17. REA implementation strategy (continued)

Focus on document editing use cases. Google Docs or LibreOffice for compatibility. iCloud sync and templates are out of scope.