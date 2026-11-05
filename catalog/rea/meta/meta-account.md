# REA web-surface report — Meta Account (`meta-account`)

Browser capture of the public web surface of Meta Account, recorded with REA.

| | |
|---|---|
| Product | Meta Account (`meta-account`) |
| Company | Meta |
| Target | https://www.meta.com/account/ |
| Resolved URL | https://www.meta.com/account/ |
| Page title | Meet your Meta Account |
| Captured | 2026-11-04T02:41:07.015Z |
| Status | captured |
| REA Evidence ID | `ev_6cedd7669026f8fe004b668a10b67b308381ab358773712b3e4143c375090dd3` |
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
    "url": "https://www.meta.com/account/"
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

- Meet your Meta Account
- More secure and convenient
- Always-on threat protection
- Up-to-date security
- More convenient controls
- Teen support, in one place
- Get ready for your Meta Account
- What is a Meta Account?
- What apps and devices are included in this?
- Will all my apps and devices automatically get added to the same Meta Account?
- Do I need a Meta Account?
- Meta Store
- Store support and legal
- Community
- Our actions
- About us
- Site terms and policies
- App support

### Landmarks

- navigation: Main
- main
- region
- region
- region
- contentinfo

### Links

- [Skip to main content](#mdc-main-content)
- [Meta home](/)
- [AI glasses](/ai-glasses/)
- [Meta Quest](/quest/)
- [Meta VR Glasses](/vr-glasses/)
- [Muse Charm](/muse-charm/)
- [Explore Meta](/about/)
- [Support](/help/)
- [View bag items](/bag/)
- [Learn more about passkeys and single sign-on](https://www.meta.com/help/meta-account/553000504008092/?ref=gtm)
- [Learn more about managing multiple profiles](https://www.meta.com/help/meta-account/1575911950009923/?ref=gtm)
- [Learn more about Meta Family Center](https://familycenter.meta.com/supervision)
- [Learn more about getting ready for your Meta Account](https://www.meta.com/help/meta-account/876751767182450?ref=gtm)
- [Facebook Meta.com social media](https://www.facebook.com/Meta)
- [Threads Meta.com social media](https://www.threads.net/@meta)
- [Instagram Meta.com social media](https://www.instagram.com/meta/)
- [X Meta.com social media](https://twitter.com/Meta)
- [YouTube Meta.com media channel](https://www.youtube.com/meta)
- [Meta Glasses](/ai-glasses/meta-glasses/)
- [Ray-Ban Meta glasses](/ai-glasses/ray-ban-meta/)
- [Oakley Meta glasses](/ai-glasses/oakley-meta/)
- [Meta Ray-Ban Display](/ai-glasses/meta-ray-ban-display/)
- [Compare glasses](/ai-glasses/compare/)
- [AI glasses accessories](/ai-glasses/accessories/)
- [AI glasses guides](/ai-glasses/learn/)
- [Meta Lab](/meta-lab/)
- [Meta Quest accessories](/quest/accessories/)
- [Apps and games](/experiences/)
- [Meta Gift Card](/gift-cards/)
- [Refurbished Meta Quest 3](/refurbished/quest-3/)
- [Refurbished Meta Quest 3S](/refurbished/quest-3s/)
- [Refurbished Ray-Ban Meta glasses](/refurbished/ai-glasses/)
- [More from Ray-Ban](https://rayban.com/)
- [Meta Warranty Plus](/warranty-plus/)
- [Meta Quest referrals](/quest/referrals/)
- [Education discount](/purchase-program/education/ )
- [AI glasses bulk order inquiry](/ai-glasses/bulk-order/)
- [Blog](/blog/)
- [Meta Help Center](/help/)
- [Order status](/order/find/)

### Controls

- button: Search Meta Store
- button: Log In
- button: Play video
- button: What is a Meta Account?
- button: What apps and devices are included in this?
- button: Will all my apps and devices automatically get added to the same Meta Account?
- button: Do I need a Meta Account?
- button: See more
- button: Change language

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

- Raw REA Evidence: `catalog/rea/evidence/meta-account.json`
- Evidence ID: `ev_6cedd7669026f8fe004b668a10b67b308381ab358773712b3e4143c375090dd3`
- Accessibility outline: 11494 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
