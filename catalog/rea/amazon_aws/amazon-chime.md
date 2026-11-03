# REA web-surface report — Amazon Chime (`amazon-chime`)

Browser capture of the public web surface of Amazon Chime, recorded with REA.

| | |
|---|---|
| Product | Amazon Chime (`amazon-chime`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/chime/ |
| Resolved URL | https://aws.amazon.com/chime/getting-started/ |
| Page title | Getting started with Amazon Chime |
| Captured | 2026-11-03T02:46:10.188Z |
| Status | captured |
| REA Evidence ID | `ev_8c12a0c7cb2b1e1c54c4642b348cb6ed43268a0f135ace1c66a3bca31a94944f` |
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
    "url": "https://aws.amazon.com/chime/"
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

- Getting started with Amazon Chime
- End of support notice
- For quick help getting started with Amazon Chime
- For detailed help and training, please visit the help center
- For IT administrators, please see the Chime Documentation
- Amazon Chime app setup
- Adding contacts and chat
- Starting a video call
- Attending a meeting
- Joining a meeting without the Amazon Chime app
- Additional information
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
- [Overview](/chime/getting-started/?nc=sn&loc=1)
- [Features](/chime/features/)
- [Getting Started](/chime/getting-started/?nc=sn&loc=4)
- [FAQ](/chime/faq/)
- [Customers](/chime/getting-started/?nc=sn&loc=7)
- [Business Applications](/business-applications/)
- [Amazon Chime](/chime/getting-started/)
- [Amazon Chime SDK](/chime/chime-sdk/)
- [Help center](https://answers.chime.aws/)
- [Chime Documentation here](https://docs.aws.amazon.com/chime/index.html)
- [Download and install an Amazon Chime client](/chime/download-chime/)
- [Amazon Chime web app](https://app.chime.aws/)
- [Amazon Chime documentation](https://docs.aws.amazon.com/chime/latest/ug/chime-web-app.html)
- [Help center](http://answers.chime.aws/)
- [Documentation](/documentation/chime)
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
- button: Pricing submenu
- button: Resources submenu
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

- Raw REA Evidence: `catalog/rea/evidence/amazon-chime.json`
- Evidence ID: `ev_8c12a0c7cb2b1e1c54c4642b348cb6ed43268a0f135ace1c66a3bca31a94944f`
- Accessibility outline: 14245 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
