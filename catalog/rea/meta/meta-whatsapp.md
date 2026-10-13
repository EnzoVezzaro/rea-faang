# REA web-surface report — WhatsApp (`meta-whatsapp`)

Browser capture of the public web surface of WhatsApp, recorded with REA.

| | |
|---|---|
| Product | WhatsApp (`meta-whatsapp`) |
| Company | Meta |
| Target | https://www.whatsapp.com/ |
| Resolved URL | https://www.whatsapp.com/ |
| Page title | Message privately |
| Captured | 2026-10-13T19:00:23.758Z |
| Status | captured |
| REA Evidence ID | `ev_5073e54921a52ed3d2811b82bad647e35edab7dbe6fea66ec1de8dd0161e13b5` |
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
    "url": "https://www.whatsapp.com/"
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

- Message privately
- Create an account
- New! Call on WhatsApp Web
- With private messaging and calling, you can be yourself, speak freely and feel close to the most important people in your life no matter where they are.
- Never miss a moment with voice and video calls
- Speak freely
- Keep in touch with your groups
- Say what you feel
- Transform your business
- What we do
- Who we are
- Use WhatsApp
- Need help?

### Landmarks

- banner
- contentinfo

### Links

- [WhatsApp's homepage](https://www.whatsapp.com/)
- [Privacy feature on WhatsApp](https://www.whatsapp.com/privacy)
- [Blog on WhatsApp](https://blog.whatsapp.com/)
- [Available apps on WhatsApp](https://www.whatsapp.com/download)
- [WhatsApp Help Center](https://faq.whatsapp.com/)
- [Business feature on WhatsApp](https://whatsappbusiness.com/)
- [Log in to the WhatsApp app](https://web.whatsapp.com/)
- [Download the WhatsApp app](https://web.whatsapp.com/desktop/mac_native/release/?configuration=Release)
- [WhatsApp Privacy Policy](https://www.whatsapp.com/legal/privacy-policy)
- [WhatsApp Terms of Service](https://www.whatsapp.com/legal/terms-of-service)
- [Login to WhatsApp Web](https://web.whatsapp.com/)
- [Learn about voice and video calls](https://web.whatsapp.com/)
- [Learn about voice and video calls](https://www.whatsapp.com/calling)
- [Learn about end-to-end encryption](https://www.whatsapp.com/privacy)
- [Learn about communities](https://www.whatsapp.com/community)
- [Learn about messaging](https://www.whatsapp.com/messaging)
- [Learn about whatsapp business](https://whatsappbusiness.com/)
- [Download WhatsApp directly to your device](https://web.whatsapp.com/desktop/mac_native/release/?configuration=Release)
- [Features](https://www.whatsapp.com/calling)
- [WhatsApp Blogs for our latest announcements](https://blog.whatsapp.com/)
- [WhatsApp's security features](https://www.whatsapp.com/security)
- [For Business](https://whatsappbusiness.com/)
- [WhatsApp's mission statement](https://www.whatsapp.com/about)
- [Careers](https://www.metacareers.com/jobs?divisions[0]=WhatsApp)
- [Visit WhatsApp's brand center](https://www.facebook.com/brand/resources/whatsapp/whatsapp-brand)
- [WhatsApp's privacy features](https://www.whatsapp.com/privacy)
- [Mobile](https://www.whatsapp.com/download/mobile)
- [Desktop](https://www.whatsapp.com/download/desktop)
- [Tablet](https://www.whatsapp.com/download/tablet)
- [Get WhatsApp support](https://www.whatsapp.com/contact)
- [WhatsApp Help Center homepage](https://faq.whatsapp.com/)
- [Download WhatsApp](https://www.whatsapp.com/download)
- [WhatsApp's latest security advisories](https://www.whatsapp.com/security/advisories)
- [WhatsApp legal policies](https://www.whatsapp.com/legal/)
- [Sitemap](https://www.whatsapp.com/sitemap)
- [Twitter](https://x.com/whatsapp)
- [Youtube](https://www.youtube.com/channel/UCAuerig2N-RZWJT8x75V9yw)
- [Instagram](https://www.instagram.com/whatsapp/?hl=en)
- [Facebook](https://www.facebook.com/profile.php?id=100064758844406)
- [Threads](https://www.threads.com/@whatsapp)

### Controls

- button: Features
- button: Get started
- button: English

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

- Raw REA Evidence: `catalog/rea/evidence/meta-whatsapp.json`
- Evidence ID: `ev_5073e54921a52ed3d2811b82bad647e35edab7dbe6fea66ec1de8dd0161e13b5`
- Accessibility outline: 8791 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
