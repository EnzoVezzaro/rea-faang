# Expanded FAANG+ catalog scope

This document defines the expansion of the current seed catalog. The existing
84 entries are not the complete product universe; they are the first research
seed. New entries remain `pending` until their identity, official source and
scope are verified.

Current state of the inventory (reproducible with
`node tools/catalog-gap-report.mjs`): 84 canonical products, 1,399 product-level
candidates awaiting review, 35 duplicates merged and listed separately, and 144
navigation/editorial rows excluded from the product count. See
[`catalog-gap-report.md`](catalog-gap-report.md) for the per-company breakdown and
the promotion gate. This is a reconciliation of the documented scope, not a claim
of permanent completeness.

## Scope

The working scope is **FAANG plus Microsoft**, because Microsoft was explicitly
requested for the same inventory. The groups are:

- Google: consumer, developer, Workspace, advertising, Android, YouTube and
  Google Cloud products.
- Apple: hardware, operating systems, applications, services and developer
  platforms.
- Amazon/AWS: consumer products plus AWS services and developer platforms.
- Meta: Facebook, Instagram, WhatsApp, Messenger, Threads, Reality Labs,
  advertising and developer products.
- Netflix: streaming, advertising, games, studio and technology products that
  have a public product identity.
- Microsoft: Azure, Microsoft 365, Dynamics 365, Power Platform, Windows,
  Xbox, developer and security products.

“All products” is maintained as a public-catalog inventory, not as every SKU,
region, API operation, model version, plan, marketplace listing or internal
system. Those are separate entities and must not inflate the product count.

## Official source catalogs

| Group | Source | Inventory status |
|---|---|---|
| Google | <https://about.google/products/> and <https://cloud.google.com/products/> | Expand from the public product pages; Google Cloud states 150+ products. |
| Apple | <https://www.apple.com/sitemap/> | Expand products, applications, services and platforms; deduplicate aliases. |
| Amazon/AWS | <https://aws.amazon.com/products/> and <https://aws.amazon.com/documentation-overview/> | Expand service-level entries; exclude documentation topics and duplicate category labels. |
| Meta | <https://about.meta.com/technologies/> and official Meta product announcements | Include public products and developer platforms; mark ambiguous initiatives pending. |
| Netflix | <https://www.netflix.com/> and official Netflix technology/product pages | Include public member, advertising, games and studio products; do not treat every title as a product. |
| Microsoft | <https://azure.microsoft.com/en-us/sitemap>, <https://www.microsoft.com/en-us/microsoft-365/products-apps-services> and <https://learn.microsoft.com/en-us/power-platform/> | Combine Azure, Microsoft 365, Dynamics, Power Platform and consumer/developer products with deduplication. |

## Required fields for every candidate

Each candidate must have:

```json
{
  "id": "stable-company-product-id",
  "company_id": "google|apple|amazon|amazon_aws|meta|netflix|microsoft",
  "name": "Official product name",
  "product_type": "normalized category",
  "official_url": "https://...",
  "source_catalog": "official catalog URL",
  "inventory_status": "candidate|verified|deprecated|duplicate",
  "research_status": "pending"
}
```

`research_status: pending` is mandatory for newly inventoried products. A
catalog entry is not considered researched merely because its public landing
page was captured by REA. Full research requires a dossier, cited evidence,
unknowns, and reviewer validation.

## Acceptance criteria

1. The expanded candidate list contains at least 200 distinct product-level
   entries before promotion into the canonical research catalog. — **met**:
   1,399 candidates in `catalog/manifests/faang-expanded-candidates.json`.
2. Every entry has an official source and stable ID.
3. Duplicates, plans, regions, APIs, SKUs and internal systems are classified
   separately instead of being counted as products.
4. All unresearched entries are explicitly `pending`.
5. The canonical catalog, manifest and generated reports are updated only after
   the candidate inventory passes validation.

This is an inventory expansion task, not a claim that every public company
catalog can ever be permanently complete; vendor catalogs change continuously.
