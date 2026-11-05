# REA web-surface report — Amazon DevOps Guru (`amazon-devops-guru`)

Browser capture of the public web surface of Amazon DevOps Guru, recorded with REA.

| | |
|---|---|
| Product | Amazon DevOps Guru (`amazon-devops-guru`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/devops-guru/ |
| Resolved URL | https://aws.amazon.com/devops-guru/ |
| Page title | Amazon DevOps Guru |
| Captured | 2026-11-04T02:41:27.473Z |
| Status | captured |
| REA Evidence ID | `ev_6384ac0644bd205a58533ec4d85cbf3fc99fcf15f51d4d3258e9b432fffe85ef` |
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
    "url": "https://aws.amazon.com/devops-guru/"
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

- Amazon DevOps Guru
- End of support notice
- Benefits
- Detect abnormal application behavior
- Receive insights and contextual information
- Automatically analyze application metrics
- Use ML models to limit alarm noise
- Use cases
- Improve availability and performance of serverless applications
- Reduce recovery time for Amazon RDS databases
- Scale and maintain availability
- Proactively identify resource limits
- Customers
- Torchlight improves operational performance with an ML-powered solution
- TV measurement firm 605 manages alerts for tens of thousands of resources
- HCL Technologies saves time on issue resolution
- Thomson Reuters limits operational downtime with proactive monitoring
- How to get started
- Explore Amazon DevOps Guru features
- Start a free trial
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
- [Overview](/devops-guru/?nc=sn&loc=1)
- [Pricing](/devops-guru/pricing/?nc=sn&loc=3)
- [Resources](/devops-guru/resources/?nc=sn&loc=4)
- [FAQs](/devops-guru/faqs/?nc=sn&loc=5)
- [Customers](/devops-guru/customers/?nc=sn&loc=6)
- [Partners](/devops-guru/partners/?nc=sn&loc=7)
- [Products](/products/)
- [Machine Learning](/machine-learning/)
- [learn more here](https://docs.aws.amazon.com/devops-guru/latest/userguide/devops-guru-end-of-support.html)
- [Missing alt text value Torchlight improves operational performance with an ML-powered solution Watch the video](https://www.youtube.com/watch?v=GuoBBXGyHo0/?pg=ln&sec=c)
- [Missing alt text value TV measurement firm 605 manages alerts for tens of thousands of resources View the page](https://aws.amazon.com/devops-guru/customers/?pg=ln&sec=c#605)
- [Missing alt text value HCL Technologies saves time on issue resolution View the page](https://aws.amazon.com/devops-guru/customers/?pg=ln&sec=c#hcl)
- [Missing alt text value Thomson Reuters limits operational downtime with proactive monitoring View the page](https://aws.amazon.com/devops-guru/customers/?pg=ln&sec=c#tr)
- [Getting started Explore Amazon DevOps Guru features Get started](/devops-guru/features/?pg=ln&sec=hs)
- [Console Start a free trial Sign up](/free/?pg=ln&sec=hs)
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
- button: Features submenu
- button: Get started with DevOps Guru
- button: Talk with a DevOps Guru specialist
- button: Detect abnormal application behavior
- button: Receive insights and contextual information
- button: Automatically analyze application metrics
- button: Use ML models to limit alarm noise
- button: Improve availability and performance of serverless applications

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-devops-guru.json`
- Evidence ID: `ev_6384ac0644bd205a58533ec4d85cbf3fc99fcf15f51d4d3258e9b432fffe85ef`
- Accessibility outline: 11331 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
