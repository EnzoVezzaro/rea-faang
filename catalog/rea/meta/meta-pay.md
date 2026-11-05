# REA web-surface report — Meta Pay (`meta-pay`)

Browser capture of the public web surface of Meta Pay, recorded with REA.

| | |
|---|---|
| Product | Meta Pay (`meta-pay`) |
| Company | Meta |
| Target | https://www.meta.com/meta-pay/ |
| Resolved URL | https://www.meta.com/meta-pay/ |
| Page title | Meta Pay |
| Captured | 2026-11-04T02:35:39.190Z |
| Status | captured |
| REA Evidence ID | `ev_2d079b2fa836adf0fa07db45a16e808489a78f231cf92dad4ffe0c914b8d0fae` |
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
    "url": "https://www.meta.com/meta-pay/"
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

- Meta Pay
- Check out easily and quickly
- Manage your payment activity
- Anti-fraud monitoring
- Customer support
- Data security
- Open your favorite app
- Enter your payment details
- Create a PIN for Meta Pay
- Manage your payment information
- Send money
- Use Meta Pay seamlessly between Facebook and Instagram
- FAQs
- Meta Newsroom
- Meta Store
- Store support and legal
- Community
- Our actions
- About us
- Site terms and policies
- App support

### Landmarks

- navigation: Main
- contentinfo

### Links

- [Skip to content](#before-content)
- [Skip to main content](#mdc-main-content)
- [Meta home](/)
- [AI glasses](/ai-glasses/)
- [Meta Quest](/quest/)
- [Meta VR Glasses](/vr-glasses/)
- [Muse Charm](/muse-charm/)
- [Explore Meta](/about/)
- [Support](/help/)
- [Bag](/bag/)
- [Log In](/login/?next=https%3A%2F%2Fwww.meta.com%2Fmeta-pay%2F)
- [Check availability](/meta-pay/availability/)
- [Add your payment method (opens in new tab)](https://www.facebook.com/help/503055570507753)
- [Accounts Center (opens in new tab)](https://www.facebook.com/help/943858526073065)
- [Learn more (opens in new tab)](https://www.facebook.com/help/2167164950254129)
- [Learn more (opens in new tab)](https://www.facebook.com/help/218846068134280)
- [Learn more (opens in new tab)](https://www.facebook.com/help/663265547498941)
- [Meta Pay Help Center (opens in new tab)](https://pay.facebook.com/faqs/#General)
- [Visit our Newsroom (opens in new tab)](https://l.facebook.com/l.php?u=https%3A%2F%2Fabout.fb.com%2Fnews%2F2022%2F06%2Fintroducing-meta-pay%2F&h=AUCRmdudjnBoT-tSkAUJ8o_or2OCEvJ65_TD3SeFsBunLqyBT6vHo17QRDfwOr-KBdXh1HiCPHahUrExoXGqmLlNrlAPzMLqo_vNSm8r9c9163EnXPu1Cf7xmUBLQcmVsViKHP5E6k3jMl8XUb1yOWynGtA)
- [Country availability](/meta-pay/availability/)
- [Help Center (opens in new tab)](https://www.facebook.com/help/pay)
- [Privacy Policy (opens in new tab)](https://www.facebook.com/about/privacy/update)
- [Community Payment Terms (opens in new tab)](https://www.facebook.com/payments_terms)
- [Payments Privacy Policy (opens in new tab)](https://www.facebook.com/payments_terms/privacy)
- [EU Region Payments Privacy Policy (opens in new tab)](https://www.facebook.com/payments_terms/EU_privacy)
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

### Controls

- button: Advance slide pause button Anti-fraud monitoring To detect unauthorized activity, payments are monitored using anti-fraud technology. Learn more (opens in new tab)
- button: Advance slide pause button
- button: Customer support If an unauthorized Meta Pay transaction appears on your bank account, customer support is always ready to help. Chat live 24 hours a day or reach out via email. Learn more (opens in new tab)
- button: Data security To keep your information secure, your debit and credit card numbers are encrypted for safe and secure storage. Learn more (opens in new tab)
- button: Advance slide pause button Open your favorite app Start a payment on the apps, such as Facebook, Messenger and Instagram, you already use. There's no need to download a separate app.
- button: Enter your payment details Add the credit card, debit card or PayPal account you’d like to use. You can update your preferred payment method any time within Meta Pay settings.
- button: Create a PIN for Meta Pay Protect yourself from unauthorized transactions with a personalized PIN to control access. Once it’s enabled, you will be prompted to enter it before some purchases for additional security.
- button: Manage your payment information Manage and update your preferred payment method in Accounts Center at any time. You can also view your transaction history across all connected apps in the same Accounts Center.
- button: Send money When you're sending money to friends and family, the money goes straight into the recipient’s bank account. There’s no waiting and no fees. (There may be fees imposed by your bank which are separate from Meta Pay.)
- button: How does Meta Pay work?
- button: Is it secure to make payments with Meta Pay?
- button: How do I set up a Meta Pay PIN?
- button: Do I need to have a Facebook account to use Meta Pay?
- button: Where can I use Meta Pay?
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

- Raw REA Evidence: `catalog/rea/evidence/meta-pay.json`
- Evidence ID: `ev_2d079b2fa836adf0fa07db45a16e808489a78f231cf92dad4ffe0c914b8d0fae`
- Accessibility outline: 16317 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
