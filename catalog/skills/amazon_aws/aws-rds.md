---
name: aws-rds
description: Use when researching, comparing, or building a free and open-source replacement for Amazon RDS (Amazon Web Services). Open-source status is available — see CloudNativePG, Crunchy Postgres Operator (PGO), Patroni, and more.
---

# Amazon RDS (`aws-rds`)

| | |
|---|---|
| **Company** | Amazon Web Services (`amazon_aws`) |
| **Product type** | `database` |
| **Categories** | `database` |
| **Official URL** | https://aws.amazon.com/rds/ |
| **Open-source status** | **available** |

## What it is

Amazon RDS is a managed relational database service: provisioning, patching, backups, failover and scaling for Postgres, MySQL and more.

## Core capabilities

- Managed relational databases
- Automated backups, patching, failover
- Read replicas and scaling

## Existing open source

| Project | License | What it covers | Notes |
|---|---|---|---|
| [CloudNativePG](https://cloudnative-pg.io/) | Apache-2.0 | Kubernetes operator for HA PostgreSQL. | Provider-agnostic RDS analogue. |
| [Crunchy Postgres Operator (PGO)](https://access.crunchydata.com/documentation/postgres-operator/latest/) | Apache-2.0 | Alternative Postgres operator. | Comparison to CNPG is well documented. |
| [Patroni](https://patroni.readthedocs.io/) | MIT | HA templating for PostgreSQL. | Used under many operators. |
| [Vitess / MySQL Operator](https://vitess.io/) | Apache-2.0 | Sharded MySQL management. | MySQL-side alternative. |

## Gap

Fully managed multi-engine provisioning at cloud scale is an operational service, not just software.

## Verdict

Available. Open operators run HA PostgreSQL/MySQL yourself.

## Sources

- https://cloudnative-pg.io/
- https://agoratech.org/posts/cloudnativepg-vs-rds-for-postgresql-cost-control-and-tradeoffs/
- https://www.gabrielebartolini.it/articles/2026/05/cloudnativepg-and-crunchy-pgo-an-honest-opinionated-comparison/

## Provenance

- Catalog record: [`catalog/products.jsonl`](../../products.jsonl) (`aws-rds`)
- Research dossier: [`research/companies/amazon_aws/products/aws-rds.md`](../../../research/companies/amazon_aws/products/aws-rds.md)
- REA web-surface report: [`catalog/rea/amazon_aws/aws-rds.md`](../../rea/amazon_aws/aws-rds.md)
