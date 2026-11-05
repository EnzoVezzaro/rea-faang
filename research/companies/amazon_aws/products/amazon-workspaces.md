---
schema_version: "1.0"
id: "amazon-workspaces"
company_id: "amazon_aws"
name: "Amazon WorkSpaces"
aliases: ["WorkSpaces", "Amazon WorkSpaces Personal", "Amazon WorkSpaces Pools"]
product_type: "cloud_infrastructure"
categories: ["virtual-desktop", "desktop-as-a-service", "remote-access", "managed-service", "end-user-computing"]
lifecycle_status: "active"
official_url: "https://aws.amazon.com/workspaces/"
official_docs_url: "https://docs.aws.amazon.com/workspaces/"
official_source_urls:
  - "https://aws.amazon.com/workspaces/"
  - "https://docs.aws.amazon.com/workspaces/latest/adminguide/"
  - "https://docs.aws.amazon.com/workspaces/latest/userguide/"
  - "https://docs.aws.amazon.com/workspaces/latest/api/welcome.html"
  - "https://docs.aws.amazon.com/cli/latest/reference/workspaces/"
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

Amazon WorkSpaces is AWS's managed virtual-desktop service. Its documented surface includes persistent WorkSpaces Personal, non-persistent WorkSpaces Pools, desktop bundles and images, directory integration, native and browser clients, networking, encryption, billing modes and administration APIs. Apache Guacamole is recorded as a partial open-source remote-access foundation, not an equivalent desktop service.

# 2. Product identity and ownership

- **Official name:** Amazon WorkSpaces
- **Company:** Amazon Web Services
- **Lifecycle:** Active
- **Primary scope:** Managed cloud virtual desktops and application access

# 3. Product capabilities

- Provision persistent or pooled virtual desktops for users and task workers.
- Select operating-system, CPU, memory, storage and application bundles.
- Access desktops through native clients or supported browsers on multiple devices.
- Manage directories, images, bundles, applications, connection aliases and IP groups.
- Configure AutoStop, running modes, encryption, networking, device controls and pools.

# 4. Technical architecture

The public model includes directories, users, WorkSpaces, bundles, images, applications, pools, connection aliases, protocols, running modes, client access, network interfaces, IP groups and asynchronous lifecycle operations. Exact provisioning states, image behavior, protocol differences, quotas, billing transitions, client telemetry and regional behavior remain pending REA verification.

# 5. User workflows

Typical workflows include configuring a directory, creating or importing an image, selecting a bundle, provisioning a WorkSpace, connecting through a client, applying policies, changing running mode, rebuilding or restoring a desktop and deleting it. A complete study must test asynchronous creation, failed requests, client reconnects, AutoStop, pooled assignment, image updates, storage changes, network isolation and deletion dependencies.

# 6. Pricing and access

Access requires an AWS account, IAM permissions, directory configuration, supported regions and suitable networking. Pricing, hourly/monthly modes, storage, bundle costs, pool limits, client requirements and quotas must be verified before implementation. No credentials, private desktop images or customer data belong in this dossier.

# 7. API and integration surface

Public surfaces include the AWS console, WorkSpaces clients, browser access, AWS CLI, SDKs, CloudFormation and the WorkSpaces API. Operations include directories, WorkSpaces, pools, images, bundles, applications, connection aliases, IP groups, tags, client branding and device controls. Exact schemas, asynchronous states, errors, retries, idempotency and client protocols require command-level testing.

# 8. Existing open-source alternatives

Apache Guacamole is an Apache-2.0 open-source clientless remote-desktop gateway supporting browser access to RDP, VNC and SSH sessions. It provides a useful access layer, but not WorkSpaces' managed provisioning, image and bundle lifecycle, directory integration, pools, billing, encryption, client controls, quotas or AWS operations.

# 9. Alternative comparison

Compare desktop provisioning, image and bundle management, persistent and pooled assignment, protocols, browser access, identity, directories, storage, networking, encryption, device controls, billing, scaling, quotas, observability and failure recovery. Guacamole covers remote access; the managed desktop control plane requires independent components.

# 10. Missing capabilities and opportunity analysis

Research must map every directory, image, bundle, workspace, pool, application, client, protocol, network, running-mode, state, error, quota and billing behavior. Any implementation must use original code and isolated synthetic desktop fixtures.

# 11. REA implementation strategy

Use the official product, administrator guide, user guide, API and CLI references as primary sources. The generated REA skill should instruct an agent to build an independent remote-desktop platform beginning with Guacamole where useful, then add provisioning, images, bundles, directories, pools, identity, encryption, lifecycle and billing controls only where evidence supports them. Preserve the partial-equivalence verdict and do not claim AWS service parity.

# 12. Security, privacy, and compliance

Verify IAM scope, directory security, desktop isolation, encryption, network controls, client authentication, device policies, image provenance, audit, retention and data residency. Use synthetic accounts and public images only. Never store credentials, private desktop images or personal data in the catalog, skill or report.

# 13. Evidence register

- https://aws.amazon.com/workspaces/ — official product context.
- https://docs.aws.amazon.com/workspaces/latest/adminguide/ — provisioning and administration.
- https://docs.aws.amazon.com/workspaces/latest/userguide/ — client and access workflows.
- https://docs.aws.amazon.com/workspaces/latest/api/welcome.html — API operations and states.
- https://docs.aws.amazon.com/cli/latest/reference/workspaces/ — CLI command surface.
- https://github.com/apache/guacamole-server — open-source remote-access alternative.

# 14. Unknowns

- Complete directory, image, bundle, workspace, pool, client and application matrix.
- Exact provisioning, rebuild, restore, AutoStop, billing and protocol semantics.
- Current quotas, regional behavior, security controls and client telemetry.
- Image, identity, network, encryption and lifecycle dependencies.
- Verified parity and operating requirements for an independent implementation.

# 15. Research status

Pending deeper REA validation. Product identity, official sources, command surface and a partial open-source foundation are documented; no full equivalence claim is made.
