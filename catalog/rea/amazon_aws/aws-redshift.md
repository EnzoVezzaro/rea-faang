# REA web-surface report — Redshift (`aws-redshift`)

Browser capture of the public web surface of Redshift, recorded with REA.

| | |
|---|---|
| Product | Redshift (`aws-redshift`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/redshift/ |
| Resolved URL | https://aws.amazon.com/redshift/ |
| Page title | Amazon Redshift |
| Captured | 2026-10-14T03:55:43.654Z |
| Status | captured |
| REA Evidence ID | `ev_aefb1e80c6e266f4df946394f4e8db7fcfc6b0c5914600839018ecc568ec4605` |
| REA provider | rea-playwright-browser-scenario v1 |
| Browser | Chromium 155.0.8059.79 |
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
    "url": "https://aws.amazon.com/redshift/"
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

- Amazon Redshift
- Why Amazon Redshift?
- Powering the next generation of Amazon SageMaker
- Unified, open, and secure data lakehouse
- SQL analytics in Amazon SageMaker
- Benefits
- Achieve exceptional price-performance, scalability, and security
- Unlock insights with SQL across unified data in the lakehouse
- Accelerate decision making with near real time analytics
- Get easy SQL analytics without managing infrastructure
- Contextualize applications and boost user productivity with generative AI
- Feature spotlight
- Powered by AWS Graviton, up to 2.4x as fast as RA3 and 30% lower price
- Use cases
- Improve financial and demand forecasts
- Optimize your business intelligence
- Accelerate ML in SQL
- Monetize your data
- Easily combine your data with third-party data sets
- Customers
- A decade of innovation with Amazon Redshift
- Peloton embraces Amazon Redshift to use data to help millions of customers reach their fitness goals
- McDonalds uses Amazon Redshift across the enterprise, driving digitization and personalized customer experiences
- Mobile gaming company Playrix improves query response time to drive gaming analytics and marketing strategies
- Moderna streamlines real-world data extraction and analysis by 70% using Amazon Redshift and AWS Data Exchange

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
- [Overview](/redshift/)
- [Solutions](/redshift/solutions/)
- [Products](/products/)
- [Analytics](/products/analytics/)
- [Unified, open, and secure data lakehouse Unify access across Amazon Redshift data warehouses, Amazon S3 data lakes, and third-party and federated data sources with the lakehouse in Amazon SageMaker Learn more](/sagemaker/lakehouse/)
- [SQL analytics in Amazon SageMaker Gain insights on unified data using Amazon Redshift, the most price-performant SQL engine Learn more](/sagemaker/)
- [Learn how to get started](https://aws.amazon.com/campaigns/data-migration-awareness/?sc_icampaign=launch_migrate-databases_2026&sc_ichannel=ha&sc_iplace=banner&trk=e083ccd8-3475-4bc4-b291-8f2f43c451ed)
- [A decade of innovation with Amazon Redshift Watch the video](https://www.youtube.com/watch?v=k6H4axO_LJY)
- [Missing alt text value Peloton embraces Amazon Redshift to use data to help millions of customers reach their fitness goals Read the case study](/blogs/big-data/peloton-embraces-amazon-redshift-to-unlock-the-power-of-data-during-changing-times/)
- [Missing alt text value McDonalds uses Amazon Redshift across the enterprise, driving digitization and personalized customer experiences Watch video](https://www.youtube.com/watch?v=eby75koNf0c)
- [Missing alt text value Mobile gaming company Playrix improves query response time to drive gaming analytics and marketing strategies Read the case study](/solutions/case-studies/playrix-case-study/)
- [Missing alt text value Moderna streamlines real-world data extraction and analysis by 70% using Amazon Redshift and AWS Data Exchange Read the case study](/solutions/case-studies/moderna-case-study/?did=cr_card&trk=cr_card)
- [Try a free sandbox environment and hands-on workshop Try it now](https://builder.aws.com/build/workshops?tab=discover&q=Redshift%20Hands-On%20Workshop)
- [Find out how Amazon Redshift works Learn more about Amazon Redshift features](/redshift/features/)
- [Explore Amazon Redshift pricing Learn more about pricing](/redshift/pricing/)
- [Connect with an expert Explore support options](/contact-us/sales-support-redshift/?pg=ln&sec=gs)
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
- button: Features submenu
- button: Pricing submenu
- button: Resources submenu
- button: Get started with Redshift
- button: Connect with a Redshift specialist
- button: Play:
- button: Achieve exceptional price-performance, scalability, and security
- button: Unlock insights with SQL across unified data in the lakehouse

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

- Raw REA Evidence: `catalog/rea/evidence/aws-redshift.json`
- Evidence ID: `ev_aefb1e80c6e266f4df946394f4e8db7fcfc6b0c5914600839018ecc568ec4605`
- Accessibility outline: 16735 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
