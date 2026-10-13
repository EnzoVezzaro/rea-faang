# REA web-surface report — Google Gemini (`google-gemini`)

Browser capture of the public web surface of Google Gemini, recorded with REA.

| | |
|---|---|
| Product | Google Gemini (`google-gemini`) |
| Company | Google |
| Target | https://gemini.google.com/ |
| Resolved URL | https://gemini.google.com/app |
| Page title | Conversation with Gemini |
| Captured | 2026-10-13T18:59:41.554Z |
| Status | captured |
| REA Evidence ID | `ev_ee78d9ac82a82e891f108156723d8262e1131a2fd2925d323e55535c0c8f4fb8` |
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

- Conversation with Gemini
- Meet Gemini, your personal AI assistant

### Landmarks

- main
- navigation: Side Navigation
- navigation: Main actions menu
- navigation: Additional actions menu

### Links

- [New chat](/)
- [About Gemini link](https://gemini.google/about/?utm_source=gemini&utm_medium=web&utm_campaign=gemini_zero_state_link_to_marketing_microsite)
- [Get Gemini app link](/app/download)
- [Subscriptions link](https://one.google.com/ai)
- [For Business link](http://g.co/cloud/gemini-for-business)
- [New chat](/app)
- [Images](/images)
- [Sign in](#)
- [Google Terms Opens in a new window](https://policies.google.com/terms)
- [Google Privacy Policy Opens in a new window](https://policies.google.com/privacy)

### Controls

- button: Sign in
- button: Close sidebar
- button: Settings
- button: Upload & tools
- button: Open mode picker, currently Flash-Lite
- button: Dictate (⌘⇧D)

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

- Raw REA Evidence: `catalog/rea/evidence/google-gemini.json`
- Evidence ID: `ev_ee78d9ac82a82e891f108156723d8262e1131a2fd2925d323e55535c0c8f4fb8`
- Accessibility outline: 1706 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
