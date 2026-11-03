# REA web-surface report — Amazon Managed Blockchain (`amazon-managed-blockchain`)

Browser capture of the public web surface of Amazon Managed Blockchain, recorded with REA.

| | |
|---|---|
| Product | Amazon Managed Blockchain (`amazon-managed-blockchain`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/managed-blockchain/ |
| Resolved URL | https://aws.amazon.com/managed-blockchain/ |
| Page title | Amazon Managed Blockchain |
| Captured | 2026-11-03T03:23:24.261Z |
| Status | captured |
| REA Evidence ID | `ev_e6cd17d274bd942dbd54cb4a108f379f6b71f0dd300c36a9a88275c0e578ceb9` |
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
    "url": "https://aws.amazon.com/managed-blockchain/"
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

- Amazon Managed Blockchain
- End of support notice
- Benefits
- Real-time blockchain data
- Fully managed blockchain infrastructure
- Instant scalability with predictable pricing
- How it works
- Use cases
- Create token-gated experiences
- Build a digital asset wallet
- Get started
- Work with public blockchain data at scale
- Choose from serverless or dedicated offerings
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
- [Overview](/managed-blockchain/?nc=sn&loc=1)
- [Getting Started](/managed-blockchain/getting-started/?nc=sn&loc=4)
- [Pricing](/managed-blockchain/pricing/?nc=sn&loc=3)
- [Resources](/managed-blockchain/resources/?nc=sn&loc=5)
- [FAQs](/managed-blockchain/faqs/?nc=sn&loc=6)
- [Products](/products/)
- [Web3 on AWS](/web3/)
- [learn more here](https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/managed-blockchain-end-of-support.html)
- [AMB Access](/managed-blockchain/)
- [AMB Query.](/managed-blockchain/)
- [Learn how to retrieve blockchain data with AMB Query](/managed-blockchain/amb-query/)
- [Read about secure blockchain transaction signing architectures](/blogs/database/part-1-aws-nitro-enclaves-for-secure-blockchain-key-management/)
- [Getting started Work with public blockchain data at scale Learn more about AMB Query](/managed-blockchain/amb-query)
- [Getting started Choose from serverless or dedicated offerings Explore AMB Access](/managed-blockchain/amb-access)
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
- button: Features submenu
- button: Get started with Managed Blockchain
- button: Browse curated blockchain solutions
- button: Real-time blockchain data
- button: Fully managed blockchain infrastructure
- button: Instant scalability with predictable pricing
- button: Create an AWS account
- button: Back to top

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-managed-blockchain.json`
- Evidence ID: `ev_e6cd17d274bd942dbd54cb4a108f379f6b71f0dd300c36a9a88275c0e578ceb9`
- Accessibility outline: 11276 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
