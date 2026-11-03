# REA web-surface report — Microsoft Teams (`microsoft-teams`)

Browser capture of the public web surface of Microsoft Teams, recorded with REA.

| | |
|---|---|
| Product | Microsoft Teams (`microsoft-teams`) |
| Company | Microsoft |
| Target | https://www.microsoft.com/en-us/microsoft-teams/group-chat-software |
| Resolved URL | https://www.microsoft.com/en-us/microsoft-teams/group-chat-software |
| Page title | Ask Microsoft |
| Captured | 2026-11-03T01:41:38.358Z |
| Status | captured |
| REA Evidence ID | `ev_576c79eff944e04fd76f75ec38ea63f6fdf967d9d0624a28b529b70b7ae6fab4` |
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
    "url": "https://www.microsoft.com/en-us/microsoft-teams/group-chat-software"
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

- Ask Microsoft
- Discover what’s happening with Teams
- Gartner® Magic Quadrant™
- Prompt like a pro with Microsoft 365 Copilot in Teams
- Simple, smart, secure
- Streamline teamwork
- Customize views
- Collaborate securely
- Increase effectiveness
- Find the right Teams plan and add-ons for your needs
- Teams for small business
- Teams Essentials
- Microsoft 365 Business Standard
- Microsoft 365 Business Premium
- Teams Phone
- Teams Rooms
- Teams Premium
- See how customers are innovating with Teams
- Make-A-Wish Foundation cuts costs 40% using Clerk Chat and Microsoft Teams
- Take the next step with AI enhanced Teams - built for your work, your passions, and the ideas you’re turning into reality.
- For business
- For individuals
- For enterprise
- For education
- Follow Microsoft Teams

### Landmarks

- banner
- navigation: Contextual menu
- main
- navigation: In page quick links
- search
- region: SUCCESS STORIES section
- region
- region: Social Follow links
- contentinfo
- navigation: Footer Resource links
- navigation: Microsoft corporate links

### Links

- [Skip to main content](#mainContent)
- [Microsoft](https://www.microsoft.com)
- [Teams](https://www.microsoft.com/en-us/microsoft-teams/group-chat-software )
- [Plans and pricing](https://www.microsoft.com/en-us/microsoft-teams/compare-microsoft-teams-options?activetab=pivot:primaryr1)
- [Try for free](https://www.microsoft.com/en-us/microsoft-teams/teams-trials)
- [Download Teams](https://www.microsoft.com/en-us/microsoft-teams/download-app)
- [Sign in](https://go.microsoft.com/fwlink/p/?linkid=873020)
- [Download now - Download Microsoft Teams for desktop and mobile to collaborate and connect across devices.](https://www.microsoft.com/en-us/microsoft-teams/download-app#download-for-desktop1)
- [Featured news](#Featured-news)
- [Solutions](#Solutions)
- [Products and services](#Products-and-services)
- [Customer stories](#Customer-stories)
- [Get started](#Get-started)
- [See plans and pricing to find the right Microsoft Teams for your needs](https://www.microsoft.com/en-us/microsoft-teams/compare-microsoft-teams-options?rtc=1&activetab=pivot:primaryr1)
- [Learn more about Microsoft Teams features that boost everyone’s productivity](https://go.microsoft.com/fwlink/?linkid=2330221&clcid=0x409&culture=en-us&country=us)
- [footnote 1](#Footnote-1)
- [Learn more about Copilot in Teams](https://go.microsoft.com/fwlink/?linkid=2275490&clcid=0x409&culture=en-us&country=us)
- [Back to tabs](#tabs-pill-bar-oc93e3_tab0-tab)
- [Learn more about how Microsoft Teams can keep your business connected.](https://www.microsoft.com/en-us/microsoft-teams/small-medium-business)
- [Learn more about Microsoft Teams Essentials, an affordable and professional meeting solution for small businesses.](https://www.microsoft.com/en-us/microsoft-teams/essentials?activetab=pivot:overviewtab)
- [Learn more about how Microsoft 365 Business Standard can help you manage your business and connect employees across devices.](https://www.microsoft.com/en-us/microsoft-365/business/microsoft-365-business-standard?activetab=pivot:overviewtab)
- [Learn more about Microsoft 365 Business Premium with comprehensive security and cloud services](https://www.microsoft.com/en-us/microsoft-365/business/microsoft-365-business-premium?activetab=pivot:overviewtab)
- [Learn more about Microsoft Teams Phone Teams Phone more than a cloud phone system. Experience smart communication](https://www.microsoft.com/en-us/microsoft-teams/microsoft-teams-phone#heading-oc4df0)
- [Learn more about turning any meeting room into an inclusive and collaborative space with Microsoft Teams Rooms](https://www.microsoft.com/en-us/microsoft-teams/microsoft-teams-rooms)
- [Learn more about Microsoft Teams Premium the smart place to work](https://www.microsoft.com/en-us/microsoft-teams/premium)
- [Back to PRODUCTS AND SERVICES section](#tabs-pill-bar-oc58d2_tab0-tab)
- [See all customer stories](https://www.microsoft.com/en-us/customers/search?filters=product%3Amicrosoft-teams)
- [Microsoft Teams](https://go.microsoft.com/fwlink/?linkid=2289106)
- [Read the story Make-A-Wish Foundation cuts costs 40% using Clerk Chat and Microsoft Teams](https://www.microsoft.com/en/customers/story/27211-make-a-wish-foundation-of-america-microsoft-teams)
- [Back to SUCCESS STORIES section](javascript:void(0);)
- [See plans and pricing for Microsoft Teams tailored to your organization's needs.](https://www.microsoft.com/en-us/microsoft-teams/compare-microsoft-teams-business-options?activetab=pivot:primaryr1)
- [Try Teams for free and easily manage your needs for home and life, all in Microsoft Teams](https://www.microsoft.com/en-us/microsoft-teams/teams-for-home)
- [Learn more about how Copilot for Microsoft 365 is now available for small and medium-sized businesses.](https://www.microsoft.com/en-us/microsoft-teams/education)
- [footnote-label-1](#Footnote-1)
- [here](https://www.gartner.com/doc/reprints?id=00ThR000008VafOUAS&ct=260803&st=sb)
- [footnote-label-2](#Footnote-2)
- [footnote-label-3](#Footnote-3)
- [footnote-label-4](#Footnote-4)
- [footnote-label-5](#Footnote-5)
- [footnote-label-6](#Footnote-6)

### Controls

- button: Products 
- button: Features 
- button: Solutions 
- button: Resources 
- button: More 
- button: Dismiss
- button: Submit
- button: What are the key benefits of Teams?
- button: Get a custom quote
- button:  Streamline teamwork
- button: Play
- button:  Customize views
- button:  Collaborate securely
- button:  Increase effectiveness
- button: Slide 1 Make-A-Wish Foundation cuts costs 40% using Clerk Chat and Microsoft Teams current slide
- button: Slide 2 Global health nonprofit PATH elevates its security and protects private data with Microsoft Defender XDR
- button: Slide 3 Moody’s guards against risk with decision-grade intelligence live in Copilot
- button: Slide 4 Levi Strauss & Co. simplifies work and accelerates decision-making with Microsoft Foundry
- button: Slide 5 Kimley-Horn brings Microsoft 365 Copilot to AEC work
- button: Slide 6 Premera Blue Cross makes AI mainstream with Copilot and Copilot Studio

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

- Raw REA Evidence: `catalog/rea/evidence/microsoft-teams.json`
- Evidence ID: `ev_576c79eff944e04fd76f75ec38ea63f6fdf967d9d0624a28b529b70b7ae6fab4`
- Accessibility outline: 25719 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
