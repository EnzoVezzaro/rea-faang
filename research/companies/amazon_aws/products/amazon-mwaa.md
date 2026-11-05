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
  - "https://docs.aws.amazon.com/mwaa/latest/userguide/using-startup-script.html"
  - "https://docs.aws.amazon.com/mwaa/latest/userguide/best-practices-dependencies.html"
  - "https://docs.aws.amazon.com/mwaa/latest/API/Welcome.html"
  - "https://docs.aws.amazon.com/mwaa/latest/userguide/get-started.html"
  - "https://airflow.apache.org/docs/apache-airflow/"
research_status: "researched"
research_confidence: "verified"
alternative_status: "partial"
alternative_coverage: "unknown"
opportunity_status: "research_further"
last_researched_at: "2026-11-04T00:00:00Z"
last_verified_at: "2026-11-04T00:00:00Z"
next_review_at: "2027-02-04T00:00:00Z"
research_version: 2
---

# 1. Executive summary
Amazon Managed Workflows for Apache Airflow (Amazon MWAA) is AWS's managed Apache Airflow service for developing, scheduling and monitoring DAG workflows without operating the underlying Airflow environment. It remains an AWS-managed distribution of Apache Airflow, not a separate workflow language.

# 2. Product identity and ownership
- **Official name:** Amazon Managed Workflows for Apache Airflow
- **Company:** Amazon Web Services
- **Underlying technology:** Apache Airflow
- **Lifecycle:** Active

# 3. Product capabilities
- Create managed Airflow environments and DAG workflows.
- Schedule, execute and monitor data pipelines.
- Scale schedulers, workers and webservers within documented environment limits.
- Store DAGs and associated files in S3 and install constrained Python dependencies, providers and plugins.
- Integrate IAM, VPC, KMS, CloudWatch and AWS service providers.

# 4. Technical architecture
Public documentation describes an environment containing Airflow schedulers, workers, webservers, metadata storage and VPC connectivity, with DAGs and dependencies in S3. AWS currently documents Airflow 3.3.1, 3.2.1, 2.11.2 and additional supported versions, with version-specific Python constraints; exact quotas, executor behavior and upgrade semantics remain version-sensitive.

# 5. User workflows
Expected workflows include creating an environment and IAM/VPC prerequisites, uploading DAGs and dependencies to S3, configuring access, triggering and monitoring workflows, reading CloudWatch logs, applying startup scripts, upgrading Airflow and deleting an environment.

# 6. Pricing and access
MWAA pricing depends on environment duration and additional worker, scheduler or webserver capacity. Current pricing, quotas, regional availability, version support and IAM prerequisites must be verified before implementation or cost claims.

# 7. API and integration surface
AWS MWAA APIs, CLI, SDKs, CloudFormation, S3 DAG storage, Airflow UI/API, CloudWatch logs/metrics, IAM and supported authentication/access controls. Startup scripts run on workers, schedulers and webservers before requirements and Airflow processes initialize.

# 8. Existing open-source alternatives
Apache Airflow is the primary open-source foundation. Airflow itself documents workflows-as-code, DAG scheduling, monitoring and provider extensibility; self-hosting it does not reproduce MWAA's AWS-managed infrastructure, security, scaling or integration operations. Other orchestrators may cover subsets only.

# 9. Alternative comparison
Self-hosted Airflow preserves the core workflow model but transfers environment, metadata database, scheduler/worker, networking, upgrades, security, dependency and observability operations to the operator. Compare version constraints, executor, provider installation, DAG deployment and recovery separately.

# 10. Missing capabilities and opportunity analysis
Research must map environment lifecycle, supported Airflow versions, DAG deployment, plugins, Python dependencies and constraints, startup scripts, scheduler/worker/webserver scaling, authentication, networking, logs, upgrades, quotas and recovery.

# 11. REA implementation strategy
Use official AWS and Apache Airflow documentation and authorized public API observation. Capture MWAA environment and workflow contracts separately before selecting Apache Airflow as a partial foundation or implementing an independent equivalent. Do not claim AWS-managed parity from an Airflow installation alone.

# 12. Security, privacy, and compliance
Verify IAM roles, VPC/subnets, public/private webserver access, KMS, S3 bucket controls, secrets, logs, operator permissions and cross-account boundaries.

# 13. Sources and evidence
- **Identity and managed model:** [What is Amazon MWAA?](https://docs.aws.amazon.com/mwaa/latest/userguide/what-is-mwaa.html) and [create an environment](https://docs.aws.amazon.com/mwaa/latest/userguide/create-environment.html) document managed Apache Airflow environments, prerequisites and compatibility.
- **Versions and scaling:** [Airflow versions on MWAA](https://docs.aws.amazon.com/mwaa/latest/userguide/airflow-versions.html) documents supported versions, Python constraints, schedulers, workers and upgrade rules.
- **DAG dependencies and startup:** [startup scripts](https://docs.aws.amazon.com/mwaa/latest/userguide/using-startup-script.html) and [Python dependencies](https://docs.aws.amazon.com/mwaa/latest/userguide/best-practices-dependencies.html) document S3-backed initialization, provider/plugin installation and constraints.
- **API:** [MWAA API Reference](https://docs.aws.amazon.com/mwaa/latest/API/Welcome.html) documents the service API surface.
- **Foundation:** [Apache Airflow documentation](https://airflow.apache.org/docs/apache-airflow/) documents the open-source DAG, workflow-as-code, scheduling and monitoring foundation; it is not a managed MWAA equivalent.

# 14. Unknowns
- Complete API/CLI/SDK and Airflow UI/API matrix.
- Exact supported versions, quotas and scheduler/worker/webserver semantics.
- Upgrade, recovery, startup-script, plugin and dependency behavior by version.
- Verified independent foundation and migration coverage.

# 15. Research status
Researched with verified public AWS and Apache Airflow sources. MWAA identity, managed environment, DAG/S3 workflow, versions, scaling, dependencies, startup scripts, API and partial open-source foundation are documented. Exact pricing, quotas, region/version behavior and full managed-service parity remain unknown and are not asserted.
