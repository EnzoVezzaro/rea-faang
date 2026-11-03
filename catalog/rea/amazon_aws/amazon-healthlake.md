# REA web-surface report — Amazon HealthLake (`amazon-healthlake`)

Browser capture of the public web surface of Amazon HealthLake, recorded with REA.

| | |
|---|---|
| Product | Amazon HealthLake (`amazon-healthlake`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/healthlake/ |
| Resolved URL | https://aws.amazon.com/healthlake/ |
| Page title | High-performance FHIR interactions at petabyte scale |
| Captured | 2026-11-03T03:13:56.069Z |
| Status | captured |
| REA Evidence ID | `ev_6dd7c2f06b74701972d9b0afe8ae4e4911d8616571b1f27c778d95b2d02674f3` |
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
    "url": "https://aws.amazon.com/healthlake/"
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

- High-performance FHIR interactions at petabyte scale
- What is HealthLake?
- Introducing Data Transformation Agent
- Features
- Enterprise-Scale FHIR Server
- Unified Patient Record
- AI & Analytics Integration
- Customers
- Greenway Health
- What's New
- AWS HealthLake identifies and links duplicate patient, provider, and organization records (Preview)
- Unlock substantial cost savings
- Use cases
- Regulatory Compliance
- Infrastructure for Real-Time Utilization Management
- Accelerate Product Development and Compliance
- Reduce Development Costs
- Modernize Patient-Facing Applications
- Enhance Population Health Systems
- Unify Clinical Data
- Get started with AWS HealthLake
- Learn more about pricing
- Start using AWS HealthLake in Console
- See latest AWS HealthLake releases
- Learn

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
- [Overview](/healthlake/)
- [Pricing](/healthlake/pricing/)
- [FAQs](/healthlake/faqs/)
- [Resources](/healthlake/resources/)
- [Product](/products/)
- [Machine Learning](/machine-learning/)
- [Enterprise-Scale FHIR Server Enterprise-Scale FHIR Server AWS HealthLake provides a fully managed, enterprise-scale FHIR R4 server that powers patient and member-facing applications without the operational burden of building and maintaining FHIR infrastructure at scale. Learn more](/healthlake/features/enterprise-scale-fhir-server/)
- [Unified Patient Record Unified Patient Record AWS HealthLake resolves fragmented, duplicate patient identities across claims, clinical, and ADT sources into a single standards-based record — accessible through both FHIR search and SQL, without custom pipelines or specialized FHIR expertise. Learn more](/healthlake/features/unified-patient-record/)
- [AI & Analytics Integration AI & Analytics Integration AWS HealthLake connects to agentic solutions like Amazon Connect Health and provides an MCP Server for customers building custom agents through AWS Bedrock AgentCore Gateway. Learn more](/healthlake/features/ai-analytics-integration/)
- [AWS HealthLake identifies and links duplicate patient, provider, and organization records (Preview)](/about-aws/whats-new/2026/07/aws-healthlake/)
- [Regulatory Compliance Efficient implementation of Patient Access, Provider Directory, Provider Access, and Prior Authorization APIs for CMS mandates. Learn more](/solutions/case-studies/mhk-case-study/)
- [Infrastructure for Real-Time Utilization Management Instant data access for concurrent utilization management workflows, prior authorization decisions, and real-time member engagement tools that improve care coordination and reduce administrative costs. Learn more](/blogs/machine-learning/automate-prior-authorization-using-crd-with-cds-hooks-and-aws-healthlake/)
- [Accelerate Product Development and Compliance Rapidly build and scale your FHIR-based applications that meet HTI-1 and CMS requirements without managing complex infrastructure. Learn more](/solutions/case-studies/latest-greenway-aws-healthlake-case-study/)
- [Reduce Development Costs Minimize data engineering investments by leveraging a structured FHIR data foundation with embedded analytics capabilities that enhance your product capabilities. Learn more](/solutions/case-studies/latest-greenway-aws-healthlake-case-study/)
- [Modernize Patient-Facing Applications Use a standards-compliant FHIR datastore that enables real-time access to health data from multiple providers while ensuring seamless interoperability across healthcare systems and platforms. Learn more](/blogs/industries/hms-people-heart-study-streamlines-digital-research-with-aws/)
- [Enhance Population Health Systems Create unified FHIR repositories that aggregate clinical data from disparate sources, enabling comprehensive population-level disease surveillance and outbreak monitoring. Learn more](/blogs/publicsector/build-population-health-systems-to-enhance-healthcare-customer-experiences-on-aws/)
- [Unify Clinical Data Create comprehensive patient records that integrate data from multiple EHRs, departmental systems, and external sources to support quality initiatives, care coordination workflows and research initiatives. Learn more](/blogs/industries/ai-powered-patient-profiles-using-aws-healthlake-and-amazon-bedrock/)
- [Learn more about pricing Learn more](/healthlake/pricing/)
- [Start using AWS HealthLake in Console Get started](https://console.aws.amazon.com/healthlake/home)
- [See latest AWS HealthLake releases Learn more](https://docs.aws.amazon.com/healthlake/latest/devguide/releases.html)
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
- button: Get started with HealthLake
- button: Connect with a specialist
- button: Play:
- button: Previous slide
- button: Next slide
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

- Raw REA Evidence: `catalog/rea/evidence/amazon-healthlake.json`
- Evidence ID: `ev_6dd7c2f06b74701972d9b0afe8ae4e4911d8616571b1f27c778d95b2d02674f3`
- Accessibility outline: 17576 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
