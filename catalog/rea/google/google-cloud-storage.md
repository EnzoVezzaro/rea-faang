# REA web-surface report — Google Cloud Storage (`google-cloud-storage`)

Browser capture of the public web surface of Google Cloud Storage, recorded with REA.

| | |
|---|---|
| Product | Google Cloud Storage (`google-cloud-storage`) |
| Company | Google |
| Target | https://cloud.google.com/storage |
| Resolved URL | https://cloud.google.com/storage |
| Page title | Cloud Storage |
| Captured | 2026-10-14T03:54:09.582Z |
| Status | captured |
| REA Evidence ID | `ev_f16fb300eeeba95e27355e5f61789b039c7bfcc5cb0aed21c155f9aac008beed` |
| REA provider | rea-playwright-browser-scenario v1 |
| Browser | Chromium 155.0.8059.79 |
| Confidence | observed |
| Completeness | complete |

## Method

REA's `capture-browser-scenario` provider launched a headless Chrome profile,
navigated to the product's public `official_url`, waited for the page to settle,
and captured the final URL and the accessibility outline. Analysis runs locally;
only publicly reachable pages are observed. No authentication is attempted and no
access control is bypassed.

```json
{
  "browser": {
    "mode": "launch",
    "executable_path": "<chrome>",
    "headless": true
  },
  "start_url": {
    "url": "https://cloud.google.com/storage"
  },
  "actions": [
    {
      "step_id": "settle",
      "action": "wait_for_timeout",
      "duration_ms": 2500
    }
  ],
  "capture": {
    "at_end": [
      "url",
      "accessibility"
    ]
  }
}
```

## Observations

### Headings

- Cloud Storage
- Object storage for companies of all sizes
- Product highlights
- Take action with Storage Intelligence
- Accelerate your data access
- Object- and bucket-level permissions
- Leading analytics and ML/AI tools
- Automatic storage class transitions
- To use Cloud Storage, you’ll first create a bucket, a basic container that holds your data in Cloud Storage. You’ll then upload objects into that bucket—where you can download, share, and manage objects.
- Backups and archives
- Tutorials, quickstarts, & labs
- Use Cloud Storage for backup, archives, and recovery
- Media content storage and delivery
- Learning resources
- Store data to stream audio or video
- Data lakes and big data analytics
- Create a data lake for analytics
- Machine learning and AI
- Deploy an AI summarization solution in the Google Cloud console
- Host a website
- Build, host, and run dynamic websites in the Google Cloud console
- Pricing calculator
- Custom quote
- Start your proof of concept
- New customers get $300 in free credits to try Cloud Storage and other Google Cloud products

### Landmarks

- navigation: Page Contents
- complementary: Product highlights 1
- complementary: Related content 1
- banner
- navigation
- contentinfo
- navigation: Footer Links
- navigation: Utility links

### Links

- [Cloud Storage](/storage#object-storage-for-companies-of-all-sizes)
- [Features](/storage#features)
- [Options](/storage#storage-options)
- [How It Works](/storage#how-it-works)
- [Common Uses](/storage#common-uses)
- [Backups and archives](/storage#backups-and-archives)
- [Media content storage and delivery](/storage#media-content-storage-and-delivery)
- [Data lakes and big data analytics](/storage#data-lakes-and-big-data-analytics)
- [Machine learning and AI](/storage#machine-learning-and-ai)
- [Host a website](/storage#host-a-website)
- [Generate a solution](/storage#what-problem-are-you-trying-to-solve)
- [Pricing](/storage#pricing)
- [Business Case](/storage#business-case)
- [FAQ](/storage#section-1)
- [Release notes](https://cloud.google.com/storage/docs/release-notes)
- [Documentation](https://cloud.google.com/storage/docs)
- [Resources and guides](https://cloud.google.com/architecture)
- [Training](https://www.cloudskillsboost.google/catalog?keywords=Storage&locale=)
- [85% of enterprise data is unstructured. Don't let it become dark data. Watch the fireside chat to learn how smart storage instantly becomes your AI foundation.](https://www.youtube.com/watch?v=yF_V0TYwSyE)
- [Try Storage free](https://console.cloud.google.com/freetrial/?redirectPath=/storage)
- [Contact sales](https://cloud.google.com/contact)
- [personal, team, and block storage options](https://cloud.google.com/products/storage)
- [Automatically transition to lower-cost storage classes](/storage#features)
- [Standard, nearline, coldline, and archive storage options](/storage#options)
- [Fast, low-cost, highly durable archive and backup storage](/storage#common-uses)
- [Cloud Storage Cloud Storage in a minute 1 min video](https://www.youtube.com/watch?v=wNOs3LlsH6k)
- [Storage Intelligence](https://cloud.google.com/storage/docs/storage-intelligence/overview)
- [Insights Datasets](https://cloud.google.com/storage/docs/insights/datasets)
- [Batch Operations](https://cloud.google.com/storage/docs/batch-operations/overview)
- [Bucket Relocation](https://cloud.google.com/storage/docs/bucket-relocation/overview)
- [ESG logo Discover how Google Cloud's smart storage is getting customers ready for the AI era. Read ESG’s Showcase report.](https://services.google.com/fh/files/misc/google_cloud_smart_storage_esg.pdf)
- [Rapid Cache](https://docs.cloud.google.com/storage/docs/rapid/rapid-cache)
- [Cloud Identity and Access Management (IAM)](https://cloud.google.com/storage/docs/access-control/using-iam-permissions)
- [data warehouse](https://cloud.google.com/bigquery)
- [open source analytics](https://cloud.google.com/dataproc)
- [machine learning (ML) models](https://cloud.google.com/products/gemini-enterprise-agent-platform)
- [Data Agent Kit](https://docs.cloud.google.com/data-cloud-extension)
- [Model Context Protocol](https://modelcontextprotocol.io/docs/getting-started/intro)
- [BigQuery magnifying glass Start querying Cloud Storage data with BigQuery](https://cloud.google.com/bigquery/docs/external-data-cloud-storage)
- [Object Lifecycle Management (OLM)](https://cloud.google.com/storage/docs/lifecycle)

### Controls

- button: View all features
- button: Solution Prompt Search Button
- button: Toggle all
- button: Does Cloud Storage work for personal photos, videos, and files? 
- button: How does Cloud Storage differ from other types of storage? 
- button: Search

## Limitations (from REA)

- Artifact identity is unavailable for this observation.
- Event sequence records provider receipt order; simultaneous browser causality is not inferred.
- Network content is retained only when selected; response bytes are browser-decoded, not compressed wire bytes.
- Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage.
- Network content reads settle within 5 seconds each and never wait for unfinished responses or refetch them.
- Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality.
- Storage values are hashed only after declared-secret redaction.
- Browser host platform and architecture were not observed.

## Provenance

- Raw REA Evidence: `catalog/rea/evidence/google-cloud-storage.json`
- Evidence ID: `ev_f16fb300eeeba95e27355e5f61789b039c7bfcc5cb0aed21c155f9aac008beed`
- Accessibility outline: 47974 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
