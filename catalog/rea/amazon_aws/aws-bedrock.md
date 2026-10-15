# REA web-surface report — Bedrock (`aws-bedrock`)

Browser capture of the public web surface of Bedrock, recorded with REA.

| | |
|---|---|
| Product | Bedrock (`aws-bedrock`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/bedrock/ |
| Resolved URL | https://aws.amazon.com/bedrock/ |
| Page title | Amazon Bedrock |
| Captured | 2026-10-14T03:55:49.703Z |
| Status | captured |
| REA Evidence ID | `ev_5aacc993231e3f21733b1c72825b7b8335a1640ae28a302b9083b8bdba54c5b8` |
| REA provider | rea-playwright-browser-scenario v1 |
| Browser | Chromium 155.0.8059.79 |
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
- [Explore AI for startups](https://aws.amazon.com/startups/ai-for-startups/?sc_icampaign=aware_startups-napkin_2026&sc_ichannel=ha&sc_iplace=banner&trk=22ab15bf-01fe-4c50-a3e6-74eaa3399151)
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
- Network content is retained only when selected; response bytes are browser-decoded, not compressed wire bytes.
- Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage.
- Network content reads settle within 5 seconds each and never wait for unfinished responses or refetch them.
- Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality.
- Storage values are hashed only after declared-secret redaction.
- Browser host platform and architecture were not observed.

## Provenance

- Raw REA Evidence: `catalog/rea/evidence/aws-bedrock.json`
- Evidence ID: `ev_5aacc993231e3f21733b1c72825b7b8335a1640ae28a302b9083b8bdba54c5b8`
- Accessibility outline: 15583 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
