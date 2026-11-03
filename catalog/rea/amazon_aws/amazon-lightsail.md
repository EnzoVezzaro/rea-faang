# REA web-surface report — Amazon Lightsail (`amazon-lightsail`)

Browser capture of the public web surface of Amazon Lightsail, recorded with REA.

| | |
|---|---|
| Product | Amazon Lightsail (`amazon-lightsail`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/lightsail/ |
| Resolved URL | https://aws.amazon.com/lightsail/ |
| Page title | Amazon Lightsail |
| Captured | 2026-11-03T03:19:18.882Z |
| Status | captured |
| REA Evidence ID | `ev_1a6a5e4fe609d051053a34fea0300cf80d1cfd26e2719e9ea1979cef9173fd0b` |
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
    "url": "https://aws.amazon.com/lightsail/"
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

- Amazon Lightsail
- Why Amazon Lightsail?
- Benefits
- Create a website fast
- Scale easily
- Security and reliability
- Use cases
- Launch simple web applications
- Create custom websites
- Build small business applications
- Resell instance plans
- Customers
- Learn how Gourmeat used Lightsail to boost productivity by 40%
- Explore why Bugout.dev uses Lightsail to run dev/test environments
- Learn how Diversa reduced costs by migrating to Lightsail
- How to get started
- Try Lightsail for free
- Click-to-launch OS and apps
- Did you find what you were looking for today?
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
- [Overview](/lightsail/)
- [Pricing](/lightsail/pricing/)
- [Getting Started](/lightsail/getting-started/)
- [Resource Center](/lightsail/resources/)
- [FAQs](/lightsail/faq/)
- [Customers](/lightsail/customers/)
- [Partner with Lightsail](/lightsail/partner-with-lightsail/)
- [Products](/products/)
- [Compute](/products/compute/)
- [Learn more about Lightsail partners](/lightsail/partner-with-lightsail/)
- [Missing alt text value Learn how Gourmeat used Lightsail to boost productivity by 40% Read the case study](https://aws.amazon.com/solutions/case-studies/gourmeat-lightsail/?pg=ln&sec=c)
- [Missing alt text value Explore why Bugout.dev uses Lightsail to run dev/test environments Read the blog](https://aws.amazon.com/blogs/startups/migrating-web-services-from-amazon-lightsail-to-ec2/?pg=ln&sec=c)
- [Missing alt text value Learn how Diversa reduced costs by migrating to Lightsail Read the testimonial](https://aws.amazon.com/lightsail/customers/?pg=ln&sec=c#Diversa_Tecnologia)
- [Getting started Try Lightsail for free Learn more about pricing](/lightsail/pricing/?pg=ln&sec=hs)
- [Feature Click-to-launch OS and apps See all supported options](/lightsail/features/?opdp2=features/?pg=ln&sec=hs)
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
- button: Get started for free
- button: Create a website fast
- button: Scale easily
- button: Security and reliability
- button: Yes, give us positive feedback
- button: No, give us constructive feedback
- button: Create an AWS account

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-lightsail.json`
- Evidence ID: `ev_1a6a5e4fe609d051053a34fea0300cf80d1cfd26e2719e9ea1979cef9173fd0b`
- Accessibility outline: 11257 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
