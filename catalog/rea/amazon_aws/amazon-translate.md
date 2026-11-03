# REA web-surface report — Amazon Translate (`amazon-translate`)

Browser capture of the public web surface of Amazon Translate, recorded with REA.

| | |
|---|---|
| Product | Amazon Translate (`amazon-translate`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/translate/ |
| Resolved URL | https://aws.amazon.com/translate/ |
| Page title | Amazon Translate |
| Captured | 2026-11-03T03:54:41.235Z |
| Status | captured |
| REA Evidence ID | `ev_4793f28a1b8ad22e56ab68b66f7a405c2f10bbf8175d6a7234e8f964fa6a52ad` |
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
    "url": "https://aws.amazon.com/translate/"
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

- Amazon Translate
- What is Amazon Translate?
- Benefits of Amazon Translate
- High quality translations
- Batch and real-time translations
- Customization
- How it works
- Use cases
- Translate user-generated content
- Analyze online conversations in different languages
- Create cross-lingual communications between users
- Customers
- CaptionHub customers increased subtitling production time by up to 800%
- BMW Group improved translation time by over 75%
- Mercado Libre achieves accurate, automatic translations at scale
- How to get started
- Try Amazon Translate for free
- Learn which languages are supported
- Get started with Amazon Translate
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
- [Overview](/translate/)
- [Features](/translate/details/)
- [Pricing](/translate/pricing/)
- [Getting Started](/translate/getting-started/)
- [Resources](/translate/resources/)
- [FAQs](/translate/faqs/)
- [Customers](/translate/customers/)
- [Products](/products/)
- [Machine Learning](/machine-learning/)
- [Missing alt text value CaptionHub customers increased subtitling production time by up to 800% Read the case study](https://aws.amazon.com/blogs/machine-learning/subtitling-videos-accurately-and-easily-with-captionhub-and-aws/)
- [Missing alt text value BMW Group improved translation time by over 75% Read the case study](https://aws.amazon.com/solutions/case-studies/bmw-group-case-study-video/)
- [Missing alt text value Mercado Libre achieves accurate, automatic translations at scale Read the case study](https://aws.amazon.com/solutions/case-studies/mercado-libre-ai-ml/)
- [Try Amazon Translate for free Sign up](https://portal.aws.amazon.com/billing/signup?refid=em_127222&redirect_url=https%3A%2F%2Faws.amazon.com%2Fregistration-confirmation#/start/email)
- [Learn which languages are supported Read the features page](/translate/details/)
- [Get started with Amazon Translate Explore Amazon Translate](/translate/getting-started/)
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
- button: Get started with Amazon Translate
- button: Contact us
- button: Play:
- button: High quality translations
- button: Batch and real-time translations
- button: Customization
- button: Translate user-generated content
- button: Analyze online conversations in different languages

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-translate.json`
- Evidence ID: `ev_4793f28a1b8ad22e56ab68b66f7a405c2f10bbf8175d6a7234e8f964fa6a52ad`
- Accessibility outline: 11169 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
