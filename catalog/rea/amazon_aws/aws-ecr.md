# REA web-surface report — Elastic Container Registry (ECR) (`aws-ecr`)

Browser capture of the public web surface of Elastic Container Registry (ECR), recorded with REA.

| | |
|---|---|
| Product | Elastic Container Registry (ECR) (`aws-ecr`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/ecr/ |
| Resolved URL | https://aws.amazon.com/ecr/ |
| Page title | Amazon Elastic Container Registry |
| Captured | 2026-10-14T03:55:55.469Z |
| Status | captured |
| REA Evidence ID | `ev_efc5aad501a9c258b17cebad409dc7c83b3a2c19fee3b45dfb3d22ba19af74d6` |
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
    "url": "https://aws.amazon.com/ecr/"
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

- Amazon Elastic Container Registry
- Benefits
- Easy to implement
- Highly secure sharing and downloading
- Fast and reliable
- Simple image signing
- How it works
- Use cases
- Manage software vulnerabilities
- Streamline your deployment workloads
- Manage image lifecycle policies
- Customers
- Pinterest improves social network security
- Blackboard powers learning across the globe
- Snowflake boosts reliability and performance
- Next steps
- Explore benefits of AWS containers
- Get started with Amazon ECR
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
- [Overview](/ecr/)
- [Features](/ecr/features/)
- [Pricing](/ecr/pricing/)
- [Getting Started](/ecr/getting-started/)
- [Resources](/ecr/resources/)
- [FAQs](/ecr/faqs/)
- [Customers](/ecr/customers/)
- [Products](/products/)
- [Containers](/containers/)
- [The Pinterest logo, featuring a red circle with a white stylized 'P' and the word 'Pinterest' in red text. Pinterest improves social network security Learn more](https://aws.amazon.com/ecr/customers/?pg=ln&sec=c)
- [Missing alt text value Blackboard powers learning across the globe Learn more](https://aws.amazon.com/ecr/customers/?pg=ln&sec=c#Blackboard)
- [Missing alt text value Snowflake boosts reliability and performance Learn more](https://aws.amazon.com/ecr/customers/?pg=ln&sec=c#Snowflake)
- [Explore benefits of AWS containers Learn more](/containers/?refid=ps_a131l0000085ejuqam&trkcampaign=acq_paid_search_brand/?pg=ln&sec=hs)
- [Get started with Amazon ECR Check out the Developer Guide](https://docs.aws.amazon.com/AmazonECR/latest/userguide/what-is-ecr.html?pg=ln&sec=hs)
- [Connect with an expert Explore support options](/contact-us/sales-support/?pg=ln&sec=hs)
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
- button: Get started with Amazon ECR
- button: Easy to implement
- button: Highly secure sharing and downloading
- button: Fast and reliable
- button: Simple image signing
- button: Manage software vulnerabilities
- button: Streamline your deployment workloads
- button: Manage image lifecycle policies

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

- Raw REA Evidence: `catalog/rea/evidence/aws-ecr.json`
- Evidence ID: `ev_efc5aad501a9c258b17cebad409dc7c83b3a2c19fee3b45dfb3d22ba19af74d6`
- Accessibility outline: 10620 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
