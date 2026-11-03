# REA web-surface report — Google Gemini (`google-gemini`)

Browser capture of the public web surface of Google Gemini, recorded with REA.

| | |
|---|---|
| Product | Google Gemini (`google-gemini`) |
| Company | Google |
| Target | https://gemini.google.com/ |
| Resolved URL | https://gemini.google.com/app |
| Page title | Hi, I'm Gemini. Where should we start? |
| Captured | 2026-11-03T01:38:17.023Z |
| Status | captured |
| REA Evidence ID | `ev_d842928e99a17443cf150a1b54e21a4e94a05102ffbb8f31eab6438544cbbcd8` |
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
    "url": "https://gemini.google.com/"
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

- Hi, I'm Gemini. Where should we start?

### Landmarks

- main
- navigation: Side Navigation
- navigation: Main actions menu
- navigation: Additional actions menu

### Links

- [New chat](/)
- [New chat](/app)
- [Images](/images)
- [Sign in](#)
- [Google Terms Opens in a new window](https://policies.google.com/terms)
- [Google Privacy Policy Opens in a new window](https://policies.google.com/privacy)

### Controls

- button: Close sidebar
- button: About Gemini
- button: Subscriptions
- button: For Business
- button: Settings
- button: Sign in
- button: Get App
- button: Upload & tools
- button: Open mode picker, currently Flash-Lite
- button: Dictate (⌘⇧D)

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

- Raw REA Evidence: `catalog/rea/evidence/google-gemini.json`
- Evidence ID: `ev_d842928e99a17443cf150a1b54e21a4e94a05102ffbb8f31eab6438544cbbcd8`
- Accessibility outline: 1377 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
