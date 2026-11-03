# REA web-surface report — Amazon FSx for Lustre (`amazon-fsx-lustre`)

Browser capture of the public web surface of Amazon FSx for Lustre, recorded with REA.

| | |
|---|---|
| Product | Amazon FSx for Lustre (`amazon-fsx-lustre`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/fsx/lustre/ |
| Resolved URL | https://aws.amazon.com/fsx/lustre/ |
| Page title | Amazon FSx for Lustre |
| Captured | 2026-11-03T03:07:12.377Z |
| Status | captured |
| REA Evidence ID | `ev_ae2934968c87849d75c107258a88f9e0077f7171873c526424f7c6115492d55d` |
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
    "url": "https://aws.amazon.com/fsx/lustre/"
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

- Amazon FSx for Lustre
- Why Amazon FSx for Lustre?
- Benefits of FSx for Lustre
- Unmatched performance
- Lowest-cost cloud HPC file storage
- Simplified storage management
- Native integration with AWS services and solutions
- Use cases
- AI/ML
- HPC
- Financial services
- Healthcare and life sciences
- Weather forecasting
- Customers
- Adobe's Journey to Generative AI Leadership Using AWS
- Maxar delivered weather system analysis 58% faster
- Toyota Research Institute reduced object recognition ML training times
- Netflix VFX team completed 600 shots for The Crown in eight months
- Get started with FSx for Lustre
- Learn about FSx Intelligent-Tiering
- Build a PoC for Amazon FSx for Lustre
- Connect with an expert
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
- [Overview](/fsx/lustre/?nc=sn&loc=1)
- [Features](/fsx/lustre/features/)
- [Pricing](/fsx/lustre/pricing/?nc=sn&loc=3)
- [Getting Started](/fsx/lustre/getting-started/?nc=sn&loc=4)
- [FAQs](/fsx/lustre/faqs/?nc=sn&loc=5)
- [Customers](/fsx/lustre/customers/?nc=sn&loc=6)
- [Resources](/fsx/lustre/resources/?nc=sn&loc=7)
- [Products](/products/)
- [Storage](/products/storage/)
- [Missing alt text value Adobe's Journey to Generative AI Leadership Using AWS Read the case study](https://aws.amazon.com/solutions/case-studies/adobe-case-study/)
- [Missing alt text value Maxar delivered weather system analysis 58% faster Read the case study](https://aws.amazon.com/solutions/case-studies/maxar-case-study/)
- [Missing alt text value Toyota Research Institute reduced object recognition ML training times Read the blog](https://aws.amazon.com/fsx/lustre/customers/)
- [Missing alt text value Netflix VFX team completed 600 shots for The Crown in eight months Read the blog](https://aws.amazon.com/blogs/media/the-crown-in-the-cloud/)
- [Learn about FSx Intelligent-Tiering Learn more](/fsx/intelligent-tiering/)
- [Build a PoC for Amazon FSx for Lustre Learn more](https://docs.aws.amazon.com/solutions/building-a-poc-for-amazon-fsx-for-lustre/)
- [Connect with an expert Explore support options](/contact-us/sales-support/)
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
- button: File Systems submenu
- button: Get started with FSx for Lustre
- button: Unmatched performance
- button: Lowest-cost cloud HPC file storage
- button: Simplified storage management
- button: Native integration with AWS services and solutions
- button: AI/ML
- button: HPC

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-fsx-lustre.json`
- Evidence ID: `ev_ae2934968c87849d75c107258a88f9e0077f7171873c526424f7c6115492d55d`
- Accessibility outline: 11623 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
