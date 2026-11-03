# REA web-surface report — Bedrock (`aws-bedrock`)

Browser capture of the public web surface of Bedrock, recorded with REA.

| | |
|---|---|
| Product | Bedrock (`aws-bedrock`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/bedrock/ |
| Resolved URL | https://aws.amazon.com/bedrock/ |
| Page title | Amazon Bedrock |
| Captured | 2026-11-03T01:34:10.276Z |
| Status | captured |
| REA Evidence ID | `ev_a7a435adf240483c7b1c8a04629892cf35c2d2073541edd7d2db7c86c669f39c` |
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
    "url": "https://aws.amazon.com/bedrock/"
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

- Amazon Bedrock
- Drive real business impact
- Meet Amazon Bedrock
- Capabilities
- Choose the best model for your use case
- Accelerate agents to production with full control
- Do more with Amazon Bedrock
- Write new copy
- Create a virtual assistant
- Skip the reading
- Be the designer
- Streamline workflows
- Get deep insights
- Real results, real customers
- Robinhood
- Epsilon
- Try AWS AI for Free
- Next steps
- Amazon Bedrock customer success stories
- Amazon Bedrock documentation
- Explore common Amazon Bedrock use cases with a guided workshop
- View demos of Amazon Bedrock capabilities
- Learn
- Resources
- Developers

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
- [Overview](/bedrock/)
- [Getting Started](/bedrock/getting-started/)
- [Pricing](/bedrock/pricing/)
- [Resources](/bedrock/resources/)
- [Artificial Intelligence](/ai/)
- [Generative AI](/ai/generative-ai/)
- [Learn more about model choice](/bedrock/model-choice/)
- [Video Amazon Bedrock customer success stories Watch the videos](https://www.youtube.com/playlist?list=PLhr1KZpdzukdxGUL7B_Gv45OG4-NECKcS)
- [Documentation Amazon Bedrock documentation Read the documentation](https://docs.aws.amazon.com/bedrock/latest/userguide/getting-started.html)
- [Workshop Explore common Amazon Bedrock use cases with a guided workshop View workshop](https://catalog.us-east-1.prod.workshops.aws/workshops/a4bdb007-5600-4368-81c5-ff5b4154f518/en-US)
- [Demo View demos of Amazon Bedrock capabilities Explore the demo library](https://www.youtube.com/playlist?list=PLhr1KZpdzukfmv7jxvB0rL8SWoycA9TIM)
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
- button: Capabilities submenu
- button: Agents submenu
- button: More submenu
- button: Get started with Amazon Bedrock
- button: Latest Foundation Models
- button: Play:
- button: Zoom out
- button: Zoom in

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

- Raw REA Evidence: `catalog/rea/evidence/aws-bedrock.json`
- Evidence ID: `ev_a7a435adf240483c7b1c8a04629892cf35c2d2073541edd7d2db7c86c669f39c`
- Accessibility outline: 14687 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
