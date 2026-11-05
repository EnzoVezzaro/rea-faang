# REA web-surface report — Amazon EC2 Auto Scaling (`amazon-ec2-auto-scaling`)

Browser capture of the public web surface of Amazon EC2 Auto Scaling, recorded with REA.

| | |
|---|---|
| Product | Amazon EC2 Auto Scaling (`amazon-ec2-auto-scaling`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/ec2/autoscaling/ |
| Resolved URL | https://aws.amazon.com/ec2/autoscaling/ |
| Page title | Amazon EC2 Auto Scaling |
| Captured | 2026-11-04T02:41:48.566Z |
| Status | captured |
| REA Evidence ID | `ev_6fb50f784dc8263126335a891708000835ff53a8e2e2a9b50a6e83868f6673c0` |
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
    "url": "https://aws.amazon.com/ec2/autoscaling/"
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

- Amazon EC2 Auto Scaling
- Why Amazon EC2 Auto Scaling?
- Benefits
- Improve fault tolerance
- Increase availability
- Optimize workload performance and cost
- Reduce complexity
- Use cases
- Schedule application scaling
- Reduce manual provisioning
- Anticipate changes with machine learning
- Get started
- Explore Amazon EC2 Auto Scaling documentation
- Learn about automating management of EC2 instances
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
- [Overview](/ec2/autoscaling/)
- [Pricing](/ec2/autoscaling/pricing/)
- [Products](/products/)
- [Amazon EC2](/ec2/)
- [Documentation Explore Amazon EC2 Auto Scaling documentation Learn more](https://docs.aws.eu/autoscaling/ec2/userguide/get-started-with-ec2-auto-scaling.html)
- [Video Learn about automating management of EC2 instances Watch the video](https://www.youtube.com/watch?v=bSRTAMPqS3E)
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
- [Knowledge Center](https://repost.aws/knowledge-center?nc1=f_dr)

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
- button: Get started with Amazon EC2 Auto Scaling
- button: Improve fault tolerance
- button: Increase availability
- button: Optimize workload performance and cost
- button: Reduce complexity
- button: Schedule application scaling
- button: Reduce manual provisioning
- button: Anticipate changes with machine learning

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-ec2-auto-scaling.json`
- Evidence ID: `ev_6fb50f784dc8263126335a891708000835ff53a8e2e2a9b50a6e83868f6673c0`
- Accessibility outline: 9303 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
