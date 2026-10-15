# REA web-surface report — Siri (`apple-siri`)

Browser capture of the public web surface of Siri, recorded with REA.

| | |
|---|---|
| Product | Siri (`apple-siri`) |
| Company | Apple |
| Target | https://www.apple.com/siri/ |
| Resolved URL | https://www.apple.com/apple-intelligence/ |
| Page title | Apple Intelligence and Siri |
| Captured | 2026-10-14T03:54:54.870Z |
| Status | captured |
| REA Evidence ID | `ev_0aef99b348d75d31267ce1833ad73fd397e5d3f3b7bd90f83f74ee12079f3ebb` |
| REA provider | rea-playwright-browser-scenario v1 |
| Browser | Chromium 155.0.8059.79 |
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
    "url": "https://www.apple.com/siri/"
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

- Apple Intelligence and Siri
- Introducing Siri AI. Truly helpful. Truly yours.
- Explore what’s new for Apple Intelligence.
- Siri AI
- Just ask Siri.
- Siri understands your personal context.
- Take action in more apps.
- Tap into broad world knowledge.
- Introducing the Siri app.
- Customize how Siri sounds.
- Siri AI in CarPlay.
- Visual Intelligence
- Siri mode in Camera.
- New smart actions.
- Ask Siri about what’s in front of you.
- Visual Intelligence with Siri on Mac.
- Visual Intelligence with Siri on iPad.
- Visual Intelligence with Siri on Apple Vision Pro.
- Photos and images
- Next-level intelligent photo editing.
- Reframe your photo even after it’s taken.
- Express more with Image Playground.
- Image Wand.
- Communication
- Write with Siri virtually anywhere you type.

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
- [Overview](/os/)
- [iOS](/os/ios/)
- [macOS](/os/macos/)
- [iPadOS](/os/ipados/)
- [watchOS](/os/watchos/)
- [visionOS](/os/visionos/)
- [Footnote 1](#footnote-1)
- [Footnote 4](#footnote-4)
- [Footnote 5](#footnote-5)
- [Footnote 3](#footnote-3)
- [Footnote 2](#footnote-2)
- [Footnote 6](#footnote-6)
- [Footnote 7](#footnote-7)
- [Footnote 8](#footnote-8)
- [Footnote 9](#footnote-9)
- [Footnote 10](#footnote-10)
- [Learn more, iPhone Duo](/iphone-duo/)
- [View pricing, iPhone Duo](/us/shop/goto/buy_iphone/iphone_duo)
- [iPhone 18 Pro](/iphone-18-pro/)
- [Learn more, iPhone 18 Pro](/iphone-18-pro/)
- [Buy, iPhone 18 Pro](/us/shop/goto/buy_iphone/iphone_18_pro)
- [iPhone Air](/iphone-air/)
- [Learn more, iPhone Air](/iphone-air/)
- [Buy, iPhone Air](/us/shop/goto/buy_iphone/iphone_air)
- [iPhone 17](/iphone-17/)
- [Learn more, iPhone 17](/iphone-17/)
- [Buy, iPhone 17](/us/shop/goto/buy_iphone/iphone_17)
- [iPhone 17e](/iphone-17e/)

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
- button: Play Explore what’s new for Apple Intelligence gallery
- button: Previous item in Siri AI gallery
- button: Next item in Siri AI gallery
- button: Previous item in Visual Intelligence Gallery
- button: Next item in Visual Intelligence Gallery
- button: Previous item in photos and images gallery
- button: Next item in photos and images gallery

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

- Raw REA Evidence: `catalog/rea/evidence/apple-siri.json`
- Evidence ID: `ev_0aef99b348d75d31267ce1833ad73fd397e5d3f3b7bd90f83f74ee12079f3ebb`
- Accessibility outline: 39047 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
