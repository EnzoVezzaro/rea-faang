# REA web-surface report — AWS Amplify (`aws-amplify`)

Browser capture of the public web surface of AWS Amplify, recorded with REA.

| | |
|---|---|
| Product | AWS Amplify (`aws-amplify`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/amplify/ |
| Resolved URL | https://aws.amazon.com/amplify/ |
| Page title | Fullstack TypeScript. Frontend DX for AWS. |
| Captured | 2026-11-03T04:02:51.731Z |
| Status | captured |
| REA Evidence ID | `ev_a01351435c51f0886456e2aec050fc798c887768590612345807ab84dd62c060` |
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
    "url": "https://aws.amazon.com/amplify/"
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

- Fullstack TypeScript. Frontend DX for AWS.
- Go from idea to app in hours
- Deploy web frameworks globally
- Go from frontend to fullstack, fast
- Commit, collaborate, and ship confidently
- Amplify features
- Data
- Auth
- Storage
- Functions
- Extensibility
- Mobile
- Works with frameworks and languages you love
- What can you build with Amplify?
- SSR web applications
- Single page web apps and static websites
- Native mobile applications
- Cross-platform applications
- How our customers are using Amplify
- Abit Agritech Builds an MVP in 6 Months Using AWS Amplify
- Amazon Music built extensible apps for millions of users
- Mediality Leverages Automation to Deliver Racing Data Faster on AWS
- How to get started
- Read the Amplify docs
- Connect with an expert

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
- [Overview](/amplify/?nc=sn&loc=1)
- [Pricing](/amplify/pricing/?nc=sn&loc=4)
- [Getting Started](/amplify/getting-started/?nc=sn&loc=5)
- [Customers](/amplify/customers/?nc=sn&loc=7)
- [Product](/products/)
- [Front-End Web and Mobile](/products/frontend-web-mobile/)
- [Data Build secure, real-time APIs backed by AWS databases quickly and easily. Connect your app to data](https://docs.amplify.aws/react/how-amplify-works/concepts/#data)
- [Auth Enable secure authentication flows and control access to data, files, and more. Enable authentication and authorization](https://docs.amplify.aws/react/how-amplify-works/concepts/#auth)
- [Storage Store and manage app content and data. Build a backend with storage](https://docs.amplify.aws/react/build-a-backend/storage/)
- [Functions Add functions and configure environment variables. Get started with functions](https://docs.amplify.aws/react/build-a-backend/functions/)
- [Extensibility Add, extend, and customize any AWS service by simply authoring CDK code. Learn about Amplify + CDK](https://docs.amplify.aws/react/how-amplify-works/concepts/#add-any-aws-resource)
- [Mobile Leverage a single backend across web and mobile apps. Learn about Amplify for Flutter](https://docs.amplify.aws/flutter/start/quickstart/)
- [Learn more](https://aws.amazon.com/)
- [Missing alt text value Abit Agritech Builds an MVP in 6 Months Using AWS Amplify Learn more](https://aws.amazon.com/solutions/case-studies/abit-amplify-case-study/)
- [Missing alt text value Amazon Music built extensible apps for millions of users Learn more](https://aws.amazon.com/amplify/customers/#Amazon_Music)
- [Missing alt text value Mediality Leverages Automation to Deliver Racing Data Faster on AWS Learn more](https://aws.amazon.com/solutions/case-studies/mediality-case-study/)
- [Read the Amplify docs Learn more](https://docs.amplify.aws/)
- [Connect with an expert Learn more](/contact-us/sales-support/)
- [Sign up for an AWS account Learn more](https://signin.aws.amazon.com/signup?request_type=builderId)
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
- button: Deploy an app
- button: Try a hands-on tutorial
- button: Play:
- button: SSR web applications
- button: Single page web apps and static websites
- button: Native mobile applications
- button: Cross-platform applications

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

- Raw REA Evidence: `catalog/rea/evidence/aws-amplify.json`
- Evidence ID: `ev_a01351435c51f0886456e2aec050fc798c887768590612345807ab84dd62c060`
- Accessibility outline: 14643 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
