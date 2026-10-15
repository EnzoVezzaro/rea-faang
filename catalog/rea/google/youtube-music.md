# REA web-surface report — YouTube Music (`youtube-music`)

Browser capture of the public web surface of YouTube Music, recorded with REA.

| | |
|---|---|
| Product | YouTube Music (`youtube-music`) |
| Company | Google |
| Target | https://music.youtube.com/ |
| Resolved URL | https://music.youtube.com/ |
| Page title | YouTube Music |
| Captured | 2026-10-14T03:54:02.658Z |
| Status | captured |
| REA Evidence ID | `ev_6d6f87b3bcac93026abc8feedc78e8b6c9dd23ce97a01a031d2b7f1e759729ab` |
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
    "url": "https://music.youtube.com/"
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

_No landmarks exposed._

### Links

- [Get Chrome](http://www.google.com/chrome/index.html)

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

- Raw REA Evidence: `catalog/rea/evidence/youtube-music.json`
- Evidence ID: `ev_6d6f87b3bcac93026abc8feedc78e8b6c9dd23ce97a01a031d2b7f1e759729ab`
- Accessibility outline: 192 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
