# REA web-surface report — Microsoft 365 (`microsoft-365`)

Browser capture of the public web surface of Microsoft 365, recorded with REA.

| | |
|---|---|
| Product | Microsoft 365 (`microsoft-365`) |
| Company | Microsoft |
| Target | https://www.microsoft.com/en-us/microsoft-365 |
| Resolved URL | https://www.microsoft.com/en-us/microsoft-365 |
| Page title | The apps you know go further with Copilot |
| Captured | 2026-11-03T01:41:00.503Z |
| Status | captured |
| REA Evidence ID | `ev_c99ad19e5625c4adb0787ebed9609c6c4927e32e1265ced64a95b81fe851fc1a` |
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
    "url": "https://www.microsoft.com/en-us/microsoft-365"
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

- The apps you know go further with Copilot
- Boost your productivity with Copilot
- Brainstorm and research with ease
- Organize and plan with precision
- Create and polish with confidence
- Protect what’s important
- AI features included with Microsoft 365 to help you explore, create, and solve
- Cowork (Premium and Pro only)
- Researcher (Premium and Pro only)
- Discover what’s happening with Microsoft 365
- Students save 50% on our AI and productivity subscription
- Built for work. Made for you.
- Powerful apps to simplify your life and work
- Copilot is built for work
- Create your best work
- Turn data into insights
- Polish your presentations
- Your inbox, organized
- Uplevel your notes
- Connect with anyone
- Find the plan that’s right for you
- Microsoft 365
- Microsoft 365 Basic
- Microsoft 365 Basic includes:
- Microsoft 365 Personal

### Landmarks

- banner
- navigation: Contextual menu
- main
- navigation: In Page quick links
- region: Features section
- region: Plans section
- region: Footnotes
- region: Follow Microsoft Copilot links
- contentinfo
- navigation: Footer Resource links
- navigation: Microsoft corporate links

### Links

- [Skip to main content](#mainContent)
- [Microsoft](https://www.microsoft.com)
- [Microsoft 365](https://www.microsoft.com/en-us/microsoft-365)
- [Plans and pricing](https://www.microsoft.com/en-us/microsoft-365/business/microsoft-365-plans-and-pricing)
- [Try for free](https://www.microsoft.com/en-us/microsoft-365/try-prs?ocid=cmmo4xgt3j5)
- [Watch our Copilot webinar on demand.](https://go.microsoft.com/fwlink/?linkid=2362435&clcid=0x409&culture=en-us&country=us)
- [Footnote 2](#note-2)
- [Footnote 1](#note-1)
- [See Copilot in action](#m365-hero-video-1307281)
- [For individuals](https://www.microsoft.com/en-us/microsoft-365)
- [For business](https://www.microsoft.com/en-us/microsoft-365/microsoft-365-business)
- [For enterprise](https://www.microsoft.com/en-us/microsoft-365/microsoft-365-enterprise)
- [For education](https://www.microsoft.com/en-us/microsoft-365/microsoft-365-education)
- [How it works](#How-it-works)
- [features](#features)
- [news](#news)
- [What’s included](#Whats-included)
- [Plans](#Plans)
- [Get started](#Get-started)
- [FAQ](#FAQ)
- [See plans and pricing for Microsoft 365](https://go.microsoft.com/fwlink/p/?linkid=2220705&clcid=0x409&culture=en-us&country=us)
- [Learn more about Microsoft 365 for individuals](https://www.microsoft.com/en-us/microsoft-365/explore-microsoft-365-for-home)
- [footnote1](#note-1)
- [Back to Features section](javascript:void(0);)
- [Get offer - Explore Microsoft 365 discounted plans for college students and enhance productivity.](https://www.microsoft.com/en-us/microsoft-365/college-student-pricing)
- [Explore all apps, products and services of microsoft 365](https://www.microsoft.com/en-us/microsoft-365/products-apps-services)
- [Learn more about Microsoft Word](https://www.microsoft.com/en-us/microsoft-365/word)
- [Learn more about Microsoft excel](https://www.microsoft.com/en-us/microsoft-365/excel)
- [Learn more about Microsoft powerpoint](https://www.microsoft.com/en-us/microsoft-365/powerpoint)
- [Learn more about Your inbox, organized. Your day, planned](https://www.microsoft.com/en-us/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook)
- [Learn more about OneNote](https://www.microsoft.com/en-us/microsoft-365/onenote/digital-note-taking-app)
- [Learn more about Connect with anyone in Teams for free](https://www.microsoft.com/en-us/microsoft-teams/teams-free)
- [Back to tabs for what's included section](#tabs-pill-bar-oc58d2_tab0-tab)
- [Create a free Microsoft account](https://go.microsoft.com/fwlink/?linkid=2269915&clcid=0x409&culture=en-us&country=us)
- [See terms.](https://go.microsoft.com/fwlink/?linkid=2265909)
- [Buy now](https://go.microsoft.com/fwlink/p/?LinkID=2186361&clcid=0x409&culture=en-us&country=us)
- [See terms](https://go.microsoft.com/fwlink/?linkid=2265909)
- [Buy now](https://go.microsoft.com/fwlink/?linkid=2234515&clcid=0x409&culture=en-us&country=us)
- [Try for free](https://www.microsoft.com/en-us/microsoft-365/try-prs)
- [see terms for yearly option of Microsoft 365 family](https://go.microsoft.com/fwlink/?linkid=2265909)

### Controls

- button: Products 
- button: Resources 
- button: Support 
- button: Search Microsoft 365
- button: ME
- button: Close Announcement Banner
- button:  Brainstorm and research with ease
- button: Play
- button:  Organize and plan with precision
- button:  Create and polish with confidence
- button:  Protect what’s important
- button: Previous Slide
- button: Next Slide
- button: More information
- button: Outlook
- button: OneDrive
- button: Microsoft Copilot
- button: Word (web and mobile only)
- button: Excel (web and mobile only)
- button: PowerPoint (web and mobile only)

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

- Raw REA Evidence: `catalog/rea/evidence/microsoft-365.json`
- Evidence ID: `ev_c99ad19e5625c4adb0787ebed9609c6c4927e32e1265ced64a95b81fe851fc1a`
- Accessibility outline: 36059 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
