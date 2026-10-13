# REA web-surface report — Logic Pro (`apple-logic-pro`)

Browser capture of the public web surface of Logic Pro, recorded with REA.

| | |
|---|---|
| Product | Logic Pro (`apple-logic-pro`) |
| Company | Apple |
| Target | https://www.apple.com/logic-pro/ |
| Resolved URL | https://www.apple.com/logic-pro/ |
| Page title | Logic Pro |
| Captured | 2026-10-13T18:57:51.544Z |
| Status | captured |
| REA Evidence ID | `ev_6ec0f8762d755e9034465b3c31afc4ccd820660c745e7c2eb91c9df552070ed2` |
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
    "url": "https://www.apple.com/logic-pro/"
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

- Logic Pro
- Sound thinking.
- Apple Creator Studio A suite deal for any creator.
- Get to know Logic Pro.
- Beat‑Making Tools
- Build custom drum kits.
- Quick Sampler.
- Drum Synth.
- Step Sequencer.
- Sounds, Instruments, and Effects
- Sound Library.
- Instruments.
- Effects.
- Third‑party plug‑ins.
- Plug‑ins and play.
- Intelligence
- Split audio into isolated tracks.
- Mastering Assistant.
- Instant chord detection.
- Pitch Correction.
- Smart Tempo.
- Get that analog sound.
- Session Players vibe with you.
- Workflows
- Flashback Capture.

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
- [Logic Pro](/logic-pro/)
- [Explore Apple Creator Studio](/apple-creator-studio/)
- [Try it free, 1 footnote, Logic Pro](https://apps.apple.com/app/id1615087040?itsct=acs-fcp_nav-nav_try-acs-260126&pt=2003&ct=marcom-fcp-stickyNav&itscg=10000)
- [Try it free, 1 footnote, Apple Creator Studio](https://apps.apple.com/app-bundle/id1868448255?itsct=acs-lp_router-rout_try-acs-260126&pt=2003&ct=marcom-lp-routerTile&itscg=10000)
- [Learn more, Apple Creator Studio](/apple-creator-studio/)
- [Logic Pro for Mac is also available as a one-time purchase on the App Store, opens in new window](https://apps.apple.com/us/app/logic-pro/id634148309?mt=12)
- [Footnote 2](#footnote-2)
- [Footnote 3](#footnote-3)
- [Footnote 4](#footnote-4)
- [Footnote 6](#footnote-6)
- [support.apple.com/121115](https://support.apple.com/121115)
- [support.apple.com/guide/iphone/aside/ipha92ce9733/26/ios/26](https://support.apple.com/guide/iphone/aside/ipha92ce9733/26/ios/26)
- [AirTag](/airtag/)
- [Gift Cards](/us/shop/goto/giftcards)
- [Wallet](/wallet/)
- [Apple Card](/apple-card/)
- [Apple Pay](/apple-pay/)
- [Apple Cash](/apple-cash/)
- [Manage Your Apple Account](https://account.apple.com/)
- [Apple Store Account](/us/shop/goto/account)
- [iCloud.com](https://www.icloud.com)
- [Apple One](/apple-one/)
- [Apple TV](/apple-tv/)
- [Apple Music](/apple-music/)
- [Apple Arcade](/apple-arcade/)
- [Apple Fitness+](/apple-fitness-plus/)
- [Apple News+](/apple-news/)
- [Apple Podcasts](/apple-podcasts/)

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
- button: Play Highlights Gallery
- button: Previous item in Beat-Making Tools Gallery
- button: Next item in Beat-Making Tools Gallery
- button: Previous item in Sounds, Instruments, and Effects Gallery
- button: Next item in Sounds, Instruments, and Effects Gallery
- button: Hear more about plug‑ins and sounds
- button: Previous item in Intelligence Gallery

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

- Raw REA Evidence: `catalog/rea/evidence/apple-logic-pro.json`
- Evidence ID: `ev_6ec0f8762d755e9034465b3c31afc4ccd820660c745e7c2eb91c9df552070ed2`
- Accessibility outline: 30932 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
