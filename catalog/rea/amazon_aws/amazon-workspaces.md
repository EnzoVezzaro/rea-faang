# REA web-surface report — Amazon WorkSpaces (`amazon-workspaces`)

Browser capture of the public web surface of Amazon WorkSpaces, recorded with REA.

| | |
|---|---|
| Product | Amazon WorkSpaces (`amazon-workspaces`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/workspaces/ |
| Resolved URL | https://aws.amazon.com/workspaces/ |
| Page title | Amazon WorkSpaces |
| Captured | 2026-11-03T03:59:28.092Z |
| Status | captured |
| REA Evidence ID | `ev_b450e63e3b83384dd9cad32ca76e1b5f6894e3bde44530b9282dd5059f11698b` |
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
    "url": "https://aws.amazon.com/workspaces/"
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

- Amazon WorkSpaces
- Why WorkSpaces?
- Benefits
- Cost efficiency
- Performance optimization
- Enhance security
- Scalable & adaptable
- Built for reliability and scale
- Awards and analyst recognition
- Virtual desktops and application streaming
- Applications
- Desktop as a Service (DaaS)
- Secure browser
- VDI partners
- Tools for builders and ISVs
- AI agents
- Streaming protocols
- Convert desktop apps to SaaS
- Use Cases
- Remote and hybrid workforce
- Knowledge workers
- Administration and back-office
- Contract and contingent workers
- Contact centers
- Amazon WorkSpaces customers

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
- [Overview](/workspaces/)
- [Customers](/workspaces/customers/)
- [Getting Started](/workspaces/getting-started/)
- [Products](/products/)
- [Read the full Gartner report](/resources/analyst-reports/gartner/global-mq-ardm-26-desktop-as-a-service/?trk=2f86cb2c-e865-4cca-9f1f-6f58fc7b3fe1&sc_channel=el)
- [Read the full IDC MarketScape report](/resources/analyst-reports/idc/global-ar-report-ardm-26-desktop-as-a-service/?trk=c70f2f47-b6d1-4a55-981a-ecad5342dd6b&sc_channel=el)
- [Applications Applications streaming to any device Learn more](/workspaces/applications/)
- [Desktop as a Service (DaaS) Fully managed virtual desktop solutions Learn more](/workspaces/desktop-as-a-service/)
- [Secure browser Cloud-native, remote enterprise browser Learn more](/workspaces/secure-browser/)
- [VDI partners Virtual desktop infrastructure and APIs for third-party VDI software Learn more](/workspaces/vdi-partners/)
- [AI agents Connect your agents to desktop applications through a managed MCP server Learn more](/workspaces/ai-agents/)
- [Streaming protocols High-performance display compression for remote visualization Learn more](/hpc/dcv/)
- [Convert desktop apps to SaaS Convert desktop apps to SaaS or web-based delivery Learn more](/workspaces/applications/)
- [Missing alt text value WorkSpaces DaaS helps Ferrari reduce virtual desktop deployment times by 90% Read the case study](https://aws.amazon.com/solutions/case-studies/ferrari-workspaces-case-study/)
- [Missing alt text value Lucid Motors runs VMware Horizon 8 on Amazon WorkSpaces DaaS to deliver a high- performance end-user experience Read the case study](https://aws.amazon.com/solutions/case-studies/lucid-workspaces-core-case-study/)
- [Missing alt text value Docusign automates client management with a DaaS system for under $2 per month with WorkSpaces Read the case study](/solutions/case-studies/docusign-case-study/)
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
- button: Features submenu
- button: Pricing submenu
- button: Get started
- button: Contact a specialist
- button: Cost efficiency
- button: Performance optimization
- button: Enhance security
- button: Scalable & adaptable

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-workspaces.json`
- Evidence ID: `ev_b450e63e3b83384dd9cad32ca76e1b5f6894e3bde44530b9282dd5059f11698b`
- Accessibility outline: 14721 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
