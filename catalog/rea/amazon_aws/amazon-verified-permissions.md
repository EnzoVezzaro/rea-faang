# REA web-surface report — Amazon Verified Permissions (`amazon-verified-permissions`)

Browser capture of the public web surface of Amazon Verified Permissions, recorded with REA.

| | |
|---|---|
| Product | Amazon Verified Permissions (`amazon-verified-permissions`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/verified-permissions/ |
| Resolved URL | https://aws.amazon.com/verified-permissions/ |
| Page title | Amazon Verified Permissions |
| Captured | 2026-11-03T03:55:38.743Z |
| Status | captured |
| REA Evidence ID | `ev_ac938050150cb70325e65cf56932b9e2e4a0a7d9575e40a384a446113f04964d` |
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
    "url": "https://aws.amazon.com/verified-permissions/"
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

- Amazon Verified Permissions
- Introduction to Verified Permissions
- Benefits
- Decouple authorization from application logic
- Developer-first authorization
- Protect your application resources
- Simplify application and resource access audits
- Continual, realtime authorization decisions
- Use cases
- Define a fine-grained authorization model
- Grant fine-grained permissions within applications
- Audit permissions across applications
- Customer testimonials
- TELUS
- Grosvenor Engineering Group
- STEDI
- Twilio
- FIS
- Get started with Verified Permissions
- Check out the product features
- Explore Verified Permissions
- Learn
- Resources
- Developers
- Help

### Landmarks

- navigation: Global navigation
- main
- navigation: Breadcrumb
- contentinfo

### Links

- [Skip to main content link](#aws-page-content-main)
- [Contact us](/contact-us/?nc2=h_ut_cu)
- [AWS Marketplace](/marketplace?nc2=h_utmp)
- [Click here to return to Amazon Web Services homepage](/?nc2=h_home)
- [re:Invent](/events/reinvent/?nc2=h_l1_f)
- [Sign in to console](https://console.aws.amazon.com/console/home/?nc2=h_si&src=header-signin)
- [Overview](/verified-permissions/)
- [Features](/verified-permissions/getting-started/)
- [Getting Started](/verified-permissions/getting-started/)
- [Pricing](/verified-permissions/pricing/)
- [Resources](/verified-permissions/resources/)
- [FAQs](/verified-permissions/faqs/)
- [Partners](/verified-permissions/partners/)
- [Customers](/verified-permissions/customers/)
- [Products](/products/)
- [Security, Identity, and Compliance](/products/security/)
- [Cedar policy](https://www.cedarpolicy.com/)
- [Features page Check out the product features Learn More](/verified-permissions/features/)
- [Console Explore Verified Permissions Get Started](https://www.youtube.com/watch?v=D8IQJaCIuwg&target=_blank)
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
- [Product and Technical FAQs](/faqs/?nc1=f_dr)
- [Analyst Reports](/resources/analyst-reports/?nc1=f_cc)
- [AWS Partners](/partners/work-with-partners/?nc1=f_dr)
- [Builder Center](https://builder.aws.com/?nc1=f_dr)
- [SDKs & Tools](https://builder.aws.com/build/tools?nc1=f_dr)
- [.NET on AWS](https://builder.aws.com/content/2zSx6gTiseJULEcqQFXqm3pzJoW/aws-tools-and-resources-net?nc1=f_dr)
- [Python on AWS](https://builder.aws.com/content/2zYQkMbmrsxHPtT89s3teyKJh79/aws-tools-and-resources-python?nc1=f_dr)

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
- button: Get started with Verified Permissions
- button: Play:
- button: Decouple authorization from application logic
- button: Developer-first authorization
- button: Protect your application resources
- button: Simplify application and resource access audits
- button: Continual, realtime authorization decisions
- button: Define a fine-grained authorization model

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-verified-permissions.json`
- Evidence ID: `ev_ac938050150cb70325e65cf56932b9e2e4a0a7d9575e40a384a446113f04964d`
- Accessibility outline: 17321 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
