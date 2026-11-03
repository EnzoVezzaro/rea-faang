# REA web-surface report — AWS Audit Manager (`aws-audit-manager`)

Browser capture of the public web surface of AWS Audit Manager, recorded with REA.

| | |
|---|---|
| Product | AWS Audit Manager (`aws-audit-manager`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/audit-manager/ |
| Resolved URL | https://aws.amazon.com/audit-manager/ |
| Page title | AWS Audit Manager |
| Captured | 2026-11-03T04:11:35.574Z |
| Status | captured |
| REA Evidence ID | `ev_038cfd8483976b837e84caed47b5ba12b0041eeda037e2444761fa094735754a` |
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
    "url": "https://aws.amazon.com/audit-manager/"
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

- AWS Audit Manager
- End of Support Notice
- Why Audit Manager?
- Benefits of Audit Manager
- Map your usage
- Save time and ensure controls work properly
- Verify the integrity of your audits
- Use cases
- Transition from manual to automated evidence collection
- Continually audit to assess compliance
- Deploy internal risk assessments
- Get started
- Explore Audit Manager pricing
- Learn more about Audit Manager features
- Contact an expert
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
- [Overview](/audit-manager/)
- [Features](/audit-manager/features/)
- [Pricing](/audit-manager/pricing/)
- [Getting started](/audit-manager/getting-started/)
- [FAQs](/audit-manager/faqs/)
- [Products](/products/)
- [Security, Identity and Compliance](/products/security/)
- [here](https://docs.aws.amazon.com/audit-manager/latest/userguide/audit-manager-availability-change.html)
- [Pricing Explore Audit Manager pricing Learn more](/audit-manager/pricing/)
- [Features page Learn more about Audit Manager features Learn more](/audit-manager/features/)
- [Contact us Contact an expert Contact us](/contact-us/)
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
- button: Get started with Audit Manager
- button: Play:
- button: Map your usage
- button: Save time and ensure controls work properly
- button: Verify the integrity of your audits
- button: Transition from manual to automated evidence collection
- button: Continually audit to assess compliance
- button: Deploy internal risk assessments

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

- Raw REA Evidence: `catalog/rea/evidence/aws-audit-manager.json`
- Evidence ID: `ev_038cfd8483976b837e84caed47b5ba12b0041eeda037e2444761fa094735754a`
- Accessibility outline: 9821 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
