# REA web-surface report — Amazon Elastic Block Store (`amazon-elastic-block-store`)

Browser capture of the public web surface of Amazon Elastic Block Store, recorded with REA.

| | |
|---|---|
| Product | Amazon Elastic Block Store (`amazon-elastic-block-store`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/ebs/ |
| Resolved URL | https://aws.amazon.com/ebs/ |
| Page title | Amazon Elastic Block Store |
| Captured | 2026-11-04T02:42:25.296Z |
| Status | captured |
| REA Evidence ID | `ev_fed4c77ea93dd88605d559deb27078e4a7a4d28db45ed892ae2fa5730f85e705` |
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
    "url": "https://aws.amazon.com/ebs/"
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

- Amazon Elastic Block Store
- What is Amazon EBS?
- Benefits of Amazon EBS
- Scale fast
- High performance
- Optimize storage and cost
- Secure
- Simple data protection
- Use cases
- Build your mission-critical, I/O intensive applications in the cloud
- Run relational or NoSQL databases
- Right-size your big data analytics engines
- Customers
- Learn how McAfee increased performance by 30% for 400 million daily transactions
- Learn how Cvent migrated its critical SQL Server workload to Amazon EBS io2 Block Express
- Learn how Johnson & Johnson improved compliance and cost efficiency using Amazon EBS Snapshots
- Learn how Devo used Amazon EBS to improve profit margins, performance, and competitive flexibility
- Learn how Salesforce is modernizing its Marketing Cloud solution to save money and deploy faster on AWS
- Next steps
- Explore hands-on training
- Try the Amazon EBS Free Tier
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
- [Overview](/ebs/)
- [Pricing](/ebs/pricing/)
- [FAQs](/ebs/faqs/)
- [Customers](/ebs/customers/)
- [Products](/products/)
- [Storage](/products/storage/)
- [The McAfee logo, featuring a red shield icon and the company name 'McAfee' in red text. Learn how McAfee increased performance by 30% for 400 million daily transactions Read the case study](https://aws.amazon.com/solutions/case-studies/mcafee-ebs-io2bx-case-study/)
- [Missing alt text value Learn how Cvent migrated its critical SQL Server workload to Amazon EBS io2 Block Express Read the case study](https://aws.amazon.com/solutions/case-studies/cvent-ebs-case-study/)
- [Missing alt text value Learn how Johnson & Johnson improved compliance and cost efficiency using Amazon EBS Snapshots Read the case study](https://aws.amazon.com/solutions/case-studies/johnson-and-johnson-ebs-case-study/)
- [Missing alt text value Learn how Devo used Amazon EBS to improve profit margins, performance, and competitive flexibility Read the case study](https://aws.amazon.com/solutions/case-studies/devo-case-study/)
- [Missing alt text value Learn how Salesforce is modernizing its Marketing Cloud solution to save money and deploy faster on AWS Read the case study](https://aws.amazon.com/solutions/case-studies/salesforce-marketing-cloud-case-study/)
- [Tutorial Explore hands-on training Get started with a tutorial](https://docs.aws.amazon.com/hands-on/latest/amazon-ebs-backup-and-restore-using-aws-backup/amazon-ebs-backup-and-restore-using-aws-backup.html?pg=ln&sec=hs)
- [Free tier Try the Amazon EBS Free Tier Try the AWS Free Tier](/free/?pg=ln&sec=hs)
- [Contact us Connect with an expert Explore support options](/contact-us/sales-support/?pg=ln&sec=hs)
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
- button: Features submenu
- button: Volume Types submenu
- button: Resources submenu
- button: Complete sign up
- button: Play:
- button: Scale fast
- button: High performance
- button: Optimize storage and cost

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-elastic-block-store.json`
- Evidence ID: `ev_fed4c77ea93dd88605d559deb27078e4a7a4d28db45ed892ae2fa5730f85e705`
- Accessibility outline: 12221 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
