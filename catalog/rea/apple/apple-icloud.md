# REA web-surface report — iCloud (`apple-icloud`)

Browser capture of the public web surface of iCloud, recorded with REA.

| | |
|---|---|
| Product | iCloud (`apple-icloud`) |
| Company | Apple |
| Target | https://www.icloud.com/ |
| Resolved URL | https://www.icloud.com/ |
| Page title | iCloud |
| Captured | 2026-11-03T01:31:37.772Z |
| Status | captured |
| REA Evidence ID | `ev_2301c78b2780bc1d0dd4789c23b147b57c1b1efd37a529c9037228e05bbed0b5` |
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
    "url": "https://www.icloud.com/"
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

- iCloud
- The best place for all your photos, files, notes, mail, and more.
- Easily access apps and data from your iPhone on the web
- More storage, plus features to protect your privacy and connect with friends

### Landmarks

- banner
- main
- contentinfo

### Links

- [Navigate to icloud.com home page](/)
- [apple.com/icloud (opens in a new tab)](https://apple.com/icloud)
- [System Status (opens in a new tab)](https://www.apple.com/support/systemstatus/)
- [Privacy Policy (opens in a new tab)](https://www.apple.com/legal/privacy/)
- [Terms & Conditions (opens in a new tab)](https://www.apple.com/legal/internet-services/icloud/)

### Controls

- button: Help
- button: Sign In

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

- Raw REA Evidence: `catalog/rea/evidence/apple-icloud.json`
- Evidence ID: `ev_2301c78b2780bc1d0dd4789c23b147b57c1b1efd37a529c9037228e05bbed0b5`
- Accessibility outline: 1903 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
