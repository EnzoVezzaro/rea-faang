# REA web-surface report — Final Cut Pro (`apple-final-cut-pro`)

Browser capture of the public web surface of Final Cut Pro, recorded with REA.

| | |
|---|---|
| Product | Final Cut Pro (`apple-final-cut-pro`) |
| Company | Apple |
| Target | https://www.apple.com/final-cut-pro/ |
| Resolved URL | https://www.apple.com/final-cut-pro/ |
| Page title | Final Cut Pro |
| Captured | 2026-10-13T18:57:29.921Z |
| Status | captured |
| REA Evidence ID | `ev_f5e8b0549968eef18eb9938e9b35880ff20fe95c2465005baf6df6d6adfcbdca` |
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
    "url": "https://www.apple.com/final-cut-pro/"
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

- Final Cut Pro
- Reel intelligence.
- Apple Creator Studio A suite deal for any creator.
- Get to know Final Cut Pro.
- Video Editing
- Magnetic Timeline for fast, flexible editing.
- Isolate with Magnetic Mask.
- Automatic captions.
- Find any shot in a snap.
- Intelligence
- Automatically track movement.
- One-click color grading.
- Turn video into slow motion.
- Automatically reframe a clip.
- Get in the groove with Beat Detection.
- Titles, Transitions, and Effects
- Graphics and transitions.
- Dynamic titles.
- Powerful effects.
- Perfect your color grading.
- Stunning effects, set in Motion.
- Sound Editing
- Audio editing tools.
- Use effects from Logic Pro.
- Voice Isolation.

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
- [Final Cut Pro](/final-cut-pro/)
- [Explore Apple Creator Studio](/apple-creator-studio/)
- [Try it free, 1 footnote, Final Cut Pro](https://apps.apple.com/app/id1631624924?itsct=acs-fcp_nav-nav_try-acs-260126&pt=2003&ct=marcom-fcp-stickyNav&itscg=10000)
- [Try it free, 1 footnote, Apple Creator Studio](https://apps.apple.com/app-bundle/id1868448255?itsct=acs-fcp_router-rout_try-acs-260126&pt=2003&ct=marcom-fcp-routerTile&itscg=10000)
- [Learn more, Apple Creator Studio](/apple-creator-studio/)
- [Final Cut Pro for Mac is also available as a one-time purchase on the App Store, opens in new window](https://apps.apple.com/us/app/final-cut-pro/id424389933?mt=12)
- [Footnote 4](#footnote-4)
- [Footnote 2](#footnote-2)
- [Learn more about the Final Cut Pro Ecosystem](https://support.apple.com/125519)
- [Footnote 6](#footnote-6)
- [support.apple.com/121115](https://support.apple.com/121115)
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
- [Apple Books](/apple-books/)

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
- button: Previous item in Video Editing Gallery
- button: Next item in Video Editing Gallery
- button: Previous item in Intelligence Gallery
- button: Next item in Intelligence Gallery
- button: Previous item in Titles, Transitions, and Effects Gallery
- button: Next item in Titles, Transitions, and Effects Gallery

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

- Raw REA Evidence: `catalog/rea/evidence/apple-final-cut-pro.json`
- Evidence ID: `ev_f5e8b0549968eef18eb9938e9b35880ff20fe95c2465005baf6df6d6adfcbdca`
- Accessibility outline: 30849 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
