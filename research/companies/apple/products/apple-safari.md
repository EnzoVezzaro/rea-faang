---
schema_version: "1.0"
id: "apple-safari"
company_id: "apple"
name: "Safari"
aliases: []
product_type: "browser"
categories:
  - "browser"
official_url: "https://www.apple.com/safari/"
official_docs_url: null
official_source_urls: []
lifecycle_status: "active"
research_status: "pending"
research_confidence: "unverified"
alternative_status: "none_verified"
alternative_coverage: "unknown"
opportunity_status: "reuse_existing"
last_researched_at: null
last_verified_at: null
next_review_at: null
research_version: 1
---

# 1. Executive summary

Safari is Apple's graphical web browser, default on macOS, iOS, and iPadOS. It is known for its energy efficiency, privacy features (Intelligent Tracking Prevention), and integration with the Apple ecosystem.

# 2. Product identity and ownership

- **Official name:** Safari
- **Company and business unit:** Apple
- **Parent organization:** Apple Inc.
- **Original launch date:** 2003 (with Panther OS X 10.3)
- **Current lifecycle status:** active
- **Previous names:** None significant (KHTML-based predecessor was included in earlier OS versions)
- **Acquisitions or ownership changes:** None; Apple-native browser
- **Related products:** WebKit, Safari Technology Preview, iOS Safari
- **Official website:** https://www.apple.com/safari/
- **Official documentation:** https://developer.apple.com/documentation/safari

# 3. Product capabilities

- Web rendering via WebKit engine
- Intelligent Tracking Prevention (ITP)
- Privacy report and cross-site tracking prevention
- Reader view for simplified article reading
- Extensions via WebExtension API
- Password management and iCloud Keychain integration
- WebGPU support
- JavaScript engine (JavaScriptCore / Nitro)
- Smart keyboards and text prediction
- Tab groups and Tab Overview
- Handoff between Apple devices

# 4. Technical architecture

Safari uses:

- WebKit rendering engine (open source, fork of KHTML)
- JavaScriptCore (Nitro JIT engine, open source)
- Native macOS APIs for rendering and window management
- Intelligent Tracking Prevention (proprietary ML-based feature)

WebKit and JavaScriptCore are available as open source. ITP and some privacy features are proprietary.

# 5. User workflows

Primary workflows: navigation, tab management, bookmarking, password autofill, reader view, and extension usage. Essential: browsing, search, tab management. Advanced: extension development, performance profiling, privacy settings.

# 6. Pricing and access

Free. Default browser on Apple devices. iCloud Keychain sync available with Apple ID.

# 7. API and integration surface

- WebExtension API for extensions
- JavaScriptCore API for embedding
- WebKit2 API for custom browser embedding
- NSURLSession for networking

# 8. Existing open-source alternatives

WebKit (open source rendering engine) is used by browsers including Epiphany, Rekonq. Blink-based browsers (Chrome, Edge, Opera). Gecko-based (Firefox). No browser combines WebKit's ITP with the full Apple ecosystem integration.

# 9. Alternative comparison

WebKit is the open-source rendering engine. Browsers built on WebKit (though few outside Apple ecosystem). Firefox/Chrome/Edge use Blink/Gecko. Extensions API compatibility varies.

# 10. Missing capabilities and opportunity analysis

A completely independent browser engine is high effort. Building on WebKit with independent privacy features (beyond ITP) is feasible but requires ecosystem integration. Focus on privacy-enhanced web browsing rather than engine development.

# 11. RAE implementation strategy

Not recommended to build a browser engine from WebKit alternatives at initial stage. Consider contributing to WebKit or building privacy extensions for existing browsers.

# 12. Security, privacy, and compliance

Intelligent Tracking Prevention, sandboxing, encrypted storage via Keychain. Apple's privacy model is a differentiator. No specific compliance certifications for the browser itself.

# 13. Sources and evidence

- https://www.apple.com/safari/ (product page)
- https://developer.apple.com/documentation/safari (documentation)
- https://webkit.org/ (WebKit project)

# 14. Open questions

- What is the minimum WebKit feature set for a functional browser?
- How do ITP alternatives compare in effectiveness?
- What extension API features are essential for modern web browsing?

# 15. Research history

Initial research record created 2026-01-13. No prior research events.

---

# 16. Alternative comparison (continued)

WebKit is open source but primarily used within Apple ecosystem. Firefox/Chrome/Edge use different engines.

---

# 17. RAE implementation strategy (continued)

Focus on privacy extensions for existing browsers rather than independent engine development.