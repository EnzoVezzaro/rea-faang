# REA web-surface report — AWS App Runner (`aws-app-runner`)

Browser capture of the public web surface of AWS App Runner, recorded with REA.

| | |
|---|---|
| Product | AWS App Runner (`aws-app-runner`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/apprunner/ |
| Resolved URL | https://aws.amazon.com/apprunner/ |
| Page title | AWS App Runner |
| Captured | 2026-11-03T04:05:50.168Z |
| Status | captured |
| REA Evidence ID | `ev_0e1e3439744ba4804f45b5e4554c26e90db323ac65aca7b2906f2b4798a3d70c` |
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
    "url": "https://aws.amazon.com/apprunner/"
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

- AWS App Runner
- End of support notice
- Why App Runner?
- Benefits of App Runner
- Accelerate application development and deployment
- Automatically scale applications
- Built-in security and compliance
- Seamless integration with AWS services
- Use cases
- Build frontend and backend applications
- Run thousands of microservices simultaneously
- Customers
- Classmethod configured and deployed without infrastructure experience
- Velo by Wix created powerful and flexible integrations
- Hubble built and deployed microservice-based applications
- Get started
- Learn more about App Runner
- Discover how App Runner works
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
- [Overview](/apprunner/)
- [Features](/apprunner/features/)
- [Pricing](/apprunner/pricing/)
- [Resources](/apprunner/resources/)
- [FAQs](/apprunner/faqs/)
- [Customers](/apprunner/customers/)
- [Products](/products/)
- [Compute](/products/compute/)
- [Amazon ECS Express Mode](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/express-service-overview.html)
- [Amazon ECS](/ecs/)
- [migration guidance](https://docs.aws.amazon.com/apprunner/latest/dg/apprunner-availability-change.html)
- [Missing alt text value Classmethod configured and deployed without infrastructure experience Learn more](https://aws.amazon.com/apprunner/customers)
- [Missing alt text value Velo by Wix created powerful and flexible integrations Read the testimonial](https://aws.amazon.com/apprunner/customers/#velo)
- [Missing alt text value Hubble built and deployed microservice-based applications Read the testimonial](https://aws.amazon.com/apprunner/customers/#hubble)
- [Learn more about App Runner Explore App Runner Features](/apprunner/features/?refid=12eea001-bcfd-40ce-9788-748f73400e32)
- [Discover how App Runner works Read the developer guide](https://docs.aws.amazon.com/apprunner/latest/dg/what-is-apprunner.html)
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
- button: Get started with App Runner
- button: Play:
- button: Accelerate application development and deployment
- button: Automatically scale applications
- button: Built-in security and compliance
- button: Seamless integration with AWS services
- button: Create an AWS account
- button: Back to top

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

- Raw REA Evidence: `catalog/rea/evidence/aws-app-runner.json`
- Evidence ID: `ev_0e1e3439744ba4804f45b5e4554c26e90db323ac65aca7b2906f2b4798a3d70c`
- Accessibility outline: 11570 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
