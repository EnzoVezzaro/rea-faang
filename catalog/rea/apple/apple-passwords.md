# REA web-surface report — Passwords (`apple-passwords`)

Browser capture of the public web surface of Passwords, recorded with REA.

| | |
|---|---|
| Product | Passwords (`apple-passwords`) |
| Company | Apple |
| Target | https://support.apple.com/guide/iphone/passwords-iphf9219d8c9/ios |
| Resolved URL | https://support.apple.com/guide/iphone/automatically-fill-in-strong-passwords-iphf9219d8c9/ios |
| Page title | Automatically fill in strong passwords on iPhone |
| Captured | 2026-10-14T03:55:12.114Z |
| Status | captured |
| REA Evidence ID | `ev_b7b1420df832629677eccde05956891a5e8547231ed708e8ce93436e4a2eaa0e` |
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
    "url": "https://support.apple.com/guide/iphone/passwords-iphf9219d8c9/ios"
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

- Automatically fill in strong passwords on iPhone
- Create a strong password for a new account
- Automatically fill in a saved password
- Turn Password AutoFill on or off
- See also
- Apple Footer

### Landmarks

- navigation: Global
- navigation: Local Navigation
- main
- form: iPhone User Guide
- region
- region
- region
- navigation: pagination
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
- [iPhone User Guide](https://support.apple.com/guide/iphone/welcome/ios)
- [stores the passwords in the Passwords app](https://support.apple.com/guide/iphone/use-passwords-iphd18e98624/27/ios/27)
- [Sign in with Apple](https://support.apple.com/guide/iphone/sign-in-with-apple-iph238921d37/27/ios/27)
- [Use passkeys to sign in to websites and apps](https://support.apple.com/guide/iphone/use-passkeys-to-sign-in-to-websites-and-apps-iphf538ea8d0/27/ios/27)
- [securely add and keep notes](https://support.apple.com/guide/iphone/view-your-passwords-and-related-information-iph3ee1dd6e7/27/ios/27#iphd9f2cd623)
- [Automatically fill in SMS passcodes on iPhone](https://support.apple.com/guide/iphone/automatically-fill-in-sms-passcodes-iphc89a3a3af/27/ios/27)
- [See the websites you’ve excluded from automatically filling in passwords on iPhone](https://support.apple.com/guide/iphone/see-websites-excluded-from-autofill-iphf02627316/27/ios/27)
- [ Previous Share passwords](https://support.apple.com/guide/iphone/share-passwords-iphe6b2b7043/ios)
- [Next  See websites excluded from AutoFill](https://support.apple.com/guide/iphone/see-websites-excluded-from-autofill-iphf02627316/ios)
- [Apple](https://www.apple.com)
- [Support](https://support.apple.com)
- [United States. Choose your country or region](https://support.apple.com/guide/iphone/automatically-fill-in-strong-passwords-iphf9219d8c9/ios/localeselector)
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
- button: Submit Search
- button: Table of Contents 
- button: Yes
- button: No

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

- Raw REA Evidence: `catalog/rea/evidence/apple-passwords.json`
- Evidence ID: `ev_b7b1420df832629677eccde05956891a5e8547231ed708e8ce93436e4a2eaa0e`
- Accessibility outline: 10485 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
