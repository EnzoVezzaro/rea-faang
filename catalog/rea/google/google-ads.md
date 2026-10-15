# REA web-surface report — Google Ads (`google-ads`)

Browser capture of the public web surface of Google Ads, recorded with REA.

| | |
|---|---|
| Product | Google Ads (`google-ads`) |
| Company | Google |
| Target | https://ads.google.com/ |
| Resolved URL | https://business.google.com/us/google-ads/ |
| Page title | Win customers from discovery to decision |
| Captured | 2026-10-14T03:53:57.401Z |
| Status | captured |
| REA Evidence ID | `ev_c0c102ec0c0057519d902fbf7e2f9f608e802919fd7c1172615776e56011833b` |
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
    "url": "https://ads.google.com/"
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

- Win customers from discovery to decision
- Results for every goal, with Google Ads
- Get the quality leads your business needs
- Choose a sign-up offer to jumpstart your first campaign
- $500
- $1000
- $1500
- How to claim your offer
- Unparalleled reach – only on Google and YouTube
- Maximize your ROI by connecting your data
- Real results from real businesses
- Need help with your first steps? Chat with
- We’re here to help
- Frequently asked questions
- Where do Google Ads show up?
- How does Google Ads help you to reach potential customers?
- Which type of Google Ads campaign is right for my business?
- How does Google AI help find high-value customers for my business?
- What Google Ads credits or promotional offers are available to businesses?
- Footer links
- Products
- Learning and support
- Partners and developers
- More solutions

### Landmarks

- banner
- navigation: Global navigation
- navigation: Google Ads navigation
- main
- contentinfo
- navigation: Footer links

### Links

- [Skip to content](#page-content)
- [Google Business](https://business.google.com/us/?suffix=s500g500|ib%3A6653296821|ib%3A9279461727|ib%3A7966379274|-ahpm-0000000179-0000000001)
- [Google Ads](https://business.google.com/us/google-ads/?suffix=s500g500|ib%3A6653296821|ib%3A9279461727|ib%3A7966379274|-ahpm-0000000179-0000000001)
- [Goals](https://business.google.com/us/google-ads/campaign-goals/?suffix=s500g500|ib%3A6653296821|ib%3A9279461727|ib%3A7966379274|-ahpm-0000000179-0000000001)
- [How it works](https://business.google.com/us/google-ads/how-ads-work/?suffix=s500g500|ib%3A6653296821|ib%3A9279461727|ib%3A7966379274|-ahpm-0000000179-0000000001)
- [Cost](https://business.google.com/us/google-ads/campaign-budget/?suffix=s500g500|ib%3A6653296821|ib%3A9279461727|ib%3A7966379274|-ahpm-0000000179-0000000001)
- [Articles & case studies](https://business.google.com/us/resources/?suffix=s500g500|ib%3A6653296821|ib%3A9279461727|ib%3A7966379274|-ahpm-0000000179-0000000001)
- [Expert support](https://business.google.com/us/support/ads-expert/?suffix=s500g500|ib%3A6653296821|ib%3A9279461727|ib%3A7966379274|-ahpm-0000000179-0000000001)
- [Schedule a meeting](https://business.google.com/us/support/schedule-appointment/?suffix=s500g500|ib%3A6653296821|ib%3A9279461727|ib%3A7966379274|-ahpm-0000000179-0000000001)
- [Sign in](https://ads.google.com/nav/login?subid=us-en-awhp-g-aw-c-home-signin-bgc!o2-s500g500|ib%3A6653296821|ib%3A9279461727|ib%3A7966379274|-ahpm-0000000179-0000000001&authuser=0)
- [Start now](https://ads.google.com/signup?subid=us-en-awhp-g-aw-c-home-top-bgc!o2-s500g500|ib%3A6653296821|ib%3A9279461727|ib%3A7966379274|-ahpm-0000000179-0000000001&authuser=0)
- [Sign up for Google Ads - (opens in new tab)](https://ads.google.com/signup?subid=us-en-awhp-g-aw-c-home-hero-bgc!o2-s500g500|ib%3A6653296821|ib%3A9279461727|ib%3A7966379274|-ahpm-0000000179-0000000001&authuser=0)
- [Sign up for Google Ads - (opens in new tab)](https://ads.google.com/signup?subid=us-en-awhp-g-aw-c-home-mid-bgc!o2-s500g500|ib%3A6653296821|ib%3A9279461727|ib%3A7966379274|-ahpm-0000000179-0000000001&authuser=0)
- [Terms and conditions apply](https://ads.google.com/intl/en_us/home/terms-and-conditions/incentives/?bc=US&bid=s500g500%7Cib%3A6653296821%7Cib%3A9279461727%7Cib%3A7966379274%7C)
- [Sign up for Google Ads](https://ads.google.com/signup?subid=us-en-awhp-g-aw-c-home-cyo-mid-bgc!o2-s500g500|ib%3A6653296821|ib%3A9279461727|ib%3A7966379274|-ahpm-0000000179-0000000001&authuser=0)
- [Sign up for Google Ads](https://ads.google.com/signup?subid=us-en-awhp-g-aw-c-home-cin-bgc!o2-s500g500|ib%3A6653296821|ib%3A9279461727|ib%3A7966379274|-ahpm-0000000179-0000000001&authuser=0)
- [Sign up for Google Ads - (opens in new tab)](https://ads.google.com/signup?subid=us-en-awhp-g-aw-c-home-end-bgc!o2-s500g500|ib%3A6653296821|ib%3A9279461727|ib%3A7966379274|-ahpm-0000000179-0000000001&authuser=0)
- [Go to the Google Ads Help article on Data Strength Best Practices - (opens in new tab)](https://support.google.com/google-ads/answer/16517525?hl=en)
- [Follow Google Ads on X](https://x.com/googleads)
- [Follow Google Ads on YouTube](https://www.youtube.com/googleads)
- [Follow Google Ads on Facebook](https://www.facebook.com/GoogleAds/)
- [YouTube Ads](https://business.google.com/us/ad-solutions/youtube-ads/?suffix=s500g500|ib%3A6653296821|ib%3A9279461727|ib%3A7966379274|-ahpm-0000000179-0000000001)
- [Merchant Center](https://business.google.com/us/merchant-center/?suffix=s500g500|ib%3A6653296821|ib%3A9279461727|ib%3A7966379274|-ahpm-0000000179-0000000001)
- [Business Profile](https://business.google.com/us/business-profile/?suffix=s500g500|ib%3A6653296821|ib%3A9279461727|ib%3A7966379274|-ahpm-0000000179-0000000001)
- [Google Analytics](https://business.google.com/us/google-analytics/?suffix=s500g500|ib%3A6653296821|ib%3A9279461727|ib%3A7966379274|-ahpm-0000000179-0000000001)
- [Manufacturer Center](https://business.google.com/us/merchant-center/manufacturer-center/?suffix=s500g500|ib%3A6653296821|ib%3A9279461727|ib%3A7966379274|-ahpm-0000000179-0000000001)
- [Accelerate with Google](https://business.google.com/us/accelerate/?suffix=s500g500|ib%3A6653296821|ib%3A9279461727|ib%3A7966379274|-ahpm-0000000179-0000000001)
- [Think with Google](https://business.google.com/us/think/?suffix=s500g500|ib%3A6653296821|ib%3A9279461727|ib%3A7966379274|-ahpm-0000000179-0000000001)
- [Google Ads Help Center](https://support.google.com/google-ads/#topic=10286612&utm_source=smb_marketing&utm_medium=referral&utm_campaign=us-en-et-awhp-footer&utm_content=)
- [Your guide to Merchant Center](https://support.google.com/merchants/answer/12159157)
- [Your guide to Google Ads](https://support.google.com/google-ads/answer/6146252?utm_medium=et&utm_campaign=en&utm_source=ww-ww-et-b2bfooter_adwords)
- [Google Advertiser Community](https://support.google.com/google-ads/community?ctx=lithium)
- [Google Partners](https://partnersdirectory.withgoogle.com/?premier=true)
- [Google Developers site](https://developers.google.com/)
- [Google Ads Scripts](https://developers.google.com/google-ads/scripts/docs/start)
- [Google Ads Remarketing Tags](https://support.google.com/google-ads/answer/2476688)
- [Google Ads API](https://business.google.com/us/ad-tools/google-ads-api/?suffix=s500g500|ib%3A6653296821|ib%3A9279461727|ib%3A7966379274|-ahpm-0000000179-0000000001)
- [Workspace](https://workspace.google.com/)
- [Chrome](https://www.google.com/chrome/)
- [Google Cloud](https://cloud.google.com/)

### Controls

- button: Sign in
- button: Choose your offer now
- button: Chat with Google Ads
- button: Pause animation
- button: Play animation
- button: Watch the video about how Branch Basics tripled incremental sales
- button: Go to the previous slide
- button: Go to the next slide
- button: How do Google Ads work?
- button: How can Google Ads help my business?
- button: Ask something else
- button: Chat with us
- button: Toggle all panels
- button: Where do Google Ads show up?
- button: How does Google Ads help you to reach potential customers?
- button: Which type of Google Ads campaign is right for my business?
- button: How does Google AI help find high-value customers for my business?
- button: What Google Ads credits or promotional offers are available to businesses?
- button: Chat with Google's AI assistant about Google Ads!
- button: I’m powered by Google AI. Together, we can use Google Ads to grow your business.

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

- Raw REA Evidence: `catalog/rea/evidence/google-ads.json`
- Evidence ID: `ev_c0c102ec0c0057519d902fbf7e2f9f608e802919fd7c1172615776e56011833b`
- Accessibility outline: 17089 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
