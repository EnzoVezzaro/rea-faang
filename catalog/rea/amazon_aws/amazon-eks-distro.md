# REA web-surface report — Amazon EKS Distro (`amazon-eks-distro`)

Browser capture of the public web surface of Amazon EKS Distro, recorded with REA.

| | |
|---|---|
| Product | Amazon EKS Distro (`amazon-eks-distro`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/eks/eks-distro/ |
| Resolved URL | https://aws.amazon.com/eks/eks-distro/ |
| Page title | Amazon EKS Distro |
| Captured | 2026-11-04T02:42:17.766Z |
| Status | captured |
| REA Evidence ID | `ev_e4479cdc38514e4b067e13f860f6e7182d0308ae3c52b30ba1ab8e2ce0e46275` |
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
    "url": "https://aws.amazon.com/eks/eks-distro/"
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

- Amazon EKS Distro
- Benefits
- Perform reproducible builds
- Deploy EKS Distro
- Update your builds
- Use cases
- Deploy consistently on premises and in the cloud
- Modernize on-premises applications
- Use existing hardware investments
- How to get started
- Download Amazon EKS Distro
- Start building
- Get answers to your questions
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
- [Overview](/eks/eks-distro/)
- [FAQs](/eks/eks-distro/faqs/)
- [Partners](/eks/eks-distro/partners/)
- [Containers](/containers/)
- [EKS](/eks/)
- [Download Amazon EKS Distro Find everything you need to build the source components that make up EKS Distro. Download now »](https://github.com/aws/eks-distro)
- [Start building Get started with EKS Distro on GitHub. Learn more »](https://github.com/aws/eks-distro)
- [Get answers to your questions Visit the FAQ page to learn more about EKS Distro availability, cluster creation, and version support. Find out more about EKS Distro »](/eks/eks-distro/faqs/?pg=ln&sec=hs)
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
- button: Create an AWS Account
- button: Questions? Check out the FAQ page
- button: Perform reproducible builds
- button: Deploy EKS Distro
- button: Update your builds
- button: Deploy consistently on premises and in the cloud
- button: Modernize on-premises applications
- button: Use existing hardware investments

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-eks-distro.json`
- Evidence ID: `ev_e4479cdc38514e4b067e13f860f6e7182d0308ae3c52b30ba1ab8e2ce0e46275`
- Accessibility outline: 9242 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
