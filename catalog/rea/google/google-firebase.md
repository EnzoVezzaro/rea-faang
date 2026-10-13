# REA web-surface report — Firebase (`google-firebase`)

Browser capture of the public web surface of Firebase, recorded with REA.

| | |
|---|---|
| Product | Firebase (`google-firebase`) |
| Company | Google |
| Target | https://firebase.google.com/ |
| Resolved URL | https://firebase.google.com/ |
| Page title | Get $300 to unlock all Firebase features |
| Captured | 2026-10-13T18:59:34.985Z |
| Status | captured |
| REA Evidence ID | `ev_d99e81bf8c94ed8e76f683ebc831d49b53a3a17bfe6952fe9a535c625d264f04` |
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
    "url": "https://firebase.google.com/"
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

- Get $300 to unlock all Firebase features
- Make your app the best it can be with Firebase and generative AI
- Easily integrate Firebase with Gemini and the latest AI technology from Google
- Easily integrate Firebase with your team's favorite tools.
- Easy to integrate on iOS, Android, and the Web
- Keep up to date on everything Firebase
- Building an iOS app in 6 hours with Firebase and Antigravity
- Google Analytics for Firebase iOS SDK outage on September 28, 2026
- Trusted by the largest apps and games
- All Firebase products
- Build
- Run
- Learn
- Stay connected
- Support

### Landmarks

- banner
- navigation: Upper tabs
- main
- navigation: On this page
- navigation
- main
- navigation: Footer links
- navigation: Other Google Developers websites
- navigation: Utility links

### Links

- [Skip to main content](#main-content)
- [Firebase](/)
- [Build](https://firebase.google.com/products-build)
- [Run](https://firebase.google.com/products-run)
- [Solutions](https://firebase.google.com/solutions)
- [Blog](//firebase.blog)
- [Go to console](//console.firebase.google.com)
- [Sign in](https://firebase.google.com/_d/signin?continue=https%3A%2F%2Ffirebase.google.com%2F&prompt=select_account)
- [Get Started](https://console.cloud.google.com/freetrial?om=fb&redirectPath=https://console.firebase.google.com/project/_/overview?purchaseBillingPlan=metered&redirectWithId=true&flow=firebaseMetered&accountNameKey=firebase)
- [Get started in console](https://console.firebase.google.com/)
- [App Hosting](/products/app-hosting)
- [SQL Connect](/products/sql-connect)
- [Firebase AI Logic](/products/firebase-ai-logic)
- [View all Build products](/products-build)
- [App Distribution](/products/app-distribution)
- [Crashlytics](/products/crashlytics)
- [Remote Config](/products/remote-config)
- [View all Run products](/products-run)
- [Agent Skills icon Agent Skills](/docs/ai-assistance/agent-skills)
- [Firebase AI Logic icon Firebase AI Logic](/products/firebase-ai-logic)
- [View generative AI options](/products/generative-ai)
- [Flutterlogo Flutter](https://flutter.dev/)
- [Google Adslogo Google Ads](https://ads.google.com/home/campaigns/app-ads/)
- [AdMoblogo AdMob](/firebase-and-admob)
- [Google Marketing Platformlogo Google Marketing Platform](https://support.google.com/firebase/answer/7392275)
- [Google Playlogo Google Play](https://support.google.com/firebase/answer/6392038)
- [Data Studiologo Data Studio](https://support.google.com/datastudio/answer/7259176)
- [BigQuerylogo BigQuery](https://support.google.com/firebase/answer/6318765)
- [Slacklogo Slack](/docs/crashlytics/alerts-basic-integrations#slack)
- [Jiralogo Jira](/docs/crashlytics/alerts-basic-integrations#jira)
- [Android Studiologo Android Studio](https://developer.android.com/studio/debug/app-quality-insights)
- [Learn more](/integrations)
- [View developer docs](/docs)
- [View all news](https://firebase.blog/)
- [- Building an iOS app in 6 hours with Firebase and Antigravity](https://firebase.blog/posts/2026/09/build-ios-app-firebase-antigravity)
- [Read more - Building an iOS app in 6 hours with Firebase and Antigravity](https://firebase.blog/posts/2026/09/build-ios-app-firebase-antigravity)
- [- Google Analytics for Firebase iOS SDK outage on September 28, 2026](https://firebase.blog/posts/2026/10/firebase-analytics-outage)
- [Read more - Google Analytics for Firebase iOS SDK outage on September 28, 2026](https://firebase.blog/posts/2026/10/firebase-analytics-outage)
- [View solutions](/solutions)
- [Get started](https://console.firebase.google.com/)

### Controls

- button: Dropdown menu for Build
- button: Dropdown menu for Run
- button: Dropdown menu for Extended Navigation
- button: Language
- button: Chat

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

- Raw REA Evidence: `catalog/rea/evidence/google-firebase.json`
- Evidence ID: `ev_d99e81bf8c94ed8e76f683ebc831d49b53a3a17bfe6952fe9a535c625d264f04`
- Accessibility outline: 15116 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
