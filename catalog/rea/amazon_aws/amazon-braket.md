# REA web-surface report — Amazon Braket (`amazon-braket`)

Browser capture of the public web surface of Amazon Braket, recorded with REA.

| | |
|---|---|
| Product | Amazon Braket (`amazon-braket`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/braket/ |
| Resolved URL | https://aws.amazon.com/braket/ |
| Page title | Amazon Braket |
| Captured | 2026-11-03T02:45:28.596Z |
| Status | captured |
| REA Evidence ID | `ev_d964937e825c65fcd52e07391515d89abe2e5177cc49491758173b89be364b83` |
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
    "url": "https://aws.amazon.com/braket/"
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

- Amazon Braket
- Benefits of Braket
- Accelerate scientific discovery
- Trusted cloud
- Priority access
- Reserve dedicated capacity
- Use cases
- Research quantum computing algorithms
- Test different quantum hardware
- Build quantum software faster
- Develop open-source software
- Customers
- Pasqal built their QUBEC computational software to run chemistry simulations
- Aioi Insurance Services tests quantum neural network to assess risk
- Quantum hardware technologies
- Gate-based superconducting processors
- Gate-based ion-trap processors
- Neutral atom-based quantum processors
- Get started with Braket
- Get your Braket Digital Badge
- Learn more about Quantum Embark, our advisory program for customers new to quantum.
- Dive deeper into quantum computing with Braket Direct
- Check out our quantum blog channel
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
- [Overview](/braket/)
- [Customers](/braket/customers/)
- [Features](/braket/features/)
- [Pricing](/braket/pricing/)
- [FAQs](/braket/faqs/)
- [AWS](/)
- [Products](/products/)
- [Missing alt text value Pasqal built their QUBEC computational software to run chemistry simulations Read the case study](/blogs/quantum-computing/quantum-chemistry-with-qucos-qubec-on-amazon-braket/)
- [Missing alt text value Aioi Insurance Services tests quantum neural network to assess risk Read the case study](/blogs/quantum-computing/aioi-using-quantum-machine-learning-with-amazon-braket-to-create-a-binary-classifier/?pg=ln&sec=c)
- [Learn more about IQM gate-based superconducting processors](/braket/quantum-computers/iqm/)
- [Learn more about Rigetti gate-based superconducting processors](/braket/quantum-computers/rigetti/)
- [Learn more about AQT gate-based ion-trap processors](/braket/quantum-computers/aqt/)
- [Learn more about IonQ gate-based ion-trap processors](/braket/quantum-computers/ionq/)
- [Learn more about QuEra Rydberg atom-based processors](/braket/quantum-computers/quera/)
- [Get your Braket Digital Badge Get started](https://explore.skillbuilder.aws/learn/public/learning_plan/view/1986/amazon-braket-badge-knowledge-badge-readiness-path)
- [Learn more about Quantum Embark, our advisory program for customers new to quantum. Service Dashboard](https://us-west-2.signin.aws.amazon.com/oauth?client_id=arn%3Aaws%3Asignin%3A%3A%3Aconsole%2Faqx&code_challenge=bPpNbabTLvXWhO7h0fKl2mGhkdjWa0DiARsM81PZp9k&code_challenge_method=SHA-256&response_type=code&redirect_uri=https%3A%2F%2Fus-west-2.console.aws.amazon.com%2Fbraket%2Fhome%3FhashArgs%3D%2523%252Fdashboard%26isauthcode%3Dtrue%26oauthStart%3D1732141092241%26region%3Dus-west-2%26state%3DhashArgsFromTB_us-west-2_95a3eede8c42e1ba)
- [Dive deeper into quantum computing with Braket Direct Learn more](/braket/features/#Braket_Direct)
- [Check out our quantum blog channel Learn more](/blogs/quantum-computing/)
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
- button: Getting Started submenu
- button: Quantum Computers submenu
- button: Get started
- button: Accelerate scientific discovery
- button: Trusted cloud
- button: Priority access
- button: Reserve dedicated capacity
- button: Research quantum computing algorithms

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-braket.json`
- Evidence ID: `ev_d964937e825c65fcd52e07391515d89abe2e5177cc49491758173b89be364b83`
- Accessibility outline: 12592 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
