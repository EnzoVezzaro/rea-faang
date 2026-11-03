# REA web-surface report — Amazon CloudWatch (`amazon-cloudwatch`)

Browser capture of the public web surface of Amazon CloudWatch, recorded with REA.

| | |
|---|---|
| Product | Amazon CloudWatch (`amazon-cloudwatch`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/cloudwatch/ |
| Resolved URL | https://aws.amazon.com/cloudwatch/ |
| Page title | Amazon CloudWatch |
| Captured | 2026-11-03T02:49:30.564Z |
| Status | captured |
| REA Evidence ID | `ev_b58562556d1e152cf5900c05805fe12e2ea9030c59f87a130040bd0264c4b96f` |
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
    "url": "https://aws.amazon.com/cloudwatch/"
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

- Amazon CloudWatch
- What is Amazon CloudWatch?
- See everything in one place
- AI and Agent Observability
- Simplify operations
- Let AI help you
- Troubleshoot smarter, not harder
- Capabilities
- Operate intelligently with AIOps
- Customers
- Mapbox uses CloudWatch to ingest multiple data sources and monitor key workloads
- CloudPassage uses CloudWatch to reduce mean time to repair for its microservices-based architecture
- Pushpay uses CloudWatch Logs Insights to query logs and reduce operational complexity
- EA Sports uses CloudWatch Internet Monitor to improve operations by tracking internet performance impact
- Get started with CloudWatch
- Learn with hands-on AWS One Observability Workshop
- See how observability can benefit your operations
- Learn how to transform your observability with the latest features
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
- [Overview](/cloudwatch/)
- [Pricing](/cloudwatch/pricing/)
- [Getting Started](/cloudwatch/getting-started/)
- [FAQs](/cloudwatch/faqs/)
- [Customers](/cloudwatch/customers/)
- [Products](/products/)
- [Management and Governance](/products/management-and-governance/)
- [Explore Application Performance Monitoring (APM) features](/cloudwatch/features/application-observability-apm/)
- [Explore CloudWatch Omni](/cloudwatch/omni/)
- [Explore Generative AI Observability features](/cloudwatch/features/generative-ai-observability/)
- [CloudWatch Omni](/cloudwatch/omni/)
- [Explore Infrastructure Observability features](/cloudwatch/features/infrastructure-observability/)
- [CloudWatch investigations](/cloudwatch/features/aiops/)
- [Model Context Protocol (MCP) servers](/blogs/mt/enhance-your-aiops-introducing-amazon-cloudwatch-and-application-signals-mcp-servers/)
- [Explore AIOps features](/cloudwatch/features/aiops/)
- [Explore Analytics and insights](/cloudwatch/features/analytics-and-insights/)
- [MCP servers](https://github.com/awslabs/mcp)
- [Strands Agent SDK](https://strandsagents.com/)
- [AIOps features](/cloudwatch/features/aiops/)
- [Missing alt text value Mapbox uses CloudWatch to ingest multiple data sources and monitor key workloads Learn more](https://aws.amazon.com/cloudwatch/customers#Mapbox)
- [Missing alt text value CloudPassage uses CloudWatch to reduce mean time to repair for its microservices-based architecture Learn more](https://aws.amazon.com/cloudwatch/customers/#CloudPassage)
- [Missing alt text value Pushpay uses CloudWatch Logs Insights to query logs and reduce operational complexity Learn more](https://aws.amazon.com/cloudwatch/customers/#Pushpay)
- [Missing alt text value EA Sports uses CloudWatch Internet Monitor to improve operations by tracking internet performance impact Learn more](https://aws.amazon.com/cloudwatch/customers/#Electronic%20Arts)
- [Workshop Learn with hands-on AWS One Observability Workshop Explore the Workshop](https://catalog.us-east-1.prod.workshops.aws/v2/workshops/31676d37-bbe9-4992-9cd1-ceae13c5116c/en-US)
- [Blog See how observability can benefit your operations Read the blog](/blogs/mt/category/management-and-governance/monitoring-and-observability/)
- [Features Learn how to transform your observability with the latest features Learn more](/cloudops/transform/)
- [What Is AWS?](/what-is-aws/?nc1=f_cc)
- [What Is Cloud Computing?](/what-is-cloud-computing/?nc1=f_cc)
- [What Is Agentic AI?](/what-is/agentic-ai/?nc1=f_cc)
- [Cloud Computing Concepts Hub](/what-is/?nc1=f_cc)
- [AWS Cloud Security](/security/?nc1=f_cc)
- [What's New](/new/?nc1=f_cc)
- [Blogs](/blogs/?nc1=f_cc)
- [Press Releases](https://press.aboutamazon.com/aws)

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
- button: Get started with CloudWatch
- button: Hands-on Workshop
- button: Yes, give us positive feedback
- button: No, give us constructive feedback
- button: Create an AWS account
- button: Back to top

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-cloudwatch.json`
- Evidence ID: `ev_b58562556d1e152cf5900c05805fe12e2ea9030c59f87a130040bd0264c4b96f`
- Accessibility outline: 17938 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
