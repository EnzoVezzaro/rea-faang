# REA web-surface report — Amazon EKS (`amazon-eks`)

Browser capture of the public web surface of Amazon EKS, recorded with REA.

| | |
|---|---|
| Product | Amazon EKS (`amazon-eks`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/eks/ |
| Resolved URL | https://aws.amazon.com/eks/ |
| Page title | Amazon Elastic Kubernetes Service |
| Captured | 2026-10-13T18:56:57.065Z |
| Status | captured |
| REA Evidence ID | `ev_680d5f654f1562712de2a078dad997a21e202faac0efe9d477ad4b96d663c730` |
| REA provider | rea-playwright-browser-scenario v1 |
| Browser | Chromium 155.0.8059.40 |
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
    "url": "https://aws.amazon.com/eks/"
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

- Amazon Elastic Kubernetes Service
- Benefits of Amazon EKS
- Accelerate innovation
- Optimize cost and performance
- Enhance availability, reliability, and security
- Run Kubernetes in any environment
- Why Amazon EKS?
- Use cases
- Deploy generative AI applications
- Build internal development platforms
- Deploy data platforms
- Deploy and run distributed hybrid applications
- Migrate and modernize applications
- Customers
- Sony Interactive Entertainment Unifies Platform on EKS, achieving 5x Faster Deployments & 60% Lower Operational Costs
- Accelerating Pipeline Build Time by 95% Using Amazon EKS with Jaguar Land Rover Automotive
- Riot Games Cuts $10M Annual Infrastructure Costs by Migrating to Amazon EKS
- Liquid Analytics Delivers Near Real-Time Analytics Powered by Amazon EKS and DuckDB
- Omi scales AI powered 3D rendering solution, reducing costs by 70% on Amazon EKS
- Next Steps
- Start building with the online workshop
- Connect with an expert
- Amazon EKS Best Practices Guide
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
- [Overview](/eks/)
- [Pricing](/eks/pricing/)
- [Getting Started](/eks/getting-started/)
- [Customers](/eks/customers/)
- [FAQs](/eks/faqs/)
- [Partners](/eks/partners/)
- [Products](/products/)
- [Containers](/containers/)
- [Amazon EKS Auto Mode](/eks/auto-mode/)
- [Missing alt text value Sony Interactive Entertainment Unifies Platform on EKS, achieving 5x Faster Deployments & 60% Lower Operational Costs Read the case study](/solutions/case-studies/sony-eks-case-study/)
- [Missing alt text value Accelerating Pipeline Build Time by 95% Using Amazon EKS with Jaguar Land Rover Automotive Read the case study](/solutions/case-studies/jlr-case-study/)
- [Missing alt text value Riot Games Cuts $10M Annual Infrastructure Costs by Migrating to Amazon EKS Read the case study](/solutions/case-studies/riot-games-case-study/)
- [Missing alt text value Liquid Analytics Delivers Near Real-Time Analytics Powered by Amazon EKS and DuckDB Read the case study](/solutions/case-studies/liquid-analytics-case-study/)
- [Missing alt text value Omi scales AI powered 3D rendering solution, reducing costs by 70% on Amazon EKS Read the case study](https://aws.amazon.com/solutions/case-studies/omi-eks-case-study/)
- [Workshop Start building with the online workshop Start the workshop](https://www.eksworkshop.com/)
- [Contact us Connect with an expert Explore support options](/contact-us/?pg=ln&sec=hs)
- [Documentation Amazon EKS Best Practices Guide View the documentation](https://docs.aws.amazon.com/eks/latest/best-practices/introduction.html)
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
- button: Features submenu
- button: Get started with Amazon EKS
- button: Register for Amazon EKS Workshop
- button: Accelerate innovation
- button: Optimize cost and performance
- button: Enhance availability, reliability, and security
- button: Run Kubernetes in any environment
- button: Play:

## Limitations (from REA)

- Artifact identity is unavailable for this observation.
- Event sequence records provider receipt order; simultaneous browser causality is not inferred.
- Network content is retained only when selected; response bytes are browser-decoded, not compressed wire bytes.
- Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage.
- Network content reads settle within 5 seconds each and never wait for unfinished responses or refetch them.
- Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality.
- Storage values are hashed only after declared-secret redaction.
- Browser host platform and architecture were not observed.

## Provenance

- Raw REA Evidence: `catalog/rea/evidence/amazon-eks.json`
- Evidence ID: `ev_680d5f654f1562712de2a078dad997a21e202faac0efe9d477ad4b96d663c730`
- Accessibility outline: 12866 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
