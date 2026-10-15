# REA web-surface report — Netflix Kids (`netflix-kids`)

Browser capture of the public web surface of Netflix Kids, recorded with REA.

| | |
|---|---|
| Product | Netflix Kids (`netflix-kids`) |
| Company | Netflix |
| Target | https://www.netflix.com/kids |
| Resolved URL | https://www.netflix.com/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fkids&serverState=Bgj1wOvcAxKnAlJ37hGd5MiEpWbLmHnHRuRvtuLF6MiLWQ5Q3ScVL1oeqlb4K1hbZhEZciUHaHQ9jlLIR%2ByniKYpMWiKpXSYWCLTpR%2F5jxlQyByw3w5Xi5LZT2ugucB4t%2FlGp4um6aUoDi9f%2BPofmsdnldttwcmFFQP8ffO2BbUNJn8Tcfqpp3nJVAdSTbV2NNsmxek2avnFUKWh1QGq%2B%2Bx%2B%2F2hok9NQEgKMUPSh0cMzY2YBmmn4LNl1r8yxdG%2FH6Fm5ssqzZD6r5%2Fjlc7euWokwdx6pYNJ4okBhp0MWcCgMoVjTJN9ArMJMnJZyTrJmff9e8u16JT1wKCgN3%2BMZE%2BOJBg8Gdj9xACn%2Fbf%2BygDUBsCfkaQC3pIvUbHwCGAbHOqYGk1qgVnOyMGjoHH9Ys5MYBiIOCgw7SIFOnWgx1XGu%2BQw%3D |
| Page title | Enter your info to sign in |
| Captured | 2026-10-14T03:56:28.669Z |
| Status | captured |
| REA Evidence ID | `ev_309080a3e6fd1bfc656070598d01884c06794bd4d0affac23bf8086ca1083721` |
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
    "url": "https://www.netflix.com/kids"
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

- Enter your info to sign in
- Or get started with a new account.

### Landmarks

- banner
- contentinfo

### Links

- [Netflix](/)
- [1-844-569-7700 (Toll-Free)](tel:1-844-569-7700)
- [FAQ](https://help.netflix.com/support/412)
- [Help Center](https://help.netflix.com)
- [Netflix House](https://www.netflixhouse.com/)
- [Netflix Shop](https://netflix.shop/)
- [Terms of Use](https://help.netflix.com/legal/termsofuse)
- [Privacy](https://help.netflix.com/legal/privacy)
- [Cookie Preferences](#)
- [Corporate Information](https://help.netflix.com/legal/corpinfo)
- [Do Not Sell or Share My Personal Information](https://netflix.com/dnsspi)
- [Ad Choices](https://netflix.com/adchoices-us)

### Controls

- button: Continue
- button: Get Help

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

- Raw REA Evidence: `catalog/rea/evidence/netflix-kids.json`
- Evidence ID: `ev_309080a3e6fd1bfc656070598d01884c06794bd4d0affac23bf8086ca1083721`
- Accessibility outline: 1695 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
