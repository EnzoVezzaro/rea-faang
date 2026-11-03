# REA web-surface report — Amazon Elastic File System (`amazon-elastic-file-system`)

Browser capture of the public web surface of Amazon Elastic File System, recorded with REA.

| | |
|---|---|
| Product | Amazon Elastic File System (`amazon-elastic-file-system`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/efs/ |
| Resolved URL | https://aws.amazon.com/efs/ |
| Page title | Amazon Elastic File System |
| Captured | 2026-11-03T03:02:48.717Z |
| Status | captured |
| REA Evidence ID | `ev_c17cebeabe44cf645d0f6698dfede4edc72767a064e1da81bbc943096e65435a` |
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
    "url": "https://aws.amazon.com/efs/"
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

- Amazon Elastic File System
- Benefits of Amazon EFS
- Quick and easy to create
- Elastic and scalable
- Pay as you go
- Secure and reliable
- Use cases
- Simplify DevOps
- Modernize application development
- Accelerate data science
- Enhance content management systems
- Customers
- Johnson & Johnson reduces analysis time by 35% with their data science platform using Amazon EFS
- Discover Financial Services reduced storage costs by 50% while simplifying management »
- Ancestry onboards new scientists quickly and more easily
- Acquia dynamically scaled customer environments and lowered TCO
- How to get started
- Getting Started
- Ready to build?
- Check out the product features
- Connect with an expert
- Did you find what you were looking for today?
- Learn
- Resources
- Developers

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
- [Overview](/efs/)
- [Features](/efs/features/)
- [Pricing](/efs/pricing/)
- [Getting Started](/efs/getting-started/)
- [Resources](/efs/resources/)
- [FAQs](/efs/faq/)
- [Customers](/efs/customers/)
- [Products](/products/)
- [Missing alt text value Johnson & Johnson reduces analysis time by 35% with their data science platform using Amazon EFS read the case study](https://aws.amazon.com/blogs/storage/johnson-johnson-reduces-analysis-time-by-35-with-data-science-platform/)
- [Missing alt text value Discover Financial Services reduced storage costs by 50% while simplifying management » read the case study](https://aws.amazon.com/solutions/case-studies/discover-financial-services-case-study/?pg=ln&sec=uc)
- [Missing alt text value Ancestry onboards new scientists quickly and more easily read the case study](https://aws.amazon.com/solutions/case-studies/ancestry-case-study/?pg=ln&sec=uc)
- [Missing alt text value Acquia dynamically scaled customer environments and lowered TCO read the case study](https://www.youtube.com/watch?v=wO9CxU17ckE)
- [Getting Started Learn how to get started in minutes](/efs/getting-started/)
- [Ready to build? No upfront costs or licensing fees](https://console.aws.amazon.com/efs)
- [Check out the product features With Amazon EFS, you pay only for what you use](/efs/features/)
- [Connect with an expert From development to enterprise-level apps, get the right support at the right time](/contact-us/sales-support/)
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
- button: Storage classes submenu
- button: Get started with Amazon EFS
- button: Register for an EFS Workshop
- button: Quick and easy to create
- button: Elastic and scalable
- button: Pay as you go
- button: Secure and reliable
- button: Simplify DevOps

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-elastic-file-system.json`
- Evidence ID: `ev_c17cebeabe44cf645d0f6698dfede4edc72767a064e1da81bbc943096e65435a`
- Accessibility outline: 11394 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
