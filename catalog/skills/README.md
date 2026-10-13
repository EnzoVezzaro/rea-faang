# Open-source skills catalog

One **skill-structured** markdown file per catalogued FAANG product. Each file
follows the skill contract — YAML frontmatter with `name` and `description`,
then the instructions — and answers one question for that product: *is there an
open-source alternative already, and if not, what is pending?*

- **24 available** — a mature open-source project covers the product's core.
- **7 partial** — open-source coverage exists but leaves a material gap.
- **3 pending to open-source** — no open-source alternative verified.

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

| Product | ID | Open-source status | Lead alternative |
|---|---|---|---|
| [Amazon Online Retail](amazon/amazon-online-retail.md) | `amazon-online-retail` | available | Medusa |
| [Amazon Prime](amazon/amazon-prime.md) | `amazon-prime` | pending to open-source | Coop models / community group-buy |

### Amazon Web Services (`amazon_aws`)

| Product | ID | Open-source status | Lead alternative |
|---|---|---|---|
| [Amazon EC2](amazon_aws/amazon-ec2.md) | `amazon-ec2` | available | OpenStack |
| [Amazon EKS](amazon_aws/amazon-eks.md) | `amazon-eks` | available | k3s |
| [Amazon RDS](amazon_aws/aws-rds.md) | `aws-rds` | available | CloudNativePG |
| [Amazon S3](amazon_aws/aws-s3.md) | `aws-s3` | available | Ceph (RADOS Gateway) |
| [API Gateway](amazon_aws/aws-api-gateway.md) | `aws-api-gateway` | available | Apache APISIX |
| [AWS Lambda](amazon_aws/aws-lambda.md) | `aws-lambda` | available | OpenFaaS |
| [ECS](amazon_aws/aws-ecs.md) | `aws-ecs` | available | Kubernetes |
| [SQS](amazon_aws/aws-sqs.md) | `aws-sqs` | available | RabbitMQ |

### Apple (`apple`)

| Product | ID | Open-source status | Lead alternative |
|---|---|---|---|
| [Final Cut Pro](apple/apple-final-cut-pro.md) | `apple-final-cut-pro` | available | Kdenlive |
| [iOS](apple/apple-ios.md) | `apple-ios` | pending to open-source | postmarketOS |
| [Keynote](apple/apple-keynote.md) | `apple-keynote` | available | LibreOffice Impress |
| [Logic Pro](apple/apple-logic-pro.md) | `apple-logic-pro` | available | Ardour |
| [macOS](apple/apple-macos.md) | `apple-macos` | pending to open-source | Linux distributions (Ubuntu, Fedora, elementary) |
| [Numbers](apple/apple-numbers.md) | `apple-numbers` | available | LibreOffice Calc |
| [Pages](apple/apple-pages.md) | `apple-pages` | available | LibreOffice Writer |
| [Safari](apple/apple-safari.md) | `apple-safari` | partial | WebKit |
| [Vision Pro](apple/apple-vision-pro.md) | `apple-vision-pro` | partial | Monado |
| [Xcode](apple/apple-xcode.md) | `apple-xcode` | partial | xtool |

### Google (`google`)

| Product | ID | Open-source status | Lead alternative |
|---|---|---|---|
| [Android](google/android.md) | `android` | available | AOSP |
| [Firebase](google/google-firebase.md) | `google-firebase` | available | Supabase |
| [Gmail](google/gmail.md) | `gmail` | available | Mailcow |
| [Google Chrome](google/google-chrome.md) | `google-chrome` | available | Chromium |
| [Google Cloud](google/google-cloud.md) | `google-cloud` | available | OpenStack |
| [Google Gemini](google/google-gemini.md) | `google-gemini` | partial | Llama / Mistral / Qwen / Gemma |
| [Google Maps](google/google-maps.md) | `google-maps` | available | OpenStreetMap |
| [Google Search](google/google-search.md) | `google-search` | partial | SearXNG |
| [Google Workspace](google/google-workspace.md) | `google-workspace` | available | Nextcloud |
| [TensorFlow](google/google-tensorflow.md) | `google-tensorflow` | available | TensorFlow itself |
| [YouTube](google/youtube.md) | `youtube` | available | PeerTube |

### Meta (`meta`)

| Product | ID | Open-source status | Lead alternative |
|---|---|---|---|
| [Llama](meta/meta-llama.md) | `meta-llama` | partial | Mistral (Apache-2.0 models) |
| [WhatsApp](meta/meta-whatsapp.md) | `meta-whatsapp` | available | Matrix / Element |

### Netflix (`netflix`)

| Product | ID | Open-source status | Lead alternative |
|---|---|---|---|
| [Netflix Streaming](netflix/netflix-streaming.md) | `netflix-streaming` | partial | Jellyfin |

## Status legend

| Status | Meaning |
|---|---|
| `available` | A mature open-source project covers the product's core function and can be self-hosted or run locally. |
| `partial` | Open-source coverage exists but leaves a material gap: scale, a proprietary service plane, licensed content/IP, or hardware. |
| `pending` | No open-source alternative was verified. The product is **pending to open-source**. |

## Layout

```
catalog/skills/
├── README.md                    # this index
└── <company_id>/<product_id>.md # one skill-structured file per product
```

Generated by [`tools/skills-catalog.mjs`](../../tools/skills-catalog.mjs) from
[`tools/skills/catalog-data.mjs`](../../tools/skills/catalog-data.mjs) and
`catalog/products.jsonl`. Do not edit the generated files by hand.
