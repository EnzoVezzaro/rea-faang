# REA web-surface report — AWS Auto Scaling (`aws-auto-scaling`)

Browser capture of the public web surface of AWS Auto Scaling, recorded with REA.

| | |
|---|---|
| Product | AWS Auto Scaling (`aws-auto-scaling`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/autoscaling/ |
| Resolved URL | https://aws.amazon.com/autoscaling/ |
| Page title | AWS Auto Scaling |
| Captured | 2026-11-03T04:12:37.509Z |
| Status | captured |
| REA Evidence ID | `ev_06ca78d42ccb70c6a2534a80de726f2271492ce3aa21baea39b5bb7ebcb506fa` |
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
    "url": "https://aws.amazon.com/autoscaling/"
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

- AWS Auto Scaling
- Why AWS Auto Scaling?
- Benefits
- Setup scaling quickly
- Make smart scaling decisions
- Automatically maintain performance
- Pay only for what you need
- Resources
- Introducing Predictive Scaling
- Amazon EC2 Auto Scaling has moved
- New AWS Auto Scaling–Unified Scaling for Your Cloud Applications
- Management Tools Blog
- Get started with AWS
- 1. Sign up for an AWS account
- 2. Learn with 10-minute Tutorials
- 3. Start building with AWS
- Next steps
- Learn more about AWS Auto Scaling
- Get started with AWS Auto Scaling
- Did you find what you were looking for today?
- Learn
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
- [Overview](/autoscaling/)
- [Pricing](/autoscaling/pricing/)
- [Products](/products/)
- [Management and Governance](/products/management-and-governance/)
- [Introducing Predictive Scaling Automatically scale your compute capacity in advance of traffic changes using ML technology. Read the Blog](/blogs/aws/new-predictive-scaling-for-ec2-powered-by-machine-learning/)
- [Amazon EC2 Auto Scaling has moved You have several options for scaling with AWS. Do you only need to manage Amazon EC2 instances? Visit the Amazon EC2 Auto Scaling page](/ec2/autoscaling/?sc_channel=ba&sc_campaign=autoscaling-ec2-button&sc_medium=button&sc_country=global&sc_geo=global&sc_outcome=aware)
- [New AWS Auto Scaling–Unified Scaling for Your Cloud Applications By Jeff Barr Read the blog](/blogs/aws/aws-auto-scaling-unified-scaling-for-your-cloud-applications/)
- [Management Tools Blog Visit us on the Management Tools Blog to read more on AWS Auto Scaling and other AWS Management Tools. Read the blog](/blogs/mt/)
- [AWS Free Tier](/free/)
- [simple tutorials](/getting-started/tutorials/)
- [AWS project](/getting-started/projects/)
- [Features page Learn more about AWS Auto Scaling Visit the features page](/autoscaling/features/)
- [Getting started Get started with AWS Auto Scaling Ready to build?](https://console.aws.amazon.com/awsautoscaling/)
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
- button: Get started with AWS Auto Scaling
- button: Setup scaling quickly
- button: Make smart scaling decisions
- button: Automatically maintain performance
- button: Pay only for what you need
- button: Yes, give us positive feedback
- button: No, give us constructive feedback
- button: Create an AWS account

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

- Raw REA Evidence: `catalog/rea/evidence/aws-auto-scaling.json`
- Evidence ID: `ev_06ca78d42ccb70c6a2534a80de726f2271492ce3aa21baea39b5bb7ebcb506fa`
- Accessibility outline: 12614 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
