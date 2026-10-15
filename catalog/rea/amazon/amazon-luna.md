# REA web-surface report — Luna (`amazon-luna`)

Browser capture of the public web surface of Luna, recorded with REA.

| | |
|---|---|
| Product | Luna (`amazon-luna`) |
| Company | Amazon |
| Target | https://luna.amazon.com/ |
| Resolved URL | https://luna.amazon.com/ |
| Page title | Luna |
| Captured | 2026-10-14T04:00:33.498Z |
| Status | captured |
| REA Evidence ID | `ev_5e21572966259e9ca7d9205812a476d7783bce90cafcd4fee4d113c852e0ef3d` |
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
- button: Remote Play NEW
- button: Sign In
- button: Navigate to search
- button: Click to login
- button: Letter Trek Your word adventure starts now!
- button: More Info
- button: SONIC X SHADOW GENERATIONS Available now
- button: Sonic Mania Plus Race through all-new original Zones and updated Classics
- button: Garfield Kart 2 - All You Can Drift Ready to race against a real heavyweight?
- button: Centipede Swarm One centipede becomes many. Your nightmare begins now.
- button: Go to slide 1
- button: Go to slide 2
- button: Go to slide 3
- button: Go to slide 4
- button: Go to slide 5
- button: Go to slide 6

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-luna.json`
- Evidence ID: `ev_5e21572966259e9ca7d9205812a476d7783bce90cafcd4fee4d113c852e0ef3d`
- Accessibility outline: 8717 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
