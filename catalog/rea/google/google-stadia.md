# REA web-surface report — Google Stadia (`google-stadia`)

Browser capture of the public web surface of Google Stadia, recorded with REA.

| | |
|---|---|
| Product | Google Stadia (`google-stadia`) |
| Company | Google |
| Target | https://stadia.google.com/ |
| Resolved URL | https://stadia.google.com/gg/ |
| Page title | Thank you for playing with us. Stadia was shut down on January 18, 2023. |
| Captured | 2026-11-03T01:39:34.107Z |
| Status | captured |
| REA Evidence ID | `ev_0eb600d3814da321840349cb06f87ebc06d1e6dd099e95f31335cc6f16379b70` |
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
    "url": "https://stadia.google.com/"
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

- Thank you for playing with us. Stadia was shut down on January 18, 2023.

### Landmarks

- main
- complementary

### Links

- [Learn more about Stadia](https://g.co/stadia/faq)
- [Privacy](https://policies.google.com/privacy)
- [Terms](https://policies.google.com/terms)
- [Support](https://support.google.com/stadia)
- [Impressum (Germany only)](https://www.google.de/contact/impressum.html)

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

- Raw REA Evidence: `catalog/rea/evidence/google-stadia.json`
- Evidence ID: `ev_0eb600d3814da321840349cb06f87ebc06d1e6dd099e95f31335cc6f16379b70`
- Accessibility outline: 1306 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
