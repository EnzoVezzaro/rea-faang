# REA web-surface report — Amazon Nova Act (`amazon-nova-act`)

Browser capture of the public web surface of Amazon Nova Act, recorded with REA.

| | |
|---|---|
| Product | Amazon Nova Act (`amazon-nova-act`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/nova/ |
| Resolved URL | https://aws.amazon.com/nova/ |
| Page title | Amazon Nova |
| Captured | 2026-11-03T03:35:32.694Z |
| Status | captured |
| REA Evidence ID | `ev_2f37510ca597e8deb1a8848ddf0e8d498c541572b7915217a97501e3dabadbd7` |
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
    "url": "https://aws.amazon.com/nova/"
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

- Amazon Nova
- What is Amazon Nova?
- Models and services for all your AI experiences
- Nova Act
- Nova Forge
- Nova Models
- What's new
- Read how you can build and manage fleets of reliable agents to automate production UI workflows at scale
- Built to deliver real impact
- Built for enterprise scale
- Proven customer momentum
- Safe, responsible AI
- Customers
- Improving threat investigation with Amazon Nova, at nearly 100 times lower cost
- Helping parents better understand and engage with their children's gaming experiences with Amazon Nova Lite
- Helping filmmakers transform scripts into visual narratives within minutes with Amazon Nova Reel
- Powering the future of real estate using generative AI and Amazon Nova Pro
- Digital tools to help administrators, teachers, and parents while supporting and protecting students with Amazon Nova
- Try AWS AI for Free
- Next steps
- Get started with Nova
- Learn more about safety and commitment to responsible AI
- Did you find what you were looking for today?
- Learn
- Resources

### Landmarks

- navigation: Global navigation
- main
- navigation: Breadcrumb
- region: AWS Information
- region: carousel
- contentinfo

### Links

- [Skip to main content link](#aws-page-content-main)
- [Contact us](/contact-us/?nc2=h_ut_cu)
- [AWS Marketplace](/marketplace?nc2=h_utmp)
- [Click here to return to Amazon Web Services homepage](/?nc2=h_home)
- [re:Invent](/events/reinvent/?nc2=h_l1_f)
- [Sign in to console](https://console.aws.amazon.com/console/home/?nc2=h_si&src=header-signin)
- [Overview](/nova/)
- [Nova Act](/nova/act/)
- [Nova Forge](/nova/forge/)
- [Nova Models](/nova/models/)
- [Pricing](/nova/pricing/)
- [Customers](/nova/customers/)
- [Artificial Intelligence](/ai/)
- [Generative AI](/ai/generative-ai/)
- [Nova Act Service Nova Act Nova Act is a new AWS service to build, deploy, and manage fleets of AI agents for automating production UI workflows. Nova Act provides high reliability, fastest time-to-value, and ease of implementation at scale, powered by a customer Nova computer use Learn more](/nova/act/)
- [Nova Forge Service Nova Forge Nova Forge is a new service to build your own frontier models using Nova. Organizations of all sizes can now experience the benefits of a purpose-built frontier model, without the prohibitive compute, cost, and time needed to train from scratch. Learn more](/nova/forge/)
- [models Models Nova Models Amazon Nova models deliver frontier intelligence and industry-leading price-performance. With the most comprehensive suite of customization capabilities for any proprietary model family, organizations can customize Nova to deliver responses that reflect t Learn more](/nova/models/)
- [Nova Act Read how you can build and manage fleets of reliable agents to automate production UI workflows at scale Read the blog](/blogs/aws/build-reliable-ai-agents-for-ui-workflow-automation-with-amazon-nova-act-now-generally-available)
- [Learn more](/nova/customers/)
- [Missing alt text value Improving threat investigation with Amazon Nova, at nearly 100 times lower cost Read more about Trellix](https://aws.amazon.com/blogs/machine-learning/trellix-lowers-cost-increases-speed-and-adds-delivery-flexibility-with-cost-effective-and-performant-amazon-nova-micro-and-amazon-nova-lite-models/)
- [Missing alt text value Helping parents better understand and engage with their children's gaming experiences with Amazon Nova Lite Read more about GuardianGamer](https://aws.amazon.com/blogs/machine-learning/guardiangamer-scales-family-safe-cloud-gaming-with-aws/)
- [Missing alt text value Helping filmmakers transform scripts into visual narratives within minutes with Amazon Nova Reel Read more about Rubbrband](/solutions/case-studies/rubbrband-nova-case-study/)
- [Missing alt text value Powering the future of real estate using generative AI and Amazon Nova Pro Read more about AppFolio](https://aws.amazon.com/solutions/case-studies/appfolio-nova-case-study/)
- [Missing alt text value Digital tools to help administrators, teachers, and parents while supporting and protecting students with Amazon Nova Read more about Ativion](https://aws.amazon.com/solutions/case-studies/ativion-nova-case-study/)
- [Get started with Nova Read the guide](https://docs.aws.amazon.com/nova/latest/userguide/what-is-nova.html)
- [Learn more about safety and commitment to responsible AI Read the service card](/ai/responsible-ai/resources/#service)
- [What Is AWS?](/what-is-aws/?nc1=f_cc)
- [What Is Cloud Computing?](/what-is-cloud-computing/?nc1=f_cc)
- [What Is Agentic AI?](/what-is/agentic-ai/?nc1=f_cc)
- [Cloud Computing Concepts Hub](/what-is/?nc1=f_cc)
- [AWS Cloud Security](/security/?nc1=f_cc)
- [What's New](/new/?nc1=f_cc)
- [Blogs](/blogs/?nc1=f_cc)
- [Press Releases](https://press.aboutamazon.com/aws)
- [Careers](https://www.amazon.jobs/content/en/teams/amazon-web-services/?nc1=f_cc)
- [Getting Started](/getting-started/?nc1=f_cc)
- [Training](/training/?nc1=f_cc)
- [AWS Trust Center](/trust-center/?nc1=f_cc)
- [AWS Solutions Library](/solutions/?nc1=f_cc)
- [Architecture Center](/architecture/?nc1=f_cc)

### Controls

- button: English
- button: Support
- button: My account
- button: AWS Profile
- button: Discover AWS
- button: Products
- button: Solutions
- button: Pricing
- button: Resources
- button: Toggle search
- button: Create account
- button: Open feedback
- button: Try it today
- button: Build with Amazon Nova
- button: Play:
- button: Previous slide
- button: Next slide
- button: Built for enterprise scale
- button: Proven customer momentum
- button: Safe, responsible AI

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-nova-act.json`
- Evidence ID: `ev_2f37510ca597e8deb1a8848ddf0e8d498c541572b7915217a97501e3dabadbd7`
- Accessibility outline: 14942 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
