# REA web-surface report — Facebook (`meta-facebook`)

Browser capture of the public web surface of Facebook, recorded with REA.

| | |
|---|---|
| Product | Facebook (`meta-facebook`) |
| Company | Meta |
| Target | https://www.facebook.com/ |
| Resolved URL | https://www.facebook.com/ |
| Page title | Facebook |
| Captured | 2026-11-03T01:40:00.726Z |
| Status | captured |
| REA Evidence ID | `ev_e1687e6977c70da271c370d5485dc64a172a5dd29d7d1c84f132f9c7ce92fe00` |
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
    "url": "https://www.facebook.com/"
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

- main

### Links

- [Forgot password?](/recover/initiate/?privacy_mutation_token=eyJ0eXBlIjo1LCJjcmVhdGlvbl90aW1lIjoxNzkzNjY5OTk2fQ%3D%3D&ars=facebook_login)
- [Create new account](/reg/?entry_point=login)
- [Español](#)
- [Français (France)](#)
- [中文(简体)](#)
- [العربية](#)
- [Português (Brasil)](#)
- [Italiano](#)
- [More languages…](#)
- [Sign Up](https://www.facebook.com/reg/)
- [Log In](https://www.facebook.com/login/)
- [Messenger](https://l.facebook.com/l.php?u=https%3A%2F%2Fmessenger.com%2F&h=AUBKJw9Sr1nRs8LmAUbfPj2BSQNXV9TUIs90eUV3fZmr7DelmsDDFWwdXPOCWK2-2jRibI399nrtKyDwiJHzikqgymrNitkdkxUs6rnw-C6WQDI98LdOa124-oPv9zOT_f5mh5eeSEJ5kd0ahTqpWeS1dOc)
- [Facebook Lite](https://www.facebook.com/lite/)
- [Video](https://www.facebook.com/watch/)
- [Meta Pay](https://l.facebook.com/l.php?u=https%3A%2F%2Fabout.meta.com%2Ftechnologies%2Fmeta-pay&h=AUBKJw9Sr1nRs8LmAUbfPj2BSQNXV9TUIs90eUV3fZmr7DelmsDDFWwdXPOCWK2-2jRibI399nrtKyDwiJHzikqgymrNitkdkxUs6rnw-C6WQDI98LdOa124-oPv9zOT_f5mh5eeSEJ5kd0ahTqpWeS1dOc)
- [Meta Store](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.meta.com%2F&h=AUBKJw9Sr1nRs8LmAUbfPj2BSQNXV9TUIs90eUV3fZmr7DelmsDDFWwdXPOCWK2-2jRibI399nrtKyDwiJHzikqgymrNitkdkxUs6rnw-C6WQDI98LdOa124-oPv9zOT_f5mh5eeSEJ5kd0ahTqpWeS1dOc)
- [Meta Quest](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.meta.com%2Fquest%2F&h=AUBKJw9Sr1nRs8LmAUbfPj2BSQNXV9TUIs90eUV3fZmr7DelmsDDFWwdXPOCWK2-2jRibI399nrtKyDwiJHzikqgymrNitkdkxUs6rnw-C6WQDI98LdOa124-oPv9zOT_f5mh5eeSEJ5kd0ahTqpWeS1dOc)
- [Ray-Ban Meta](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.meta.com%2Fai-glasses%2Fray-ban-meta%2F&h=AUBKJw9Sr1nRs8LmAUbfPj2BSQNXV9TUIs90eUV3fZmr7DelmsDDFWwdXPOCWK2-2jRibI399nrtKyDwiJHzikqgymrNitkdkxUs6rnw-C6WQDI98LdOa124-oPv9zOT_f5mh5eeSEJ5kd0ahTqpWeS1dOc)
- [Meta AI](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.meta.ai%2F&h=AUBKJw9Sr1nRs8LmAUbfPj2BSQNXV9TUIs90eUV3fZmr7DelmsDDFWwdXPOCWK2-2jRibI399nrtKyDwiJHzikqgymrNitkdkxUs6rnw-C6WQDI98LdOa124-oPv9zOT_f5mh5eeSEJ5kd0ahTqpWeS1dOc)
- [Muse](https://l.facebook.com/l.php?u=https%3A%2F%2Fmuse.ai%2F&h=AUBKJw9Sr1nRs8LmAUbfPj2BSQNXV9TUIs90eUV3fZmr7DelmsDDFWwdXPOCWK2-2jRibI399nrtKyDwiJHzikqgymrNitkdkxUs6rnw-C6WQDI98LdOa124-oPv9zOT_f5mh5eeSEJ5kd0ahTqpWeS1dOc)
- [Instagram](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2F&h=AUBKJw9Sr1nRs8LmAUbfPj2BSQNXV9TUIs90eUV3fZmr7DelmsDDFWwdXPOCWK2-2jRibI399nrtKyDwiJHzikqgymrNitkdkxUs6rnw-C6WQDI98LdOa124-oPv9zOT_f5mh5eeSEJ5kd0ahTqpWeS1dOc)
- [Threads](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.threads.com%2F&h=AUBKJw9Sr1nRs8LmAUbfPj2BSQNXV9TUIs90eUV3fZmr7DelmsDDFWwdXPOCWK2-2jRibI399nrtKyDwiJHzikqgymrNitkdkxUs6rnw-C6WQDI98LdOa124-oPv9zOT_f5mh5eeSEJ5kd0ahTqpWeS1dOc)
- [Privacy Policy](https://www.facebook.com/privacy/policy/?entry_point=facebook_page_footer)
- [Consumer Health Privacy](https://www.facebook.com/privacy/policies/health/?entry_point=facebook_page_footer)
- [Privacy Center](https://www.facebook.com/privacy/center/?entry_point=facebook_page_footer)
- [About](https://www.facebook.com/about/)
- [Create ad](https://www.facebook.com/ad_campaign/landing.php?placement=pflo&campaign_id=402047449186&nav_source=unknown&extra_1=auto)
- [Create Page](https://www.facebook.com/pages/create/?ref_type=site_footer)
- [Developers](https://developers.facebook.com/?ref=pf)
- [Careers](https://www.facebook.com/careers/?ref=pf)
- [Cookies](https://www.facebook.com/policies/cookies/)
- [Ad choices](https://www.facebook.com/help/568137493302217)
- [Terms](https://www.facebook.com/policies?ref=pf)
- [Help](https://www.facebook.com/help/?ref=pf)
- [Contact Uploading & Non-Users](https://www.facebook.com/help/637205020878504)

### Controls

- button: Log In

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

- Raw REA Evidence: `catalog/rea/evidence/meta-facebook.json`
- Evidence ID: `ev_e1687e6977c70da271c370d5485dc64a172a5dd29d7d1c84f132f9c7ce92fe00`
- Accessibility outline: 4764 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
