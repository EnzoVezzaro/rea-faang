---
schema_version: "1.0"
id: "amazon-healthlake"
company_id: "amazon_aws"
name: "Amazon HealthLake"
aliases:
  - "AWS HealthLake"
  - "HealthLake"
product_type: "data_platform"
categories:
  - "healthcare"
  - "fhir"
  - "clinical-data"
  - "health-data-lake"
  - "managed-service"
lifecycle_status: "active"
official_url: "https://aws.amazon.com/healthlake/"
official_docs_url: "https://docs.aws.amazon.com/healthlake/latest/devguide/"
official_source_urls:
  - "https://aws.amazon.com/healthlake/"
  - "https://aws.amazon.com/documentation-overview/healthlake/"
  - "https://docs.aws.amazon.com/healthlake/latest/devguide/"
  - "https://docs.aws.amazon.com/healthlake/latest/APIReference/"
  - "https://aws.amazon.com/healthlake/getting-started/"
research_status: "pending"
research_confidence: "unverified"
alternative_status: "none_verified"
alternative_coverage: "unknown"
opportunity_status: "research_further"
last_researched_at: null
last_verified_at: null
next_review_at: null
research_version: 1
---

# 1. Executive summary

Amazon HealthLake is AWS's managed healthcare data service for storing, transforming, analyzing and sharing health data using the FHIR R4 standard. It provides a FHIR data store, import/export workflows, search and SQL-oriented analytics, with optional transformation and NLP capabilities for clinical data.

# 2. Product identity and ownership

- **Official name:** Amazon HealthLake
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Product page:** https://aws.amazon.com/healthlake/

# 3. Product capabilities

- Store and query FHIR R4 clinical data in managed data stores.
- Import FHIR files and clinical data from Amazon S3.
- Perform FHIR Create, Read, Update, Delete and Search operations.
- Transform selected unstructured clinical documents into structured FHIR resources with medical NLP.
- Query HealthLake data with SQL interfaces for analytics and AI workflows.
- Integrate with IAM, VPC/PrivateLink, S3, EventBridge, Lake Formation, Athena, QuickSight and SageMaker.

# 4. Technical architecture

The public surface includes FHIR data stores, resources, search, import/export jobs, S3 locations, identity and access controls, terminology mappings, SQL-on-FHIR/query surfaces and optional transformation features. HIPAA eligibility and clinical-use constraints require careful evidence; HealthLake is not a substitute for professional medical advice.

# 5. User workflows

Users create a data store, configure IAM and network access, import FHIR or source data, search and update resources through FHIR APIs, export or analyze data, and connect downstream analytics or ML systems. A separate workflow transforms legacy documents into FHIR resources and requires validation by qualified healthcare professionals.

# 6. Pricing and access

HealthLake is an AWS commercial service with usage-based pricing. Costs depend on data storage, API activity, import/export, analytics and Region. Current pricing, regional availability and eligibility requirements require verification from official pricing and service documentation.

# 7. API and integration surface

- Developer guide: https://docs.aws.amazon.com/healthlake/latest/devguide/
- API reference: https://docs.aws.amazon.com/healthlake/latest/APIReference/
- Access through the AWS console, AWS CLI and AWS SDKs.
- Integrations include S3, EventBridge, Lake Formation, Athena, QuickSight, SageMaker and VPC PrivateLink.
- Exact FHIR operations, SQL query behavior, import/export limits and CLI coverage require REA capture.

# 8. Existing open-source alternatives

Potentially relevant alternatives include HAPI FHIR, IBM FHIR Server, Smile CDR Community Edition, Aidbox Community Edition, OpenMRS and Apache Beam-based data pipelines. These are candidates for comparison only; no complete equivalence is claimed.

# 9. Alternative comparison

Open-source FHIR servers can cover portions of resource storage and APIs, but a clean-room equivalent would still need to reproduce managed scaling, import/export, NLP transformation, SQL-on-FHIR analytics, privacy controls, auditability and AWS integrations.

# 10. Missing capabilities and opportunity analysis

REA should map data-store lifecycle, FHIR version and resource support, search semantics, import/export jobs, deduplication, NLP transformation, terminology mapping, SQL behavior, access control, audit logs, encryption, quotas, interoperability and failure recovery.

# 11. REA implementation strategy

Use the official HealthLake product page, developer guide, API reference and getting-started workflow as research surfaces. A clean-room implementation should use independently licensed FHIR components, document standards and implementation differences, and avoid copying AWS code, clinical models or proprietary NLP behavior.

# 12. Security, privacy, and compliance

Research must verify PHI handling, HIPAA-eligible boundaries, IAM and least privilege, VPC/PrivateLink, encryption, audit logs, data residency, retention/deletion, export controls and human review for clinical workflows.

# 13. Evidence register

- https://aws.amazon.com/healthlake/ — official product scope.
- https://aws.amazon.com/documentation-overview/healthlake/ — official import, FHIR, NLP and analytics overview.
- https://docs.aws.amazon.com/healthlake/latest/devguide/ — official architecture and workflows.
- https://docs.aws.amazon.com/healthlake/latest/APIReference/ — official API surface.
- https://aws.amazon.com/healthlake/getting-started/ — official setup workflow.

# 14. Unknowns

- Complete FHIR R4 resource, search and validation matrix.
- Current transformation-agent/NLP availability and preview boundaries.
- SQL-on-FHIR semantics, performance, quotas and export behavior.
- Region, pricing, HIPAA and interoperability constraints.
- Verified open-source alternatives for the complete managed workflow.

# 15. Research status

`pending`: official identity and broad scope are established; complete REA capture, command verification, FHIR behavior, alternative analysis and acceptance review remain outstanding.
