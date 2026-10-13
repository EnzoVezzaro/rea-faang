---
name: aws-s3
description: Use when researching, comparing, or building a free and open-source replacement for Amazon S3 (Amazon Web Services). Open-source status is available — see Ceph (RADOS Gateway), MinIO, Garage, and more.
---

# Amazon S3 (`aws-s3`)

| | |
|---|---|
| **Company** | Amazon Web Services (`amazon_aws`) |
| **Product type** | `storage` |
| **Categories** | `storage` |
| **Official URL** | https://aws.amazon.com/s3/ |
| **Open-source status** | **available** |

## What it is

Amazon S3 is AWS’s object storage service: a durable, massively scalable bucket API with a de-facto standard interface.

## Core capabilities

- Object storage with an HTTP/S3 API
- Durability, versioning, lifecycle policies
- IAM-style access control and presigned URLs

## Existing open source

| Project | License | What it covers | Notes |
|---|---|---|---|
| [Ceph (RADOS Gateway)](https://ceph.io/) | LGPL-2.1 | Distributed object/block/file storage with S3 API. | Full storage platform. |
| [MinIO](https://min.io/) | AGPL-3.0 | S3-compatible object store. | Licence and project direction have changed; verify. |
| [Garage](https://garagehq.deuxfleurs.fr/) | AGPL-3.0 | Lightweight distributed S3 store. | Low-resource alternative. |
| [SeaweedFS / RustFS](https://seaweedfs.com/) | Apache-2.0 | High-throughput S3-compatible stores. | Newer alternatives. |

## Gap

AWS’s global durability guarantees and entitlement layers are operational; the API itself is open.

## Verdict

Available. Several mature S3-compatible open object stores exist.

## Sources

- https://iomete.com/resources/blog/evaluating-s3-compatible-storage-for-lakehouse
- https://lwn.net/Articles/1077739/
- https://lowcloud.io/en/blog/s3-compatible-object-storage

## Provenance

- Catalog record: [`catalog/products.jsonl`](../../products.jsonl) (`aws-s3`)
- Research dossier: [`research/companies/amazon_aws/products/aws-s3.md`](../../../research/companies/amazon_aws/products/aws-s3.md)
- REA web-surface report: [`catalog/rea/amazon_aws/aws-s3.md`](../../rea/amazon_aws/aws-s3.md)
