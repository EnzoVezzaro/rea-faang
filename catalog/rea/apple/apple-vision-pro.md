# REA web-surface report — Vision Pro (`apple-vision-pro`)

Browser capture of the public web surface of Vision Pro, recorded with REA.

| | |
|---|---|
| Product | Vision Pro (`apple-vision-pro`) |
| Company | Apple |
| Target | https://www.apple.com/apple-vision-pro/ |
| Resolved URL | https://www.apple.com/apple-vision-pro/ |
| Page title | Apple Vision Pro |
| Captured | 2026-10-13T18:58:20.561Z |
| Status | captured |
| REA Evidence ID | `ev_506818f0236b9f121743ca946197460b3d29f5e10e78167db6e11c4b6606a7a8` |
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
    "url": "https://www.apple.com/apple-vision-pro/"
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

- Apple Vision Pro
- New powerful M5 chip and comfortable Dual Knit Band.
- Take a closer look.
- Entertainment
- Productivity
- Photos and Videos
- Connection
- Apps
- visionOS
- Technology
- Pushing boundaries from the inside out.
- More pixels than a 4K TV. For each eye.
- Our most advanced Spatial Audio system ever.
- Responsive, precision eye tracking.
- A sophisticated sensor array.
- Revolutionary dual‑chip performance. Now powered by M5.
- Values
- Our values lead the way.
- Explore Apple Vision Pro accessories.
- An exciting new platform. A world of new opportunities for developers.
- Apple Footer
- Shop and Learn
- Apple Wallet
- Account
- Apple Store

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
- [Apple Vision Pro](/apple-vision-pro/)
- [Tech Specs](/apple-vision-pro/specs/)
- [visionOS](/os/visionos/)
- [Book a demo](/retail/instore-shopping-session/session-selection/?topic=visionpro)
- [Buy Apple Vision Pro](/us/shop/goto/buy_vision/apple_vision_pro)
- [Book a demo of Apple Vision Pro](/retail/instore-shopping-session/session-selection/?topic=visionpro)
- [stream wolfs on apple tv with a subscription, Opens in new window](https://tv.apple.com/us/movie/wolfs/umc.cmc.c3xhu25rw4jxxxzq4oio6snu?itscg=10000&itsct=atv--vision_pro-stream5-apl-251015)
- [Footnote 1](#footnote-1)
- [Footnote 2](#footnote-2)
- [Footnote 3](#footnote-3)
- [Footnote 4](#footnote-4)
- [Footnote 5](#footnote-5)
- [Learn more about Apple Intelligence](/apple-intelligence/)
- [Footnote 6](#footnote-6)
- [Learn more about Apple Intelligence](/apple-intelligence/)
- [Visit Apple Vision Pro for Enterprise](/business/enterprise/apple-vision-pro/)
- [Footnote 7](#footnote-7)
- [Visit the App Store, Apple Vision Pro](https://apps.apple.com/us/vision)
- [explore apps for apple vision pro](https://apps.apple.com/us/vision)
- [Learn more about visionOS](/os/visionos/)
- [Footnote 8](#footnote-8)
- [Footnote 9](#footnote-9)
- [Footnote 10](#footnote-10)
- [Apple and the environment](/environment/)
- [Shop Apple Vision Pro accessories](/us/shop/goto/vision/accessories)
- [Learn more about developing for visionOS](https://developer.apple.com/visionos/)
- [apple.com/apple-intelligence](/apple-intelligence/)
- [support.apple.com/guide/iphone/spatial-photos-record-videos-apple-vision-pro-iph6e3a6d4fe/ios](https://support.apple.com/guide/iphone/spatial-photos-record-videos-apple-vision-pro-iph6e3a6d4fe/ios)

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
- button: Intro to Apple Vision Pro animation, loading
- button: Design innovation animation, loading
- button: Dual-function Fit Dial animation, loading
- button: Light Seal attachment animation, loading
- button: Previous, design gallery
- button: Next, design gallery
- button: Entertainment animation, loading

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

- Raw REA Evidence: `catalog/rea/evidence/apple-vision-pro.json`
- Evidence ID: `ev_506818f0236b9f121743ca946197460b3d29f5e10e78167db6e11c4b6606a7a8`
- Accessibility outline: 48908 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
