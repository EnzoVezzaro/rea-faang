# REA web-surface report — Amazon Personalize (`amazon-personalize`)

Browser capture of the public web surface of Amazon Personalize, recorded with REA.

| | |
|---|---|
| Product | Amazon Personalize (`amazon-personalize`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/personalize/ |
| Resolved URL | https://aws.amazon.com/personalize/ |
| Page title | Amazon Personalize |
| Captured | 2026-11-03T03:37:47.249Z |
| Status | captured |
| REA Evidence ID | `ev_33d87d7c69f05e9863ddcd8f07374099338125488cbd9fa3cab4a4f408344409` |
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
    "url": "https://aws.amazon.com/personalize/"
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

- Amazon Personalize
- Why Amazon Personalize?
- Benefits of Amazon Personalize
- Deploy hyper-personalized user recommendations across websites, apps, and marketing channels at scale with ultra-low latency
- Set up and start using a fully-managed recommendation engine in hours instead of days
- Deliver intelligent recommendations that dynamically adapt in real-time with precision
- Improve customer segmentation and generate impactful, user-centric content with Amazon Personalize and Amazon Bedrock
- Use cases
- Hyper-personalize and rank streaming recommendations
- Highlight trending retail products in real-time
- Deliver popular and seasonally-relevant travel content across channels
- Recommend in-app related items, services, and content
- Customers
- Lotte Mart increased new product purchases by 1.7x
- Bundesliga increased customer session duration by 17%
- Calm increased daily app use by 3.4%
- Next steps
- Generate personalized movie recommendations with the Magic Movie Machine
- Personalize a video streaming app, create customized emails, and more
- Get started with Amazon Personalize in the AWS Management Console
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
- [Overview](/personalize/)
- [Features](/personalize/features/)
- [Pricing](/personalize/pricing/)
- [Resources](/personalize/resources/)
- [FAQs](/personalize/faqs/)
- [Customers](/personalize/customers/)
- [Partners](/personalize/partners/)
- [Products](/products/)
- [Machine Learning](/machine-learning/)
- [Missing alt text value Lotte Mart increased new product purchases by 1.7x Read the blog](https://aws.amazon.com/blogs/machine-learning/increasing-customer-engagement-and-loyalty-with-personalized-coupon-recommendations-using-amazon-personalize/)
- [Missing alt text value Bundesliga increased customer session duration by 17% Watch video](https://www.youtube.com/watch?v=QGSazkPoXSg)
- [Missing alt text value Calm increased daily app use by 3.4% Read the blog](https://aws.amazon.com/blogs/machine-learning/personalizing-wellness-recommendations-at-calm-with-amazon-personalize/)
- [Demo Generate personalized movie recommendations with the Magic Movie Machine Try a free demo](https://dohy8sp8i3s5p.cloudfront.net/)
- [Guide Personalize a video streaming app, create customized emails, and more Explore the developer guide](https://docs.aws.amazon.com/personalize/latest/dg/what-is-personalize.html)
- [Console Get started with Amazon Personalize in the AWS Management Console Start building now](https://signin.aws.amazon.com/signin?redirect_uri=https%3A%2F%2Fus-east-1.console.aws.amazon.com%2Fpersonalize%2Fhome%3Ffromtb%3Dtrue%26hashArgs%3D%2523%26isauthcode%3Dtrue%26region%3Dus-east-1%26skipRegion%3Dtrue%26state%3DhashArgsFromTB_us-east-1_acee8a47a7f765ed&client_id=arn%3Aaws%3Asignin%3A%3A%3Aconsole%2Fconcierge&forceMobileApp=0&code_challenge=HsDkKxVfUwby_8oCDPWksSkbrKwy7GYb7ZyvaOpj8GU&code_challenge_method=SHA-256)
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
- button: Get started with Amazon Personalize
- button: Play:
- button: Deploy hyper-personalized user recommendations across websites, apps, and marketing channels at scale with ultra-low latency
- button: Set up and start using a fully-managed recommendation engine in hours instead of days
- button: Deliver intelligent recommendations that dynamically adapt in real-time with precision
- button: Improve customer segmentation and generate impactful, user-centric content with Amazon Personalize and Amazon Bedrock
- button: Hyper-personalize and rank streaming recommendations
- button: Highlight trending retail products in real-time

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-personalize.json`
- Evidence ID: `ev_33d87d7c69f05e9863ddcd8f07374099338125488cbd9fa3cab4a4f408344409`
- Accessibility outline: 13038 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
