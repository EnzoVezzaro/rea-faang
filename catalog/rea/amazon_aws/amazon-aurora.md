# REA web-surface report — Amazon Aurora (`amazon-aurora`)

Browser capture of the public web surface of Amazon Aurora, recorded with REA.

| | |
|---|---|
| Product | Amazon Aurora (`amazon-aurora`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/rds/aurora/ |
| Resolved URL | https://aws.amazon.com/rds/aurora/ |
| Page title | Amazon Aurora |
| Captured | 2026-11-04T02:39:36.586Z |
| Status | captured |
| REA Evidence ID | `ev_4b00af1f6b662c52a8d8286a7b6fc444f39628463fa9b1e16f46d3d80d10f381` |
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
    "url": "https://aws.amazon.com/rds/aurora/"
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

- Amazon Aurora
- What is Aurora
- Benefits of Aurora
- High performance
- High availability
- Scale and build with ease
- Cost-effective
- Easy to migrate
- Use cases
- Modernize enterprise applications
- Build SaaS applications
- Deploy globally distributed applications
- Go serverless
- Customers
- BMW increased scalability and reduced costs with Aurora Serverless
- Samsung migrated 1.1 billion users from Oracle to Aurora with AWS Database Migration Service
- Coinbase Launches an Ultra-Low-Latency Cryptocurrency Exchange on AWS
- DraftKings Scales Its Financial Ledger with Amazon Aurora
- Next Steps
- Learn with hands-on training
- Dive deep on Aurora
- Sign up for a free account
- Start building in the console
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
- [Overview](/rds/aurora/)
- [Features](/rds/aurora/features/)
- [Pricing](/rds/aurora/pricing/)
- [Resources](/rds/aurora/resources/)
- [FAQs](/rds/aurora/faqs/)
- [Customers](/rds/aurora/customers/)
- [Migrate with AWS DMS](/dms/)
- [Databases](/products/databases/)
- [Amazon RDS](/rds/)
- [High performance Power internet-scale applications with 6x the throughput of PostgreSQL and MySQL, and the fastest distributed SQL reads and writes with Aurora DSQL. Learn more](/rds/aurora/features/#high-performance-and-scalability--3m3tsn)
- [High availability Designed for up to 99.99% single-Region and 99.999% multi-Region availability with fault-tolerant distributed storage to ensure continuous data access and durability for your applications. Learn more](/rds/aurora/features/#high-availability-and-durability--3m3tsn)
- [Scale and build with ease Automatically scale to the demands of any workload, removing bottlenecks while maintaining performance. Learn more](/rds/aurora/dsql/)
- [Cost-effective Improve productivity and lower total cost of ownership with a fully managed database including innovations like serverless so you can focus on building applications that delight your users. Learn more](/rds/aurora/pricing/)
- [Easy to migrate Easily migrate MySQL or PostgreSQL databases to and from Aurora using standard tools, or run legacy SQL Server applications with Babelfish for Aurora PostgreSQL with minimal code change. Learn more](/rds/aurora/features/#migration-support--3m3tsn)
- [See more customer stories](https://docs.aws.amazon.com/rds/latest/auroraextendedcontent/aurora-customers.html)
- [Missing alt text value BMW increased scalability and reduced costs with Aurora Serverless Read the case study](https://aws.amazon.com/solutions/case-studies/bmw-group-aurora-serverless-case-study)
- [Missing alt text value Samsung migrated 1.1 billion users from Oracle to Aurora with AWS Database Migration Service Read the case study](https://aws.amazon.com/solutions/case-studies/samsung-migrates-off-oracle-to-amazon-aurora)
- [\"Coinbase logo in blue lowercase letters.\" Coinbase Launches an Ultra-Low-Latency Cryptocurrency Exchange on AWS Read the case study](https://aws.amazon.com/solutions/case-studies/coinbase-cryptocurrency-exchange-case-study/)
- [Missing alt text value DraftKings Scales Its Financial Ledger with Amazon Aurora Read the case study](https://aws.amazon.com/solutions/case-studies/draftkings-aurora-case-study/)
- [Resources Learn with hands-on training Get started with Aurora](/rds/aurora/resources/)
- [Documentation Dive deep on Aurora Read the documentation](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html)
- [Free tier Sign up for a free account Try for free](https://signin.aws.amazon.com/signup?request_type=builderId)
- [Console Start building in the console Sign in](https://console.aws.amazon.com/rds)
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
- button: Get started with Aurora
- button: Connect with an Aurora specialist
- button: Play:
- button: Modernize enterprise applications
- button: Build SaaS applications
- button: Deploy globally distributed applications
- button: Go serverless

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-aurora.json`
- Evidence ID: `ev_4b00af1f6b662c52a8d8286a7b6fc444f39628463fa9b1e16f46d3d80d10f381`
- Accessibility outline: 14551 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
