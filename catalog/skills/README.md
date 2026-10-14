# Open-source skills catalog

One coding-agent build skill per catalogued FAANG product. Give the product's
Markdown file to your agent in your project; it provides product context,
research, reuse/build guidance and verification steps. The coverage counts below
describe alternative research only, not whether a product can be built.

- **40 mature alternatives listed** — a suitable open-source project is a candidate to evaluate.
- **29 partial alternative coverage** — projects cover some needs; review the documented gaps.
- **8 with no verified alternative** — ask your agent to assess current projects and build in your project.

Regenerate with `npm run skills:catalog` (or `node tools/skills-catalog.mjs`),
and verify without writing with `node tools/skills-catalog.mjs --check`.

## Method

Each product's dossier and REA web-surface report give the identity and
capabilities; the open-source landscape was found by searching the web for
existing open-source alternatives, and the pages consulted are listed under
**Sources** in each file. Licence identifiers are as reported by each project
and should be re-verified before relying on them. This catalog is a map of the
landscape, not legal advice.

## Products

### Amazon (`amazon`)

| Product | ID | Alternative coverage | Lead alternative |
|---|---|---|---|
| [Alexa](amazon/amazon-alexa.md) | `amazon-alexa` | partial alternative coverage | OpenVoiceOS |
| [Amazon Online Retail](amazon/amazon-online-retail.md) | `amazon-online-retail` | mature alternative listed | Medusa |
| [Amazon Prime](amazon/amazon-prime.md) | `amazon-prime` | no verified alternative | Coop models / community group-buy |
| [Kindle](amazon/amazon-kindle.md) | `amazon-kindle` | partial alternative coverage | KOReader |
| [Luna](amazon/amazon-luna.md) | `amazon-luna` | partial alternative coverage | Sunshine |

### Amazon Web Services (`amazon_aws`)

| Product | ID | Alternative coverage | Lead alternative |
|---|---|---|---|
| [Amazon EC2](amazon_aws/amazon-ec2.md) | `amazon-ec2` | mature alternative listed | OpenStack |
| [Amazon EKS](amazon_aws/amazon-eks.md) | `amazon-eks` | mature alternative listed | k3s |
| [Amazon RDS](amazon_aws/aws-rds.md) | `aws-rds` | mature alternative listed | CloudNativePG |
| [Amazon S3](amazon_aws/aws-s3.md) | `aws-s3` | mature alternative listed | Ceph (RADOS Gateway) |
| [API Gateway](amazon_aws/aws-api-gateway.md) | `aws-api-gateway` | mature alternative listed | Apache APISIX |
| [AWS Lambda](amazon_aws/aws-lambda.md) | `aws-lambda` | mature alternative listed | OpenFaaS |
| [Bedrock](amazon_aws/aws-bedrock.md) | `aws-bedrock` | partial alternative coverage | Ollama |
| [CloudFront](amazon_aws/aws-cloudfront.md) | `aws-cloudfront` | mature alternative listed | Apache Traffic Server |
| [DynamoDB](amazon_aws/aws-dynamodb.md) | `aws-dynamodb` | mature alternative listed | Apache Cassandra |
| [ECS](amazon_aws/aws-ecs.md) | `aws-ecs` | mature alternative listed | Kubernetes |
| [Elastic Container Registry (ECR)](amazon_aws/aws-ecr.md) | `aws-ecr` | mature alternative listed | Harbor |
| [ElastiCache](amazon_aws/aws-elasticache.md) | `aws-elasticache` | mature alternative listed | Valkey |
| [EventBridge](amazon_aws/aws-eventbridge.md) | `aws-eventbridge` | mature alternative listed | NATS |
| [Redshift](amazon_aws/aws-redshift.md) | `aws-redshift` | mature alternative listed | ClickHouse |
| [SageMaker](amazon_aws/aws-sagemaker.md) | `aws-sagemaker` | partial alternative coverage | Kubeflow |
| [Simple Notification Service (SNS)](amazon_aws/aws-sns.md) | `aws-sns` | mature alternative listed | NATS |
| [SQS](amazon_aws/aws-sqs.md) | `aws-sqs` | mature alternative listed | RabbitMQ |

### Apple (`apple`)

| Product | ID | Alternative coverage | Lead alternative |
|---|---|---|---|
| [Apple Music](apple/apple-music.md) | `apple-music` | partial alternative coverage | Navidrome |
| [Apple Pay](apple/apple-pay.md) | `apple-pay` | no verified alternative | — |
| [Apple Watch](apple/apple-watch.md) | `apple-watch` | partial alternative coverage | AsteroidOS |
| [FaceTime](apple/apple-facetime.md) | `apple-facetime` | partial alternative coverage | Jitsi Meet |
| [Final Cut Pro](apple/apple-final-cut-pro.md) | `apple-final-cut-pro` | mature alternative listed | Kdenlive |
| [iCloud](apple/apple-icloud.md) | `apple-icloud` | partial alternative coverage | Nextcloud |
| [iOS](apple/apple-ios.md) | `apple-ios` | no verified alternative | postmarketOS |
| [iPad](apple/apple-ipad.md) | `apple-ipad` | partial alternative coverage | Android Open Source Project |
| [iPhone](apple/apple-iphone.md) | `apple-iphone` | partial alternative coverage | Android Open Source Project |
| [Keynote](apple/apple-keynote.md) | `apple-keynote` | mature alternative listed | LibreOffice Impress |
| [Logic Pro](apple/apple-logic-pro.md) | `apple-logic-pro` | mature alternative listed | Ardour |
| [macOS](apple/apple-macos.md) | `apple-macos` | no verified alternative | Linux distributions (Ubuntu, Fedora, elementary) |
| [Messages (iMessage)](apple/apple-messages.md) | `apple-messages` | no verified alternative | Matrix (Synapse) |
| [Numbers](apple/apple-numbers.md) | `apple-numbers` | mature alternative listed | LibreOffice Calc |
| [Pages](apple/apple-pages.md) | `apple-pages` | mature alternative listed | LibreOffice Writer |
| [Passwords](apple/apple-passwords.md) | `apple-passwords` | mature alternative listed | Bitwarden |
| [Safari](apple/apple-safari.md) | `apple-safari` | partial alternative coverage | WebKit |
| [Siri](apple/apple-siri.md) | `apple-siri` | partial alternative coverage | OpenVoiceOS |
| [Vision Pro](apple/apple-vision-pro.md) | `apple-vision-pro` | partial alternative coverage | Monado |
| [Xcode](apple/apple-xcode.md) | `apple-xcode` | partial alternative coverage | xtool |

### Google (`google`)

| Product | ID | Alternative coverage | Lead alternative |
|---|---|---|---|
| [Android](google/android.md) | `android` | mature alternative listed | AOSP |
| [Firebase](google/google-firebase.md) | `google-firebase` | mature alternative listed | Supabase |
| [Gmail](google/gmail.md) | `gmail` | mature alternative listed | Mailcow |
| [Google Ads](google/google-ads.md) | `google-ads` | no verified alternative | — |
| [Google Analytics](google/google-analytics.md) | `google-analytics` | mature alternative listed | Matomo |
| [Google Calendar](google/google-calendar.md) | `google-calendar` | mature alternative listed | Nextcloud Calendar |
| [Google Chrome](google/google-chrome.md) | `google-chrome` | mature alternative listed | Chromium |
| [Google Classroom](google/google-classroom.md) | `google-classroom` | mature alternative listed | Moodle |
| [Google Cloud](google/google-cloud.md) | `google-cloud` | mature alternative listed | OpenStack |
| [Google Cloud Storage](google/google-cloud-storage.md) | `google-cloud-storage` | mature alternative listed | MinIO |
| [Google Docs](google/google-docs.md) | `google-docs` | partial alternative coverage | ONLYOFFICE Docs |
| [Google Drive](google/google-drive.md) | `google-drive` | partial alternative coverage | Nextcloud |
| [Google Gemini](google/google-gemini.md) | `google-gemini` | partial alternative coverage | Llama / Mistral / Qwen / Gemma |
| [Google Maps](google/google-maps.md) | `google-maps` | mature alternative listed | OpenStreetMap |
| [Google Meet](google/google-meet.md) | `google-meet` | mature alternative listed | Jitsi Meet |
| [Google News](google/google-news.md) | `google-news` | mature alternative listed | FreshRSS |
| [Google Photos](google/google-photos.md) | `google-photos` | partial alternative coverage | Immich |
| [Google Play](google/google-play.md) | `google-play` | partial alternative coverage | F-Droid |
| [Google Search](google/google-search.md) | `google-search` | partial alternative coverage | SearXNG |
| [Google Sheets](google/google-sheets.md) | `google-sheets` | partial alternative coverage | Grist |
| [Google Workspace](google/google-workspace.md) | `google-workspace` | mature alternative listed | Nextcloud |
| [Pub/Sub](google/google-pubsub.md) | `google-pubsub` | mature alternative listed | NATS |
| [TensorFlow](google/google-tensorflow.md) | `google-tensorflow` | mature alternative listed | TensorFlow itself |
| [YouTube](google/youtube.md) | `youtube` | mature alternative listed | PeerTube |
| [YouTube Music](google/youtube-music.md) | `youtube-music` | partial alternative coverage | Navidrome |

### Meta (`meta`)

| Product | ID | Alternative coverage | Lead alternative |
|---|---|---|---|
| [Facebook](meta/meta-facebook.md) | `meta-facebook` | partial alternative coverage | Mastodon |
| [Instagram](meta/meta-instagram.md) | `meta-instagram` | partial alternative coverage | Pixelfed |
| [Llama](meta/meta-llama.md) | `meta-llama` | partial alternative coverage | Mistral (Apache-2.0 models) |
| [Threads](meta/meta-threads.md) | `meta-threads` | mature alternative listed | Mastodon |
| [WhatsApp](meta/meta-whatsapp.md) | `meta-whatsapp` | mature alternative listed | Matrix / Element |

### Netflix (`netflix`)

| Product | ID | Alternative coverage | Lead alternative |
|---|---|---|---|
| [Netflix Games](netflix/netflix-games.md) | `netflix-games` | no verified alternative | — |
| [Netflix Kids](netflix/netflix-kids.md) | `netflix-kids` | partial alternative coverage | Jellyfin |
| [Netflix Profiles](netflix/netflix-profiles.md) | `netflix-profiles` | partial alternative coverage | Jellyfin |
| [Netflix Streaming](netflix/netflix-streaming.md) | `netflix-streaming` | partial alternative coverage | Jellyfin |
| [Tudum](netflix/netflix-tudum.md) | `netflix-tudum` | no verified alternative | — |

## Status legend

| Status | Meaning |
|---|---|
| `available` | A mature open-source project covers the product's core function and can be self-hosted or run locally. |
| `partial` | Open-source coverage exists but leaves a material gap: scale, a proprietary service plane, licensed content/IP, or hardware. |
| `pending` | This catalog has not verified a suitable open-source project. The product skill still guides your agent to assess projects and build in your project. |

## Layout

```
catalog/skills/
├── README.md                    # this index
└── <company_id>/<product_id>.md # one skill-structured file per product
```

Generated by [`tools/skills-catalog.mjs`](../../tools/skills-catalog.mjs) from
[`tools/skills/catalog-data.mjs`](../../tools/skills/catalog-data.mjs) and
`catalog/products.jsonl`. Do not edit the generated files by hand.
