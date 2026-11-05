# REA web-surface report — Amazon EC2 (`amazon-ec2`)

Browser capture of the public web surface of Amazon EC2, recorded with REA.

| | |
|---|---|
| Product | Amazon EC2 (`amazon-ec2`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/ec2/ |
| Resolved URL | https://aws.amazon.com/ec2/ |
| Page title | Amazon EC2 |
| Captured | 2026-11-04T02:41:41.694Z |
| Status | captured |
| REA Evidence ID | `ev_e5cdbc55bb748bf7aa1fc27bbff2fa01c2bc0f7c4f45805302b77b8bc1507807` |
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
    "url": "https://aws.amazon.com/ec2/"
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

- Amazon EC2
- What is Amazon EC2?
- Pricing
- Benefits of Amazon EC2
- SLA commitment
- AWS Nitro System
- Optimize performance and cost
- AWS Migration Tools
- Use cases
- Run cloud-native and enterprise applications
- Scale for HPC applications
- Develop for Apple platforms
- Train and deploy ML applications
- Customers
- How Toyota got a 66% reduction in financial book-closing times on Intel Xeon 6-powered instances on AWS
- Frequently asked questions
- Who is Amazon EC2 best for?
- What are the benefits of Amazon EC2?
- What processors does Amazon EC2 support?
- Is Amazon EC2 a good choice for machine learning?
- How secure is Amazon EC2?
- Did you find what you were looking for today?
- Learn
- Resources
- Developers

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
- [Overview](/ec2/)
- [Features](/ec2/features/)
- [Pricing](/ec2/pricing/)
- [FAQs](/ec2/faqs/)
- [Getting started](/ec2/getting-started/)
- [Products](/products/)
- [Compute](/products/compute/)
- [Learn more about the AWS Free Tier](/free/?p=pdp&c=ec2&s=3)
- [View detailed pricing](/ec2/pricing/?p=pdp&c=ec2&s=3)
- [Missing alt text value How Toyota got a 66% reduction in financial book-closing times on Intel Xeon 6-powered instances on AWS Learn more](/solutions/case-studies/toyota-intel-case-study/)
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
- [JavaScript on AWS](https://builder.aws.com/content/2zYRIN2NxZTNLhwP9ZyaiJBEWrI/aws-tools-and-resources-javascript?nc1=f_dr)

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
- button: Instance types submenu
- button: Resources submenu
- button: Get started with Amazon EC2
- button: View user guide
- button: Play:
- button: SLA commitment
- button: AWS Nitro System
- button: Optimize performance and cost

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-ec2.json`
- Evidence ID: `ev_e5cdbc55bb748bf7aa1fc27bbff2fa01c2bc0f7c4f45805302b77b8bc1507807`
- Accessibility outline: 11257 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
