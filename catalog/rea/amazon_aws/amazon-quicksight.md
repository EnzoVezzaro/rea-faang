# REA web-surface report — Amazon QuickSight (`amazon-quicksight`)

Browser capture of the public web surface of Amazon QuickSight, recorded with REA.

| | |
|---|---|
| Product | Amazon QuickSight (`amazon-quicksight`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/quicksight/ |
| Resolved URL | https://aws.amazon.com/quick/quicksight/ |
| Page title | Amazon Quick Sight |
| Captured | 2026-11-03T03:43:46.439Z |
| Status | captured |
| REA Evidence ID | `ev_3990c59665256c93d2fd29a188cf289c32cf447ba2ba6157450b13bf39dbf51b` |
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
    "url": "https://aws.amazon.com/quicksight/"
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

- Amazon Quick Sight
- Turn your data into action, faster
- Why you'll love Quick Sight
- Unified intelligence
- Insights for everyone
- Turn decisions to impact, faster
- Reimagine business intelligence
- Complete insights
- See what Quick Sight can do for you
- 0%
- up to 0%
- 0%+
- Join the 100,000+ customers that chose Quick Sight
- QuickSight and the NFL’s Next Gen Stats
- Docebo increases analytics adoption five times by embedding Amazon QuickSight
- Insightful.Mobi decreases costs and enhances dashboard performance using QuickSight
- Defontana provides advanced analytics to customers 2-3X faster by embedding QuickSight
- Get started with Quick Sight
- View documentation
- View the dashboard gallery
- Explore Quick Sight webinars
- Did you find what you were looking for today?
- Learn
- Resources
- Developers

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
- [Sign in to Quick](https://portal.aws.amazon.com/billing/signup/service?app=AmazonQuickSuite&tier=free&funnel=boost#/validation)
- [Overview](/quick/quicksight/)
- [Pricing](/quick/quicksight/pricing/)
- [Dashboard Gallery](/quick/quicksight/gallery/)
- [FAQs](/quick/quicksight/faqs/)
- [Agentic AI](/ai/agentic-ai/)
- [Amazon Quick](/quick/)
- [Read the Economic Validation report by TechTarget’s Enterprise Strategy Group](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/analytics/approved/images/ESG-Economic-Summary-Amazon-Quick-Sight-May-2025.pdf)
- [Missing alt text value QuickSight and the NFL’s Next Gen Stats](https://partners.wsj.com/aws/how-machine-learning-and-analytics-are-transforming-the-nfl-analytics/)
- [Missing alt text value Docebo increases analytics adoption five times by embedding Amazon QuickSight](https://aws.amazon.com/blogs/business-intelligence/docebo-increases-adoption-five-times-by-embedding-amazon-quicksight-on-their-docebo-platform/)
- [Missing alt text value Insightful.Mobi decreases costs and enhances dashboard performance using QuickSight](https://aws.amazon.com/solutions/case-studies/insightful-mobi-case-study/?did=cr_card&trk=cr_card)
- [Missing alt text value Defontana provides advanced analytics to customers 2-3X faster by embedding QuickSight](https://aws.amazon.com/es/blogs/business-intelligence/defontana-provides-business-administration-solutions-to-latin-american-customers-using-amazon-quicksight/)
- [Documentation View documentation Find the user guide, technical documentation on getting started, and API references. Documentation](https://docs.aws.amazon.com/quicksight/latest/user/getting-started.html)
- [Resources View the dashboard gallery Explore sample industry and domain-specific analytics built by Quick Sight customers and partners. View gallery](/quick/quicksight/gallery/)
- [Tutorial Explore Quick Sight webinars Level up your Quick Sight skills with workshops, how-to videos, and more. Learn more](https://community.amazonquicksight.com/c/learning-center/10/none)
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
- button: Try Quick for free
- button: Open feedback
- button: Features submenu
- button: Get started
- button: Connect with a specialist
- button: Play:
- button: Unified intelligence
- button: Insights for everyone
- button: Turn decisions to impact, faster
- button: Yes, give us positive feedback

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-quicksight.json`
- Evidence ID: `ev_3990c59665256c93d2fd29a188cf289c32cf447ba2ba6157450b13bf39dbf51b`
- Accessibility outline: 13223 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
