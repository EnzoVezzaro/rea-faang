# REA web-surface report — Luna (`amazon-luna`)

Browser capture of the public web surface of Luna, recorded with REA.

| | |
|---|---|
| Product | Luna (`amazon-luna`) |
| Company | Amazon |
| Target | https://luna.amazon.com/ |
| Resolved URL | https://luna.amazon.com/ |
| Page title | Luna |
| Captured | 2026-11-03T01:30:33.221Z |
| Status | captured |
| REA Evidence ID | `ev_08666cddd28a4042a26da30442d58c09506db343810867d1e5931ce8e75466bf` |
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
    "url": "https://luna.amazon.com/"
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

- Luna
- Use Phones As Controllers Use Phones As Controllers

### Landmarks

- banner
- main

### Links

- [Navigate to home](/)
- [Navigate to gamenight](/gamenight)
- [Navigate to remote-play](/remote-play)
- [Navigate to about](/about)
- [Leave feedback](https://luna.amazon.com/settings?subNav=help_and_feedback)
- [Discover](https://www.amazon.com/luna/landing-page)
- [Download Luna](https://luna.amazon.com/settings?subNav=download)
- [Luna Controller](https://www.amazon.com/dp/B07P989QTJ)
- [Compatible Controllers](https://www.amazon.com/gp/help/customer/display.html?nodeId=GYNLANRYMK4WTXSS)
- [Compatible Devices](https://www.amazon.com/gp/help/customer/display.html?nodeId=GP729A5ZM48TLPAJ)
- [Claim Games](https://luna.amazon.com/claims)
- [Getting Started](https://www.amazon.com/luna/getting-started)
- [Device Troubleshooting](https://www.amazon.com/gp/help/customer/display.html?nodeId=GHXY8X4SH5M9JYBD)
- [Network Issues](https://www.amazon.com/help/luna/networkissues)
- [Help and Customer Service](https://www.amazon.com/help/luna)
- [Parental Controls](https://luna.amazon.com/settings?subNav=parental_controls)
- [Language Settings](https://luna.amazon.com/settings?subNav=language_selection)
- [Payment Settings](https://www.amazon.com/cpe/yourpayments/settings/manageoneclick)
- [Manage Subscriptions](https://www.amazon.com/yourmembershipsandsubscriptions)
- [Instagram](https://www.instagram.com/amazonluna)
- [Facebook](https://www.facebook.com/AmazonLuna)
- [X (formerly Twitter)](https://twitter.com/amazonluna)
- [TikTok](https://www.tiktok.com/@amazonluna)
- [Reddit](https://www.reddit.com/r/amazonluna)
- [Amazon Luna Terms of Use](https://www.amazon.com/help/luna/tou)
- [Amazon Luna Legal Notices](https://www.amazon.com/help/luna/legalnotices)
- [Amazon Conditions of Use](https://www.amazon.com/conditionsofuse)
- [Amazon Privacy Notice](https://www.amazon.com/privacy)
- [Visit Luna home page](/)

### Controls

- button: CLOUD GAMING
- button: Home
- button: GameNight
- button: My Stuff
- button: Remote Play
- button: About
- button: Sign In
- button: Navigate to search
- button: Click to login
- button: featured product Shadow of the Tomb Raider Definitive Edition Become The Tomb Raider. Survive Her Darkest Hour. Rise as a Legend.
- button: More Info
- button: featured product Angry Birds Flock Party Fling birds, topple towers, and master the art of the slingshot
- button: featured product Bowling Mayhem Bowl like a pro. Sabotage like a villain.
- button: featured product WRC Generations Fully Loaded Edition Drive into the thick of the action
- button: featured product Centipede Swarm One centipede becomes many. Your nightmare begins now.
- button: Go to slide 1
- button: Go to slide 2
- button: Go to slide 3
- button: Go to slide 4
- button: Go to slide 5

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-luna.json`
- Evidence ID: `ev_08666cddd28a4042a26da30442d58c09506db343810867d1e5931ce8e75466bf`
- Accessibility outline: 9285 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
