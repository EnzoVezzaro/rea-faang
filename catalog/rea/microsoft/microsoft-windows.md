# REA web-surface report — Microsoft Windows (`microsoft-windows`)

Browser capture of the public web surface of Microsoft Windows, recorded with REA.

| | |
|---|---|
| Product | Microsoft Windows (`microsoft-windows`) |
| Company | Microsoft |
| Target | https://www.microsoft.com/en-us/windows/ |
| Resolved URL | https://www.microsoft.com/en-us/windows/ |
| Page title | FOLLOW THE POSSIBILITIES |
| Captured | 2026-11-03T01:41:47.457Z |
| Status | captured |
| REA Evidence ID | `ev_b834d9000750d0c6bda1b5c38436d584221d0e35b520e1a8576e8a5496ccfba5` |
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
    "url": "https://www.microsoft.com/en-us/windows/"
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

- FOLLOW THE POSSIBILITIES
- The Windows difference
- A wide world of PCs
- Faster ways to work
- Peace of mind, built in
- More games. More fun.
- Find your app-y place
- Say hello to security
- Powerful choices
- Real Windows stories
- Windows vs. others
- Looking for the perfect Windows PC?
- Discover more of Windows
- Questions about Windows 11? Start here.
- What is Microsoft Windows?
- What is the latest Windows version?
- What can you do with Windows 11?
- What is Copilot?
- Does Windows 11 include AI features?
- What is local AI on Windows?
- How do I download Windows 11?
- What is a premium PC?
- What's new
- Microsoft Store
- Education

### Landmarks

- banner
- navigation: Contextual menu
- navigation: All Microsoft menu
- main
- region: A wide world of PCs
- region: Powerful choices
- region: Windows vs. others
- region: Discover more of Windows
- region: What is Microsoft Windows?
- region: What is the latest Windows version?
- region: What can you do with Windows 11?
- region: What is Copilot?
- region: Does Windows 11 include AI features?
- region: What is local AI on Windows?
- region: How do I download Windows 11?

### Links

- [Skip to main content](#primaryArea)
- [Microsoft](https://www.microsoft.com)
- [Discover Windows](https://www.microsoft.com/en-us/windows)
- [Compare](https://www.microsoft.com/en-us/windows/compare-devices)
- [Help and support](https://www.microsoft.com/en-us/windows/help-and-support)
- [For business](https://www.microsoft.com/en-us/windows/business)
- [Shop new Windows PCs powered by NVIDIA RTX Spark >](https://www.microsoft.com/en-us/windows/rtx-spark-laptops)
- [Shop new Windows PCs powered by NVIDIA RTX Spark](https://www.microsoft.com/en-us/windows/rtx-spark-laptops#products)
- [Shop PCs opens the Windows shop PCs webpage](https://www.microsoft.com/en-us/windows/shop-pcs)
- [Footnote 6](#footnote-6)
- [Shop now opens Premium Performance PCs webpage](https://www.microsoft.com/en-us/windows/shop-pcs/high-performance-computers)
- [Shop now opens Everyday Productivity PCs webpage](https://www.microsoft.com/en-us/windows/shop-pcs/windows-laptops)
- [Shop now opens Power Gaming PCs webpage](https://www.microsoft.com/en-us/windows/shop-pcs/gaming-pcs)
- [Shop now opens Creator Pro PCs webpage](https://www.microsoft.com/en-us/windows/shop-pcs/creator-pcs)
- [Shop now opens Core Essentials PCs webpage](https://www.microsoft.com/en-us/windows/shop-pcs/essential-and-entry-level-pcs  )
- [Buy opens the device webpage](https://www.microsoft.com/en-us/store/configure/surface-pro-13-inch/8n9t09p96cmj)
- [Footnote 3](#footnote-3)
- [Footnote 2](#footnote-2)
- [Compare PCs webpage opens](https://www.microsoft.com/en-us/windows/compare-devices)
- [Footnote 13](#footnote-13)
- [Read article opens article webpage](https://www.microsoft.com/en-us/windows/learning-center/pc-gaming-on-windows-11)
- [Footnote 1](#footnote-1)
- [Read article opens article webpage](https://www.microsoft.com/en-us/windows/learning-center/copilot-in-microsoft-365-on-windows-11 )
- [footnoteReturnLabel *](#ref-*)
- [footnoteReturnLabel 1](#ref-1)
- [Learn more about M365 subscriptions opens in a new tab](https://go.microsoft.com/fwlink/?linkid=2280151)
- [Details about Copilot in Microsoft 365 subscriptions opens in a new tab](https://go.microsoft.com/fwlink/?linkid=2280902)
- [footnoteReturnLabel 2](#ref-2)
- [The preferences powering PC gaming opens in a new tab](https://ampereanalysis.com/request_report_download/2?which_product_are_you_interested_in_=Ampere%20Games&report=The%20Preferences%20Powering%20PC%20Gaming)
- [footnoteReturnLabel 3](#ref-3)
- [Learn more opens Windows support webpage](https://support.microsoft.com/windows/configure-windows-hello-dae28983-8242-bb2a-d3d1-87c9d265a5f0)
- [footnoteReturnLabel 6](#ref-6)
- [footnoteReturnLabel 9](#ref-9)
- [footnoteReturnLabel 10](#ref-10)
- [aka.ms/copilotpluspcs webpage](https://aka.ms/copilotpluspcs)
- [footnoteReturnLabel 13](#ref-13)
- [footnoteReturnLabel 14](#ref-14)
- [See full terms webpage](https://www.microsoft.com/en-us/windows/back-to-school-offer#terms)
- [Surface Laptop Ultra](https://www.microsoft.com/en-us/surface/devices/surface-laptop-ultra?icid=DSM_Footer_WhatsNew_SurfaceLaptopUltra)
- [Surface Pro](https://www.microsoft.com/surface/devices/surface-pro)

### Controls

- button: Shop PCs 
- button: All Microsoft 
- button: Search or ask a question
- button: ME
- button: Play video
- button: A wide world of PCs
- button: Faster ways to work
- button: Peace of mind, built in
- button: More games. More fun.
- button: Find your app-y place
- button: Push pause to stop the video
- button: previous
- button: next
- button: Click the arrows to move forward or backwards or push the pause button to stop scrolling
- button: Expand all frequently asked questions
- button: Collapse all frequently asked questions
- button: What is Microsoft Windows?
- button: What is the latest Windows version?
- button: What can you do with Windows 11?
- button: What is Copilot?

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

- Raw REA Evidence: `catalog/rea/evidence/microsoft-windows.json`
- Evidence ID: `ev_b834d9000750d0c6bda1b5c38436d584221d0e35b520e1a8576e8a5496ccfba5`
- Accessibility outline: 24234 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
