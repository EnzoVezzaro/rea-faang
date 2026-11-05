# REA web-surface report — Amazon Data Firehose (`amazon-data-firehose`)

Browser capture of the public web surface of Amazon Data Firehose, recorded with REA.

| | |
|---|---|
| Product | Amazon Data Firehose (`amazon-data-firehose`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/firehose/ |
| Resolved URL | https://aws.amazon.com/firehose/ |
| Page title | Amazon Data Firehose |
| Captured | 2026-11-04T02:41:12.280Z |
| Status | captured |
| REA Evidence ID | `ev_462e46e2efec8a6c3075bfb256ac5d62937c2f846378f86fed95fe3fed9f5a9c` |
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
    "url": "https://aws.amazon.com/firehose/"
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

- Amazon Data Firehose
- Benefits
- Streaming real-time data
- Automatically provision and scale
- Transform raw streaming data
- How it works
- Source
- Data Transformation (optional)
- Destination
- Use cases
- Stream into data lakes and warehouses
- Boost security
- Build ML streaming applications
- Customers
- 3Victors ingests over a billion travel searches daily
- Redfin improved SLAs for downstream services
- Repp Health tracks medical assets to within 10 centimeters
- Get started
- Review the developer guide
- Explore pricing
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
- [Overview](/firehose/)
- [Features](/firehose/features/)
- [Pricing](/firehose/pricing/)
- [Partners](/firehose/partners/)
- [Customers](/firehose/customers/)
- [Resources](/firehose/resources/)
- [FAQs](/firehose/faqs/)
- [Products](/products/)
- [Analytics](/big-data/datalakes-and-analytics/)
- [Missing alt text value 3Victors ingests over a billion travel searches daily Learn more](https://aws.amazon.com/solutions/case-studies/3victors-case-study/)
- [Missing alt text value Redfin improved SLAs for downstream services Learn more](https://aws.amazon.com/solutions/case-studies/redfin/)
- [Missing alt text value Repp Health tracks medical assets to within 10 centimeters Learn more](https://aws.amazon.com/solutions/case-studies/repp-health-case-study/)
- [Guide Review the developer guide Check out the guide](https://docs.aws.amazon.com/firehose/latest/dev/what-is-this-service.html)
- [Pricing Explore pricing Learn about pricing](/kinesis/data-firehose/pricing/?nc=sn&loc=3)
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
- button: Get started with Firehose
- button: Request more information
- button: Streaming real-time data
- button: Automatically provision and scale
- button: Transform raw streaming data
- button: Source
- button: Data Transformation (optional)
- button: Destination

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-data-firehose.json`
- Evidence ID: `ev_462e46e2efec8a6c3075bfb256ac5d62937c2f846378f86fed95fe3fed9f5a9c`
- Accessibility outline: 10693 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
