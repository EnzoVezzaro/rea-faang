# REA web-surface report — Android (`android`)

Browser capture of the public web surface of Android, recorded with REA.

| | |
|---|---|
| Product | Android (`android`) |
| Company | Google |
| Target | https://www.android.com/ |
| Resolved URL | https://www.android.com/ |
| Page title | Experience the future first on Android. |
| Captured | 2026-11-03T01:31:07.162Z |
| Status | captured |
| REA Evidence ID | `ev_81e8cc9ad5cf16ecf87c87cbfee56aa1e034a6fc38d62a2a7dd1598879443a01` |
| REA provider | rea-playwright-browser-scenario v1 |
| Browser | Chromium 156.0.8078.80 |
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
    "url": "https://www.android.com/"
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

- Experience the future first on Android.
- Explore the latest on Android.
- Voice-to-text just got smarter.
- A vision for intelligence coming soon.
- Circle it. Search it. Find the look.
- Introducing Googlebook.
- Shop the latest phones.
- Google Pixel 11 Pro / Pro XL
- Google Pixel 11 Pro Fold
- Google Pixel 11
- Samsung Galaxy Z Fold8 Ultra
- Samsung Galaxy Z Fold8
- Samsung Galaxy Z Flip8
- The best of Gemini on our most advanced devices.1
- Reality, expanded.
- Android has your must-haves and more.
- Google Messages
- Security
- Find Hub
- New phone? No problem.
- AI on Android.
- Your AI assistant from Google.
- One gesture, many possibilities.
- Making AI helpful for everyone.
- Be in the mix with Android.

### Landmarks

- banner: site header
- navigation
- search
- banner: Expirable banner
- main
- contentinfo
- navigation

### Links

- [Jump to content](#page-content)
- [Android](https://www.android.com/)
- [Gemini Intelligence](https://www.android.com/gemini-intelligence/)
- [Shop phones](https://www.android.com/phones/shop/)
- [Buy now](https://us.shop.xreal.com/products/xreal-aura?utm_source=google&utm_medium=extension&utm_campaign=AURA_Preorder&utm_content=android_com_landingpage)
- [Try Gemini](https://gemini.google.com/app/download/mobile?android-min-version=301356232&ios-min-version=322.0&is_sa=1&campaign_id=android_web_gemini&utm_medium=xpa&utm_source=android_web&utm_campaign=android_web_gemini&pt=9008&mt=8&ct=android_web_gemini)
- [Find your perfect phone](https://www.android.com/phones/shop/)
- [See the latest features](https://www.android.com/new-features-on-android/featured/)
- [Explore Rambler](https://www.android.com/gemini-intelligence/#voice-to-text)
- [Explore glasses](https://www.android.com/xr/#intelligent-eyewear)
- [See how it works](https://www.android.com/ai/circle-to-search/)
- [Buy now](https://googlebook.google/?utm_source=android&utm_medium=owned&utm_campaign=android_website)
- [Explore](https://googlebook.google/shop/?utm_source=android&utm_medium=owned&utm_campaign=android_web_shop)
- [Google Pixel 11 Pro / Pro XL](https://store.google.com/config/pixel_11_pro?utm_source=android&utm_medium=google_oo&utm_campaign=GS108833&utm_term=pixel&utm_content=web)
- [Explore Gemini Intelligence](https://www.android.com/gemini-intelligence/)
- [Experience Android XR](https://www.android.com/xr/)
- [Start chatting](https://www.android.com/google-messages/)
- [See how it works](https://www.android.com/safety/security/)
- [Go to Find Hub](https://www.android.com/learn-find-hub/)
- [Transfer to new Android](https://www.android.com/switch-to-android/)
- [Explore the power of AI](https://android.com/ai/)
- [Explore Gemini](https://android.com/ai/gemini/)
- [Search smarter](https://android.com/ai/circle-to-search/)
- [Discover more AI](https://android.com/ai/more/)
- [Follow us on X](https://x.com/android)
- [Follow us on Instagram](https://www.instagram.com/android/)
- [Follow us on YouTube](https://www.youtube.com/user/GoogleMobile/)
- [Follow us on Facebook](https://www.facebook.com/AndroidOfficial)
- [Follow us on LinkedIn](https://www.linkedin.com/showcase/android_by_google)
- [Security link opens in same tab or window](https://www.android.com/safety/security/)
- [Privacy link opens in same tab or window](https://www.android.com/safety/privacy/)
- [Physical Safety link opens in same tab or window](https://www.android.com/safety/physical-safety/)
- [Vision features link opens in same tab or window](https://www.android.com/accessibility/vision/)
- [Audio features link opens in same tab or window](https://www.android.com/accessibility/audio/)
- [Mobility features link opens in same tab or window](https://www.android.com/accessibility/mobility/)
- [Overview link opens in same tab or window](https://www.android.com/better-together/)
- [Quick Share link opens in same tab or window](https://www.android.com/quick-share/)
- [Google Cast link opens in same tab or window](https://www.android.com/better-together/google-cast/)
- [Fast Pair link opens in same tab or window](https://www.android.com/better-together/fast-pair/)
- [Android TV link opens in same tab or window](https://www.android.com/tv/)

### Controls

- button: About
- button: Features
- button: Devices
- button: Learn
- button: Show search
- button: Hide the banner
- button: Video Play/pause
- button: Go to the next page
- button: Selected tab 1 of 2
- button: Selected tab 2 of 2
- button: Google Pixel 11 Pro Fold
- button: Google Pixel 11
- button: Samsung Galaxy Z Fold8 Ultra
- button: Samsung Galaxy Z Fold8
- button: Samsung Galaxy Z Flip8

## Limitations (from REA)

- Artifact identity is unavailable for this observation.
- Event sequence records provider receipt order; simultaneous browser causality is not inferred.
- Network content is retained only when selected; Playwright response-body bytes are API results and are not guaranteed to match wire bytes.
- Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage.
- Network content reads settle within 5 seconds each and the observer does not request bodies from unfinished responses.
- Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality.
- Storage values are hashed only after declared-secret redaction.
- Browser host platform and architecture were not observed.

## Provenance

- Raw REA Evidence: `catalog/rea/evidence/android.json`
- Evidence ID: `ev_81e8cc9ad5cf16ecf87c87cbfee56aa1e034a6fc38d62a2a7dd1598879443a01`
- Accessibility outline: 17505 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
