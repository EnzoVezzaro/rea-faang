# REA web-surface report — AWS Lambda (`aws-lambda`)

Browser capture of the public web surface of AWS Lambda, recorded with REA.

| | |
|---|---|
| Product | AWS Lambda (`aws-lambda`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/lambda/ |
| Resolved URL | https://aws.amazon.com/lambda/ |
| Page title | AWS Lambda |
| Captured | 2026-10-13T18:58:44.865Z |
| Status | captured |
| REA Evidence ID | `ev_22aedf7d08e7a152deeaa8094bb9c5a6d77550205aae7a414ad1ae26c841ecbf` |
| REA provider | rea-playwright-browser-scenario v1 |
| Browser | Chromium 155.0.8059.40 |
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
    "url": "https://aws.amazon.com/lambda/"
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

- AWS Lambda
- AWS Lambda today
- 0.0M+
- 0T+
- 0
- One service. Multiple ways to run. Scales with your workload.
- Event Functions
- Web Functions
- MicroVMs
- What can you build with AWS Lambda?
- Build and scale any application without managing infrastructure.
- Web applications and server-side rendering
- Event-driven applications
- API backends and microservices
- Isolated code execution
- AI agent orchestration and durable workflows
- Real-time data processing
- Data analytics, notebooks, and interactive query platforms
- Using a coding agent?
- Who’s running on Lambda at scale?
- Scania
- Capital One
- ZigZa
- KTO.com
- LangGenius

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
- [Products](/products/)
- [Compute](/products/compute/)
- [Event Functions Run code at any scale with zero infrastructure management. 220+ native AWS integrations with pay-per-use billing. Lambda Functions](/lambda/lambda-functions/)
- [Web Functions Run standard HTTP servers directly, delivering fast, consistent responses through multi-concurrent execution and automated global distribution. Lambda Web Functions](/lambda/lambda-web-functions/)
- [MicroVMs Run user- or AI-generated code in isolated sandboxes with full state retention and lifecycle control. Launch, suspend, and resume on demand. Lambda MicroVMs](/lambda/lambda-microvms/)
- [Web applications and server-side rendering](#amsc1--3796w)
- [Event-driven applications](#amsc2--3796w)
- [API backends and microservices](#amsc3--3796w)
- [Isolated code execution](#amsc4--3796w)
- [AI agent orchestration and durable workflows](#amsc5--3796w)
- [Real-time data processing](#amsc6--3796w)
- [Data analytics, notebooks, and interactive query platforms](#amsc7--3796w)
- [Lambda Web Functions](https://link/)
- [Learn more](https://amazon.sharepoint.com/lambda/lambda-web-functions/)
- [Learn more](/lambda/lambda-functions/)
- [Lambda Web Functions](https://amazon.sharepoint.com/lambda/lambda-web-functions/)
- [per-tenant isolation](https://docs.aws.amazon.com/lambda/latest/dg/tenant-isolation.html)
- [MicroVM](http://docs.aws.amazon.com/lambda/latest/dg/microvms.html)
- [Learn more](/lambda/lambda-microvms/)
- [Lambda durable functions](/lambda/lambda-durable-functions/)
- [Learn more](/blogs/compute/building-fault-tolerant-long-running-application-with-aws-lambda-durable-functions/)
- [Lambda Managed Instances](/lambda/lambda-managed-instances/)
- [Learn more](/blogs/big-data/building-serverless-event-streaming-applications-with-amazon-msk-and-aws-lambda/)
- [Get started free](https://aws.amazon.com/products/developer-tools/agent-toolkit-for-aws/?sc_icampaign=aware_agent-toolkit_2026&sc_ichannel=ha&sc_iplace=banner&trk=51d778e4-7fc0-488a-8e05-7ce791578608)
- [Automotive Scania Scania uses AWS Lambda to scale its connected-vehicle solution with 80% lower latency, processing telemetry from trucks across a global hybrid network. Read the case study](/solutions/case-studies/scania-case-study/)
- [Financial Services Capital One Capital One improved cost efficiency, speed to market, and developer quality of life by adopting AWS Lambda and Amazon ECS across its enterprise platform. Read the case study](/solutions/case-studies/capital-one-lambda-ecs-case-study/)
- [Gaming ZigZa ZigZa scaled its flagship mobile games to 4 million concurrent players using AWS Lambda, achieving 70% lower infrastructure costs while handling 44% year-over-year growth. Read the case study](/solutions/case-studies/zigzagames-case-study/)
- [Media & Entertainment KTO.com KTO.com migrated to AWS Lambda and Amazon EC2 to handle a massive influx of traffic and payment transactions during the soccer World Cup without degrading customer experience. Read the case study](/solutions/case-studies/kto-case-study/)
- [Software & Internet LangGenius LangGenius uses AWS Lambda to run isolated, auto-scaling plugin sandboxes for its open-source LLM application development platform, enabling secure multi-tenant agent and RAG workflows. Read the case study](/solutions/case-studies/dify-lambda-case-study/)
- [Software & Internet CyberGRX CyberGRX reduced its ML-based cyber risk modeling runtime from 8 days to 1 hour using AWS Step Functions and AWS Lambda, while cutting compute costs by 90%. Read the case study](/solutions/case-studies/cybergrx-step-functions-case-study/)
- [How do I choose between Lambda Event Functions, Lambda Web Functions, and Lambda MicroVMs?](/lambda/#amsc1--uizb9d)
- [When should I use Lambda Managed Instances?](/lambda/#amsc2--uizb9d)
- [Lambda Event Functions](/lambda/lambda-functions/)
- [Lambda Web Functions](/lambda/lambda-web-functions/)

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
- button: Get started for free
- button: See the documentation
- button: Copy
- button: Close
- button: Yes, give us positive feedback
- button: No, give us constructive feedback
- button: Create an AWS account
- button: Back to top

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

- Raw REA Evidence: `catalog/rea/evidence/aws-lambda.json`
- Evidence ID: `ev_22aedf7d08e7a152deeaa8094bb9c5a6d77550205aae7a414ad1ae26c841ecbf`
- Accessibility outline: 23807 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
