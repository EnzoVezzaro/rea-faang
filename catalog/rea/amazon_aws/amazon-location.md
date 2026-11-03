# REA web-surface report — Amazon Location Service (`amazon-location`)

Browser capture of the public web surface of Amazon Location Service, recorded with REA.

| | |
|---|---|
| Product | Amazon Location Service (`amazon-location`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/location/ |
| Resolved URL | https://aws.amazon.com/location/ |
| Page title | Amazon Location Service |
| Captured | 2026-11-03T03:20:01.384Z |
| Status | captured |
| REA Evidence ID | `ev_62891d0a0a6b8512c38fb86ae4fed51e0ae4fcaa4da2f0d2b9b40ccfe6c4b9b2` |
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
    "url": "https://aws.amazon.com/location/"
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

- Amazon Location Service
- What is Amazon Location Service?
- Everything you need to build mapping applications
- Create captivating maps
- Key benefits
- Access high-quality geospatial data
- Integrate seamlessly
- Own your data
- Reduce operating costs
- Hyperlocal Mapping for Southeast Asia
- Data points
- <0
- 0%+
- 0M+
- Use cases
- Standardize addresses and clean-up your data
- Optimize your deliveries
- Visualize your data on interactive maps
- Track and trace your assets
- Customers optimizing their operation and productivity with Amazon Location Service
- Customer Stories and Case Studies
- Halodoc, Indonesian healthcare provider reduced geocoding costs by 88%, and enhanced security
- PostNL, e-commerce and postal provider, monitors roller cages and reduces operational cost
- Geo.me uses matrix routing for trucks and stored addresses to reduce cost by 90%
- Coolstays vacation rental site, saw a 28% improvement in tile load speed and a 50% cost reduction

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
- [Overview](/location/)
- [Getting Started](/location/getting-started/)
- [Pricing](/location/pricing/)
- [Front-End Web and Mobile](/products/frontend-web-mobile/)
- [High-quality data Access high-quality geospatial data Integrate reliable, complete, and up-to-date data into applications to make informed decisions, deliver precise insights, and optimize operations. Learn more](https://docs.aws.amazon.com/location/latest/developerguide/benefits.html)
- [AWS Integrate seamlessly Quickly deploy and accelerate application development with seamless integration with AWS services. Learn more](https://docs.aws.amazon.com/location/latest/developerguide/benefits.html)
- [Security, privacy, and safety Own your data Safeguard sensitive customer information, protect user privacy and reduce your overall security risks, through our shared security model. Learn more](https://docs.aws.amazon.com/location/latest/developerguide/benefits.html)
- [Cost-effective Reduce operating costs Optimize costs and maximize resource efficiency. Pay only for what you need, with no long-term contracts, hidden costs, or early termination fees. Learn more](/location/pricing/)
- [Southeast Asia Hyperlocal Mapping for Southeast Asia Access geocoding, address and POI search, routing, and map data from millions of daily deliveries across eight countries. Captures motorcycle routes, back alleys. Learn more about GrabMaps](/location/grabmaps/)
- [Command Alkon built and deployed tracking application in less than 2 weeks](/location/customers/)
- [Learn how Halodoc, a healthcare provider, improved performance and managed costs using Amazon Location Service.](/solutions/case-studies/halodoc-amazon-location-case-study/)
- [Learn how Geo.me serves around 120 million API calls with Amazon Location Service](/solutions/case-studies/geo-me-case-study/)
- [See our Customers](/location/customers/)
- [Missing alt text value Halodoc, Indonesian healthcare provider reduced geocoding costs by 88%, and enhanced security Read the case study](https://aws.amazon.com/solutions/case-studies/halodoc-amazon-location-case-study/)
- [Missing alt text value PostNL, e-commerce and postal provider, monitors roller cages and reduces operational cost Success story](https://www.youtube.com/watch?v=XEFu2T8lpfA)
- [Missing alt text value Geo.me uses matrix routing for trucks and stored addresses to reduce cost by 90% Read the case study](https://aws.amazon.com/solutions/case-studies/geo-me-case-study/)
- [Missing alt text value Coolstays vacation rental site, saw a 28% improvement in tile load speed and a 50% cost reduction Success story](https://aws.amazon.com/location/customers/)
- [Missing alt text value Jollibee Group has 17 brands and 6,300+ stores in 34 countries. Success story](https://aws.amazon.com/location/customers/)
- [Learn how Amazon Location service can help your business needs Learn more](/location/industry/)
- [FAQs Missing alt text value Get answer to your frequently asked questions Learn more](/location/faqs/)
- [Developer Tools Missing alt text value Try Amazon Location APIs in the API Playground Explore the API Playground](https://console.aws.amazon.com/location/api-playground)
- [Console Missing alt text value Start building on Amazon Location Service Explore](https://console.aws.amazon.com/location/home?refid=cr_card)
- [Getting started Missing alt text value Learn with a hands-on getting started guide and more Learn more](/location/getting-started/)
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
- button: Products submenu
- button: Industries submenu
- button: Resources submenu
- button: Get started
- button: Contact sales
- button: Play:
- button: Standardize addresses and clean-up your data
- button: Optimize your deliveries

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-location.json`
- Evidence ID: `ev_62891d0a0a6b8512c38fb86ae4fed51e0ae4fcaa4da2f0d2b9b40ccfe6c4b9b2`
- Accessibility outline: 17499 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
