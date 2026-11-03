# REA web-surface report — Amazon Keyspaces (for Apache Cassandra) (`amazon-keyspaces`)

Browser capture of the public web surface of Amazon Keyspaces (for Apache Cassandra), recorded with REA.

| | |
|---|---|
| Product | Amazon Keyspaces (for Apache Cassandra) (`amazon-keyspaces`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/keyspaces/ |
| Resolved URL | https://aws.amazon.com/keyspaces/ |
| Page title | Amazon Keyspaces (for Apache Cassandra) |
| Captured | 2026-11-03T03:16:39.310Z |
| Status | captured |
| REA Evidence ID | `ev_f4deda801a6707823631b79392983195186e9f9d85cba177602d84f403f83e5b` |
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
    "url": "https://aws.amazon.com/keyspaces/"
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

- Amazon Keyspaces (for Apache Cassandra)
- What is Keyspaces
- Benefits of Keyspaces
- Compatible with Apache Cassandra
- Serverless
- Performance at scale
- Designed for 99.999% availability
- Enterprise-level security
- Use cases
- Build applications that require low latency
- Build applications using open-source technologies
- Move your Cassandra workloads to the cloud
- Data store for applications
- Next Steps
- Learn with hands-on training
- Dive deep on Keyspaces
- Sign up for a free account
- Start building in the console
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
- [Overview](/keyspaces/)
- [Features](/keyspaces/features/)
- [Pricing](/keyspaces/pricing/)
- [FAQs](/keyspaces/faqs/)
- [Customers](/keyspaces/customers/)
- [Products](/products/)
- [Databases](/products/databases/)
- [Compatible with Apache Cassandra Use the Cassandra Query Language (CQL) API code, Cassandra drivers, and developer tools that you already use - simply change the Cassandra hostname to the Keyspaces service endpoint for your applications. Learn more](/keyspaces/features/)
- [Serverless Optimize costs with a fully managed serverless database that automatically scales to fit your needs. Learn more](/keyspaces/features/)
- [Performance at scale Deliver applications with consistent high performance and nearly unlimited throughput and storage. Learn more](/keyspaces/features/)
- [Designed for 99.999% availability Unlock fast local reads and writes performance with multi-Region replication. Learn more](/keyspaces/features/)
- [Enterprise-level security Trust in comprehensive security with encryption at-rest and in-transit, access controls with AWS IAM, and defense-in-depth protection with network isolation from Amazon VPC and private endpoints. Learn more](/keyspaces/features/)
- [Training Learn with hands-on training Get started with Keyspaces](https://skillbuilder.aws/learn/KHGZNGWXKV/getting-started-with-amazon-keyspaces/MXK17GET8G)
- [Documentation Dive deep on Keyspaces Read the documentation](https://docs.aws.amazon.com/keyspaces/latest/devguide/what-is-keyspaces.html)
- [Sign up for a free account Try for free](https://portal.aws.amazon.com/gp/aws/developer/registration/index.html)
- [Console Start building in the console Sign in](https://console.aws.amazon.com/keyspaces)
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
- button: Resources submenu
- button: Get started with Keyspaces
- button: Connect with an AWS specialist
- button: Play:
- button: Build applications that require low latency
- button: Build applications using open-source technologies
- button: Move your Cassandra workloads to the cloud
- button: Data store for applications

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-keyspaces.json`
- Evidence ID: `ev_f4deda801a6707823631b79392983195186e9f9d85cba177602d84f403f83e5b`
- Accessibility outline: 12358 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
