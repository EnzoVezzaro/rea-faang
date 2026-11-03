# REA web-surface report — Amazon Interactive Video Service (`amazon-ivs`)

Browser capture of the public web surface of Amazon Interactive Video Service, recorded with REA.

| | |
|---|---|
| Product | Amazon Interactive Video Service (`amazon-ivs`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/ivs/ |
| Resolved URL | https://aws.amazon.com/ivs/ |
| Page title | Amazon Interactive Video Service |
| Captured | 2026-11-03T03:15:18.350Z |
| Status | captured |
| REA Evidence ID | `ev_79b345912eb9193a01e504b09e96ffa762cb8099c58d1c603eb90d1b229210cf` |
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
    "url": "https://aws.amazon.com/ivs/"
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

- Amazon Interactive Video Service
- What is Amazon IVS?
- Benefits
- Managed live streaming
- Global infrastructure
- Low latency streaming
- Interactive app integration
- Use cases
- Build communities
- Monetization
- Use polls
- Host collaborative live streams
- Easygo's Success with Amazon IVS
- Customers
- Whatnot bolsters real-time live stream resiliency with Amazon IVS
- Firework simplifies live ecommerce with Amazon IVS
- DeNA allows users to stream interactive and customizable live videos
- Rooter enhances live stream experiences with HD video and low latency
- Next Steps with Amazon IVS
- Explore Amazon IVS resources
- Get access to Amazon IVS documentation
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
- [Overview](/ivs/)
- [Pricing](/ivs/pricing/)
- [FAQs](/ivs/faqs/)
- [Products](/products/)
- [Media Services](/media-services/)
- [Whatnot Logo Whatnot bolsters real-time live stream resiliency with Amazon IVS Read the blog](https://aws.amazon.com/blogs/media/whatnot-bolsters-real-time-live-stream-resiliency-with-amazon-ivs/)
- [Missing alt text value Firework simplifies live ecommerce with Amazon IVS Read the blog](https://aws.amazon.com/blogs/industries/firework-simplifies-live-ecommerce-with-amazon-ivs/)
- [Missing alt text value DeNA allows users to stream interactive and customizable live videos Read the blog](https://aws.amazon.com/blogs/media/prmbp-dena-amazon-ivs-for-end-to-end-live-stream-management/)
- [Missing alt text value Rooter enhances live stream experiences with HD video and low latency Read the blog](https://aws.amazon.com/blogs/media/rooter-enhances-live-stream-experiences-with-amazon-ivs/)
- [Resources Explore Amazon IVS resources Learn more](/ivs/resources/)
- [Documentation Get access to Amazon IVS documentation Learn more](https://docs.aws.amazon.com/ivs/)
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
- button: Features submenu
- button: Resources submenu
- button: Get started with Amazon IVS
- button: Play:
- button: Managed live streaming
- button: Global infrastructure
- button: Low latency streaming
- button: Interactive app integration

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-ivs.json`
- Evidence ID: `ev_79b345912eb9193a01e504b09e96ffa762cb8099c58d1c603eb90d1b229210cf`
- Accessibility outline: 11534 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
