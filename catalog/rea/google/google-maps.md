# REA web-surface report — Google Maps (`google-maps`)

Browser capture of the public web surface of Google Maps, recorded with REA.

| | |
|---|---|
| Product | Google Maps (`google-maps`) |
| Company | Google |
| Target | https://maps.google.com/ |
| Resolved URL | https://www.google.com/maps/@40.7248158,-73.9934208,14z?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D |
| Page title | This area |
| Captured | 2026-10-13T18:59:48.666Z |
| Status | captured |
| REA Evidence ID | `ev_3feba79b413a7346487bcb5ab785804d71eb56aad000bc5b1ee628a587934d5c` |
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

- This area

### Landmarks

- search
- region: This area
- region: Traffic
- region: Available search options for this area
- contentinfo

### Links

- [Sign in](https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https%3A%2F%2Fwww.google.com%2Fmaps%2F%4040.7248158%2C-73.9934208%2C14z%3Fcoh%3D318247%26entry%3Dtt%26ved%3D1t%253A314688&service=local&ec=GAZAcQ)
- [goo.gle/dua](https://goo.gle/dua)

### Controls

- button: Search
- button: Directions
- button: Heavy traffic in this area Typical conditions with delays up to 16 min
- button: Restaurants
- button: Hotels
- button: Things to do
- button: Museums
- button: Transit
- button: Pharmacies
- button: ATMs
- button: Menu
- button: Saved
- button: Recents
- button: Get app
- button: Google apps
- button: Show Your Location
- button: Zoom in
- button: Zoom out
- button: Browse Street View images
- button: Show imagery

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

- Raw REA Evidence: `catalog/rea/evidence/google-maps.json`
- Evidence ID: `ev_3feba79b413a7346487bcb5ab785804d71eb56aad000bc5b1ee628a587934d5c`
- Accessibility outline: 1603 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
