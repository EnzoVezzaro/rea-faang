# REA web-surface report — iPad (`apple-ipad`)

Browser capture of the public web surface of iPad, recorded with REA.

| | |
|---|---|
| Product | iPad (`apple-ipad`) |
| Company | Apple |
| Target | https://www.apple.com/ipad/ |
| Resolved URL | https://www.apple.com/ipad/ |
| Page title | iPad |
| Captured | 2026-10-14T03:54:26.853Z |
| Status | captured |
| REA Evidence ID | `ev_09b86233efdb1ce40b1760282fe9910a50093c5fd9bf71793607d6ed65b1af4d` |
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
    "url": "https://www.apple.com/ipad/"
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

- iPad
- Explore the lineup.
- iPad Pro
- iPad Air
- iPad mini
- Why Apple is the best place to shop iPad.
- Apple Upgrade
- Ways to Buy
- Apple Trade In
- Education
- Personal Setup
- Delivery and Pickup
- Engraving
- Guided Shopping
- Apple Store App
- Get to know iPad.
- iPadOS + Apps
- Apple Intelligence
- Productivity
- Creativity
- Learning
- Entertainment
- Apple Pencil
- iPad essentials.
- Keyboards for iPad

### Landmarks

- navigation: Global
- main
- navigation: iPad family of products
- navigation: iPad
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
- [iPad Pro](/ipad-pro/)
- [iPad Air](/ipad-air/)
- [iPad](/ipad-11/)
- [iPad mini](/ipad-mini/)
- [Compare iPad models](/ipad/compare/)
- [Apple Pencil](/apple-pencil/)
- [Keyboards](/ipad-keyboards/)
- [Accessories for iPad](/us/shop/goto/ipad/accessories)
- [iPadOS 27](/os/ipados/)
- [Shop iPad](/us/shop/goto/buy_ipad)
- [Compare all models](/ipad/compare/)
- [Learn more, iPad Pro](/ipad-pro/)
- [Footnote * symbol](#footnote-promoted-1)
- [Footnote ◊◊ symbol](#footnote-external-2)
- [Buy, iPad Pro](/us/shop/goto/ipad_pro/select)
- [Learn more, iPad Air](/ipad-air/)
- [Buy, iPad Air](/us/shop/goto/buy_ipad/ipad_air)
- [Learn more, iPad (A16)](/ipad-11/)
- [Buy, iPad (A16)](/us/shop/goto/buy_ipad/ipad)
- [Learn more, iPad mini](/ipad-mini/)
- [Buy, iPad mini](/us/shop/goto/buy_ipad/ipad_mini)
- [Shop iPad](/us/shop/goto/buy_ipad)
- [Footnote ◊◊◊ symbol](#footnote-external-3)
- [Footnote 1](#footnote-numbered-1)
- [Footnote ** symbol](#footnote-promoted-2)
- [Learn more, Apple Pencil](/apple-pencil/)

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
- button: Previous item in Explore the lineup gallery
- button: Next item in Explore the lineup gallery
- button: Learn more about Apple Card Monthly Installments
- button: Learn more about Apple Trade in
- button: Learn more, education pricing
- button: Learn more about your new iPad
- button: Learn more about delivery and pickup options.

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

- Raw REA Evidence: `catalog/rea/evidence/apple-ipad.json`
- Evidence ID: `ev_09b86233efdb1ce40b1760282fe9910a50093c5fd9bf71793607d6ed65b1af4d`
- Accessibility outline: 39334 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
