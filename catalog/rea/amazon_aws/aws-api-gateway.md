# REA web-surface report — API Gateway (`aws-api-gateway`)

Browser capture of the public web surface of API Gateway, recorded with REA.

| | |
|---|---|
| Product | API Gateway (`aws-api-gateway`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/api-gateway/ |
| Resolved URL | https://aws.amazon.com/api-gateway/ |
| Page title | Amazon API Gateway |
| Captured | 2026-10-13T18:58:31.982Z |
| Status | captured |
| REA Evidence ID | `ev_bf18af6d11361611756a7a4f6a3dfca6bcdbdcd26ad39c62b07aac884d165ee8` |
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
    "url": "https://aws.amazon.com/api-gateway/"
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

- Amazon API Gateway
- Why API Gateway?
- RESTful APIs
- WEBSOCKET APIs
- Benefits
- Efficient API development
- Performance at any scale
- Cost savings at scale
- Easy monitoring
- Flexible security controls
- RESTful API options
- WirelessCar
- Odyssey Interactive
- Betterfly
- TiVo
- Get started with API Gateway
- 1. Sign up for an AWS account
- 2. Learn with step-by-step tutorials
- 3. Start building with AWS
- Next steps
- Learn more about API Gateway
- Ready to build?
- Have more questions?
- Learn
- Resources

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
- [Overview](/api-gateway/)
- [Features](/api-gateway/features/)
- [Pricing](/api-gateway/pricing/)
- [Getting Started](/api-gateway/getting-started/)
- [Resources](/api-gateway/resources/)
- [FAQs](/api-gateway/faqs/)
- [Partners](/api-gateway/partners/)
- [Products](/products/)
- [Networking and Content Delivery](/products/networking/)
- [HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api.html)
- [REST APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-vs-rest.html)
- [WebSocket APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-overview.html)
- [Benefits 6](/api-gateway/#benefits--11s368y)
- [Read the Case Study](/solutions/case-studies/wirelesscar-lambda-snapstart-case-study/)
- [Read the Case Study](/solutions/case-studies/odyssey-case-study/)
- [Read the Case Study](/solutions/case-studies/betterfly-api-gateway-case-study/)
- [Read the Case Study](/solutions/case-studies/tivo-case-study/)
- [AWS Free Tier](/free/)
- [simple tutorials](https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started.html)
- [AWS Management Console](https://console.aws.amazon.com/apigateway/home?region=us-east-1#/welcome)
- [Features page Learn more about API Gateway Visit the features page](/api-gateway/features/)
- [Getting started Ready to build? Get started](https://console.aws.amazon.com/apigateway/home?region=us-east-1#/welcome)
- [Contact us Have more questions? Contact us](/contact-us/)
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
- button: Get started with API Gateway
- button: Open all
- button: Efficient API development
- button: Performance at any scale
- button: Cost savings at scale
- button: Easy monitoring
- button: Flexible security controls
- button: RESTful API options

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

- Raw REA Evidence: `catalog/rea/evidence/aws-api-gateway.json`
- Evidence ID: `ev_bf18af6d11361611756a7a4f6a3dfca6bcdbdcd26ad39c62b07aac884d165ee8`
- Accessibility outline: 14033 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
