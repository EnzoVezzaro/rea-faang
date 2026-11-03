# REA web-surface report — Amazon Kinesis Data Streams (`amazon-kinesis-data-streams`)

Browser capture of the public web surface of Amazon Kinesis Data Streams, recorded with REA.

| | |
|---|---|
| Product | Amazon Kinesis Data Streams (`amazon-kinesis-data-streams`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/kinesis/data-streams/ |
| Resolved URL | https://aws.amazon.com/kinesis/data-streams/ |
| Page title | Amazon Kinesis Data Streams |
| Captured | 2026-11-03T03:17:18.523Z |
| Status | captured |
| REA Evidence ID | `ev_cd41a92ee907630491413f03a8007e33c764f2084df74be41178d0442c0cab2a` |
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
    "url": "https://aws.amazon.com/kinesis/data-streams/"
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

- Amazon Kinesis Data Streams
- What is Kinesis Data Streams?
- Benefits
- No servers to manage
- Automatic provisioning and scaling
- Don't worry about over-provisioning
- Built-in integrations
- Data delivery to streaming tables
- Use cases
- Stream log and event data
- Run real-time analytics
- Power event-driven applications
- Build real-time AI and ML applications
- Customers
- Disney+ uses Amazon Kinesis services to power a video platform for millions of customers
- Comcast builds high-performance data streaming with Amazon Kinesis Data Streams
- Thomson Reuters uses Amazon Kinesis to build a streaming data pipeline for faster insights and improved customer experience
- Hearst builds a centralized clickstream analytics solution using Amazon Kinesis that ingests 30 terabytes of data per day
- Get started with Amazon Kinesis Data Streams
- Review the developer guide
- Explore Kinesis Data Streams pricing
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
- [Overview](/kinesis/data-streams/?nc=sn&loc=1)
- [Features](/kinesis/data-streams/features/?nc=sn&loc=2)
- [Pricing](/kinesis/data-streams/pricing/?nc=sn&loc=3)
- [Getting Started](/kinesis/data-streams/getting-started/?nc=sn&loc=4)
- [Customers](/kinesis/data-streams/customers/)
- [Integrations](/kinesis/data-streams/integrations/)
- [Resources](/kinesis/data-streams/resources/?nc=sn&loc=5)
- [FAQs](/kinesis/data-streams/faqs/?nc=sn&loc=6)
- [Analytics](/analytics/)
- [Amazon Kinesis](/kinesis/)
- [Missing alt text value Disney+ uses Amazon Kinesis services to power a video platform for millions of customers Watch the video](https://www.youtube.com/watch?v=WAOrqsHpJuM)
- [Missing alt text value Comcast builds high-performance data streaming with Amazon Kinesis Data Streams Watch the video](https://www.youtube.com/watch?v=jKPlGznbfZ0)
- [Missing alt text value Thomson Reuters uses Amazon Kinesis to build a streaming data pipeline for faster insights and improved customer experience Read the case study](https://aws.amazon.com/solutions/case-studies/thomson-reuters/)
- [Missing alt text value Hearst builds a centralized clickstream analytics solution using Amazon Kinesis that ingests 30 terabytes of data per day Read the case study](https://aws.amazon.com/solutions/case-studies/hearst-data-analytics/)
- [Documentation Review the developer guide Read documentation](https://docs.aws.amazon.com/kinesis/latest/dev/introduction.html)
- [Pricing Explore Kinesis Data Streams pricing Learn more about pricing](/kinesis/data-streams/pricing/)
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
- button: Create an AWS Account
- button: Learn More
- button: No servers to manage
- button: Automatic provisioning and scaling
- button: Don't worry about over-provisioning
- button: Built-in integrations
- button: Data delivery to streaming tables
- button: Stream log and event data

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-kinesis-data-streams.json`
- Evidence ID: `ev_cd41a92ee907630491413f03a8007e33c764f2084df74be41178d0442c0cab2a`
- Accessibility outline: 11827 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
