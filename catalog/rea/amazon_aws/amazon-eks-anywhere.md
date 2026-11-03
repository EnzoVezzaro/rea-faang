# REA web-surface report — Amazon EKS Anywhere (`amazon-eks-anywhere`)

Browser capture of the public web surface of Amazon EKS Anywhere, recorded with REA.

| | |
|---|---|
| Product | Amazon EKS Anywhere (`amazon-eks-anywhere`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/eks/eks-anywhere/ |
| Resolved URL | https://aws.amazon.com/eks/eks-anywhere/ |
| Page title | Amazon EKS Anywhere |
| Captured | 2026-11-03T02:59:05.968Z |
| Status | captured |
| REA Evidence ID | `ev_2ed716d535f76381e4b46d625dde98dc2b612fe5218346804c1f8e4e4771c396` |
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
    "url": "https://aws.amazon.com/eks/eks-anywhere/"
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

- Amazon EKS Anywhere
- Use cases
- Deploy across hybrid environments
- Deploy high-performing large language models (LLMs)
- Maintain data sovereignty
- Customers
- Learn how Siam Commercial Bank accelerated implementation time for new workloads by 50 percent using Amazon EKS Anywhere.
- Learn how Leumi Group migrated 16 on-premises applications from its former Kubernetes solution to Amazon EKS Anywhere with no service interruptions.
- Learn how Japan’s leading mobile operator collaborated with AWS to drive end to end resiliency, flexibility, and energy efficiency of 5G network
- Next Steps
- Start creating clusters
- Learn more about pricing
- Get answers to common questions
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
- [Overview](/eks/eks-anywhere/)
- [Pricing](/eks/eks-anywhere/pricing/)
- [Getting Started](/eks/eks-anywhere/getting-started/)
- [FAQs](/eks/eks-anywhere/faqs/)
- [Partners](/eks/eks-anywhere/partners/)
- [Containers](/containers/)
- [Amazon EKS](/eks/)
- [Missing alt text value Learn how Siam Commercial Bank accelerated implementation time for new workloads by 50 percent using Amazon EKS Anywhere. Learn more](https://aws.amazon.com/solutions/case-studies/scb-case-study/)
- [Missing alt text value Learn how Leumi Group migrated 16 on-premises applications from its former Kubernetes solution to Amazon EKS Anywhere with no service interruptions. Learn more](https://aws.amazon.com/solutions/case-studies/bankleumi-eksa-case-study/)
- [Missing alt text value Learn how Japan’s leading mobile operator collaborated with AWS to drive end to end resiliency, flexibility, and energy efficiency of 5G network Read](https://press.aboutamazon.com/aws/2024/2/ntt-docomo-selects-aws-to-deploy-nationwide-5g-open-radio-access-network)
- [Start creating clusters Download the installer](https://anywhere.eks.amazonaws.com/docs/getting-started/install/)
- [Learn more about pricing Read the pricing page](/eks/eks-anywhere/pricing/?refid=f74f1554-9ea1-4a0d-8caf-8db86d6bd6b1~ha_awssm-11242_pac)
- [Get answers to common questions Read the FAQs](/eks/eks-anywhere/faqs/)
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
- button: Get started with Amazon EKS Anywhere
- button: Connect with an expert
- button: Deploy across hybrid environments
- button: Deploy high-performing large language models (LLMs)
- button: Maintain data sovereignty
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

- Raw REA Evidence: `catalog/rea/evidence/amazon-eks-anywhere.json`
- Evidence ID: `ev_2ed716d535f76381e4b46d625dde98dc2b612fe5218346804c1f8e4e4771c396`
- Accessibility outline: 10299 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
