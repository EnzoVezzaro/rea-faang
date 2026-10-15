# REA web-surface report — CloudFront (`aws-cloudfront`)

Browser capture of the public web surface of CloudFront, recorded with REA.

| | |
|---|---|
| Product | CloudFront (`aws-cloudfront`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/cloudfront/ |
| Resolved URL | https://aws.amazon.com/cloudfront/ |
| Page title | Amazon CloudFront - Content Delivery Network |
| Captured | 2026-10-14T03:55:24.801Z |
| Status | captured |
| REA Evidence ID | `ev_dab6b57cbfb0d0c84baa927e11bbd1e3cc1475e4a0ffa5063f7bb501f3037da3` |
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
    "url": "https://aws.amazon.com/cloudfront/"
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

- Amazon CloudFront - Content Delivery Network
- Benefits
- Reduce latency
- Improve security
- Cut costs
- Customize the code
- Use cases
- Deliver fast, secure websites
- Accelerate dynamic content delivery and APIs
- Stream live and on-demand video
- Distribute patches and updates
- Customers
- Learn how Atlassian increased security and performance using a suite of AWS services
- Learn how Fetch rewards implemented an ambitious live giveaway
- Zalando handles 100k transactions/second using Amazon CloudFront
- SuperCell delivers dynamic, low-latency games to 250 million monthly users using AWS Edge Services
- NBCUniversal facilitates the most live streamed Super Bowl using CloudFront
- Get started
- Find out how Amazon CloudFront works
- Get started with a hands-on tutorial
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
- [Overview](/cloudfront/?nc=sn&loc=1)
- [Pricing](/cloudfront/pricing/?nc=sn&loc=3)
- [Getting Started](/cloudfront/getting-started/?nc=sn&loc=4)
- [Media](/cloudfront/media/?nc=sn&loc=6)
- [Customers](/cloudfront/customers/)
- [Partners](/cloudfront/partners/)
- [Products](/products/)
- [Networking and Content Delivery](/products/networking/)
- [Missing alt text value Learn how Atlassian increased security and performance using a suite of AWS services Read the case study](https://aws.amazon.com/solutions/case-studies/atlassian/)
- [Learn how Fetch rewards implemented an ambitious live giveaway Read the case study](/solutions/case-studies/fetch-case-study/)
- [Missing alt text value Zalando handles 100k transactions/second using Amazon CloudFront Read the case study](https://aws.amazon.com/solutions/case-studies/zalando-case-study/)
- [Missing alt text value SuperCell delivers dynamic, low-latency games to 250 million monthly users using AWS Edge Services Read the case study](https://aws.amazon.com/solutions/case-studies/supercell-edge-services-case-study/)
- [Missing alt text value NBCUniversal facilitates the most live streamed Super Bowl using CloudFront Read the case study](https://aws.amazon.com/solutions/case-studies/nbc-universal-case-study/?did=cr_card&trk=cr_card)
- [Guide Find out how Amazon CloudFront works Read the guide](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/GettingStarted.html?pg=ln&sec=hs)
- [Tutorial Get started with a hands-on tutorial Start a tutorial now](https://docs.aws.amazon.com/hands-on/latest/deliver-content-faster/deliver-content-faster.html?pg=ln&sec=hs)
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
- button: Get started with CloudFront
- button: Reduce latency
- button: Improve security
- button: Cut costs
- button: Customize the code
- button: Deliver fast, secure websites

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

- Raw REA Evidence: `catalog/rea/evidence/aws-cloudfront.json`
- Evidence ID: `ev_dab6b57cbfb0d0c84baa927e11bbd1e3cc1475e4a0ffa5063f7bb501f3037da3`
- Accessibility outline: 11539 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
