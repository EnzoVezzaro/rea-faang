# REA web-surface report — Amazon EMR (`amazon-emr`)

Browser capture of the public web surface of Amazon EMR, recorded with REA.

| | |
|---|---|
| Product | Amazon EMR (`amazon-emr`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/emr/ |
| Resolved URL | https://aws.amazon.com/emr/ |
| Page title | Amazon EMR |
| Captured | 2026-11-03T03:05:57.007Z |
| Status | captured |
| REA Evidence ID | `ev_9da5ce3c7cbdb5d0e72c3fc3b6e199c33a9911033d65d0cbc1b2e59736a398e8` |
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
    "url": "https://aws.amazon.com/emr/"
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

- Amazon EMR
- Why Amazon EMR?
- Flexible deployment options
- Why EMR Serverless?
- Process your data with Amazon EMR in the next generation of Amazon SageMaker
- Features
- Amazon EMR runs Apache Spark and Iceberg read jobs 4.5x faster than open source Spark and Iceberg
- Amazon EMR runs Apache Spark and Apache Iceberg write jobs over 2x faster than open source Spark and Iceberg
- Benefits
- Cost-effective big data processing
- Accelerate time-to-insight and optimize performance
- Unparalleled deployment flexibility
- Optimize data processing in Amazon SageMaker
- Accelerate Spark upgrades with AI-assistance
- Use cases
- Perform big data analytics
- Build scalable data pipelines
- Process real-time data streams
- Accelerate data science and ML adoption
- Get started with Amazon EMR
- Find out how Amazon EMR works
- Explore Amazon EMR pricing
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
- [Overview](/emr/?nc=sn&loc=1)
- [Pricing](/emr/pricing/?nc=sn&loc=4)
- [FAQs](/emr/faqs/?nc=sn&loc=5)
- [Partners](/emr/partners/?nc=sn&loc=5)
- [Migrations](/big-data/datalakes-and-analytics/migrations/)
- [Products](/products/)
- [Analytics](/products/analytics/)
- [Amazon SageMaker,](/sagemaker/)
- [Learn more.](/sagemaker/data-processing)
- [Amazon EMR runs Apache Spark and Iceberg read jobs 4.5x faster than open source Spark and Iceberg Learn more](/blogs/big-data/run-apache-spark-and-iceberg-4-5x-faster-than-open-source-spark-with-amazon-emr/)
- [Amazon EMR runs Apache Spark and Apache Iceberg write jobs over 2x faster than open source Spark and Iceberg Learn more](/blogs/big-data/run-apache-spark-and-apache-iceberg-write-jobs-2x-faster-with-amazon-emr/)
- [Features page Find out how Amazon EMR works Explore Amazon EMR Features](/emr/features/)
- [Pricing Explore Amazon EMR pricing Learn more about Amazon EMR pricing](/emr/pricing/)
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
- button: Features submenu
- button: EMR Workloads submenu
- button: Resources submenu
- button: Get started with Amazon EMR
- button: Request support for your evaluation
- button: Cost-effective big data processing
- button: Accelerate time-to-insight and optimize performance
- button: Unparalleled deployment flexibility

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-emr.json`
- Evidence ID: `ev_9da5ce3c7cbdb5d0e72c3fc3b6e199c33a9911033d65d0cbc1b2e59736a398e8`
- Accessibility outline: 12263 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
