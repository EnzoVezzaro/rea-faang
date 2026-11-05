# REA web-surface report — Muse (`meta-muse`)

Browser capture of the public web surface of Muse, recorded with REA.

| | |
|---|---|
| Product | Muse (`meta-muse`) |
| Company | Meta |
| Target | https://muse.ai/ |
| Resolved URL | https://muse.ai/ |
| Page title | Muse, AI that gets it done for you |
| Captured | 2026-11-04T02:54:54.097Z |
| Status | captured |
| REA Evidence ID | `ev_ccfd259bb1869d86f0b12737e74be9bfa382f8472c681b4cb30de5d434abdf19` |
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
    "url": "https://muse.ai/"
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

- Muse, AI that gets it done for you
- Log in or create an account
- Built around your whole life
- Every Muse user shares their own computer in the cloud with their Muse.
- Designed around the way you already communicate
- Stay in control of what your agent does
- Your data is kept secure and private
- Proactively helps with your goals and suggests ideas
- Connects to your apps and builds its own tools
- Get the most out of your Muse
- Learn more about Muse
- How We Designed Muse
- How We Built Safety Into Muse
- Muse for Business
- Ready to try Muse?

### Landmarks

- main
- region: Muse landing page
- region: Muse, AI that gets it done for you
- region: Muse introduction
- region: Muse features
- region: Every Muse user shares their own computer in the cloud with their Muse.
- region: Designed around the way you already communicate
- region: Stay in control of what your agent does
- region: Your data is kept secure and private
- region: Proactively helps with your goals and suggests ideas
- region: Connects to your apps and builds its own tools
- region: Get the most out of your Muse
- region: Learn more about Muse
- region: Ready to try Muse?
- navigation: Legal links

### Links

- [Learn more](https://www.meta.com/help/artificial-intelligence/31983416211257755/)
- [Learn more](#landing-introduction-video-title)
- [Link's purchase protections](https://link.com/protections)
- [How We Designed Muse When Muse works, it feels like magic. These are the product choices that make the experience possible.](https://introducing.muse.ai)
- [How We Built Safety Into Muse Muse is built for privacy, safety, and security. Learn how these principles shape every part of the product.](https://security.muse.ai)
- [Muse for Business Meet the AI agent that works for your small business and keeps jobs moving between your decisions.](/business)
- [Privacy Policy](https://muse.ai/privacy)
- [Cookie Policy](https://www.facebook.com/privacy/policies/cookies/)
- [Terms](https://muse.ai/terms)
- [Download](/api/hatch/app-download/mac)

### Controls

- button: Download apps
- button: Continue
- button: Muse introduction film
- button: Play the guided tour of Muse
- button: Log in
- button: Close

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

- Raw REA Evidence: `catalog/rea/evidence/meta-muse.json`
- Evidence ID: `ev_ccfd259bb1869d86f0b12737e74be9bfa382f8472c681b4cb30de5d434abdf19`
- Accessibility outline: 7178 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
