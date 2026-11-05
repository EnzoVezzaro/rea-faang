# REA catalog

Reverse-engineering observations of each catalogued product's **public web surface**,
captured with [REA](https://github.com/morluto/rea) (`rea-agents`). One report per
product, plus the raw REA Evidence for provenance.

- Products captured: **193/193**
- Generated: 2026-11-04T02:54:54.138Z
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
| Alexa | https://developer.amazon.com/alexa | captured | `ev_f9ace3285…` | [report](amazon/amazon-alexa.md) |
| Kindle | https://www.amazon.com/kindle/ | captured | `ev_1801a5099…` | [report](amazon/amazon-kindle.md) |
| Luna | https://luna.amazon.com/ | captured | `ev_08666cddd…` | [report](amazon/amazon-luna.md) |
| Amazon Online Retail | https://www.amazon.com/ | captured | `ev_5af512b40…` | [report](amazon/amazon-online-retail.md) |
| Amazon Prime | https://www.amazon.com/prime | captured | `ev_39d84a935…` | [report](amazon/amazon-prime.md) |

### Amazon Web Services (`amazon_aws`)

| Product | Target | Status | Evidence | Report |
|---|---|---|---|---|
| Amazon AppFlow | https://aws.amazon.com/appflow/ | captured | `ev_51d95b29b…` | [report](amazon_aws/amazon-appflow.md) |
| Amazon Athena | https://aws.amazon.com/athena/ | captured | `ev_02c5ef6bd…` | [report](amazon_aws/amazon-athena.md) |
| Amazon Augmented AI | https://docs.aws.amazon.com/augmented-ai/ | captured | `ev_511965187…` | [report](amazon_aws/amazon-augmented-ai.md) |
| Amazon Aurora | https://aws.amazon.com/rds/aurora/ | captured | `ev_4b00af1f6…` | [report](amazon_aws/amazon-aurora.md) |
| Amazon Bio Discovery | https://aws.amazon.com/biodiscovery/ | captured | `ev_7dbc5ea5a…` | [report](amazon_aws/amazon-bio-discovery.md) |
| Amazon Braket | https://aws.amazon.com/braket/ | captured | `ev_fc08a1509…` | [report](amazon_aws/amazon-braket.md) |
| Amazon Chime | https://aws.amazon.com/chime/ | captured | `ev_5b5d84f8d…` | [report](amazon_aws/amazon-chime.md) |
| Amazon Chime SDK | https://aws.amazon.com/chime/chime-sdk/ | captured | `ev_4808cefbf…` | [report](amazon_aws/amazon-chime-sdk.md) |
| Amazon CloudSearch | https://aws.amazon.com/cloudsearch/ | captured | `ev_8fe146590…` | [report](amazon_aws/amazon-cloudsearch.md) |
| Amazon CloudWatch | https://aws.amazon.com/cloudwatch/ | captured | `ev_8e6289372…` | [report](amazon_aws/amazon-cloudwatch.md) |
| Amazon CodeGuru | https://aws.amazon.com/codeguru/ | captured | `ev_1056e7b1d…` | [report](amazon_aws/amazon-codeguru.md) |
| Amazon Cognito | https://aws.amazon.com/cognito/ | captured | `ev_10d5e0c1d…` | [report](amazon_aws/amazon-cognito.md) |
| Amazon Comprehend | https://aws.amazon.com/comprehend/ | captured | `ev_82618b6cc…` | [report](amazon_aws/amazon-comprehend.md) |
| Amazon Connect Customer | https://aws.amazon.com/connect/ | captured | `ev_b20e060f5…` | [report](amazon_aws/amazon-connect-customer.md) |
| Amazon Connect Decisions | https://aws.amazon.com/products/connect/decisions/ | captured | `ev_0640ff82a…` | [report](amazon_aws/amazon-connect-decisions.md) |
| Amazon Connect Health | https://aws.amazon.com/products/connect/health/ | captured | `ev_2fb0ef2fe…` | [report](amazon_aws/amazon-connect-health.md) |
| Amazon Connect Talent | https://aws.amazon.com/products/connect/talent/ | captured | `ev_1445c1937…` | [report](amazon_aws/amazon-connect-talent.md) |
| Amazon Data Firehose | https://aws.amazon.com/firehose/ | captured | `ev_462e46e2e…` | [report](amazon_aws/amazon-data-firehose.md) |
| Amazon Detective | https://aws.amazon.com/detective/ | captured | `ev_ffd223bd5…` | [report](amazon_aws/amazon-detective.md) |
| Amazon DevOps Guru | https://aws.amazon.com/devops-guru/ | captured | `ev_6384ac064…` | [report](amazon_aws/amazon-devops-guru.md) |
| Amazon DocumentDB | https://aws.amazon.com/documentdb/ | captured | `ev_7590b45b6…` | [report](amazon_aws/amazon-documentdb.md) |
| Amazon EC2 | https://aws.amazon.com/ec2/ | captured | `ev_e5cdbc55b…` | [report](amazon_aws/amazon-ec2.md) |
| Amazon EC2 Auto Scaling | https://aws.amazon.com/ec2/autoscaling/ | captured | `ev_6fb50f784…` | [report](amazon_aws/amazon-ec2-auto-scaling.md) |
| Amazon ECS Anywhere | https://aws.amazon.com/ecs/anywhere/ | captured | `ev_7052e7a89…` | [report](amazon_aws/amazon-ecs-anywhere.md) |
| Amazon EKS | https://aws.amazon.com/eks/ | captured | `ev_8fd4c40e6…` | [report](amazon_aws/amazon-eks.md) |
| Amazon EKS Anywhere | https://aws.amazon.com/eks/eks-anywhere/ | captured | `ev_b382ab73a…` | [report](amazon_aws/amazon-eks-anywhere.md) |
| Amazon EKS Distro | https://aws.amazon.com/eks/eks-distro/ | captured | `ev_e4479cdc3…` | [report](amazon_aws/amazon-eks-distro.md) |
| Amazon Elastic Block Store | https://aws.amazon.com/ebs/ | captured | `ev_fed4c77ea…` | [report](amazon_aws/amazon-elastic-block-store.md) |
| Amazon Elastic Container Service | https://aws.amazon.com/ecs/ | captured | `ev_02ed46262…` | [report](amazon_aws/amazon-elastic-container-service.md) |
| Amazon Elastic File System | https://aws.amazon.com/efs/ | captured | `ev_6b3289b8f…` | [report](amazon_aws/amazon-elastic-file-system.md) |
| Amazon Elastic Kubernetes Service | https://aws.amazon.com/eks/ | captured | `ev_85a7eb4c3…` | [report](amazon_aws/amazon-elastic-kubernetes-service.md) |
| Amazon ElastiCache for Memcached | https://aws.amazon.com/elasticache/ | captured | `ev_625856f6e…` | [report](amazon_aws/amazon-elasticache-memcached.md) |
| Amazon ElastiCache for Redis OSS | https://aws.amazon.com/elasticache/ | captured | `ev_30a776a34…` | [report](amazon_aws/amazon-elasticache-redis.md) |
| Amazon EMR | https://aws.amazon.com/emr/ | captured | `ev_644992be5…` | [report](amazon_aws/amazon-emr.md) |
| Amazon File Cache | https://aws.amazon.com/filecache/ | captured | `ev_34833aaad…` | [report](amazon_aws/amazon-file-cache.md) |
| Amazon Forecast | https://aws.amazon.com/forecast/ | captured | `ev_3a5d1a042…` | [report](amazon_aws/amazon-forecast.md) |
| Amazon Fraud Detector | https://aws.amazon.com/fraud-detector/ | captured | `ev_e32e27e77…` | [report](amazon_aws/amazon-fraud-detector.md) |
| Amazon FSx for Lustre | https://aws.amazon.com/fsx/lustre/ | captured | `ev_6c76778ca…` | [report](amazon_aws/amazon-fsx-lustre.md) |
| Amazon FSx for NetApp ONTAP | https://aws.amazon.com/fsx/netapp-ontap/ | captured | `ev_ac2f9501a…` | [report](amazon_aws/amazon-fsx-ontap.md) |
| Amazon FSx for OpenZFS | https://aws.amazon.com/fsx/openzfs/ | captured | `ev_3ea495f31…` | [report](amazon_aws/amazon-fsx-openzfs.md) |
| Amazon FSx for Windows File Server | https://aws.amazon.com/fsx/windows/ | captured | `ev_a979e3512…` | [report](amazon_aws/amazon-fsx-windows.md) |
| Amazon GameLift | https://aws.amazon.com/gamelift/ | captured | `ev_90cc264ed…` | [report](amazon_aws/amazon-gamelift.md) |
| Amazon GuardDuty | https://aws.amazon.com/guardduty/ | captured | `ev_1b020fd85…` | [report](amazon_aws/amazon-guardduty.md) |
| Amazon HealthLake | https://aws.amazon.com/healthlake/ | captured | `ev_6dd7c2f06…` | [report](amazon_aws/amazon-healthlake.md) |
| Amazon Inspector | https://aws.amazon.com/inspector/ | captured | `ev_bfdd1de52…` | [report](amazon_aws/amazon-inspector.md) |
| Amazon Interactive Video Service | https://aws.amazon.com/ivs/ | captured | `ev_79b345912…` | [report](amazon_aws/amazon-ivs.md) |
| Amazon Kendra | https://aws.amazon.com/kendra/ | captured | `ev_49c121ac2…` | [report](amazon_aws/amazon-kendra.md) |
| Amazon Keyspaces (for Apache Cassandra) | https://aws.amazon.com/keyspaces/ | captured | `ev_f4deda801…` | [report](amazon_aws/amazon-keyspaces.md) |
| Amazon Kinesis Data Streams | https://aws.amazon.com/kinesis/data-streams/ | captured | `ev_cd41a92ee…` | [report](amazon_aws/amazon-kinesis-data-streams.md) |
| Amazon Kinesis Video Streams | https://aws.amazon.com/kinesis/video-streams/ | captured | `ev_3b7b49cc9…` | [report](amazon_aws/amazon-kinesis-video-streams.md) |
| Amazon Lex | https://aws.amazon.com/lex/ | captured | `ev_55f032493…` | [report](amazon_aws/amazon-lex.md) |
| Amazon Lightsail | https://aws.amazon.com/lightsail/ | captured | `ev_1a6a5e4fe…` | [report](amazon_aws/amazon-lightsail.md) |
| Amazon Location Service | https://aws.amazon.com/location/ | captured | `ev_62891d0a0…` | [report](amazon_aws/amazon-location.md) |
| Amazon Lookout for Equipment | https://aws.amazon.com/lookout-for-equipment/ | captured | `ev_b71f8325d…` | [report](amazon_aws/amazon-lookout-equipment.md) |
| Amazon Lookout for Metrics | https://aws.amazon.com/lookout-for-metrics/ | captured | `ev_c384dcb3a…` | [report](amazon_aws/amazon-lookout-metrics.md) |
| Amazon Lookout for Vision | https://aws.amazon.com/lookout-for-vision/ | captured | `ev_e2c4ef7c3…` | [report](amazon_aws/amazon-lookout-vision.md) |
| Amazon Macie | https://aws.amazon.com/macie/ | captured | `ev_9f6ba1017…` | [report](amazon_aws/amazon-macie.md) |
| Amazon Managed Blockchain | https://aws.amazon.com/managed-blockchain/ | captured | `ev_e6cd17d27…` | [report](amazon_aws/amazon-managed-blockchain.md) |
| Amazon Managed Grafana | https://aws.amazon.com/grafana/ | captured | `ev_5533477b4…` | [report](amazon_aws/amazon-managed-grafana.md) |
| Amazon Managed Service for Prometheus | https://aws.amazon.com/prometheus/ | captured | `ev_fd631a84b…` | [report](amazon_aws/amazon-managed-prometheus.md) |
| Amazon Managed Service for Apache Flink | https://aws.amazon.com/managed-service-apache-flink/ | captured | `ev_a95daecee…` | [report](amazon_aws/amazon-managed-service-apache-flink.md) |
| Amazon Monitron | https://aws.amazon.com/monitron/ | captured | `ev_999b57da2…` | [report](amazon_aws/amazon-monitron.md) |
| Amazon MQ | https://aws.amazon.com/amazon-mq/ | captured | `ev_b306948a3…` | [report](amazon_aws/amazon-mq.md) |
| Amazon Managed Streaming for Apache Kafka | https://aws.amazon.com/msk/ | captured | `ev_66fec70e4…` | [report](amazon_aws/amazon-msk.md) |
| Amazon Managed Workflows for Apache Airflow | https://aws.amazon.com/managed-workflows-for-apache-airflow/ | captured | `ev_b54001711…` | [report](amazon_aws/amazon-mwaa.md) |
| Amazon Neptune | https://aws.amazon.com/neptune/ | captured | `ev_02bc5ac7f…` | [report](amazon_aws/amazon-neptune.md) |
| Amazon Nimble Studio | https://aws.amazon.com/nimble-studio/ | captured | `ev_199f4dde9…` | [report](amazon_aws/amazon-nimble-studio.md) |
| Amazon Nova Act | https://aws.amazon.com/nova/ | captured | `ev_2f37510ca…` | [report](amazon_aws/amazon-nova-act.md) |
| Amazon OpenSearch Service | https://aws.amazon.com/opensearch-service/ | captured | `ev_847857832…` | [report](amazon_aws/amazon-opensearch-service.md) |
| Amazon Personalize | https://aws.amazon.com/personalize/ | captured | `ev_33d87d7c6…` | [report](amazon_aws/amazon-personalize.md) |
| Amazon Pinpoint | https://aws.amazon.com/pinpoint/ | captured | `ev_c7d0e83ea…` | [report](amazon_aws/amazon-pinpoint.md) |
| Amazon Polly | https://aws.amazon.com/polly/ | captured | `ev_66cc563a8…` | [report](amazon_aws/amazon-polly.md) |
| Amazon Q Developer | https://aws.amazon.com/q/developer/ | captured | `ev_cbfaf40d7…` | [report](amazon_aws/amazon-q-developer.md) |
| Amazon QuickSight | https://aws.amazon.com/quicksight/ | captured | `ev_3990c5966…` | [report](amazon_aws/amazon-quicksight.md) |
| Amazon Rekognition | https://aws.amazon.com/rekognition/ | captured | `ev_7d5a666e7…` | [report](amazon_aws/amazon-rekognition.md) |
| Amazon Route 53 | https://aws.amazon.com/route53/ | captured | `ev_ed1d01058…` | [report](amazon_aws/amazon-route-53.md) |
| Amazon Security Lake | https://aws.amazon.com/security-lake/ | captured | `ev_5f3b4ad46…` | [report](amazon_aws/amazon-security-lake.md) |
| Amazon Simple Email Service | https://aws.amazon.com/ses/ | captured | `ev_4d21c4cc7…` | [report](amazon_aws/amazon-ses.md) |
| Amazon Textract | https://aws.amazon.com/textract/ | captured | `ev_a49c7a920…` | [report](amazon_aws/amazon-textract.md) |
| Amazon Timestream | https://aws.amazon.com/timestream/ | captured | `ev_9f1c5be9e…` | [report](amazon_aws/amazon-timestream.md) |
| Amazon Transcribe | https://aws.amazon.com/transcribe/ | captured | `ev_a882a2589…` | [report](amazon_aws/amazon-transcribe.md) |
| Amazon Translate | https://aws.amazon.com/translate/ | captured | `ev_4793f28a1…` | [report](amazon_aws/amazon-translate.md) |
| Amazon Verified Permissions | https://aws.amazon.com/verified-permissions/ | captured | `ev_ac9380501…` | [report](amazon_aws/amazon-verified-permissions.md) |
| Amazon Virtual Private Cloud | https://aws.amazon.com/vpc/ | captured | `ev_546c1dd75…` | [report](amazon_aws/amazon-vpc.md) |
| Amazon WorkMail | https://aws.amazon.com/workmail/ | captured | `ev_8ced4acc5…` | [report](amazon_aws/amazon-workmail.md) |
| Amazon WorkSpaces | https://aws.amazon.com/workspaces/ | captured | `ev_b450e63e3…` | [report](amazon_aws/amazon-workspaces.md) |
| Amazon WorkSpaces Applications | https://aws.amazon.com/workspaces/applications/ | captured | `ev_fd9425d7d…` | [report](amazon_aws/amazon-workspaces-applications.md) |
| Amazon WorkSpaces Secure Browser | https://aws.amazon.com/workspaces/secure-browser/ | captured | `ev_b840d776d…` | [report](amazon_aws/amazon-workspaces-secure-browser.md) |
| AWS Amplify | https://aws.amazon.com/amplify/ | captured | `ev_a01351435…` | [report](amazon_aws/aws-amplify.md) |
| API Gateway | https://aws.amazon.com/api-gateway/ | captured | `ev_f8fec9089…` | [report](amazon_aws/aws-api-gateway.md) |
| AWS App Mesh | https://aws.amazon.com/app-mesh/ | captured | `ev_1bcf1f580…` | [report](amazon_aws/aws-app-mesh.md) |
| AWS App Runner | https://aws.amazon.com/apprunner/ | captured | `ev_0e1e34397…` | [report](amazon_aws/aws-app-runner.md) |
| AWS App2Container | https://aws.amazon.com/app2container/ | captured | `ev_561266f38…` | [report](amazon_aws/aws-app2container.md) |
| AWS AppSync | https://aws.amazon.com/appsync/ | captured | `ev_84217d74d…` | [report](amazon_aws/aws-appsync.md) |
| AWS Artifact | https://aws.amazon.com/artifact/ | captured | `ev_064d17b87…` | [report](amazon_aws/aws-artifact.md) |
| AWS Audit Manager | https://aws.amazon.com/audit-manager/ | captured | `ev_038cfd848…` | [report](amazon_aws/aws-audit-manager.md) |
| AWS Auto Scaling | https://aws.amazon.com/autoscaling/ | captured | `ev_06ca78d42…` | [report](amazon_aws/aws-auto-scaling.md) |
| AWS Backup | https://aws.amazon.com/backup/ | captured | `ev_1c60c5351…` | [report](amazon_aws/aws-backup.md) |
| AWS Batch | https://aws.amazon.com/batch/ | captured | `ev_a12ee76e2…` | [report](amazon_aws/aws-batch.md) |
| Bedrock | https://aws.amazon.com/bedrock/ | captured | `ev_a7a435adf…` | [report](amazon_aws/aws-bedrock.md) |
| AWS Billing Conductor | https://aws.amazon.com/aws-cost-management/aws-billing-conductor/ | captured | `ev_fdabeae82…` | [report](amazon_aws/aws-billing-conductor.md) |
| AWS Cloud Map | https://aws.amazon.com/cloud-map/ | captured | `ev_5b424cd2e…` | [report](amazon_aws/aws-cloud-map.md) |
| AWS Cloud WAN | https://aws.amazon.com/cloud-wan/ | captured | `ev_9b54eb368…` | [report](amazon_aws/aws-cloud-wan.md) |
| AWS CloudFormation | https://aws.amazon.com/cloudformation/ | captured | `ev_a721a2e11…` | [report](amazon_aws/aws-cloudformation.md) |
| CloudFront | https://aws.amazon.com/cloudfront/ | captured | `ev_887daf9fd…` | [report](amazon_aws/aws-cloudfront.md) |
| DynamoDB | https://aws.amazon.com/dynamodb/ | captured | `ev_b68c6c111…` | [report](amazon_aws/aws-dynamodb.md) |
| Elastic Container Registry (ECR) | https://aws.amazon.com/ecr/ | captured | `ev_99b224dc8…` | [report](amazon_aws/aws-ecr.md) |
| ECS | https://aws.amazon.com/ecs/ | captured | `ev_d973aed6f…` | [report](amazon_aws/aws-ecs.md) |
| ElastiCache | https://aws.amazon.com/elasticache/ | captured | `ev_4a87962b9…` | [report](amazon_aws/aws-elasticache.md) |
| EventBridge | https://aws.amazon.com/eventbridge/ | captured | `ev_16577e307…` | [report](amazon_aws/aws-eventbridge.md) |
| AWS Lambda | https://aws.amazon.com/lambda/ | captured | `ev_74b54e9c0…` | [report](amazon_aws/aws-lambda.md) |
| Amazon RDS | https://aws.amazon.com/rds/ | captured | `ev_bd53c9bea…` | [report](amazon_aws/aws-rds.md) |
| Redshift | https://aws.amazon.com/redshift/ | captured | `ev_81394f974…` | [report](amazon_aws/aws-redshift.md) |
| Amazon S3 | https://aws.amazon.com/s3/ | captured | `ev_50124d2cb…` | [report](amazon_aws/aws-s3.md) |
| SageMaker | https://aws.amazon.com/sagemaker/ | captured | `ev_b8c844b16…` | [report](amazon_aws/aws-sagemaker.md) |
| Simple Notification Service (SNS) | https://aws.amazon.com/sns/ | captured | `ev_436cb0778…` | [report](amazon_aws/aws-sns.md) |
| SQS | https://aws.amazon.com/sqs/ | captured | `ev_8088a1640…` | [report](amazon_aws/aws-sqs.md) |

### Apple (`apple`)

| Product | Target | Status | Evidence | Report |
|---|---|---|---|---|
| FaceTime | https://www.apple.com/facetime/ | captured | `ev_d7981265d…` | [report](apple/apple-facetime.md) |
| Final Cut Pro | https://www.apple.com/final-cut-pro/ | captured | `ev_a367f5129…` | [report](apple/apple-final-cut-pro.md) |
| iCloud | https://www.icloud.com/ | captured | `ev_2301c78b2…` | [report](apple/apple-icloud.md) |
| iOS | https://www.apple.com/ios/ | captured | `ev_0b63a719a…` | [report](apple/apple-ios.md) |
| iPad | https://www.apple.com/ipad/ | captured | `ev_b788cb414…` | [report](apple/apple-ipad.md) |
| iPhone | https://www.apple.com/iphone/ | captured | `ev_c6b7db6b8…` | [report](apple/apple-iphone.md) |
| Keynote | https://www.apple.com/keynote/ | captured | `ev_4941e564c…` | [report](apple/apple-keynote.md) |
| Logic Pro | https://www.apple.com/logic-pro/ | captured | `ev_98b07c0c7…` | [report](apple/apple-logic-pro.md) |
| macOS | https://www.apple.com/macos/ | captured | `ev_252abea7d…` | [report](apple/apple-macos.md) |
| Messages (iMessage) | https://www.apple.com/messages/ | captured | `ev_8149ab97b…` | [report](apple/apple-messages.md) |
| Apple Music | https://www.apple.com/apple-music/ | captured | `ev_954e4942c…` | [report](apple/apple-music.md) |
| Numbers | https://www.apple.com/numbers/ | captured | `ev_6bfec54d5…` | [report](apple/apple-numbers.md) |
| Pages | https://www.apple.com/pages/ | captured | `ev_01b203036…` | [report](apple/apple-pages.md) |
| Passwords | https://support.apple.com/guide/iphone/passwords-iphf9219d8c9/ios | captured | `ev_42b476db3…` | [report](apple/apple-passwords.md) |
| Apple Pay | https://www.apple.com/apple-pay/ | captured | `ev_9a1edb26a…` | [report](apple/apple-pay.md) |
| Safari | https://www.apple.com/safari/ | captured | `ev_6250618ba…` | [report](apple/apple-safari.md) |
| Siri | https://www.apple.com/siri/ | captured | `ev_1fbf64b3a…` | [report](apple/apple-siri.md) |
| Vision Pro | https://www.apple.com/apple-vision-pro/ | captured | `ev_e741a77e5…` | [report](apple/apple-vision-pro.md) |
| Apple Watch | https://www.apple.com/watch/ | captured | `ev_3237e21bb…` | [report](apple/apple-watch.md) |
| Xcode | https://developer.apple.com/xcode/ | captured | `ev_4bc7b7ff3…` | [report](apple/apple-xcode.md) |

### Google (`google`)

| Product | Target | Status | Evidence | Report |
|---|---|---|---|---|
| Android | https://www.android.com/ | captured | `ev_81e8cc9ad…` | [report](google/android.md) |
| Gmail | https://mail.google.com/ | captured | `ev_4de2a03a5…` | [report](google/gmail.md) |
| Google Ads | https://ads.google.com/ | captured | `ev_8c35405d4…` | [report](google/google-ads.md) |
| Google Analytics | https://analytics.google.com/ | captured | `ev_7ec24b9eb…` | [report](google/google-analytics.md) |
| Google Calendar | https://calendar.google.com/ | captured | `ev_a8267b145…` | [report](google/google-calendar.md) |
| Google Chrome | https://www.google.com/chrome/ | captured | `ev_26f0d87e3…` | [report](google/google-chrome.md) |
| Google Classroom | https://classroom.google.com/ | captured | `ev_70b07e7ed…` | [report](google/google-classroom.md) |
| Google Cloud | https://cloud.google.com/ | captured | `ev_3ee055d5d…` | [report](google/google-cloud.md) |
| Google Cloud Storage | https://cloud.google.com/storage | captured | `ev_1ec3cda5d…` | [report](google/google-cloud-storage.md) |
| Google Docs | https://docs.google.com/ | captured | `ev_dca9d6d18…` | [report](google/google-docs.md) |
| Google Drive | https://drive.google.com/ | captured | `ev_126cc070f…` | [report](google/google-drive.md) |
| Firebase | https://firebase.google.com/ | captured | `ev_01dc5c781…` | [report](google/google-firebase.md) |
| Google Gemini | https://gemini.google.com/ | captured | `ev_d842928e9…` | [report](google/google-gemini.md) |
| Google Maps | https://maps.google.com/ | captured | `ev_a88368bce…` | [report](google/google-maps.md) |
| Google Meet | https://meet.google.com/ | captured | `ev_d60630c8c…` | [report](google/google-meet.md) |
| Google News | https://news.google.com/ | captured | `ev_bed91a4fc…` | [report](google/google-news.md) |
| Google Photos | https://photos.google.com/ | captured | `ev_e99987afe…` | [report](google/google-photos.md) |
| Google Play | https://play.google.com/ | captured | `ev_71042c2df…` | [report](google/google-play.md) |
| Pub/Sub | https://cloud.google.com/pubsub | captured | `ev_9707bccc1…` | [report](google/google-pubsub.md) |
| Google Search | https://www.google.com/ | captured | `ev_6c841f20f…` | [report](google/google-search.md) |
| Google Sheets | https://sheets.google.com/ | captured | `ev_2dc2a4ade…` | [report](google/google-sheets.md) |
| Google Stadia | https://stadia.google.com/ | captured | `ev_0eb600d38…` | [report](google/google-stadia.md) |
| TensorFlow | https://www.tensorflow.org/ | captured | `ev_a90c9c09f…` | [report](google/google-tensorflow.md) |
| Google Workspace | https://workspace.google.com/ | captured | `ev_e843dee14…` | [report](google/google-workspace.md) |
| YouTube | https://www.youtube.com/ | captured | `ev_9d4052f32…` | [report](google/youtube.md) |
| YouTube Music | https://music.youtube.com/ | captured | `ev_c274a080c…` | [report](google/youtube-music.md) |

### Meta (`meta`)

| Product | Target | Status | Evidence | Report |
|---|---|---|---|---|
| Meta Account | https://www.meta.com/account/ | captured | `ev_6cedd7669…` | [report](meta/meta-account.md) |
| Meta AI | https://www.meta.ai/ | captured | `ev_e9e738b3e…` | [report](meta/meta-ai.md) |
| Facebook | https://www.facebook.com/ | captured | `ev_e1687e697…` | [report](meta/meta-facebook.md) |
| Instagram | https://www.instagram.com/ | captured | `ev_76952569a…` | [report](meta/meta-instagram.md) |
| Llama | https://ai.meta.com/llama/ | captured | `ev_7bc078a31…` | [report](meta/meta-llama.md) |
| Messenger | https://www.messenger.com/ | captured | `ev_ccb32cbab…` | [report](meta/meta-messenger.md) |
| Muse | https://muse.ai/ | captured | `ev_ccfd259bb…` | [report](meta/meta-muse.md) |
| Meta One | https://www.meta.com/meta-one-plans/ | captured | `ev_b79eb8e2b…` | [report](meta/meta-one.md) |
| Meta Pay | https://www.meta.com/meta-pay/ | captured | `ev_2d079b2fa…` | [report](meta/meta-pay.md) |
| Threads | https://www.threads.net/ | captured | `ev_865189a53…` | [report](meta/meta-threads.md) |
| Meta Verified | https://www.meta.com/meta-verified/ | captured | `ev_bc54e93bb…` | [report](meta/meta-verified.md) |
| WhatsApp | https://www.whatsapp.com/ | captured | `ev_2d51430c5…` | [report](meta/meta-whatsapp.md) |

### Microsoft (`microsoft`)

| Product | Target | Status | Evidence | Report |
|---|---|---|---|---|
| Microsoft 365 | https://www.microsoft.com/en-us/microsoft-365 | captured | `ev_c99ad19e5…` | [report](microsoft/microsoft-365.md) |
| Microsoft Azure | https://azure.microsoft.com/en-us | captured | `ev_064601d5f…` | [report](microsoft/microsoft-azure.md) |
| Microsoft Edge | https://www.microsoft.com/en-us/edge | captured | `ev_edac67db5…` | [report](microsoft/microsoft-edge.md) |
| Microsoft OneDrive | https://www.microsoft.com/en-us/microsoft-365/onedrive/online-cloud-storage | captured | `ev_5bd1a0986…` | [report](microsoft/microsoft-onedrive.md) |
| Skype | https://www.skype.com/ | captured | `ev_492ef4159…` | [report](microsoft/microsoft-skype.md) |
| Microsoft Teams | https://www.microsoft.com/en-us/microsoft-teams/group-chat-software | captured | `ev_576c79eff…` | [report](microsoft/microsoft-teams.md) |
| Microsoft Windows | https://www.microsoft.com/en-us/windows/ | captured | `ev_b834d9000…` | [report](microsoft/microsoft-windows.md) |

### Netflix (`netflix`)

| Product | Target | Status | Evidence | Report |
|---|---|---|---|---|
| Netflix DVD | https://dvd.netflix.com/ | captured | `ev_31d292d67…` | [report](netflix/netflix-dvd.md) |
| Netflix Games | https://www.netflix.com/tudum/games | captured | `ev_83f397cd5…` | [report](netflix/netflix-games.md) |
| Netflix Kids | https://www.netflix.com/kids | captured | `ev_0b3946ed4…` | [report](netflix/netflix-kids.md) |
| Netflix Profiles | https://www.netflix.com/ | captured | `ev_b85b808dc…` | [report](netflix/netflix-profiles.md) |
| Netflix Streaming | https://www.netflix.com/ | captured | `ev_c2763ee78…` | [report](netflix/netflix-streaming.md) |
| Tudum | https://www.netflix.com/tudum | captured | `ev_9de9f82f3…` | [report](netflix/netflix-tudum.md) |

---

_Generated by `tools/rea-catalog.mjs`. Re-running REA on a live page produces new
Evidence; comparisons belong in a separate, deliberate pass._
