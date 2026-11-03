# REA web-surface report — Amazon Online Retail (`amazon-online-retail`)

Browser capture of the public web surface of Amazon Online Retail, recorded with REA.

| | |
|---|---|
| Product | Amazon Online Retail (`amazon-online-retail`) |
| Company | Amazon |
| Target | https://www.amazon.com/ |
| Resolved URL | https://www.amazon.com/ |
| Page title | Click the button below to continue shopping |
| Captured | 2026-11-03T01:30:45.762Z |
| Status | captured |
| REA Evidence ID | `ev_5af512b4065641bed86dd6afda448b3945e0dde41c6299bcf395a34adba113d3` |
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
    "url": "https://www.amazon.com/"
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

- Click the button below to continue shopping

### Landmarks

_No landmarks exposed._

### Links

- [Conditions of Use](https://www.amazon.com/gp/help/customer/display.html/ref=footer_cou?ie=UTF8&nodeId=508088)
- [Privacy Policy](https://www.amazon.com/gp/help/customer/display.html/ref=footer_privacy?ie=UTF8&nodeId=468496)

### Controls

- button: Continue shopping

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-online-retail.json`
- Evidence ID: `ev_5af512b4065641bed86dd6afda448b3945e0dde41c6299bcf395a34adba113d3`
- Accessibility outline: 434 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
