# REA web-surface report — Amazon Neptune (`amazon-neptune`)

Browser capture of the public web surface of Amazon Neptune, recorded with REA.

| | |
|---|---|
| Product | Amazon Neptune (`amazon-neptune`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/neptune/ |
| Resolved URL | https://aws.amazon.com/neptune/ |
| Page title | Amazon Neptune |
| Captured | 2026-11-03T03:31:48.846Z |
| Status | captured |
| REA Evidence ID | `ev_02bc5ac7f8ab5227f446b38c5ca8ce8d2b8b89fb53de8982606b6b50499ee46f` |
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
    "url": "https://aws.amazon.com/neptune/"
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

- Amazon Neptune
- What is Neptune
- Benefits of Neptune
- Insights in seconds
- Trusted AI
- Performance and scalability
- Enterprise security and reliability
- Cost effective
- Use cases
- Graphs for AI
- Customer 360
- Fraud detection
- Cybersecurity
- Customers
- How Smartsheet enhances recommendations using Amazon Neptune and Knowledge Graphs
- Protecting and governing sensitive data in the cloud on AWS with ALTR
- Building an agentic AI solution using Amazon Neptune with Trend Micro
- Reimagining cloud security using Amazon Neptune graph database with Wiz
- Next steps
- Learn with hands-on training
- Dive deep on Neptune
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
- [Overview](/neptune/)
- [Features](/neptune/features/)
- [Pricing](/neptune/pricing/)
- [FAQs](/neptune/faqs/)
- [Customers](/neptune/customers/)
- [Products](/products/)
- [Databases](/products/databases/)
- [Insights in seconds Easily analyze tens of billions of relationships across structured and unstructured data within seconds using built-in algorithms, and perform vector search with your graph for gen AI apps. Learn more](/blogs/aws/introducing-amazon-neptune-analytics-a-high-performance-graph-analytics)
- [Trusted AI Improve the accuracy and explainability of your generative AI apps with automated GraphRAG, and integrations with Strands AI SDK and popular memory tools for agents. Learn more](/neptune/features/#topic-4)
- [Performance and scalability Scale your graphs with unlimited vertices and edges, 100k+ queries per second, up to 128 TiB storage per cluster, and up to 15 read replicas per cluster. Learn more](/neptune/features/#topic-0)
- [Enterprise security and reliability Unlock best-in-class security and reliability synonymous with AWS, including ACID transactions, automated backups, cross-Region replication, PITR, encryption at transit and at rest, granular resource permissions, and more. Learn more](/neptune/features/#topic-2)
- [Cost effective Reduce your total cost of ownership with no upfront commitments and no hidden costs, pay-for-use billing, and transparent support billing. Learn more](/neptune/features/#topic-7)
- [Explore Workshops](https://builder.aws.com/build/workshops/?accessType=free-sandbox&tab=discover&sc_icampaign=launch_builder-center-sandbox_2026&sc_ichannel=ha&sc_iplace=banner&trk=c243de2e-eafc-4962-8ffc-4915bb208b5b)
- [Missing alt text value How Smartsheet enhances recommendations using Amazon Neptune and Knowledge Graphs Read the blog](https://aws.amazon.com/blogs/database/how-smartsheet-enhances-recommendations-using-amazon-neptune-and-knowledge-graphs)
- [Missing alt text value Protecting and governing sensitive data in the cloud on AWS with ALTR Read the case study](https://aws.amazon.com/solutions/case-studies/altr-case-study)
- [Missing alt text value Building an agentic AI solution using Amazon Neptune with Trend Micro Read the case study](https://aws.amazon.com/solutions/case-studies/trendmicro)
- [Wiz logo in blue text with a star symbol Reimagining cloud security using Amazon Neptune graph database with Wiz Read the case study](https://aws.amazon.com/solutions/case-studies/wiz-neptune)
- [Resources Learn with hands-on training Get started with Neptune](/neptune/resources/)
- [Documentation Dive deep on Neptune Read the documentation](https://docs.aws.amazon.com/neptune)
- [Free tier Sign up for a free account Try for free](https://signin.aws.amazon.com/signup?request_type=builderId)
- [Console Start building in the console Sign in](https://console.aws.amazon.com/neptune)
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
- button: Get started with Neptune
- button: Connect with an AWS specialist
- button: Play:
- button: Close
- button: Graphs for AI
- button: Customer 360
- button: Fraud detection

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-neptune.json`
- Evidence ID: `ev_02bc5ac7f8ab5227f446b38c5ca8ce8d2b8b89fb53de8982606b6b50499ee46f`
- Accessibility outline: 15557 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
