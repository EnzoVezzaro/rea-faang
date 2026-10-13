# REA catalog

Reverse-engineering observations of each catalogued product's **public web surface**,
captured with [REA](https://github.com/morluto/rea) (`rea-agents`). One report per
product, plus the raw REA Evidence for provenance.

- Products captured: **34/34**
- Generated: 2026-10-13T19:04:55.002Z
- Regenerate: `npm run rea:catalog`

## Method and scope

REA analyses concrete targets (binaries, app bundles, websites), not product
concepts. Without the vendors' artifacts, the only available target is each
product's public `official_url`, observed through REA's Playwright browser
scenario provider: a headless browser loads the public page and REA returns the
final URL and accessibility outline as Evidence. **Public, unauthenticated pages
only** — no login, no access-control bypass. See the repository's
[Responsible Reverse Engineering](../../README.md) policy.

## Products

### Amazon (`amazon`)

| Product | Target | Status | Evidence | Report |
|---|---|---|---|---|
| Amazon Online Retail | https://www.amazon.com/ | captured | `ev_81ed5913b…` | [report](amazon/amazon-online-retail.md) |
| Amazon Prime | https://www.amazon.com/prime | captured | `ev_4d85a3e73…` | [report](amazon/amazon-prime.md) |

### Amazon Web Services (`amazon_aws`)

| Product | Target | Status | Evidence | Report |
|---|---|---|---|---|
| Amazon EC2 | https://aws.amazon.com/ec2/ | captured | `ev_7c39c7a26…` | [report](amazon_aws/amazon-ec2.md) |
| Amazon EKS | https://aws.amazon.com/eks/ | captured | `ev_680d5f654…` | [report](amazon_aws/amazon-eks.md) |
| API Gateway | https://aws.amazon.com/api-gateway/ | captured | `ev_bf18af6d1…` | [report](amazon_aws/aws-api-gateway.md) |
| ECS | https://aws.amazon.com/ecs/ | captured | `ev_30ff92fcf…` | [report](amazon_aws/aws-ecs.md) |
| AWS Lambda | https://aws.amazon.com/lambda/ | captured | `ev_22aedf7d0…` | [report](amazon_aws/aws-lambda.md) |
| Amazon RDS | https://aws.amazon.com/rds/ | captured | `ev_b184295d3…` | [report](amazon_aws/aws-rds.md) |
| Amazon S3 | https://aws.amazon.com/s3/ | captured | `ev_f20b86665…` | [report](amazon_aws/aws-s3.md) |
| SQS | https://aws.amazon.com/sqs/ | captured | `ev_095e3c60d…` | [report](amazon_aws/aws-sqs.md) |

### Apple (`apple`)

| Product | Target | Status | Evidence | Report |
|---|---|---|---|---|
| Final Cut Pro | https://www.apple.com/final-cut-pro/ | captured | `ev_f5e8b0549…` | [report](apple/apple-final-cut-pro.md) |
| iOS | https://www.apple.com/ios/ | captured | `ev_ce697ef64…` | [report](apple/apple-ios.md) |
| Keynote | https://www.apple.com/keynote/ | captured | `ev_e072dbee1…` | [report](apple/apple-keynote.md) |
| Logic Pro | https://www.apple.com/logic-pro/ | captured | `ev_6ec0f8762…` | [report](apple/apple-logic-pro.md) |
| macOS | https://www.apple.com/macos/ | captured | `ev_5be5899a6…` | [report](apple/apple-macos.md) |
| Numbers | https://www.apple.com/numbers/ | captured | `ev_7a2edeb45…` | [report](apple/apple-numbers.md) |
| Pages | https://www.apple.com/pages/ | captured | `ev_2f50324bb…` | [report](apple/apple-pages.md) |
| Safari | https://www.apple.com/safari/ | captured | `ev_d016bd159…` | [report](apple/apple-safari.md) |
| Vision Pro | https://www.apple.com/apple-vision-pro/ | captured | `ev_506818f02…` | [report](apple/apple-vision-pro.md) |
| Xcode | https://developer.apple.com/xcode/ | captured | `ev_4d2894a8d…` | [report](apple/apple-xcode.md) |

### Google (`google`)

| Product | Target | Status | Evidence | Report |
|---|---|---|---|---|
| Android | https://www.android.com/ | captured | `ev_98d731fef…` | [report](google/android.md) |
| Gmail | https://mail.google.com/ | captured | `ev_469bd2dae…` | [report](google/gmail.md) |
| Google Chrome | https://www.google.com/chrome/ | captured | `ev_a9078dc8c…` | [report](google/google-chrome.md) |
| Google Cloud | https://cloud.google.com/ | captured | `ev_b6ba5680b…` | [report](google/google-cloud.md) |
| Firebase | https://firebase.google.com/ | captured | `ev_d99e81bf8…` | [report](google/google-firebase.md) |
| Google Gemini | https://gemini.google.com/ | captured | `ev_ee78d9ac8…` | [report](google/google-gemini.md) |
| Google Maps | https://maps.google.com/ | captured | `ev_3feba79b4…` | [report](google/google-maps.md) |
| Google Search | https://www.google.com/ | captured | `ev_3e6b1b7bf…` | [report](google/google-search.md) |
| TensorFlow | https://www.tensorflow.org/ | captured | `ev_89d56862c…` | [report](google/google-tensorflow.md) |
| Google Workspace | https://workspace.google.com/ | captured | `ev_24efa0744…` | [report](google/google-workspace.md) |
| YouTube | https://www.youtube.com/ | captured | `ev_74e627d3b…` | [report](google/youtube.md) |

### Meta (`meta`)

| Product | Target | Status | Evidence | Report |
|---|---|---|---|---|
| Llama | https://ai.meta.com/llama/ | captured | `ev_9d8633a6f…` | [report](meta/meta-llama.md) |
| WhatsApp | https://www.whatsapp.com/ | captured | `ev_5073e5492…` | [report](meta/meta-whatsapp.md) |

### Netflix (`netflix`)

| Product | Target | Status | Evidence | Report |
|---|---|---|---|---|
| Netflix Streaming | https://www.netflix.com/ | captured | `ev_ce771cfc0…` | [report](netflix/netflix-streaming.md) |

---

_Generated by `tools/rea-catalog.mjs`. Re-running REA on a live page produces new
Evidence; comparisons belong in a separate, deliberate pass._
