---
schema_version: "1.0"
id: "amazon-workspaces-applications"
company_id: "amazon_aws"
name: "Amazon WorkSpaces Applications"
aliases: ["WorkSpaces Applications", "Amazon AppStream 2.0", "AppStream 2.0"]
product_type: "cloud_infrastructure"
categories: ["application-streaming", "desktop-as-a-service", "saas-conversion", "remote-access", "managed-service"]
lifecycle_status: "active"
official_url: "https://aws.amazon.com/workspaces/applications/"
official_docs_url: "https://docs.aws.amazon.com/appstream2/latest/developerguide/"
official_source_urls:
  - "https://aws.amazon.com/workspaces/applications/"
  - "https://aws.amazon.com/workspaces/applications/faqs/"
  - "https://docs.aws.amazon.com/appstream2/latest/developerguide/"
  - "https://docs.aws.amazon.com/appstream2/latest/APIReference/"
  - "https://docs.aws.amazon.com/cli/latest/reference/appstream/"
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

Amazon WorkSpaces Applications, formerly AppStream 2.0, is AWS's managed application-streaming service. It delivers desktop applications and non-persistent sessions through browsers or clients, with image builders, application blocks, fleets, stacks, autoscaling, multi-session, GPU options, authentication modes, VPC integration and MCP access for agents. Apache Guacamole is recorded as a partial remote-access foundation, not an equivalent streaming service.

# 2. Product identity and ownership

- **Official name:** Amazon WorkSpaces Applications
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Primary scope:** Managed desktop-application streaming and SaaS conversion

# 3. Product capabilities

- Package and stream existing desktop applications without rewriting them.
- Build application images and app blocks for reusable delivery.
- Configure fleets, stacks, sessions, autoscaling and multi-session capacity.
- Stream encrypted pixels through HTML5 browsers or native clients.
- Support a range of CPU, memory and GPU instance types.
- Authenticate through user pools, SAML or streaming URLs and integrate with VPCs.
- Expose MCP tools that can let authorized agents interact with streamed applications.

# 4. Technical architecture

The public model includes image builders, images, app blocks, fleets, stacks, sessions, user associations, authentication, instance types, streaming protocols, VPC networking, scaling policies and API/CLI operations. Exact image lifecycle, app-block mounting, fleet state, session protocol, agent/MCP permissions, quotas and regional behavior remain pending REA verification.

# 5. User workflows

Typical workflows include building an image, installing an application, publishing an app block, creating a fleet and stack, assigning users, starting a session, streaming through a browser or client, updating the image and scaling capacity. A complete study must test image validation, app launch, session reconnects, fleet capacity, autoscaling, multi-session, GPU behavior, authentication failures, network isolation and agent-control permissions.

# 6. Pricing and access

Access requires an AWS account, IAM permissions, VPC configuration, image or application packaging and supported regions. Pricing, instance and user charges, fleet minimums, storage, GPU costs, quotas, authentication and MCP controls must be verified before implementation. No credentials or private desktop applications belong in this dossier.

# 7. API and integration surface

Public surfaces include the AWS console, browser and native clients, AWS CLI, SDKs, CloudFormation and the AppStream/WorkSpaces Applications API. Operations cover images, fleets, stacks, app blocks, applications, users, sessions, directories, tags and networking. Exact schemas, asynchronous states, errors, retries, client protocols, streaming URLs and agent/MCP contracts require command-level testing.

# 8. Existing open-source alternatives

Apache Guacamole is an Apache-2.0 open-source clientless remote-desktop gateway supporting browser access to RDP, VNC and SSH. It provides a useful access layer, but not WorkSpaces Applications' image and application packaging, fleet autoscaling, multi-session, GPU streaming, authentication modes, encrypted pixel protocol, MCP controls or AWS service plane.

# 9. Alternative comparison

Compare application packaging, image builders, app blocks, fleets, stacks, session startup, browser streaming, protocol behavior, autoscaling, multi-session, GPU support, identity, networking, data isolation, observability, agent controls and quotas. Guacamole covers remote access; application-streaming orchestration requires independent components.

# 10. Missing capabilities and opportunity analysis

Research must map image, app-block, fleet, stack, session, user, authentication, streaming, scaling, network, agent/MCP, error, quota and billing behavior. Any implementation must use original code and isolated synthetic applications.

# 11. RAE implementation strategy

Use the official product, FAQ, developer guide, API and CLI references as primary sources. The generated RAE skill should instruct an agent to build an independent application-streaming platform beginning with open remote-access components where useful, then add image packaging, app blocks, fleets, stacks, scaling, GPU, identity and agent controls only where evidence supports them. Preserve the partial-equivalence verdict and do not claim AWS service parity.

# 12. Security, privacy, and compliance

Verify IAM scope, application image provenance, encrypted pixel transport, VPC isolation, session data retention, device controls, authentication, CloudTrail, CloudWatch, agent permissions and data residency. Use synthetic accounts and public applications only. Never store credentials, private application binaries or personal data in the catalog, skill or report.

# 13. Evidence register

- https://aws.amazon.com/workspaces/applications/ — official product scope.
- https://aws.amazon.com/workspaces/applications/faqs/ — application-streaming and protocol behavior.
- https://docs.aws.amazon.com/appstream2/latest/developerguide/ — developer and administration workflows.
- https://docs.aws.amazon.com/appstream2/latest/APIReference/ — API surface.
- https://docs.aws.amazon.com/cli/latest/reference/appstream/ — CLI command surface.
- https://github.com/apache/guacamole-server — open-source remote-access alternative.

# 14. Unknowns

- Complete image, app-block, fleet, stack, session and client matrix.
- Exact streaming protocol, autoscaling, multi-session and GPU semantics.
- Current authentication, VPC, agent/MCP, quota and regional behavior.
- Application packaging, data isolation, logging and failure recovery.
- Verified parity and operating requirements for an independent implementation.

# 15. Research status

Pending deeper REA validation. Product identity, official sources, command surface and a partial open-source foundation are documented; no full equivalence claim is made.
