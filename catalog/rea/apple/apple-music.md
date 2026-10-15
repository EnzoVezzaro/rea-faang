# REA web-surface report — Apple Music (`apple-music`)

Browser capture of the public web surface of Apple Music, recorded with REA.

| | |
|---|---|
| Product | Apple Music (`apple-music`) |
| Company | Apple |
| Target | https://www.apple.com/apple-music/ |
| Resolved URL | https://www.apple.com/apple-music/ |
| Page title | Apple Music |
| Captured | 2026-10-14T03:55:00.269Z |
| Status | captured |
| REA Evidence ID | `ev_5580e369c15707f4261157c4764aba488117dfb83c8d61b1ce54cf872ed2e516` |
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
    "url": "https://www.apple.com/apple-music/"
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

- Apple Music
- For the love of music.
- Start listening for free.
- New Subscriber
- Family Plan
- New Devices
- Student Plan
- Listening Experience
- Music at its most immersive.
- Music Discovery
- Where your new favorites find you.
- Exclusive Content
- Get closer to your favorite artists.
- Apple Music Sing
- It’s not karaoke. It’s way better.
- Shared Listening
- Get your friends in the mix.
- Apple Music Classical
- The definitive classical music app.
- Shazam Music Discovery
- Never miss a beat.
- Listen to Apple Music on all your devices.
- Even more places to get Apple Music.
- Choose the plan that’s right for you.
- Individual

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
- [Apple Music](/apple-music/)
- [Try Apple Music free, * footnote](https://music.apple.com/home?itscg=10000&itsct=music_overview_nav)
- [Footnote ** symbol](#footnote-2)
- [Learn more, Apple One](https://offers.appleone.apple/new-device-offer)
- [Footnote 1](#footnote-4)
- [Footnote 2](#footnote-5)
- [Footnote 3](#footnote-6)
- [Try Apple Music free, * footnote](https://music.apple.com/home?itscg=10000&itsct=music_overview_hero)
- [Compare plans](#plans)
- [Try Apple Music individual plan 1 month free, * footnote](https://music.apple.com/home?itscg=10000&itsct=music_overview_plan_individual)
- [Try Apple Music family plan 1 month free, 4 footnote](https://music.apple.com/subscribe?itscg=10000&itsct=music_overview_plan_family)
- [Try Apple Music new device plan 3 months free, 5 footnote](https://offers.applemusic.apple/new-device-offer?itscg=10000&itsct=music_overview_plan_hwb)
- [Try Apple Music student plan 1 month free, 6 footnote](https://music.apple.com/student?itscg=10000&itsct=music_overview_plan_student)
- [Try Apple One 1 month free, 7 footnote](https://one.apple.com/us/music?itscg=10000&itsct=music_overview_plan_appleone)
- [Find compatible vehicles](/ios/carplay/available-models/)
- [Download on Google Play](https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=http%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fapp%3Dmusic%26at%3D1000lpya%26ct%3D)
- [Download on Microsoft Store](https://apps.microsoft.com/detail/9pfhdd62mxs1?hl=en-US&gl=US)
- [Set up your device](https://support.apple.com/HT211087?cid=general-applemusic-marcom-08152025)
- [Try Apple Music individual plan free, * footnote](https://music.apple.com/subscribe?itscg=10000&itsct=music_overview_compare_individual)
- [Try Apple Music family plan free, 4 footnote](https://music.apple.com/subscribe?itscg=10000&itsct=music_overview_compare_family)
- [Try Apple Music student plan free, 6 footnote](https://music.apple.com/student?itscg=10000&itsct=music_overview_compare_student)
- [try Apple One free, 7 footnote](https://one.apple.com/us/music?itscg=10000&itsct=music_overview_compare_appleone)
- [Learn more, Apple One](/apple-one/)
- [Apple Music for Artists, learn more](https://artists.apple.com/)
- [Apple Performance Partners Program, learn more](/music/workingwithus/)
- [terms](/promo/)
- [apple.com/family-sharing](/family-sharing/)
- [Entertainment](/services/)

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
- button: Previous in get started gallery
- button: Next in get started gallery
- button: Learn more about listening experience
- button: Learn more about music discovery
- button: Learn more about exclusive content
- button: Learn more about apple music sing
- button: Learn more about shared listening

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

- Raw REA Evidence: `catalog/rea/evidence/apple-music.json`
- Evidence ID: `ev_5580e369c15707f4261157c4764aba488117dfb83c8d61b1ce54cf872ed2e516`
- Accessibility outline: 30604 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
