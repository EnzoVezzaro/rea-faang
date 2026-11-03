# REA web-surface report — Amazon Managed Workflows for Apache Airflow (`amazon-mwaa`)

Browser capture of the public web surface of Amazon Managed Workflows for Apache Airflow, recorded with REA.

| | |
|---|---|
| Product | Amazon Managed Workflows for Apache Airflow (`amazon-mwaa`) |
| Company | Amazon Web Services |
| Target | https://aws.amazon.com/managed-workflows-for-apache-airflow/ |
| Resolved URL | https://aws.amazon.com/managed-workflows-for-apache-airflow/ |
| Page title | Amazon Managed Workflows for Apache Airflow (MWAA) |
| Captured | 2026-11-03T03:29:31.049Z |
| Status | captured |
| REA Evidence ID | `ev_b54001711aaad2f78ce79421a657a1222e26e511451d973f37370895c91c6611` |
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
    "url": "https://aws.amazon.com/managed-workflows-for-apache-airflow/"
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

- Amazon Managed Workflows for Apache Airflow (MWAA)
- Why Amazon MWAA?
- Amazon MWAA is accessible in the next generation of Amazon SageMaker
- Choose Your Deployment Model
- Serverless Workflows
- Traditional Managed Environment
- Benefits
- Flexible workflow orchestration at scale
- Workflow security and isolation
- Build, execute, and monitor workflows in Amazon SageMaker
- Use cases
- Data Engineering & ETL Pipelines
- Machine Learning Operations (MLOps)
- Business Intelligence & Analytics
- Enterprise Operations
- Get started with Amazon MWAA
- Learn about straightforward Apache Airflow deployment, automatic scaling, security, and more.
- Get instant access to the AWS Free Tier.
- Launch News
- Announcing Apache Airflow 3.0 support in Amazon Managed Workflows for Apache Airflow
- Amazon MWAA now provides option to update environments without interrupting task execution
- Amazon MWAA adds smaller environment size
- Amazon MWAA now simplifies interaction with the Airflow REST API
- Amazon MWAA now supports downgrading to minor Apache Airflow versions
- Blog posts

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
- [Overview](/managed-workflows-for-apache-airflow/)
- [Features](/managed-workflows-for-apache-airflow/features/)
- [Pricing](/managed-workflows-for-apache-airflow/pricing/)
- [Getting Started](/managed-workflows-for-apache-airflow/getting-started/)
- [Resources](/managed-workflows-for-apache-airflow/resources/)
- [FAQs](/managed-workflows-for-apache-airflow/faqs/)
- [Products](/products/)
- [Application Integration](/products/application-integration/)
- [Amazon SageMaker](/sagemaker/)
- [Learn more](/sagemaker/data-processing/)
- [Features page Learn about straightforward Apache Airflow deployment, automatic scaling, security, and more. Learn more](/managed-workflows-for-apache-airflow/features/)
- [Free tier Get instant access to the AWS Free Tier. Sign up](https://signin.aws.amazon.com/signup?request_type=builderId)
- [Announcing Apache Airflow 3.0 support in Amazon Managed Workflows for Apache Airflow Amazon Managed Workflows for Apache Airflow (MWAA) now supports Apache Airflow version 3.0, the latest major release of the workflow orchestration platform. This release enhances your ability to author, schedule, and monitor complex workflows with greater efficiency and control. Read the announcement](/about-aws/whats-new/2025/10/apache-airflow-3-amazon-mwaa/)
- [Amazon MWAA now provides option to update environments without interrupting task execution Amazon Managed Workflows for Apache Airflow (MWAA) now provides the option to update environments without interrupting running tasks on supported Apache Airflow versions (v2.4.3 or later). Read the announcement](/about-aws/whats-new/2025/05/amazon-mwaa-option-update-environments-without-interrupting-task-execution/)
- [Amazon MWAA adds smaller environment size Amazon Managed Workflows for Apache Airflow (MWAA) now offers a micro environment size, giving customers of the managed service the ability to create multiple, independent environments for development and data isolation at a lower cost. Read the announcement](/about-aws/whats-new/2024/11/amazon-mwaa-smaller-environment-size/)
- [Amazon MWAA now simplifies interaction with the Airflow REST API Amazon Managed Workflows for Apache Airflow (MWAA) now supports a simplified mechanism for interacting with the Apache Airflow REST API using AWS credentials. Read the announcement](/about-aws/whats-new/2024/10/amazon-mwaa-simplifies-interaction-airflow-rest-api/)
- [Amazon MWAA now supports downgrading to minor Apache Airflow versions You can now downgrade to minor Apache Airflow versions on Amazon Managed Workflows for Apache Airflow (MWAA). Read the announcement](/about-aws/whats-new/2025/08/amazon-mwaa-supports-downgrading/)
- [A personalized recommendation system on AWS Learn how AWS product recommendation engine processes customer signals, runs machine learning models, and deliver results to millions of web visitors. Read the blog](/blogs/big-data/building-a-scalable-personalized-recommendation-system-on-aws-from-batch-to-real-time/)
- [Introducing MWAA Serverless Learn about Amazon Managed Workflows for Apache Airflow (MWAA) Serverless, a new deployment option that eliminates operational overhead while optimizing costs for Apache Airflow environments. Read the blog](/blogs/big-data/introducing-amazon-mwaa-serverless/)
- [Build efficient data pipelines with dbt in Amazon Redshift Explore a streamlined, configuration-driven approach to orchestrating dbt Core jobs using Amazon Managed Workflows for Apache Airflow (Amazon MWAA) and Cosmos. Read the blog](/blogs/big-data/build-data-pipelines-with-dbt-in-amazon-redshift-using-amazon-mwaa-and-cosmos/)
- [How LaunchDarkly achieved efficiency and scale with Amazon MWAA Explore how LaunchDarkly scaled its analytics platform to 14,000 tasks per day, with minimal increase in cost. Read the blog](/blogs/big-data/how-launchdarkly-migrated-to-amazon-mwaa-to-achieve-efficiency-and-scale/)
- [Flutter UKI's journey to operating Airflow workloads at scale Walk through how Flutter UKI built a scalable and optimized architecture using Amazon Managed Workflows for Apache Airflow (Amazon MWAA). Read the blog](/blogs/big-data/how-flutter-uki-optimizes-data-pipelines-with-aws-managed-workflows-for-apache-airflow/)
- [Optimize cost and performance for Amazon MWAA Amazon Managed Workflows for Apache Airflow (Amazon MWAA) is a managed service for Apache Airflow that allows you to orchestrate data pipelines and workflows at scale. Read the blog](/blogs/big-data/optimize-cost-and-performance-for-amazon-mwaa/)
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
- button: Get started with Amazon MWAA
- button: Play:
- button: Flexible workflow orchestration at scale
- button: Workflow security and isolation
- button: Build, execute, and monitor workflows in Amazon SageMaker
- button: Data Engineering & ETL Pipelines
- button: Machine Learning Operations (MLOps)
- button: Business Intelligence & Analytics

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

- Raw REA Evidence: `catalog/rea/evidence/amazon-mwaa.json`
- Evidence ID: `ev_b54001711aaad2f78ce79421a657a1222e26e511451d973f37370895c91c6611`
- Accessibility outline: 18965 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
