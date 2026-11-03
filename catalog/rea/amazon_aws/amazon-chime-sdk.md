# REA web-surface report — Amazon Chime SDK (`amazon-chime-sdk`)

Browser capture of the public web surface of Amazon Chime SDK, recorded with REA.

| | |
|---|---|
| Product | Amazon Chime SDK (`amazon-chime-sdk`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/chime/chime-sdk/ |
| Resolved URL | https://aws.amazon.com/chime/chime-sdk/ |
| Page title | Amazon Chime SDK |
| Captured | 2026-11-03T02:47:06.529Z |
| Status | captured |
| REA Evidence ID | `ev_54a94eb05497a2ba47b137075ed220e2702af00575e6e013265b340d110f65fa` |
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
    "url": "https://aws.amazon.com/chime/chime-sdk/"
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

- Amazon Chime SDK
- End of support notice
- Benefits
- Improve fidelity
- Innovate faster
- Secure customer communications
- Use cases
- Enable telemedicine
- Enhance remote learning experience
- Leverage multisite routing
- Customers
- Slack uses Amazon Chime SDK to power real-time communications including Huddles
- CareMonitor Scales Telehealth and Remote Patient Monitoring Platform with AWS
- TBS developed a convenient remote appearance tool using Amazon Chime SDK
- How to get started
- Find out how Amazon Chime SDK works
- Talk to an expert
- Explore Amazon Chime SDK pricing
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
- [Overview](/chime/chime-sdk/)
- [Features](/chime/chime-sdk/features/)
- [Pricing](/chime/chime-sdk/pricing/)
- [FAQs](/chime/chime-sdk/faq/)
- [Resources](/chime/chime-sdk/resources/)
- [Customers](/chime/chime-sdk/customers/)
- [Partners](/chime/chime-sdk/partners/)
- [AWS](/)
- [Business Applications](/business-applications/)
- [here](https://docs.aws.amazon.com/chime-sdk/latest/ag/sip-applications-maintenance-mode.html)
- [Missing alt text value Slack uses Amazon Chime SDK to power real-time communications including Huddles Read the blog](https://aws.amazon.com/blogs/business-productivity/customers-like-slack-choose-the-amazon-chime-sdk-for-real-time-communications/)
- [Missing alt text value CareMonitor Scales Telehealth and Remote Patient Monitoring Platform with AWS Read the case study](https://aws.amazon.com/solutions/case-studies/caremonitor/)
- [Missing alt text value TBS developed a convenient remote appearance tool using Amazon Chime SDK Read the case study](https://aws.amazon.com/solutions/case-studies/tbs/)
- [Find out how Amazon Chime SDK works Explore features](/chime/chime-sdk/features/)
- [Talk to an expert Contact us](https://pages.awscloud.com/GLOBAL-aware-GC-Amazon-Chime-SDK-2020-reg.html)
- [Explore Amazon Chime SDK pricing Learn more about pricing](/chime/chime-sdk/pricing/)
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
- button: Get started on GitHub
- button: Visit resources
- button: Improve fidelity
- button: Innovate faster
- button: Secure customer communications
- button: Enable telemedicine
- button: Enhance remote learning experience
- button: Leverage multisite routing

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-chime-sdk.json`
- Evidence ID: `ev_54a94eb05497a2ba47b137075ed220e2702af00575e6e013265b340d110f65fa`
- Accessibility outline: 10797 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
