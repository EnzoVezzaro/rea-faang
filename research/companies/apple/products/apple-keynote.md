---
schema_version: "1.0"
id: "apple-keynote"
company_id: "apple"
name: "Keynote"
aliases: []
product_type: "productivity_application"
categories:
  - "productivity"
official_url: "https://www.apple.com/keynote/"
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

Keynote is Apple's presentation software, part of the iWork suite. It is known for its cinematic transitions, polished templates, and seamless integration across Apple devices via iCloud. It uses a slide-based model with powerful animation tools (Magic Move, builds, transitions) and supports real-time collaboration.

# 2. Product identity and ownership

- **Official name:** Keynote
- **Company and business unit:** Apple Inc.
- **Parent organization:** Apple Inc.
- **Original launch date:** 2003 (Keynote 1.0 for Mac OS X)
- **Current lifecycle status:** active
- **Previous names:** None
- **Acquisitions or ownership changes:** None
- **Related products:** Pages, Numbers, iCloud, iWork for iCloud
- **Official website:** https://www.apple.com/keynote/
- **Official documentation:** https://support.apple.com/keynote

# 3. Product capabilities

- **Slide-based model:** Master slides, slide layouts, slide navigator
- **Cinematic transitions:** 30+ slide transitions (Magic Move, Object Flip, Cube, etc.)
- **Build animations:** Object builds (in/out), action builds (move, rotate, scale, opacity)
- **Magic Move:** Automatic animation between slides for matching objects
- **Templates:** 40+ cinematic themes with coordinated fonts, colors, backgrounds
- **Media:** Images, video, audio, Live Photos, image galleries, 3D objects (USDZ)
- **Charts:** Interactive 2D/3D charts with animation builds
- **Tables:** Full table editing with formulas, categories, conditional highlighting
- **Collaboration:** Real-time co-editing via iCloud, comments, participant cursors
- **Presenter tools:** Presenter display (notes, timer, upcoming slides), rehearsal mode, multi-presenter
- **Remote control:** Keynote Remote (iPhone/iPad/Apple Watch)
- **Export:** PDF, PowerPoint (.pptx), QuickTime movie, animated GIF, images, HTML
- **Import:** PowerPoint (.pptx), Keynote '09
- **Cross-platform:** macOS, iOS, iPadOS, iCloud web (keynote.icloud.com)
- **Apple Pencil:** Drawing, annotation, Scribble
- **Accessibility:** VoiceOver, closed captions for movies, high contrast
- **Shortcuts integration:** Automate presentation workflows

# 4. Technical architecture

- **Document format:** Proprietary package format (.key) - ZIP archive with XML (APXL), media assets, preview images
- **Rendering engine:** Core Animation, Core Graphics, Metal for GPU-accelerated transitions
- **Animation system:** Declarative animation descriptions, rendered at 60/120fps
- **iCloud sync:** Document-level sync with conflict resolution
- **Web version:** WebGL/Canvas-based player and editor on iCloud.com
- **No public SDK or API for programmatic access**

# 5. User workflows

Users select a theme, add slides from layouts, populate content (text, images, charts, tables), apply builds and transitions, rehearse with presenter display, and present or export. Key workflows: creating presentations, animating content, presenting live, exporting for sharing. Advanced: Magic Move for seamless object animation, interactive charts, multi-presenter sessions.

# 6. Pricing and access

Free with Apple ID on supported devices (Mac, iPhone, iPad) and web. No subscription required. iCloud storage counts against free 5GB tier.

# 7. API and integration surface

- **No public API** for document manipulation
- **Shortcuts actions:** Create presentation, add slide, play, export
- **iWork file format:** Partially reverse-engineered (libetonyek)
- **AppleScript (macOS):** Limited automation (open, play, export)
- **JavaScript for Automation (JXA):** More extensive but undocumented

# 8. Existing open-source alternatives

- **LibreOffice Impress:** Feature-complete presentation tool, ODF/.pptx, basic animations
- **OnlyOffice Presentation:** Web/desktop, PowerPoint-compatible UI, collaborative
- **Collabora Online:** LibreOffice-based web suite
- **Reveal.js:** Web-based, Markdown/HTML source, code-friendly, developer-focused
- **Marp / Marp CLI:** Markdown-based slide deck generator
- **Slidev:** Vue/Markdown-based, developer-focused, interactive
- **Beamer (LaTeX):** PDF-based, academic/technical focus
- **Deckset (macOS):** Markdown to presentation (paid)
- **No open-source alternative matches Keynote's cinematic transitions and Magic Move**

# 9. Alternative comparison

LibreOffice Impress and OnlyOffice are closest for traditional slide editing. Reveal.js, Slidev, Marp serve developer/technical audiences with code-first workflows. Keynote's unique strengths: cinematic transitions (GPU-accelerated), Magic Move, tight Apple ecosystem integration, and presenter tools. Open alternatives lack the animation polish and presenter workflow.

# 10. Missing capabilities and opportunity analysis

Cinematic GPU-accelerated transitions, Magic Move, presenter display with notes/timer, multi-presenter sync, Apple Pencil annotation during presentation, and iCloud real-time collaboration are the main gaps. An open alternative could focus on web-based animated presentations with Reveal.js/Slidev as a base.

# 11. RAE implementation strategy

Build on Reveal.js or Slidev for web-based animated presentations. Add a visual editor for non-developers. Implement Magic Move equivalent using FLIP animation technique. Prioritize: themes, transitions, builds, presenter mode, PDF/PowerPoint export.

# 12. Security, privacy, and compliance

Presentations in iCloud use Apple's encryption. Local files unencrypted by default. Open alternative should support E2E encryption for cloud sync, password protection for exports, and standard document permissions.

# 13. Sources and evidence

- https://www.apple.com/keynote/ (product page)
- https://support.apple.com/keynote (user guide)
- https://revealjs.com/ (alternative reference)
- https://sli.dev/ (Slidev reference)

# 14. Open questions

- Can web-based animations match native 60/120fps smoothness?
- How to implement Magic Move without a native animation engine?
- What is the best approach for PowerPoint import/export fidelity?

# 15. Research history

Initial research record created 2026-01-13. No prior research events.

---

# 16. Alternative comparison (continued)

Reveal.js/Slidev are the strongest bases for an open Keynote alternative. They offer code-first authoring; a visual editor would broaden accessibility. LibreOffice Impress covers traditional needs but lacks animation polish.

---

# 17. RAE implementation strategy (continued)

Phase 1: Visual editor for Reveal.js/Slidev with theme system. Phase 2: Build animations, slide transitions (CSS/Web Animations API). Phase 3: Magic Move equivalent (FLIP). Phase 4: Presenter mode, multi-presenter, iCloud-like collaboration (Yjs). Phase 5: Native apps via Tauri.