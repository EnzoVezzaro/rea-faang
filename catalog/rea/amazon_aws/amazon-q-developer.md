# REA web-surface report — Amazon Q Developer (`amazon-q-developer`)

Browser capture of the public web surface of Amazon Q Developer, recorded with REA.

| | |
|---|---|
| Product | Amazon Q Developer (`amazon-q-developer`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/q/developer/ |
| Resolved URL | https://aws.amazon.com/q/developer/ |
| Page title | Amazon Q Developer |
| Captured | 2026-11-03T03:42:38.416Z |
| Status | captured |
| REA Evidence ID | `ev_cbfaf40d7a5851cdf3fc1b808c2b65b58143d9b9bb302148f513ed0c94a8a1c0` |
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
    "url": "https://aws.amazon.com/q/developer/"
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

- Amazon Q Developer
- End of support notice
- Download Amazon Q Developer
- Get started for free
- JetBrains
- VS Code
- Visual Studio
- Command line
- Eclipse
- Build faster
- Amazon Q Developer makes the whole development lifecycle easier
- up to 0%
- 0%
- Operate on AWS
- Transform applications
- Upgrade from Java 8 to Java 17
- 0+
- 0 minutes
- 0 days
- Leverage data and AI
- How Amazon Q Developer accelerates development tasks
- Get expert assistance on AWS
- Amazon Q Developer pricing and the AWS Free Tier
- Customers empower development teams with Amazon Q Developer
- Reducing Development Time by 30% Using Amazon Q with nnamu

### Landmarks

- navigation: Global navigation
- main
- navigation: Breadcrumb
- region: AWS Information
- region: carousel
- contentinfo

### Links

- [Skip to main content link](#aws-page-content-main)
- [Contact us](/contact-us/?nc2=h_ut_cu)
- [AWS Marketplace](/marketplace?nc2=h_utmp)
- [Click here to return to Amazon Web Services homepage](/?nc2=h_home)
- [re:Invent](/events/reinvent/?nc2=h_l1_f)
- [Sign in to console](https://console.aws.amazon.com/console/home/?nc2=h_si&src=header-signin)
- [Overview](/q/developer/?p=qdev&z=subnav&loc=1)
- [Pricing](/q/developer/pricing/?p=qdev&z=subnav&loc=7)
- [Documentation](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/what-is.html?p=qdev&z=subnav&loc=8)
- [Get started](/q/developer/getting-started/?p=qdev&z=subnav&loc=13)
- [Generative AI](/ai/generative-ai/)
- [Amazon Q](/q/)
- [Amazon Q Developer Free Tier](/q/developer/pricing/)
- [IDE JetBrains Download now](https://plugins.jetbrains.com/plugin/24267-amazon-q/?b=jb&p=build&s=tiles)
- [IDE VS Code Download now](https://marketplace.visualstudio.com/items?itemName=AmazonWebServices.amazon-q-vscode)
- [IDE Visual Studio Download now](https://marketplace.visualstudio.com/items?itemName=AmazonWebServices.AWSToolkitforVisualStudio2022)
- [Command Line Command line Download now](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/command-line-installing.html?b=cli&p=overview&s=tiles)
- [IDE Eclipse Download now](https://marketplace.eclipse.org/content/amazon-q?b=e&p=build&s=tiles)
- [Safe Software quote](/q/developer/customers/)
- [Eviden quote](/q/customers/#:~:text=Officer%2C%20Virgin%20Pulse-,Amazon%20Q%20Developer%20customers,-Ancileo%20insurance%20software)
- [*as recently reported by BT Group](https://newsroom.bt.com/bt-group-advances-ai-enhanced-product-development-with-amazon-codewhisperer/)
- [AWS Free Tier](/free/)
- [Amazon Q Developer pricing](/q/developer/pricing/)
- [Missing alt text value Reducing Development Time by 30% Using Amazon Q with nnamu Read the case study](/solutions/case-studies/nnamu/)
- [Missing alt text value Boosting Customer Service and Developer Productivity Using Generative AI on AWS with BPC Read the case study](/solutions/case-studies/bpc/)
- [Missing alt text value Modernizing Applications in Minutes Using Amazon Q Developer with Novacomp Read the case study](/solutions/case-studies/novacomp-case-study/)
- [Missing alt text value Accenture Expedites Infrastructure Deployment with Amazon Q Developer Read the blog](/blogs/devops/accenture-expedites-infrastructure-deployment-with-amazon-q-developer/)
- [Missing alt text value How SmugMug Increased Data Modeling Productivity with Amazon Q Developer Read the blog](/blogs/devops/how-smugmug-increased-data-modeling-productivity-with-amazon-q-developer/)
- [Amazon Q Developer Pro](/q/developer/pricing/)
- [Announcing GitLab Duo with Amazon Q GA Learn more](/blogs/devops/announcing-general-availability-of-gitlab-duo-with-amazon-q/)
- [Getting started Get started on the AWS Free Tier Visit the getting started page](/q/developer/getting-started/)
- [Pricing Explore Amazon Q Developer pricing Visit the pricing page](/q/developer/pricing/)
- [What Is AWS?](/what-is-aws/?nc1=f_cc)
- [What Is Cloud Computing?](/what-is-cloud-computing/?nc1=f_cc)
- [What Is Agentic AI?](/what-is/agentic-ai/?nc1=f_cc)
- [Cloud Computing Concepts Hub](/what-is/?nc1=f_cc)
- [AWS Cloud Security](/security/?nc1=f_cc)
- [What's New](/new/?nc1=f_cc)
- [Blogs](/blogs/?nc1=f_cc)
- [Press Releases](https://press.aboutamazon.com/aws)

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
- button: Resources submenu
- button: Previous slide
- button: Next slide
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

- Raw REA Evidence: `catalog/rea/evidence/amazon-q-developer.json`
- Evidence ID: `ev_cbfaf40d7a5851cdf3fc1b808c2b65b58143d9b9bb302148f513ed0c94a8a1c0`
- Accessibility outline: 19461 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
