# REA web-surface report — Amazon Fraud Detector (`amazon-fraud-detector`)

Browser capture of the public web surface of Amazon Fraud Detector, recorded with REA.

| | |
|---|---|
| Product | Amazon Fraud Detector (`amazon-fraud-detector`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/fraud-detector/ |
| Resolved URL | https://aws.amazon.com/fraud-detector/ |
| Page title | Amazon Fraud Detector |
| Captured | 2026-11-03T03:08:50.256Z |
| Status | captured |
| REA Evidence ID | `ev_6bc15c8abcc3fa54630c17765cfd15afe079727238861c87f30907eeb9813dde` |
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
    "url": "https://aws.amazon.com/fraud-detector/"
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

- Amazon Fraud Detector
- Availability change notice
- Benefits
- Build, deploy, and manage fraud detection models
- Gain insights from your historical data
- Start detecting fraud immediately
- Detect online fraud faster with machine learning
- Use cases
- Identify suspicious online payments
- Detect new account fraud
- Prevent trial and loyalty program abuse
- Improve account takeover detection
- Customers
- Truevo confidently uncovers fraud in real time
- GoDaddy identifies deceptive sign-ups immediately
- Duda easily boosted fraud detection accuracy with Amazon Fraud Detector
- Get started
- Try the AWS Free Tier
- View customer stories
- Discover product features
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
- [Overview](/fraud-detector/)
- [Features](/fraud-detector/features/)
- [Pricing](/fraud-detector/pricing/)
- [FAQs](/fraud-detector/faqs/)
- [Resources](/fraud-detector/resources/)
- [Customers](/fraud-detector/customers/)
- [Products](/products/)
- [Machine Learning](/machine-learning/)
- [Get started with Amazon Fraud Detector](https://signin.aws.amazon.com/signin?redirect_uri=https%3A%2F%2Fconsole.aws.amazon.com%2Ffrauddetector%2Fhome%3Fstate%3DhashArgs%2523%26isauthcode%3Dtrue&client_id=arn%3Aaws%3Aiam%3A%3A015428540659%3Auser%2Ffrauddetector&forceMobileApp=0&code_challenge=S0SmPwrWLpRe_GZwCrHfxQZwbBbgHA2bwuMIFF3bsLY&code_challenge_method=SHA-256&refid=ha_awssm-9045_tnc)
- [Missing alt text value Truevo confidently uncovers fraud in real time Learn more](https://aws.amazon.com/fraud-detector/customers/?pg=ln&sec=c#Truevo)
- [Missing alt text value GoDaddy identifies deceptive sign-ups immediately Learn more](https://aws.amazon.com/fraud-detector/customers/?pg=ln&sec=c#GoDaddy)
- [Missing alt text value Duda easily boosted fraud detection accuracy with Amazon Fraud Detector Learn more](https://aws.amazon.com/fraud-detector/customers/?pg=ln&sec=c#Duda)
- [Free tier Try the AWS Free Tier Sign up for a free account](/fraud-detector/pricing/?pg=ln&sec=hs#Free_trial)
- [Customer Story View customer stories Check out stories](/fraud-detector/customers/?pg=ln&sec=hs)
- [Features page Discover product features Explore Amazon Fraud Detector features](/fraud-detector/features/?pg=ln&sec=hs)
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
- button: Get started with Amazon Fraud Detector
- button: Build, deploy, and manage fraud detection models
- button: Gain insights from your historical data
- button: Start detecting fraud immediately
- button: Identify suspicious online payments
- button: Detect new account fraud
- button: Prevent trial and loyalty program abuse
- button: Improve account takeover detection

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-fraud-detector.json`
- Evidence ID: `ev_6bc15c8abcc3fa54630c17765cfd15afe079727238861c87f30907eeb9813dde`
- Accessibility outline: 11979 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
