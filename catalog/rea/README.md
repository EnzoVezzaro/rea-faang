# REA catalog

Reverse-engineering observations of each catalogued product's **public web surface**,
captured with [REA](https://github.com/morluto/rea) (`rea-agents`). One report per
product, plus the raw REA Evidence for provenance.

- Products captured: **77/77**
- Generated: 2026-10-14T04:00:33.511Z
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
| Alexa | https://developer.amazon.com/alexa | captured | `ev_922364d49…` | [report](amazon/amazon-alexa.md) |
| Kindle | https://www.amazon.com/kindle/ | captured | `ev_e18abe08b…` | [report](amazon/amazon-kindle.md) |
| Luna | https://luna.amazon.com/ | captured | `ev_5e2157296…` | [report](amazon/amazon-luna.md) |
| Amazon Online Retail | https://www.amazon.com/ | captured | `ev_81ed5913b…` | [report](amazon/amazon-online-retail.md) |
| Amazon Prime | https://www.amazon.com/prime | captured | `ev_4d85a3e73…` | [report](amazon/amazon-prime.md) |

### Amazon Web Services (`amazon_aws`)

| Product | Target | Status | Evidence | Report |
|---|---|---|---|---|
| Amazon EC2 | https://aws.amazon.com/ec2/ | captured | `ev_7c39c7a26…` | [report](amazon_aws/amazon-ec2.md) |
| Amazon EKS | https://aws.amazon.com/eks/ | captured | `ev_680d5f654…` | [report](amazon_aws/amazon-eks.md) |
| API Gateway | https://aws.amazon.com/api-gateway/ | captured | `ev_bf18af6d1…` | [report](amazon_aws/aws-api-gateway.md) |
| Bedrock | https://aws.amazon.com/bedrock/ | captured | `ev_5aacc9932…` | [report](amazon_aws/aws-bedrock.md) |
| CloudFront | https://aws.amazon.com/cloudfront/ | captured | `ev_dab6b57cb…` | [report](amazon_aws/aws-cloudfront.md) |
| DynamoDB | https://aws.amazon.com/dynamodb/ | captured | `ev_d762082f1…` | [report](amazon_aws/aws-dynamodb.md) |
| Elastic Container Registry (ECR) | https://aws.amazon.com/ecr/ | captured | `ev_efc5aad50…` | [report](amazon_aws/aws-ecr.md) |
| ECS | https://aws.amazon.com/ecs/ | captured | `ev_30ff92fcf…` | [report](amazon_aws/aws-ecs.md) |
| ElastiCache | https://aws.amazon.com/elasticache/ | captured | `ev_9196b0230…` | [report](amazon_aws/aws-elasticache.md) |
| EventBridge | https://aws.amazon.com/eventbridge/ | captured | `ev_c7282e3a6…` | [report](amazon_aws/aws-eventbridge.md) |
| AWS Lambda | https://aws.amazon.com/lambda/ | captured | `ev_22aedf7d0…` | [report](amazon_aws/aws-lambda.md) |
| Amazon RDS | https://aws.amazon.com/rds/ | captured | `ev_b184295d3…` | [report](amazon_aws/aws-rds.md) |
| Redshift | https://aws.amazon.com/redshift/ | captured | `ev_aefb1e80c…` | [report](amazon_aws/aws-redshift.md) |
| Amazon S3 | https://aws.amazon.com/s3/ | captured | `ev_f20b86665…` | [report](amazon_aws/aws-s3.md) |
| SageMaker | https://aws.amazon.com/sagemaker/ | captured | `ev_622fb72a7…` | [report](amazon_aws/aws-sagemaker.md) |
| Simple Notification Service (SNS) | https://aws.amazon.com/sns/ | captured | `ev_6ef49c937…` | [report](amazon_aws/aws-sns.md) |
| SQS | https://aws.amazon.com/sqs/ | captured | `ev_095e3c60d…` | [report](amazon_aws/aws-sqs.md) |

### Apple (`apple`)

| Product | Target | Status | Evidence | Report |
|---|---|---|---|---|
| FaceTime | https://www.apple.com/facetime/ | captured | `ev_a90e9ee26…` | [report](apple/apple-facetime.md) |
| Final Cut Pro | https://www.apple.com/final-cut-pro/ | captured | `ev_f5e8b0549…` | [report](apple/apple-final-cut-pro.md) |
| iCloud | https://www.icloud.com/ | captured | `ev_0b659aa4c…` | [report](apple/apple-icloud.md) |
| iOS | https://www.apple.com/ios/ | captured | `ev_ce697ef64…` | [report](apple/apple-ios.md) |
| iPad | https://www.apple.com/ipad/ | captured | `ev_09b86233e…` | [report](apple/apple-ipad.md) |
| iPhone | https://www.apple.com/iphone/ | captured | `ev_857cffdb1…` | [report](apple/apple-iphone.md) |
| Keynote | https://www.apple.com/keynote/ | captured | `ev_e072dbee1…` | [report](apple/apple-keynote.md) |
| Logic Pro | https://www.apple.com/logic-pro/ | captured | `ev_6ec0f8762…` | [report](apple/apple-logic-pro.md) |
| macOS | https://www.apple.com/macos/ | captured | `ev_5be5899a6…` | [report](apple/apple-macos.md) |
| Messages (iMessage) | https://www.apple.com/messages/ | captured | `ev_8273e3e1b…` | [report](apple/apple-messages.md) |
| Apple Music | https://www.apple.com/apple-music/ | captured | `ev_5580e369c…` | [report](apple/apple-music.md) |
| Numbers | https://www.apple.com/numbers/ | captured | `ev_7a2edeb45…` | [report](apple/apple-numbers.md) |
| Pages | https://www.apple.com/pages/ | captured | `ev_2f50324bb…` | [report](apple/apple-pages.md) |
| Passwords | https://support.apple.com/guide/iphone/passwords-iphf9219d8c9/ios | captured | `ev_b7b1420df…` | [report](apple/apple-passwords.md) |
| Apple Pay | https://www.apple.com/apple-pay/ | captured | `ev_a09c046e0…` | [report](apple/apple-pay.md) |
| Safari | https://www.apple.com/safari/ | captured | `ev_d016bd159…` | [report](apple/apple-safari.md) |
| Siri | https://www.apple.com/siri/ | captured | `ev_0aef99b34…` | [report](apple/apple-siri.md) |
| Vision Pro | https://www.apple.com/apple-vision-pro/ | captured | `ev_506818f02…` | [report](apple/apple-vision-pro.md) |
| Apple Watch | https://www.apple.com/watch/ | captured | `ev_844f9cbc1…` | [report](apple/apple-watch.md) |
| Xcode | https://developer.apple.com/xcode/ | captured | `ev_4d2894a8d…` | [report](apple/apple-xcode.md) |

### Google (`google`)

| Product | Target | Status | Evidence | Report |
|---|---|---|---|---|
| Android | https://www.android.com/ | captured | `ev_98d731fef…` | [report](google/android.md) |
| Gmail | https://mail.google.com/ | captured | `ev_469bd2dae…` | [report](google/gmail.md) |
| Google Ads | https://ads.google.com/ | captured | `ev_c0c102ec0…` | [report](google/google-ads.md) |
| Google Analytics | https://analytics.google.com/ | captured | `ev_01f1f4c1a…` | [report](google/google-analytics.md) |
| Google Calendar | https://calendar.google.com/ | captured | `ev_22491da4b…` | [report](google/google-calendar.md) |
| Google Chrome | https://www.google.com/chrome/ | captured | `ev_a9078dc8c…` | [report](google/google-chrome.md) |
| Google Classroom | https://classroom.google.com/ | captured | `ev_cc3b384d1…` | [report](google/google-classroom.md) |
| Google Cloud | https://cloud.google.com/ | captured | `ev_b6ba5680b…` | [report](google/google-cloud.md) |
| Google Cloud Storage | https://cloud.google.com/storage | captured | `ev_f16fb300e…` | [report](google/google-cloud-storage.md) |
| Google Docs | https://docs.google.com/ | captured | `ev_7e1a47338…` | [report](google/google-docs.md) |
| Google Drive | https://drive.google.com/ | captured | `ev_a76171b2c…` | [report](google/google-drive.md) |
| Firebase | https://firebase.google.com/ | captured | `ev_d99e81bf8…` | [report](google/google-firebase.md) |
| Google Gemini | https://gemini.google.com/ | captured | `ev_ee78d9ac8…` | [report](google/google-gemini.md) |
| Google Maps | https://maps.google.com/ | captured | `ev_3feba79b4…` | [report](google/google-maps.md) |
| Google Meet | https://meet.google.com/ | captured | `ev_ccfc7d122…` | [report](google/google-meet.md) |
| Google News | https://news.google.com/ | captured | `ev_f04699c32…` | [report](google/google-news.md) |
| Google Photos | https://photos.google.com/ | captured | `ev_2e5170026…` | [report](google/google-photos.md) |
| Google Play | https://play.google.com/ | captured | `ev_ec6171ac3…` | [report](google/google-play.md) |
| Pub/Sub | https://cloud.google.com/pubsub | captured | `ev_58973d207…` | [report](google/google-pubsub.md) |
| Google Search | https://www.google.com/ | captured | `ev_3e6b1b7bf…` | [report](google/google-search.md) |
| Google Sheets | https://sheets.google.com/ | captured | `ev_12e32b341…` | [report](google/google-sheets.md) |
| TensorFlow | https://www.tensorflow.org/ | captured | `ev_89d56862c…` | [report](google/google-tensorflow.md) |
| Google Workspace | https://workspace.google.com/ | captured | `ev_24efa0744…` | [report](google/google-workspace.md) |
| YouTube | https://www.youtube.com/ | captured | `ev_74e627d3b…` | [report](google/youtube.md) |
| YouTube Music | https://music.youtube.com/ | captured | `ev_6d6f87b3b…` | [report](google/youtube-music.md) |

### Meta (`meta`)

| Product | Target | Status | Evidence | Report |
|---|---|---|---|---|
| Facebook | https://www.facebook.com/ | captured | `ev_b659c3292…` | [report](meta/meta-facebook.md) |
| Instagram | https://www.instagram.com/ | captured | `ev_ae37a64de…` | [report](meta/meta-instagram.md) |
| Llama | https://ai.meta.com/llama/ | captured | `ev_9d8633a6f…` | [report](meta/meta-llama.md) |
| Threads | https://www.threads.net/ | captured | `ev_f66adcf2f…` | [report](meta/meta-threads.md) |
| WhatsApp | https://www.whatsapp.com/ | captured | `ev_5073e5492…` | [report](meta/meta-whatsapp.md) |

### Netflix (`netflix`)

| Product | Target | Status | Evidence | Report |
|---|---|---|---|---|
| Netflix Games | https://www.netflix.com/tudum/games | captured | `ev_353953024…` | [report](netflix/netflix-games.md) |
| Netflix Kids | https://www.netflix.com/kids | captured | `ev_309080a3e…` | [report](netflix/netflix-kids.md) |
| Netflix Profiles | https://www.netflix.com/ | captured | `ev_211ae07e5…` | [report](netflix/netflix-profiles.md) |
| Netflix Streaming | https://www.netflix.com/ | captured | `ev_ce771cfc0…` | [report](netflix/netflix-streaming.md) |
| Tudum | https://www.netflix.com/tudum | captured | `ev_d1f6ebad8…` | [report](netflix/netflix-tudum.md) |

---

_Generated by `tools/rea-catalog.mjs`. Re-running REA on a live page produces new
Evidence; comparisons belong in a separate, deliberate pass._
