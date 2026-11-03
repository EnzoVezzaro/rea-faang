---
schema_version: "1.0"
id: "aws-cloudformation"
company_id: "amazon_aws"
name: "AWS CloudFormation"
aliases: ["CloudFormation", "AWS CloudFormation StackSets", "CloudFormation Registry"]
product_type: "developer_tool"
categories: ["infrastructure-as-code", "provisioning", "orchestration", "templates", "stacksets", "resource-management"]
lifecycle_status: "active"
official_url: "https://aws.amazon.com/cloudformation/"
official_docs_url: "https://docs.aws.amazon.com/cloudformation/"
official_source_urls:
  - "https://aws.amazon.com/cloudformation/"
  - "https://docs.aws.amazon.com/cloudformation/"
  - "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/"
  - "https://docs.aws.amazon.com/cli/latest/reference/cloudformation/"
  - "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/WhatIsCloudFormation.html"
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

# AWS CloudFormation

## Scope and lifecycle

AWS CloudFormation is a declarative infrastructure-as-code service that provisions and manages AWS and third-party resources as stacks. It includes change sets, rollback, drift detection, termination protection, StackSets, the Registry, Hooks and IaC Generator.

## Official surfaces

- Product: https://aws.amazon.com/cloudformation/
- Documentation: https://docs.aws.amazon.com/cloudformation/
- API reference: https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/
- CLI reference: https://docs.aws.amazon.com/cli/latest/reference/cloudformation/
- What it is: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/WhatIsCloudFormation.html

## Capability map

- Declare resources and dependencies in templates.
- Create, update, roll back and delete stacks.
- Preview changes with change sets and detect drift.
- Deploy StackSets across accounts and regions.
- Generate templates from existing resources with IaC Generator.
- Extend the resource model with Registry types, modules and Hooks.

## API and lifecycle leads

The API includes stack, resource, event, template, change-set, StackSet, drift, refactoring, registry, Hook and generated-template operations. Exact dependency ordering, replacement semantics, rollback, drift detection, nested stacks, permissions and cross-account behavior require controlled evidence.

## Open-source alternative

OpenTofu is recorded as a partial alternative: https://github.com/opentofu/opentofu. It provides a broad open IaC foundation with declarative configuration, state, providers and plans, but not CloudFormation's stack engine, AWS resource handlers, StackSets, Registry, Hooks or AWS-specific rollback semantics.

## REA/build guidance

Use the official CloudFormation API and user guide as primary inputs for Reverse Engineer Anything. An independent implementation should separate template parsing, dependency planning, resource providers, change previews, state reconciliation, rollback and multi-account orchestration. Do not treat a generic provider-based IaC tool as behaviorally identical to CloudFormation.

## Unknowns and evidence gaps

- Resource replacement and rollback behavior varies by resource type and requires fixtures.
- Drift detection coverage and false-positive behavior need controlled stack tests.
- StackSets, nested stacks, Hooks and Registry extension lifecycle require separate evidence.
- Cross-account permissions, quotas and regional support must be verified before compatibility claims.
