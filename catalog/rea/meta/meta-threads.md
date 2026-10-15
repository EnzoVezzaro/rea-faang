# REA web-surface report — Threads (`meta-threads`)

Browser capture of the public web surface of Threads, recorded with REA.

| | |
|---|---|
| Product | Threads (`meta-threads`) |
| Company | Meta |
| Target | https://www.threads.net/ |
| Resolved URL | https://www.threads.com/ |
| Page title | Threads |
| Captured | 2026-10-14T03:57:01.569Z |
| Status | captured |
| REA Evidence ID | `ev_f66adcf2fb5029259c9a4692973f331aa94c04427238b9380a29854da4866b6b` |
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
    "url": "https://www.threads.net/"
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

- navigation

### Links

- [Threads](/)
- [Home](/)
- [Search](/search)

### Controls

- button: Create
- button: Messages
- button: Notifications
- button: Profile
- button: Insights
- button: More
- button: Instagram Continue with Instagram Log in

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

- Raw REA Evidence: `catalog/rea/evidence/meta-threads.json`
- Evidence ID: `ev_f66adcf2fb5029259c9a4692973f331aa94c04427238b9380a29854da4866b6b`
- Accessibility outline: 762 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
