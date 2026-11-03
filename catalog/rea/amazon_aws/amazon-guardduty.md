# REA web-surface report — Amazon GuardDuty (`amazon-guardduty`)

Browser capture of the public web surface of Amazon GuardDuty, recorded with REA.

| | |
|---|---|
| Product | Amazon GuardDuty (`amazon-guardduty`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/guardduty/ |
| Resolved URL | https://aws.amazon.com/guardduty/ |
| Page title | Amazon GuardDuty |
| Captured | 2026-11-03T03:12:55.210Z |
| Status | captured |
| REA Evidence ID | `ev_1b020fd858bab4fd2ef3eb6e523ffb0c96c2e00225b53d810677736c1fbe2604` |
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
    "url": "https://aws.amazon.com/guardduty/"
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

- Amazon GuardDuty
- Benefits of Amazon GuardDuty
- Continuous monitoring
- AI/ML-powered threat detection
- Respond faster to threats
- Scalable, fully managed threat detection
- End-to-end visibility into AWS compute workloads
- What is GuardDuty?
- How it works
- GuardDuty for AWS workload protection
- Compute Protection
- GuardDuty Malware Protection for Amazon EC2
- GuardDuty EKS Protection
- GuardDuty Runtime Monitoring
- GuardDuty Lambda Protection
- Storage Protection
- GuardDuty S3 Protection
- GuardDuty Malware Protection for Amazon S3
- GuardDuty Malware Protection for AWS Backup
- Database Protection
- GuardDuty RDS Protection
- AI Protection
- GuardDuty AI Protection
- Use cases
- Detect suspicious multi-stage security threats in your generative AI workloads

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
- [Overview](/guardduty/)
- [Features](/guardduty/features/)
- [Pricing](/guardduty/pricing/)
- [Getting started](/guardduty/getting-started/)
- [Security Hub](/security-hub/)
- [Partners](/guardduty/resources/partners/)
- [Customers](/guardduty/customers/)
- [Products](/products/)
- [Security, Identity & Compliance](/products/security/)
- [Compute Protection 4](/guardduty/#compute-protection--1e0ixp6)
- [Storage Protection 3](/guardduty/#storage-protection--1e0ixp6)
- [Database Protection 1](/guardduty/#database-protection--1e0ixp6)
- [AI Protection 1](/guardduty/#ai-protection--1e0ixp6)
- [SAP Logo SAP enforces zero-trust security across 10,000 AWS accounts with GuardDuty Read the case study](https://aws.amazon.com/solutions/case-studies/sap-case-study/)
- [The Warner Bros. Discovery logo featuring the classic WB shield above the company name in blue text. Warner Bros Discovery quickly scales container threat detection with Amazon GuardDuty Watch the video](https://youtu.be/VEUxtZR9wqU?trk=157c2924-0799-44a0-874c-6f933d97154c&sc_channel=el)
- [Missing alt text value Siemens strengthens security and enhances productivity using AWS Read the case study](https://aws.amazon.com/solutions/case-studies/siemens-security/)
- [Missing alt text value AppsFlyer automates suspicious activity detection on AWS Read the case study](https://aws.amazon.com/solutions/case-studies/appsflyer-security/?pg=ln&sec=c)
- [Features page Learn more about GuardDuty features and capabilities Explore GuardDuty features](/guardduty/features/)
- [Customers See how global companies are using GuardDuty to protect their AWS accounts with intelligent threat detection. Learn more](/guardduty/customers/)
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
- button: Create an AWS Account
- button: Continuous monitoring
- button: AI/ML-powered threat detection
- button: Respond faster to threats
- button: Scalable, fully managed threat detection
- button: End-to-end visibility into AWS compute workloads
- button: Play:

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-guardduty.json`
- Evidence ID: `ev_1b020fd858bab4fd2ef3eb6e523ffb0c96c2e00225b53d810677736c1fbe2604`
- Accessibility outline: 14443 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
