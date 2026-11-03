# REA web-surface report — Google Classroom (`google-classroom`)

Browser capture of the public web surface of Google Classroom, recorded with REA.

| | |
|---|---|
| Product | Google Classroom (`google-classroom`) |
| Company | Google |
| Target | https://classroom.google.com/ |
| Resolved URL | https://accounts.google.com/v3/signin/identifier?continue=https://classroom.google.com/&emr=1&followup=https://classroom.google.com/&passive=1209600&service=classroom&flowName=WebLiteSignIn&flowEntry=ServiceLogin&dsh=S1327791954:1793669838151050 |
| Page title | Sign in |
| Captured | 2026-11-03T01:37:21.258Z |
| Status | captured |
| REA Evidence ID | `ev_70b07e7eddbb6dbee2c318869672f3ec9090b1a258f8ad52f887d09714c70346` |
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
    "url": "https://classroom.google.com/"
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

- [Forgot email?](/signin/usernamerecovery?continue=https://classroom.google.com/&dsh=S1327791954:1793669838151050&emr=1&flowEntry=ServiceLogin&flowName=WebLiteSignIn&followup=https://classroom.google.com/&service=classroom)
- [Learn more about using Guest mode (external, opens in a new window)](https://support.google.com/accounts?p=signin_privatebrowsing&hl=en-US)
- [Create account](/lifecycle/flows/signup?continue=https://classroom.google.com/&dsh=S1327791954:1793669838151050&emr=1&flowEntry=SignUp&flowName=GlifWebSignIn&followup=https://classroom.google.com/&service=classroom)
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

- Raw REA Evidence: `catalog/rea/evidence/google-classroom.json`
- Evidence ID: `ev_70b07e7eddbb6dbee2c318869672f3ec9090b1a258f8ad52f887d09714c70346`
- Accessibility outline: 4273 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
