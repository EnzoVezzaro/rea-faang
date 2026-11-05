# REA web-surface report — Amazon Bio Discovery (`amazon-bio-discovery`)

Browser capture of the public web surface of Amazon Bio Discovery, recorded with REA.

| | |
|---|---|
| Product | Amazon Bio Discovery (`amazon-bio-discovery`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/biodiscovery/ |
| Resolved URL | https://aws.amazon.com/biodiscovery/ |
| Page title | Amazon Bio Discovery |
| Captured | 2026-11-04T02:39:42.695Z |
| Status | captured |
| REA Evidence ID | `ev_7dbc5ea5a0ae21f773d588cdced2f81f5745dbf3d982ec9350deb27f08ca0696` |
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
    "url": "https://aws.amazon.com/biodiscovery/"
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

- Amazon Bio Discovery
- What is Amazon Bio Discovery
- How it works
- Build
- Design
- Test
- Learn
- Validated with Memorial Sloan Kettering Cancer Center
- Built for How Scientists Actually Work
- 40+ AI Drug Discovery Models
- Wet-Lab Validated Benchmarks
- Bring and Train Your Own Model
- Integrated CRO Network
- Outcome-Based Pricing
- Data and IP Security
- Next Steps
- Sign up in minutes. No credit card required.
- Build your first molecule with our interactive guide
- See subscription tiers and Experiment Unit details
- Did you find what you were looking for today?
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
- [Agentic AI](/ai/agentic-ai/?nc2=h_l1_f)
- [Sign in to console](https://console.aws.amazon.com/console/home/?nc2=h_si&src=header-signin)
- [Overview](/biodiscovery/)
- [Pricing](/biodiscovery/pricing/)
- [Resources](/biodiscovery/resources/)
- [Start free trial >>](https://signup.aws.amazon.com/billing/signup/service?app=researchstudio&tier=free)
- [AWS](/)
- [Model Catalog](/biodiscovery/resources/)
- [Read the blog](https://www.amazon.science/news/aws-gray-lab-johns-hopkins-announce-groundbreaking-database-for-ai-ml-antibody-design)
- [Learn more](/biodiscovery/resources/)
- [See pricing](/biodiscovery/pricing/)
- [AWS Data security](/security/)
- [Free trial Sign up in minutes. No credit card required. Start Free Trial](https://signup.aws.amazon.com/billing/signup/service?app=researchstudio&tier=free)
- [Tutorial Build your first molecule with our interactive guide Learn by Doing](https://skillbuilder.aws/learn/BQKQUC8A8M)
- [Pricing See subscription tiers and Experiment Unit details Check Out Pricing](/biodiscovery/pricing/)
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
- button: Start free trial
- button: Open feedback
- button: Pause
- button: Play:
- button: Previous slide
- button: Next slide
- button: Yes, give us positive feedback
- button: No, give us constructive feedback
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

- Raw REA Evidence: `catalog/rea/evidence/amazon-bio-discovery.json`
- Evidence ID: `ev_7dbc5ea5a0ae21f773d588cdced2f81f5745dbf3d982ec9350deb27f08ca0696`
- Accessibility outline: 15576 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
