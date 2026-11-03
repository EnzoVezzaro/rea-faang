# REA web-surface report — AWS Backup (`aws-backup`)

Browser capture of the public web surface of AWS Backup, recorded with REA.

| | |
|---|---|
| Product | AWS Backup (`aws-backup`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/backup/ |
| Resolved URL | https://aws.amazon.com/backup/ |
| Page title | AWS Backup |
| Captured | 2026-11-03T04:13:34.157Z |
| Status | captured |
| REA Evidence ID | `ev_1c60c535138cc02525b4781d5bcb13b2f37bfc7363d0df015bd223f67202f6b7` |
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
    "url": "https://aws.amazon.com/backup/"
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

- AWS Backup
- What is AWS Backup?
- Benefits of AWS Backup
- Simplify data protection of application resources on AWS and hybrid services
- Build a foundation for disaster recovery and business continuity
- Protect and recover from ransomware and account compromise
- Govern data protection compliance
- Use cases
- Cloud-native backup
- Hybrid data protection
- Centralized data protection policies
- Data protection compliance
- Customers
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
- [Overview](/backup/)
- [Pricing](/backup/pricing/)
- [Getting Started](/backup/getting-started/)
- [Resources](/backup/resources/)
- [FAQs](/backup/faqs/)
- [Customers](/backup/customers/)
- [Products](/products/)
- [Storage](/products/storage/)
- [Read the documentation](https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html)
- [Read the blog posts](/blogs/storage/category/storage/aws-backup/)
- [See how to get started](/backup/getting-started/?nc=sn&loc=4)
- [Learn about AWS Backup Audit Manager](https://docs.aws.amazon.com/aws-backup/latest/devguide/aws-backup-audit-manager.html)
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
- button: Features submenu
- button: Get started with AWS Backup
- button: Contact us
- button: Play:
- button: Simplify data protection of application resources on AWS and hybrid services
- button: Build a foundation for disaster recovery and business continuity
- button: Protect and recover from ransomware and account compromise
- button: Govern data protection compliance

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

- Raw REA Evidence: `catalog/rea/evidence/aws-backup.json`
- Evidence ID: `ev_1c60c535138cc02525b4781d5bcb13b2f37bfc7363d0df015bd223f67202f6b7`
- Accessibility outline: 12300 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
