# REA web-surface report — Apple Pay (`apple-pay`)

Browser capture of the public web surface of Apple Pay, recorded with REA.

| | |
|---|---|
| Product | Apple Pay (`apple-pay`) |
| Company | Apple |
| Target | https://www.apple.com/apple-pay/ |
| Resolved URL | https://www.apple.com/apple-pay/ |
| Page title | Apple Pay |
| Captured | 2026-10-14T03:55:05.860Z |
| Status | captured |
| REA Evidence ID | `ev_a09c046e003701a6aea8ce8a60418c99848abdecb71f9fbd61a1b907fdf02cd2` |
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
    "url": "https://www.apple.com/apple-pay/"
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

- Apple Pay
- Your cards. Secured on iPhone.
- Get started with Apple Pay.
- Setup
- Acceptance
- In Store
- Privacy and Security
- Online
- Transit
- Rewards
- Authorize payments securely.
- Your actual card number is never shared.
- Lost your device? Lock it down.
- Your transactions are not for sale.
- Keep your actual card number on lock.
- Check out across your Apple devices.
- The symbol seals the deal.
- Pay confidently online and in apps.
- Fly through checkout in Safari.
- Apple Pay works in other browsers, too.
- Pay the fare with a tap.
- Works locally, worldwide.
- Ways to Pay
- Questions? Answers.
- How does Apple Pay work?

### Landmarks

- navigation: Global
- navigation: Local
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
- [Apple Pay](/apple-pay/)
- [Footnote 1](#footnote-1)
- [Footnote 2](#footnote-2)
- [Footnote 3](#footnote-3)
- [Footnote 4](#footnote-4)
- [Learn more about Apple Pay for Transit](https://learn.wallet.apple/transit)
- [Footnote 5](#footnote-5)
- [Footnote 6](#footnote-6)
- [Footnote 7](#footnote-7)
- [Learn more, Apple Wallet](/wallet/)
- [Learn more, Apple Card](/apple-card/)
- [Learn more, Apple Cash](/apple-cash/)
- [here](https://support.apple.com/guide/business/abcbb713dd73/web)
- [support.apple.com/118625](https://support.apple.com/118625?cid=general-applepay-marcom-08152025)
- [here](https://support.apple.com/105123)
- [support.apple.com/120477](https://support.apple.com/120477?cid=general-applepay-marcom-08152025)
- [support.apple.com/120479](https://support.apple.com/120479?cid=general-applepay-marcom-08152025)
- [support.apple.com/en-us/111117](https://support.apple.com/en-us/111117?cid=general-applepay-marcom-08152025)
- [Terms and Conditions](https://applecash.greendot.com/termsconditions/)
- [View Apple Pay countries and regions](/ios/feature-availability/#apple-wallet-apple-pay)
- [Feature Availability](/ios/feature-availability/#apple-wallet-apple-pay)
- [AirTag](/airtag/)
- [Gift Cards](/us/shop/goto/giftcards)
- [Wallet](/wallet/)
- [Apple Card](/apple-card/)
- [Apple Cash](/apple-cash/)
- [Manage Your Apple Account](https://account.apple.com/)
- [Apple Store Account](/us/shop/goto/account)

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
- button: Add a card to Apple Wallet
- button: How do I add my card to my iPhone, watch video
- button: Where can I use Apple Pay, watch video
- button: How do I pay with just my iPhone, watch video
- button: Can I pay with my Apple Watch, watch video
- button: How do I use Apple Pay in apps, watch video
- button: Can I use Apple Pay on my Mac, watch video

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

- Raw REA Evidence: `catalog/rea/evidence/apple-pay.json`
- Evidence ID: `ev_a09c046e003701a6aea8ce8a60418c99848abdecb71f9fbd61a1b907fdf02cd2`
- Accessibility outline: 36146 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
