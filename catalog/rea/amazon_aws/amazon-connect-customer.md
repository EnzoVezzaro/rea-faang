# REA web-surface report — Amazon Connect Customer (`amazon-connect-customer`)

Browser capture of the public web surface of Amazon Connect Customer, recorded with REA.

| | |
|---|---|
| Product | Amazon Connect Customer (`amazon-connect-customer`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/connect/ |
| Resolved URL | https://aws.amazon.com/products/connect/customer/ |
| Page title | AI-powered customer experience with Amazon Connect Customer |
| Captured | 2026-11-04T02:40:43.098Z |
| Status | captured |
| REA Evidence ID | `ev_b20e060f51363df971c7d52943fa7f8cd91626a0c1275a71149c285be923066b` |
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
    "url": "https://aws.amazon.com/connect/"
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

- AI-powered customer experience with Amazon Connect Customer
- What is Amazon Connect Customer?
- How much does Amazon Connect Customer cost?
- What problems does Amazon Connect Customer solve?
- Customers can’t get their issue resolved
- Routine and repetitive work keeps your team from the interactions that need them
- Managers struggle to get answers from their data
- How do I migrate from my current platform?
- 1. Design
- 2. Pre-Go-Live
- 3. Go-Live
- 4. Post-Go-Live
- Is Amazon Connect Customer secure and compliant?
- What makes Amazon Connect Customer different?
- Know your customer
- Design the experience
- Evolve with every conversation
- See how companies are innovating their CX
- TUI Cuts Customer Experience Fragmentation with Amazon Connect
- How are customers using Amazon Connect Customer?
- Modernizing a legacy contact center
- Scaling customer service without adding headcount
- Building regulated-industry CX solutions
- What support and reliability do I get?
- Support Plans

### Landmarks

- navigation: Global navigation
- main
- navigation: Breadcrumb
- region: AWS Information
- region: carousel
- contentinfo

### Links

- [Skip to main content link](#aws-page-content-main)
- [Contact us](/contact-us/?nc2=h_ut_cu)
- [AWS Marketplace](/marketplace?nc2=h_utmp)
- [Click here to return to Amazon Web Services homepage](/?nc2=h_home)
- [re:Invent](/events/reinvent/?nc2=h_l1_f)
- [Sign in to console](https://console.aws.amazon.com/console/home/?nc2=h_si&src=header-signin)
- [Overview](/products/connect/customer/)
- [Pricing](/products/connect/customer/pricing/)
- [Resources](/products/connect/customer/resources/)
- [Customers](/products/connect/customer/customers/)
- [Partners](/products/connect/customer/partners/)
- [Products](/products/)
- [Connect](/products/connect/)
- [Worldwide Agentic Contact Center as a Service Platforms](/resources/analyst-reports/idc/global-ar-report-ardm-26-worldwide-agentic-contact-center-as-a-service-platforms/?trk=2a573d2c-bba9-4079-8047-ce6d453e1890&sc_channel=el)
- [Refer to the pricing page for more details](/products/connect/customer/pricing/appendix/?refid=5a5e1287-c028-4184-8719-3a5a862834a2)
- [Learn about omnichannel](/products/connect/customer/omnichannel/)
- [Explore AI agents](/products/connect/customer/ai-agents/)
- [View full pricing](/products/connect/customer/pricing/appendix/)
- [Start now](https://signin.aws.amazon.com/signup?request_type=register&p=pdp&c=connect&s=1)
- [Explore curated agenda](https://catalog.awsevents.com/widget/awsevents/reinvent2026/1792787064555001EMPD/?sc_icampaign=event_connect-customer-reinvent_2026&sc_ichannel=ha&sc_iplace=banner&trk=fb2893e1-94d2-44de-9b25-3aa9fae3da07)
- [Read all customer testimonials](/products/connect/customer/customers/)
- [Missing alt text value TUI Cuts Customer Experience Fragmentation with Amazon Connect Learn more](https://www.youtube.com/watch?v=XAIBSj6cuHc)
- [Support Plans Choose the AWS Support tier that fits, from Developer to Business and Enterprise, with 24/7 access, technical account management, and guided onboarding at higher tiers. Learn more](/professional-services/)
- [Backed by an SLA Amazon Connect Customer provides a published service-level agreement, running on the same highly available, multi-Availability Zone AWS infrastructure that powers mission-critical workloads. Learn more](https://docs.aws.amazon.com/connect/latest/adminguide/regions.html)
- [Docs, community & partners Full developer and administrator documentation, AWS re:Post community, and a global partner network for implementation and managed services. Learn more](/products/connect/customer/partners/)
- [Ready to try Amazon Connect Customer yourself? Login or create an AWS account to get started. Get started](https://signin.aws.amazon.com/signin?redirect_uri=https%3A%2F%2Fportal.aws.amazon.com%2Fbilling%2Fsignup%2Fresume&client_id=signup&code_challenge_method=SHA-256&code_challenge=BHsEAzGFnFtOKuPhxAq3CDeI8AlDvCA4chCRzKCnjOI)
- [Prefer to speak with an AWS expert? Connect with an AWS expert to discover how Customer can transform your customer experience. Request a consultation](https://pages.awscloud.com/GLOBAL-field-GC-CXE-Amazon-Connect-Contact-Us.html)
- [Explore Connect Customer partners Explore Amazon Connect Customer partner offerings that meet your business needs. Learn more](/products/connect/customer/partners/)
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
- button: Use cases submenu
- button: Features submenu
- button: Solutions submenu
- button: Get started with Connect Customer
- button: Speak with an expert
- button: Play:
- button: Close
- button: Previous slide

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-connect-customer.json`
- Evidence ID: `ev_b20e060f51363df971c7d52943fa7f8cd91626a0c1275a71149c285be923066b`
- Accessibility outline: 22440 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
