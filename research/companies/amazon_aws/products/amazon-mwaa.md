---
schema_version: "1.0"
id: "amazon-mwaa"
company_id: "amazon_aws"
name: "Amazon Managed Workflows for Apache Airflow"
aliases: ["Amazon MWAA", "Managed Workflows for Apache Airflow"]
product_type: "data_platform"
categories: ["workflow-orchestration", "apache-airflow", "data-pipelines", "managed-service", "automation"]
lifecycle_status: "active"
official_url: "https://aws.amazon.com/managed-workflows-for-apache-airflow/"
official_docs_url: "https://docs.aws.amazon.com/mwaa/"
official_source_urls:
  - "https://aws.amazon.com/managed-workflows-for-apache-airflow/"
  - "https://docs.aws.amazon.com/mwaa/latest/userguide/what-is-mwaa.html"
  - "https://docs.aws.amazon.com/mwaa/latest/userguide/create-environment.html"
  - "https://docs.aws.amazon.com/mwaa/latest/userguide/airflow-versions.html"
research_status: "pending"
research_confidence: "unverified"
alternative_status: "partial"
alternative_coverage: "unknown"
opportunity_status: "research_further"
last_researched_at: null
last_verified_at: "2026-11-02T00:00:00Z"
next_review_at: null
research_version: 1
---

# 1. Executive summary
Amazon Managed Workflows for Apache Airflow (Amazon MWAA) is AWS's managed Apache Airflow service for building, scheduling and monitoring workflows without managing the underlying Airflow infrastructure.

# 2. Product identity and ownership
- **Official name:** Amazon Managed Workflows for Apache Airflow
- **Company:** Amazon Web Services
- **Underlying technology:** Apache Airflow
- **Lifecycle:** Active

# 3. Product capabilities
- Create managed Airflow environments and DAG workflows.
- Schedule, execute and monitor data pipelines.
- Autoscale worker capacity within configured limits.
- Integrate IAM, VPC, KMS and CloudWatch.
- Use AWS and community Airflow operators and sensors.

# 4. Technical architecture
Public documentation describes an environment containing Airflow schedulers, workers, webserver, metadata storage and VPC connectivity, with DAGs and dependencies in S3. Exact versions, executor behavior, quotas and upgrade semantics remain pending.

# 5. User workflows
Expected workflows include creating an environment, uploading DAGs and dependencies, configuring access, triggering and monitoring workflows, reading logs, upgrading Airflow and deleting an environment.

# 6. Pricing and access
MWAA pricing depends on environment duration and additional worker or scheduler capacity. Current pricing, quotas, regional availability and IAM prerequisites must be verified before implementation or cost claims.

# 7. API and integration surface
AWS MWAA APIs, CLI, SDKs, CloudFormation, S3 DAG storage, Airflow UI/API, CloudWatch logs/metrics and IAM/SAML access controls.

# 8. Existing open-source alternatives
Apache Airflow is the primary open-source foundation. Other orchestrators may cover subsets, but AWS-managed infrastructure, security, scaling and integrations are not assumed equivalent.

# 9. Alternative comparison
Self-hosted Airflow preserves the core workflow model but transfers environment, database, worker, networking, upgrades, security and observability operations to the operator.

# 10. Missing capabilities and opportunity analysis
Research must map environment lifecycle, supported Airflow versions, DAG deployment, plugins, Python dependencies, worker scaling, authentication, networking, logs, upgrades, quotas and recovery.

# 11. RAE implementation strategy
Use official AWS and Apache Airflow documentation and authorized public API observation. Capture workflow and environment contracts before selecting a foundation or implementing an independent equivalent.

# 12. Security, privacy, and compliance
Verify IAM roles, VPC/subnets, public/private webserver access, KMS, S3 bucket controls, secrets, logs, operator permissions and cross-account boundaries.

# 13. Evidence register
- https://aws.amazon.com/managed-workflows-for-apache-airflow/ — official overview.
- https://docs.aws.amazon.com/mwaa/latest/userguide/what-is-mwaa.html — features and architecture.
- https://docs.aws.amazon.com/mwaa/latest/userguide/create-environment.html — environment prerequisites.
- https://docs.aws.amazon.com/mwaa/latest/userguide/airflow-versions.html — supported versions.

# 14. Unknowns
- Complete API/CLI/SDK and Airflow UI/API matrix.
- Exact supported versions, quotas and worker semantics.
- Upgrade, recovery, plugin and dependency behavior.
- Verified independent foundation and migration coverage.

# 15. Research status
`pending`: identity and public capability surface are documented from official AWS sources, but full REA capture, detailed behavior, limits and alternatives remain unverified.
