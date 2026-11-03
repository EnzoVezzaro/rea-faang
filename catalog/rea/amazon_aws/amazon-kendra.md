# REA web-surface report — Amazon Kendra (`amazon-kendra`)

Browser capture of the public web surface of Amazon Kendra, recorded with REA.

| | |
|---|---|
| Product | Amazon Kendra (`amazon-kendra`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/kendra/ |
| Resolved URL | https://aws.amazon.com/kendra/ |
| Page title | Amazon Kendra |
| Captured | 2026-11-03T03:15:59.428Z |
| Status | captured |
| REA Evidence ID | `ev_49c121ac284af40c5819d7019140235001dff418a7e7bad53675fc4a40ea51b4` |
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
    "url": "https://aws.amazon.com/kendra/"
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

- Amazon Kendra
- End of Support Notice
- What is Amazon Kendra?
- Get started with generative AI and Amazon Kendra
- Unified search experience
- Highly accurate answers
- Customized search results
- Fast
- Why Amazon Kendra
- Use cases
- Enhancing employee productivity through intelligent search and generative AI
- Build chatbot for specific uses
- Integrate Search and Chat into SaaS Applications
- Customers
- The Wall Street Journal empowers readers with Talk2020 tool
- Gilead accelerates development of enterprise search tool using ML
- Magellan Rx Management reduces call time by 9–15 seconds
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
- [Overview](/kendra/)
- [Features](/kendra/features/)
- [Connectors](/kendra/connectors/)
- [Resources](/kendra/resources/)
- [FAQs](/kendra/faqs/)
- [Customers](/kendra/customers/)
- [Products](/products/)
- [Machine Learning](/machine-learning/)
- [learn more here.](https://docs.aws.amazon.com/kendra/latest/dg/kendra-availability-change.html)
- [Read the full study | Analyzing the Economic Benefits of Intelligent Search using Amazon Kendra](https://pages.awscloud.com/GLOBAL-ln-GC-400-SOL-ISER-Intelligent-Search-ESG-Report-learn.html)
- [Missing alt text value The Wall Street Journal empowers readers with Talk2020 tool Read the case study](/solutions/case-studies/the-wall-street-journal-case-study/)
- [Missing alt text value Gilead accelerates development of enterprise search tool using ML Read the case study](/solutions/case-studies/gilead-case-study/)
- [Missing alt text value Magellan Rx Management reduces call time by 9–15 seconds Read the case study](/kendra/customers/#Magellan_Rx)
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
- [.NET on AWS](https://builder.aws.com/content/2zSx6gTiseJULEcqQFXqm3pzJoW/aws-tools-and-resources-net?nc1=f_dr)
- [Python on AWS](https://builder.aws.com/content/2zYQkMbmrsxHPtT89s3teyKJh79/aws-tools-and-resources-python?nc1=f_dr)

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
- button: Pricing submenu
- button: Get started with Amazon Kendra
- button: Contact sales
- button: Unified search experience
- button: Highly accurate answers
- button: Customized search results
- button: Fast
- button: Enhancing employee productivity through intelligent search and generative AI

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-kendra.json`
- Evidence ID: `ev_49c121ac284af40c5819d7019140235001dff418a7e7bad53675fc4a40ea51b4`
- Accessibility outline: 12144 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
