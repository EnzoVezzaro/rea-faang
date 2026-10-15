# REA web-surface report — Pub/Sub (`google-pubsub`)

Browser capture of the public web surface of Pub/Sub, recorded with REA.

| | |
|---|---|
| Product | Pub/Sub (`google-pubsub`) |
| Company | Google |
| Target | https://cloud.google.com/pubsub |
| Resolved URL | https://cloud.google.com/pubsub |
| Page title | Pub/Sub |
| Captured | 2026-10-14T03:54:16.305Z |
| Status | captured |
| REA Evidence ID | `ev_58973d20756f48b27d3538f7868fe619b601dcd5be33abeea5b00a1040de1aea` |
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
    "url": "https://cloud.google.com/pubsub"
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

- Pub/Sub
- High availability made simple
- No-planning, auto-everything
- Easy, open foundation for real-time data systems
- Key features
- Stream analytics and connectors
- In-order delivery at scale
- Simplified streaming ingestion with native integrations
- Learn from customers using Pub/Sub
- What's new
- Documentation
- What is Pub/Sub?
- Introduction to Pub/Sub
- In-order message delivery
- Not seeing what you’re looking for?
- Explore more docs
- Use cases
- Stream analytics
- Asynchronous microservices integration
- All features
- Pricing
- Take the next step
- Need help getting started?
- Work with a trusted partner
- Continue browsing

### Landmarks

- complementary: Explore more docs 1
- banner
- navigation
- contentinfo
- navigation: Footer Links
- navigation: Utility links

### Links

- [Join us Nov 4 to discover innovations in databases, analytics, BI and storage for trusted agents. Register now.](https://cloudonair.withgoogle.com/events/trusted-agents-real-outcomes-agentic-data-cloud)
- [Benefits](/pubsub#benefits)
- [Key features](/pubsub#key-features)
- [Customers](/pubsub#customers)
- [What's new](/pubsub#whats-new)
- [Documentation](/pubsub#documentation)
- [Use cases](/pubsub#use-cases)
- [Stream analytics](/pubsub#stream-analytics)
- [Asynchronous microservices integration](/pubsub#asynchronous-microservices-integration)
- [Generate a solution](/pubsub#what-problem-are-you-trying-to-solve)
- [All features](/pubsub#all-features)
- [Pricing](/pubsub#pricing)
- [Take the next step](/pubsub#take-the-next-step)
- [Try Pub/Sub free](https://console.cloud.google.com/freetrial)
- [Contact sales](https://cloud.google.com/contact)
- [data warehouse solution](https://console.cloud.google.com/freetrial?redirectPath=/products/solutions/details/data-warehouse)
- [BigQuery](https://cloud.google.com/bigquery)
- [Dataflow](https://cloud.google.com/dataflow)
- [controls](https://cloud.google.com/pubsub/docs/how-to#operations-and-administration)
- [Pub/Sub logo connecting to different devices VIDEO Learn Pub/Sub in a minute, including how it works and common use cases 1:45](https://www.youtube.com/watch?v=jLI-84UjZLE)
- [Dataflow](/dataflow/)
- [BigQuery](https://cloud.google.com/pubsub/docs/bigquery)
- [Cloud Storage](https://cloud.google.com/pubsub/docs/cloudstorage)
- [View all features](/pubsub#all-features)
- [CME group logo Case study CME Group uses Pub/Sub to offer real-time market data, helping firms mitigate risk and drive revenue. 5-min read](https://cloud.google.com/customers/cme-group)
- [Sky Case study Sky scales event publishing with Pub/Sub to build its next generation Sky Q box. 5-min read](https://cloud.google.com/customers/sky-uk)
- [See all customers](https://cloud.google.com/customers)
- [Sign up](https://cloud.google.com/newsletter)
- [real time AI at Next Video Use real-time data for AI/ML workloads in BigQuery Watch video](https://www.youtube.com/watch?v=SKv6bbwSL5I)
- [Pub/Sub Blog post Pub/Sub highlights from the last year Read the blog](https://cloud.google.com/blog/products/data-analytics/pubsub-highlights-of-2024)
- [Learn more](/pubsub/docs/overview)
- [Learn more](https://console.cloud.google.com/?tutorial=pubsub_quickstart)
- [Learn more](/pubsub/docs/create-topic-client-libraries)
- [Learn more](/pubsub/docs/ordering)
- [Learn more](/pubsub/docs/stream-messages-dataflow)
- [Learn more](https://cloud.google.com/pubsub/docs/publisher)
- [View all product documentation](/pubsub/docs)
- [Get a quick intro to using this product.](/pubsub/docs/quickstarts)
- [Learn to complete specific tasks with this product.](/pubsub/docs/how-to)
- [Browse guides and tutorials for this product.](/pubsub/docs/tutorials)

### Controls

- button: Previous slide
- button: Next slide
- button: Solution Prompt Search Button
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

- Raw REA Evidence: `catalog/rea/evidence/google-pubsub.json`
- Evidence ID: `ev_58973d20756f48b27d3538f7868fe619b601dcd5be33abeea5b00a1040de1aea`
- Accessibility outline: 28901 bytes
- Tool: REA (`rea-agents`) — https://github.com/morluto/rea
