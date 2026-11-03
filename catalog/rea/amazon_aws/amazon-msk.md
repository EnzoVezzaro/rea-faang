# REA web-surface report — Amazon Managed Streaming for Apache Kafka (`amazon-msk`)

Browser capture of the public web surface of Amazon Managed Streaming for Apache Kafka, recorded with REA.

| | |
|---|---|
| Product | Amazon Managed Streaming for Apache Kafka (`amazon-msk`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/msk/ |
| Resolved URL | https://aws.amazon.com/msk/ |
| Page title | Amazon Managed Streaming for Apache Kafka |
| Captured | 2026-11-03T03:28:45.914Z |
| Status | captured |
| REA Evidence ID | `ev_66fec70e48784e9ca0250c5df8960437cfe694a58dca77731ad828faa0fb3bd7` |
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
    "url": "https://aws.amazon.com/msk/"
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

- Amazon Managed Streaming for Apache Kafka
- What is Amazon MSK?
- Benefits
- Low price for performance
- Resiliency and availability
- Operational simplicity
- Seamlessly source data in motion
- Use cases
- Ingest and process log and event streams
- Run centralized state or data buses
- Power your event-driven systems
- Powering the next generation of Kafka with Amazon MSK
- Amazon MSK Express brokers
- Migrate workloads to Amazon MSK Express Broker
- Customers
- Arm builds energy-efficient processor designs and software platforms to make advanced computing possible
- New Relic shifts infrastructure and software management to Amazon MSK
- Resources
- Find out how Amazon MSK works
- Review the step-by-step guide
- Run your Apache Kafka cluster
- Get started with Amazon MSK
- Get Started with MSK
- Get started building on AWS
- Check out Amazon MSK pricing for more details

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
- [Overview](/msk/)
- [Pricing](/msk/pricing/)
- [Getting Started](/msk/getting-started/)
- [Migrations](/msk/migrations/)
- [Customers](/msk/customer-success/)
- [Partners](/msk/partners/)
- [Products](/products/)
- [Analytics](/analytics/)
- [Learn more about how it works.](https://docs.aws.amazon.com/msk/latest/developerguide/what-is-msk.html)
- [Amazon MSK Express brokers Amazon MSK Express brokers offer 3x higher throughput, 20x faster scaling, 90% quicker recovery, and up to 50% better price-performance for partition-bound workloads. Learn more](/msk/features/express-brokers-for-amazon-msk/)
- [Migrate workloads to Amazon MSK Express Broker Migrate topic data and metadata from Kafka deployments including those running on-premises, on AWS, or other cloud providers, as well as Kafka-protocol-compatible services. Learn more](/msk/migrations/)
- [Missing alt text value Arm builds energy-efficient processor designs and software platforms to make advanced computing possible Learn more](/msk/customer-success/)
- [Missing alt text value New Relic shifts infrastructure and software management to Amazon MSK Learn more](/solutions/case-studies/new-relic-case-study/)
- [Find out how Amazon MSK works Sign up for AWS and download libraries and tools to help you work with Amazon MSK. Explore the libraries and tools](https://docs.aws.amazon.com/msk/latest/developerguide/before-you-begin.html)
- [Review the step-by-step guide Learn how to set up your Apache Kafka cluster on Amazon MSK. Check out the developer guide](https://docs.aws.amazon.com/msk/latest/developerguide/getting-started.html)
- [Run your Apache Kafka cluster Start running your Apache Kafka cluster on Amazon MSK. Sign in to the Amazon MSK console](https://signin.aws.amazon.com/signin?redirect_uri=https%3A%2F%2Fconsole.aws.amazon.com%2Fmsk%2Fhome%3Fregion%3Dus-east-1%26state%3DhashArgs%2523%26isauthcode%3Dtrue&client_id=arn%3Aaws%3Aiam%3A%3A015428540659%3Auser%2Famazonkafka&forceMobileApp=0&code_challenge=p9EmQ1AG-fEcgGS_OzijOiWokvppmBAjpYvTWD1Pdt8&code_challenge_method=SHA-256)
- [Get Started with MSK](https://docs.aws.amazon.com/msk/latest/developerguide/what-is-msk.html)
- [Guide Get started building on AWS Learn more](/getting-started/?sc_icontent=awssm-evergreen-getting_started&sc_iplace=2up&trk=ha_awssm-evergreen-getting_started&sc_ichannel=ha&sc_icampaign=evergreen-getting_started)
- [Getting started Check out Amazon MSK pricing for more details Visit the pricing page](/msk/pricing/)
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
- button: Features submenu
- button: More menu
- button: Learn more
- button: Low price for performance
- button: Resiliency and availability
- button: Operational simplicity
- button: Seamlessly source data in motion
- button: Ingest and process log and event streams

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-msk.json`
- Evidence ID: `ev_66fec70e48784e9ca0250c5df8960437cfe694a58dca77731ad828faa0fb3bd7`
- Accessibility outline: 13635 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
