# REA web-surface report — Amazon Inspector (`amazon-inspector`)

Browser capture of the public web surface of Amazon Inspector, recorded with REA.

| | |
|---|---|
| Product | Amazon Inspector (`amazon-inspector`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/inspector/ |
| Resolved URL | https://aws.amazon.com/inspector/ |
| Page title | Amazon Inspector |
| Captured | 2026-11-03T03:14:39.917Z |
| Status | captured |
| REA Evidence ID | `ev_bfdd1de52aba647dbed65a1c62d5cff46c256415182c2b831a886477a288efd1` |
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
    "url": "https://aws.amazon.com/inspector/"
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

- Amazon Inspector
- What is Amazon Inspector?
- Benefits of Amazon Inspector
- Detect software vulnerabilities
- Manage SBOM exports centrally
- Prioritize remediation from code to cloud
- Maximize vulnerability assessment coverage
- Scan AMIs before deployment
- Use cases
- Quickly discover zero-day vulnerabilities across code repositories and compute workloads
- Prioritize patch remediation
- Meet compliance requirements
- Shift security earlier in development cycle
- Enforce secure golden images across your organization
- Customers
- Uber drastically reduced MTTR using Amazon Inspector
- Volkswagen Financial Services uses Amazon Inspector to streamline vulnerability workflows
- Canva saved time and money by consolidating their Amazon EC2 and Amazon ECR vulnerability management into one service
- Dropbox HelloSign uses Amazon Inspector to help automate patch management
- Get started with Amazon Inspector
- See how Amazon Inspector makes vulnerability management easy and actionable in this short video.
- See how global companies are using Amazon Inspector to automate software vulnerability management.
- Did you find what you were looking for today?
- Learn
- Resources

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
- [Overview](/inspector/?nc=sn&loc=1)
- [Features](/inspector/features/?nc=sn&loc=2)
- [Pricing](/inspector/pricing/?nc=sn&loc=3)
- [FAQs](/inspector/faqs/?nc=sn&loc=6)
- [Security Hub](/security-hub/)
- [Customers](/inspector/customers/?nc=sn&loc=7)
- [Partners](/inspector/partners/?nc=sn&loc=8)
- [Products](/products/)
- [Security, Identity, & Compliance](/products/security/)
- [Missing alt text value Uber drastically reduced MTTR using Amazon Inspector Read the testimonial](https://aws.amazon.com/inspector/customers/#Uber)
- [Missing alt text value Volkswagen Financial Services uses Amazon Inspector to streamline vulnerability workflows Read the testimonial](https://aws.amazon.com/inspector/customers/#Volkswagen_Financial_Services)
- [The Canva logo displayed in a stylized, gradient script. Canva saved time and money by consolidating their Amazon EC2 and Amazon ECR vulnerability management into one service Read the testimonial](https://aws.amazon.com/inspector/customers/#Canva)
- [Missing alt text value Dropbox HelloSign uses Amazon Inspector to help automate patch management Read the testimonial](https://aws.amazon.com/inspector/customers/#HelloSign)
- [Video See how Amazon Inspector makes vulnerability management easy and actionable in this short video. Watch the video](https://youtu.be/wi1PDr9n67Y)
- [Customers See how global companies are using Amazon Inspector to automate software vulnerability management. Learn more](/inspector/customers/?nc=sn&loc=7&refid=9bc21f40-12f4-4d2b-8b8d-6f6f65ab19e6)
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
- button: Resources submenu
- button: Get started with Amazon Inspector
- button: Play:
- button: Detect software vulnerabilities
- button: Manage SBOM exports centrally
- button: Prioritize remediation from code to cloud
- button: Maximize vulnerability assessment coverage
- button: Scan AMIs before deployment

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-inspector.json`
- Evidence ID: `ev_bfdd1de52aba647dbed65a1c62d5cff46c256415182c2b831a886477a288efd1`
- Accessibility outline: 12894 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
