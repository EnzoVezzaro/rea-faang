# REA web-surface report — Amazon CodeGuru (`amazon-codeguru`)

Browser capture of the public web surface of Amazon CodeGuru, recorded with REA.

| | |
|---|---|
| Product | Amazon CodeGuru (`amazon-codeguru`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/codeguru/ |
| Resolved URL | https://aws.amazon.com/codeguru/profiler/ |
| Page title | Amazon CodeGuru Profiler |
| Captured | 2026-11-03T02:50:17.405Z |
| Status | captured |
| REA Evidence ID | `ev_65946f53555dc357023d19b2b50bb2473d53bf8ec5601974b064dcd91e242310` |
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
    "url": "https://aws.amazon.com/codeguru/"
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

- Amazon CodeGuru Profiler
- Benefits
- Find your most expensive lines of code to help reduce operational costs by up to 50%.
- Discover anomalies in code and troubleshoot performance issues with continuous monitoring.
- Analyze application runtime data to improve perfromance, latency, and throughput
- How it works
- Explore Amazon CodeGuru
- Use cases
- Improve runtime code quality
- Visualize your application heap
- Improve performance with flame graphs
- How to get started
- Explore Amazon CodeGuru Reviewer
- Explore Amazon CodeGuru Profiler
- Start building in the console
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
- [Overview](/codeguru/profiler/)
- [Features](/codeguru/profiler/features/)
- [Pricing](/codeguru/profiler/pricing/)
- [FAQs](/codeguru/profiler/faqs/)
- [Customers](/codeguru/profiler/customers/)
- [Resources](/codeguru/profiler/resources/)
- [Machine Learning](/machine-learning/)
- [AWS CodeGuru](/codeguru/profiler/)
- [Feature Find your most expensive lines of code to help reduce operational costs by up to 50%. Learn more](/blogs/aws/find-your-most-expensive-lines-of-code-amazon-codeguru-is-now-generally-available/)
- [Feature Discover anomalies in code and troubleshoot performance issues with continuous monitoring. Learn more](https://docs.aws.amazon.com/codeguru/latest/profiler-ug/working-with-recommendation-reports.html)
- [Feature Analyze application runtime data to improve perfromance, latency, and throughput Learn more](/codeguru/profiler/features/)
- [Learn More Improve runtime code quality Evaluate applications’ runtime data to optimize CPU and memory usage, and troubleshoot performance issues to lower latency and throughput. Learn more](https://www.youtube.com/watch?v=1pU4VddsBRw)
- [Learn More Visualize your application heap Consolidate views of the heap and identify what objects are using up memory so you can optimize applications in production. Learn more](https://docs.aws.amazon.com/codeguru/latest/profiler-ug/working-with-visualizations-heap-summary.html)
- [Learn More Improve performance with flame graphs Understand which code paths consume the most resources, verify applications are performing as expected, and uncover areas for further optimization. Learn more](/blogs/machine-learning/investigating-performance-issues-with-amazon-codeguru-profiler/)
- [Explore Amazon CodeGuru Reviewer Read the CodeGuru Reviewer documentation](https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/welcome.html)
- [Explore Amazon CodeGuru Profiler Explore resources](https://docs.aws.amazon.com/codeguru/latest/profiler-ug/what-is-codeguru-profiler.html)
- [Start building in the console Sign in](https://console.aws.amazon.com/healthlake/home)
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
- button: Get started with CodeGuru Profiler
- button: Zoom out
- button: Zoom in
- button: Full screen
- button: Play:
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

- Raw REA Evidence: `catalog/rea/evidence/amazon-codeguru.json`
- Evidence ID: `ev_65946f53555dc357023d19b2b50bb2473d53bf8ec5601974b064dcd91e242310`
- Accessibility outline: 12264 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
