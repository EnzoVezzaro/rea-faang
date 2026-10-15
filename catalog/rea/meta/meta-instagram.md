# REA web-surface report — Instagram (`meta-instagram`)

Browser capture of the public web surface of Instagram, recorded with REA.

| | |
|---|---|
| Product | Instagram (`meta-instagram`) |
| Company | Meta |
| Target | https://www.instagram.com/ |
| Resolved URL | https://www.instagram.com/ |
| Page title | Instagram |
| Captured | 2026-10-14T03:56:48.009Z |
| Status | captured |
| REA Evidence ID | `ev_ae37a64dea8ae6b77dbc88886c9e026c8de828efa906f7a5c6b875038f000395` |
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
    "url": "https://www.instagram.com/"
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

_No headings exposed._

### Landmarks

- contentinfo

### Links

- [Forgot password?](/accounts/password/reset/)
- [Create new account](/accounts/emailsignup/)
- [Meta](https://about.meta.com/)
- [About](https://about.instagram.com/)
- [Blog](https://about.instagram.com/blog/)
- [Jobs](https://about.instagram.com/about-us/careers)
- [Help](https://help.instagram.com/)
- [API](https://developers.facebook.com/docs/instagram)
- [Privacy](/legal/privacy/)
- [Consumer Health Privacy](/legal/privacy/health_privacy_policy/)
- [Terms](/legal/terms/)
- [Locations](/explore/locations/)
- [Popular](/popular/)
- [Instagram Lite](/web/lite/)
- [Meta AI](https://www.meta.ai/?utm_source=foa_web_footer)
- [Muse](https://muse.ai/)
- [Threads](https://www.threads.com/)
- [Contact Uploading & Non-Users](https://www.facebook.com/help/instagram/261704639352628)
- [Meta Verified](/accounts/meta_verified/?entrypoint=web_footer)

### Controls

- button: Log In
- button: Log in with Facebook

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

- Raw REA Evidence: `catalog/rea/evidence/meta-instagram.json`
- Evidence ID: `ev_ae37a64dea8ae6b77dbc88886c9e026c8de828efa906f7a5c6b875038f000395`
- Accessibility outline: 3450 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
