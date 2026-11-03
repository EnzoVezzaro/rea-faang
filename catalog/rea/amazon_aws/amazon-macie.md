# REA web-surface report — Amazon Macie (`amazon-macie`)

Browser capture of the public web surface of Amazon Macie, recorded with REA.

| | |
|---|---|
| Product | Amazon Macie (`amazon-macie`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/macie/ |
| Resolved URL | https://aws.amazon.com/macie/ |
| Page title | Amazon Macie |
| Captured | 2026-11-03T03:24:24.859Z |
| Status | captured |
| REA Evidence ID | `ev_9f6ba101714a0e4988048e86b0f2202bdd211824dc3aa531ca902bad9c037c47` |
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
    "url": "https://aws.amazon.com/macie/"
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

- Amazon Macie
- Why Macie?
- Benefits
- Automate sensitive data at scale
- Gain cost-effective discovery of sensitive data in S3
- Monitoring data security and privacy
- Reduce triage time
- Use cases
- Strengthen your data security posture
- Discover sensitive data for compliance
- Protect sensitive data during migration
- Increase visibility for business-critical data
- Customers
- Edmunds increased data visibility and security
- Kasasa automated sensitive information detection
- Expedia used Macie for data protection at petabyte scale
- Oportun increases the accuracy of sensitive-data discovery by 95% using Amazon
- How to get started
- Learn how to discover and protect your sensitive data
- Using machine learning and pattern matching, Macie provides visibility into data security risks and enables automated protection
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
- [Overview](/macie/)
- [Features](/macie/features/)
- [Pricing](/macie/pricing/)
- [Getting Started](/macie/getting-started/)
- [FAQ](/macie/faq/)
- [Security Hub](/security-hub/)
- [Resources](/macie/resources/)
- [Products](/products/)
- [Security, Identity and Compliance](/products/security/)
- [Missing alt text value Edmunds increased data visibility and security Learn more](https://aws.amazon.com/solutions/case-studies/edmunds-macie/)
- [Missing alt text value Kasasa automated sensitive information detection Learn more](https://aws.amazon.com/solutions/case-studies/kasasa-case-study/)
- [Missing alt text value Expedia used Macie for data protection at petabyte scale Learn more](https://www.youtube.com/watch?v=SmMSt0n6a4k)
- [Missing alt text value Oportun increases the accuracy of sensitive-data discovery by 95% using Amazon Learn more](https://aws.amazon.com/solutions/case-studies/oportun-case-study/)
- [Video Learn how to discover and protect your sensitive data Find out how Macie works](https://www.youtube.com/watch?v=8piwEQJJXdo)
- [Features page Using machine learning and pattern matching, Macie provides visibility into data security risks and enables automated protection Explore Macie features](/macie/features/)
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
- button: Get started with Macie
- button: Sign up for AWS Free Tier
- button: Play:
- button: Automate sensitive data at scale
- button: Gain cost-effective discovery of sensitive data in S3
- button: Monitoring data security and privacy
- button: Reduce triage time
- button: Strengthen your data security posture

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-macie.json`
- Evidence ID: `ev_9f6ba101714a0e4988048e86b0f2202bdd211824dc3aa531ca902bad9c037c47`
- Accessibility outline: 11143 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
