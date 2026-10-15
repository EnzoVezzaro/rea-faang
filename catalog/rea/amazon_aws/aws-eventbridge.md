# REA web-surface report — EventBridge (`aws-eventbridge`)

Browser capture of the public web surface of EventBridge, recorded with REA.

| | |
|---|---|
| Product | EventBridge (`aws-eventbridge`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/eventbridge/ |
| Resolved URL | https://aws.amazon.com/eventbridge/ |
| Page title | Amazon EventBridge |
| Captured | 2026-10-14T03:56:01.338Z |
| Status | captured |
| REA Evidence ID | `ev_c7282e3a67f5e1e9e219de93abb487fe2d992024a764e3411c52402bc10647f1` |
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
    "url": "https://aws.amazon.com/eventbridge/"
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

- Amazon EventBridge
- What is Amazon EventBridge?
- Benefits of EventBridge
- Build event-driven applications with ease
- Share an event bus across your organization
- Order events where sequence matters
- Connect AWS services with less custom integration code
- Amazon EventBridge today
- 0.0M+
- 0.0T+
- Use cases
- Increase developer agility
- Monitor and audit applications
- Extend functionality with SaaS integrations
- Make business events available across the organization
- Customers
- KnowBe4 Seamlessly Scales to 22 Billion Events Using Amazon EventBridge
- Trustpilot Processes 20 Million Daily Events Using Amazon EventBridge Pipes
- Delivery Hero scales to handle 10M daily orders using Amazon EventBridge Scheduler
- Next steps
- Get started with agent skills for AWS Serverless
- Gain a deeper understanding of EventBridge
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
- [Overview](/eventbridge/)
- [Pricing](/eventbridge/pricing/)
- [Resources](/eventbridge/resources/)
- [FAQs](/eventbridge/faqs/)
- [Integrations](/eventbridge/integrations/)
- [Products](/products/)
- [Application Integration](/products/application-integration/)
- [KnowBe4 Seamlessly Scales to 22 Billion Events Using Amazon EventBridge](/solutions/case-studies/knowbe4-case-study/)
- [Trustpilot Processes 20 Million Daily Events Using Amazon EventBridge Pipes](/solutions/case-studies/trustpilot-case-study/)
- [Delivery Hero scales to handle 10M daily orders using Amazon EventBridge Scheduler](/solutions/case-studies/deliveryhero-sfn-case-study/)
- [Resources Get started with agent skills for AWS Serverless Learn more](https://github.com/aws/agent-toolkit-for-aws/tree/main/skills/core-skills/aws-serverless)
- [Documentation Gain a deeper understanding of EventBridge Learn more](https://docs.aws.amazon.com/eventbridge/index.html?pg=ln&sec=hs)
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
- button: Features submenu
- button: Sign up for EventBridge
- button: Hands-on Workshop
- button: Build event-driven applications with ease
- button: Share an event bus across your organization
- button: Order events where sequence matters
- button: Connect AWS services with less custom integration code
- button: Increase developer agility

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

- Raw REA Evidence: `catalog/rea/evidence/aws-eventbridge.json`
- Evidence ID: `ev_c7282e3a67f5e1e9e219de93abb487fe2d992024a764e3411c52402bc10647f1`
- Accessibility outline: 11245 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
