# REA web-surface report — Microsoft OneDrive (`microsoft-onedrive`)

Browser capture of the public web surface of Microsoft OneDrive, recorded with REA.

| | |
|---|---|
| Product | Microsoft OneDrive (`microsoft-onedrive`) |
| Company | Microsoft |
| Target | https://www.microsoft.com/en-us/microsoft-365/onedrive/online-cloud-storage |
| Resolved URL | https://www.microsoft.com/en-us/microsoft-365/onedrive/online-cloud-storage |
| Page title | Microsoft OneDrive |
| Captured | 2026-11-04T02:20:11.548Z |
| Status | captured |
| REA Evidence ID | `ev_5bd1a09861ae004f7fc4869c9bde3ae79820e137f6c0fd46507d3871df0865c6` |
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
    "url": "https://www.microsoft.com/en-us/microsoft-365/onedrive/online-cloud-storage"
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

- Microsoft OneDrive
- Securely save and share what's important
- For your desktop
- For your phone
- For your Xbox
- Your files and photos, safe and accessible
- OneDrive is better with Microsoft 365
- Microsoft 365
- Microsoft 365 Basic
- Microsoft 365 Personal
- Microsoft 365 Family
- Ready for more powerful AI?
- OneDrive for all your devices
- Windows
- Android
- iOS
- MacOS
- Web portal
- Get the OneDrive mobile app
- Discover more about OneDrive
- Explore quick, easy-to-follow videos to help you get started and do more with Copilot in OneDrive, Word, Excel, and beyond.
- New look for OneDrive for personal use
- Learn more about Microsoft 365 products
- Elevate your writing and create beautiful documents—anywhere, anytime.
- Turn data into insights and simplify complex data into easy-to-read spreadsheets.

### Landmarks

- banner
- navigation: Contextual menu
- main
- navigation: In Page quick links
- region: carousel
- region: carousel
- region: footnotes
- region: Follow Microsoft Copilot links
- contentinfo
- navigation: Footer Resource links
- navigation: Microsoft corporate links

### Links

- [Skip to main content](#mainContent)
- [Microsoft](https://www.microsoft.com)
- [Microsoft 365](https://www.microsoft.com/en-us/microsoft-365)
- [OneDrive](https://www.microsoft.com/en-us/microsoft-365/onedrive/online-cloud-storage)
- [Business](https://www.microsoft.com/en-us/microsoft-365/onedrive/onedrive-for-business)
- [Download](https://www.microsoft.com/en-us/microsoft-365/onedrive/download)
- [Sign in](https://go.microsoft.com/fwlink/p/?LinkID=2119709&icid=marketing_nav_signin)
- [OneDrive 2026 Digital Event](https://aka.ms/OneDriveEvent/Playlist)
- [Sign in - Login to OneDrive with your Microsoft or Office 365 account](https://go.microsoft.com/fwlink/p/?LinkID=2119709&clcid=0x409&culture=en-us&country=us)
- [Create a free account link for Microsoft in English (United States)](https://go.microsoft.com/fwlink/p/?LinkID=2117132&clcid=0x409&culture=en-us&country=us)
- [See plans and pricing to Compare cloud storage pricing and plans](https://www.microsoft.com/en-us/microsoft-365/onedrive/compare-onedrive-plans)
- [Overview](#Overview)
- [Explore OneDrive](#Explore-OneDrive)
- [Pricing](#Pricing)
- [Download the app](#Download-the-app)
- [Resources](#Resources)
- [Microsoft 365 Apps](#Microsoft-365-Apps)
- [FAQ](#FAQ)
- [Next steps](#Next-steps)
- [See plans & pricing and Compare cloud storage pricing and plans](https://www.microsoft.com/en-us/microsoft-365/onedrive/compare-onedrive-plans)
- [Learn more about OneDrive PC folder backup](https://www.microsoft.com/en-us/microsoft-365/onedrive/pc-cloud-backup)
- [Back to tabs](#tabs-pill-bar-ocb9d4_tab0-tab)
- [Buy now Microsoft 365 Basic](https://go.microsoft.com/fwlink/p/?LinkID=2186361&clcid=0x409&culture=en-us&country=us)
- [Buy now Microsoft 365 Personal](https://go.microsoft.com/fwlink/?linkid=2234515&clcid=0x409&culture=en-us&country=us)
- [Try for free Microsoft 365 Premium](https://www.microsoft.com/en-us/microsoft-365/try-prs)
- [Buy now Microsoft 365 Family](https://go.microsoft.com/fwlink/?linkid=2234616&clcid=0x409&culture=en-us&country=us)
- [Try for free Microsoft 365 Family](https://www.microsoft.com/en-us/microsoft-365/try)
- [Back to tabs](#carousel-123_tab0-tab)
- [Back to tabs](#home-business-plans_tab0-tab)
- [Footnote 3](#footnote-3)
- [Try free for one month Microsoft 365 Premium](https://www.microsoft.com/en-us/microsoft-365-copilot/pricing/individuals)
- [Download](https://go.microsoft.com/fwlink/?linkid=2280746&clcid=0x409&culture=en-us&country=us)
- [Download](https://go.microsoft.com/fwlink/?LinkId=2371101&clcid=0x409&culture=en-us&country=us)
- [Download Outlook for iOS](https://go.microsoft.com/fwlink/?LinkId=2370596&clcid=0x409&culture=en-us&country=us)
- [Download Outlook for MacOS](https://go.microsoft.com/fwlink/?linkid=2280746&clcid=0x409&culture=en-us&country=us)
- [Open Outlook](https://go.microsoft.com/fwlink/?LinkId=2371100&clcid=0x409&culture=en-us&country=us)
- [Learn more about the new look and features of OneDrive for personal use.](https://go.microsoft.com/fwlink/?linkid=2280841&clcid=0x409&culture=en-us&country=us)
- [Back to carousel navigation controls](javascript:void(0);)
- [View all Microsoft 365 products, apps, and services for home and business, including free trial](https://www.microsoft.com/en-us/microsoft-365/products-apps-services)
- [Learn more about using Microsoft Word for word processing and document creation.](https://www.microsoft.com/en-us/microsoft-365/word)

### Controls

- button: Plans and pricing 
- button: Features 
- button: Resources 
- button: Search Microsoft 365
- button: Close Announcement Banner
- button:  For your desktop
- button:  For your phone
- button:  For your Xbox
- button: OneDrive mobile app video
- button: More information
- button: Outlook
- button: OneDrive
- button: Learn more about Excel in Microsoft 365 Personal
- button: Learn more about Outlook in Microsoft 365 Personal
- button: Learn more about Microsoft Copilot in Microsoft 365 Personal
- button: Learn more about Copilot features in Microsoft 365 Personal
- button: Learn more about Microsoft Defender advanced security in Microsoft 365 Personal
- button: Microsoft Copilot
- button: Word
- button: Excel

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

- Raw REA Evidence: `catalog/rea/evidence/microsoft-onedrive.json`
- Evidence ID: `ev_5bd1a09861ae004f7fc4869c9bde3ae79820e137f6c0fd46507d3871df0865c6`
- Accessibility outline: 34202 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
