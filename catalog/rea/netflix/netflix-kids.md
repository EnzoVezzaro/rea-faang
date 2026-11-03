# REA web-surface report — Netflix Kids (`netflix-kids`)

Browser capture of the public web surface of Netflix Kids, recorded with REA.

| | |
|---|---|
| Product | Netflix Kids (`netflix-kids`) |
| Company | Netflix |
| Target | https://www.netflix.com/kids |
| Resolved URL | https://www.netflix.com/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fkids&serverState=Bgj1wOvcAxKnAqQfymdgAXw7ZO2MWK1dMZgd4K%2BBe0%2FrNUg583o1H9g%2FBwuYUQued7IP8IfvEk0dHZjZdNLmmPDIJpnKhye8zwFbJMf%2Fv8iSJDzMQXXd%2BJRPwAZRXa60bA%2BqSxoJFfKmsk5%2Br%2FdZvyaz7nctULKXi3PKMPfFgyesDJum2ETHaiam2O6Fq66i%2FcN74ir0fyyFqrJ2yP3uUMKxwoXiMssoLlcyzatAYBFdM7%2FC%2FL9USvn9w0Mz6d1q41nYPcrnLxwpCYf7bcuoNH5NFPOmpPA4sdgDlO%2FVfP5VsBQ058dwPShkefaiEdigeizY71aAxNUTl8%2BFVDUptxY%2F8EwY8gVxiNtUsz9BoMWmNirjxbTicnJB3NF7RnBaf1tLzcX0w1%2Bxx0pqZhhNd1kYBiIOCgycCSK4otOanObS2f8%3D |
| Page title | Enter your info to sign in |
| Captured | 2026-11-03T01:42:14.254Z |
| Status | captured |
| REA Evidence ID | `ev_0b3946ed46f0dafac1826a24e16d37bc16d792d4caca4a5b6669e2458af1a8b9` |
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
- Network content is retained only when selected; Playwright response-body bytes are API results and are not guaranteed to match wire bytes.
- Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage.
- Network content reads settle within 5 seconds each and the observer does not request bodies from unfinished responses.
- Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality.
- Storage values are hashed only after declared-secret redaction.
- Browser host platform and architecture were not observed.

## Provenance

- Raw REA Evidence: `catalog/rea/evidence/netflix-kids.json`
- Evidence ID: `ev_0b3946ed46f0dafac1826a24e16d37bc16d792d4caca4a5b6669e2458af1a8b9`
- Accessibility outline: 1695 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
