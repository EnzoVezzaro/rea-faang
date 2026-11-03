# REA web-surface report — Amazon Managed Grafana (`amazon-managed-grafana`)

Browser capture of the public web surface of Amazon Managed Grafana, recorded with REA.

| | |
|---|---|
| Product | Amazon Managed Grafana (`amazon-managed-grafana`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/grafana/ |
| Resolved URL | https://aws.amazon.com/grafana/ |
| Page title | Amazon Managed Grafana |
| Captured | 2026-11-03T03:27:16.853Z |
| Status | captured |
| REA Evidence ID | `ev_5533477b444771d391f581bd098a91f63fe579892100b2e938f0cbc811816ce4` |
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
    "url": "https://aws.amazon.com/grafana/"
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

- Amazon Managed Grafana
- Benefits of Amazon Managed Grafana
- Build workspaces
- Operational data
- Integrate with AWS security
- Migrate Grafana
- Using Amazon Managed Grafana
- Use cases
- Unify your observability
- Monitor containers
- Troubleshoot operational issues collaboratively
- Monitor IoT devices
- Customers
- COTINO builds efficient open-source observability experiences
- NTT DATA Services focuses on improving application health
- Airwalk Reply helps clients visualize data
- Area 52 visualizes process data from industrial IoT devices
- Get started with Grafana
- Get started with Amazon Managed Grafana
- Explore observability options
- Start using Amazon Managed Grafana
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
- [Overview](/grafana/?nc=sn&loc=1)
- [Features](/grafana/features/?nc=sn&loc=2)
- [Pricing](/grafana/pricing/?nc=sn&loc=3)
- [Resources](/grafana/resources/?nc=sn&loc=4)
- [FAQs](/grafana/faqs/?nc=sn&loc=5)
- [Customers](/grafana/customers/?nc=sn&loc=6)
- [Partners](/grafana/partners/?nc=sn&loc=7)
- [Products](/products/)
- [Management and Governance](/products/management-and-governance/)
- [Missing alt text value COTINO builds efficient open-source observability experiences Learn more](https://aws.amazon.com/grafana/customers)
- [Missing alt text value NTT DATA Services focuses on improving application health Learn more](https://aws.amazon.com/grafana/customers#nttdata)
- [Missing alt text value Airwalk Reply helps clients visualize data Learn more](https://aws.amazon.com/grafana/customers)
- [Missing alt text value Area 52 visualizes process data from industrial IoT devices Learn more](https://aws.amazon.com/grafana/customers)
- [Guide Get started with Amazon Managed Grafana Read the guide](https://docs.aws.amazon.com/grafana/latest/userguide/getting-started-with-AMG.html?refid=27c40c44-7d2b-4d0f-8385-c04d9b0f58e5)
- [Getting started Explore observability options Read more](/products/management-and-governance/use-cases/monitoring-and-observability/)
- [Getting started Start using Amazon Managed Grafana Sign in](https://console.aws.amazon.com/grafana/?refid=27c40c44-7d2b-4d0f-8385-c04d9b0f58e5)
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
- button: Get started with Amazon Managed Grafana
- button: Hands-on Workshop
- button: Build workspaces
- button: Operational data
- button: Integrate with AWS security
- button: Migrate Grafana
- button: Play:
- button: Unify your observability

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-managed-grafana.json`
- Evidence ID: `ev_5533477b444771d391f581bd098a91f63fe579892100b2e938f0cbc811816ce4`
- Accessibility outline: 11225 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
