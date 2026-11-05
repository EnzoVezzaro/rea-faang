---
schema_version: "1.0"
id: "amazon-chime"
company_id: "amazon_aws"
name: "Amazon Chime"
aliases:
  - "Chime"
product_type: "messaging"
categories:
  - "video-conferencing"
  - "chat"
  - "calling"
lifecycle_status: "discontinued"
official_url: "https://aws.amazon.com/chime/"
official_docs_url: "https://docs.aws.amazon.com/chime/"
official_source_urls:
  - "https://aws.amazon.com/chime/getting-started/"
  - "https://aws.amazon.com/blogs/messaging-and-targeting/update-on-support-for-amazon-chime/"
research_status: "retired"
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

Amazon Chime was AWS's meetings, chat and business-calling service. AWS ended support on February 20, 2026. Amazon Chime SDK remains a separate service and is not treated as retired by this record.

# 2. Product identity and lifecycle

- **Official name:** Amazon Chime
- **Company:** Amazon Web Services
- **Lifecycle:** Discontinued
- **End of support:** February 20, 2026
- **Official documentation:** https://docs.aws.amazon.com/chime/

# 3. Historical capabilities

Historical AWS documentation describes meetings, chat, screen sharing, scheduling, user administration and Business Calling.

# 4. Technical architecture

Not researched as a current product. Historical public documentation exposed client, console, API and CLI surfaces; current access is constrained by end-of-support status.

# 5. User workflows

Historical workflows included joining and hosting meetings, chat, scheduling, account administration and calling. These are not current availability claims.

# 6. Pricing and access

Historical pricing was usage-based for Pro meeting hosts. Current product access and management are ended; verify any migration or data-retention requirement with AWS Support.

# 7. API and integration surface

Historical API and AWS CLI references exist in the archived documentation. The Amazon Chime SDK is explicitly separate and should be analyzed under its own catalog entry.

# 8. Existing open-source alternatives

Not researched for a build recommendation. The record is retained for lifecycle completeness, not as a current build target.

# 9. Alternative comparison

No equivalence is claimed. Current communications alternatives must be researched separately by use case and license.

# 10. Missing capabilities and opportunity analysis

No new implementation is recommended from this retired entry alone.

# 11. REA implementation strategy

Do not run a current-product build workflow from this entry. Use it only for historical surface analysis or migration research, and keep Amazon Chime SDK separate.

# 12. Security, privacy, and compliance

Historical security and retention behavior requires product-specific migration evidence; do not infer current availability.

# 13. Evidence register

- https://aws.amazon.com/chime/getting-started/ — AWS end-of-support notice.
- https://aws.amazon.com/blogs/messaging-and-targeting/update-on-support-for-amazon-chime/ — announced support sunset and distinction from Chime SDK.

# 14. Unknowns

- Data deletion and migration paths for former customers.
- Exact archival availability of historical APIs and clients.
- Which current AWS or third-party service replaces each historical workflow.

# 15. Research status

`retired`: the lifecycle status is verified from AWS; no current implementation or parity claim is made.
