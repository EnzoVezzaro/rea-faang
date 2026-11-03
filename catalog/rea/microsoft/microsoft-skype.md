# REA web-surface report — Skype (`microsoft-skype`)

Browser capture of the public web surface of Skype, recorded with REA.

| | |
|---|---|
| Product | Skype (`microsoft-skype`) |
| Company | Microsoft |
| Target | https://www.skype.com/ |
| Resolved URL | https://teams.live.com/free |
| Page title | Video calls and chats with anyone, anytime |
| Captured | 2026-11-03T01:41:28.006Z |
| Status | captured |
| REA Evidence ID | `ev_492ef4159bf0e43607843887a18873250203bf9a7dc0853fadbbb99e992de8d6` |
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
    "url": "https://www.skype.com/"
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

- Video calls and chats with anyone, anytime
- 60-min free meetings
- Record meetings and calls
- Power up with AI
- Files
- Collaboration tools
- Chat themes
- See what's new!

### Landmarks

- banner
- main
- contentinfo

### Links

- [Teams meetings](#)
- [What's new](https://insider.teams.com/whats-new/)
- [See what's new!](https://insider.teams.com/whats-new/)
- [Need help?](https://support.microsoft.com/office/microsoft-teams-free-help-08fd2b61-1c3e-47e2-821b-d312709b933d)
- [Your Privacy Choices](https://aka.ms/yourcaliforniaprivacychoices)
- [Consumer Health Privacy](https://go.microsoft.com/fwlink/?linkid=2259814)
- [Privacy & cookies](https://go.microsoft.com/fwlink/?LinkId=521839)
- [Terms of use](https://go.microsoft.com/fwlink/?LinkID=206977)
- [Trademarks](https://go.microsoft.com/fwlink/?linkid=2196228)

### Controls

- button: Download Teams
- button: Sign in
- button: Start a meeting for free
- button: Join a meeting
- button: Download the Teams app

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

- Raw REA Evidence: `catalog/rea/evidence/microsoft-skype.json`
- Evidence ID: `ev_492ef4159bf0e43607843887a18873250203bf9a7dc0853fadbbb99e992de8d6`
- Accessibility outline: 2036 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
