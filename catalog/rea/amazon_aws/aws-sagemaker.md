# REA web-surface report — SageMaker (`aws-sagemaker`)

Browser capture of the public web surface of SageMaker, recorded with REA.

| | |
|---|---|
| Product | SageMaker (`aws-sagemaker`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/sagemaker/ |
| Resolved URL | https://aws.amazon.com/sagemaker/ |
| Page title | Amazon SageMaker |
| Captured | 2026-10-14T03:56:08.421Z |
| Status | captured |
| REA Evidence ID | `ev_622fb72a79d46d2d45f6b540a81b6028b1926469e60c53f4af6ddca3905970b1` |
| REA provider | rea-playwright-browser-scenario v1 |
| Browser | Chromium 155.0.8059.79 |
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
    "url": "https://aws.amazon.com/sagemaker/"
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

- Amazon SageMaker
- An integrated experience for analytics and AI
- AI and ML
- Unified Studio
- Catalog
- Lakehouse
- Overview
- Benefits
- Develop and scale AI models with SageMaker AI (formerly Amazon SageMaker)
- Build with all your tools for analytics and AI in SageMaker Unified Studio
- Reduce data silos and unify all your data with a lakehouse architecture
- Meet your enterprise security needs with end-to-end data and AI governance
- Meet the next generation of SageMaker
- Capabilities of SageMaker Unified Studio
- Model development
- Generative AI application development
- SQL analytics
- Data processing
- See the next generation of Amazon SageMaker in action
- Customers
- Toyota
- Next Steps
- Read the FAQs
- Learn more about the new serverless notebook with built-in AI agent
- Start building with SageMaker

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
- [Overview](/sagemaker/?nc=sn&loc=1)
- [AI](/sagemaker/ai/)
- [Catalog](/sagemaker/catalog/)
- [Customers](/sagemaker/customers/)
- [Lakehouse architecture](/sagemaker/lakehouse/)
- [Pricing](/sagemaker/pricing/)
- [FAQs](/sagemaker/faqs/)
- [Products](/products/)
- [Analytics](/big-data/datalakes-and-analytics/)
- [AI and ML Build, train, and deploy ML models—including FMs—for any use case with fully managed infrastructure, tools, and workflows. Learn more](/sagemaker/ai/)
- [Unified Studio Build with all your data and tools for analytics and AI in a single development environment with SageMaker Unified Studio Learn more](/sagemaker/unified-studio/)
- [Catalog Securely discover, govern, and collaborate on data and AI with SageMaker Catalog, built on Amazon DataZone Learn more](/sagemaker/data-ai-governance/)
- [Lakehouse Unify data access across Amazon S3 data lakes, Amazon Redshift data warehouses, and third-party and federated data sources with SageMaker Lakehouse Learn more](/sagemaker/lakehouse/)
- [SageMaker AI](/sagemaker/ai/)
- [HyperPod](/sagemaker/ai/hyperpod/)
- [JumpStart](/sagemaker/ai/jumpstart/)
- [MLOps](/sagemaker/ai/mlops/)
- [Amazon Q Developer](/q/developer/data/)
- [Register for the beta exam](https://aws.amazon.com/certification/certified-ai-business-strategist/?sc_icampaign=launch_ai-business-strategist_2026&sc_ichannel=ha&sc_iplace=banner&trk=86a1f59c-fa95-4b44-99f1-6fc5ba60886a)
- [Model development Build, train, and deploy ML and FMs with fully managed infrastructure, tools, and workflows with Amazon SageMaker AI Learn more](/sagemaker/ai/)
- [Generative AI application development Build and scale generative AI applications with Amazon Bedrock Learn more](/bedrock/unifiedstudio/)
- [SQL analytics Gain insights with Amazon Redshift, the most price-performant SQL engine Learn more](/redshift/)
- [Data processing Analyze, prepare, and integrate data for analytics and AI using open source frameworks on Amazon Athena, Amazon EMR, and AWS Glue Learn more](/sagemaker/data-processing/)
- [FAQs Read the FAQs Visit FAQs](/sagemaker/faqs/)
- [Blog Learn more about the new serverless notebook with built-in AI agent Read more](/blogs/aws/new-one-click-onboarding-and-notebooks-with-ai-agent-in-amazon-sagemaker-unified-studio/)
- [Console Start building with SageMaker Get started](https://console.aws.amazon.com/datazone)
- [Pricing Learn more about SageMaker pricing Learn more](/sagemaker/pricing/)
- [What Is AWS?](/what-is-aws/?nc1=f_cc)
- [What Is Cloud Computing?](/what-is-cloud-computing/?nc1=f_cc)
- [What Is Agentic AI?](/what-is/agentic-ai/?nc1=f_cc)
- [Cloud Computing Concepts Hub](/what-is/?nc1=f_cc)
- [AWS Cloud Security](/security/?nc1=f_cc)
- [What's New](/new/?nc1=f_cc)
- [Blogs](/blogs/?nc1=f_cc)

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
- button: Unified Studio submenu
- button: Get started with SageMaker
- button: Try a demo
- button: Play:
- button: Close
- button: Develop and scale AI models with SageMaker AI (formerly Amazon SageMaker)
- button: Build with all your tools for analytics and AI in SageMaker Unified Studio
- button: Reduce data silos and unify all your data with a lakehouse architecture

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

- Raw REA Evidence: `catalog/rea/evidence/aws-sagemaker.json`
- Evidence ID: `ev_622fb72a79d46d2d45f6b540a81b6028b1926469e60c53f4af6ddca3905970b1`
- Accessibility outline: 16544 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
