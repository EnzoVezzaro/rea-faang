# REA web-surface report — AWS App2Container (`aws-app2container`)

Browser capture of the public web surface of AWS App2Container, recorded with REA.

| | |
|---|---|
| Product | AWS App2Container (`aws-app2container`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/app2container/ |
| Resolved URL | https://aws.amazon.com/transform/ |
| Page title | AWS Transform |
| Captured | 2026-11-03T04:07:59.285Z |
| Status | captured |
| REA Evidence ID | `ev_561266f382e3b2e692cf6f5395cf67a0d456f8664451524f8bb94eeb9aadce0c` |
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
    "url": "https://aws.amazon.com/app2container/"
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

- AWS Transform
- Migrate, modernize, and stay modern with agentic AI
- Build what's next at AWS re:Invent 2026
- Capabilities for every stage of your journey
- Migrate
- Modernize
- Stay modern
- Benefits
- Accelerate enterprise transformation with agentic AI
- Transform at enterprise scale
- Reduce licensing, infrastructure, and modernization costs
- Modernize with less risk
- Stay ahead of technical debt
- Impact by the numbers
- 0
- 0B
- 0x
- What's new
- AWS recognized as a Leader in the 2026 Gartner Magic Quadrant for AI Augmented Code Modernization Tools
- Reduce Tech Debt Autonomously with Continuous Modernization
- Latest innovations
- Continuous tech debt analysis and remediation at scale
- Transformation in Motion
- Choose your starting point
- Migration & Modernization

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
- [Overview](/transform/)
- [FAQs](/transform/faq/)
- [Pricing](/transform/pricing/)
- [Partners](/transform/partners/)
- [Products](/products/)
- [Migration and Modernization](/migration-and-modernization/)
- [cloud migration](/transform/migrations/)
- [Windows](/transform/windows/)
- [Mainframe](/transform/mainframe/)
- [custom](/transform/custom/)
- [continuous modernization](/transform/continuous-modernization/)
- [What's New AWS recognized as a Leader in the 2026 Gartner Magic Quadrant for AI Augmented Code Modernization Tools Learn more](https://pages.awscloud.com/GLOBAL-brand-awareness-content-download-26-gartner-ardm-ai-augmented-code-modernization-mq-learn.html?trk=4afa392d-478a-4323-aa57-654fbef5629d&sc_channel=el)
- [blog Reduce Tech Debt Autonomously with Continuous Modernization Read more](/blogs/aws/proactively-reduce-tech-debt-autonomously-with-aws-transform-continuous-modernization-preview/)
- [Explore Workshops](https://builder.aws.com/build/workshops/?accessType=free-sandbox&tab=discover&sc_icampaign=launch_builder-center-sandbox_2026&sc_ichannel=ha&sc_iplace=banner&trk=c243de2e-eafc-4962-8ffc-4915bb208b5b)
- [Read the blog](/blogs/aws/proactively-reduce-tech-debt-autonomously-with-aws-transform-continuous-modernization-preview/)
- [Migration & Modernization Leverage an unmatched breadth of services, scale, and expertise to migrate, modernize, and build applications that power the future of your business. Learn more](/migration-and-modernization/)
- [Artificial Intelligence Build agentic AI your way with comprehensive tools and enterprise-grade security—scalable, versatile, and secure from day one. Learn more](/ai/)
- [Data & Analytics A comprehensive set of capabilities for every analytics workload, optimized for price performance and scale. Learn more](/data/)
- [Case study \"\" Thomson Reuters modernizes Windows applications 4x faster with AWS Transform Read the case study](/solutions/case-studies/thomson-reuters-case-study/)
- [Workshop Hands-on technical workshops Join a workshop](https://aws-experience.com/amer/smb/events/series/Skill-up-on-agentic-transformation)
- [Guide Explore the user guide Learn more](https://docs.aws.amazon.com/transform/latest/userguide/what-is-service.html)
- [Getting started Get started in the AWS Transform web experience Access the web experience](https://console.aws.amazon.com/transform/home)
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
- button: Use cases submenu
- button: Get started with AWS Transform
- button: Latest innovations
- button: Play:
- button: Accelerate enterprise transformation with agentic AI
- button: Transform at enterprise scale
- button: Reduce licensing, infrastructure, and modernization costs
- button: Modernize with less risk

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

- Raw REA Evidence: `catalog/rea/evidence/aws-app2container.json`
- Evidence ID: `ev_561266f382e3b2e692cf6f5395cf67a0d456f8664451524f8bb94eeb9aadce0c`
- Accessibility outline: 18286 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
