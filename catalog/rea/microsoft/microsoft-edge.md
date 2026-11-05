# REA web-surface report — Microsoft Edge (`microsoft-edge`)

Browser capture of the public web surface of Microsoft Edge, recorded with REA.

| | |
|---|---|
| Product | Microsoft Edge (`microsoft-edge`) |
| Company | Microsoft |
| Target | https://www.microsoft.com/en-us/edge |
| Resolved URL | https://explore.microsoft.com/en-us/edge/?form=MA13FJ&cs=1757061135 |
| Page title | What starts here, gets done here |
| Captured | 2026-11-04T02:14:50.913Z |
| Status | captured |
| REA Evidence ID | `ev_edac67db5c422b986dd04e8f8760afa66ddfb314312f1310d1262ed8572d2ada` |
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
    "url": "https://www.microsoft.com/en-us/edge"
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

- What starts here, gets done here
- Explore even more AI innovations in Microsoft Edge
- Scareware blocker
- Edge is here to protect you from scareware attacks.
- Image generation
- Turn words into visuals instantly—no design skills required.
- Organize tabs
- One-click tab cleanup, powered by AI.
- AI Theme Generator
- Transform your words into browser themes.
- Built on the browser that puts you first
- Achieve more performance
- Stay safer online
- Get more done across devices
- Use the in-game browser built for gaming
- Do more with Edge
- What's new in Edge
- Edge introduces new features every month. Check out the latest features here.
- Pin your favorite sites
- Get quick access to the sites you love and use the most without even opening the browser.
- Unlock more in your browsing experience
- Bing
- Edge is designed to enhance your Bing search experience, providing faster, smarter, and more tailored results.
- Rewards
- Earn Microsoft Rewards points fast when you search with Bing in Edge. Then, redeem your points for gift cards, donations, and more.

### Landmarks

- navigation
- region: header actions
- main
- region: Footnotes and disclaimers
- contentinfo
- navigation: Footer Resource links
- navigation: Microsoft corporate links

### Links

- [Skip to main content](#main)
- [Microsoft Edge](/en-us/edge?form=MA13FJ)
- [Features](/en-us/edge/features?form=MA13GQ)
- [Mobile](/en-us/edge/mobile?form=MT00OS)
- [Copilot](/en-us/edge/copilot?form=MA13RK)
- [Search](/en-us/bing?form=MA13R1)
- [Download](/en-us/edge/download?form=MA13FJ)
- [Microsoft Edge Software License Terms.](/edge/terms)
- [Try Copilot](/edge/copilot?form=MA13RK)
- [Learn more about energy saver](/edge/features/energy-saver?form=MA13FJ)
- [Learn more about startup boost](/edge/features/startup-boost?form=MA13FJ)
- [Learn more about Sleeping tabs](/edge/features/sleeping-tabs?form=MA13FJ)
- [1](#footnote-1)
- [Learn more about performance features](/edge/features/performance?form=MA13FJ)
- [Learn more about Microsoft Edge Secure Network](/edge/features/edge-secure-network-vpn?form=MA13FJ)
- [Learn more about password management](/edge/features/password-management?form=MA13FJ)
- [Learn more about Microsoft Defender Smartscreen](/edge/features/microsoft-defender-smartscreen?form=MA13FJ)
- [Learn more about online safety features](/edge/features/security?form=MA13FJ)
- [Get the Edge app](/edge/mobile?form=MA13FJ)
- [Learn more about gaming features](/edge/features/edge-for-game-bar?form=MA13FJ)
- [Learn more about the latest Edge features](/edge/features?form=MA13FJ)
- [Pin sites](/edge/pin-sites?form=MA13FJ)
- [Learn more about Bing](https://www.microsoft.com/bing?form=MA13R6)
- [Start earning rewards](https://rewards.bing.com/welcome?form=ML2XDK&OCID=ML2XDK)
- [2](#footnote-2)
- [Learn more about Microsoft 365](/edge/microsoft-365?form=MA13FJ)
- [Download for your device](/edge/download?form=MA13FJ)
- [Surface Laptop Ultra](https://www.microsoft.com/en-us/surface/devices/surface-laptop-ultra?icid=DSM_Footer_WhatsNew_SurfaceLaptopUltra)
- [Surface Pro](https://www.microsoft.com/surface/devices/surface-pro)
- [Surface Laptop](https://www.microsoft.com/surface/devices/surface-laptop)
- [Surface RTX Spark Dev Box](https://www.microsoft.com/en-us/surface/devices/surface-rtx-spark-dev-box?icid=DSM_Footer_WhatsNew_SurfaceRTXSparkDevBox)
- [Explore Copilot](https://www.microsoft.com/en-us/copilot?icid=DSM_Footer_WhatsNew_Copilot)
- [Explore Microsoft products](https://www.microsoft.com/en-us/microsoft-products-and-apps)
- [Windows 11 apps](https://www.microsoft.com/en-us/windows/apps-for-windows?icid=DSM_Footer_WhatsNew_Windows11apps)
- [Account profile](https://account.microsoft.com/)
- [Download Center](https://www.microsoft.com/en-us/download)
- [Microsoft Store support](https://go.microsoft.com/fwlink/?linkid=2139749)
- [Returns](https://www.microsoft.com/en-us/store/b/returns)
- [Order tracking](https://www.microsoft.com/en-us/store/b/order-tracking)
- [Certified Refurbished](https://www.microsoft.com/en-us/store/b/certified-refurbished-products)

### Controls

- button: Features
- button: For Business
- button: Resources
- button: Search Search
- button: Download Edge
- button: Download Edge for macOS
- button: Learn more about Scareware blocker in Microsoft Edge
- button: Learn more about Image Generation
- button: Learn more about Organized Tabs
- button: Learn more about AI Theme Generator
- button: Back
- button: Select item 1
- button: Select item 2
- button: Select item 3
- button: Next

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

- Raw REA Evidence: `catalog/rea/evidence/microsoft-edge.json`
- Evidence ID: `ev_edac67db5c422b986dd04e8f8760afa66ddfb314312f1310d1262ed8572d2ada`
- Accessibility outline: 17837 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
