# REA web-surface report — Amazon FSx for NetApp ONTAP (`amazon-fsx-ontap`)

Browser capture of the public web surface of Amazon FSx for NetApp ONTAP, recorded with REA.

| | |
|---|---|
| Product | Amazon FSx for NetApp ONTAP (`amazon-fsx-ontap`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/fsx/netapp-ontap/ |
| Resolved URL | https://aws.amazon.com/fsx/netapp-ontap/ |
| Page title | Amazon FSx for NetApp ONTAP |
| Captured | 2026-11-04T02:43:49.724Z |
| Status | captured |
| REA Evidence ID | `ev_ac2f9501a6b33a1097c68e3cf7ca339d91c1138236596ac6a33b1dd7beaa74ea` |
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
    "url": "https://aws.amazon.com/fsx/netapp-ontap/"
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

- Amazon FSx for NetApp ONTAP
- Overview
- Benefits
- Migrate apps and data with ease
- Enable multiprotocol access
- Automate storage scaling and tiering
- Increase performance
- Access file data as if it were in an Amazon S3 bucket
- Use cases
- Migrate workloads to AWS seamlessly
- Build modern applications
- Modernize your data management
- Simplify business continuity
- Amazon FSx for NetApp ONTAP supports Amazon S3 Access
- Customers
- Shutterfly’s accelerated cloud transformation in migrating VMware workloads to AWS
- Saving 51% on costs using Amazon FSx for NetApp ONTAP with Banco Pan
- Discover how telecom provider Amdocs migrated a critical billing system to FSx for ONTAP
- eHealth NSW seamlessly migrated 1PB to FSx for ONTAP
- Arm Scales Performance for Chip Design Using Amazon FSx for NetApp ONTAP
- Get started with FSx for NetApp ONTAP
- Get started with a tutorial
- Ready to build?
- Learn more about pricing
- Connect with an expert

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
- [Overview](/fsx/netapp-ontap/)
- [Features](/fsx/netapp-ontap/features/)
- [Pricing](/fsx/netapp-ontap/pricing/)
- [Getting Started](/fsx/netapp-ontap/getting-started/)
- [FAQs](/fsx/netapp-ontap/faqs/)
- [Storage](/products/storage/)
- [Amazon FSx](/fsx/)
- [Amazon S3 Access Points](/s3/features/access-points/)
- [Missing alt text value Shutterfly’s accelerated cloud transformation in migrating VMware workloads to AWS Read the case study](/solutions/case-studies/shutterfly-migration-case-study/)
- [Missing alt text value Saving 51% on costs using Amazon FSx for NetApp ONTAP with Banco Pan Read the case study](/solutions/case-studies/banco-pan-case-study/)
- [Missing alt text value Discover how telecom provider Amdocs migrated a critical billing system to FSx for ONTAP Read the case study](/solutions/case-studies/amdocs-case-study/)
- [Missing alt text value eHealth NSW seamlessly migrated 1PB to FSx for ONTAP Watch the video](https://www.youtube.com/watch?v=ZJxDshx2JFk)
- [Missing alt text value Arm Scales Performance for Chip Design Using Amazon FSx for NetApp ONTAP Read the case study](https://aws.amazon.com/solutions/case-studies/arm-ltd-case-study/?did=cr_card&trk=cr_card)
- [Get started with a tutorial Learn how to get started in minutes](https://www.youtube.com/watch?v=JcKsOUYoJYA)
- [Console Ready to build? No upfront costs or licensing fees](https://console.aws.amazon.com/fsx)
- [Learn more about pricing With FSx for ONTAP, you pay only for what you use](/fsx/netapp-ontap/pricing/)
- [Contact us Connect with an expert From development to enterprise-level apps, get the right support at the right time](/contact-us/sales-support/)
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
- button: File Systems submenu
- button: Resources submenu
- button: Get started with FSx for ONTAP
- button: Learn about FSx for ONTAP ROI benefits
- button: Migrate apps and data with ease
- button: Enable multiprotocol access
- button: Automate storage scaling and tiering
- button: Increase performance

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-fsx-ontap.json`
- Evidence ID: `ev_ac2f9501a6b33a1097c68e3cf7ca339d91c1138236596ac6a33b1dd7beaa74ea`
- Accessibility outline: 13594 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
