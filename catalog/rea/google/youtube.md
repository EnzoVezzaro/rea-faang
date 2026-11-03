# REA web-surface report — YouTube (`youtube`)

Browser capture of the public web surface of YouTube, recorded with REA.

| | |
|---|---|
| Product | YouTube (`youtube`) |
| Company | Google |
| Target | https://www.youtube.com/ |
| Resolved URL | https://www.youtube.com/ |
| Page title | Try searching to get started |
| Captured | 2026-11-03T01:42:47.226Z |
| Status | captured |
| REA Evidence ID | `ev_9d4052f32e9e023e730a480ac48bb1c7338cfa1cd10f94d4efbe5e9040aadc94` |
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
    "url": "https://www.youtube.com/"
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

- Try searching to get started

### Landmarks

- banner
- search
- navigation
- main

### Links

- [YouTube Home](/)
- [Sign in](https://accounts.google.com/ServiceLogin?service=youtube&uilel=3&passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252F&hl=en&ec=65620)
- [Home](/)
- [Shorts](/shorts/)
- [Subscriptions](/feed/subscriptions)
- [You](/feed/you)

### Controls

- button: Guide
- button: Skip navigation
- button: Search
- button: Search with your voice
- button: Settings

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

- Raw REA Evidence: `catalog/rea/evidence/youtube.json`
- Evidence ID: `ev_9d4052f32e9e023e730a480ac48bb1c7338cfa1cd10f94d4efbe5e9040aadc94`
- Accessibility outline: 907 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
