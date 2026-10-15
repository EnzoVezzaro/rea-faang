# REA web-surface report — Google Sheets (`google-sheets`)

Browser capture of the public web surface of Google Sheets, recorded with REA.

| | |
|---|---|
| Product | Google Sheets (`google-sheets`) |
| Company | Google |
| Target | https://sheets.google.com/ |
| Resolved URL | https://accounts.google.com/v3/signin/identifier?continue=https://docs.google.com/spreadsheets/?usp%3Ddirect_url&followup=https://docs.google.com/spreadsheets/?usp%3Ddirect_url&ltmpl=sheets&osid=1&passive=1209600&service=wise&flowName=WebLiteSignIn&flowEntry=ServiceLogin&dsh=S-550254256:1791949984732040 |
| Page title | Sign in |
| Captured | 2026-10-14T03:53:07.757Z |
| Status | captured |
| REA Evidence ID | `ev_12e32b341b5532768cd349e89a2ee79309faa9ac9c62345ff4bcef7084048d6c` |
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
    "url": "https://sheets.google.com/"
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

- [Forgot email?](/signin/usernamerecovery?continue=https://docs.google.com/spreadsheets/?usp%3Ddirect_url&dsh=S-550254256:1791949984732040&flowEntry=ServiceLogin&flowName=WebLiteSignIn&followup=https://docs.google.com/spreadsheets/?usp%3Ddirect_url&ltmpl=sheets&osid=1&service=wise)
- [Learn more about using Guest mode (external, opens in a new window)](https://support.google.com/accounts?p=signin_privatebrowsing&hl=en-US)
- [Create account](/lifecycle/flows/signup?continue=https://docs.google.com/spreadsheets/?usp%3Ddirect_url&dsh=S-550254256:1791949984732040&flowEntry=SignUp&flowName=GlifWebSignIn&followup=https://docs.google.com/spreadsheets/?usp%3Ddirect_url&ltmpl=sheets&osid=1&service=wise)
- [Open Google Account Help Center (external, opens in a new window)](https://support.google.com/accounts?hl=en-US&p=account_iph)
- [Privacy Policy (external, opens in a new window)](https://accounts.google.com/TOS?loc=US&hl=en-US&privacy=true)
- [Google Terms of Service (external, opens in a new window)](https://accounts.google.com/TOS?loc=US&hl=en-US)

### Controls

- button: Next

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

- Raw REA Evidence: `catalog/rea/evidence/google-sheets.json`
- Evidence ID: `ev_12e32b341b5532768cd349e89a2ee79309faa9ac9c62345ff4bcef7084048d6c`
- Accessibility outline: 4420 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
