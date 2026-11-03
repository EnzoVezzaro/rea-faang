# REA web-surface report — Amazon Athena (`amazon-athena`)

Browser capture of the public web surface of Amazon Athena, recorded with REA.

| | |
|---|---|
| Product | Amazon Athena (`amazon-athena`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/athena/ |
| Resolved URL | https://aws.amazon.com/athena/ |
| Page title | Amazon Athena |
| Captured | 2026-11-03T01:55:15.424Z |
| Status | captured |
| REA Evidence ID | `ev_f771fae737daa9c0a812f9b5c2f2aef79479f9768dead75f5e378b9c33de030e` |
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
    "url": "https://aws.amazon.com/athena/"
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

- Amazon Athena
- Why Amazon Athena?
- Amazon Athena is accessible in the next generation of Amazon SageMaker
- Benefits
- Optimize your serverless experience
- Create interactive, advanced analytics applications
- Build with your preferred tools and frameworks
- Simple and predictable pricing
- Analyze data using serverless SQL and Apache Spark in the next generation of Amazon SageMaker
- Use cases
- Run queries on S3, on premises, or on other clouds
- Prepare data for ML models
- Perform multicloud analytics
- Customers
- FINRA allows analysts to securely search terabytes of data
- Siemens Mobility makes fleet management more efficient
- Cargotec derives insights from data lakes
- Betterment analyzes semi-structured data in Amazon S3
- Get started with Athena
- Access a data-querying tutorial
- Get your Athena questions answered
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
- [Overview](/athena/?nc=sn&loc=1)
- [Pricing](/athena/pricing/?nc=sn&loc=3)
- [Getting Started](/athena/getting-started/)
- [Resources](/athena/resources/)
- [FAQs](/athena/faqs/?nc=sn&loc=6)
- [Products](/products/)
- [Analytics](/products/analytics/)
- [Amazon S3](/s3/)
- [Amazon SageMaker](/sagemaker/)
- [Amazon SageMaker Unified Studio](/sagemaker/unified-studio/)
- [Learn more](/sagemaker/data-processing)
- [Missing alt text value FINRA allows analysts to securely search terabytes of data Watch the video](https://www.youtube.com/watch?v=72c_klMZdZ8)
- [Missing alt text value Siemens Mobility makes fleet management more efficient Read the case study](https://aws.amazon.com/solutions/case-studies/siemens-mobility-railigent/)
- [Missing alt text value Cargotec derives insights from data lakes Read the case study](https://aws.amazon.com/solutions/case-studies/cargotec/)
- [Missing alt text value Betterment analyzes semi-structured data in Amazon S3 Read the case study](https://aws.amazon.com/solutions/case-studies/betterment/)
- [Getting started Access a data-querying tutorial Start using Athena now](https://docs.aws.amazon.com/athena/latest/ug/getting-started.html)
- [FAQs Get your Athena questions answered Review the FAQs](/athena/faqs/?nc=sn&loc=6)
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
- button: Get started with Athena
- button: Optimize your serverless experience
- button: Create interactive, advanced analytics applications
- button: Build with your preferred tools and frameworks
- button: Simple and predictable pricing
- button: Analyze data using serverless SQL and Apache Spark in the next generation of Amazon SageMaker
- button: Run queries on S3, on premises, or on other clouds

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-athena.json`
- Evidence ID: `ev_f771fae737daa9c0a812f9b5c2f2aef79479f9768dead75f5e378b9c33de030e`
- Accessibility outline: 11999 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
