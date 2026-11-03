# REA web-surface report — Amazon Virtual Private Cloud (`amazon-vpc`)

Browser capture of the public web surface of Amazon Virtual Private Cloud, recorded with REA.

| | |
|---|---|
| Product | Amazon Virtual Private Cloud (`amazon-vpc`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/vpc/ |
| Resolved URL | https://aws.amazon.com/vpc/ |
| Page title | Amazon Virtual Private Cloud |
| Captured | 2026-11-03T03:57:25.101Z |
| Status | captured |
| REA Evidence ID | `ev_546c1dd7534d55103fdf4a2b674dde0ac91dc658ea1f8b16bb88ee882d63671e` |
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
    "url": "https://aws.amazon.com/vpc/"
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

- Amazon Virtual Private Cloud
- Benefits of Amazon VPC
- Increase security
- Save time
- Manage and control your environment
- How it works
- Use cases
- Launch a simple website or blog
- Host multi-tier web applications
- Create hybrid connections
- Customers
- Tableau uses AWS to scale faster and increase SaaS resiliency
- Atlassian reduces Bitbucket response times by up to 45% on AWS
- SHI uses VPC to connect shipping networks and route data traffic
- Get started
- Find out how Amazon VPC works
- Start building
- Connect with an expert
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
- [Overview](/vpc/)
- [Pricing](/vpc/pricing/)
- [FAQs](/vpc/faqs/)
- [Products](/products/)
- [Networking and Content Delivery](/products/networking/)
- [Missing alt text value Tableau uses AWS to scale faster and increase SaaS resiliency Read the case study](https://aws.amazon.com/solutions/case-studies/tableau-online-migration-case-study/?pg=ln&sec=c)
- [Missing alt text value Atlassian reduces Bitbucket response times by up to 45% on AWS Read the case study](https://aws.amazon.com/solutions/case-studies/atlassian-aws-global-accelerator/?pg=ln&sec=c)
- [Missing alt text value SHI uses VPC to connect shipping networks and route data traffic Read the case study](https://aws.amazon.com/solutions/case-studies/samsung-heavy-industries/?pg=ln&sec=c)
- [Features page Find out how Amazon VPC works Visit the features page](/vpc/features/)
- [Getting started Start building Get started with Amazon VPC](https://docs.aws.amazon.com/vpc/latest/userguide/default-vpc.html?pg=ln&sec=hs)
- [Contact us Connect with an expert Explore support options](/contact-us/?pg=ln&sec=hs)
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
- [Java on AWS](https://builder.aws.com/content/2zZDrpGNFIOPAOT9PXifxnumRUC/aws-tools-and-resources-java?nc1=f_dr)
- [PHP on AWS](https://builder.aws.com/content/2zYR2daUzavSaUwnAI9X92Q1tfd/aws-tools-and-resources-php?nc1=f_dr)

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
- button: Features submenu
- button: Complete sign-up
- button: Learn more about Amazon VPC
- button: Increase security
- button: Save time
- button: Manage and control your environment
- button: Launch a simple website or blog
- button: Host multi-tier web applications

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-vpc.json`
- Evidence ID: `ev_546c1dd7534d55103fdf4a2b674dde0ac91dc658ea1f8b16bb88ee882d63671e`
- Accessibility outline: 10685 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
