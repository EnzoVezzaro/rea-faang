# REA web-surface report — AWS CloudFormation (`aws-cloudformation`)

Browser capture of the public web surface of AWS CloudFormation, recorded with REA.

| | |
|---|---|
| Product | AWS CloudFormation (`aws-cloudformation`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/cloudformation/ |
| Resolved URL | https://aws.amazon.com/cloudformation/ |
| Page title | AWS CloudFormation |
| Captured | 2026-11-03T04:16:46.491Z |
| Status | captured |
| REA Evidence ID | `ev_a721a2e11a389f5b731889f7b2f859344ca90ef9bb8845b45d0fb46b8c3fbb63` |
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
    "url": "https://aws.amazon.com/cloudformation/"
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

- AWS CloudFormation
- Benefits
- Scale your infrastructure
- Extend and manage your infrastructure
- Automate resource management
- Use cases
- Manage infrastructure with DevOps
- Scale production stacks
- Share best practices
- Customers
- GoDaddy simplifies 100+ daily compute rotations
- Futbol Club Barcelona enables ‘one-click’ infrastructure deployment
- Expedia develops highly available apps at speed
- How to get started
- Try the AWS Free Tier
- Connect with an expert
- Find out how CloudFormation works
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
- [Overview](/cloudformation/)
- [Features](/cloudformation/features/)
- [Pricing](/cloudformation/pricing/)
- [Getting Started](/cloudformation/getting-started/)
- [Resources](/cloudformation/resources/)
- [Partners](/cloudformation/partners/)
- [FAQs](/cloudformation/faqs/)
- [Products](/products/)
- [Management and Governance](/products/management-and-governance/)
- [Missing alt text value GoDaddy simplifies 100+ daily compute rotations Watch the video](https://www.youtube.com/watch?v=bGBVPIpQMYk/?pg=ln&sec=c)
- [Missing alt text value Futbol Club Barcelona enables ‘one-click’ infrastructure deployment Read the case study](https://aws.amazon.com/solutions/case-studies/futbol-club-barcelona/?pg=ln&sec=c)
- [Missing alt text value Expedia develops highly available apps at speed Read the case study](https://aws.amazon.com/solutions/case-studies/expedia/?pg=ln&sec=c)
- [Free tier Try the AWS Free Tier Sign up for a free account](/free/?pg=ln&sec=hs)
- [Contact us Connect with an expert Explore support options](/contact-us/sales-support/?pg=ln&sec=hs)
- [Features page Find out how CloudFormation works Explore CloudFormation features](/cloudformation/features/?pg=ln&sec=hs)
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
- [SDKs & Tools](https://builder.aws.com/build/tools?nc1=f_dr)

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
- button: Get started with CloudFormation
- button: Scale your infrastructure
- button: Extend and manage your infrastructure
- button: Automate resource management
- button: Manage infrastructure with DevOps
- button: Scale production stacks
- button: Share best practices
- button: Yes, give us positive feedback

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

- Raw REA Evidence: `catalog/rea/evidence/aws-cloudformation.json`
- Evidence ID: `ev_a721a2e11a389f5b731889f7b2f859344ca90ef9bb8845b45d0fb46b8c3fbb63`
- Accessibility outline: 10595 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
