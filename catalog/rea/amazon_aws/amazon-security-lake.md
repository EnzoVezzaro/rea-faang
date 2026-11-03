# REA web-surface report — Amazon Security Lake (`amazon-security-lake`)

Browser capture of the public web surface of Amazon Security Lake, recorded with REA.

| | |
|---|---|
| Product | Amazon Security Lake (`amazon-security-lake`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/security-lake/ |
| Resolved URL | https://aws.amazon.com/security-lake/ |
| Page title | Amazon Security Lake |
| Captured | 2026-11-03T03:47:46.531Z |
| Status | captured |
| REA Evidence ID | `ev_5f3b4ad465f4abea0a3eeb671a817e60529d70eead36e666affdba9160b0ac45` |
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
    "url": "https://aws.amazon.com/security-lake/"
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

- Amazon Security Lake
- What is Amazon Security Lake?
- Benefits of Amazon Security Lake
- Use your preferred analytics tools
- Centralize data visibility
- Streamline your data management
- Optimize and manage your security data
- Why Security Lake?
- Use cases
- Analyze multiple years of security data quickly
- Simplify your compliance monitoring and reporting
- Facilitate your security investigations with elevated visibility
- Unify security data management across hybrid environments
- Customers
- Siemens boosts security visibility across 800+ AWS accounts using Amazon Security Lake »
- Torc Robotics centralizes security logging using Amazon Security Lake »
- Seek stands up a security data lake for threat hunting with Amazon Security Lake »
- Sony Music streamlining security operations using Amazon Security Lake »
- IPG achieves a more complete organization-wide understanding of their security posture across hybrid environments with Security Lake »
- Explore more of AWS
- Find out how Security Lake works
- Get started with the AWS Free Tier
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
- [Overview](/security-lake/)
- [Features](/security-lake/features/)
- [Pricing](/security-lake/pricing/)
- [Getting Started](/security-lake/getting-started/)
- [FAQs](/security-lake/faqs/)
- [Customers](/security-lake/customers/)
- [Resources](/security-lake/resources/)
- [AWS Cloud Security](/security/)
- [Security, Identity, and Compliance](/products/security/)
- [Open Cybersecurity Schema Framework](https://ocsf.io/)
- [Missing alt text value Siemens boosts security visibility across 800+ AWS accounts using Amazon Security Lake » Read the case study](https://aws.amazon.com/solutions/case-studies/siemens-security-case-study/)
- [Missing alt text value Torc Robotics centralizes security logging using Amazon Security Lake » Read the case study](https://aws.amazon.com/solutions/case-studies/torc-robotics-security-case-study/)
- [Missing alt text value Seek stands up a security data lake for threat hunting with Amazon Security Lake » Watch the video](https://www.youtube.com/watch?v=g5uIrAod910)
- [Missing alt text value Sony Music streamlining security operations using Amazon Security Lake » Watch the video](https://www.youtube.com/watch?v=EkpBiHQIXRs)
- [Missing alt text value IPG achieves a more complete organization-wide understanding of their security posture across hybrid environments with Security Lake » Watch the video](https://www.youtube.com/watch?v=qcXB6Y_7bNo)
- [Features page Find out how Security Lake works Explore Security Lake features](/security-lake/features/)
- [Free tier Get started with the AWS Free Tier Start your free trial](/security-lake/pricing/)
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
- button: Partners submenu
- button: Get started with Security Lake
- button: Use your preferred analytics tools
- button: Centralize data visibility
- button: Streamline your data management
- button: Optimize and manage your security data
- button: Play:
- button: Analyze multiple years of security data quickly

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-security-lake.json`
- Evidence ID: `ev_5f3b4ad465f4abea0a3eeb671a817e60529d70eead36e666affdba9160b0ac45`
- Accessibility outline: 13002 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
