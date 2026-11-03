---
schema_version: "1.0"
id: "aws-app2container"
company_id: "amazon_aws"
name: "AWS App2Container"
aliases: ["App2Container", "A2C"]
product_type: "developer_tool"
categories: ["application-modernization", "containers", "migration", "cli", "dotnet", "java"]
lifecycle_status: "active"
official_url: "https://aws.amazon.com/app2container/"
official_docs_url: "https://docs.aws.amazon.com/app2container/"
official_source_urls:
  - "https://aws.amazon.com/app2container/"
  - "https://docs.aws.amazon.com/app2container/"
  - "https://docs.aws.amazon.com/app2container/latest/UserGuide/what-is-a2c.html"
  - "https://docs.aws.amazon.com/app2container/latest/UserGuide/cmd-help.html"
  - "https://docs.aws.amazon.com/app2container/latest/UserGuide/a2c-commands.html"
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

# AWS App2Container

## Scope and lifecycle

AWS App2Container (A2C) is a command-line tool for modernizing applications that run on physical servers or virtual machines. It inventories and analyzes applications, generates container images and deployment artifacts, and supports targets including Amazon ECS, Amazon EKS and AWS App Runner.

## Official surfaces

- Product: https://aws.amazon.com/app2container/
- Documentation: https://docs.aws.amazon.com/app2container/
- What it is: https://docs.aws.amazon.com/app2container/latest/UserGuide/what-is-a2c.html
- Command help: https://docs.aws.amazon.com/app2container/latest/UserGuide/cmd-help.html
- Command reference: https://docs.aws.amazon.com/app2container/latest/UserGuide/a2c-commands.html

## Capability map

- Initialize a local App2Container workspace.
- Inventory applications that can be containerized.
- Analyze application dependencies and runtime requirements.
- Extract artifacts and generate Dockerfiles and container images.
- Generate deployment artifacts for ECS, EKS, App Runner and CI/CD pipelines.
- Upload support bundles and upgrade the CLI.

## CLI workflow

The documented phases are initialize, analyze, transform and deploy. Commands include `init`, `inventory`, `analyze`, `extract`, `containerize`, `generate`, `upgrade` and `upload-support-bundle`. The command reference and help output should be treated as the source of truth for flags and platform constraints.

## Open-source alternative

Konveyor Tackle is recorded as a partial alternative: https://github.com/konveyor/tackle2-hub. It provides open modernization assessment and migration planning, but does not reproduce App2Container's application-server inventory, dependency analysis, container image generation, AWS deployment artifacts or CLI state machine.

## REA/build guidance

Use the official documentation and command reference as primary inputs for Reverse Engineer Anything. A resulting independent implementation should separate inventory, dependency analysis, container build, deployment-artifact generation and deployment approval. It must not claim AWS IAM or target-service parity without evidence from controlled environments.

## Unknowns and evidence gaps

- Exact supported application versions and operating-system behavior need platform-specific verification.
- Inventory and remote-analysis permissions require controlled Windows/Linux fixtures.
- Generated Dockerfiles, image contents, deployment templates and rollback behavior require representative application evidence.
- Deployment paths need separate validation for ECS, EKS, App Runner and pipeline generation.
