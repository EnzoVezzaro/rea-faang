# REA web-surface report — Safari (`apple-safari`)

Browser capture of the public web surface of Safari, recorded with REA.

| | |
|---|---|
| Product | Safari (`apple-safari`) |
| Company | Apple |
| Target | https://www.apple.com/safari/ |
| Resolved URL | https://www.apple.com/safari/ |
| Page title | Safari |
| Captured | 2026-10-13T18:58:14.992Z |
| Status | captured |
| REA Evidence ID | `ev_d016bd1597b9773db5e86a359fed12bf717ff1534d827cbe930796c08790cc25` |
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
    "url": "https://www.apple.com/safari/"
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

- Safari
- Blazing fast. Incredibly private.
- Privacy
- Privacy is built in.
- Intelligent Tracking Prevention
- Privacy Report
- Browser Privacy
- Performance
- More with the battery. Less with the loading.
- Increased performance
- Improved power efficiency
- Best-in-class browsing
- 4K video streaming
- Customization
- Putting the you in URL.
- Profiles
- Web apps
- Extensions
- Tab Groups
- Smart Tools
- Designed to help your work flow.
- Quick Note
- Translation
- Live Text
- Visual Look Up

### Landmarks

- navigation: Global
- main
- contentinfo: Apple Footer
- region: Footnotes
- navigation: Breadcrumbs
- navigation: Apple Directory

### Links

- [Apple](/)
- [Store](/us/shop/goto/store)
- [Mac](/mac/)
- [iPad](/ipad/)
- [iPhone](/iphone/)
- [Watch](/watch/)
- [Vision](/apple-vision-pro/)
- [AirPods](/airpods/)
- [Home](/home/)
- [Entertainment](/entertainment/)
- [Accessories](/us/shop/goto/buy_accessories)
- [Support](https://support.apple.com/?cid=gn-ols-home-hp-tab)
- [Footnote 1](#footnote-1)
- [Switch to Safari. Opens in a new window](x-safari-https://www.apple.com/safari/)
- [View all privacy features](/privacy/features/)
- [Footnote 2](#footnote-2)
- [Footnote 3](#footnote-3)
- [Footnote 4](#footnote-4)
- [Footnote 5](#footnote-5)
- [Extensions for Mac](itms-apps://safariExtensions)
- [Extensions for iPhone and iPad](itms-apps://safariExtensions)
- [Explore the full list of available languages](/macos/feature-availability/#safari-web-page-translation)
- [Footnote 6](#footnote-6)
- [Learn more about continuity](/macos/continuity/)
- [learn more about developer webkit](https://developer.apple.com/macos/)
- [learn how to make safari your default browser](https://support.apple.com/guide/safari/make-safari-your-default-web-browser-ibrwa008/mac)
- [learn more about customizing start page](https://support.apple.com/HT211788)
- [learn more about viewing privacy report](https://support.apple.com/guide/safari/view-a-privacy-report-ibrw35004465/mac)
- [learn more about monitoring saved passwords](https://support.apple.com/guide/safari/autofill-user-name-and-password-info-ibrwf71ba236/14.0/mac/11.0)
- [learn more about using apple pay in safari](https://support.apple.com/HT201239#safari)
- [learn more about viewing tabs across devices](https://support.apple.com/HT202530)
- [learn more about reading the safari user guide](https://support.apple.com/guide/safari/welcome/mac)
- [learn more about safari support](https://support.apple.com/safari)
- [apple.com/batteries](/batteries/)
- [AirTag](/airtag/)
- [Gift Cards](/us/shop/goto/giftcards)
- [Wallet](/wallet/)
- [Apple Card](/apple-card/)
- [Apple Pay](/apple-pay/)
- [Apple Cash](/apple-cash/)

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
- button: Search apple.com
- button: Shopping Bag
- button: More about tracking prevention
- button: More about passkeys
- button: More about shopping

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

- Raw REA Evidence: `catalog/rea/evidence/apple-safari.json`
- Evidence ID: `ev_d016bd1597b9773db5e86a359fed12bf717ff1534d827cbe930796c08790cc25`
- Accessibility outline: 27504 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
