# REA web-surface report — Numbers (`apple-numbers`)

Browser capture of the public web surface of Numbers, recorded with REA.

| | |
|---|---|
| Product | Numbers (`apple-numbers`) |
| Company | Apple |
| Target | https://www.apple.com/numbers/ |
| Resolved URL | https://support.apple.com/numbers |
| Page title | Numbers Support |
| Captured | 2026-10-13T18:58:03.131Z |
| Status | captured |
| REA Evidence ID | `ev_7a2edeb45a7f7ed84725fe2b7bd84fbf67dd4caeafaa7e68a91990220c2a008d` |
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
    "url": "https://www.apple.com/numbers/"
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

- Numbers Support
- Let Numbers do the math
- Create and use categories
- Use and manage templates
- Convert and share
- Apple Creator Studio
- Resources
- User Guides
- Numbers for iCloud
- Search for more topics
- Apple Communities
- Still need help?
- Support app
- Apple Footer
- Product Support
- Service and Repair
- Connect

### Landmarks

- navigation: Global
- main
- contentinfo: Apple Footer
- navigation: Breadcrumbs
- navigation: Apple Directory

### Links

- [Apple](https://www.apple.com)
- [Store](https://www.apple.com/us/store)
- [Mac](https://www.apple.com/mac/)
- [iPad](https://www.apple.com/ipad/)
- [iPhone](https://www.apple.com/iphone/)
- [Watch](https://www.apple.com/watch/)
- [Vision](https://www.apple.com/apple-vision-pro/)
- [AirPods](https://www.apple.com/airpods/)
- [Home](https://www.apple.com/home/)
- [Entertainment](https://www.apple.com/entertainment/)
- [Accessories](https://www.apple.com/us/shop/goto/buy_accessories)
- [Support](/)
- [Learn how to use formulas and functions](/en-us/guide/functions/welcome/web)
- [Learn how to use categories](/en-us/guide/numbers/tan7e3e9a388/mac)
- [Create a custom template](/en-us/guide/numbers-iphone/tan57e4f9f9c/ios)
- [Mac](/en-us/guide/numbers/send-a-spreadsheet-tan368d49f8b/mac#tan0eb830f5a)
- [iPad](/en-us/guide/numbers-ipad/send-a-spreadsheet-tan368d49f8b/ipados#taneaaa3f970)
- [iPhone](/en-us/guide/numbers-iphone/send-a-spreadsheet-tan368d49f8b/ios#taneaaa3f970)
- [Mac](/en-us/guide/numbers/tan98fadd2e0/mac)
- [iPad](/en-us/guide/numbers-ipad/tan98fadd2e0/ipados)
- [iPhone](/en-us/guide/numbers-iphone/tan98fadd2e0/ios)
- [Explore Apple Creator Studio ](/en-us/125029)
- [Mac](/en-us/guide/numbers)
- [iPad](/en-us/guide/numbers-ipad)
- [iPhone](/en-us/guide/numbers-iphone)
- [Numbers for iCloud](/en-us/guide/numbers-icloud)
- [Ask or search now](https://discussions.apple.com/community/applications-services)
- [Get started](https://getsupport.apple.com/?caller=psp)
- [Download the Apple Support app](https://apps.apple.com/us/app/apple-support/id1130498044?pt=2003&ct=support.numbers&mt=8&l=en)
- [iPhone Support](/iphone)
- [Mac Support](/mac)
- [iPad Support](/ipad)
- [Watch Support](/watch)
- [Apple Vision Pro Support](/apple-vision-pro)
- [AirPods Support](/airpods)
- [TV Support](/tv)
- [Support Site Map](/sitemap)
- [Apple Repair Options](/repair)
- [Service and Repair Information](/repair-products)
- [AppleCare Products](http://www.apple.com/support/products/)

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
- button: Submit

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

- Raw REA Evidence: `catalog/rea/evidence/apple-numbers.json`
- Evidence ID: `ev_7a2edeb45a7f7ed84725fe2b7bd84fbf67dd4caeafaa7e68a91990220c2a008d`
- Accessibility outline: 8802 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
