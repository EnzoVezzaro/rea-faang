# REA web-surface report — FaceTime (`apple-facetime`)

Browser capture of the public web surface of FaceTime, recorded with REA.

| | |
|---|---|
| Product | FaceTime (`apple-facetime`) |
| Company | Apple |
| Target | https://www.apple.com/facetime/ |
| Resolved URL | https://support.apple.com/en-us/105088 |
| Page title | Use FaceTime on your iPhone or iPad |
| Captured | 2026-11-03T01:31:18.944Z |
| Status | captured |
| REA Evidence ID | `ev_d7981265dc98d7f7c74bd4886d6b97e932d6807da72baec66d7c4bf27c23120c` |
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
    "url": "https://www.apple.com/facetime/"
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

- Use FaceTime on your iPhone or iPad
- Make a FaceTime call
- Answer a FaceTime call
- Discover more ways to interact on a FaceTime call
- Find your missed calls, voicemails, and more in FaceTime
- Get more help
- Apple Footer

### Landmarks

- navigation: Global
- main
- contentinfo: Apple Footer
- navigation: Breadcrumbs

### Links

- [Apple](https://www.apple.com/)
- [Store](https://www.apple.com/us/shop/goto/store)
- [Mac](https://www.apple.com/mac/)
- [iPad](https://www.apple.com/ipad/)
- [iPhone](https://www.apple.com/iphone/)
- [Watch](https://www.apple.com/watch/)
- [Vision](https://www.apple.com/apple-vision-pro/)
- [AirPods](https://www.apple.com/airpods/)
- [Home](https://www.apple.com/home/)
- [Entertainment](https://www.apple.com/entertainment/)
- [Accessories](https://www.apple.com/us/shop/goto/buy_accessories)
- [Support](https://support.apple.com/?cid=gn-ols-home-hp-tab)
- [Make a FaceTime call ](#make-call)
- [Answer a FaceTime call ](#audio)
- [Discover more ways to interact on a FaceTime call ](#options)
- [Find your missed calls, voicemails, and more in FaceTime ](#Find)
- [This links to the iPhone user guide section about setting up FaceTime.](https://support.apple.com/guide/iphone/get-started-with-facetime-iphc4774d8d8/ios)
- [Screen unknown callers on iPhone](https://support.apple.com/en-us/111106)
- [Use FaceTime on Mac](https://support.apple.com/guide/facetime/welcome/mac)
- [make sure that your contacts are accurate](https://support.apple.com/guide/iphone/edit-contacts-iph89a9c71d8/ios)
- [Communication Safety](https://support.apple.com/en-us/105069)
- [Apple](https://www.apple.com)
- [Support](https://support.apple.com)
- [United States. Choose your country or region](https://support.apple.com/en-us/105088/localeselector)
- [Privacy Policy](https://www.apple.com/legal/privacy/en-ww/)
- [Terms of Use](https://www.apple.com/legal/internet-services/terms/site.html)
- [Sales and Refunds](https://www.apple.com/shop/goto/help/sales_refunds)
- [Site Map](https://www.apple.com/sitemap/)

### Controls

- button: Store menu
- button: Mac menu
- button: iPad menu
- button: iPhone menu
- button: Watch menu
- button: Vision menu
- button: AirPods menu
- button: Home menu
- button: Entertainment menu
- button: Accessories menu
- button: Support menu
- button: Search Support
- button: Shopping Bag
- button: Yes
- button: No

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

- Raw REA Evidence: `catalog/rea/evidence/apple-facetime.json`
- Evidence ID: `ev_d7981265dc98d7f7c74bd4886d6b97e932d6807da72baec66d7c4bf27c23120c`
- Accessibility outline: 9573 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
