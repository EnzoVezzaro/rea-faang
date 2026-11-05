# REA web-surface report — Meta Verified (`meta-verified`)

Browser capture of the public web surface of Meta Verified, recorded with REA.

| | |
|---|---|
| Product | Meta Verified (`meta-verified`) |
| Company | Meta |
| Target | https://www.meta.com/meta-verified/ |
| Resolved URL | https://www.meta.com/meta-verified/ |
| Page title | Protect your brand with Meta Verified |
| Captured | 2026-11-04T02:46:11.863Z |
| Status | captured |
| REA Evidence ID | `ev_bc54e93bbc69ee228432d0b79fbf68509545e40070a6f1abe559637a9e88f844` |
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
    "url": "https://www.meta.com/meta-verified/"
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

- Protect your brand with Meta Verified
- A creator toolkit to take your brand further
- Meta Verified benefits
- Creator plans and pricing
- Standard
- Plus
- Premium
- Max
- “Meta Verified helped my account stand out from impersonators, which helped me secure more paying clients.”
- FAQs
- How do I know if I'm eligible?
- I already have a verified badge. What happens to it?
- What is the verification process?
- As a creator, can I use one Meta Verified subscription on both Facebook and Instagram?
- What is the price to subscribe to Meta Verified for creators?
- What if I'm interested in Meta Verified for businesses?
- Do my Meta Verified benefits extend to my other profiles and accounts?
- After I sign up for Meta Verified, can I change my plan selection?
- How do I change my plan selection?
- I have multiple accounts subscribed to Meta Verified. Can I upgrade/ downgrade only for 1 of them?
- Meta Newsroom
- Meta Store
- Store support and legal
- Community
- Our actions

### Landmarks

- navigation: Main
- main
- region: Meta Verified testimonials
- region: How do I know if I'm eligible?
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
- [Learn more](https://www.meta.com/meta-one-plans/)
- [Subscribe on Facebook](https://accountscenter.facebook.com/meta_verified/?entrypoint=meta_site)
- [Subscribe on Instagram](https://www.instagram.com/accounts/login/?next=%2Facredirect%2F%3Fdeeplink_destination%3Dupgrade_account%26entrypoint%3Dmeta_site)
- [Meta Verified for businesses](https://www.facebook.com/business/tools/meta-verified-for-business?entry_point=meta_site)
- [Sign up on web or mobile app](#sign-up-bottom)
- [Sign up on mobile app only](https://help.instagram.com/732454618598400)
- [professional creator account](https://www.facebook.com/help/instagram/138925576505882)
- [Facebook](https://www.facebook.com/help/596285382333151)
- [Instagram](https://help.instagram.com/2419286908233223)
- [Terms of Service](https://www.facebook.com/legal/mvb_terms)
- [Facebook Terms of Use](https://www.facebook.com/legal/terms?paipv=0&eav=AfZvYlKgIQAjlxpYVSHVvCw3CDNKhbt_ANPixrhWnZggprx0mVoioWLHLGnddjmxNdY&_rdr)
- [Instagram Terms of Service](https://help.instagram.com/581066165581870)
- [Community Standards](https://transparency.meta.com/policies/community-standards/)
- [Manage your Meta Verified subscription](https://www.facebook.com/business/help/23875260945405570?id=579726174359330)
- [inversionista_gal's profile photo @inversionista_gal The Meta Verified Badge icon 4k+ followers](https://www.instagram.com/inversionista_gal)
- [Facebook](https://www.facebook.com/help/565322618581808)
- [Instagram](https://help.instagram.com/1318901965540571)
- [Visit our Newsroom](https://www.facebook.com/business/news/Introducing-Enhanced-Gen-AI-Features-and-Other-Tools-to-Help-Build-Your-Business)
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

### Controls

- button: Search Meta Store
- button: Log In
- button: Verified badge
- button: Impersonation protection
- button: Enhanced support
- button: Upgraded profile features
- button: Search optimization
- button: Featured profile
- button: Links in Reels
- button: Add images to your links
- button: Exclusive stickers
- button: Custom chat themes
- button: Personalized content strategy advice
- button: Previous slide
- button: Next slide
- button: How do I know if I'm eligible?
- button: I already have a verified badge. What happens to it?
- button: What is the verification process?
- button: As a creator, can I use one Meta Verified subscription on both Facebook and Instagram?
- button: What is the price to subscribe to Meta Verified for creators?

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

- Raw REA Evidence: `catalog/rea/evidence/meta-verified.json`
- Evidence ID: `ev_bc54e93bbc69ee228432d0b79fbf68509545e40070a6f1abe559637a9e88f844`
- Accessibility outline: 23608 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
