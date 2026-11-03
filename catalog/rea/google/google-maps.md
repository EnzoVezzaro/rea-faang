# REA web-surface report — Google Maps (`google-maps`)

Browser capture of the public web surface of Google Maps, recorded with REA.

| | |
|---|---|
| Product | Google Maps (`google-maps`) |
| Company | Google |
| Target | https://maps.google.com/ |
| Resolved URL | https://www.google.com/maps |
| Page title | Google Maps |
| Captured | 2026-11-03T01:38:25.598Z |
| Status | captured |
| REA Evidence ID | `ev_a88368bcedb1e5f3e1f141985640f3408b73a1c23962974901b9d2661c75e22e` |
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
    "url": "https://maps.google.com/"
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

_No headings exposed._

### Landmarks

- search

### Links

_No links exposed._

### Controls

- button: Search
- button: Directions
- button: Menu
- button: Saved
- button: Recents
- button: Get app

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

- Raw REA Evidence: `catalog/rea/evidence/google-maps.json`
- Evidence ID: `ev_a88368bcedb1e5f3e1f141985640f3408b73a1c23962974901b9d2661c75e22e`
- Accessibility outline: 445 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
