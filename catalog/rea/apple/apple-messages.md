# REA web-surface report — Messages (iMessage) (`apple-messages`)

Browser capture of the public web surface of Messages (iMessage), recorded with REA.

| | |
|---|---|
| Product | Messages (iMessage) (`apple-messages`) |
| Company | Apple |
| Target | https://www.apple.com/messages/ |
| Resolved URL | https://www.apple.com/messages/ |
| Page title | The page you’re looking for can’t be found. |
| Captured | 2026-10-14T03:54:43.507Z |
| Status | captured |
| REA Evidence ID | `ev_8273e3e1bdbb1730f42f33ba019dbb07ea7ae32ef211b56cf9128fea688fcaf0` |
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
    "url": "https://www.apple.com/messages/"
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

- The page you’re looking for can’t be found.
- Apple Footer
- Shop and Learn
- Apple Wallet
- Account
- Entertainment
- Apple Store
- For Business
- For Education
- For Healthcare
- For Government
- Apple Values
- About Apple

### Landmarks

- navigation: Global
- main
- search
- contentinfo: Apple Footer
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
- [Or see our site map ](/sitemap/)
- [AirTag](/airtag/)
- [Gift Cards](/us/shop/goto/giftcards)
- [Wallet](/wallet/)
- [Apple Card](/apple-card/)
- [Apple Pay](/apple-pay/)
- [Apple Cash](/apple-cash/)
- [Manage Your Apple Account](https://account.apple.com/)
- [Apple Store Account](/us/shop/goto/account)
- [iCloud.com](https://www.icloud.com)
- [Apple One](/apple-one/)
- [Apple TV](/apple-tv/)
- [Apple Music](/apple-music/)
- [Apple Arcade](/apple-arcade/)
- [Apple Fitness+](/apple-fitness-plus/)
- [Apple News+](/apple-news/)
- [Apple Podcasts](/apple-podcasts/)
- [Apple Books](/apple-books/)
- [App Store](/app-store/)
- [Find a Store](/retail/)
- [Genius Bar](/retail/geniusbar/)
- [Today at Apple](/today/)
- [Group Reservations](/today/groups/)
- [Apple Camp](/today/camp/)
- [Apple Store App](https://apps.apple.com/us/app/apple-store/id375380948)
- [Certified Refurbished](/us/shop/goto/special_deals)
- [Apple Upgrade](/us/shop/goto/apple_upgrade)
- [Apple Trade In](/us/shop/goto/trade_in)

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

- Raw REA Evidence: `catalog/rea/evidence/apple-messages.json`
- Evidence ID: `ev_8273e3e1bdbb1730f42f33ba019dbb07ea7ae32ef211b56cf9128fea688fcaf0`
- Accessibility outline: 9894 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
