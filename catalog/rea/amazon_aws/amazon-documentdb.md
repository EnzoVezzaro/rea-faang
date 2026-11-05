# REA web-surface report — Amazon DocumentDB (`amazon-documentdb`)

Browser capture of the public web surface of Amazon DocumentDB, recorded with REA.

| | |
|---|---|
| Product | Amazon DocumentDB (`amazon-documentdb`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/documentdb/ |
| Resolved URL | https://aws.amazon.com/documentdb/ |
| Page title | Amazon DocumentDB (with MongoDB compatibility) |
| Captured | 2026-11-04T02:41:35.166Z |
| Status | captured |
| REA Evidence ID | `ev_7590b45b6eeef71dcbb4ddfa557509308d96534b802e7438993d27695bb7885c` |
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
    "url": "https://aws.amazon.com/documentdb/"
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

- Amazon DocumentDB (with MongoDB compatibility)
- What is Amazon DocumentDB
- Benefits of Amazon DocumentDB
- Serverless
- Low total cost of ownership
- MongoDB API-compatible
- Improved resilience
- Integrations across AWS
- Use cases
- Content management systems
- E-commerce
- Mobile and web applications
- Generative and agentic AI applications
- Customers
- Rippling transforms data architecture for innovation using AWS
- Migrating Critical Workloads from MongoDB to Amazon DocumentDB with Hudl
- Sportradar Accelerates Data and Video on AWS, Launches Simulated Reality Innovation in 11 Days
- Next steps
- Learn with hands-on training
- Dive deep on Amazon DocumentDB
- Sign up for a free account
- Start building in the console
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
- [Overview](/documentdb/)
- [Pricing](/documentdb/pricing/)
- [FAQs](/documentdb/faqs/)
- [Customers](/documentdb/customers/)
- [Products](/products/)
- [Databases](/products/databases/)
- [Serverless Avoid overprovisioning for highly variable workloads by automatically scaling capacity up or down in fine-grained increments based on your application's demand with up to 90% cost savings compared to provisioning for peak capacity. Learn more](/documentdb/serverless/)
- [Low total cost of ownership Reduce total cost of ownership (TCO) with pay only for what you use, predictable pricing with I/O-Optimized, and up to 43% cost savings with memory-optimized instances. Learn more](/documentdb/features/#topic-3)
- [MongoDB API-compatible Migrate applications, typically without code changes or downtime, while using your existing MongoDB drivers, frameworks, and tooling. Learn more](/documentdb/features/#topic-4)
- [Improved resilience Strengthen your disaster recovery posture and get low latency reads with Amazon DocumentDB Global Clusters, which automatically replicates your data across up to 10 AWS Regions. Learn more](/documentdb/features/#topic-1)
- [Integrations across AWS Accelerate application development using native integrations with Amazon CloudWatch, AWS IAM, AWS Backup, Amazon OpenSearch Service (zero-ETL), and other services. Learn more](/documentdb/features/#topic-6)
- [Missing alt text value Rippling transforms data architecture for innovation using AWS Read the case study](https://aws.amazon.com/solutions/case-studies/rippling-case-study)
- [The logo of Hudl, featuring an orange icon and the word 'Hudl' in black on a white background. Migrating Critical Workloads from MongoDB to Amazon DocumentDB with Hudl Read the case study](https://aws.amazon.com/solutions/case-studies/hudl-case-study)
- [Missing alt text value Sportradar Accelerates Data and Video on AWS, Launches Simulated Reality Innovation in 11 Days Read the case study](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/databases/case-studies/media/sportradar-aurora-documentdb-elasticache-performance-scalability-case-study.html.pdf)
- [Resources Learn with hands-on training Get started with DocumentDB](/documentdb/resources/)
- [Documentation Dive deep on Amazon DocumentDB Read the documentation](https://docs.aws.amazon.com/documentdb)
- [Free tier Sign up for a free account Try for free](https://signin.aws.amazon.com/signup?request_type=builderId)
- [Console Start building in the console Sign in](https://console.aws.amazon.com/docdb)
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
- button: Resources submenu
- button: Get started with Amazon DocumentDB
- button: Connect with an AWS specialist
- button: Play:
- button: Content management systems
- button: E-commerce
- button: Mobile and web applications

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-documentdb.json`
- Evidence ID: `ev_7590b45b6eeef71dcbb4ddfa557509308d96534b802e7438993d27695bb7885c`
- Accessibility outline: 14468 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
