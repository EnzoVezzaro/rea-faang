# REA web-surface report — Pages (`apple-pages`)

Browser capture of the public web surface of Pages, recorded with REA.

| | |
|---|---|
| Product | Pages (`apple-pages`) |
| Company | Apple |
| Target | https://www.apple.com/pages/ |
| Resolved URL | https://support.apple.com/pages |
| Page title | Pages Support |
| Captured | 2026-10-13T18:58:09.359Z |
| Status | captured |
| REA Evidence ID | `ev_2f50324bbf5cb3d093423deac83de14301c8132820cd65d38e36d02602f22ccc` |
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
    "url": "https://www.apple.com/pages/"
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

- Pages Support
- Set up your document
- Mark up your document
- Navigate your document
- Publish your book
- Apple Creator Studio
- Resources
- User Guides
- Pages for iCloud
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
- [Get started](/en-us/HT206184)
- [Draw, annotate, and use Scribble](/en-us/HT208459)
- [Create a table of contents](/en-us/guide/pages/table-of-contents-tan5b8c588d6/mac)
- [Start the process](/en-us/108365)
- [Mac](/en-us/guide/pages/tan4b3ad0ce2/mac)
- [iPad](/en-us/guide/pages-ipad/tan4b3ad0ce2/ipados)
- [iPhone](/en-us/guide/pages-iphone/tan4b3ad0ce2/ios)
- [Explore Apple Creator Studio ](/en-us/125029)
- [Mac](/en-us/guide/pages)
- [iPad](/en-us/guide/pages-ipad)
- [iPhone](/en-us/guide/pages-iphone)
- [Pages for iCloud](/en-us/guide/pages-icloud)
- [Ask or search now](https://discussions.apple.com/community/applications-services)
- [Get started](https://getsupport.apple.com/?caller=psp)
- [Download the Apple Support app](https://apps.apple.com/us/app/apple-support/id1130498044?pt=2003&ct=support.pages&mt=8&l=en)
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
- [Hardware Warranties](https://www.apple.com/legal/warranty/)
- [Software License Agreements](https://www.apple.com/legal/sla/)

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

- Raw REA Evidence: `catalog/rea/evidence/apple-pages.json`
- Evidence ID: `ev_2f50324bbf5cb3d093423deac83de14301c8132820cd65d38e36d02602f22ccc`
- Accessibility outline: 8326 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
