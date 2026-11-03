# REA web-surface report — Amazon Textract (`amazon-textract`)

Browser capture of the public web surface of Amazon Textract, recorded with REA.

| | |
|---|---|
| Product | Amazon Textract (`amazon-textract`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/textract/ |
| Resolved URL | https://aws.amazon.com/textract/ |
| Page title | Amazon Textract |
| Captured | 2026-11-03T03:51:09.781Z |
| Status | captured |
| REA Evidence ID | `ev_a49c7a920690bac4042aa87eeee2bcdf1d9dad649a32c1012d7a2a1a97cc7cbe` |
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
    "url": "https://aws.amazon.com/textract/"
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

- Amazon Textract
- Why Amazon Textract?
- Benefits of Amazon Textract
- Drive efficiency and decision-making
- Key insights
- Easily scale
- Automate data processing
- Use cases
- Financial services
- Healthcare and life sciences
- Public sector
- Customers
- Learn how US Foods turns handwritten menus into usable data
- Discover how Anthem cut claims processing time by 80% using intelligent document extraction
- Learn how Black Knight drives efficiency and delivers cost savings
- Next steps
- Try the AWS Free Tier
- Explore Amazon Textract
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
- [Overview](/textract/)
- [Pricing](/textract/pricing/)
- [Resources](/textract/resources/)
- [FAQs](/textract/faqs/)
- [Customers](/textract/customers/)
- [Partners](/textract/partners/)
- [Products](/products/)
- [Machine Learning](/machine-learning/)
- [US Foods logo Learn how US Foods turns handwritten menus into usable data Learn more](/solutions/case-studies/us-foods-case-study/)
- [The Anthem company logo in blue text on a transparent background. Discover how Anthem cut claims processing time by 80% using intelligent document extraction Learn more](/solutions/case-studies/anthem/)
- [Missing alt text value Learn how Black Knight drives efficiency and delivers cost savings Learn more](https://aws.amazon.com/blogs/industries/black-knight-continued-innovation-with-document-extraction-using-aws-machine-learning-capabilities/)
- [Free tier Try the AWS Free Tier Sign up for a free account](/free/?pg=ln&sec=hs)
- [Console Explore Amazon Textract Start building](https://console.aws.amazon.com/textract/home)
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
- button: Features submenu
- button: Get started with Amazon Textract
- button: Contact sales
- button: Play:
- button: Drive efficiency and decision-making
- button: Key insights
- button: Easily scale
- button: Automate data processing

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-textract.json`
- Evidence ID: `ev_a49c7a920690bac4042aa87eeee2bcdf1d9dad649a32c1012d7a2a1a97cc7cbe`
- Accessibility outline: 11475 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
