# REA web-surface report — Amazon Comprehend (`amazon-comprehend`)

Browser capture of the public web surface of Amazon Comprehend, recorded with REA.

| | |
|---|---|
| Product | Amazon Comprehend (`amazon-comprehend`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/comprehend/ |
| Resolved URL | https://aws.amazon.com/comprehend/ |
| Page title | Amazon Comprehend |
| Captured | 2026-11-04T02:40:36.846Z |
| Status | captured |
| REA Evidence ID | `ev_82618b6cc88286ec2d8230ebf4316ceb9bc4858f1aa16de3e17423e593e7d4c5` |
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
    "url": "https://aws.amazon.com/comprehend/"
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

- Amazon Comprehend
- Benefits of Amazon Comprehend
- Valuable insights
- Simplify
- Differentiate your business
- Protect and control access
- Use cases
- Mine business and call center analytics
- Index and search product reviews
- Legal briefs management
- Process financial documents
- Customers
- LexisNexis discovers insights from legal documents faster
- Chisel AI automates document-intensive processes
- TeraDact offers users a safe environment for sharing information
- Next steps
- Explore Amazon Comprehend pricing
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
- [Overview](/comprehend/)
- [Pricing](/comprehend/pricing/)
- [FAQs](/comprehend/faqs/)
- [Customers](/comprehend/customers/)
- [Resources](/comprehend/resources/)
- [Products](/products/)
- [Machine Learning](/amazon-ai/)
- [Missing alt text value LexisNexis discovers insights from legal documents faster Learn more](https://aws.amazon.com/comprehend/customers/?pg=ln&sec=c)
- [Missing alt text value Chisel AI automates document-intensive processes Learn more](https://aws.amazon.com/comprehend/customers/?pg=ln&sec=c)
- [Missing alt text value TeraDact offers users a safe environment for sharing information Learn more](https://aws.amazon.com/comprehend/customers/?pg=ln&sec=c)
- [Pricing Explore Amazon Comprehend pricing Learn more about pricing](/comprehend/pricing/?pg=ln&sec=hs)
- [Contact us Connect with an expert Explore support options](https://iq.aws.amazon.com/services/aws/comprehend)
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
- button: Get started with Amazon Comprehend
- button: Contact sales
- button: Valuable insights
- button: Simplify
- button: Differentiate your business
- button: Protect and control access
- button: Mine business and call center analytics

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-comprehend.json`
- Evidence ID: `ev_82618b6cc88286ec2d8230ebf4316ceb9bc4858f1aa16de3e17423e593e7d4c5`
- Accessibility outline: 10039 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
