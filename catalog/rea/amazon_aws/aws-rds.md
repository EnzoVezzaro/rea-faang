# REA web-surface report — Amazon RDS (`aws-rds`)

Browser capture of the public web surface of Amazon RDS, recorded with REA.

| | |
|---|---|
| Product | Amazon RDS (`aws-rds`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/rds/ |
| Resolved URL | https://aws.amazon.com/rds/ |
| Page title | Amazon RDS |
| Captured | 2026-10-13T18:58:52.857Z |
| Status | captured |
| REA Evidence ID | `ev_b184295d338925c0f7e87f0349f73277230ba2f7adccf25bcacf7a08bf4e4a08` |
| REA provider | rea-playwright-browser-scenario v1 |
| Browser | Chromium 155.0.8059.40 |
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
    "url": "https://aws.amazon.com/rds/"
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

- Amazon RDS
- What is RDS
- Benefits of RDS
- Easy to manage
- High availability
- Operational expertise
- Choice of engines
- BYOM now available on Amazon RDS for SQL Server
- Innovating with RDS
- Aurora
- Use cases
- Build web and mobile applications
- Move to managed databases
- Break free from legacy databases
- Customers
- Intuit Mint reduced database costs by 25% and obtained strong database performance with Amazon RDS for MySQL
- Cathay Pacific airways saw a 20% performance boost by migrating from on-premises Oracle to Amazon RDS
- Samsung migrated 1.1 billion users from Oracle to Aurora with AWS Database Migration Service
- Next steps
- Learn with hands-on training
- Dive deep on RDS
- Sign up for a free account
- Start building in the console
- Did you find what you were looking for today?
- Learn

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
- [Overview](/rds/)
- [Features](/rds/features/)
- [Pricing](/rds/pricing/)
- [Resources](/rds/resources/)
- [FAQs](/rds/faqs/)
- [Customers](/rds/customers/)
- [Migrate with AWS DMS](/dms/)
- [Products](/products/)
- [Databases](/products/databases/)
- [AWS Graviton5-based instances](/rds/instance-types/)
- [multiple pricing options](/rds/pricing/)
- [Easy to manage Remove inefficient and time-consuming database administrative tasks without needing to provision infrastructure or maintain software. Learn more](/rds/features/?pg=ln&sec=be)
- [High availability Achieve high availability with Amazon RDS Multi-AZ deployments. Learn more](/rds/features/multi-az/?pg=ln&sec=be)
- [Operational expertise Benefit from over a decade of proven operational expertise, security best practices, and innovation in databases born in the cloud. Learn more](/about-aws/whats-new/database/?pg=ln&sec=be&whats-new-content.sort-by=item.additionalFields.postDateTime&whats-new-content.sort-order=desc&awsf.whats-new-products=*all)
- [Choice of engines Deploy and scale the relational database engines of your choice in the cloud or on premises. Learn more](https://docs.aws.amazon.com/rds/?pg=ln&sec=be)
- [Amazon Aurora Serverless](/rds/aurora/serverless/)
- [Amazon Aurora I/O-Optimized](/rds/aurora/pricing/)
- [zero-ETL integrations](/rds/aurora/zero-etl/)
- [Explore Solutions](https://aws.amazon.com/smart-business/solutions/artificial-intelligence-small-medium-business/?sc_icampaign=aware_small-business-ai_2026&sc_ichannel=ha&sc_iplace=banner&trk=e5e30592-b3c2-4ad7-beb8-edf67517e50d)
- [See more customer stories](/rds/customers/)
- [Missing alt text value Intuit Mint reduced database costs by 25% and obtained strong database performance with Amazon RDS for MySQL Read the case study](https://aws.amazon.com/solutions/case-studies/intuit-mint)
- [Missing alt text value Cathay Pacific airways saw a 20% performance boost by migrating from on-premises Oracle to Amazon RDS Read the case study](https://aws.amazon.com/solutions/case-studies/cathay-pacific-rds-case-study)
- [Missing alt text value Samsung migrated 1.1 billion users from Oracle to Aurora with AWS Database Migration Service Read the case study](https://aws.amazon.com/solutions/case-studies/samsung-migrates-off-oracle-to-amazon-aurora)
- [Resources Learn with hands-on training Get started with RDS](/rds/resources/)
- [Documentation Dive deep on RDS Read the documentation](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome)
- [Free tier Sign up for a free account Try for free](https://signin.aws.amazon.com/signup?request_type=register)
- [Console Start building in the console Sign in](https://console.aws.amazon.com/rds)
- [What Is AWS?](/what-is-aws/?nc1=f_cc)
- [What Is Cloud Computing?](/what-is-cloud-computing/?nc1=f_cc)
- [What Is Agentic AI?](/what-is/agentic-ai/?nc1=f_cc)
- [Cloud Computing Concepts Hub](/what-is/?nc1=f_cc)
- [AWS Cloud Security](/security/?nc1=f_cc)
- [What's New](/new/?nc1=f_cc)
- [Blogs](/blogs/?nc1=f_cc)

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
- button: Engines submenu
- button: Get started with RDS
- button: Connect with an RDS specialist
- button: Play:
- button: Learn more about BYOM
- button: Build web and mobile applications
- button: Move to managed databases
- button: Break free from legacy databases

## Limitations (from REA)

- Artifact identity is unavailable for this observation.
- Event sequence records provider receipt order; simultaneous browser causality is not inferred.
- Network content is retained only when selected; response bytes are browser-decoded, not compressed wire bytes.
- Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage.
- Network content reads settle within 5 seconds each and never wait for unfinished responses or refetch them.
- Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality.
- Storage values are hashed only after declared-secret redaction.
- Browser host platform and architecture were not observed.

## Provenance

- Raw REA Evidence: `catalog/rea/evidence/aws-rds.json`
- Evidence ID: `ev_b184295d338925c0f7e87f0349f73277230ba2f7adccf25bcacf7a08bf4e4a08`
- Accessibility outline: 15825 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
