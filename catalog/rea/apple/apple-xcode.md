# REA web-surface report — Xcode (`apple-xcode`)

Browser capture of the public web surface of Xcode, recorded with REA.

| | |
|---|---|
| Product | Xcode (`apple-xcode`) |
| Company | Apple |
| Target | https://developer.apple.com/xcode/ |
| Resolved URL | https://developer.apple.com/xcode/ |
| Page title | Xcode |
| Captured | 2026-10-13T18:58:26.259Z |
| Status | captured |
| REA Evidence ID | `ev_4d2894a8d05f2c0cc81884c157110b10aec39d04ad28a39aca469f4c6d43b1a5` |
| REA provider | rea-playwright-browser-scenario v1 |
| Browser | Chromium 155.0.8059.40 |
| Confidence | observed |
| Completeness | complete |

## Method

REA's `capture-browser-scenario` provider launched a headless Chrome profile,
navigated to the product's public `official_url`, waited for the page to settle,
and captured the final URL and the accessibility outline. Analysis runs locally;
only publicly reachable pages are observed. No authentication is attempted and no
access control is bypassed.

```json
{
  "browser": {
    "mode": "launch",
    "executable_path": "<chrome>",
    "headless": true
  },
  "start_url": {
    "url": "https://developer.apple.com/xcode/"
  },
  "actions": [
    {
      "step_id": "settle",
      "action": "wait_for_timeout",
      "duration_ms": 2500
    }
  ],
  "capture": {
    "at_end": [
      "url",
      "accessibility"
    ]
  }
}
```

## Observations

### Headings

- Xcode
- What’s new in Xcode 27
- Coding intelligence
- Leverage coding models and agents in Xcode
- Preview
- Iterate quickly and preview while you work
- Device Hub
- Prototype on every device, all from your Mac
- Test
- Measure, update, observe
- Automate
- Continuously build, test, and deliver your apps
- Debug
- Find and fix bugs
- Optimize
- Get real-time insights
- Developer Footer
- Platforms
- Tools
- Technologies
- Resources
- Support
- Account
- Programs
- Events

### Landmarks

- navigation: Global
- navigation
- main
- contentinfo: Developer Footer
- navigation: Breadcrumbs
- navigation: Apple Developer Directory

### Links

- [Apple Developer](/)
- [Get Started](/get-started/)
- [Platforms](/platforms/)
- [Technologies](/technologies/)
- [Community](/community/)
- [Documentation](/documentation/)
- [Downloads](/download/)
- [Support](/support/)
- [Sign in](/login/?return=%2Fxcode%2F)
- [Xcode](/xcode/)
- [Overview](/xcode/)
- [What’s New](/xcode/whats-new/)
- [Resources](/xcode/resources/)
- [Download ](#)
- [Learn more ](/xcode/whats-new/)
- [model of your choice](/documentation/Xcode/setting-up-coding-intelligence)
- [Swift Testing](/documentation/testing)
- [XCTest](/documentation/xctest)
- [XCUIAutomation](/documentation/xcuiautomation)
- [Apple](https://www.apple.com/)
- [Developer](/)
- [iOS](/ios/)
- [iPadOS](/ipados/)
- [macOS](/macos/)
- [tvOS](/tvos/)
- [visionOS](/visionos/)
- [watchOS](/watchos/)
- [App Store](/app-store/)
- [Swift](/swift/)
- [SwiftUI](/swiftui/)
- [Swift Playground](/swift-playground/)
- [TestFlight](/testflight/)
- [Xcode Cloud](/xcode-cloud/)
- [Icon Composer](/icon-composer/)
- [SF Symbols](/sf-symbols/)
- [Accessibility](/documentation/accessibility/)
- [Accessories](/accessories/)
- [AI & Machine Learning](/machine-learning/)
- [Apple In-App Purchase](/in-app-purchase/)
- [Apple Intelligence](/apple-intelligence/)

### Controls

- button: Get Started menu
- button: Platforms menu
- button: Technologies menu
- button: Community menu
- button: Documentation menu
- button: Downloads menu
- button: Support menu
- button: Search

## Limitations (from REA)

- Artifact identity is unavailable for this observation.
- Event sequence records provider receipt order; simultaneous browser causality is not inferred.
- Network content is retained only when selected; response bytes are browser-decoded, not compressed wire bytes.
- Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage.
- Network content reads settle within 5 seconds each and never wait for unfinished responses or refetch them.
- Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality.
- Storage values are hashed only after declared-secret redaction.
- Browser host platform and architecture were not observed.

## Provenance

- Raw REA Evidence: `catalog/rea/evidence/apple-xcode.json`
- Evidence ID: `ev_4d2894a8d05f2c0cc81884c157110b10aec39d04ad28a39aca469f4c6d43b1a5`
- Accessibility outline: 15558 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
