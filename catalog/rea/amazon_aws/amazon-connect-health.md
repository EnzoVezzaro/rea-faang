# REA web-surface report — Amazon Connect Health (`amazon-connect-health`)

Browser capture of the public web surface of Amazon Connect Health, recorded with REA.

| | |
|---|---|
| Product | Amazon Connect Health (`amazon-connect-health`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/products/connect/health/ |
| Resolved URL | https://aws.amazon.com/products/connect/health/ |
| Page title | Agentic AI for healthcare, built for the people who deliver it |
| Captured | 2026-11-04T02:40:58.353Z |
| Status | captured |
| REA Evidence ID | `ev_2fb0ef2fe05fe58333fee96e5457af1596e053a3996cb1c1af377821eeed236a` |
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
    "url": "https://aws.amazon.com/products/connect/health/"
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

- Agentic AI for healthcare, built for the people who deliver it
- What is Amazon Connect Health?
- Why you’ll love Amazon Connect Health
- Human-AI collaboration designed for healthcare
- Proven business value across the care continuum
- Enterprise reliability and security from day one
- Patient engagement
- Point of care
- Customers
- Netsmart
- Ready to start?
- Get started for free today
- Learn about Amazon Connect Health
- Check out Connect Health pricing
- Did you find what you were looking for today?
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
- [Overview](/products/connect/health/)
- [Pricing](/products/connect/health/pricing/)
- [Partners](/products/connect/health/partners/)
- [FAQs](/products/connect/health/faqs/)
- [Products](/products/)
- [Connect](/products/connect/)
- [Amazon Connect Customer](/products/connect/customer/)
- [Get started for free today Learn more](https://console.aws.amazon.com/connect-health/)
- [Learn about Amazon Connect Health Learn more](/blogs/industries/introducing-amazon-connect-health-agentic-ai-for-healthcare-built-for-the-people-who-deliver-it/)
- [Check out Connect Health pricing Learn more](/products/connect/health/pricing/)
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
- button: Get started
- button: Request a demo
- button: Play:
- button: Human-AI collaboration designed for healthcare
- button: Proven business value across the care continuum
- button: Enterprise reliability and security from day one
- button: Yes, give us positive feedback
- button: No, give us constructive feedback

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-connect-health.json`
- Evidence ID: `ev_2fb0ef2fe05fe58333fee96e5457af1596e053a3996cb1c1af377821eeed236a`
- Accessibility outline: 13729 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
