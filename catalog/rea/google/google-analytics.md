# REA web-surface report — Google Analytics (`google-analytics`)

Browser capture of the public web surface of Google Analytics, recorded with REA.

| | |
|---|---|
| Product | Google Analytics (`google-analytics`) |
| Company | Google |
| Target | https://analytics.google.com/ |
| Resolved URL | https://accounts.google.com/v3/signin/identifier?continue=https://analytics.google.com/analytics/web/%23&followup=https://analytics.google.com/analytics/web/&passive=1209600&service=analytics&flowName=WebLiteSignIn&flowEntry=ServiceLogin&dsh=S1327791954:1793669815313470 |
| Page title | Sign in |
| Captured | 2026-11-03T01:36:58.534Z |
| Status | captured |
| REA Evidence ID | `ev_7ec24b9eba7ce39151903af3e478d22655bbf7b6f8287e7715fa928992bfb33a` |
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
    "url": "https://analytics.google.com/"
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

- [Forgot email?](/signin/usernamerecovery?continue=https://analytics.google.com/analytics/web/%23&dsh=S1327791954:1793669815313470&flowEntry=ServiceLogin&flowName=WebLiteSignIn&followup=https://analytics.google.com/analytics/web/&service=analytics)
- [Learn more about using Guest mode (external, opens in a new window)](https://support.google.com/accounts?p=signin_privatebrowsing&hl=en-US)
- [Create account](/lifecycle/flows/signup?continue=https://analytics.google.com/analytics/web/%23&dsh=S1327791954:1793669815313470&flowEntry=SignUp&flowName=GlifWebSignIn&followup=https://analytics.google.com/analytics/web/&nogm=1&service=analytics)
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

- Raw REA Evidence: `catalog/rea/evidence/google-analytics.json`
- Evidence ID: `ev_7ec24b9eba7ce39151903af3e478d22655bbf7b6f8287e7715fa928992bfb33a`
- Accessibility outline: 4362 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
