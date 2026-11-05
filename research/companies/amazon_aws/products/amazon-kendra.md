---
schema_version: "1.0"
id: "amazon-kendra"
company_id: "amazon_aws"
name: "Amazon Kendra"
aliases:
  - "Kendra"
  - "Amazon Kendra Intelligent Ranking"
product_type: "search"
categories:
  - "enterprise-search"
  - "semantic-search"
  - "information-retrieval"
  - "rag"
  - "managed-service"
lifecycle_status: "active"
official_url: "https://aws.amazon.com/kendra/"
official_docs_url: "https://docs.aws.amazon.com/kendra/latest/dg/"
official_source_urls:
  - "https://aws.amazon.com/kendra/"
  - "https://aws.amazon.com/documentation-overview/kendra/"
  - "https://docs.aws.amazon.com/kendra/latest/dg/"
  - "https://docs.aws.amazon.com/kendra/latest/APIReference/"
  - "https://docs.aws.amazon.com/cli/latest/reference/kendra/"
research_status: "pending"
research_confidence: "unverified"
alternative_status: "none_verified"
alternative_coverage: "unknown"
opportunity_status: "not_recommended"
last_researched_at: null
last_verified_at: null
next_review_at: null
research_version: 1
---

# 1. Executive summary

Amazon Kendra is AWS's managed intelligent-search and information-retrieval service. It uses natural-language processing, semantic/contextual ranking, document connectors, FAQ matching and passage retrieval for enterprise content and RAG-oriented workflows.

Important availability note: the current official API reference states that Amazon Kendra is no longer open to new customers and points new use cases toward Amazon Bedrock Knowledge Bases. This entry preserves Kendra for existing customers, historical analysis and clean-room research; it must not be represented as generally available for new accounts.

# 2. Product identity and ownership

- **Official name:** Amazon Kendra
- **Related surface:** Amazon Kendra Intelligent Ranking
- **Company:** Amazon Web Services
- **Lifecycle:** Active for documented/existing service surface; new-customer availability restricted
- **Product page:** https://aws.amazon.com/kendra/

# 3. Product capabilities

- Index unstructured enterprise documents from connected repositories.
- Answer natural-language questions with relevant passages and document ranking.
- Support FAQ matching, tables, synonyms, query completion and relevance tuning.
- Synchronize data sources through native or partner connectors.
- Apply custom document enrichment before indexing.
- Provide GenAI indexes and integrations with Amazon Q Business and Amazon Bedrock.

# 4. Technical architecture

The public surface includes indexes, data sources/connectors, documents, query/retrieve APIs, FAQs, relevance tuning, synonyms, custom document enrichment, Experience Builder, Intelligent Ranking and GenAI index modes. Kendra differs from OpenSearch because the catalog entry focuses on managed semantic enterprise retrieval and its connector/ranking behavior.

# 5. User workflows

Users create an index, configure a repository connector or add documents directly, synchronize content, query with natural language, tune relevance, manage access and optionally expose a search experience or RAG integration. Deleting an index permanently deletes its document information and connectors, so lifecycle behavior requires careful verification.

# 6. Pricing and access

Kendra is an AWS commercial service with usage-based pricing, but current official API documentation says it is not open to new customers. Existing-account pricing, regions, editions and Bedrock migration paths require verification from official documentation. Do not assume a new deployment can be created.

# 7. API and integration surface

- Developer guide: https://docs.aws.amazon.com/kendra/latest/dg/
- API reference: https://docs.aws.amazon.com/kendra/latest/APIReference/
- AWS CLI namespace: `aws kendra`
- CLI reference: https://docs.aws.amazon.com/cli/latest/reference/kendra/
- Integrations include S3, SharePoint, Salesforce, ServiceNow, Google Drive, Confluence, Amazon Q, Bedrock, IAM and Lambda-based enrichment.
- Exact edition, connector, API, quota and account-eligibility behavior requires REA capture.

# 8. Existing open-source alternatives

Potentially relevant alternatives include OpenSearch, Apache Solr, Vespa, Elasticsearch, Typesense, Meilisearch, Weaviate, Qdrant and Haystack-based retrieval pipelines. These cover subsets of keyword, semantic, vector or RAG retrieval and are not claimed equivalents to Kendra's managed connectors and ranking behavior.

# 9. Alternative comparison

Open-source search engines can provide indexing, lexical/vector retrieval and ranking, but a clean-room equivalent would still need to reproduce connector synchronization, natural-language answer extraction, FAQ/table handling, relevance tuning, access controls, enrichment and managed operations.

# 10. Missing capabilities and opportunity analysis

REA should map index and connector lifecycle, document ingestion, query/retrieve semantics, ranking, FAQ/table extraction, enrichment, synonyms, access filtering, Experience Builder, GenAI index behavior, quotas, deletion and new-customer restrictions.

# 11. REA implementation strategy

Use the official Kendra product page, developer guide, API reference, CLI reference and availability notice as research surfaces. A clean-room implementation should compose independently licensed search and retrieval systems, document differences, and not copy AWS ranking models, connectors or proprietary implementation details.

# 12. Security, privacy, and compliance

Research must verify IAM and connector credentials, repository access filtering, document encryption, tenant isolation, index deletion, data residency, audit logs, custom enrichment code and RAG data leakage controls.

# 13. Evidence register

- https://aws.amazon.com/kendra/ — official product scope.
- https://aws.amazon.com/documentation-overview/kendra/ — official search and connector overview.
- https://docs.aws.amazon.com/kendra/latest/dg/ — official architecture and workflows.
- https://docs.aws.amazon.com/kendra/latest/APIReference/ — official API and new-customer availability note.
- https://docs.aws.amazon.com/cli/latest/reference/kendra/ — official CLI surface.

# 14. Unknowns

- Exact existing-customer availability, editions, Regions and migration paths.
- Complete connector, query, ranking, FAQ and GenAI-index matrix.
- Data deletion, access filtering, quota and account eligibility edge cases.
- Verified open-source alternatives for the complete managed workflow.

# 15. Research status

`pending`: official identity and historical/current scope are established, including the new-customer restriction; complete REA capture, command verification, availability analysis, alternatives and acceptance review remain outstanding.
