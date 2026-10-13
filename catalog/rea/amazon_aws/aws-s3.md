# REA web-surface report — Amazon S3 (`aws-s3`)

Browser capture of the public web surface of Amazon S3, recorded with REA.

| | |
|---|---|
| Product | Amazon S3 (`aws-s3`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/s3/ |
| Resolved URL | https://aws.amazon.com/s3/ |
| Page title | Amazon S3 |
| Captured | 2026-10-13T18:59:01.438Z |
| Status | captured |
| REA Evidence ID | `ev_f20b86665f60dcf51f6928ebd4f73d1dc8df65ef67859bc4729e5ebc0ee8997f` |
| REA provider | rea-playwright-browser-scenario v1 |
| Browser | Chromium 155.0.8059.40 |
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
    "url": "https://aws.amazon.com/s3/"
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

- Amazon S3
- What is Amazon S3?
- Benefits
- Scalability
- Durability and availability
- Security and data protection
- Lowest price and highest performance
- Data foundation for AI
- Amazon S3 today
- Use cases
- Build an open data architecture for analytics and AI
- Customers
- Adobe's journey to generative AI leadership using AWS
- Get started
- Amazon S3 FAQs
- Get started with Amazon S3
- Get started with Amazon S3 with AWS Free Tier
- Amazon S3 features
- Did you find what you were looking for today?
- Learn
- Resources
- Developers
- Help

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
- [Overview](/s3/?nc=sn&loc=1)
- [Pricing](/s3/pricing/?nc=sn&loc=4)
- [Security](/s3/security/?nc=sn&loc=5)
- [FAQs](/s3/faqs/?nc=sn&loc=7)
- [Products](/products/)
- [Storage](/products/storage/)
- [Explore data innovation stories](https://aws.amazon.com/data/customer-stories/?sc_icampaign=aware_data-heroes_2026&sc_ichannel=ha&sc_iplace=banner&trk=eca8c340-962c-4825-9c84-3f58edddae88)
- [Missing alt text value Adobe's journey to generative AI leadership using AWS Read the case study](/solutions/case-studies/adobe-case-study/?p=pdp&c=s3&s=4)
- [FAQs Amazon S3 FAQs Learn more](/s3/faqs/)
- [Getting started Get started with Amazon S3 Start building](/s3/getting-started/)
- [Free tier Get started with Amazon S3 with AWS Free Tier Sign up](/s3/pricing/?loc=ft#AWS_Free_Tier)
- [Features page Amazon S3 features Learn more](/s3/features/)
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
- button: Storage classes submenu
- button: Resources submenu
- button: Get started with S3
- button: Play:
- button: Scalability
- button: Durability and availability
- button: Security and data protection

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

- Raw REA Evidence: `catalog/rea/evidence/aws-s3.json`
- Evidence ID: `ev_f20b86665f60dcf51f6928ebd4f73d1dc8df65ef67859bc4729e5ebc0ee8997f`
- Accessibility outline: 13752 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
