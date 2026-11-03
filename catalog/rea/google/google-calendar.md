# REA web-surface report — Google Calendar (`google-calendar`)

Browser capture of the public web surface of Google Calendar, recorded with REA.

| | |
|---|---|
| Product | Google Calendar (`google-calendar`) |
| Company | Google |
| Target | https://calendar.google.com/ |
| Resolved URL | https://accounts.google.com/v3/signin/identifier?continue=https://calendar.google.com/calendar/u/0/r&emr=1&followup=https://calendar.google.com/calendar/u/0/r&osid=1&passive=1209600&service=cl&flowName=WebLiteSignIn&flowEntry=ServiceLogin&dsh=S-1776550570:1793669822556014 |
| Page title | Sign in |
| Captured | 2026-11-03T01:37:05.724Z |
| Status | captured |
| REA Evidence ID | `ev_a8267b1453cbd69b6a47b374afeaed2f0b5f99d95dce5f0dad7262be94d1d0ad` |
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
    "url": "https://calendar.google.com/"
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

- Sign in

### Landmarks

- contentinfo

### Links

- [Forgot email?](/signin/usernamerecovery?continue=https://calendar.google.com/calendar/u/0/r&dsh=S-1776550570:1793669822556014&emr=1&flowEntry=ServiceLogin&flowName=WebLiteSignIn&followup=https://calendar.google.com/calendar/u/0/r&osid=1&service=cl)
- [Learn more about using Guest mode (external, opens in a new window)](https://support.google.com/accounts?p=signin_privatebrowsing&hl=en-US)
- [Create account](/lifecycle/flows/signup?continue=https://calendar.google.com/calendar/u/0/r&dsh=S-1776550570:1793669822556014&emr=1&flowEntry=SignUp&flowName=GlifWebSignIn&followup=https://calendar.google.com/calendar/u/0/r&osid=1&service=cl)
- [Open Google Account Help Center (external, opens in a new window)](https://support.google.com/accounts?hl=en-US&p=account_iph)
- [Privacy Policy (external, opens in a new window)](https://accounts.google.com/TOS?loc=US&hl=en-US&privacy=true)
- [Google Terms of Service (external, opens in a new window)](https://accounts.google.com/TOS?loc=US&hl=en-US)

### Controls

- button: Next

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

- Raw REA Evidence: `catalog/rea/evidence/google-calendar.json`
- Evidence ID: `ev_a8267b1453cbd69b6a47b374afeaed2f0b5f99d95dce5f0dad7262be94d1d0ad`
- Accessibility outline: 4327 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
