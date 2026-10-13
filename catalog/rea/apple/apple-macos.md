# REA web-surface report — macOS (`apple-macos`)

Browser capture of the public web surface of macOS, recorded with REA.

| | |
|---|---|
| Product | macOS (`apple-macos`) |
| Company | Apple |
| Target | https://www.apple.com/macos/ |
| Resolved URL | https://www.apple.com/os/macos/ |
| Page title | macOS 27 Golden Gate |
| Captured | 2026-10-13T18:57:57.261Z |
| Status | captured |
| REA Evidence ID | `ev_5be5899a66e9c2e41480b1cf7fed8deddff816f47b3e6794b6e058bb015e22f6` |
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
    "url": "https://www.apple.com/macos/"
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

- macOS 27 Golden Gate
- Introducing Siri AI. Truly helpful. Truly yours.
- Explore what’s new for macOS 27.
- Siri AI on Mac
- Just ask Siri AI.
- Siri understands your personal context.
- Take action in more apps.
- Tap into broad world knowledge.
- Introducing the Siri app.
- Visual Intelligence with Siri on Mac.
- Write with Siri virtually anywhere you type.
- Customize how Siri sounds.
- Apple Intelligence in apps
- Safari works smarter for you.
- Fix passwords with a click.
- Next-level intelligent photo editing.
- Express more with Image Playground.
- Describe a shortcut.
- Child Safety
- Approve new websites.
- Help them communicate safely.
- Time Allowances and Schedules.
- Intuitive, easy-to-use controls.
- OS improvements
- Design refinements.

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
- [iOS](/os/ios/?version=no-hero)
- [iPadOS](/os/ipados/?version=no-hero)
- [watchOS](/os/watchos/?version=no-hero)
- [visionOS](/os/visionos/?version=no-hero)
- [Apple Intelligence](/apple-intelligence/)
- [Footnote 1](#footnote-1)
- [Footnote 2](#footnote-2)
- [Footnote 3](#footnote-3)
- [Learn more, child safety](/child-safety/)
- [Footnote 4](#footnote-4)
- [Footnote 5](#footnote-5)
- [Footnote 6](#footnote-6)
- [Explore Mac](/mac/)
- [MacBook Neo (2026)](/macbook-neo/)
- [MacBook Air with Apple silicon (2020 and later)](/macbook-air/)
- [MacBook Pro with Apple silicon (2020 and later)](/macbook-pro/)
- [iMac with Apple silicon (2021 and later)](/imac/)
- [Mac mini with Apple silicon (2020 and later)](/mac-mini/)
- [Mac Studio (2022 and later)](/mac-studio/)
- [Learn more about developing for macOS](https://developer.apple.com/macos/)
- [apple.com/apple-intelligence](/apple-intelligence/)
- [Operating Systems](/os/)
- [AirTag](/airtag/)
- [Gift Cards](/us/shop/goto/giftcards)
- [Wallet](/wallet/)
- [Apple Card](/apple-card/)
- [Apple Pay](/apple-pay/)

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
- button: Play Explore what’s new for macOS gallery
- button: Previous Item, Siri AI gallery
- button: Next Item, Siri AI gallery
- button: Previous Item, Apple Intelligence gallery
- button: Next Item, Apple Intelligence gallery
- button: Previous Item, child safety gallery
- button: Next Item, child safety gallery

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

- Raw REA Evidence: `catalog/rea/evidence/apple-macos.json`
- Evidence ID: `ev_5be5899a66e9c2e41480b1cf7fed8deddff816f47b3e6794b6e058bb015e22f6`
- Accessibility outline: 31028 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
