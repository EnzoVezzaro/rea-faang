# REA web-surface report — Amazon Managed Service for Prometheus (`amazon-managed-prometheus`)

Browser capture of the public web surface of Amazon Managed Service for Prometheus, recorded with REA.

| | |
|---|---|
| Product | Amazon Managed Service for Prometheus (`amazon-managed-prometheus`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/prometheus/ |
| Resolved URL | https://aws.amazon.com/prometheus/ |
| Page title | Amazon Managed Service for Prometheus |
| Captured | 2026-11-03T03:27:59.675Z |
| Status | captured |
| REA Evidence ID | `ev_fd631a84b45907e28c8549b4db91bd6938ea36f3ddce5d518b3727905b515986` |
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
    "url": "https://aws.amazon.com/prometheus/"
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

- Amazon Managed Service for Prometheus
- Using Amazon Managed Service for Prometheus
- Benefits
- Filter, aggregate, ingest, and query unique time series metrics
- Automatically scale
- Security and compliance requirements
- Reduce operational costs
- Use cases
- Unified system monitoring
- Troubleshooting and root cause analysis
- Workload and application metrics monitoring
- High-cardinality metrics monitoring
- Customers
- Twilio modernized and scaled their observability stack
- HP monitors hardware and service metrics
- Fanatics monitors global application performance
- Curve collects, stores, and visualizes millions of metrics
- How to get started
- Review the documentation
- Explore observability options
- Start using Amazon Managed Service for Prometheus
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
- [Overview](/prometheus/)
- [Features](/prometheus/features/)
- [Pricing](/prometheus/pricing/)
- [Resources](/prometheus/resources/)
- [FAQs](/prometheus/faqs/)
- [Customers](/prometheus/customers/)
- [Partners](/prometheus/partners/)
- [Products](/products/)
- [Management and Governance](/products/management-and-governance/)
- [Missing alt text value Twilio modernized and scaled their observability stack Learn more](https://aws.amazon.com/prometheus/customers)
- [Missing alt text value HP monitors hardware and service metrics Learn more](https://aws.amazon.com/prometheus/customers)
- [Missing alt text value Fanatics monitors global application performance Learn more](https://aws.amazon.com/prometheus/customers)
- [Missing alt text value Curve collects, stores, and visualizes millions of metrics Learn more](https://aws.amazon.com/prometheus/customers)
- [Guide Review the documentation Read the guide](https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-getting-started.html?refid=27c40c44-7d2b-4d0f-8385-c04d9b0f58e5)
- [Getting started Explore observability options Read more](/products/management-and-governance/use-cases/monitoring-and-observability/)
- [Console Start using Amazon Managed Service for Prometheus Sign in](https://console.aws.amazon.com/prometheus/home)
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
- button: Start using Managed Service for Prometheus
- button: Hands-on Workshop
- button: Play:
- button: Filter, aggregate, ingest, and query unique time series metrics
- button: Automatically scale
- button: Security and compliance requirements
- button: Reduce operational costs
- button: Unified system monitoring

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-managed-prometheus.json`
- Evidence ID: `ev_fd631a84b45907e28c8549b4db91bd6938ea36f3ddce5d518b3727905b515986`
- Accessibility outline: 11281 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
