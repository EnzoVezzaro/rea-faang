# REA web-surface report — Amazon EC2 (`amazon-ec2`)

Browser capture of the public web surface of Amazon EC2, recorded with REA.

| | |
|---|---|
| Product | Amazon EC2 (`amazon-ec2`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/ec2/ |
| Resolved URL | https://aws.amazon.com/ec2/ |
| Page title | Amazon EC2 |
| Captured | 2026-10-13T18:56:50.062Z |
| Status | captured |
| REA Evidence ID | `ev_7c39c7a2628d673f2a40902302a065147bfbb6941f8b73a0a5e3c528872a6207` |
| REA provider | rea-playwright-browser-scenario v1 |
| Browser | Chromium 155.0.8059.40 |
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
    "url": "https://aws.amazon.com/ec2/"
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

- Amazon EC2
- What is Amazon EC2?
- How much does Amazon EC2 cost?
- What problems does Amazon EC2 solve?
- Limited processor and instance choice
- Slow, costly capacity scaling
- High cost for compute-heavy workload
- Expensive Machine Learning infrastructure
- How does Amazon EC2 work?
- 1. Choose an instance type
- 2. Launch your instance
- 3. Select a purchase model
- 4. Scale capacity with demand
- What are the top Amazon EC2 use cases?
- Develop for Apple platforms
- Scale for High Performance Computing applications
- Modernize and migrate workloads
- Case studies
- How Toyota got a 66% reduction in financial book-closing times on Intel Xeon 6-powered instances on AWS
- Ready to scale infrastructure on demand?
- Access resizable compute capacity for virtually any workload.
- Resources
- Amazon EC2 user guide
- Find your Amazon EC2 instance
- See the latest updates

### Landmarks

- navigation: Global navigation
- main
- navigation: Breadcrumb
- region: AWS Information
- region: carousel
- contentinfo

### Links

- [Skip to main content link](#aws-page-content-main)
- [Contact us](/contact-us/?nc2=h_ut_cu)
- [AWS Marketplace](/marketplace?nc2=h_utmp)
- [Click here to return to Amazon Web Services homepage](/?nc2=h_home)
- [re:Invent](/events/reinvent/?nc2=h_l1_f)
- [Sign in to console](https://console.aws.amazon.com/console/home/?nc2=h_si&src=header-signin)
- [Overview](/ec2/)
- [Features](/ec2/features/)
- [Pricing](/ec2/pricing/)
- [FAQs](/ec2/faqs/)
- [Getting started](/ec2/getting-started/)
- [Products](/products/)
- [Compute](/products/compute/)
- [Learn more about the AWS Free Tier](/free/?p=pdp&c=ec2&s=3)
- [View detailed pricing](/ec2/pricing/?p=pdp&c=ec2&s=3)
- [instance type](/ec2/instance-explorer/)
- [AWS Nitro System](/ec2/nitro/?pg=ln&sec=be)
- [Develop for Apple platforms EC2 Mac instances let teams build, test, and sign macOS workloads on demand with pay-as-you-go pricing. Learn more](/ec2/instance-types/mac/)
- [Scale for High Performance Computing applications EC2 provides on-demand capacity to run high performance computing applications faster and more cost-effectively. Learn more](/hpc/)
- [Modernize and migrate workloads EC2 supports migration and modernization with AWS Migration Tools and Managed Services. Learn more](/migration-and-modernization/)
- [Missing alt text value How Toyota got a 66% reduction in financial book-closing times on Intel Xeon 6-powered instances on AWS Learn more](/solutions/case-studies/toyota-intel-case-study/)
- [Amazon EC2 user guide Documentation for launching instances, configuring security groups, attaching storage, and managing Auto Scaling policies. Learn more](https://docs.aws.amazon.com/ec2/)
- [Find your Amazon EC2 instance Amazon EC2 provides over 1,000 instance types optimized to fit different use cases. Learn more](/ec2/instance-types/)
- [See the latest updates Check out the latest blog posts on Amazon EC2 to get started. Learn more](/blogs/compute/)
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
- button: Instance types submenu
- button: Resources submenu
- button: Get started with Amazon EC2
- button: View user guide
- button: Play:
- button: Previous slide
- button: Next slide
- button: Who is Amazon EC2 best for?

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-ec2.json`
- Evidence ID: `ev_7c39c7a2628d673f2a40902302a065147bfbb6941f8b73a0a5e3c528872a6207`
- Accessibility outline: 15650 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
