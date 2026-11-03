# REA web-surface report — Amazon RDS (`aws-rds`)

Browser capture of the public web surface of Amazon RDS, recorded with REA.

| | |
|---|---|
| Product | Amazon RDS (`aws-rds`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/rds/ |
| Resolved URL | https://aws.amazon.com/rds/ |
| Page title | Amazon RDS |
| Captured | 2026-11-03T01:35:46.398Z |
| Status | captured |
| REA Evidence ID | `ev_bd53c9bea0b395dc8f7d85ef99ed1c2192b0ffb96bcda9ac3b9fdb77dfbcf5c2` |
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
- What is Amazon RDS?
- How much does Amazon RDS cost?
- What problems does Amazon RDS solve?
- Time-consuming administration
- Keep business critical workloads online
- Choosing between performance and cost
- Migrations that require re-architecting
- How does Amazon RDS work?
- 1. Choose your database engine
- 2. Load your data
- 3. RDS automates database management
- 4. Scale capacity with demand
- What are the top Amazon RDS use cases?
- Build web and mobile applications
- Move to managed databases
- Power agentic AI applications
- Case studies
- Intuit Mint reduced database costs by 25% and obtained strong database performance with Amazon RDS for MySQL
- Ready to run a relational database without managing infrastructure?
- Try the easy to manage relational databases optimized for total cost of ownership.
- Resources
- Amazon RDS user guide
- Amazon RDS features
- See the latest updates

### Landmarks

- navigation: Global navigation
- main
- navigation: Breadcrumb
- region: AWS Information
- region: carousel
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
- [Learn more about the AWS Free Tier](/free/?p=pdp&c=rds&s=3)
- [View detailed pricing](/rds/pricing/?p=pdp&c=rds&s=3)
- [Learn more about savings plans](/savingsplans/database-pricing/)
- [Missing alt text value Intuit Mint reduced database costs by 25% and obtained strong database performance with Amazon RDS for MySQL Read the case study](/solutions/case-studies/intuit-mint/)
- [Amazon RDS user guide Documentation for creating databases, configuring engines, and managing backups. Learn more](https://docs.aws.amazon.com/rds/)
- [Amazon RDS features Explore additional RDS features like automating patching and backups with managed administration. Learn more](/rds/features/)
- [See the latest updates Check out the latest blog posts on Amazon RDS to get started. Learn more](/blogs/database/category/database/amazon-rds/)
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
- button: Previous slide
- button: Next slide
- button: Get started with Amazon RDS
- button: Who is Amazon RDS best for?

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

- Raw REA Evidence: `catalog/rea/evidence/aws-rds.json`
- Evidence ID: `ev_bd53c9bea0b395dc8f7d85ef99ed1c2192b0ffb96bcda9ac3b9fdb77dfbcf5c2`
- Accessibility outline: 15494 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
