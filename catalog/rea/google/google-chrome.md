# REA web-surface report — Google Chrome (`google-chrome`)

Browser capture of the public web surface of Google Chrome, recorded with REA.

| | |
|---|---|
| Product | Google Chrome (`google-chrome`) |
| Company | Google |
| Target | https://www.google.com/chrome/ |
| Resolved URL | https://www.google.com/chrome/ |
| Page title | The browser that gets more done |
| Captured | 2026-10-13T18:59:19.667Z |
| Status | captured |
| REA Evidence ID | `ev_a9078dc8c62d00d1155d2e422cc58f3b10efc05575d87616c0796008e594f5ec` |
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
    "url": "https://www.google.com/chrome/"
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

- The browser that gets more done
- Figure it out, right in your browser
- Browsing boosted with built-in AI
- NANO BANANA – GEMINI IN CHROME
- Make online inspiration your own creation
- SKILLS – GEMINI IN CHROME
- Your most helpful prompts in one click
- GOOGLE SEARCH
- Ask anything with AI Mode
- Make it yours and take it with you
- Think outside the top bar with vertical tabs
- One window, two views
- Customize your Chrome
- Browse across devices
- Save time with autofill
- Extend your experience
- Stay safe while you browse
- PASSWORD MANAGER
- Use strong passwords on every site.
- ENHANCED SAFE BROWSING
- Browse with the confidence that you’re staying safer online.
- SAFETY CHECK
- Check your safety level in real time with just one click.
- PRIVACY GUIDE
- Keep your privacy under your control with easy-to-use settings.

### Landmarks

- banner
- navigation: navigation menu
- main
- region
- contentinfo
- navigation
- navigation

### Links

- [Jump to content](#jump-content)
- [Google Chrome Homepage](/chrome/)
- [ai innovations](/chrome/ai-innovations/)
- [safety](/chrome/safety/)
- [By Google](/chrome/browser-tools/)
- [Mobile](/chrome/mobile/)
- [extensions](https://chromewebstore.google.com/category/extensions)
- [Try now](/chrome/ai-innovations/gemini-in-chrome/)
- [I want to update Chrome](/chrome/update/)
- [Google Terms of Service](https://policies.google.com/terms)
- [Chrome and ChromeOS Additional Terms of Service](/chrome/terms/)
- [Open in the same tab](/chrome/ai-innovations/)
- [Sign up now](http://one.google.com/ai)
- [Open in the same tab](/chrome/ai-innovations/#ai-mode)
- [Get help with managing tabs](https://support.google.com/chrome/answer/2391819)
- [Explore themes](https://chrome.google.com/webstore/category/themes)
- [Sign in to get started](http://accounts.google.com)
- [Explore extensions](https://chrome.google.com/webstore/category/extensions)
- [Learn more about Memory and Energy Saver](https://blog.google/products/chrome/new-chrome-features-to-save-battery-and-make-browsing-smoother/)
- [Learn about automatic updates](/chrome/update/)
- [Learn what’s new on Chrome](/chrome/see-whats-new/)
- [Chrome's Youtube channel, opens in a new tab](https://www.youtube.com/user/googlechrome)
- [Chrome's X page, opens in a new tab](https://twitter.com/googlechrome)
- [Chrome's Facebook page, opens in a new tab](https://www.facebook.com/googlechrome/)
- [Chrome's LinkedIn page, opens in a new tab](https://www.linkedin.com/showcase/google-chrome/)
- [Chrome's TikTok page, opens in a new tab](https://www.tiktok.com/@googlechrome)
- [Other Platforms](/chrome/other-platforms/)
- [Chromebooks, opens in a new tab](https://www.google.com/intl/en_US/chromebook/)
- [Chromecast, opens in a new tab](https://www.google.com/chromecast/)
- [Chrome Web Store, opens in a new tab](https://chromewebstore.google.com/?hl=en)
- [Download Chrome Browser, opens in a new tab](https://chromeenterprise.google/browser/download/)
- [Chrome Browser for Enterprise, opens in a new tab](https://chromeenterprise.google/)
- [Chrome Devices, opens in a new tab](https://chromeenterprise.google/devices/)
- [ChromeOS, opens in a new tab](https://chromeenterprise.google/os/)
- [Google Cloud, opens in a new tab](https://cloud.google.com/?hl=en)
- [Google Workspace, opens in a new tab](https://gsuite.google.com/?hl=en)
- [Google for Education, opens in a new tab](https://edu.google.com/intl/en_US/products/more-products/)
- [Devices for schools, opens in a new tab](https://edu.google.com/intl/en_US/chromebooks/find-a-chromebook/)
- [Chromium, opens in a new tab](https://www.chromium.org/)
- [ChromeOS, opens in a new tab](https://www.chromium.org/chromium-os)

### Controls

- button: Download Chrome
- button: Flip card
- button: One window, two views
- button: Customize your Chrome
- button: Browse across devices
- button: Save time with autofill
- button: How do I make Chrome my default web browser?
- button: How can I customize Chrome?
- button: What are Chrome’s safety settings?
- button: What is Chrome’s password manager?
- button: How do I add a browser extension to Chrome?
- button: How do I update Chrome?
- button: Get Chrome for your phone Get Chrome for your phone mobile-icon chevron-right-color
- button: chevron-right-color

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

- Raw REA Evidence: `catalog/rea/evidence/google-chrome.json`
- Evidence ID: `ev_a9078dc8c62d00d1155d2e422cc58f3b10efc05575d87616c0796008e594f5ec`
- Accessibility outline: 19289 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
