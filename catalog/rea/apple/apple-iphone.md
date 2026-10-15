# REA web-surface report — iPhone (`apple-iphone`)

Browser capture of the public web surface of iPhone, recorded with REA.

| | |
|---|---|
| Product | iPhone (`apple-iphone`) |
| Company | Apple |
| Target | https://www.apple.com/iphone/ |
| Resolved URL | https://www.apple.com/iphone/ |
| Page title | iPhone |
| Captured | 2026-10-14T03:54:21.543Z |
| Status | captured |
| REA Evidence ID | `ev_857cffdb1530acad230dc1fcea9e23d5550a09330fdb26f079a081a1fe84db04` |
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
    "url": "https://www.apple.com/iphone/"
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

- iPhone
- iPhone Duo
- Explore the lineup.
- New iPhone Duo
- New iPhone 18 Pro
- iPhone Air
- iPhone 17
- iPhone 17e
- iPhone 16
- Why Apple is the best place to shop iPhone.
- Apple Upgrade
- Carrier Deals at Apple
- Apple Trade In
- Ways to Buy
- Personal Setup
- Delivery and Pickup
- Guided Shopping
- Apple Store App
- Get to know iPhone.
- Design
- Cutting-Edge Cameras
- Chip and Battery Life
- Apple Intelligence and Siri AI
- Environment
- Privacy

### Landmarks

- navigation: Global
- main
- navigation: iPhone family
- navigation: iPhone Explore iPhone Explore All iPhone iPhone Duo iPhone 18 Pro iPhone Air iPhone 17 iPhone 17e iPhone 16 Compare iPhone Switch from Android Shop iPhone Shop iPhone iPhone Accessories Apple Upgrade Apple Trade In Carrier Deals at Apple Financing Personal Setup More from iPhone iPhone Support AppleCare iOS 27 Apple Intelligence and Siri Apps by Apple iPhone Privacy Better with Mac iCloud+ Wallet, Pay, Card Apple at Work
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
- [Get started, iPhone Duo pre-order](/us/shop/goto/buy_iphone)
- [iPhone Duo New](/iphone-duo/)
- [iPhone 18 Pro New](/iphone-18-pro/)
- [iPhone Air](/iphone-air/)
- [iPhone 17](/iphone-17/)
- [iPhone 17e](/iphone-17e/)
- [iPhone 16](/us/shop/goto/buy_iphone/iphone_16)
- [Compare](/iphone/compare/)
- [Accessories](/us/shop/goto/iphone/accessories)
- [Shop iPhone](/us/shop/goto/buy_iphone)
- [iOS 27](/os/ios/)
- [Learn more, iPhone Duo](/iphone-duo/)
- [View pricing, iPhone Duo](/us/shop/goto/buy_iphone/iphone_duo)
- [Compare all models](/iphone/compare/)
- [iPhone Duo, Star White color, angled to the left, inner display with display screen showing an image of a dessert, iPhone Duo, Star White color, angled to the left, closed, back exterior, 48MP Dual Fusion rear cameras in top corner, two lenses, microphone, flash](/iphone-duo/)
- [Footnote 9](#footnote-12)
- [Footnote ◊ symbol](#footnote-3)
- [iPhone 18 Pro, Burgundy color, side angle, partial front exterior, all-screen design display, action button, volume up/down buttons, iPhone 18 Pro, Burgundy color, side angle, complete back exterior, 48MP Pro Fusion camera system, Apple logo in center, side button, Camera Control button](/iphone-18-pro/)
- [Learn more, iPhone 18 Pro](/iphone-18-pro/)
- [Buy, iPhone 18 Pro](/us/shop/goto/buy_iphone/iphone_18_pro)
- [iPhone Air in Sky Blue finish, partial-screen display and side angle shows - Action button, volume button and side button. Back exterior shows Fusion camera system in top left corner.](/iphone-air/)
- [Learn more, iPhone Air](/iphone-air/)
- [Buy, iPhone Air](/us/shop/goto/buy_iphone/iphone_air)
- [iPhone 17 in Lavender finish, partial-screen display and side angle shows - Action, volume and side button. Back exterior shows Dual Fusion camera system in top left corner.](/iphone-17/)
- [Learn more, iPhone 17](/iphone-17/)
- [Buy, iPhone 17](/us/shop/goto/buy_iphone/iphone_17)
- [Front and back of iPhone 17e in soft pink, partial front screen, full back with Apple logo and single camera, side shows Action, volume and side buttons.](/iphone-17e/)
- [Learn more, iPhone 17e](/iphone-17e/)

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
- button: next item
- button: Play Hero gallery
- button: Previous item in Explore the lineup gallery
- button: Next item in Explore the lineup gallery
- button: Read more about Apple Trade in
- button: Read more about Apple Card
- button: Read more about Personal Setup

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

- Raw REA Evidence: `catalog/rea/evidence/apple-iphone.json`
- Evidence ID: `ev_857cffdb1530acad230dc1fcea9e23d5550a09330fdb26f079a081a1fe84db04`
- Accessibility outline: 117990 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
