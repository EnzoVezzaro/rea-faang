# REA web-surface report — Google Workspace (`google-workspace`)

Browser capture of the public web surface of Google Workspace, recorded with REA.

| | |
|---|---|
| Product | Google Workspace (`google-workspace`) |
| Company | Google |
| Target | https://workspace.google.com/ |
| Resolved URL | https://workspace.google.com/ |
| Page title | The better way to work |
| Captured | 2026-10-13T19:00:09.158Z |
| Status | captured |
| REA Evidence ID | `ev_24efa0744e107fc9f0cde6d54cb4cba70cdd5e8d4a8a73ad30ad6f1d43dce72c` |
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
    "url": "https://workspace.google.com/"
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

- The better way to work
- All the tools you need and a few more we think you’ll love.
- Google Workspace includes:
- One subscription. So much premium value.
- Look professional with custom email @your-company.com
- Simplify booking with appointment scheduling
- Streamline contract management with eSignature
- Securely store your data in the cloud
- Connect seamlessly with video conferencing
- Work smarter with AI
- Safeguard confidential data with AI
- Find the right plan for your business. Try it free for 14 days.
- Starter
- $7
- Standard
- $14
- Plus
- $22
- Enterprise
- Migrate your data with confidence
- Find the answers that you need.
- What’s included with Google Workspace (formerly G Suite)?
- What is Gemini and where can I learn more about it?
- Which Google Workspace plan is right for my business?
- Can my company try Google Workspace before committing?

### Landmarks

- banner
- search
- main
- contentinfo
- region: Language List

### Links

- [Open the Google Workspace page](https://workspace.google.com/)
- [Contact the sales team at Google Workspace](https://workspace.google.com/contact/?source=gafb-alpha_home_6806262-globalnav-en)
- [Get started with Google Workspace](https://workspace.google.com/business/signup/welcome?source=gafb-alpha_home_6806262-globalnav-en&hl=en&ga_region=noram&ga_country=us&ga_lang=en)
- [Open the AI page](https://workspace.google.com/solutions/ai/)
- [Open the Pricing page](https://workspace.google.com/pricing?source=gafb-alpha_home_6806262-globalnav-en&hl=en&ga_region=noram&ga_country=us&ga_lang=en)
- [Visit the admin console](https://admin.google.com/)
- [Learn more about Workspace Intelligence](https://workspace.google.com/intelligence/?source=gafb-home-promo_banner-en)
- [Get started with Google Workspace](https://workspace.google.com/business/signup/welcome?source=gafb-alpha_home_6806262-hero-en&hl=en&ga_region=noram&ga_country=us&ga_lang=en)
- [Open the context of your work page](https://workspace.google.com/intelligence/)
- [Open the Gmail page](https://workspace.google.com/products/gmail/)
- [Open the Drive page](https://workspace.google.com/products/drive)
- [Open the Meet page](https://workspace.google.com/products/meet)
- [Open the Calendar page](https://workspace.google.com/products/calendar)
- [Open the Chat page](https://workspace.google.com/products/chat)
- [Open the Gemini page](https://workspace.google.com/solutions/ai/)
- [Open the Docs page](https://workspace.google.com/products/docs)
- [Open the Sheets page](https://workspace.google.com/products/sheets)
- [Open the Slides page](https://workspace.google.com/products/slides)
- [Open the Vids page](https://workspace.google.com/products/vids)
- [Open the Keep page](https://workspace.google.com/products/keep)
- [Open the Sites page](https://workspace.google.com/products/sites)
- [Open the Forms page](https://workspace.google.com/products/forms)
- [Open the Tasks page](https://workspace.google.com/products/tasks/)
- [Open the Gemini Notebook page](https://workspace.google.com/products/gemini-notebook)
- [Open the AppSheet page in a new tab](https://about.appsheet.com/home/)
- [Visit the Business](https://workspace.google.com/solutions/business-email/)
- [Visit the Appointment Scheduling page](https://workspace.google.com/resources/appointment-scheduling/)
- [Visit the eSignature resource page](https://workspace.google.com/resources/esignature/)
- [Visit the Google Drive product page](https://workspace.google.com/products/drive/)
- [Visit the Video Conferencing resource page](https://workspace.google.com/resources/video-conferencing/)
- [Visit the Gemini for Google Workspace page](https://workspace.google.com/solutions/ai/)
- [Visit the Google Workspace Security page](https://workspace.google.com/security/)
- [Get started Business Starter](https://workspace.google.com/business/signup/welcome?hl=en&sku=businessstarter&source=gafb-alpha_home_6806262-businessstarter-en&ga_region=noram&ga_country=us&ga_lang=en)
- [Get started Business Standard](https://workspace.google.com/business/signup/welcome?hl=en&sku=businessstandard&source=gafb-alpha_home_6806262-businessstandard-en&ga_region=noram&ga_country=us&ga_lang=en)
- [Get started Business Plus](https://workspace.google.com/business/signup/welcome?hl=en&sku=businessplus&source=gafb-alpha_home_6806262-businessplus-en&ga_region=noram&ga_country=us&ga_lang=en)
- [Contact the sales team at Google Workspace](https://workspace.google.com/contact-form/?source=gafb-alpha_home_6806262-body-en)
- [Visit the Google Workspace FAQ page](https://workspace.google.com/faq/)
- [Visit resources to learn about AI for work](https://workspace.google.com/learning/)
- [Get support on the Google Workspace support page](https://workspace.google.com/support/?referral-tabs_activeEl=enhanced-support)
- [Learn more about Gemini for Workspace](https://workspace.google.com/solutions/ai/)

### Controls

- button: Open search
- button: Close search
- button: Next slide
- button: Expand all
- button: 1
- button: 2
- button: Open the Continue page
- button: English Change Language
- button: Close
- button: Open Welcome.

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

- Raw REA Evidence: `catalog/rea/evidence/google-workspace.json`
- Evidence ID: `ev_24efa0744e107fc9f0cde6d54cb4cba70cdd5e8d4a8a73ad30ad6f1d43dce72c`
- Accessibility outline: 42428 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
