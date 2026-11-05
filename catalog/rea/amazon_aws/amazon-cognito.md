# REA web-surface report — Amazon Cognito (`amazon-cognito`)

Browser capture of the public web surface of Amazon Cognito, recorded with REA.

| | |
|---|---|
| Product | Amazon Cognito (`amazon-cognito`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/cognito/ |
| Resolved URL | https://aws.amazon.com/cognito/ |
| Page title | Amazon Cognito |
| Captured | 2026-11-04T02:40:29.641Z |
| Status | captured |
| REA Evidence ID | `ev_10d5e0c1db70290eed3b3249de7d6038ef07d15838dc201160384436902fbc6b` |
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
    "url": "https://aws.amazon.com/cognito/"
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

- Amazon Cognito
- Meet Amazon Cognito
- Benefits of Amazon Cognito
- Maintain unified authentication across human and machine identities
- Secure and scalable customer identity and access management (CIAM)
- Frictionless integration and customization to your application
- Advanced security features for sign up and sign in
- Use cases
- Engage customers with flexible, customized authentication
- Manage business-to-business (B2B) identities
- Secure machine-to-machine (M2M) authorization
- Authenticate microservices, applications, and workloads
- Comprehensive authentication availability
- Customers
- Wiz, trusted by over 40% of the Fortune 100, supports FedRAMP authorization and lowers their identity and access management costs by 70% by migrating to Amazon Cognito
- National Health Service - NHS Digital launches NHS login with Amazon Cognito to provide reliable, cost-efficient, scalable healthcare access for citizens in England.
- Purina, a Nestle company providing pet wellness and nutrition to over 2M pet parents, builds a strategic consumer IAM solution for an optimized user journey and achieves an 80% cost savings using Amazon Cognito.
- Neiman Marcus Increases New Application Time to Market by 50% and Reduces Development costs by 90% using AWS Amplify, AWS Lambda, and Amazon Cognito.
- Trend Micro protects Amazon Cognito’s API flows with Amazon CloudFront and AWS WAF
- Get started with Amazon Cognito
- Discover Amazon Cognito’s features and how they can supercharge your next app
- Video tutorials, workshops, and samples apps to help you get started
- Did you find what you were looking for today?
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
- [Overview](/cognito/)
- [Features](/cognito/details/)
- [Pricing](/cognito/pricing/)
- [Getting Started](/cognito/getting-started/)
- [FAQs](/cognito/faqs/)
- [Resources](/cognito/dev-resources/)
- [Customers](/cognito/customers/)
- [Products](/products/)
- [Security, Identity, and Compliance](/products/security/)
- [Amazon Bedrock AgentCore Identity](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/identity)
- [A completely blank white image with no visible content or details. Wiz, trusted by over 40% of the Fortune 100, supports FedRAMP authorization and lowers their identity and access management costs by 70% by migrating to Amazon Cognito Read the case study](https://aws.amazon.com/solutions/case-studies/wiz-amazon-cognito-case-study/)
- [Missing alt text value National Health Service - NHS Digital launches NHS login with Amazon Cognito to provide reliable, cost-efficient, scalable healthcare access for citizens in England. Read the blog post](https://aws.amazon.com/blogs/publicsector/nhs-digital-launches-nhs-login-aws/)
- [Missing alt text value Purina, a Nestle company providing pet wellness and nutrition to over 2M pet parents, builds a strategic consumer IAM solution for an optimized user journey and achieves an 80% cost savings using Amazon Cognito. Read the case study](https://aws.amazon.com/solutions/case-studies/purina-amazon-cognito-case-study/)
- [Missing alt text value Neiman Marcus Increases New Application Time to Market by 50% and Reduces Development costs by 90% using AWS Amplify, AWS Lambda, and Amazon Cognito. Read the case study](https://aws.amazon.com/solutions/case-studies/neimanmarcus-case-study/)
- [Missing alt text value Trend Micro protects Amazon Cognito’s API flows with Amazon CloudFront and AWS WAF Read the blog post](https://aws.amazon.com/blogs/architecture/enriching-amazon-cognito-features-with-an-amazon-api-gateway-proxy/)
- [Features page Discover Amazon Cognito’s features and how they can supercharge your next app Read the features page](/cognito/features/)
- [Guide Video tutorials, workshops, and samples apps to help you get started Explore the enablement materials and developer guides](/cognito/dev-resources/?whats-new-content.sort-by=item.additionalFields.postDateTime&whats-new-content.sort-%20order=desc&cognito-whats-new.sort-by=item.additionalFields.postDateTime&cognito-whats-new.sort-order=desc)
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
- button: Get started with Amazon Cognito
- button: Play:
- button: Maintain unified authentication across human and machine identities
- button: Secure and scalable customer identity and access management (CIAM)
- button: Frictionless integration and customization to your application
- button: Advanced security features for sign up and sign in
- button: Engage customers with flexible, customized authentication
- button: Manage business-to-business (B2B) identities

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-cognito.json`
- Evidence ID: `ev_10d5e0c1db70290eed3b3249de7d6038ef07d15838dc201160384436902fbc6b`
- Accessibility outline: 14798 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
