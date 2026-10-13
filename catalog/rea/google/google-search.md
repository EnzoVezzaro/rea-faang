# REA web-surface report — Google Search (`google-search`)

Browser capture of the public web surface of Google Search, recorded with REA.

| | |
|---|---|
| Product | Google Search (`google-search`) |
| Company | Google |
| Target | https://www.google.com/ |
| Resolved URL | https://www.google.com/ |
| Page title | Google Search |
| Captured | 2026-10-13T18:59:53.994Z |
| Status | captured |
| REA Evidence ID | `ev_3e6b1b7bf15e482d0a6171b0d87cf84325c79f1ed9fb2be997a8f6eea24ee10a` |
| REA provider | rea-playwright-browser-scenario v1 |
| Browser | Chromium 155.0.8059.40 |
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
    "url": "https://www.google.com/"
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

- navigation
- search
- contentinfo

### Links

- [About](https://about.google/?fg=1&utm_source=google-US&utm_medium=referral&utm_campaign=hp-header)
- [Store](https://store.google.com/US?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-US)
- [Gmail](https://mail.google.com/mail/&ogbl)
- [Search for Images](https://www.google.com/imghp?hl=en&ogbl)
- [Sign in](https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/&ec=futura_exp_og_so_72776762_e)
- [Advertising](https://www.google.com/intl/en_us/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1)
- [Business](https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1)
- [How Search works](https://google.com/search/howsearchworks/?fg=1)
- [Build, create, and do more with AI tools from Google](https://ai.google/helpful-tools/?utm_source=googlehpfooter&utm_medium=housepromos&utm_campaign=bottom-footer)
- [Privacy](https://policies.google.com/privacy?hl=en&fg=1)
- [Terms](https://policies.google.com/terms?hl=en&fg=1)

### Controls

- button: Google apps
- button: Search by voice
- button: Search by image
- button: Google Search
- button: I'm Feeling Lucky
- button: Settings

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

- Raw REA Evidence: `catalog/rea/evidence/google-search.json`
- Evidence ID: `ev_3e6b1b7bf15e482d0a6171b0d87cf84325c79f1ed9fb2be997a8f6eea24ee10a`
- Accessibility outline: 1694 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
