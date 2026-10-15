# REA web-surface report — Apple Watch (`apple-watch`)

Browser capture of the public web surface of Apple Watch, recorded with REA.

| | |
|---|---|
| Product | Apple Watch (`apple-watch`) |
| Company | Apple |
| Target | https://www.apple.com/watch/ |
| Resolved URL | https://www.apple.com/watch/ |
| Page title | Apple Watch |
| Captured | 2026-10-14T03:54:32.178Z |
| Status | captured |
| REA Evidence ID | `ev_844f9cbc1a65c5f0020402014d5b95957bb3dbf1bd4d85eb5fe342f96b40f150` |
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
    "url": "https://www.apple.com/watch/"
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

- Apple Watch
- Explore the lineup.
- Apple Watch Series 12
- Apple Watch Ultra 4
- Apple Watch SE 3
- Why Apple is the best place to shop Apple Watch.
- Apple Upgrade
- Apple Trade In
- Ways to Buy
- Education
- Delivery and Pickup
- Personal Setup
- Guided Video Shopping
- Apple Store App
- Apple Watch essentials.
- Make it personal. Make it pop.
- Made for each other.
- Apple Watch and iPhone
- Apple Watch and AirPods
- Apple Watch and Apple Fitness+
- Explore Watch
- Shop Watch
- More from Watch
- Apple Footer
- Shop and Learn

### Landmarks

- navigation: Global
- main
- navigation: Apple Watch Family of products
- navigation: Apple Watch
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
- [Footnote ◊ symbol](#footnote-external-1)
- [Learn more, Apple Upgrade](/us/shop/goto/apple_upgrade)
- [Apple Watch Series 12 New](/apple-watch-series-12/)
- [Apple Watch Ultra 4 New](/apple-watch-ultra-4/)
- [Apple Watch SE 3](/apple-watch-se-3/)
- [Apple Watch Nike New Colors](/apple-watch-nike/)
- [Apple Watch Hermès New](/apple-watch-hermes/)
- [Compare Apple Watch models](/watch/compare/)
- [Shop Apple Watch bands new colors](/us/shop/goto/watch/bands)
- [Accessories for Apple Watch](/us/shop/goto/watch/accessories)
- [Apple Fitness+](/apple-fitness-plus/)
- [Shop Apple Watch models](/us/shop/goto/buy_watch)
- [watchOS 27](/os/watchos/)
- [Compare all models](/watch/compare/)
- [Learn more, Apple Watch Series 12](/apple-watch-series-12/)
- [Footnote * symbol](#footnote-promoted-1)
- [Footnote ◊◊ symbol](#footnote-external-2)
- [Buy, Apple Watch Series 12](/us/shop/goto/buy_watch/apple_watch_series_12)
- [Learn more, Apple Watch Ultra 4](/apple-watch-ultra-4/)
- [Buy, Apple Watch Ultra 4](/us/shop/goto/buy_watch/apple_watch_ultra_4)
- [Learn more, Apple Watch SE 3](/apple-watch-se-3/)
- [Buy, Apple Watch SE 3](/us/shop/goto/buy_watch/apple_watch_se)
- [Shop Apple Watch](/us/shop/goto/buy_watch)
- [Footnote 1](#footnote-numbered-1)
- [Footnote ◊◊◊ symbol](#footnote-external-3)
- [Footnote 2](#footnote-numbered-2)
- [Footnote ** symbol](#footnote-promoted-2)
- [All Apple Watch accessories](/us/shop/goto/watch/accessories)

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
- button: Next Apple Watch family of products
- button: Previous item in Apple Watch compare gallery
- button: Next item in Apple Watch compare gallery
- button: Learn more, Apple Trade In
- button: Learn more, Apple Card Monthly Installments
- button: Learn more, about education pricing
- button: Learn more, delivery and pickup options.

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

- Raw REA Evidence: `catalog/rea/evidence/apple-watch.json`
- Evidence ID: `ev_844f9cbc1a65c5f0020402014d5b95957bb3dbf1bd4d85eb5fe342f96b40f150`
- Accessibility outline: 36531 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
