# REA web-surface report — Amazon Polly (`amazon-polly`)

Browser capture of the public web surface of Amazon Polly, recorded with REA.

| | |
|---|---|
| Product | Amazon Polly (`amazon-polly`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/polly/ |
| Resolved URL | https://aws.amazon.com/polly/ |
| Page title | Amazon Polly - AI Voice Generator |
| Captured | 2026-11-03T03:41:01.957Z |
| Status | captured |
| REA Evidence ID | `ev_66cc563a8489bfa246371ec8f36bfb0859be845d197240f9dabe48105bc8f33f` |
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
    "url": "https://aws.amazon.com/polly/"
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

- Amazon Polly - AI Voice Generator
- What is Amazon Polly?
- Use cases
- Generate speech in dozens of languages.
- Engage customers with a natural-sounding voice
- Create audio for media at a fraction of the cost
- Capabilities
- Lifelike voices
- FAQs
- Is Amazon Polly text-to-speech free?
- How many voices does Amazon Polly have?
- What is the sample rate of Amazon Polly?
- Does Alexa use Amazon Polly?
- Is Amazon Polly open source?
- Customers use text-to-speech capabilities to transform business processes
- The Washington Post offers readers audio across platforms
- Trinity Audio embeds TTS players on its website
- USA Today Network efficiently delivers breaking news in audio content
- Next steps
- Get started with a free account
- Visit the pricing page
- Learn how to customize Amazon Polly
- Speak with an expert
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
- [Overview](/polly/?nc=sn&loc=1)
- [Features](/polly/features/?nc=sn&loc=3)
- [Pricing](/polly/pricing/?nc=sn&loc=4)
- [Getting Started](/polly/getting-started/?nc=sn&loc=5)
- [Resources](/polly/resources/?nc=sn&loc=6)
- [Customers](/polly/customers/?nc=sn&loc=7)
- [FAQs](/polly/faqs/?nc=sn&loc=8)
- [Products](/products/)
- [Artificial Intelligence](/ai/)
- [Missing alt text value The Washington Post offers readers audio across platforms Learn more](https://aws.amazon.com/blogs/machine-learning/the-washington-post-website-launches-audio-articles-voiced-by-amazon-polly/)
- [Missing alt text value Trinity Audio embeds TTS players on its website Learn more](https://aws.amazon.com/blogs/machine-learning/converting-your-content-to-audio-for-free-with-trinity-audio-wordpress-plugin/)
- [Missing alt text value USA Today Network efficiently delivers breaking news in audio content Learn more](https://aws.amazon.com/polly/customers/#USA_Today)
- [Service Get started with a free account Sign up](https://signin.aws.amazon.com/signin?redirect_uri=https%3A%2F%2Fus-east-1.console.aws.amazon.com%2Fpolly%2Fhome%3Fregion%3Dus-east-1%26skipRegion%3Dtrue%26state%3DhashArgs%2523%26isauthcode%3Dtrue&client_id=arn%3Aaws%3Aiam%3A%3A015428540659%3Auser%2Fpolly&forceMobileApp=0&code_challenge=uz6NCfLP7e1eVUNXGAJPu0-Uhs3elXlPpVGjGn0im6g&code_challenge_method=SHA-256)
- [Pricing Visit the pricing page Visit pricing](https://aws.amazon.com/)
- [Blog Learn how to customize Amazon Polly Read the blog](/blogs/machine-learning/create-audio-for-content-in-multiple-languages-with-the-same-tts-voice-persona-in-amazon-polly/)
- [Contact us Speak with an expert Contact us](/contact-us/)
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
- button: AI/ML Services submenu
- button: Create an AWS account
- button: Get started with Amazon Polly
- button: Generate speech in dozens of languages.
- button: Engage customers with a natural-sounding voice
- button: Create audio for media at a fraction of the cost
- button: Is Amazon Polly text-to-speech free?
- button: How many voices does Amazon Polly have?

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-polly.json`
- Evidence ID: `ev_66cc563a8489bfa246371ec8f36bfb0859be845d197240f9dabe48105bc8f33f`
- Accessibility outline: 13186 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
