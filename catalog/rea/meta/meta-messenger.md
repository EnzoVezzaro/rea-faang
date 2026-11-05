# REA web-surface report — Messenger (`meta-messenger`)

Browser capture of the public web surface of Messenger, recorded with REA.

| | |
|---|---|
| Product | Messenger (`meta-messenger`) |
| Company | Meta |
| Target | https://www.messenger.com/ |
| Resolved URL | https://www.messenger.com/ |
| Page title | A place for meaningful conversations |
| Captured | 2026-11-04T02:26:12.759Z |
| Status | captured |
| REA Evidence ID | `ev_ccb32cbabd45060573b9a71451b564e06fecab5acd0a1b767ab9e96aae0c8214` |
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
    "url": "https://www.messenger.com/"
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

- A place for meaningful conversations

### Landmarks

- main: Main content
- banner: Header
- main: Main content
- contentinfo: Footer

### Links

- [Messenger](/)
- [Privacy and Safety](https://www.messenger.com/privacy)
- [For Developers](https://developers.facebook.com/products/messenger/)
- [Help Center](https://www.messenger.com/help)
- [Privacy Policy](https://www.facebook.com/privacy/policy)
- [Cookie Policy](https://messenger.com/policy/cookies)
- [Terms](https://www.facebook.com/policies/?ref=pf)

### Controls

- button: Features
- button: Log in
- button: Forgot password?
- button: English (US)

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

- Raw REA Evidence: `catalog/rea/evidence/meta-messenger.json`
- Evidence ID: `ev_ccb32cbabd45060573b9a71451b564e06fecab5acd0a1b767ab9e96aae0c8214`
- Accessibility outline: 1950 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
