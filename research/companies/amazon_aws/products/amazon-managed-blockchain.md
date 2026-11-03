---
schema_version: "1.0"
id: "amazon-managed-blockchain"
company_id: "amazon_aws"
name: "Amazon Managed Blockchain"
aliases:
  - "AMB"
  - "Amazon Managed Blockchain Access"
  - "Amazon Managed Blockchain Query"
product_type: "cloud_infrastructure"
categories:
  - "blockchain"
  - "web3"
  - "distributed-ledger"
  - "managed-service"
  - "sunset-notice"
lifecycle_status: "active"
official_url: "https://aws.amazon.com/managed-blockchain/"
official_docs_url: "https://docs.aws.amazon.com/managed-blockchain/"
official_source_urls:
  - "https://aws.amazon.com/managed-blockchain/"
  - "https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/Welcome.html"
  - "https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/managed-blockchain-end-of-support.html"
  - "https://docs.aws.amazon.com/managed-blockchain/latest/AMBQ-APIReference/Welcome.html"
research_status: "pending"
research_confidence: "unverified"
alternative_status: "partial"
alternative_coverage: "unknown"
opportunity_status: "research_further"
last_researched_at: null
last_verified_at: "2026-11-02T00:00:00Z"
next_review_at: "2027-03-29T00:00:00Z"
research_version: 1
---

# 1. Executive summary

Amazon Managed Blockchain (AMB) is AWS's managed service for public blockchain access, private Hyperledger Fabric networks and blockchain data queries. AWS says it stopped accepting new customers on October 29, 2026; existing customers can continue until September 29, 2027, after which access ends. This entry remains active for historical and migration-aware research, but it must not be presented as a durable new deployment target.

# 2. Product identity and ownership

- **Official name:** Amazon Managed Blockchain
- **Company:** Amazon Web Services
- **Primary surfaces:** AMB Access and AMB Query
- **Lifecycle:** Active for existing customers; sunset announced

# 3. Product capabilities

- Managed access to supported public blockchains.
- Private Hyperledger Fabric network creation and management.
- AMB Query APIs for blockchain transactions, tokens, contracts and balances.
- Managed APIs and infrastructure intended to avoid operating specialized nodes.

# 4. Technical architecture

The public documentation separates AMB Access from AMB Query. Access includes dedicated or serverless public-chain access and private Hyperledger Fabric networks; Query provides indexed blockchain-data APIs. Exact regional availability, quotas, supported operations and migration behavior remain to be verified.

# 5. User workflows

Expected workflows include selecting a supported chain, configuring access and IAM, querying blockchain data, creating or joining a Hyperledger Fabric network, managing members and invoking application APIs. These workflows must be checked against current documentation and the sunset notice before implementation planning.

# 6. Pricing and access

The service is not accepting new customers as of October 29, 2026. Existing customers have access only until the announced September 29, 2027 end date. Current pricing and account eligibility are not treated as verified here.

# 7. API and integration surface

- AWS service APIs for Managed Blockchain Access and Hyperledger Fabric.
- AMB Query APIs for supported blockchain data.
- AWS IAM and regional service endpoints.
- Historical AWS CLI/SDK surfaces require explicit REA and documentation verification.

# 8. Existing open-source alternatives

Potential alternatives include self-managed Hyperledger Fabric, self-managed Ethereum or Bitcoin nodes, and independent blockchain indexing stacks. No equivalence, migration completeness or license fit is verified in this pending dossier.

# 9. Alternative comparison

Self-managed alternatives can cover portions of node operation, private networks or indexed data, but they may differ in operations, APIs, supported chains, security controls, indexing freshness and cost. A migration decision is blocked pending evidence.

# 10. Missing capabilities and opportunity analysis

Research must map public-chain coverage, Fabric lifecycle, Query schemas, IAM, quotas, regions, billing, data freshness, failure modes and the announced migration paths.

# 11. RAE implementation strategy

Use official AWS product and API documentation plus the end-of-support notice. Produce an independent implementation plan only after documenting observed contracts and a foundation verdict; do not claim parity with AWS or imply continued availability after the sunset date.

# 12. Security, privacy, and compliance

Verify IAM boundaries, network isolation, private-key handling, transaction signing, auditability, data retention and regional compliance. Do not infer these controls from the “managed” label.

# 13. Evidence register

- https://aws.amazon.com/managed-blockchain/ — official overview and sunset notice.
- https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/Welcome.html — service API scope and end-of-support notice.
- https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/managed-blockchain-end-of-support.html — migration guidance and final access date.
- https://docs.aws.amazon.com/managed-blockchain/latest/AMBQ-APIReference/Welcome.html — AMB Query scope.

# 14. Unknowns

- Complete current API/CLI/SDK command matrix.
- Exact migration guarantees and export behavior for existing customers.
- Full list of supported chains, regions, quotas and pricing at the sunset boundary.
- Verified open-source foundation for a functional equivalent.

# 15. Research status

`pending`: identity and sunset dates are documented from official AWS sources, but the complete REA capture, API matrix, alternatives and implementation foundation are not yet verified.
