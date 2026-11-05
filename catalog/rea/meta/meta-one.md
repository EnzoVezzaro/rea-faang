# REA web-surface report — Meta One (`meta-one`)

Browser capture of the public web surface of Meta One, recorded with REA.

| | |
|---|---|
| Product | Meta One (`meta-one`) |
| Company | Meta |
| Target | https://www.meta.com/meta-one-plans/ |
| Resolved URL | https://www.meta.com/meta-one-plans/ |
| Page title | More with Meta One |
| Captured | 2026-11-04T02:49:10.402Z |
| Status | captured |
| REA Evidence ID | `ev_b79eb8e2ba3e4935393e1587145d7bdb76b50dfa366344893ebcf52b0c303530` |
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
    "url": "https://www.meta.com/meta-one-plans/"
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

- More with Meta One
- Explore personal, creator and business plans
- Get more from the apps you love
- Instagram Plus
- WhatsApp Plus
- Facebook Plus
- Meta AI
- Personal bundle plans and pricing
- More AI usage
- Expanded AI usage
- Single product plans
- See more features
- Frequently asked questions
- What is Meta One?
- How do I subscribe?
- How much does Meta One cost?
- How is Meta One different from Meta Verified?
- Is Meta Verified going away?
- Can I still get a verified badge?
- Is Meta AI still free?
- Does my subscription work across Instagram, Facebook and WhatsApp?
- How do I manage my subscription?
- Can I cancel anytime?
- What if I'm having issues?
- Meta Store

### Landmarks

- navigation: Main
- main
- region: More AI usage
- region: Expanded AI usage
- contentinfo

### Links

- [Skip to main content](#mdc-main-content)
- [Meta home](/)
- [AI glasses](/ai-glasses/)
- [Meta Quest](/quest/)
- [Meta VR Glasses](/vr-glasses/)
- [Muse Charm](/muse-charm/)
- [Explore Meta](/about/)
- [Support](/help/)
- [View bag items](/bag/)
- [How to subscribe to a Meta One personal bundle plan](https://www.meta.com/help/subscriptions/1275481294766689/)
- [How to subscribe to Instagram Plus](https://help.instagram.com/1455320872971466/)
- [How to subscribe to WhatsApp Plus](https://faq.whatsapp.com/1442805697640853/)
- [How to subscribe to Facebook Plus](https://www.facebook.com/help/1233488775563527)
- [professional account](https://www.facebook.com/help/instagram/138925576505882)
- [pro mode](https://www.facebook.com/business/help/2680340558863560)
- [business Page](https://www.facebook.com/business/help/1968057156746246?id=939256796236247)
- [eligibility requirements](https://www.meta.com/help/subscriptions/960854640235758/)
- [consumers](https://www.facebook.com/legal/meta_subs_terms)
- [creators and businesses](https://www.facebook.com/legal/mocb_terms)
- [Instagram Terms of Use](https://help.instagram.com/581066165581870)
- [Facebook Terms of Service](https://www.facebook.com/legal/terms?paipv=0&eav=AfZvYlKgIQAjlxpYVSHVvCw3CDNKhbt_ANPixrhWnZggprx0mVoioWLHLGnddjmxNdY&_rdr)
- [Community Standards](https://transparency.fb.com/policies/community-standards/)
- [WhatsApp Business Terms of Service](https://www.whatsapp.com/legal/business-terms)
- [WhatsApp Business Messaging Policy](https://business.whatsapp.com/policy)
- [Manage your Meta One Subscription](https://www.meta.com/help/subscriptions/4515570262058351/?ref=website)
- [Help Center](https://www.meta.com/help/subscriptions/842874544827919/?ref=website)
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

### Controls

- button: Search Meta Store
- button: Log In
- button: Pause video
- button: Personal
- button: Creator
- button: Business
- button: Learn more about Instagram Plus
- button: Learn more about WhatsApp Plus
- button: Learn more about Facebook Plus
- button: Learn more about Meta AI
- button: Instagram Plus
- button: WhatsApp Plus
- button: Facebook Plus
- button: More AI usage
- button: Open Generate and edit images details
- button: Open Create and transform videos details
- button: Open Apply voice and sound effects details
- button: Open Use your benefits across profiles details
- button: Expanded AI usage
- button: Open Choose a custom app icon details

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

- Raw REA Evidence: `catalog/rea/evidence/meta-one.json`
- Evidence ID: `ev_b79eb8e2ba3e4935393e1587145d7bdb76b50dfa366344893ebcf52b0c303530`
- Accessibility outline: 18122 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
