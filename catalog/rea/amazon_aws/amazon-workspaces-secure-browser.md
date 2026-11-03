# REA web-surface report — Amazon WorkSpaces Secure Browser (`amazon-workspaces-secure-browser`)

Browser capture of the public web surface of Amazon WorkSpaces Secure Browser, recorded with REA.

| | |
|---|---|
| Product | Amazon WorkSpaces Secure Browser (`amazon-workspaces-secure-browser`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/workspaces/secure-browser/ |
| Resolved URL | https://aws.amazon.com/workspaces/secure-browser/ |
| Page title | Amazon WorkSpaces secure browser |
| Captured | 2026-11-03T04:01:32.383Z |
| Status | captured |
| REA Evidence ID | `ev_b840d776d86cb197f06d07406c7cacf2539b1c14a7bff53988654b922bd48ed0` |
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
    "url": "https://aws.amazon.com/workspaces/secure-browser/"
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

- Amazon WorkSpaces secure browser
- End of support notice
- Why WorkSpaces secure browser?
- Benefits
- Improve security controls and monitoring
- Protect data
- Simplify management
- Reduce costs
- Support bring-your-own-device (BYOD) initiatives
- Use Cases
- Empower customer support and back-office workers
- Enable bring-your-own-device (BYOD)
- Create secure data and analytics environments
- Isolate high-security networks form the public internet
- Optimize cost
- Get started with Amazon WorkSpaces
- Explore Amazon WorkSpaces pricing
- View the setup guide
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
- [Overview](/workspaces/)
- [Customers](/workspaces/customers/)
- [Getting Started](/workspaces/getting-started/)
- [WorkSpaces](/workspaces/)
- [here](https://docs.aws.amazon.com/workspaces-web/latest/adminguide/workspaces-secure-browser-maintenance-mode.html)
- [Explore Amazon WorkSpaces pricing Learn more about pricing](/workspaces/pricing/?pg=workspaces&sec=fm)
- [View the setup guide Check out the setup guide](https://docs.aws.amazon.com/workspaces/latest/adminguide/amazon-workspaces.html)
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
- [Java on AWS](https://builder.aws.com/content/2zZDrpGNFIOPAOT9PXifxnumRUC/aws-tools-and-resources-java?nc1=f_dr)
- [PHP on AWS](https://builder.aws.com/content/2zYR2daUzavSaUwnAI9X92Q1tfd/aws-tools-and-resources-php?nc1=f_dr)
- [JavaScript on AWS](https://builder.aws.com/content/2zYRIN2NxZTNLhwP9ZyaiJBEWrI/aws-tools-and-resources-javascript?nc1=f_dr)
- [Contact Us](/contact-us/?nc1=f_m)
- [File a Support Ticket](https://console.aws.amazon.com/support/home/?nc1=f_dr)
- [AWS re:Post](https://repost.aws/?nc1=f_dr)

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
- button: Pricing submenu
- button: Get started
- button: Improve security controls and monitoring
- button: Protect data
- button: Simplify management
- button: Reduce costs
- button: Support bring-your-own-device (BYOD) initiatives

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-workspaces-secure-browser.json`
- Evidence ID: `ev_b840d776d86cb197f06d07406c7cacf2539b1c14a7bff53988654b922bd48ed0`
- Accessibility outline: 10377 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
