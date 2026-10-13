# REA web-surface report — iOS (`apple-ios`)

Browser capture of the public web surface of iOS, recorded with REA.

| | |
|---|---|
| Product | iOS (`apple-ios`) |
| Company | Apple |
| Target | https://www.apple.com/ios/ |
| Resolved URL | https://www.apple.com/os/ios/ |
| Page title | iOS 27 |
| Captured | 2026-10-13T18:57:36.254Z |
| Status | captured |
| REA Evidence ID | `ev_ce697ef64c03f91b4b8d5c47f8283ad2d5578be7c94ae452ef1b9748eacffc90` |
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
    "url": "https://www.apple.com/ios/"
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

- iOS 27
- Introducing Siri AI. Truly helpful. Truly yours.
- Explore what’s new for iOS 27.
- Siri AI on iPhone
- Just ask Siri AI.
- Siri understands your personal context.
- Take action in more apps.
- Tap into broad world knowledge.
- Introducing the Siri app.
- Siri mode in Camera.
- Customize how Siri sounds.
- Write with Siri virtually anywhere you type.
- Apple Intelligence in apps
- Next-level intelligent photo editing.
- Express more with Image Playground.
- Get things done with Suggestions.
- Get relevant information while on a call.
- Safari works smarter for you.
- Fix passwords with a tap.
- Describe a shortcut.
- Child Safety
- Set a foundation.
- Approve new websites.
- Help them communicate safely.
- Time Allowances and Schedules.

### Landmarks

- navigation: Global
- navigation: Local
- main
- contentinfo: Apple Footer
- region: Footnotes
- navigation: Breadcrumbs
- navigation: Apple Directory

### Links

- [Apple](/)
- [Store](/us/shop/goto/store)
- [Mac](/mac/)
- [iPad](/ipad/)
- [iPhone](/iphone/)
- [Watch](/watch/)
- [Vision](/apple-vision-pro/)
- [AirPods](/airpods/)
- [Home](/home/)
- [Entertainment](/entertainment/)
- [Accessories](/us/shop/goto/buy_accessories)
- [Support](https://support.apple.com/?cid=gn-ols-home-hp-tab)
- [Overview](/os/?version=no-hero)
- [macOS](/os/macos/?version=no-hero)
- [iPadOS](/os/ipados/?version=no-hero)
- [watchOS](/os/watchos/?version=no-hero)
- [visionOS](/os/visionos/?version=no-hero)
- [Apple Intelligence](/apple-intelligence/)
- [Footnote 1](#footnote-1)
- [Footnote 2](#footnote-2)
- [Footnote 3](#footnote-3)
- [Footnote 4](#footnote-4)
- [Learn more, Child Safety](/child-safety/)
- [Footnote 5](#footnote-5)
- [Footnote 6](#footnote-6)
- [Footnote 7](#footnote-7)
- [Footnote 8](#footnote-8)
- [Footnote 9](#footnote-9)
- [Footnote 10](#footnote-10)
- [Footnote 11](#footnote-11)
- [Footnote 12](#footnote-12)
- [Footnote 13](#footnote-13)
- [Footnote 14](#footnote-14)
- [Footnote 15](#footnote-15)
- [Explore iPhone](/iphone/)
- [iPhone Duo](/iphone-duo/)
- [iPhone 18 Pro Max](/iphone-18-pro/)
- [iPhone 18 Pro](/iphone-18-pro/)
- [iPhone Air](/iphone-air/)
- [iPhone 17](/iphone-17/)

### Controls

- button: Store menu
- button: Mac menu
- button: iPad menu
- button: iPhone menu
- button: Watch menu
- button: Vision menu
- button: AirPods menu
- button: Home menu
- button: Entertainment menu
- button: Accessories menu
- button: Support menu
- button: Search apple.com
- button: Shopping Bag
- button: Play Explore what's new for iOS 27 gallery
- button: Previous item, Siri AI gallery
- button: Next item, Siri AI gallery
- button: Previous item, Apple Intelligence Gallery
- button: Next item, Apple Intelligence Gallery
- button: Previous item, Child safety Gallery
- button: Next item, Child safety Gallery

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

- Raw REA Evidence: `catalog/rea/evidence/apple-ios.json`
- Evidence ID: `ev_ce697ef64c03f91b4b8d5c47f8283ad2d5578be7c94ae452ef1b9748eacffc90`
- Accessibility outline: 38003 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
