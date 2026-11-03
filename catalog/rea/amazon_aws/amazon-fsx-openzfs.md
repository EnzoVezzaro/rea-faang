# REA web-surface report — Amazon FSx for OpenZFS (`amazon-fsx-openzfs`)

Browser capture of the public web surface of Amazon FSx for OpenZFS, recorded with REA.

| | |
|---|---|
| Product | Amazon FSx for OpenZFS (`amazon-fsx-openzfs`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/fsx/openzfs/ |
| Resolved URL | https://aws.amazon.com/fsx/openzfs/ |
| Page title | Amazon FSx for OpenZFS |
| Captured | 2026-11-03T03:10:22.959Z |
| Status | captured |
| REA Evidence ID | `ev_3ea495f31312a70bb26a0af3b1ca3732bcd4869d8505f01a932d731ff8625985` |
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
    "url": "https://aws.amazon.com/fsx/openzfs/"
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

- Amazon FSx for OpenZFS
- Benefits of FSx for OpenZFS
- Simplify building and testing applications
- Accelerate workloads
- Intelligent-Tiering
- Optimize costs
- Effortlessly access file data as if it were in an Amazon S3 bucket
- Use cases
- Easily migrate your workloads to AWS
- Deliver insights faster for data analytics workloads
- Accelerate content management
- Increase dev/test velocity
- Amazon FSx for OpenZFS now supports Amazon S3 Access
- Customers
- Rev accelerated ML training for speech recognition and saved on storage costs
- Hatch delivered simple cross-platform storage for their global 4K game streaming platform
- Vela Games reduces build times for Game Developers by 60% with FSx for OpenZFS
- Get started with FSx for OpenZFS
- Get started with a tutorial
- Ready to build?
- Deploy a PoC for Amazon FSx for OpenZFS
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
- [Overview](/fsx/openzfs/?nc=sn&loc=1)
- [Features](/fsx/openzfs/features/?nc=sn&loc=2)
- [Pricing](/fsx/openzfs/pricing/?nc=sn&loc=4)
- [Getting Started](/fsx/openzfs/getting-started/?nc=sn&loc=5)
- [FAQs](/fsx/openzfs/faqs/?nc=sn&loc=7)
- [Storage](/products/storage/)
- [Amazon FSx](/fsx/)
- [Missing alt text value Rev accelerated ML training for speech recognition and saved on storage costs Learn more](https://aws.amazon.com/fsx/openzfs/customers/#rev)
- [Missing alt text value Hatch delivered simple cross-platform storage for their global 4K game streaming platform Learn more](https://aws.amazon.com/fsx/openzfs/customers/#hatch)
- [Missing alt text value Vela Games reduces build times for Game Developers by 60% with FSx for OpenZFS Learn more](https://aws.amazon.com/fsx/openzfs/customers/#vela)
- [Video Get started with a tutorial Learn how to get started in minutes](https://www.youtube.com/watch?v=LmnJ5R0VLQc)
- [Console Ready to build? No upfront costs or licensing fees](https://console.aws.amazon.com/fsx)
- [PoC Guide Deploy a PoC for Amazon FSx for OpenZFS PoC Guide](https://docs.aws.amazon.com/solutions/deploy-a-poc-for-amazon-fsx-for-openzfs/)
- [Contact us Connect with an expert From development to enterprise-level apps, get the right support at the right time](/contact-us/sales-support/)
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
- button: Resources submenu
- button: Get started with FSx for OpenZFS
- button: Simplify building and testing applications
- button: Accelerate workloads
- button: Intelligent-Tiering
- button: Optimize costs
- button: Effortlessly access file data as if it were in an Amazon S3 bucket

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-fsx-openzfs.json`
- Evidence ID: `ev_3ea495f31312a70bb26a0af3b1ca3732bcd4869d8505f01a932d731ff8625985`
- Accessibility outline: 12117 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
