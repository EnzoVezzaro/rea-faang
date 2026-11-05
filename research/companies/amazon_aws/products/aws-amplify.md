---
schema_version: "1.0"
id: "aws-amplify"
company_id: "amazon_aws"
name: "AWS Amplify"
aliases: ["Amplify", "AWS Amplify Gen 2", "Amplify Hosting"]
product_type: "developer_tool"
categories: ["full-stack", "web", "mobile", "hosting", "authentication", "serverless"]
lifecycle_status: "active"
official_url: "https://aws.amazon.com/amplify/"
official_docs_url: "https://docs.amplify.aws/"
official_source_urls:
  - "https://aws.amazon.com/amplify/"
  - "https://aws.amazon.com/documentation-overview/amplify/"
  - "https://docs.amplify.aws/"
  - "https://docs.aws.amazon.com/amplify/"
  - "https://github.com/aws-amplify/amplify-cli"
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

AWS Amplify is a collection of tools, libraries, UI components, backend-building workflows and managed hosting for full-stack web and mobile applications powered by AWS. Its documented surface includes Gen 2 TypeScript workflows, authentication, data, storage, functions, GraphQL/REST, Amplify Hosting, Studio, CLI, mobile libraries, UI components and CDK extensibility. Appwrite is recorded as a partial open-source backend foundation.

# 2. Product identity and ownership

- **Official name:** AWS Amplify
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Primary scope:** Full-stack application development and hosting

# 3. Product capabilities

- Build web and mobile application backends from code-first TypeScript definitions.
- Add authentication, authorization, data, storage, functions and APIs.
- Connect GraphQL or REST services to frontend and mobile libraries.
- Host static, SSR, SSG and full-stack applications through Git workflows.
- Use Amplify Studio, CLI, UI components, libraries and CDK escape hatches.
- Provide per-developer cloud sandboxes and integrated deployment workflows.

# 4. Technical architecture

The public model includes frontend libraries, backend resource definitions, CDK or generated infrastructure, authentication providers, data models, AppSync or REST APIs, storage, functions, environments, sandboxes, Hosting builds, branches, artifacts and deployment configuration. Exact Gen 1/Gen 2 parity, generated resource boundaries, environment state, build behavior and regional semantics remain pending REA verification.

# 5. User workflows

Typical workflows include initializing an app, defining backend resources, configuring authentication and data, running a local or cloud sandbox, connecting a frontend, committing to Git, deploying through Amplify Hosting and managing users or content in Studio. A complete study must test schema changes, auth rules, environment isolation, local sandbox drift, build failures, branch deployments, rollbacks, custom CDK resources and deletion behavior.

# 6. Pricing and access

Access requires an AWS account, IAM permissions and service configuration. Pricing, Hosting build/storage/bandwidth costs, backend resource charges, sandbox behavior, quotas and supported framework versions must be verified before implementation. No credentials or customer application data belong in this dossier.

# 7. API and integration surface

Public surfaces include Amplify CLI, Gen 2 libraries, frontend and mobile SDKs, UI components, Studio, Hosting console, Git providers, CDK and generated AWS resources. Backend integrations commonly include Cognito, AppSync, DynamoDB, S3, Lambda and CloudFront. Exact schemas, generated files, CLI commands, auth rules, build hooks, errors, retries and deployment states require command-level testing.

# 8. Existing open-source alternatives

Appwrite is a BSD-3-Clause open-source backend-as-a-service with authentication, databases, storage, functions and web APIs. It provides a broad independent backend foundation, but not Amplify's AWS-native resource generation, CDK integration, frontend and mobile libraries, Studio, Hosting, Git deployment or AWS operational plane.

# 9. Alternative comparison

Compare project initialization, backend-as-code, auth, data modeling, storage, functions, APIs, frontend/mobile SDKs, UI components, local sandboxes, hosting, Git CI/CD, infrastructure export, environments, user/content management and observability. Appwrite covers backend primitives; the AWS-native development and deployment workflow requires separate components.

# 10. Missing capabilities and opportunity analysis

Research must map Gen 1 and Gen 2 CLI, library, schema, auth, data, storage, function, Hosting, Studio, CDK, environment, sandbox and deployment behavior. Any implementation must use original code and isolated synthetic applications.

# 11. REA implementation strategy

Use the official Amplify product, documentation, Gen 2 guide, AWS documentation and CLI repository as primary sources. The generated REA skill should instruct an agent to build an independent full-stack developer platform beginning with open backend components such as Appwrite where useful, then add frontend/mobile SDKs, infrastructure generation, hosting, environments and CI/CD only where evidence supports them. Preserve the partial-equivalence verdict and do not claim AWS-native parity.

# 12. Security, privacy, and compliance

Verify IAM scope, generated-resource permissions, auth rules, tenant isolation, secrets, environment separation, build logs, artifact access, data retention and deployment approvals. Use synthetic applications and public fixtures only. Never store credentials, private source code or personal data in the catalog, skill or report.

# 13. Evidence register

- https://aws.amazon.com/amplify/ — official product scope.
- https://aws.amazon.com/documentation-overview/amplify/ — tools, hosting and backend workflows.
- https://docs.amplify.aws/ — Gen 2 developer documentation.
- https://docs.aws.amazon.com/amplify/ — AWS documentation.
- https://github.com/aws-amplify/amplify-cli — official CLI repository.
- https://github.com/appwrite/appwrite — open-source backend alternative.

# 14. Unknowns

- Complete Gen 1/Gen 2 CLI, library, schema and generated-resource matrix.
- Exact auth, data, storage, function, sandbox and environment semantics.
- Hosting build, branch, artifact, rollback and framework-version behavior.
- CDK escape hatches, Studio, mobile library and AWS service boundaries.
- Verified parity and operating requirements for an independent implementation.

# 15. Research status

Pending deeper REA validation. Product identity, official sources, command surface and a partial open-source foundation are documented; no full equivalence claim is made.
