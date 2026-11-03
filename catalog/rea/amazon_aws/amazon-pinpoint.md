# REA web-surface report — Amazon Pinpoint (`amazon-pinpoint`)

Browser capture of the public web surface of Amazon Pinpoint, recorded with REA.

| | |
|---|---|
| Product | Amazon Pinpoint (`amazon-pinpoint`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/pinpoint/ |
| Resolved URL | https://aws.amazon.com/pinpoint/ |
| Page title | Amazon Pinpoint |
| Captured | 2026-11-03T03:39:08.573Z |
| Status | captured |
| REA Evidence ID | `ev_c7d0e83eaff199338e08e244f077e5bf3ca3e6266b4715c12f92a7dfb309f55a` |
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
    "url": "https://aws.amazon.com/pinpoint/"
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

- Amazon Pinpoint
- Message targeting and personalization
- End of support notice
- Get started with Amazon Pinpoint
- Discover how to send email campaigns to a customer segment.
- Explore how to add personalized content to Amazon Pinpoint templates.
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
- [Overview](/pinpoint/?nc=sn&loc=1)
- [Features](/pinpoint/features/?nc=sn&loc=2)
- [Pricing](/pinpoint/pricing/?nc=sn&loc=3)
- [Getting Started](/pinpoint/getting-started/?nc=sn&loc=4)
- [Resources](/pinpoint/resources/?nc=sn&loc=5)
- [FAQs](/pinpoint/faqs/?nc=sn&loc=6)
- [Customers](/pinpoint/customers/?nc=sn&loc=7)
- [Partners](/pinpoint/partners/?nc=sn&loc=8)
- [Products](/products/)
- [Business Applications](/business-applications/)
- [Amazon Pinpoint end of support.](https://docs.aws.amazon.com/console/pinpoint/migration-guide)
- [Documentation Discover how to send email campaigns to a customer segment. Explore the Amazon Pinpoint tutorial](https://docs.aws.amazon.com/pinpoint/latest/userguide/gettingstarted.html)
- [Blog Explore how to add personalized content to Amazon Pinpoint templates. Read the blog post](/blogs/messaging-and-targeting/template-personalization-using-amazon-pinpoint/?pg=ln&p=pp&sec=bl)
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
- button: Sign up for Amazon Pinpoint
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

- Raw REA Evidence: `catalog/rea/evidence/amazon-pinpoint.json`
- Evidence ID: `ev_c7d0e83eaff199338e08e244f077e5bf3ca3e6266b4715c12f92a7dfb309f55a`
- Accessibility outline: 9690 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
