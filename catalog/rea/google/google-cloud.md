# REA web-surface report — Google Cloud (`google-cloud`)

Browser capture of the public web surface of Google Cloud, recorded with REA.

| | |
|---|---|
| Product | Google Cloud (`google-cloud`) |
| Company | Google |
| Target | https://cloud.google.com/ |
| Resolved URL | https://cloud.google.com/ |
| Page title | The new way to cloud |
| Captured | 2026-10-13T18:59:27.082Z |
| Status | captured |
| REA Evidence ID | `ev_b6ba5680b42f1fc508d44b4bd8289ea38bbf962d10f539b8c0d824d7dc667aad` |
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
    "url": "https://cloud.google.com/"
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

- The new way to cloud
- Developers
- Business leaders
- Special programs
- Build with the cloud platform designed for developers and AI
- AI and machine learning
- Compute
- Storage
- Databases
- Data analytics
- Networking
- Developer tools
- Security
- Build and scale generative AI apps and agents with Gemini platform
- AI innovation happens on Google Cloud
- Solve your business problems with our industry solutions
- Let’s start building your tomorrow, today
- Why Google
- Products and pricing
- Solutions
- Resources
- Engage

### Landmarks

- banner
- navigation
- contentinfo
- navigation: Footer Links
- navigation: Utility links

### Links

- [Get started for free](https://console.cloud.google.com/freetrial)
- [Contact sales](https://cloud.google.com/contact)
- [Security Outpace adversaries in the AI era with Google AI Threat Defense Agentic Defense graphic](https://cloud.google.com/security/ai-threat-defense)
- [AI Announcements What Google Cloud announced in AI this month AI generated image](https://cloud.google.com/blog/products/ai-machine-learning/what-google-cloud-announced-in-ai-this-month)
- [AI Infrastructure What’s new in AI infrastructure and orchestration this month AI Hypercomputer graphic](https://cloud.google.com/blog/topics/ai-infrastructure/whats-new-in-ai-infrastructure-this-month)
- [Customer Stories Learn how the world's leading innovators build with Gemini Illuminated modern glass enterprise campus atrium at dusk](https://cloud.google.com/customers)
- [Build with Gemini Events Register to get hands-on experience with Gemini in a city near you](https://cloud.google.com/events/build-with-gemini-2026)
- [developer tools Developer tools Introducing the developer plugin for AI coding agents](https://cloud.google.com/blog/topics/developers-practitioners/introducing-the-google-cloud-developer-plugin-for-ai-coding-agents)
- [See all 150+ products](https://cloud.google.com/products)
- [Gemini platform](https://cloud.google.com/products/gemini-enterprise-agent-platform)
- [Get started for free](https://console.cloud.google.com/freetrial/?redirectPath=/agent-platform/overview)
- [View more AI products](https://cloud.google.com/products/ai)
- [Play video](https://www.youtube.com/watch?v=e8hehBcYU7E)
- [Gemini Enterprise icon Securely share AI agents with your organization Try Gemini Enterprise Plus edition](https://console.cloud.google.com/freetrial?redirectPath=/gemini-enterprise)
- [icon Get 35 learning credits at no cost on Google Skills with GEAR Join GEAR](https://developers.google.com/program/gear/?utm_source=web&utm_medium=cgc&utm_campaign=FY26-Q2-GLOBAL-GOO38926-onlineevent-er-gear-135947-web-AgentPlatform-cgchomepage&utm_content=Next26&utm_term=-)
- [icon Access free offers for common AI use cases View 10 free AI tools](https://cloud.google.com/use-cases/free-ai-tools)
- [Target and Google Cloud Target modernized their data infrastructure using Google Cloud to improve advertising performance. Watch video](https://www.youtube.com/watch?v=LmL-U4HSLg0)
- [Home Depot The Home Depot turns fragmented customer service into seamless journeys with Google Cloud Watch video](https://www.youtube.com/watch?v=c8t_KZeqfVw)
- [VW logo Volkswagen uses Gemini to power its virtual assistant in the myVW app, surfacing helpful information from the owner’s manual Watch video](https://www.youtube.com/watch?v=zIzgRazXdUk&)
- [Gemini](https://cloud.google.com/generative-ai-studio)
- [product discovery](https://cloud.google.com/solutions/retail-product-discovery)
- [bank fraud](https://cloud.google.com/solutions/financial-services)
- [Request a demo](https://cloud.google.com/contact?direct=true)
- [See all industries](https://cloud.google.com/solutions#section-2)
- [best buy boxes 9 / top 10 retail companies trust Google Cloud Bestbuy Best Buy uses Google Cloud generative AI to power its virtual assistants, freeing up their customer care agents to troubleshoot product issues, change order delivery and schedules, and manage subscriptions. Discover what you can do with our retail solutions. Explore retail solutions](https://cloud.google.com/solutions/retail)
- [See more customers](https://cloud.google.com/customers)
- [Google Cloud](https://cloud.google.com/)
- [Overview](https://cloud.google.com/why-google-cloud)
- [Solutions](https://cloud.google.com/solutions)
- [Products](https://cloud.google.com/products)
- [Pricing](https://cloud.google.com/pricing)
- [Resources](https://cloud.google.com/docs/get-started)
- [Docs](https://cloud.google.com/docs)
- [Support](https://cloud.google.com/support-hub)
- [Sign in](https://accounts.google.com/AccountChooser?continue=https://cloud.google.com/&hl=en-US&prompt=select_account&service=cloudconsole)
- [Choosing Google Cloud](https://cloud.google.com/why-google-cloud)
- [Trust and security](https://cloud.google.com/trust-center)
- [Modern Infrastructure Cloud](https://cloud.google.com/solutions/modern-infrastructure)
- [Multicloud](https://cloud.google.com/multicloud)
- [Global infrastructure](https://cloud.google.com/infrastructure)

### Controls

- button: Previous
- button: Next
- button: AI and machine learning keyboard_arrow_down
- button: Compute keyboard_arrow_down
- button: Storage keyboard_arrow_down
- button: Databases keyboard_arrow_down
- button: Data analytics keyboard_arrow_down
- button: Networking keyboard_arrow_down
- button: Developer tools keyboard_arrow_down
- button: Security keyboard_arrow_down
- button: Previous slide
- button: Next slide
- button: Pause animation
- button: Ask Google Cloud
- button: Search

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

- Raw REA Evidence: `catalog/rea/evidence/google-cloud.json`
- Evidence ID: `ev_b6ba5680b42f1fc508d44b4bd8289ea38bbf962d10f539b8c0d824d7dc667aad`
- Accessibility outline: 20876 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
