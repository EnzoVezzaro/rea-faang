// Curated open-source landscape for every product in `catalog/products.jsonl`.
//
// One entry per product. The `sources` are the pages actually consulted for the
// open-source search (see the session that produced this file); `alternatives`
// list the projects that surfaced, with the licence as reported by the project.
// Licences and project status change — re-verify before relying on them.
//
// status:
//   "available" — a mature open-source project covers the product's core
//                 function and can be self-hosted or run locally.
//   "partial"   — open-source coverage exists but leaves a material gap
//                 (scale, a proprietary service plane, content/IP, or hardware).
//   "pending"   — this catalog has not verified a suitable open-source
//                 alternative; this describes coverage research only.

/** @typedef {'available'|'partial'|'pending'} OsStatus */

export const PRODUCTS = [
  // ───────────────────────────── Google ─────────────────────────────
  {
    "id": "meta-pay",
    "company_id": "meta",
    "name": "Meta Pay",
    "product_type": "consumer_application",
    "categories": ["payments", "checkout", "money-transfer"],
    "official_url": "https://www.meta.com/meta-pay/",
    "status": "partial",
    "summary": "Meta Pay is Meta's payment and checkout service with saved payment details, payment management, fraud monitoring and selected transfer workflows.",
    "capabilities": ["Payment and checkout workflows", "Saved payment and shipping details", "Payment history and method management", "Fraud monitoring and encrypted payment storage", "Selected donations and money transfers"],
    "alternatives": [
      {"name":"Medusa","license":"MIT","url":"https://medusajs.com/","covers":"Open commerce platform with checkout and payment-provider integrations.","note":"Provides commerce foundations but not Meta's payment rails, account graph, fraud systems or merchant network."},
      {"name":"Saleor","license":"BSD-3-Clause","url":"https://saleor.io/","covers":"Open headless commerce platform with checkout and payment integrations.","note":"Useful for independent commerce, but not a drop-in replacement for Meta Pay's regional and platform semantics."},
      {"name":"Open Payment Network","license":"Open standards and project-specific licenses","url":"https://openpaymentnetwork.org/","covers":"Open payment interoperability and experimentation resources.","note":"Covers standards-oriented payment exploration, not Meta Pay's consumer and merchant service."}
    ],
    "gap": "Open alternatives provide commerce and payment foundations, but none reproduces Meta Pay's payment instruments, account integration, fraud systems, regional rails or merchant network.",
    "verdict": "Partial. Medusa, Saleor and open payment standards are credible foundations for bounded payment implementations, while Meta Pay-specific service semantics remain provider-specific.",
    "sources": ["https://www.meta.com/technologies/", "https://www.meta.com/meta-pay/", "https://medusajs.com/", "https://saleor.io/", "https://openpaymentnetwork.org/"]
  },
  {
    "id": "meta-ai",
    "company_id": "meta",
    "name": "Meta AI",
    "product_type": "ai_application",
    "categories": ["ai", "assistant", "image-generation", "search"],
    "official_url": "https://www.meta.ai/",
    "status": "partial",
    "summary": "Meta AI is Meta's separately named AI assistant service with a web surface and documented cross-app, search and image-generation experiences.",
    "capabilities": ["AI assistant interaction", "Cross-app assistant placement", "Search-oriented assistance", "Image-generation experience"],
    "alternatives": [
      {"name":"Open WebUI","license":"MIT","url":"https://openwebui.com/","covers":"Self-hosted chat interface and model routing for local or remote models.","note":"Provides an independent assistant surface but not Meta's apps, account graph, proprietary models or search partnership."},
      {"name":"LibreChat","license":"MIT","url":"https://www.librechat.ai/","covers":"Open conversational AI interface with multiple provider integrations.","note":"Covers chat orchestration but not Meta AI's proprietary service and cross-app distribution."},
      {"name":"Jan","license":"Apache-2.0","url":"https://jan.ai/","covers":"Local-first desktop AI assistant and model runtime.","note":"Useful for local assistant workflows, but not a hosted Meta service or cross-app replacement."}
    ],
    "gap": "Open alternatives cover assistant interfaces and local/provider routing, but none reproduces Meta AI's account graph, cross-app placement, proprietary models, search partnerships, safety systems or image-generation service.",
    "verdict": "Partial. Open WebUI, LibreChat and Jan are credible foundations for bounded assistant implementations, while Meta AI-specific service semantics remain provider-specific.",
    "sources": ["https://www.meta.com/technologies/", "https://www.meta.ai/", "https://about.fb.com/news/2024/04/meta-ai-assistant-built-with-llama-3/", "https://openwebui.com/", "https://www.librechat.ai/", "https://jan.ai/"]
  },
  {
    "id": "meta-messenger",
    "company_id": "meta",
    "name": "Messenger",
    "product_type": "messaging",
    "categories": ["messaging", "voice-calling", "video-calling", "social"],
    "official_url": "https://www.messenger.com/",
    "status": "partial",
    "summary": "Messenger is Meta's standalone messaging application with a public app surface and documented cross-app/AI integration context.",
    "capabilities": ["Messaging application surface", "Cross-app Meta ecosystem integration", "Documented AI-assisted messaging experiences"],
    "alternatives": [
      {"name":"Signal","license":"AGPL-3.0","url":"https://signal.org/","covers":"Privacy-focused messaging with open source client and server components.","note":"Covers core private messaging workflows but not Meta's account graph, ecosystem or rollout model."},
      {"name":"Matrix/Element","license":"Apache-2.0 and related licenses","url":"https://matrix.org/","covers":"Federated messaging protocol and client ecosystem.","note":"Adds federation and independent homeservers, which differs from Messenger's centralized platform model."},
      {"name":"Telegram","license":"GPL-2.0 for selected client code","url":"https://telegram.org/","covers":"Messaging, groups, channels and media workflows.","note":"Has a different privacy, server and ecosystem model; not a drop-in replacement for Messenger."}
    ],
    "gap": "Open alternatives cover messaging, privacy or federation, but none reproduces Messenger's Meta account graph, cross-app integrations, moderation systems, rollout model and private platform behavior.",
    "verdict": "Partial. Signal, Matrix/Element and Telegram are credible alternatives for bounded messaging scopes, while Messenger-specific ecosystem and platform semantics remain provider-specific.",
    "sources": ["https://www.meta.com/technologies/", "https://www.messenger.com/", "https://about.fb.com/news/2023/09/introducing-ai-powered-assistants-characters-and-creative-tools/", "https://signal.org/", "https://matrix.org/", "https://telegram.org/"]
  },
  {
    id: 'google-search',
    company_id: 'google',
    name: 'Google Search',
    product_type: 'consumer_application',
    categories: ['search', 'discovery'],
    official_url: 'https://www.google.com/',
    status: 'partial',
    summary:
      'Google Search is the dominant general-web search engine: a crawler fleet, an inverted index, a ranking stack driven by hundreds of signals, and a knowledge graph, all served at web scale.',
    capabilities: [
      'Web crawl and indexing at web scale',
      'Ranking and relevance (link graph + behavioural signals)',
      'Spell correction, query suggestions, knowledge graph, featured snippets',
      'Universal search (images, video, news) and personalisation',
    ],
    alternatives: [
      {
        name: 'SearXNG',
        license: 'AGPL-3.0',
        url: 'https://github.com/searxng/searxng',
        covers: 'Privacy-respecting metasearch front end; self-hostable.',
        note: 'Proxies other engines — no index of its own.',
      },
      {
        name: 'YaCy',
        license: 'GPL-2.0',
        url: 'https://yacy.net/',
        covers: 'Peer-to-peer crawler and index; a genuinely owned index.',
        note: 'Small corpus and a very different scale from Google.',
      },
      {
        name: 'Whoogle',
        license: 'MIT',
        url: 'https://github.com/benbusby/whoogle-search',
        covers: 'Self-hosted, ad-free Google front end.',
        note: 'Depends on Google’s index; not an independent engine.',
      },
    ],
    gap:
      'No self-hostable project provides the whole owned crawl → index → rank → query pipeline at a useful general-web scale; the metasearch projects rent someone else’s index.',
    verdict:
      'Partial. The pieces are open source (crawlers, OpenSearch/Meilisearch, BM25), but the integrated, owned general-web engine is not — a bounded-corpus pipeline remains a build opportunity.',
    sources: [
      'https://github.com/searxng/searxng',
      'https://yacy.net/docs/',
      'https://github.com/benbusby/whoogle-search',
    ],
  },
  {
    id: 'google-gemini',
    company_id: 'google',
    name: 'Google Gemini',
    product_type: 'ai_model',
    categories: ['ai_model'],
    official_url: 'https://gemini.google.com/',
    status: 'partial',
    summary:
      'Google Gemini is Google’s flagship multimodal model family and assistant, delivered as a hosted service rather than as downloadable weights.',
    capabilities: [
      'Multimodal reasoning (text, image, audio, video)',
      'Long-context generation and tool use',
      'Hosted assistant plus a developer API',
    ],
    alternatives: [
      {
        name: 'Gemma',
        license: 'Google model-specific terms; verify current release',
        url: 'https://ai.google.dev/gemma',
        covers: 'Google-published open model family related to Gemini technology.',
        note: 'Related open models are not the hosted Gemini service or a parity claim.',
      },
      {
        name: 'Mistral and Qwen model families',
        license: 'model-specific; verify each release',
        url: 'https://mistral.ai/technology/',
        covers: 'Alternative open or openly distributed model families for selected workloads.',
        note: 'Capabilities, licenses and hosting requirements vary by model.',
      },
      {
        name: 'Ollama',
        license: 'MIT',
        url: 'https://ollama.com/',
        repo: 'https://github.com/ollama/ollama',
        covers: 'Local model runner and OpenAI-compatible API.',
        note: 'Runs the weights; does not provide a frontier model.',
      },
    ],
    gap:
      'No open project matches a frontier hosted model on capability; open-weight families trail the hosted leaders and often carry use restrictions.',
    verdict:
      'Partial. Self-hostable model runners and open-weight families exist and are improving fast, but a fully open, frontier-equivalent model is pending.',
    sources: [
      'https://ai.google.dev/gemma',
      'https://ollama.com/',
      'https://mistral.ai/technology/',
      'https://qwenlm.github.io/',
    ],
  },
  {
    id: 'gmail',
    company_id: 'google',
    name: 'Gmail',
    product_type: 'consumer_application',
    categories: ['productivity'],
    official_url: 'https://mail.google.com/',
    status: 'partial',
    summary:
      'Gmail is Google’s hosted email service: IMAP/POP/SMTP mail with a web client, search, spam filtering and tight Workspace integration.',
    capabilities: [
      'IMAP/POP/SMTP mail delivery and storage',
      'Webmail client, search, labelling',
      'Spam and phishing filtering, filtering rules',
    ],
    alternatives: [
      {
        name: 'Mailcow',
        license: 'GPL-3.0',
        url: 'https://mailcow.email/',
        repo: 'https://github.com/mailcow/mailcow-dockerized',
        covers: 'Dockerised full mail server (Postfix, Dovecot, Rspamd, SOGo).',
        note: 'Self-hosted; you own deliverability and DNS.',
      },
      {
        name: 'Mail-in-a-Box',
        license: 'CC0-1.0',
        url: 'https://mailinabox.email/',
        repo: 'https://github.com/mail-in-a-box/mailinabox',
        covers: 'One-command personal mail server bundle.',
        note: 'Opinionated, single-box.',
      },
      {
        name: 'Mox / Stalwart',
        license: 'project-specific; verify current release',
        url: 'https://stalw.art/',
        covers: 'Modern all-in-one mail servers.',
        note: 'Scope, protocol support and operating model differ by project.',
      },
      {
        name: 'Roundcube',
        license: 'GPL-3.0',
        url: 'https://roundcube.net/',
        repo: 'https://github.com/roundcube/roundcubemail',
        covers: 'Mature webmail client.',
        note: 'Client only; pair with a server.',
      },
    ],
    gap: 'Deliverability and anti-abuse at Gmail’s scale are operational, not software, gaps.',
    verdict: 'Available. The full mail stack is open source and widely self-hosted.',
    sources: [
      'https://mailinabox.email/',
      'https://mailcow.email/',
      'https://mailinabox.email/',
      'https://stalw.art/',
      'https://roundcube.net/',
    ],
  },
  {
    id: 'google-maps',
    company_id: 'google',
    name: 'Google Maps',
    product_type: 'consumer_application',
    categories: ['search', 'discovery'],
    official_url: 'https://maps.google.com/',
    status: 'partial',
    summary:
      'Google Maps is a mapping and navigation platform: base map, satellite imagery, Street View, place data, routing, and a developer API.',
    capabilities: [
      'Map tiles and place search',
      'Turn-by-turn routing and traffic',
      'Satellite/Street View imagery',
      'Places and geocoding APIs',
    ],
    alternatives: [
      {
        name: 'OpenStreetMap',
        license: 'ODbL-1.0 (data)',
        url: 'https://www.openstreetmap.org/',
        covers: 'The open map dataset and community.',
        note: 'Data licence, not an app.',
      },
      {
        name: 'Organic Maps',
        license: 'Apache-2.0',
        url: 'https://organicmaps.app/',
        covers: 'Offline navigation app built on OSM data.',
        note: 'No live traffic.',
      },
      {
        name: 'MapLibre',
        license: 'BSD-3-Clause',
        url: 'https://maplibre.org/',
        covers: 'Open map rendering library (fork of Mapbox GL).',
        note: 'Rendering library, not a data service.',
      },
      {
        name: 'OSRM / Valhalla',
        license: 'BSD-2-Clause / Apache-2.0',
        url: 'https://project-osrm.org/',
        covers: 'Self-hosted routing engines.',
        note: 'Pair with OSM data for turn-by-turn.',
      },
    ],
    gap: 'Live traffic, Street View imagery and Google’s place-data breadth have no open equivalent.',
    verdict:
      'Available. Map data, rendering and routing are open source; only the proprietary imagery and traffic layers remain closed.',
    sources: [
      'https://www.openstreetmap.org/',
      'https://organicmaps.app/',
      'https://maplibre.org/',
      'https://project-osrm.org/',
    ],
  },
  {
    id: 'google-chrome',
    company_id: 'google',
    name: 'Google Chrome',
    product_type: 'browser',
    categories: ['browser'],
    official_url: 'https://www.google.com/chrome/',
    status: 'partial',
    summary:
      'Google Chrome is Google’s Chromium-based web browser, bundling the Blink engine with proprietary Google services (sync, telemetry, DRM).',
    capabilities: [
      'Web rendering (Blink) and high-performance JS (V8)',
      'Multi-process sandboxing, devtools',
      'Account sync and extension ecosystem',
    ],
    alternatives: [
      {
        name: 'Chromium',
        license: 'BSD-3-Clause',
        url: 'https://www.chromium.org/',
        covers: 'The open-source browser Chrome is built from.',
        note: 'No Google sync/branding/DRM by default.',
      },
      {
        name: 'Firefox',
        license: 'MPL-2.0',
        url: 'https://www.mozilla.org/firefox/',
        covers: 'Independent engine (Gecko) and full browser.',
        note: 'A separate engine, not a Chromium fork.',
      },
      {
        name: 'Brave',
        license: 'MPL-2.0',
        url: 'https://brave.com/',
        covers: 'Chromium browser with built-in ad/tracker blocking.',
        note: 'Some bundled services are proprietary.',
      },
      {
        name: 'LibreWolf',
        license: 'MPL-2.0',
        url: 'https://librewolf.net/',
        covers: 'Hardened Firefox fork.',
        note: 'Privacy-focused fork.',
      },
    ],
    gap: 'Google-hosted sync and Chrome-only DRM modules are closed.',
    verdict: 'Available. Two fully open engines and several open browsers exist.',
    sources: [
      'https://www.chromium.org/',
      'https://www.mozilla.org/firefox/',
      'https://brave.com/',
      'https://librewolf.net/',
    ],
  },
  {
    id: 'android',
    company_id: 'google',
    name: 'Android',
    product_type: 'operating_system',
    categories: ['operating_system'],
    official_url: 'https://www.android.com/',
    status: 'partial',
    summary:
      'Android is Google’s mobile operating system. The Android Open Source Project (AOSP) is the open core; Google Mobile Services, Play and most device builds are proprietary additions.',
    capabilities: [
      'Mobile OS runtime, app framework, system UI',
      'App sandbox and permission model',
      'App distribution via Play (proprietary layer)',
    ],
    alternatives: [
      {
        name: 'AOSP',
        license: 'Apache-2.0',
        url: 'https://source.android.com/',
        covers: 'The open-source core of Android itself.',
        note: 'The upstream project — no Play services.',
      },
      {
        name: 'LineageOS',
        license: 'Apache-2.0',
        url: 'https://lineageos.org/',
        covers: 'Community Android distribution for many devices.',
        note: 'Widest device support.',
      },
      {
        name: 'GrapheneOS',
        license: 'MIT',
        url: 'https://grapheneos.org/',
        covers: 'Security-hardened Android, no Google services.',
        note: 'Pixel-focused.',
      },
      {
        name: '/e/OS',
        license: 'GPL-3.0 (varies)',
        url: 'https://e.foundation/e-os/',
        covers: 'De-Googled Android with a privacy app suite.',
        note: 'Consumer-oriented fork.',
      },
    ],
    gap: 'Google Mobile Services, Play and the certified hardware ecosystem are proprietary.',
    verdict:
      'Partial. AOSP, LineageOS, GrapheneOS and /e/OS cover open or alternative Android cores, but not the complete Google Mobile Services, Play, certification and vendor ecosystem.',
    sources: [
      'https://source.android.com/docs/setup/about',
      'https://source.android.com/docs/setup/about/faqs',
      'https://developer.android.com/guide/platform',
      'https://source.android.com/',
      'https://grapheneos.org/',
      'https://lineageos.org/',
      'https://e.foundation/e-os/',
    ],
  },
  {
    id: 'youtube',
    company_id: 'google',
    name: 'YouTube',
    product_type: 'media',
    categories: ['media'],
    official_url: 'https://www.youtube.com/',
    status: 'partial',
    summary:
      'YouTube is a video hosting and streaming platform: upload, transcode, deliver across a global CDN, advertise, and recommend.',
    capabilities: [
      'Video hosting, transcoding and adaptive streaming',
      'Channels, subscriptions, playlists, comments',
      'Recommendations and search',
      'Monetisation and advertising',
    ],
    alternatives: [
      {
        name: 'PeerTube',
        license: 'AGPL-3.0',
        url: 'https://joinpeertube.org/',
        repo: 'https://github.com/framasoft/peertube',
        covers: 'Federated video hosting and streaming platform.',
        note: 'The real platform-level alternative.',
      },
      {
        name: 'Invidious',
        license: 'AGPL-3.0',
        url: 'https://invidious.io/',
        repo: 'https://github.com/iv-org/invidious',
        covers: 'Private alternative front end to YouTube.',
        note: 'Front end only; depends on YouTube.',
      },
      {
        name: 'Piped',
        license: 'AGPL-3.0',
        url: 'https://piped.video/',
        covers: 'Alternative YouTube front end.',
        note: 'Front end only.',
      },
      {
        name: 'FreeTube / NewPipe',
        license: 'AGPL-3.0 / GPL-3.0',
        url: 'https://freetubeapp.io/',
        repo: 'https://github.com/FreeTubeApp/FreeTube',
        covers: 'Desktop and Android YouTube clients.',
        note: 'Clients, not platforms.',
      },
    ],
    gap: 'PeerTube covers self-hosted/federated video publishing, but no open project reproduces YouTube\'s content catalog, global delivery, recommendation, advertising, rights-management or partner ecosystem.',
    verdict:
      'Partial. PeerTube is a credible open video platform, while YouTube-specific content, network, policy and commercial surfaces remain provider-specific.',
    sources: [
      'https://developers.google.com/youtube/apis',
      'https://developers.google.com/youtube/terms/developer-policies-guide',
      'https://developers.google.com/youtube/data/live/getting-started',
      'https://developers.google.com/youtube/analytics',
      'https://joinpeertube.org/',
      'https://invidious.io/',
      'https://github.com/iv-org/invidious',
    ],
  },
  {
    id: 'google-cloud',
    company_id: 'google',
    name: 'Google Cloud',
    product_type: 'cloud_infrastructure',
    categories: ['cloud_infrastructure'],
    official_url: 'https://cloud.google.com/',
    status: 'partial',
    summary:
      'Google Cloud is Google’s public cloud platform for compute, storage, networking, data, AI/ML, developer tools and managed services.',
    capabilities: [
      'Compute, containers, serverless hosting and networking',
      'Object storage, databases, analytics and data pipelines',
      'AI/ML platforms, identity, security, monitoring and governance',
    ],
    alternatives: [
      {
        name: 'OpenStack',
        license: 'Apache-2.0',
        url: 'https://www.openstack.org/',
        covers: 'Private-cloud IaaS (compute, storage, network).',
        note: 'The main open IaaS.',
      },
      {
        name: 'Apache CloudStack',
        license: 'Apache-2.0',
        url: 'https://cloudstack.apache.org/',
        covers: 'Turnkey IaaS platform.',
        note: 'Simpler single-stack option.',
      },
      {
        name: 'OpenNebula',
        license: 'Apache-2.0',
        url: 'https://opennebula.io/',
        covers: 'Private-cloud management.',
        note: 'Lightweight alternative.',
      },
      {
        name: 'Kubernetes',
        license: 'Apache-2.0',
        url: 'https://kubernetes.io/',
        repo: 'https://github.com/kubernetes/kubernetes',
        covers: 'Container platform layer of a modern private cloud.',
        note: 'Layer, not a full cloud.',
      },
    ],
    gap: 'A globally distributed, fully managed public cloud and its economies of scale are not reproducible by a single operator.',
    verdict:
      'Available. A private cloud can be built entirely from open source; the public-cloud service breadth and scale are the remaining gap.',
    sources: [
      'https://cloud.google.com/products',
      'https://docs.cloud.google.com/docs/overview',
      'https://docs.cloud.google.com/sdk/docs/authenticate',
    ],
  },
  {
    id: 'google-firebase',
    company_id: 'google',
    name: 'Firebase',
    product_type: 'developer_tool',
    categories: ['developer_tool'],
    official_url: 'https://firebase.google.com/',
    status: 'partial',
    summary:
      'Firebase is Google’s app development platform: a realtime database, auth, storage, hosting, cloud functions, messaging and analytics behind one SDK.',
    capabilities: [
      'Realtime/firestore database and offline sync',
      'Authentication, file storage, hosting',
      'Cloud functions, push messaging, analytics',
    ],
    alternatives: [
      {
        name: 'Supabase',
        license: 'Apache-2.0',
        url: 'https://supabase.com/',
        repo: 'https://github.com/supabase/supabase',
        covers: 'Postgres-based backend with auth, storage, realtime, functions.',
        note: 'Closest drop-in in scope.',
      },
      {
        name: 'Appwrite',
        license: 'BSD-3-Clause',
        url: 'https://appwrite.io/',
        covers: 'Self-hostable backend: auth, database, storage, functions.',
        note: 'Feature-complete alternative.',
      },
      {
        name: 'PocketBase',
        license: 'MIT',
        url: 'https://pocketbase.io/',
        repo: 'https://github.com/pocketbase/pocketbase',
        covers: 'Single-binary backend with realtime and auth.',
        note: 'Small and embeddable.',
      },
      {
        name: 'Parse Platform',
        license: 'BSD-3-Clause',
        url: 'https://parseplatform.org/',
        covers: 'Open app backend (the original Firebase competitor).',
        note: 'Mature, self-hosted.',
      },
    ],
    gap: 'Firebase’s integrated Google Cloud project plane, managed device testing, crash/performance products and provider-specific SDK surface have no single open equivalent.',
    verdict: 'Partial. Supabase, Appwrite, Parse Platform and PocketBase cover core BaaS capabilities, but not the complete Firebase platform.',
    sources: [
      'https://firebase.google.com/',
      'https://firebase.google.com/docs/projects/learn-more',
      'https://supabase.com/',
      'https://appwrite.io/',
      'https://parseplatform.org/',
      'https://pocketbase.io/',
    ],
  },
  {
    id: 'google-tensorflow',
    company_id: 'google',
    name: 'TensorFlow',
    product_type: 'machine_learning_framework',
    categories: ['machine_learning_framework'],
    official_url: 'https://www.tensorflow.org/',
    status: 'available',
    summary:
      'TensorFlow is Google’s open-source machine-learning framework, released under Apache-2.0 and used for training and serving models across platforms.',
    capabilities: [
      'Tensor computation with GPU/TPU acceleration',
      'Keras high-level training API',
      'Serving, mobile (Lite) and browser (TF.js) runtimes',
    ],
    alternatives: [
      {
        name: 'TensorFlow itself',
        license: 'Apache-2.0',
        url: 'https://github.com/tensorflow/tensorflow',
        covers: 'TensorFlow is already free and open source.',
        note: 'The product is the open-source project.',
      },
      {
        name: 'PyTorch',
        license: 'BSD-3-Clause',
        url: 'https://pytorch.org/',
        repo: 'https://github.com/pytorch/pytorch',
        covers: 'Open framework and the dominant research ecosystem.',
        note: 'Independent open alternative.',
      },
      {
        name: 'JAX',
        license: 'Apache-2.0',
        url: 'https://github.com/jax-ml/jax',
        covers: 'Open numerical/ML framework from Google.',
        note: 'Functional, XLA-based.',
      },
    ],
    gap: 'None in licensing — the framework is already open source.',
    verdict: 'Available (already open source). Apache-2.0, with open alternatives in PyTorch and JAX.',
    sources: [
      'https://www.tensorflow.org/guide/basics',
      'https://www.tensorflow.org/api_docs',
      'https://www.tensorflow.org/learn',
      'https://github.com/tensorflow/tensorflow',
      'https://pytorch.org/',
      'https://github.com/jax-ml/jax',
    ],
  },
  {
    id: 'google-workspace',
    company_id: 'google',
    name: 'Google Workspace',
    product_type: 'productivity_application',
    categories: ['productivity'],
    official_url: 'https://workspace.google.com/',
    status: 'partial',
    summary:
      'Google Workspace is Google’s hosted productivity and collaboration suite, combining Gmail, Calendar, Meet, Chat, Drive, Docs, Sheets and Slides with identity, administration and APIs.',
    capabilities: [
      'Gmail, Calendar, Meet and Chat collaboration',
      'Drive storage and Docs, Sheets and Slides editing',
      'Admin Console, identity, policy and audit controls',
      'Apps Script, REST APIs, add-ons and Marketplace integrations',
    ],
    alternatives: [
      {
        name: 'Nextcloud',
        license: 'AGPL-3.0',
        url: 'https://nextcloud.com/',
        repo: 'https://github.com/nextcloud/server',
        covers: 'File sync/share plus an office suite, calendar, talk, chat.',
        note: 'The broadest self-hosted suite.',
      },
      {
        name: 'OnlyOffice',
        license: 'AGPL-3.0',
        url: 'https://www.onlyoffice.com/',
        covers: 'Collaborative docs/sheets/slides.',
        note: 'Strong MS-format fidelity.',
      },
      {
        name: 'Collabora Online',
        license: 'MPL-2.0',
        url: 'https://www.collaboraonline.com/',
        covers: 'LibreOffice-based collaborative editing.',
        note: 'LibreOffice engine.',
      },
      {
        name: 'CryptPad',
        license: 'AGPL-3.0',
        url: 'https://cryptpad.fr/',
        covers: 'End-to-end encrypted collaborative documents.',
        note: 'Privacy-first.',
      },
      {
        name: 'Seafile',
        license: 'AGPL-3.0',
        url: 'https://www.seafile.com/',
        repo: 'https://github.com/haiwen/seafile',
        covers: 'File sync with reliable clients.',
        note: 'Sync-focused.',
      },
    ],
    gap: 'Gmail/Meet/Calendar at hosted scale are matched feature-wise but not as one operated service.',
    verdict: 'Available. The suite can be assembled entirely from mature open-source components.',
    sources: [
      'https://workspace.google.com/',
      'https://developers.google.com/workspace/products',
      'https://developers.google.com/workspace/guides/get-started',
      'https://developers.google.com/workspace/admin/overview',
    ],
  },

  // ───────────────────────────── Apple ─────────────────────────────
  {
    id: 'apple-xcode',
    company_id: 'apple',
    name: 'Xcode',
    product_type: 'developer_tool',
    categories: ['developer_tool'],
    official_url: 'https://developer.apple.com/xcode/',
    status: 'partial',
    summary:
      'Xcode is Apple’s proprietary IDE for building apps for Apple platforms: editor, build system, interface builder, debugger and Instruments.',
    capabilities: [
      'Swift/Objective-C editing and refactoring',
      'Build, sign and archive Apple-platform apps',
      'Interface Builder, simulator, Instruments profiling',
    ],
    alternatives: [
      {
        name: 'xtool',
        license: 'GPL-3.0',
        url: 'https://github.com/xtool-org/xtool',
        covers: 'Cross-platform Xcode replacement: builds SwiftPM packages into apps.',
        note: 'No full IDE or Instruments equivalent.',
      },
      {
        name: 'Swift toolchain',
        license: 'Apache-2.0',
        url: 'https://www.swift.org/',
        covers: 'The open-source compiler and language.',
        note: 'Language/toolchain, not the IDE.',
      },
      {
        name: 'VS Code + Swift extension',
        license: 'MIT',
        url: 'https://code.visualstudio.com/',
        covers: 'Editor and language tooling for Swift.',
        note: 'Editor layer only.',
      },
    ],
    gap: 'Interface Builder, the GUI debugger and Instruments have no open equivalent; C, C++ and Xcode-only tooling remain macOS/Apple-bound.',
    verdict:
      'Partial. The Swift compiler and build toolchain are open source; no complete open-source equivalent to the full IDE is verified.',
    sources: [
      'https://github.com/xtool-org/xtool',
      'https://forums.swift.org/t/xtool-cross-platform-xcode-replacement-build-ios-apps-on-linux-and-more/79803',
      'https://superapp.dev/blog/the-best-xcode-alternative-in-2026-build-ios-apps-in-the-browser',
    ],
  },
  {
    id: 'apple-ios',
    company_id: 'apple',
    name: 'iOS',
    product_type: 'operating_system',
    categories: ['operating_system'],
    official_url: 'https://www.apple.com/ios/',
    status: 'pending',
    summary:
      'iOS is Apple’s proprietary mobile operating system for iPhone: kernel, frameworks, App Store and system apps, all closed source.',
    capabilities: [
      'Mobile OS runtime and app framework',
      'App Store distribution and sandbox',
      'Deep hardware/software integration',
    ],
    alternatives: [
      {
        name: 'postmarketOS',
        license: 'GPL-2.0',
        url: 'https://postmarketos.org/',
        covers: 'A real Linux distribution for phones.',
        note: 'A different OS, not an iOS replacement.',
      },
      {
        name: 'Ubuntu Touch',
        license: 'GPL-3.0',
        url: 'https://ubports.com/',
        covers: 'Touch-oriented Linux for phones.',
        note: 'Different platform and app ecosystem.',
      },
    ],
    gap: 'No open-source project reimplements iOS; mobile Linux is an adjacent platform and does not run iOS software or hardware.',
    verdict: 'No open-source alternative to iOS itself has been verified in this catalog.',
    sources: [
      'https://itsfoss.com/open-source-alternatives-android/',
      'https://postmarketos.org/',
      'https://en.wikipedia.org/wiki/List_of_open-source_mobile_phones',
    ],
  },
  {
    id: 'apple-macos',
    company_id: 'apple',
    name: 'macOS',
    product_type: 'operating_system',
    categories: ['operating_system'],
    official_url: 'https://www.apple.com/macos/',
    status: 'pending',
    summary:
      'macOS is Apple’s proprietary desktop operating system, built on Darwin (open-source components) but shipping a closed UI, frameworks and app stack.',
    capabilities: [
      'Desktop OS with a Unix foundation',
      'Native app framework (Cocoa/AppKit)',
      'Tight hardware integration and gatekeeping',
    ],
    alternatives: [
      {
        name: 'Linux distributions (Ubuntu, Fedora, elementary)',
        license: 'GPL / mixed',
        url: 'https://european-alternatives.eu/alternative-to/macos',
        covers: 'General-purpose open desktop operating systems.',
        note: 'Different platform; no native macOS app support.',
      },
      {
        name: 'FreeBSD',
        license: 'BSD-2-Clause',
        url: 'https://www.freebsd.org/',
        covers: 'A Unix desktop/server OS sharing macOS lineage ideas.',
        note: 'Not a macOS replacement.',
      },
      {
        name: 'Darwin',
        license: 'APSL / BSD',
        url: 'https://opensource.apple.com/',
        covers: 'macOS’s open-source core layer.',
        note: 'Core only; the desktop is closed.',
      },
    ],
    gap: 'The open Darwin core is not a usable desktop; no project reimplements macOS’s proprietary layers.',
    verdict: 'No like-for-like open-source macOS project is verified; Linux and BSD are alternative operating systems, not macOS builds.',
    sources: [
      'https://european-alternatives.eu/alternative-to/macos',
      'https://www.pcmag.com/picks/windows-vs-macos-vs-chrome-os-vs-linux-ultimate-operating-system-showdown',
      'https://opensource.apple.com/',
    ],
  },
  {
    id: 'apple-safari',
    company_id: 'apple',
    name: 'Safari',
    product_type: 'browser',
    categories: ['browser'],
    official_url: 'https://www.apple.com/safari/',
    status: 'partial',
    summary:
      'Safari is Apple’s proprietary browser; its rendering engine, WebKit, is open source under BSD and LGPL licences.',
    capabilities: [
      'Web rendering via WebKit',
      'Energy-efficient engine, privacy features',
      'Integration with Apple platforms',
    ],
    alternatives: [
      {
        name: 'WebKit',
        license: 'BSD-2-Clause / LGPL-2.1',
        url: 'https://webkit.org/',
        covers: 'The open-source engine Safari is built on.',
        note: 'Engine, not a browser product.',
      },
      {
        name: 'GNOME Web (Epiphany)',
        license: 'GPL-3.0',
        url: 'https://apps.gnome.org/Epiphany/',
        covers: 'A GTK browser built on WebKitGTK.',
        note: 'An open WebKit browser.',
      },
      {
        name: 'Firefox / Chromium',
        license: 'MPL-2.0 / BSD-3-Clause',
        url: 'https://www.mozilla.org/firefox/',
        covers: 'Independent open browsers.',
        note: 'Different engines entirely.',
      },
    ],
    gap: 'Safari’s UI, Apple-platform integrations and some DRM/media modules are proprietary; only the engine is open.',
    verdict:
      'Partial. The WebKit engine and open WebKit browsers exist, but no verified open-source project covers all of Safari’s product features and Apple-platform integrations.',
    sources: [
      'https://webkit.org/licensing-webkit/',
      'https://en.wikipedia.org/wiki/WebKit',
      'https://github.com/webkit/webkit',
    ],
  },
  {
    id: 'apple-pages',
    company_id: 'apple',
    name: 'Pages',
    product_type: 'productivity_application',
    categories: ['productivity'],
    official_url: 'https://www.apple.com/pages/',
    status: 'available',
    summary:
      'Pages is Apple’s word processor and page-layout app for macOS and iOS, with Apple-native and Word-compatible documents.',
    capabilities: [
      'Word processing and page layout',
      'Word/docx import and export',
      'Templates, shapes, media placement',
    ],
    alternatives: [
      {
        name: 'LibreOffice Writer',
        license: 'MPL-2.0',
        url: 'https://www.libreoffice.org/',
        covers: 'Full word processor with strong format support.',
        note: 'The main open replacement.',
      },
      {
        name: 'OnlyOffice Docs',
        license: 'AGPL-3.0',
        url: 'https://www.onlyoffice.com/',
        covers: 'Collaborative word processing.',
        note: 'Strong MS-format fidelity.',
      },
      {
        name: 'Calligra Words',
        license: 'GPL-2.0',
        url: 'https://calligra.org/',
        covers: 'KDE word processor with layout features.',
        note: 'Alternative in the KDE stack.',
      },
    ],
    gap: 'Pages’ own .pages format is undocumented; round-tripping Apple documents is lossy.',
    verdict: 'Available. Mature open word processors cover the function.',
    sources: [
      'https://www.libreoffice.org/',
      'https://www.howtogeek.com/apple-pages-vs-libreoffice-writer-which-free-word-processor-is-best/',
      'https://opensource.com/article/17/6/3-alternatives-libreoffice-writer',
    ],
  },
  {
    id: 'apple-numbers',
    company_id: 'apple',
    name: 'Numbers',
    product_type: 'productivity_application',
    categories: ['productivity'],
    official_url: 'https://www.apple.com/numbers/',
    status: 'available',
    summary:
      'Numbers is Apple’s spreadsheet app, known for free-form canvas layout and Apple-native charting.',
    capabilities: [
      'Spreadsheet calculation and formulas',
      'Free-form canvas layout and charts',
      'Excel/xlsx import and export',
    ],
    alternatives: [
      {
        name: 'LibreOffice Calc',
        license: 'MPL-2.0',
        url: 'https://www.libreoffice.org/',
        covers: 'Feature-rich spreadsheet with wide function coverage.',
        note: 'The main open replacement.',
      },
      {
        name: 'Gnumeric',
        license: 'GPL-2.0',
        url: 'http://www.gnumeric.org/',
        covers: 'Lightweight, accurate spreadsheet.',
        note: 'Strong calculation fidelity.',
      },
      {
        name: 'Calligra Sheets',
        license: 'GPL-2.0',
        url: 'https://calligra.org/',
        covers: 'KDE spreadsheet.',
        note: 'Alternative in the KDE stack.',
      },
    ],
    gap: 'Numbers’ proprietary format and canvas model are not matched exactly.',
    verdict: 'Available. Multiple mature open spreadsheets exist.',
    sources: [
      'https://www.linuxlinks.com/best-free-open-source-alternatives-apple-numbers/',
      'https://www.libreoffice.org/',
      'https://www.ionos.com/digitalguide/online-marketing/online-sales/free-microsoft-excel-alternatives/',
    ],
  },
  {
    id: 'apple-keynote',
    company_id: 'apple',
    name: 'Keynote',
    product_type: 'productivity_application',
    categories: ['productivity'],
    official_url: 'https://www.apple.com/keynote/',
    status: 'available',
    summary:
      'Keynote is Apple’s presentation app, with cinematic transitions, Magic Move and Apple-native document formats.',
    capabilities: [
      'Slide authoring and transitions',
      'Presenting and presenter mode',
      'PowerPoint/pptx import and export',
    ],
    alternatives: [
      {
        name: 'LibreOffice Impress',
        license: 'MPL-2.0',
        url: 'https://www.libreoffice.org/',
        covers: 'Full slide authoring and presenting, pptx-compatible.',
        note: 'The main desktop replacement.',
      },
      {
        name: 'reveal.js',
        license: 'MIT',
        url: 'https://revealjs.com/',
        covers: 'HTML/JS presentation framework.',
        note: 'Code-first slides.',
      },
      {
        name: 'Marp / Slidev',
        license: 'MIT',
        url: 'https://marp.app/',
        covers: 'Markdown-to-slides toolchains.',
        note: 'Developer-oriented authoring.',
      },
      {
        name: 'Calligra Stage',
        license: 'GPL-2.0',
        url: 'https://calligra.org/',
        covers: 'KDE presentation app.',
        note: 'Alternative in the KDE stack.',
      },
    ],
    gap: 'Keynote’s proprietary format and signature transitions have no exact open match.',
    verdict: 'Available. Both desktop and web/markdown open presentation tools exist.',
    sources: [
      'https://snappify.com/blog/best-keynote-alternatives',
      'https://sli.dev/guide/why',
      'https://github.com/runablehq/Awesome-presentation-tools',
    ],
  },
  {
    id: 'apple-final-cut-pro',
    company_id: 'apple',
    name: 'Final Cut Pro',
    product_type: 'creative_software',
    categories: ['creative_software'],
    official_url: 'https://www.apple.com/final-cut-pro/',
    status: 'available',
    summary:
      'Final Cut Pro is Apple’s professional non-linear video editor, with a magnetic timeline, proxy workflows and Apple Silicon acceleration.',
    capabilities: [
      'Non-linear multi-track editing',
      'Effects, colour, titles, audio',
      'Proxy and optimised media workflows',
      'Hardware-accelerated encoding',
    ],
    alternatives: [
      {
        name: 'Kdenlive',
        license: 'GPL-3.0',
        url: 'https://kdenlive.org/',
        covers: 'Mature professional-grade NLE with proxies.',
        note: 'Closest open equivalent.',
      },
      {
        name: 'Shotcut',
        license: 'GPL-3.0',
        url: 'https://shotcut.org/',
        covers: 'Cross-platform NLE, wide format support.',
        note: 'Broad codec support.',
      },
      {
        name: 'OpenShot',
        license: 'GPL-3.0',
        url: 'https://www.openshot.org/',
        covers: 'Beginner-friendly editor.',
        note: 'Simpler feature set.',
      },
      {
        name: 'Olive / Blender VSE',
        license: 'GPL-3.0 / GPL-2.0',
        url: 'https://www.olivevideoeditor.org/',
        covers: 'Node-based and integrated editing options.',
        note: 'Alternative workflows.',
      },
    ],
    gap: 'Deep Apple Silicon acceleration and some proprietary codec/plug-in pipelines are not matched.',
    verdict: 'Available. Several mature open NLEs cover professional editing.',
    sources: [
      'https://www.xda-developers.com/final-cut-pro-open-source-alternatives/',
      'https://vagon.io/blog/the-best-final-cut-pro-alternatives',
      'https://www.openshot.org/',
    ],
  },
  {
    id: 'apple-logic-pro',
    company_id: 'apple',
    name: 'Logic Pro',
    product_type: 'creative_software',
    categories: ['creative_software'],
    official_url: 'https://www.apple.com/logic-pro/',
    status: 'available',
    summary:
      'Logic Pro is Apple’s professional digital audio workstation, with recording, MIDI sequencing, mixing and a bundled instrument/effect library.',
    capabilities: [
      'Multitrack audio recording and editing',
      'MIDI sequencing and virtual instruments',
      'Mixing, plugins, automation',
      'Bundled sample and loop library',
    ],
    alternatives: [
      {
        name: 'Ardour',
        license: 'GPL-2.0',
        url: 'https://ardour.org/',
        covers: 'Mature open DAW for recording and mixing.',
        note: 'The most complete open DAW.',
      },
      {
        name: 'LMMS',
        license: 'GPL-2.0',
        url: 'https://lmms.io/',
        covers: 'MIDI-focused music production.',
        note: 'Strong for electronic music.',
      },
      {
        name: 'Audacity',
        license: 'GPL-2.0',
        url: 'https://www.audacityteam.org/',
        covers: 'Audio recording and editing.',
        note: 'Editor rather than a full DAW.',
      },
      {
        name: 'Zrythm',
        license: 'AGPL-3.0',
        url: 'https://www.zrythm.org/',
        covers: 'Modern DAW with automation and MIDI.',
        note: 'Newer entrant.',
      },
    ],
    gap: 'Logic’s bundled content library and some proprietary plugins are not replicated; open plugin ecosystems differ (CLAP/VST/LV2).',
    verdict: 'Available. Mature open DAWs cover recording, sequencing and mixing.',
    sources: [
      'https://ardour.org/',
      'https://www.reddit.com/r/linuxaudio/comments/1uyhkdl/ardour_vs_lmms_vs_the_rest_of_the_foss/',
      'https://github.com/mixxxdj/mixxx/wiki/List-Of-Open-Source-Music-Production-Software',
    ],
  },
  {
    id: 'apple-vision-pro',
    company_id: 'apple',
    name: 'Vision Pro',
    product_type: 'hardware',
    categories: ['hardware'],
    official_url: 'https://www.apple.com/apple-vision-pro/',
    status: 'partial',
    summary:
      'Apple Vision Pro is a mixed-reality headset running visionOS, with eye/hand input and a spatial app platform.',
    capabilities: [
      'Spatial computing hardware (displays, sensors, tracking)',
      'visionOS app platform and hand/eye input',
      'Spatial audio and passthrough',
    ],
    alternatives: [
      {
        name: 'Monado',
        license: 'BSL-1.0',
        url: 'https://monado.dev/',
        covers: 'Cross-platform open-source OpenXR runtime.',
        note: 'Software runtime; not a headset.',
      },
      {
        name: 'OpenXR',
        license: 'Apache-2.0',
        url: 'https://www.khronos.org/openxr/',
        covers: 'Open standard for AR/VR runtimes and apps.',
        note: 'Standard, and visionOS does not natively support it.',
      },
    ],
    gap: 'The hardware has no open equivalent, and the visionOS platform is closed; open stacks sit at the runtime/standard layer.',
    verdict:
      'Partial. Open components such as Monado and OpenXR cover parts of the software stack; no equivalent hardware and operating-system combination is verified.',
    sources: [
      'https://monado.dev/',
      'https://news.ycombinator.com/item?id=43768421',
      'https://www.reddit.com/r/linux/comments/1at4xbo/when_if_ever_do_you_expect_well_get_a_spatialar/',
    ],
  },

  // ──────────────────────── Amazon Web Services ────────────────────────
  {
    id: 'amazon-ec2',
    company_id: 'amazon_aws',
    name: 'Amazon EC2',
    product_type: 'compute',
    categories: ['compute'],
    official_url: 'https://aws.amazon.com/ec2/',
    status: 'available',
    summary:
      'Amazon EC2 is AWS’s elastic compute service: on-demand and reserved virtual machines across a global fleet.',
    capabilities: [
      'Provisioning virtual machines/instances',
      'Autoscaling and load balancing',
      'Block storage and networking',
    ],
    alternatives: [
      {
        name: 'OpenStack',
        license: 'Apache-2.0',
        url: 'https://www.openstack.org/',
        covers: 'Self-hosted IaaS with compute (Nova) and networking (Neutron).',
        note: 'The main open IaaS.',
      },
      {
        name: 'Apache CloudStack',
        license: 'Apache-2.0',
        url: 'https://cloudstack.apache.org/',
        covers: 'Turnkey VM provisioning and management.',
        note: 'Simpler to operate.',
      },
      {
        name: 'Proxmox VE',
        license: 'AGPL-3.0',
        url: 'https://www.proxmox.com/',
        covers: 'Virtualisation platform for VMs and containers.',
        note: 'Single-cluster scale.',
      },
      {
        name: 'OpenNebula',
        license: 'Apache-2.0',
        url: 'https://opennebula.io/',
        covers: 'Private-cloud manager.',
        note: 'Lightweight.',
      },
    ],
    gap: 'Global capacity, hardware diversity and AWS’s managed service ecosystem are not reproducible.',
    verdict: 'Available. Self-hosted IaaS platforms cover the compute function.',
    sources: [
      'https://www.openstack.org/',
      'https://cloudstack.apache.org/',
      'https://www.reddit.com/r/openstack/comments/yhh84x/is_openstack_still_the_best_open_source_option/',
    ],
  },
  {
    id: 'aws-lambda',
    company_id: 'amazon_aws',
    name: 'AWS Lambda',
    product_type: 'serverless',
    categories: ['serverless'],
    official_url: 'https://aws.amazon.com/lambda/',
    status: 'available',
    summary:
      'AWS Lambda runs functions on demand without managing servers, scaling to zero and billing per invocation.',
    capabilities: [
      'Event-driven function execution',
      'Automatic scaling and scale-to-zero',
      'Managed runtimes and triggers',
    ],
    alternatives: [
      {
        name: 'OpenFaaS',
        license: 'MIT',
        url: 'https://www.openfaas.com/',
        covers: 'Serverless functions on Kubernetes/Docker.',
        note: 'Community edition is open source.',
      },
      {
        name: 'Knative',
        license: 'Apache-2.0',
        url: 'https://knative.dev/',
        covers: 'Serverless serving and eventing on Kubernetes.',
        note: 'CNCF project.',
      },
      {
        name: 'Apache OpenWhisk',
        license: 'Apache-2.0',
        url: 'https://openwhisk.apache.org/',
        covers: 'Event-driven FaaS platform.',
        note: 'The original open FaaS.',
      },
      {
        name: 'Fission / Nuclio',
        license: 'Apache-2.0',
        url: 'https://fission.io/',
        covers: 'Kubernetes-native FaaS with fast cold starts.',
        note: 'Alternative runtimes.',
      },
    ],
    gap: 'AWS’s managed integrations (IAM, event sources, edge) and per-invocation economics differ.',
    verdict: 'Available. Multiple mature open serverless platforms exist.',
    sources: [
      'https://www.cncf.io/blog/2020/04/13/serverless-open-source-frameworks-openfaas-knative-more/',
      'https://www.openfaas.com/',
      'https://fission.io/docs/concepts/comparison/',
    ],
  },
  {
    id: 'aws-s3',
    company_id: 'amazon_aws',
    name: 'Amazon S3',
    product_type: 'storage',
    categories: ['storage'],
    official_url: 'https://aws.amazon.com/s3/',
    status: 'available',
    summary:
      'Amazon S3 is AWS’s object storage service: a durable, massively scalable bucket API with a de-facto standard interface.',
    capabilities: [
      'Object storage with an HTTP/S3 API',
      'Durability, versioning, lifecycle policies',
      'IAM-style access control and presigned URLs',
    ],
    alternatives: [
      {
        name: 'Ceph (RADOS Gateway)',
        license: 'LGPL-2.1',
        url: 'https://ceph.io/',
        covers: 'Distributed object/block/file storage with S3 API.',
        note: 'Full storage platform.',
      },
      {
        name: 'MinIO',
        license: 'AGPL-3.0',
        url: 'https://min.io/',
        covers: 'S3-compatible object store.',
        note: 'Licence and project direction have changed; verify.',
      },
      {
        name: 'Garage',
        license: 'AGPL-3.0',
        url: 'https://garagehq.deuxfleurs.fr/',
        covers: 'Lightweight distributed S3 store.',
        note: 'Low-resource alternative.',
      },
      {
        name: 'SeaweedFS / RustFS',
        license: 'Apache-2.0',
        url: 'https://seaweedfs.com/',
        covers: 'High-throughput S3-compatible stores.',
        note: 'Newer alternatives.',
      },
    ],
    gap: 'AWS’s global durability guarantees and entitlement layers are operational; the API itself is open.',
    verdict: 'Available. Several mature S3-compatible open object stores exist.',
    sources: [
      'https://iomete.com/resources/blog/evaluating-s3-compatible-storage-for-lakehouse',
      'https://lwn.net/Articles/1077739/',
      'https://lowcloud.io/en/blog/s3-compatible-object-storage',
    ],
  },
  {
    id: 'aws-rds',
    company_id: 'amazon_aws',
    name: 'Amazon RDS',
    product_type: 'database',
    categories: ['database'],
    official_url: 'https://aws.amazon.com/rds/',
    status: 'available',
    summary:
      'Amazon RDS is a managed relational database service: provisioning, patching, backups, failover and scaling for Postgres, MySQL and more.',
    capabilities: [
      'Managed relational databases',
      'Automated backups, patching, failover',
      'Read replicas and scaling',
    ],
    alternatives: [
      {
        name: 'CloudNativePG',
        license: 'Apache-2.0',
        url: 'https://cloudnative-pg.io/',
        covers: 'Kubernetes operator for HA PostgreSQL.',
        note: 'Provider-agnostic RDS analogue.',
      },
      {
        name: 'Crunchy Postgres Operator (PGO)',
        license: 'Apache-2.0',
        url: 'https://access.crunchydata.com/documentation/postgres-operator/latest/',
        covers: 'Alternative Postgres operator.',
        note: 'Comparison to CNPG is well documented.',
      },
      {
        name: 'Patroni',
        license: 'MIT',
        url: 'https://patroni.readthedocs.io/',
        covers: 'HA templating for PostgreSQL.',
        note: 'Used under many operators.',
      },
      {
        name: 'Vitess / MySQL Operator',
        license: 'Apache-2.0',
        url: 'https://vitess.io/',
        covers: 'Sharded MySQL management.',
        note: 'MySQL-side alternative.',
      },
    ],
    gap: 'Fully managed multi-engine provisioning at cloud scale is an operational service, not just software.',
    verdict: 'Available. Open operators run HA PostgreSQL/MySQL yourself.',
    sources: [
      'https://cloudnative-pg.io/',
      'https://agoratech.org/posts/cloudnativepg-vs-rds-for-postgresql-cost-control-and-tradeoffs/',
      'https://www.gabrielebartolini.it/articles/2026/05/cloudnativepg-and-crunchy-pgo-an-honest-opinionated-comparison/',
    ],
  },
  {
    id: 'aws-api-gateway',
    company_id: 'amazon_aws',
    name: 'API Gateway',
    product_type: 'api',
    categories: ['api'],
    official_url: 'https://aws.amazon.com/api-gateway/',
    status: 'available',
    summary:
      'AWS API Gateway is a managed front door for APIs: routing, auth, throttling, caching, and request/response transformation.',
    capabilities: [
      'Routing, rate limiting and quotas',
      'Auth (IAM, JWT, API keys, mTLS)',
      'Request/response transformation, caching, observability',
    ],
    alternatives: [
      {
        name: 'Apache APISIX',
        license: 'Apache-2.0',
        url: 'https://apisix.apache.org/',
        covers: 'High-performance API gateway with plugins.',
        note: 'Full-featured.',
      },
      {
        name: 'Kong Gateway',
        license: 'Apache-2.0',
        url: 'https://konghq.com/',
        covers: 'Popular gateway with a plugin ecosystem.',
        note: 'Open-core.',
      },
      {
        name: 'Tyk',
        license: 'MPL-2.0',
        url: 'https://tyk.io/',
        covers: 'Open-source API gateway and management.',
        note: 'Open-core.',
      },
      {
        name: 'KrakenD',
        license: 'Apache-2.0',
        url: 'https://www.krakend.io/',
        covers: 'Stateless API gateway/aggregator.',
        note: 'Config-driven.',
      },
      {
        name: 'Traefik / Gravitee',
        license: 'MIT / Apache-2.0',
        url: 'https://traefik.io/',
        covers: 'Edge router and API management options.',
        note: 'Cloud-native routers.',
      },
    ],
    gap: 'AWS’s deep IAM/Lambda integration and fully managed nature are the remaining differences.',
    verdict: 'Available. A crowded field of mature open gateways exists.',
    sources: [
      'https://www.moesif.com/blog/api-engineering/api-gateways/Open-Source-API-Gateway-Roundup/',
      'https://api7.ai/learning-center/api-gateway-guide/api-gateway-comparison-apisix-kong-traefik-krakend-tyk',
      'https://nordicapis.com/6-open-source-api-gateways/',
    ],
  },
  {
    id: 'aws-sqs',
    company_id: 'amazon_aws',
    name: 'SQS',
    product_type: 'messaging',
    categories: ['messaging'],
    official_url: 'https://aws.amazon.com/sqs/',
    status: 'available',
    summary:
      'Amazon SQS is a fully managed message queue: standard and FIFO queues with at-least-once delivery and managed scaling.',
    capabilities: [
      'Standard and FIFO queues',
      'At-least-once and exactly-once (FIFO) delivery',
      'Dead-letter queues, visibility timeouts, batching',
    ],
    alternatives: [
      {
        name: 'RabbitMQ',
        license: 'MPL-2.0',
        url: 'https://www.rabbitmq.com/',
        covers: 'Mature multi-protocol message broker.',
        note: 'Queue semantics differ from SQS.',
      },
      {
        name: 'NATS',
        license: 'Apache-2.0',
        url: 'https://nats.io/',
        covers: 'Lightweight messaging and JetStream persistence.',
        note: 'Cloud-native broker.',
      },
      {
        name: 'ElasticMQ',
        license: 'Apache-2.0',
        url: 'https://github.com/softwaremill/elasticmq',
        covers: 'Implements a subset of the SQS API.',
        note: 'Drop-in SQS-compatible queue.',
      },
      {
        name: 'SmoothMQ',
        license: 'MIT',
        url: 'https://github.com/poundifdef/smoothmq',
        covers: 'SQS-compatible message queue.',
        note: 'Newer drop-in replacement.',
      },
      {
        name: 'Apache ActiveMQ',
        license: 'Apache-2.0',
        url: 'https://activemq.apache.org/',
        covers: 'Java multi-protocol broker.',
        note: 'JMS-oriented.',
      },
    ],
    gap: 'SQS’s fully managed, effectively infinite scale is operational; API compatibility is covered by ElasticMQ/SmoothMQ.',
    verdict: 'Available. Both general brokers and SQS-API-compatible queues exist.',
    sources: [
      'https://github.com/softwaremill/elasticmq',
      'https://ably.com/alternatives/amazon-sqs',
      'https://eyevinntechnology.medium.com/sqs-compatible-message-queue-service-in-open-source-cloud-31427a6bc9aa',
    ],
  },
  {
    id: 'aws-ecs',
    company_id: 'amazon_aws',
    name: 'ECS',
    product_type: 'container_orchestration',
    categories: ['container_orchestration'],
    official_url: 'https://aws.amazon.com/ecs/',
    status: 'available',
    summary:
      'Amazon ECS is AWS’s container orchestration service: schedule and run containers with integrated load balancing, IAM and logging.',
    capabilities: [
      'Container scheduling and placement',
      'Service discovery, load balancing, autoscaling',
      'Integrated IAM, logging, secrets',
    ],
    alternatives: [
      {
        name: 'Kubernetes',
        license: 'Apache-2.0',
        url: 'https://kubernetes.io/',
        repo: 'https://github.com/kubernetes/kubernetes',
        covers: 'The dominant open container orchestrator.',
        note: 'Broader and more complex than ECS.',
      },
      {
        name: 'HashiCorp Nomad',
        license: 'BUSL-1.1 (source-available)',
        url: 'https://developer.hashicorp.com/nomad',
        covers: 'Simpler scheduler for containers and VMs.',
        note: 'Relicensed to BUSL — not OSI open source.',
      },
      {
        name: 'Docker Swarm',
        license: 'Apache-2.0',
        url: 'https://docs.docker.com/engine/swarm/',
        covers: 'Simple built-in container orchestration.',
        note: 'Lightweight.',
      },
      {
        name: 'Apache Mesos',
        license: 'Apache-2.0',
        url: 'https://mesos.apache.org/',
        covers: 'Cluster resource scheduler.',
        note: 'Largely superseded by Kubernetes.',
      },
    ],
    gap: 'AWS-native IAM/ALB/CloudWatch integration is AWS-specific; nothing to build on the open side.',
    verdict:
      'Available, with a caveat: Kubernetes and Docker Swarm are OSI open source; Nomad is now source-available under BUSL-1.1.',
    sources: [
      'https://developer.hashicorp.com/nomad/docs/what-is-nomad',
      'https://www.wiz.io/academy/container-security/kubernetes-alternatives',
      'https://spacelift.io/blog/kubernetes-alternatives',
    ],
  },
  {
    id: 'amazon-eks',
    company_id: 'amazon_aws',
    name: 'Amazon EKS',
    product_type: 'container_orchestration',
    categories: ['container_orchestration'],
    official_url: 'https://aws.amazon.com/eks/',
    status: 'available',
    summary:
      'Amazon EKS is AWS’s managed Kubernetes: AWS runs the control plane and integrates it with its networking, IAM and load balancers.',
    capabilities: [
      'Managed Kubernetes control plane',
      'Managed node groups and autoscaling',
      'AWS networking, IAM and observability integration',
    ],
    alternatives: [
      {
        name: 'k3s',
        license: 'Apache-2.0',
        url: 'https://k3s.io/',
        covers: 'Lightweight certified Kubernetes distribution.',
        note: 'Edge/small-cluster focus.',
      },
      {
        name: 'RKE2',
        license: 'Apache-2.0',
        url: 'https://docs.rke2.io/',
        covers: 'Hardened Kubernetes distribution.',
        note: 'Security/compliance focus.',
      },
      {
        name: 'Rancher',
        license: 'Apache-2.0',
        url: 'https://www.rancher.com/',
        covers: 'Multi-cluster Kubernetes management.',
        note: 'Management layer.',
      },
      {
        name: 'kOps',
        license: 'Apache-2.0',
        url: 'https://kops.sigs.k8s.io/',
        covers: 'Cluster lifecycle automation.',
        note: 'Production cluster tooling.',
      },
    ],
    gap: 'The managed control plane (SLA, upgrades, AWS integrations) is a service; the Kubernetes software itself is fully open.',
    verdict: 'Available. Kubernetes and its distributions are open source; EKS is a managed deployment of them.',
    sources: [
      'https://cloudfleet.ai/blog/cloud-native-how-to/2026-04-openshift-alternatives/',
      'https://northflank.com/blog/rancher-vs-openshift',
      'https://spot.rackspace.com/blog/aws-eks-alternatives',
    ],
  },

  // ───────────────────────────── Amazon ─────────────────────────────
  {
    id: 'amazon-online-retail',
    company_id: 'amazon',
    name: 'Amazon Online Retail',
    product_type: 'consumer_application',
    categories: ['ecommerce'],
    official_url: 'https://www.amazon.com/',
    status: 'available',
    summary:
      'Amazon’s online retail storefront: catalogue, cart, checkout, payments, reviews, marketplace sellers and fulfilment — the retail experience itself.',
    capabilities: [
      'Product catalogue and search',
      'Cart, checkout and payments',
      'Reviews, recommendations, marketplace',
      'Fulfilment and logistics integration',
    ],
    alternatives: [
      {
        name: 'Medusa',
        license: 'MIT',
        url: 'https://medusajs.com/',
        covers: 'Open headless commerce platform (Node.js).',
        note: 'Modern, API-first.',
      },
      {
        name: 'Saleor',
        license: 'BSD-3-Clause',
        url: 'https://saleor.io/',
        covers: 'GraphQL-first headless commerce.',
        note: 'Modern alternative.',
      },
      {
        name: 'Vendure',
        license: 'MIT',
        url: 'https://www.vendure.io/',
        covers: 'TypeScript/GraphQL commerce framework.',
        note: 'Developer-focused.',
      },
      {
        name: 'Magento Open Source',
        license: 'OSL-3.0',
        url: 'https://business.adobe.com/products/magento/magento-commerce.html',
        covers: 'Enterprise-grade open storefront.',
        note: 'Heavyweight; Adobe-stewarded.',
      },
      {
        name: 'WooCommerce / Bagisto / Spree',
        license: 'GPL-3.0 / MIT / BSD-3-Clause',
        url: 'https://woocommerce.com/',
        covers: 'Storefronts on WordPress and standalone stacks.',
        note: 'Range of approaches.',
      },
    ],
    gap: 'The software is replaceable; Amazon’s marketplace liquidity, catalogue size and fulfilment network are not.',
    verdict:
      'Available. Open commerce platforms cover the storefront; scale, logistics and network effects are the gap.',
    sources: [
      'https://medusajs.com/',
      'https://webkul.com/blog/top-10-open-source-and-free-ecommerce-platforms/',
      'https://yournextstore.com/blog/best-headless-commerce-platforms',
    ],
  },
  {
    id: 'amazon-prime',
    company_id: 'amazon',
    name: 'Amazon Prime',
    product_type: 'consumer_subscription',
    categories: ['subscription'],
    official_url: 'https://www.amazon.com/prime',
    status: 'pending',
    summary:
      'Amazon Prime is a paid membership bundle: fast shipping, Prime Video, Music, Photos, Reading and more, tied to Amazon’s logistics network.',
    capabilities: [
      'Subscription membership and billing',
      'Fast/free shipping entitlement',
      'Bundled media and service perks',
    ],
    alternatives: [
      {
        name: 'Coop models / community group-buy',
        license: 'n/a',
        url: 'https://www.bogleheads.org/forum/viewtopic.php?t=467402',
        covers: 'Non-Amazon shopping and delivery arrangements.',
        note: 'Not software; a different way of buying.',
      },
      {
        name: 'Walmart+ / Target Circle 360',
        license: 'proprietary',
        url: 'https://www.kiplinger.com/personal-finance/shopping/online-shopping/604366/alternatives-to-amazon-prime-for-free-shipping-and',
        covers: 'Commercial subscription alternatives.',
        note: 'Proprietary competitors, not open source.',
      },
    ],
    gap: 'Prime is a commercial membership over Amazon’s logistics; there is no open-source software equivalent, and the value is the network, not code.',
    verdict:
      'No open-source software equivalent to the Prime membership and logistics network is verified; assess the individual user jobs, such as shipping or media, separately.',
    sources: [
      'https://www.kiplinger.com/personal-finance/shopping/online-shopping/604366/alternatives-to-amazon-prime-for-free-shipping-and',
      'https://www.wired.com/story/amazon-prime-alternatives/',
      'https://www.reddit.com/r/amazonprime/comments/1s203tu/is_there_a_decent_alternative_to_amazon_prime_for/',
    ],
  },

  // ───────────────────────────── Netflix ─────────────────────────────
  {
    id: 'netflix-streaming',
    company_id: 'netflix',
    name: 'Netflix Streaming',
    product_type: 'media_streaming',
    categories: ['media_streaming'],
    official_url: 'https://www.netflix.com/',
    status: 'partial',
    summary:
      'Netflix Streaming is a subscription video-streaming service for watching TV shows and movies on supported internet-connected devices, with eligible downloads and plan-limited simultaneous viewing.',
    capabilities: [
      'Subscription video streaming',
      'Supported-device playback',
      'Profile-based discovery and controls',
      'Eligible offline downloads',
      'Plan-limited simultaneous viewing',
      'Smart Downloads on supported plans and devices',
    ],
    alternatives: [
      {
        name: 'Jellyfin',
        license: 'GPL-2.0',
        url: 'https://jellyfin.org/',
        covers: 'Fully open, self-hosted media server and streaming.',
        note: 'The clearest open replacement for the software.',
      },
      {
        name: 'PeerTube',
        license: 'AGPL-3.0',
        url: 'https://joinpeertube.org/',
        repo: 'https://github.com/framasoft/peertube',
        covers: 'Federated video hosting/streaming.',
        note: 'Platform-level alternative.',
      },
      {
        name: 'Kodi',
        license: 'GPL-2.0',
        url: 'https://kodi.tv/',
        covers: 'Open media centre.',
        note: 'Client-side playback.',
      },
      {
        name: 'Plex / Emby',
        license: 'proprietary',
        url: 'https://www.plex.tv/',
        covers: 'Popular media servers.',
        note: 'Not open source.',
      },
    ],
    gap: 'Netflix\'s licensed catalogue, membership service, recommendation implementation, and rights arrangements are not reproduced by the open-source alternatives.',
    verdict:
      'Partial. The streaming software is open source (Jellyfin); the catalogue, recommendations and rights are pending and will remain so.',
    sources: [
      'https://help.netflix.com/en/node/412',
      'https://help.netflix.com/en/node/14361',
      'https://help.netflix.com/en/node/54816',
      'https://jellyfin.org/',
      'https://selfhostedworld.com/alternative/netflix',
      'https://www.howtogeek.com/we-ditched-popular-paid-subscriptions-for-these-open-source-self-hosted-alternatives/',
    ],
  },

  // ────────────────────────────── Meta ──────────────────────────────
  {
    id: 'meta-whatsapp',
    company_id: 'meta',
    name: 'WhatsApp',
    product_type: 'messaging',
    categories: ['messaging'],
    official_url: 'https://www.whatsapp.com/',
    status: 'partial',
    summary:
      'WhatsApp is Meta’s messaging and calling service with end-to-end encrypted personal messages and calls, groups, status updates and linked devices.',
    capabilities: [
      'End-to-end encrypted messaging and calls',
      'Group chats, media sharing, status',
      'Linked web, desktop and companion devices',
      'Business-related messaging features',
    ],
    alternatives: [
      {
        name: 'Matrix / Element',
        license: 'Apache-2.0',
        url: 'https://element.io/',
        covers: 'Federated, end-to-end encrypted messaging; self-hostable.',
        note: 'The main open alternative.',
      },
      {
        name: 'SimpleX',
        license: 'AGPL-3.0',
        url: 'https://simplex.chat/',
        covers: 'Private messenger with no user identifiers.',
        note: 'Strong metadata privacy.',
      },
      {
        name: 'Signal',
        license: 'GPL-3.0 (client)',
        url: 'https://signal.org/',
        covers: 'Client is open source.',
        note: 'Server is not open source.',
      },
      {
        name: 'XMPP (Conversations)',
        license: 'Apache-2.0 / GPL-3.0',
        url: 'https://xmpp.org/',
        covers: 'Open federated messaging protocol.',
        note: 'The older federated standard.',
      },
      {
        name: 'Briar / Revolt',
        license: 'GPL-3.0 / AGPL-3.0',
        url: 'https://briarproject.org/',
        covers: 'Peer-to-peer and community chat.',
        note: 'Specialised alternatives.',
      },
    ],
    gap: 'Signal and Matrix cover core secure-messaging jobs, but not WhatsApp’s contact graph, account ecosystem, business surface or network effects.',
    verdict: 'Partial. Secure messaging and federation can be built or reused, but WhatsApp’s centralized consumer and business ecosystem is not a drop-in open replacement.',
    sources: [
      'https://element.io/',
      'https://signal.org/',
      'https://matrix.org/foundation/about/',
      'https://support.signal.org/hc/en-us/articles/360007320391-Is-it-private-Can-I-trust-it',
    ],
  },
  {
    id: 'meta-llama',
    company_id: 'meta',
    name: 'Llama',
    product_type: 'ai_model',
    categories: ['ai_model'],
    official_url: 'https://ai.meta.com/llama/',
    status: 'partial',
    summary:
      'Llama is Meta’s family of downloadable large language and multimodal models, released with model-specific community licenses, model cards and inference utilities.',
    capabilities: [
      'Text generation and reasoning',
      'Multimodal model variants',
      'Downloadable weights subject to license',
      'Official inference utilities',
      'Self-hosted deployment where hardware and license permit',
    ],
    alternatives: [
      {
        name: 'Mistral (Apache-2.0 models)',
        license: 'Apache-2.0',
        url: 'https://mistral.ai/',
        covers: 'Apache-2.0 licensed model family.',
        note: 'True OSI-licensed alternative.',
      },
      {
        name: 'Qwen',
        license: 'Apache-2.0 (many variants)',
        url: 'https://github.com/QwenLM/Qwen3',
        covers: 'Open-weight model family.',
        note: 'Licence varies by variant.',
      },
      {
        name: 'Falcon / OLMo',
        license: 'Apache-2.0',
        url: 'https://allenai.org/olmo',
        covers: 'Permissively licensed open models.',
        note: 'OLMo is fully open (data + code).',
      },
      {
        name: 'Ollama',
        license: 'MIT',
        url: 'https://ollama.com/',
        repo: 'https://github.com/ollama/ollama',
        covers: 'Local runner for open weights.',
        note: 'Runtime, not a model.',
      },
    ],
    gap: 'Llama’s licence is not OSI open source and carries use restrictions; fully open model families exist but at differing capability.',
    verdict:
      'Partial. Llama is open-weight, and genuinely open-source-licensed alternatives (Mistral Apache-2.0, OLMo) exist — hence no single "pending" project.',
    sources: [
      'https://ai.meta.com/resources/models-and-libraries/llama-downloads/',
      'https://github.com/meta-llama/llama',
      'https://github.com/meta-llama/llama-models',
      'https://github.com/meta-llama/llama/blob/main/MODEL_CARD.md',
    ],
  },
  {
    "id": "google-drive",
    "company_id": "google",
    "name": "Google Drive",
    "product_type": "storage",
    "categories": [
      "cloud-storage",
      "file-sync"
    ],
    "official_url": "https://drive.google.com/",
    "status": "partial",
    "summary": "Google Drive is Google's cloud file-storage, organisation and sharing service, included in Google Workspace but with its own product identity, permissions model and Drive API.",
    "capabilities": [
      "Upload, create, organise, search, download and sync files and folders",
      "Sharing, permissions, shared drives and access inheritance",
      "Files, folders, revisions, labels, changes and integration APIs"
    ],
    "alternatives": [
      {
        "name": "Nextcloud",
        "license": "AGPL-3.0",
        "url": "https://nextcloud.com/",
        "covers": "Self-hosted files, sync and sharing server.",
        "note": "Files only; not the collaborative editors."
      }
    ],
    "gap": "Nextcloud covers storage, sync and sharing; the real-time collaborative editors and Workspace integration remain the gap.",
    "verdict": "Partial. A mature self-hosted alternative exists for storage and sync (Nextcloud); collaborative editing is covered only in part.",
    "sources": [
      "https://support.google.com/drive/answer/2424384",
      "https://developers.google.com/workspace/drive/api/guides/about-sdk",
      "https://developers.google.com/workspace/drive/api/reference/rest/v3",
      "https://support.google.com/drive/answer/7166529"
    ]
  },
  {
    "id": "google-docs",
    "company_id": "google",
    "name": "Google Docs",
    "product_type": "productivity_application",
    "categories": [
      "documents",
      "collaboration"
    ],
    "official_url": "https://docs.google.com/",
    "status": "partial",
    "summary": "Google Docs is Google's browser-based collaborative word processor, part of Google Workspace.",
    "capabilities": [
      "Create, edit, format and organise online documents",
      "Sharing, comments, suggestions and collaborative editing",
      "Docs API, Apps Script and Workspace extension surfaces"
    ],
    "alternatives": [
      {
        "name": "ONLYOFFICE Docs",
        "license": "AGPL-3.0",
        "url": "https://www.onlyoffice.com/",
        "covers": "Self-hosted collaborative document editor.",
        "note": "Community edition is self-hostable."
      },
      {
        "name": "Collabora Online",
        "license": "MPL-2.0",
        "url": "https://www.collaboraonline.com/",
        "covers": "LibreOffice-based collaborative suite in the browser.",
        "note": ""
      }
    ],
    "gap": "Self-hosted collaborative editors exist (ONLYOFFICE, Collabora) but lack Google's ecosystem integration and mainstream adoption.",
    "verdict": "Partial. Self-hosted collaborative editors exist and are usable today; ecosystem polish and integrations lag Google.",
    "sources": [
      "https://support.google.com/docs/answer/7068618",
      "https://developers.google.com/workspace/docs/api/how-tos/overview",
      "https://developers.google.com/workspace/docs/api/reference/rest",
      "https://support.google.com/docs/answer/16722399"
    ]
  },
  {
    "id": "google-sheets",
    "company_id": "google",
    "name": "Google Sheets",
    "product_type": "productivity_application",
    "categories": [
      "spreadsheets",
      "collaboration"
    ],
    "official_url": "https://sheets.google.com/",
    "status": "partial",
    "summary": "Google Sheets is Google's browser-based collaborative spreadsheet application.",
    "capabilities": [
      "Create, edit and format spreadsheets with values, formulas and functions",
      "Charts, filters, pivot tables, protected ranges and version history",
      "Sharing, collaboration, Apps Script and Sheets API automation"
    ],
    "alternatives": [
      {
        "name": "Grist",
        "license": "Apache-2.0",
        "url": "https://www.getgrist.com/",
        "covers": "Relational spreadsheet, self-hostable.",
        "note": ""
      },
      {
        "name": "ONLYOFFICE Docs",
        "license": "AGPL-3.0",
        "url": "https://www.onlyoffice.com/",
        "covers": "Collaborative spreadsheet editor.",
        "note": ""
      }
    ],
    "gap": "Self-hosted spreadsheet editors exist; performance at scale and the add-on ecosystem differ from Google Sheets.",
    "verdict": "Partial. Self-hosted collaborative spreadsheets exist (Grist, ONLYOFFICE); parity with Sheets at scale is partial.",
    "sources": [
      "https://support.google.com/docs/answer/6000292",
      "https://support.google.com/docs/answer/9331169",
      "https://developers.google.com/workspace/sheets/api/guides/concepts",
      "https://developers.google.com/workspace/sheets/api/reference/rest"
    ]
  },
  {
    "id": "google-meet",
    "company_id": "google",
    "name": "Google Meet",
    "product_type": "consumer_application",
    "categories": [
      "video-conferencing"
    ],
    "official_url": "https://meet.google.com/",
    "status": "available",
    "summary": "Google Meet is Google's browser-based video conferencing service.",
    "capabilities": [
      "Create and join browser-based video meetings",
      "Participant sessions, meeting spaces and plan-dependent recordings or transcripts",
      "Calendar, Workspace, Meet add-ons and REST API integration"
    ],
    "alternatives": [
      {
        "name": "Jitsi Meet",
        "license": "Apache-2.0",
        "url": "https://jitsi.org/",
        "covers": "Self-hosted video conferencing with no account required.",
        "note": "Mature; deployed at scale."
      },
      {
        "name": "BigBlueButton",
        "license": "LGPL-3.0",
        "url": "https://bigbluebutton.org/",
        "covers": "Open-source web conferencing focused on teaching and structured online sessions.",
        "note": "Partial; education-oriented rather than a general Workspace replacement."
      },
      {
        "name": "Element Call",
        "license": "AGPL-3.0",
        "url": "https://element.io/call",
        "covers": "Open video calls and conferencing built on Matrix infrastructure.",
        "note": "Partial; requires Matrix deployment and does not reproduce Google's hosted Workspace integration."
      }
    ],
    "gap": "Jitsi Meet, BigBlueButton and Element Call cover the core conferencing use cases, but hosted reliability, Google Workspace integration, Meet-specific APIs and plan-dependent recording/transcription remain gaps.",
    "verdict": "Partial. Open alternatives cover video conferencing, but not the full Google Meet and Workspace integration surface.",
    "sources": [
      "https://developers.google.com/workspace/meet/overview",
      "https://developers.google.com/workspace/meet/api/guides/overview",
      "https://support.google.com/meet/answer/9308681"
    ]
  },
  {
    "id": "google-calendar",
    "company_id": "google",
    "name": "Google Calendar",
    "product_type": "productivity_application",
    "categories": [
      "calendar",
      "scheduling"
    ],
    "official_url": "https://calendar.google.com/",
    "status": "available",
    "summary": "Google Calendar is Google's calendar and scheduling service.",
    "capabilities": [
      "Create and share calendars with events and recurring schedules",
      "Attendees, reminders, time zones, free/busy and conference data",
      "REST API, OAuth scopes, add-ons and Workspace integrations"
    ],
    "alternatives": [
      {
        "name": "Nextcloud Calendar",
        "license": "AGPL-3.0",
        "url": "https://nextcloud.com/calendar/",
        "covers": "Calendar server and web UI on CalDAV.",
        "note": ""
      },
      {
        "name": "Radicale",
        "license": "GPL-3.0",
        "url": "https://radicale.org/",
        "covers": "Lightweight CalDAV/CardDAV server.",
        "note": ""
      },
      {
        "name": "EteSync Web",
        "license": "AGPL-3.0",
        "url": "https://www.etesync.com/",
        "covers": "Encrypted synchronization-oriented calendar and contacts workflow.",
        "note": "Partial; does not reproduce Google's hosted Workspace and Calendar API surface."
      }
    ],
    "gap": "Open calendaring is mature through CalDAV, but Google account integration, appointment booking, free/busy, Meet linkage and Calendar API compatibility remain gaps.",
    "verdict": "Partial. Open alternatives cover core calendars and synchronization but not the full Google Calendar integration surface.",
    "sources": [
      "https://support.google.com/calendar",
      "https://developers.google.com/workspace/calendar/api/guides/overview",
      "https://developers.google.com/workspace/calendar/api/v3/reference",
      "https://developers.google.com/workspace/calendar/api/auth"
    ]
  },
  {
    "id": "google-photos",
    "company_id": "google",
    "name": "Google Photos",
    "product_type": "consumer_application",
    "categories": [
      "photo-management",
      "backup",
      "media-library"
    ],
    "official_url": "https://photos.google.com/",
    "status": "partial",
    "summary": "Google Photos is Google's photo and video backup, organization and sharing service.",
    "capabilities": [
      "Back up and organize photos and videos across devices",
      "Albums, search, sharing and account-based media library",
      "Picker and Library APIs for selected and app-created media"
    ],
    "alternatives": [
      {
        "name": "Immich",
        "license": "AGPL-3.0",
        "url": "https://immich.app/",
        "covers": "Self-hosted photo and video backup with mobile apps.",
        "note": "Fast-moving; verify parity per release."
      },
      {
        "name": "Photoprism",
        "license": "AGPL-3.0",
        "url": "https://www.photoprism.app/",
        "covers": "Self-hosted photo management, indexing and browsing.",
        "note": "Partial; does not reproduce Google's account storage and client ecosystem."
      },
      {
        "name": "LibrePhotos",
        "license": "MIT",
        "url": "https://github.com/LibrePhotos/librephotos",
        "covers": "Self-hosted photo management and visual organization.",
        "note": "Partial; deployment, mobile and ML behavior differ from Google Photos."
      }
    ],
    "gap": "Open alternatives cover self-hosted backup, albums and browsing, but hosted scale, account integration, proprietary editing/ML and current Picker/Library API behavior remain gaps.",
    "verdict": "Partial. A strong self-hosted alternative exists (Immich); search quality and mobile polish approach but do not match Google Photos.",
    "sources": [
      "https://support.google.com/photos/answer/6193313",
      "https://support.google.com/photos/answer/6128850",
      "https://developers.google.com/photos/overview/about",
      "https://developers.google.com/photos/library/reference/rest/",
      "https://developers.google.com/photos/support/updates"
    ]
  },
  {
    "id": "google-news",
    "company_id": "google",
    "name": "Google News",
    "product_type": "media",
    "categories": [
      "news-aggregation"
    ],
    "official_url": "https://news.google.com/",
    "status": "available",
    "summary": "Google News is Google's news aggregation and personalization service.",
    "capabilities": [
      "Aggregate publisher coverage with headlines and full-coverage views",
      "Personalized feeds using topics, sources, region and activity signals",
      "Follow or hide topics and sources, save stories and manage notifications"
    ],
    "alternatives": [
      {
        "name": "FreshRSS",
        "license": "AGPL-3.0",
        "url": "https://freshrss.org/",
        "covers": "Self-hosted RSS aggregator with a Google Reader-like UI.",
        "note": ""
      },
      {
        "name": "Miniflux",
        "license": "AGPL-3.0",
        "url": "https://miniflux.net/",
        "covers": "Minimalist RSS server.",
        "note": ""
      },
      {
        "name": "Tiny Tiny RSS",
        "license": "GPL-2.0",
        "url": "https://tt-rss.org/",
        "covers": "Self-hosted feed aggregation and filtering.",
        "note": "Partial; RSS reading does not reproduce Google's ranking and publisher surfaces."
      }
    ],
    "gap": "RSS readers cover following known sources, but publisher discovery, story clustering, personalized ranking, local relevance, News Showcase and account signals remain gaps.",
    "verdict": "Partial. Open alternatives cover feed reading and filtering but not the complete Google News aggregation and personalization surface.",
    "sources": [
      "https://support.google.com/googlenews/answer/9005749",
      "https://support.google.com/googlenews/answer/9010862",
      "https://support.google.com/news/publisher-center/answer/9607025",
      "https://support.google.com/news/publisher-center/"
    ]
  },
  {
    "id": "google-play",
    "company_id": "google",
    "name": "Google Play",
    "product_type": "consumer_application",
    "categories": [
      "app-store",
      "digital-distribution",
      "payments"
    ],
    "official_url": "https://play.google.com/",
    "status": "partial",
    "summary": "Google Play is Google's Android app, game and digital-content distribution platform with developer publishing and Play Protect services.",
    "capabilities": [
      "Discover, install and update Android apps and digital content",
      "Developer publishing, signing, distribution and billing surfaces",
      "Play Protect scanning and Play integrity protections"
    ],
    "alternatives": [
      {
        "name": "F-Droid",
        "license": "GPL-3.0",
        "url": "https://f-droid.org/",
        "covers": "Catalogue of free and open-source Android apps.",
        "note": "Partial; no commercial catalogue, Google account billing or Play Protect equivalence."
      },
      {
        "name": "Aurora Store",
        "license": "GPL-3.0",
        "url": "https://gitlab.com/AuroraOSS/AuroraStore",
        "covers": "Alternative client for accessing Google Play catalogue content.",
        "note": "Partial; depends on Google's catalogue and does not replace the distribution backend."
      },
      {
        "name": "Obtainium",
        "license": "GPL-3.0",
        "url": "https://github.com/ImranR98/Obtainium",
        "covers": "Android app updater that obtains releases from project sources.",
        "note": "Partial; not a general marketplace or billing platform."
      }
    ],
    "gap": "Open alternatives cover portions of FOSS discovery, installation and updating, but commercial catalogue, account purchases, billing, signing, Play Protect and Play Integrity remain gaps.",
    "verdict": "Partial. Open-source distribution exists (F-Droid) but covers only FOSS apps, with no paid catalogue.",
    "sources": [
      "https://support.google.com/googleplay/answer/113409",
      "https://developer.android.com/distribute",
      "https://support.google.com/googleplay/answer/2812853",
      "https://support.google.com/googleplay/android-developer/answer/13857328"
    ]
  },
  {
    "id": "google-analytics",
    "company_id": "google",
    "name": "Google Analytics",
    "product_type": "business_software",
    "categories": [
      "web-analytics",
      "product-analytics",
      "measurement"
    ],
    "official_url": "https://analytics.google.com/",
    "status": "available",
    "summary": "Google Analytics is Google's web and app measurement platform with reporting, configuration APIs and server-side event collection.",
    "capabilities": [
      "Collect web and app events and produce realtime and detail reports",
      "Manage properties, streams, dimensions, metrics and integrations",
      "Query data with APIs and send server-side events with Measurement Protocol"
    ],
    "alternatives": [
      {
        "name": "Matomo",
        "license": "GPL-3.0",
        "url": "https://matomo.org/",
        "covers": "Self-hosted web analytics with full data ownership.",
        "note": "Mature; 15+ years."
      },
      {
        "name": "Plausible",
        "license": "AGPL-3.0",
        "url": "https://plausible.io/",
        "covers": "Lightweight, privacy-first analytics.",
        "note": "Self-hostable community edition."
      },
      {
        "name": "Umami",
        "license": "MIT",
        "url": "https://umami.is/",
        "covers": "Self-hosted privacy-focused web analytics and dashboards.",
        "note": "Partial; app analytics and Google integrations differ."
      }
    ],
    "gap": "Open alternatives cover core web analytics and data ownership, but GA4 event semantics, cross-platform integrations, attribution, managed scale and APIs remain gaps.",
    "verdict": "Partial. Mature self-hosted analytics exists, but it is not a drop-in replacement for the complete Google Analytics ecosystem.",
    "sources": [
      "https://support.google.com/analytics/answer/9212670",
      "https://developers.google.com/analytics",
      "https://developers.google.com/analytics/devguides/config/admin/v1",
      "https://developers.google.com/analytics/devguides/collection/protocol/ga4"
    ]
  },
  {
    "id": "google-classroom",
    "company_id": "google",
    "name": "Google Classroom",
    "product_type": "business_software",
    "categories": [
      "education",
      "learning-management",
      "assignments"
    ],
    "official_url": "https://classroom.google.com/",
    "status": "available",
    "summary": "Google Classroom is Google's education platform for classes, coursework, submissions, grading and communication.",
    "capabilities": [
      "Manage classes, rosters, assignments, submissions and grades",
      "Announcements, materials, feedback and class communication",
      "Classroom API and Workspace integrations"
    ],
    "alternatives": [
      {
        "name": "Moodle",
        "license": "GPL-3.0",
        "url": "https://moodle.org/",
        "covers": "Mature open-source learning management system.",
        "note": "Self-hosted; large community."
      },
      {
        "name": "Canvas LMS",
        "license": "AGPL-3.0",
        "url": "https://www.instructure.com/canvas",
        "covers": "Open-source LMS used by institutions.",
        "note": "Partial; broader LMS surface and different Workspace integration."
      },
      {
        "name": "Open edX",
        "license": "AGPL-3.0",
        "url": "https://openedx.org/",
        "covers": "Open-source course and learning platform.",
        "note": "Partial; course delivery differs from Classroom's roster and Workspace workflow."
      }
    ],
    "gap": "Open LMS alternatives cover classes, assignments and grades, but Google identity, Drive/Docs integration, Classroom API semantics and Education administration remain gaps.",
    "verdict": "Partial. Mature open-source LMS platforms exist, but none is a drop-in replacement for the complete Google Classroom surface.",
    "sources": [
      "https://support.google.com/edu/classroom/answer/6020279",
      "https://developers.google.com/workspace/classroom/guides/get-started",
      "https://developers.google.com/workspace/classroom/guides/key-concepts/api-structure",
      "https://developers.google.com/workspace/classroom/reference/rest"
    ]
  },
  {
    "id": "google-ads",
    "company_id": "google",
    "name": "Google Ads",
    "product_type": "advertising_technology",
    "categories": [
      "advertising",
      "campaign-management",
      "measurement"
    ],
    "official_url": "https://ads.google.com/",
    "status": "partial",
    "summary": "Google Ads is Google's online advertising platform for campaigns, ads, bidding, conversion measurement and reporting.",
    "capabilities": [
      "Manage customers, campaigns, ad groups, ads, assets and budgets",
      "Targeting, bidding, conversions and performance reporting",
      "Google Ads API, scripts, bulk tools and policy controls"
    ],
    "alternatives": [
      {
        "name": "Revive Adserver",
        "license": "GPL-2.0",
        "url": "https://www.revive-adserver.com/",
        "covers": "Self-hosted ad serving and campaign-management software.",
        "note": "Partial; no Google demand, inventory, auction, Ads API or Google network equivalence."
      }
    ],
    "gap": "Revive covers portions of self-hosted ad serving, but advertiser demand, Google inventory, auction, targeting scale, measurement ecosystem and policy enforcement remain gaps.",
    "verdict": "Partial. An open ad server exists, but no open-source project replicates the complete Google Ads marketplace and platform.",
    "sources": [
      "https://developers.google.com/google-ads/api/docs/get-started/introduction",
      "https://developers.google.com/google-ads/api/docs/concepts/api-structure",
      "https://developers.google.com/google-ads/api/docs/ads/overview",
      "https://developers.google.com/google-ads/api/docs/api-policy/access-levels"
    ]
  },
  {
    "id": "youtube-music",
    "company_id": "google",
    "name": "YouTube Music",
    "product_type": "media_streaming",
    "categories": [
      "music-streaming",
      "podcasts",
      "music-discovery"
    ],
    "official_url": "https://music.youtube.com/",
    "status": "partial",
    "summary": "YouTube Music is Google's distinct music and podcast service with discovery, library, uploads and optional Premium playback benefits.",
    "capabilities": [
      "On-demand music, music-video and podcast playback",
      "Search, personalized recommendations, Samples and Sound Search",
      "Libraries, playlists and private user uploads",
      "Premium background play, audio-only playback and offline downloads"
    ],
    "alternatives": [
      {
        "name": "Navidrome",
        "license": "GPL-3.0",
        "url": "https://www.navidrome.org/",
        "covers": "Self-hosted music streaming server for your own library.",
        "note": ""
      },
      {
        "name": "Funkwhale",
        "license": "AGPL-3.0",
        "url": "https://funkwhale.audio/",
        "covers": "Self-hosted music sharing and streaming.",
        "note": ""
      }
    ],
    "gap": "Self-hosted servers stream a library you own; they do not reproduce YouTube Music's licensed catalog, music-video ecosystem, recommendations, Premium membership or Google account/device integrations.",
    "verdict": "Partial. Navidrome and Funkwhale cover owned-library streaming, but not the licensed catalog or Google service surface.",
    "sources": [
      "https://support.google.com/youtubemusic/answer/6313529?hl=en-GB",
      "https://support.google.com/youtubemusic/answer/9266556?hl=en-GB",
      "https://support.google.com/youtubemusic/answer/9716522?hl=en",
      "https://support.google.com/youtubemusic/answer/13401025?hl=en-GB",
      "https://support.google.com/youtubemusic/answer/9231765?hl=en",
      "https://www.navidrome.org/",
      "https://funkwhale.audio/"
    ]
  },
  {
    "id": "google-cloud-storage",
    "company_id": "google",
    "name": "Google Cloud Storage",
    "product_type": "storage",
    "categories": [
      "object-storage"
    ],
    "official_url": "https://cloud.google.com/storage",
    "status": "available",
    "summary": "Google Cloud Storage is Google Cloud's object storage service.",
    "capabilities": [
      "Managed object storage",
      "S3-compatible API",
      "Lifecycle and retention"
    ],
    "alternatives": [
      {
        "name": "MinIO",
        "license": "AGPL-3.0",
        "url": "https://min.io/",
        "covers": "S3-compatible object storage, self-hostable.",
        "note": ""
      },
      {
        "name": "Ceph RADOS Gateway",
        "license": "LGPL-2.1",
        "url": "https://ceph.io/",
        "covers": "Distributed object store with an S3 API.",
        "note": ""
      }
    ],
    "gap": "S3-compatible object storage is fully covered by self-hosted options; the gap is operations, not software.",
    "verdict": "Available. MinIO and Ceph provide production-grade S3-compatible object storage.",
    "sources": [
      "https://min.io/",
      "https://ceph.io/"
    ]
  },
  {
    "id": "google-pubsub",
    "company_id": "google",
    "name": "Pub/Sub",
    "product_type": "messaging",
    "categories": [
      "messaging",
      "event-streaming"
    ],
    "official_url": "https://cloud.google.com/pubsub",
    "status": "available",
    "summary": "Pub/Sub is Google Cloud's managed messaging and event-streaming service.",
    "capabilities": [
      "Pub/sub messaging at scale",
      "Delivery guarantees",
      "Schema support"
    ],
    "alternatives": [
      {
        "name": "NATS",
        "license": "Apache-2.0",
        "url": "https://nats.io/",
        "covers": "High-performance messaging with JetStream persistence.",
        "note": ""
      },
      {
        "name": "Apache Kafka",
        "license": "Apache-2.0",
        "url": "https://kafka.apache.org/",
        "covers": "Distributed event streaming platform.",
        "note": ""
      }
    ],
    "gap": "Messaging is a mature open-source category; the gap is Google's managed operations, not the technology.",
    "verdict": "Available. NATS and Kafka cover pub/sub and event streaming fully.",
    "sources": [
      "https://nats.io/",
      "https://kafka.apache.org/"
    ]
  },
  {
    "id": "apple-iphone",
    "company_id": "apple",
    "name": "iPhone",
    "product_type": "hardware",
    "categories": [
      "smartphone"
    ],
    "official_url": "https://www.apple.com/iphone/",
    "status": "partial",
    "summary": "The iPhone is Apple's smartphone line, running iOS.",
    "capabilities": [
      "Smartphone hardware with Apple Silicon",
      "iOS operating system",
      "App distribution via the App Store"
    ],
    "alternatives": [
      {
        "name": "Android Open Source Project",
        "license": "Apache-2.0",
        "url": "https://source.android.com/",
        "covers": "The open-source Android operating system.",
        "note": "The OS is open; devices are not."
      }
    ],
    "gap": "The software stack (AOSP, LineageOS, GrapheneOS) is open and mature; open hardware at comparable quality does not exist.",
    "verdict": "Partial. Open phone operating systems exist; open smartphone hardware remains a research gap.",
    "sources": [
      "https://source.android.com/",
      "https://grapheneos.org/"
    ]
  },
  {
    "id": "apple-ipad",
    "company_id": "apple",
    "name": "iPad",
    "product_type": "hardware",
    "categories": [
      "tablet"
    ],
    "official_url": "https://www.apple.com/ipad/",
    "status": "partial",
    "summary": "The iPad is Apple's tablet line, running iPadOS.",
    "capabilities": [
      "Tablet hardware with Pencil support",
      "iPadOS",
      "App ecosystem"
    ],
    "alternatives": [
      {
        "name": "Android Open Source Project",
        "license": "Apache-2.0",
        "url": "https://source.android.com/",
        "covers": "Open-source Android, also built for tablets.",
        "note": "OS layer only."
      }
    ],
    "gap": "Open tablet software exists (Android/AOSP on supported devices); open tablet hardware does not.",
    "verdict": "Partial. The OS layer is replaceable (AOSP); the hardware is not.",
    "sources": [
      "https://source.android.com/",
      "https://en.wikipedia.org/wiki/IPad"
    ]
  },
  {
    "id": "apple-watch",
    "company_id": "apple",
    "name": "Apple Watch",
    "product_type": "hardware",
    "categories": [
      "wearable"
    ],
    "official_url": "https://www.apple.com/watch/",
    "status": "partial",
    "summary": "Apple Watch is Apple's smartwatch line, running watchOS.",
    "capabilities": [
      "Health and fitness tracking",
      "Notifications and apps",
      "Deep iPhone integration"
    ],
    "alternatives": [
      {
        "name": "AsteroidOS",
        "license": "LGPL-2.1",
        "url": "https://asteroidos.org/",
        "covers": "Open-source watch OS for selected smartwatches.",
        "note": "Runs on a small hardware list."
      },
      {
        "name": "InfiniTime",
        "license": "AGPL-3.0",
        "url": "https://github.com/InfiniTimeOrg/InfiniTime",
        "covers": "Open firmware for PineTime-class watches.",
        "note": ""
      }
    ],
    "gap": "Watch firmware is open for a few devices (AsteroidOS, InfiniTime); comparable open hardware with health sensors does not exist.",
    "verdict": "Partial. Open watch firmware exists for selected hardware only.",
    "sources": [
      "https://asteroidos.org/",
      "https://github.com/InfiniTimeOrg/InfiniTime"
    ]
  },
  {
    "id": "apple-icloud",
    "company_id": "apple",
    "name": "iCloud",
    "product_type": "storage",
    "categories": [
      "cloud-storage",
      "sync",
      "backup"
    ],
    "official_url": "https://www.icloud.com/",
    "status": "partial",
    "summary": "iCloud is Apple's cloud service for storage, sync and backup across Apple devices.",
    "capabilities": [
      "Device backup and restore",
      "Cross-device sync",
      "Photos, calendar, contacts and notes"
    ],
    "alternatives": [
      {
        "name": "Nextcloud",
        "license": "AGPL-3.0",
        "url": "https://nextcloud.com/",
        "covers": "Self-hosted files, calendar, contacts and sync.",
        "note": ""
      }
    ],
    "gap": "Nextcloud covers files, sync and PIM; full iOS device backup and Apple's device-level integration have no self-hosted equivalent.",
    "verdict": "Partial. Sync and files are self-hostable (Nextcloud); device-level backup remains proprietary.",
    "sources": [
      "https://nextcloud.com/",
      "https://en.wikipedia.org/wiki/ICloud"
    ]
  },
  {
    "id": "apple-messages",
    "company_id": "apple",
    "name": "Messages (iMessage)",
    "product_type": "messaging",
    "categories": [
      "messaging"
    ],
    "official_url": "https://www.apple.com/messages/",
    "status": "partial",
    "summary": "Messages is Apple's messaging app; iMessage is its proprietary messaging network.",
    "capabilities": [
      "Rich messaging over Apple's network",
      "End-to-end encryption",
      "Sync across Apple devices"
    ],
    "alternatives": [
      {
        "name": "Matrix (Synapse)",
        "license": "Apache-2.0",
        "url": "https://matrix.org/",
        "covers": "Open federated messaging network.",
        "note": "Does not interoperate with iMessage."
      }
    ],
    "gap": "No open network interoperates with iMessage; open alternatives replace the need, not the network.",
    "verdict": "No verified alternative. Open messaging networks exist (Matrix, XMPP) but none interoperate with iMessage.",
    "sources": [
      "https://matrix.org/",
      "https://en.wikipedia.org/wiki/IMessage"
    ]
  },
  {
    "id": "apple-facetime",
    "company_id": "apple",
    "name": "FaceTime",
    "product_type": "messaging",
    "categories": [
      "video-calling"
    ],
    "official_url": "https://www.apple.com/facetime/",
    "status": "partial",
    "summary": "FaceTime is Apple's video and audio calling service.",
    "capabilities": [
      "One-tap video calls",
      "Group calls",
      "Integration with Contacts and Siri"
    ],
    "alternatives": [
      {
        "name": "Jitsi Meet",
        "license": "Apache-2.0",
        "url": "https://jitsi.org/",
        "covers": "Self-hosted video calls in the browser.",
        "note": ""
      }
    ],
    "gap": "Video calling is fully covered by open-source (Jitsi, Matrix); the gap is Apple's network and one-tap integration.",
    "verdict": "Partial. The function is covered (Jitsi Meet); Apple's network effects are not.",
    "sources": [
      "https://jitsi.org/",
      "https://en.wikipedia.org/wiki/FaceTime"
    ]
  },
  {
    "id": "apple-siri",
    "company_id": "apple",
    "name": "Siri",
    "product_type": "ai_application",
    "categories": [
      "voice-assistant"
    ],
    "official_url": "https://www.apple.com/siri/",
    "status": "partial",
    "summary": "Siri is Apple's voice assistant, built into iOS, macOS, HomePod and other devices.",
    "capabilities": [
      "Voice requests on device",
      "Home automation control",
      "App intents"
    ],
    "alternatives": [
      {
        "name": "OpenVoiceOS",
        "license": "Apache-2.0",
        "url": "https://openvoiceos.org/",
        "covers": "Open-source voice assistant platform (Mycroft successor).",
        "note": "Community-run."
      },
      {
        "name": "Home Assistant Voice",
        "license": "Apache-2.0",
        "url": "https://www.home-assistant.io/voice/",
        "covers": "Local voice assistant for the smart home.",
        "note": ""
      }
    ],
    "gap": "Open voice stacks exist (OpenVoiceOS, Home Assistant voice); capability, on-device models and device reach lag Apple.",
    "verdict": "Partial. Open assistants exist; capability and integration depth lag.",
    "sources": [
      "https://openvoiceos.org/",
      "https://www.home-assistant.io/voice/"
    ]
  },
  {
    "id": "apple-music",
    "company_id": "apple",
    "name": "Apple Music",
    "product_type": "media_streaming",
    "categories": [
      "music-streaming"
    ],
    "official_url": "https://www.apple.com/apple-music/",
    "status": "partial",
    "summary": "Apple Music is Apple's music streaming service.",
    "capabilities": [
      "Licensed catalogue streaming",
      "Personalized radio",
      "Library matching and uploads"
    ],
    "alternatives": [
      {
        "name": "Navidrome",
        "license": "GPL-3.0",
        "url": "https://www.navidrome.org/",
        "covers": "Self-hosted streaming for your own library.",
        "note": ""
      },
      {
        "name": "Funkwhale",
        "license": "AGPL-3.0",
        "url": "https://funkwhale.audio/",
        "covers": "Self-hosted music sharing.",
        "note": ""
      }
    ],
    "gap": "Streaming your own library is self-hostable; the licensed catalogue is not replicable in open source.",
    "verdict": "Partial. Self-hosted library streaming is mature (Navidrome, Funkwhale); the catalogue is not.",
    "sources": [
      "https://www.navidrome.org/",
      "https://funkwhale.audio/"
    ]
  },
  {
    "id": "apple-pay",
    "company_id": "apple",
    "name": "Apple Pay",
    "product_type": "consumer_application",
    "categories": [
      "payments"
    ],
    "official_url": "https://www.apple.com/apple-pay/",
    "status": "pending",
    "summary": "Apple Pay is Apple's contactless payment and wallet service.",
    "capabilities": [
      "NFC contactless payments",
      "In-app and web checkout",
      "Cards stored in Wallet"
    ],
    "alternatives": [],
    "gap": "Payments sit on proprietary bank and card-network rails; no open-source project can replicate acceptance or tokenization.",
    "verdict": "No verified alternative. The payment rails are closed; no open-source equivalent exists.",
    "sources": [
      "https://en.wikipedia.org/wiki/Apple_Pay"
    ]
  },
  {
    "id": "apple-passwords",
    "company_id": "apple",
    "name": "Passwords",
    "product_type": "consumer_application",
    "categories": [
      "password-manager"
    ],
    "official_url": "https://support.apple.com/guide/iphone/passwords-iphf9219d8c9/ios",
    "status": "available",
    "summary": "Passwords is Apple's password manager, synced through iCloud Keychain.",
    "capabilities": [
      "Password storage and sync",
      "Passkeys",
      "Autofill across Apple devices"
    ],
    "alternatives": [
      {
        "name": "Bitwarden",
        "license": "GPL-3.0",
        "url": "https://bitwarden.com/",
        "covers": "Open-source password manager with a self-hostable server.",
        "note": "Clients GPL-3.0; server AGPL-3.0."
      },
      {
        "name": "Vaultwarden",
        "license": "AGPL-3.0",
        "url": "https://github.com/dani-garcia/vaultwarden",
        "covers": "Lightweight Bitwarden-compatible server.",
        "note": ""
      }
    ],
    "gap": "Password management is fully covered; cross-platform reach and self-hosted control are the open advantage.",
    "verdict": "Available. Bitwarden (and self-hosted Vaultwarden) is a mature, cross-platform equivalent.",
    "sources": [
      "https://bitwarden.com/",
      "https://github.com/dani-garcia/vaultwarden"
    ]
  },
  {
    "id": "aws-dynamodb",
    "company_id": "amazon_aws",
    "name": "DynamoDB",
    "product_type": "database",
    "categories": [
      "nosql",
      "key-value"
    ],
    "official_url": "https://aws.amazon.com/dynamodb/",
    "status": "available",
    "summary": "DynamoDB is AWS's managed key-value and document database.",
    "capabilities": [
      "Serverless NoSQL at any scale",
      "Predictable single-digit-millisecond latency",
      "On-demand backups and streams"
    ],
    "alternatives": [
      {
        "name": "Apache Cassandra",
        "license": "Apache-2.0",
        "url": "https://cassandra.apache.org/",
        "covers": "Distributed wide-column store used at huge scale.",
        "note": ""
      },
      {
        "name": "ScyllaDB",
        "license": "AGPL-3.0",
        "url": "https://www.scylladb.com/",
        "covers": "Cassandra-compatible NoSQL database in C++.",
        "note": ""
      }
    ],
    "gap": "Covered by mature distributed databases; the gap is the serverless operations model, not the data layer.",
    "verdict": "Available. Cassandra and ScyllaDB cover the technology; the operations model differs.",
    "sources": [
      "https://cassandra.apache.org/",
      "https://www.scylladb.com/"
    ]
  },
  {
    "id": "aws-cloudfront",
    "company_id": "amazon_aws",
    "name": "CloudFront",
    "product_type": "networking",
    "categories": [
      "cdn"
    ],
    "official_url": "https://aws.amazon.com/cloudfront/",
    "status": "available",
    "summary": "CloudFront is AWS's content delivery network.",
    "capabilities": [
      "Global edge caching",
      "TLS termination",
      "Origin shielding"
    ],
    "alternatives": [
      {
        "name": "Apache Traffic Server",
        "license": "Apache-2.0",
        "url": "https://trafficserver.apache.org/",
        "covers": "Battle-tested CDN-grade caching proxy.",
        "note": ""
      },
      {
        "name": "Nginx",
        "license": "BSD-2-Clause",
        "url": "https://nginx.org/",
        "covers": "Reverse proxy and cache.",
        "note": ""
      }
    ],
    "gap": "The caching software is open and mature; the globally distributed edge footprint is infrastructure, not software.",
    "verdict": "Available. Apache Traffic Server and Nginx power real CDNs; the PoP footprint is separate infrastructure.",
    "sources": [
      "https://trafficserver.apache.org/",
      "https://nginx.org/"
    ]
  },
  {
    "id": "aws-elasticache",
    "company_id": "amazon_aws",
    "name": "ElastiCache",
    "product_type": "database",
    "categories": [
      "cache"
    ],
    "official_url": "https://aws.amazon.com/elasticache/",
    "status": "available",
    "summary": "ElastiCache is AWS's managed Redis- and Memcached-compatible caching service.",
    "capabilities": [
      "Managed in-memory caching",
      "Redis-compatible API",
      "Cluster mode"
    ],
    "alternatives": [
      {
        "name": "Valkey",
        "license": "BSD-3-Clause",
        "url": "https://valkey.io/",
        "covers": "Linux Foundation fork of Redis; in-memory data store.",
        "note": "OSS alternative since the Redis licence change."
      },
      {
        "name": "Memcached",
        "license": "BSD-3-Clause",
        "url": "https://memcached.org/",
        "covers": "The classic in-memory cache.",
        "note": ""
      }
    ],
    "gap": "Fully covered by Valkey (Redis fork) and Memcached; the gap is operations, not software.",
    "verdict": "Available. Valkey is the open successor to Redis OSS; Memcached is the other classic.",
    "sources": [
      "https://valkey.io/",
      "https://memcached.org/"
    ]
  },
  {
    "id": "aws-sns",
    "company_id": "amazon_aws",
    "name": "Simple Notification Service (SNS)",
    "product_type": "messaging",
    "categories": [
      "pubsub"
    ],
    "official_url": "https://aws.amazon.com/sns/",
    "status": "available",
    "summary": "SNS is AWS's managed pub/sub notification service.",
    "capabilities": [
      "Topic-based fan-out",
      "Multiple delivery protocols",
      "Serverless integration"
    ],
    "alternatives": [
      {
        "name": "NATS",
        "license": "Apache-2.0",
        "url": "https://nats.io/",
        "covers": "Pub/sub with JetStream persistence.",
        "note": ""
      },
      {
        "name": "Apache Kafka",
        "license": "Apache-2.0",
        "url": "https://kafka.apache.org/",
        "covers": "Distributed event streaming platform.",
        "note": ""
      }
    ],
    "gap": "Pub/sub is fully covered; AWS-specific integrations are the only gap.",
    "verdict": "Available. NATS and Kafka cover pub/sub messaging.",
    "sources": [
      "https://nats.io/",
      "https://kafka.apache.org/"
    ]
  },
  {
    "id": "aws-redshift",
    "company_id": "amazon_aws",
    "name": "Redshift",
    "product_type": "database",
    "categories": [
      "data-warehouse"
    ],
    "official_url": "https://aws.amazon.com/redshift/",
    "status": "available",
    "summary": "Redshift is AWS's managed petabyte-scale data warehouse.",
    "capabilities": [
      "Columnar SQL analytics",
      "Massively parallel processing",
      "Lakehouse integration"
    ],
    "alternatives": [
      {
        "name": "ClickHouse",
        "license": "Apache-2.0",
        "url": "https://clickhouse.com/",
        "covers": "Columnar OLAP database.",
        "note": ""
      },
      {
        "name": "Apache Druid",
        "license": "Apache-2.0",
        "url": "https://druid.apache.org/",
        "covers": "Columnar real-time analytics database.",
        "note": ""
      }
    ],
    "gap": "Columnar analytics is mature in open source; the gap is managed operations and ecosystem, not capability.",
    "verdict": "Available. ClickHouse and Druid are production columnar warehouses.",
    "sources": [
      "https://clickhouse.com/",
      "https://druid.apache.org/"
    ]
  },
  {
    "id": "aws-bedrock",
    "company_id": "amazon_aws",
    "name": "Bedrock",
    "product_type": "ai_application",
    "categories": [
      "llm-platform"
    ],
    "official_url": "https://aws.amazon.com/bedrock/",
    "status": "partial",
    "summary": "Bedrock is AWS's managed service for foundation models, hosted and via API.",
    "capabilities": [
      "Model API access",
      "Managed fine-tuning",
      "Guardrails and agents"
    ],
    "alternatives": [
      {
        "name": "Ollama",
        "license": "MIT",
        "url": "https://ollama.com/",
        "covers": "Run open models locally.",
        "note": ""
      },
      {
        "name": "vLLM",
        "license": "Apache-2.0",
        "url": "https://docs.vllm.ai/",
        "covers": "High-throughput LLM serving.",
        "note": ""
      }
    ],
    "gap": "Serving open models is solved (vLLM, Ollama); the proprietary model catalogue and managed guardrails are not.",
    "verdict": "Partial. Open-model serving is mature; the proprietary catalogue is not replicable.",
    "sources": [
      "https://ollama.com/",
      "https://docs.vllm.ai/"
    ]
  },
  {
    "id": "aws-ecr",
    "company_id": "amazon_aws",
    "name": "Elastic Container Registry (ECR)",
    "product_type": "container_orchestration",
    "categories": [
      "container-registry"
    ],
    "official_url": "https://aws.amazon.com/ecr/",
    "status": "available",
    "summary": "ECR is AWS's managed container image registry.",
    "capabilities": [
      "OCI image storage",
      "Vulnerability scanning",
      "Cross-region replication"
    ],
    "alternatives": [
      {
        "name": "Harbor",
        "license": "Apache-2.0",
        "url": "https://goharbor.io/",
        "covers": "Cloud-native registry with scanning and replication.",
        "note": ""
      },
      {
        "name": "Docker Distribution",
        "license": "Apache-2.0",
        "url": "https://distribution.github.io/distribution/",
        "covers": "The reference OCI registry server.",
        "note": ""
      }
    ],
    "gap": "Registries are fully covered by open source (Harbor, Distribution); the gap is operations.",
    "verdict": "Available. Harbor is a production-grade registry; Distribution is the reference server.",
    "sources": [
      "https://goharbor.io/",
      "https://distribution.github.io/distribution/"
    ]
  },
  {
    "id": "aws-eventbridge",
    "company_id": "amazon_aws",
    "name": "EventBridge",
    "product_type": "messaging",
    "categories": [
      "event-bus"
    ],
    "official_url": "https://aws.amazon.com/eventbridge/",
    "status": "available",
    "summary": "EventBridge is AWS's serverless event bus.",
    "capabilities": [
      "Event routing and filtering",
      "Schema registry",
      "SaaS event ingestion"
    ],
    "alternatives": [
      {
        "name": "NATS",
        "license": "Apache-2.0",
        "url": "https://nats.io/",
        "covers": "Event routing with JetStream persistence.",
        "note": ""
      },
      {
        "name": "Apache Kafka",
        "license": "Apache-2.0",
        "url": "https://kafka.apache.org/",
        "covers": "Event streaming backbone.",
        "note": ""
      }
    ],
    "gap": "Event routing is covered; the SaaS-partner event sources are AWS-specific.",
    "verdict": "Available. NATS JetStream and Kafka cover event routing.",
    "sources": [
      "https://nats.io/",
      "https://kafka.apache.org/"
    ]
  },
  {
    "id": "aws-sagemaker",
    "company_id": "amazon_aws",
    "name": "SageMaker",
    "product_type": "data_platform",
    "categories": [
      "ml-platform"
    ],
    "official_url": "https://aws.amazon.com/sagemaker/",
    "status": "partial",
    "summary": "SageMaker is AWS's platform for building, training and deploying machine-learning models.",
    "capabilities": [
      "Managed notebooks",
      "Training at scale",
      "Model deployment endpoints"
    ],
    "alternatives": [
      {
        "name": "Kubeflow",
        "license": "Apache-2.0",
        "url": "https://www.kubeflow.org/",
        "covers": "ML toolkit on Kubernetes.",
        "note": ""
      },
      {
        "name": "MLflow",
        "license": "Apache-2.0",
        "url": "https://mlflow.org/",
        "covers": "Experiment tracking and model registry.",
        "note": ""
      }
    ],
    "gap": "Open ML platforms exist (Kubeflow, MLflow); the turnkey managed experience is the gap.",
    "verdict": "Partial. Kubeflow and MLflow cover the workflow; integration polish differs.",
    "sources": [
      "https://www.kubeflow.org/",
      "https://mlflow.org/"
    ]
  },
  {
    "id": "amazon-alexa",
    "company_id": "amazon",
    "name": "Alexa",
    "product_type": "ai_application",
    "categories": [
      "voice-assistant",
      "smart-home"
    ],
    "official_url": "https://developer.amazon.com/alexa",
    "status": "partial",
    "summary": "Alexa is Amazon's voice assistant and smart-home platform.",
    "capabilities": [
      "Wake word and voice requests",
      "Smart-home control",
      "Skills"
    ],
    "alternatives": [
      {
        "name": "OpenVoiceOS",
        "license": "Apache-2.0",
        "url": "https://openvoiceos.org/",
        "covers": "Open voice assistant platform (Mycroft successor).",
        "note": ""
      },
      {
        "name": "Home Assistant Voice",
        "license": "Apache-2.0",
        "url": "https://www.home-assistant.io/voice/",
        "covers": "Local voice assistant for the smart home.",
        "note": ""
      }
    ],
    "gap": "Open voice stacks exist; the device fleet, far-field hardware and skills ecosystem are Amazon's moat.",
    "verdict": "Partial. OpenVoiceOS and Home Assistant cover local voice; ecosystem scale lags.",
    "sources": [
      "https://openvoiceos.org/",
      "https://www.home-assistant.io/voice/"
    ]
  },
  {
    "id": "netflix-games",
    "company_id": "netflix",
    "name": "Netflix Games",
    "product_type": "games",
    "categories": [
      "game-subscription"
    ],
    "official_url": "https://www.netflix.com/tudum/games",
    "status": "pending",
    "summary": "Netflix Games is Netflix's member-entitled game catalog with mobile access and a beta TV/computer surface.",
    "capabilities": [
      "Mobile games included with membership",
      "TV and computer play where supported",
      "Profile-linked game access and saves",
      "No ads, extra game fees or in-app purchases"
    ],
    "alternatives": [],
    "gap": "Open-source game engines and individual games can cover components, but no project replicates Netflix's member entitlement, curated catalog, licensed content, multi-surface distribution or profile-linked access.",
    "verdict": "No verified alternative. The relevant gap is the integrated subscription/catalog platform, not the existence of individual open games.",
    "sources": [
      "https://www.netflix.com/tudum/games",
      "https://help.netflix.com/en/node/121442",
      "https://help.netflix.com/en/node/132197",
      "https://help.netflix.com/en/node/702684345185380",
      "https://about.netflix.com/en/news/whats-next-for-netflix-games"
    ]
  },
  {
    "id": "netflix-kids",
    "company_id": "netflix",
    "name": "Netflix Kids",
    "product_type": "media_streaming",
    "categories": [
      "kids-profiles"
    ],
    "official_url": "https://www.netflix.com/kids",
    "status": "pending",
    "summary": "Netflix Kids is a profile mode and parental-control experience inside Netflix Profiles, not an independent service.",
    "capabilities": [
      "Kid-filtered catalog",
      "Age-appropriate profile mode",
      "Parental controls and title blocks"
    ],
    "alternatives": [],
    "gap": "This record is grouped under Netflix Profiles; evaluating it as a separate service would duplicate the parent product and obscure the actual scope.",
    "verdict": "No standalone product. Treat as a documented Netflix Profiles feature rather than a separate build target.",
    "sources": [
      "https://help.netflix.com/en/node/114275",
      "https://help.netflix.com/en/node/53045"
    ]
  },
  {
    "id": "netflix-profiles",
    "company_id": "netflix",
    "name": "Netflix Profiles",
    "product_type": "consumer_application",
    "categories": [
      "profiles"
    ],
    "official_url": "https://www.netflix.com/",
    "status": "partial",
    "summary": "Netflix Profiles are per-viewer identities with separate settings, history, saves, ratings and recommendations inside a Netflix account.",
    "capabilities": [
      "Per-viewer history, ratings and recommendations",
      "Per-profile playback, language and notification settings",
      "Maturity controls, title blocks and profile locks",
      "Kids and standard profiles"
    ],
    "alternatives": [
      {
        "name": "Jellyfin",
        "license": "GPL-2.0",
        "url": "https://jellyfin.org/",
        "covers": "Multi-user profiles in a self-hosted media server.",
        "note": ""
      }
    ],
    "gap": "Jellyfin provides a partial self-hosted foundation for multi-user media profiles, but not Netflix's licensed catalog, recommendation system, account ecosystem or proprietary controls.",
    "verdict": "Partial. Jellyfin is a credible foundation for bounded profile and media workflows; Netflix-specific personalization and platform semantics remain provider-specific.",
    "sources": [
      "https://jellyfin.org/",
      "https://help.netflix.com/en/node/10421",
      "https://help.netflix.com/en/node/100639",
      "https://help.netflix.com/en/node/114276",
      "https://help.netflix.com/en/node/127831"
    ]
  },
  {
    "id": "netflix-tudum",
    "company_id": "netflix",
    "name": "Tudum",
    "product_type": "media",
    "categories": [
      "editorial"
    ],
    "official_url": "https://www.netflix.com/tudum",
    "status": "pending",
    "summary": "Tudum is Netflix's official editorial companion site for interviews, behind-the-scenes material, bonus videos and fan discovery; it is not a separate streaming service.",
    "capabilities": [
      "Editorial articles and interviews",
      "Companion content",
      "Newsroom-style updates"
    ],
    "alternatives": [],
    "gap": "Editorial content is journalism, not software; the entry is retained for traceability but excluded from active product-build work.",
    "verdict": "Retired from the build-product inventory. Tudum is grouped conceptually under Netflix Streaming rather than treated as an independent service.",
    "sources": [
      "https://help.netflix.com/en/node/123481",
      "https://about.netflix.com/news/meet-tudum-your-backstage-pass-to-the-netflix-stories-you-love"
    ]
  },
  {
    "id": "meta-instagram",
    "company_id": "meta",
    "name": "Instagram",
    "product_type": "social_network",
    "categories": [
      "photo-sharing",
      "social"
    ],
    "official_url": "https://www.instagram.com/",
    "status": "partial",
    "summary": "Instagram is Meta's social photo and video-sharing service with feed posts, Stories, Reels, discovery and creator/business surfaces.",
    "capabilities": [
      "Feed photo and video publishing",
      "Stories and Reels",
      "Content discovery",
      "Creator and business surfaces",
      "Permitted platform integrations"
    ],
    "alternatives": [
      {
        "name": "Pixelfed",
        "license": "AGPL-3.0",
        "url": "https://pixelfed.org/",
        "covers": "Federated image sharing on ActivityPub.",
        "note": ""
      }
    ],
    "gap": "Pixelfed covers federated image sharing; Instagram's Reels ecosystem, centralized discovery, creator/business stack and network effects are not replicated.",
    "verdict": "Partial. Pixelfed covers the image-sharing job, but it is not a drop-in replacement for Instagram.",
    "sources": [
      "https://pixelfed.org/",
      "https://github.com/pixelfed/pixelfed",
      "https://about.fb.com/news/2023/11/new-ways-to-create-content-on-instagram/",
      "https://about.fb.com/news/2020/08/introducing-instagram-reels/",
      "https://developers.meta.com/resources/"
    ]
  },
  {
    "id": "meta-facebook",
    "company_id": "meta",
    "name": "Facebook",
    "product_type": "social_network",
    "categories": [
      "social-network"
    ],
    "official_url": "https://www.facebook.com/",
    "status": "partial",
    "summary": "Facebook is Meta's social-network platform combining profiles, Feed, Groups, Pages, Events, Marketplace, video and local discovery.",
    "capabilities": [
      "Profiles and Feed",
      "Groups, Pages and Events",
      "Marketplace listings and seller interactions",
      "Local and Explore discovery",
      "Creator and community surfaces",
      "Permitted platform integrations"
    ],
    "alternatives": [
      {
        "name": "Mastodon",
        "license": "AGPL-3.0",
        "url": "https://joinmastodon.org/",
        "covers": "Federated social networking on ActivityPub.",
        "note": "Covers microblogging, not the full surface."
      },
      {
        "name": "Diaspora",
        "license": "AGPL-3.0",
        "url": "https://diasporafoundation.org/",
        "covers": "Decentralized social network.",
        "note": ""
      }
    ],
    "gap": "Open federated networks cover social posting well; Facebook's combined groups, pages, events, marketplace, centralized discovery and identity graph are not matched by a single project.",
    "verdict": "Partial. Mastodon and Diaspora cover parts of social networking, but neither is a drop-in Facebook replacement.",
    "sources": [
      "https://joinmastodon.org/",
      "https://diasporafoundation.org/",
      "https://about.fb.com/news/2024/10/facebook-local-tab-messenger-communities-ai/",
      "https://about.fb.com/news/2025/11/facebook-marketplace-gets-a-glow-up/",
      "https://developers.meta.com/resources/"
    ]
  },
  {
    "id": "meta-threads",
    "company_id": "meta",
    "name": "Threads",
    "product_type": "social_network",
    "categories": [
      "microblogging"
    ],
    "official_url": "https://www.threads.net/",
    "status": "available",
    "summary": "Threads is Meta's text-first social network for public conversations, with posts, replies, feeds, creator/business tools and optional ActivityPub interoperability.",
    "capabilities": [
      "Text posts and replies",
      "Links, photos and video",
      "Web and mobile feeds",
      "Creator and business insights",
      "Threads API for permitted integrations",
      "Optional ActivityPub/fediverse sharing"
    ],
    "alternatives": [
      {
        "name": "Mastodon",
        "license": "AGPL-3.0",
        "url": "https://joinmastodon.org/",
        "covers": "Mature ActivityPub microblogging platform.",
        "note": "Threads and Mastodon can interoperate via ActivityPub."
      }
    ],
    "gap": "Mastodon covers federated microblogging, but not Threads' centralized product experience, Meta identity integrations, business tooling, moderation model or network graph.",
    "verdict": "Partial. Mastodon covers the core public-posting job, but it is not a drop-in Threads replacement.",
    "sources": [
      "https://joinmastodon.org/",
      "https://about.fb.com/news/2023/07/introducing-threads-new-app-text-sharing/",
      "https://about.fb.com/news/2024/06/what-is-the-fediverse/",
      "https://about.fb.com/news/2024/08/new-threads-features-for-creators-and-businesses/",
      "https://developers.meta.com/resources/"
    ]
  },
  {
    "id": "amazon-kindle",
    "company_id": "amazon",
    "name": "Kindle",
    "product_type": "hardware",
    "categories": [
      "e-reader",
      "ebook-platform"
    ],
    "official_url": "https://www.amazon.com/kindle/",
    "status": "partial",
    "summary": "Kindle is Amazon's e-reader line and ebook platform.",
    "capabilities": [
      "E-ink reading hardware",
      "Ebook store and sync",
      "Reading apps across devices"
    ],
    "alternatives": [
      {
        "name": "KOReader",
        "license": "AGPL-3.0",
        "url": "https://github.com/koreader/koreader",
        "covers": "Open e-reader application for e-ink devices.",
        "note": "Runs on Kindle and Kobo hardware."
      },
      {
        "name": "Calibre",
        "license": "GPL-3.0",
        "url": "https://calibre-ebook.com/",
        "covers": "Ebook management, conversion and server.",
        "note": ""
      }
    ],
    "gap": "The reading software is open (KOReader, Calibre); the ebook store and the e-ink hardware are not.",
    "verdict": "Partial. Open reading software exists and even runs on Kindle hardware; the store and devices are closed.",
    "sources": [
      "https://github.com/koreader/koreader",
      "https://calibre-ebook.com/"
    ]
  },
  {
    "id": "amazon-luna",
    "company_id": "amazon",
    "name": "Luna",
    "product_type": "games",
    "categories": [
      "cloud-gaming"
    ],
    "official_url": "https://luna.amazon.com/",
    "status": "partial",
    "summary": "Luna is Amazon's cloud gaming subscription service.",
    "capabilities": [
      "Cloud game streaming",
      "Channel subscriptions",
      "Controller and cross-device play"
    ],
    "alternatives": [
      {
        "name": "Sunshine",
        "license": "GPL-3.0",
        "url": "https://github.com/LizardByte/Sunshine",
        "covers": "Self-hosted game streaming server.",
        "note": "Streams your own hardware."
      },
      {
        "name": "Moonlight",
        "license": "GPL-3.0",
        "url": "https://moonlight-stream.org/",
        "covers": "Open game streaming client.",
        "note": ""
      }
    ],
    "gap": "Self-hosted game streaming works (Sunshine + Moonlight) but streams your own machine; no open project offers a cloud catalogue.",
    "verdict": "Partial. The streaming technology is open and self-hostable; the cloud game catalogue is not replicable.",
    "sources": [
      "https://github.com/LizardByte/Sunshine",
      "https://moonlight-stream.org/"
    ]
  },
  {
    "id": "microsoft-windows",
    "company_id": "microsoft",
    "name": "Microsoft Windows",
    "product_type": "operating_system",
    "categories": [
      "platform",
      "desktop"
    ],
    "official_url": "https://www.microsoft.com/en-us/windows/",
    "status": "partial",
    "summary": "Windows is Microsoft's active desktop operating-system family with documented deployment, security, management, servicing and application-installation surfaces.",
    "capabilities": [
      "Windows client operating system",
      "Deployment and device management",
      "Security and privacy administration",
      "Windows Update servicing",
      "WinGet application management",
      "Documented Windows application interfaces"
    ],
    "alternatives": [
      {
        "name": "ReactOS",
        "license": "GPL-2.0",
        "url": "https://reactos.org/",
        "covers": "Independent reimplementation targeting Windows binary and driver compatibility.",
        "note": "Research project; not a production replacement."
      },
      {
        "name": "Wine",
        "license": "LGPL-2.1",
        "url": "https://www.winehq.org/",
        "covers": "Runs many Windows applications on POSIX systems.",
        "note": "A compatibility layer, not an operating system."
      }
    ],
    "gap": "No open-source operating system verifies production-grade Win32 application and driver compatibility at Windows scale.",
    "verdict": "Partial. Wine and ReactOS cover parts of the compatibility surface, but a supported, secure desktop OS with the full driver and servicing model is not available as open source.",
    "sources": [
      "https://learn.microsoft.com/en-us/windows/resources/",
      "https://learn.microsoft.com/en-us/windows/package-manager/winget/",
      "https://learn.microsoft.com/en-us/windows/security/",
      "https://learn.microsoft.com/en-us/windows/release-health/windows11-release-information",
      "https://www.winehq.org/",
      "https://reactos.org/"
    ]
  },
  {
    "id": "microsoft-365",
    "company_id": "microsoft",
    "name": "Microsoft 365",
    "product_type": "consumer_subscription",
    "categories": [
      "productivity",
      "collaboration",
      "subscription"
    ],
    "official_url": "https://www.microsoft.com/en-us/microsoft-365",
    "status": "partial",
    "summary": "Microsoft 365 is Microsoft's subscription platform for productivity and collaboration, packaging licensed applications and hosted services without replacing separate catalog entries such as OneDrive or Teams.",
    "capabilities": [
      "Licensed Word, Excel, PowerPoint, Outlook and OneNote applications with plan-specific availability",
      "Microsoft 365 cloud services including OneDrive, Outlook/Exchange, SharePoint, Teams, Planner and Calendar",
      "Web, desktop and mobile access subject to plan and account type",
      "Administrative surfaces for users, licences, policies, security and compliance"
    ],
    "alternatives": [
      {
        "name": "LibreOffice",
        "license": "MPL-2.0",
        "url": "https://www.libreoffice.org/",
        "covers": "Desktop office suite with document formats.",
        "note": "No hosted collaboration or identity layer."
      },
      {
        "name": "ONLYOFFICE",
        "license": "AGPL-3.0",
        "url": "https://www.onlyoffice.com/",
        "covers": "Document editors with self-hosted collaboration server.",
        "note": "Smaller ecosystem and fewer enterprise integrations."
      },
      {
        "name": "Nextcloud",
        "license": "AGPL-3.0",
        "url": "https://nextcloud.com/",
        "covers": "Self-hosted files, calendar and online office integration.",
        "note": "Depends on an office backend for full document editing."
      }
    ],
    "gap": "The pieces exist as separate open-source projects (office suite, storage, mail, chat), but no single subscription-equivalent bundle verifies the same integration and identity story.",
    "verdict": "Partial. LibreOffice, ONLYOFFICE, Nextcloud and open mail/chat servers each cover a slice; the integrated, tenant-managed bundle remains unbuilt.",
    "sources": [
      "https://www.microsoft.com/en-us/microsoft-365",
      "https://www.microsoft.com/en-us/microsoft-365/products-apps-services",
      "https://learn.microsoft.com/en-us/microsoft-365/admin/admin-overview/what-is-microsoft-365-for-business",
      "https://learn.microsoft.com/en-us/graph/overview"
    ]
  },
  {
    "id": "microsoft-teams",
    "company_id": "microsoft",
    "name": "Microsoft Teams",
    "product_type": "messaging",
    "categories": [
      "collaboration",
      "meetings"
    ],
    "official_url": "https://www.microsoft.com/en-us/microsoft-teams/group-chat-software",
    "status": "partial",
    "summary": "Microsoft Teams is Microsoft's hosted collaboration and communications product for chat, channels, meetings, calling and shared work; it is tightly integrated with Microsoft 365 but remains a separate product identity.",
    "capabilities": [
      "Persistent direct and channel-based chat",
      "Scheduled and ad-hoc meetings, calls, screen sharing and plan-dependent recording or events",
      "Shared work through files, tabs, apps, calendars and connected Microsoft 365 services",
      "Team, channel, membership, policy, guest and lifecycle administration"
    ],
    "alternatives": [
      {
        "name": "Element",
        "license": "AGPL-3.0",
        "url": "https://element.io/",
        "covers": "Matrix-based chat, rooms and calls with self-hosting.",
        "note": "Meeting and recording features are less integrated."
      },
      {
        "name": "Jitsi",
        "license": "Apache-2.0",
        "url": "https://jitsi.org/",
        "covers": "Self-hosted video meetings and screen sharing.",
        "note": "No persistent team chat or admin tenant model."
      }
    ],
    "gap": "Matrix-based chat and Jitsi-class meetings are open source, but the combined tenant, recording and admin model is not available as one self-hosted product.",
    "verdict": "Partial. Element and Jitsi cover chat and meetings separately; the integrated team workspace with admin controls is a composed build, not a drop-in replacement.",
    "sources": [
      "https://www.microsoft.com/en-us/microsoft-teams/group-chat-software",
      "https://learn.microsoft.com/en-us/microsoftteams/teams-overview",
      "https://learn.microsoft.com/en-us/graph/api/resources/teams-api-overview"
    ]
  },
  {
    "id": "microsoft-azure",
    "company_id": "microsoft",
    "name": "Microsoft Azure",
    "product_type": "cloud_infrastructure",
    "categories": [
      "cloud",
      "platform"
    ],
    "official_url": "https://azure.microsoft.com/en-us",
    "status": "partial",
    "summary": "Microsoft Azure is Microsoft's public cloud platform for compute, storage, networking, data, AI and other managed services; it is a platform catalogue rather than one application.",
    "capabilities": [
      "Compute, containers, serverless and application hosting",
      "Storage, databases, networking and integration services",
      "Identity, security, monitoring and governance capabilities",
      "Resource management, infrastructure as code and deployment tooling"
    ],
    "alternatives": [
      {
        "name": "OpenStack",
        "license": "Apache-2.0",
        "url": "https://www.openstack.org/",
        "covers": "Self-hosted compute, storage and networking control plane.",
        "note": "No managed-service catalogue or global regions."
      },
      {
        "name": "Apache CloudStack",
        "license": "Apache-2.0",
        "url": "https://cloudstack.apache.org/",
        "covers": "IaaS orchestration for private clouds.",
        "note": "Narrower service catalogue than a hyperscaler."
      }
    ],
    "gap": "OpenStack and CloudStack provide an IaaS control plane, but no open-source project verifies a comparable managed-service catalogue and global region footprint.",
    "verdict": "Partial. Private-cloud IaaS is well covered; the managed-service breadth and operational model of a hyperscaler remain a research and integration problem, not a drop-in replacement.",
    "sources": [
      "https://azure.microsoft.com/en-us/explore/",
      "https://learn.microsoft.com/en-us/azure/azure-resource-manager",
      "https://learn.microsoft.com/en-us/azure/architecture/",
      "https://learn.microsoft.com/en-us/cli/azure/"
    ]
  },
  {
    "id": "microsoft-skype",
    "company_id": "microsoft",
    "name": "Skype",
    "product_type": "messaging",
    "categories": [
      "calling",
      "messaging"
    ],
    "official_url": "https://www.skype.com/",
    "status": "partial",
    "summary": "Skype was Microsoft's consumer calling and messaging service. Microsoft retired it on 5 May 2025 and directs users to Microsoft Teams (free).",
    "capabilities": [
      "One-to-one and group voice and video calling (historical)",
      "Instant messaging with file transfer (historical)",
      "PSTN calling through paid plans (historical)"
    ],
    "alternatives": [
      {
        "name": "Jitsi",
        "license": "Apache-2.0",
        "url": "https://jitsi.org/",
        "covers": "Self-hosted video meetings and screen sharing.",
        "note": "Meeting-centric rather than a contact-based calling app."
      },
      {
        "name": "Element",
        "license": "AGPL-3.0",
        "url": "https://element.io/",
        "covers": "Matrix chat with one-to-one and group calls.",
        "note": "Requires a Matrix homeserver to self-host."
      }
    ],
    "gap": "No build is required: the service is retired and open calling/chat stacks already cover the need.",
    "verdict": "Available. Jitsi and Element provide self-hosted calling and chat, so the retired product is recorded for completeness rather than as a build target.",
    "sources": [
      "https://support.microsoft.com/en-us/skype/skype-is-retiring-in-may-2025-what-you-need-to-know",
      "https://www.microsoft.com/en-us/copilot/blog/2025/02/28/the-next-chapter-moving-from-skype-to-microsoft-teams/"
    ]
  },
  {
    "id": "google-stadia",
    "company_id": "google",
    "name": "Google Stadia",
    "product_type": "games",
    "categories": [
      "cloud-gaming",
      "streaming"
    ],
    "official_url": "https://stadia.google.com/",
    "status": "partial",
    "summary": "Google Stadia was a cloud game-streaming service. Google announced the shutdown in September 2022 and the platform went offline on 18 January 2023 after refunding purchases.",
    "capabilities": [
      "Cloud game streaming to browsers and TVs (historical)",
      "Game purchases and a library tied to the account (historical)",
      "Stadia controller and Chromecast integration (historical)"
    ],
    "alternatives": [
      {
        "name": "Sunshine",
        "license": "GPL-3.0",
        "url": "https://github.com/LizardByte/Sunshine",
        "covers": "Self-hosted game-streaming host with low-latency encoding.",
        "note": "Streams your own hardware; not a game store."
      },
      {
        "name": "Moonlight",
        "license": "GPL-3.0",
        "url": "https://moonlight-stream.org/",
        "covers": "Client for self-hosted game streaming.",
        "note": "Client only; needs a host such as Sunshine."
      }
    ],
    "gap": "No build is required: the service is retired and self-hosted streaming (Sunshine + Moonlight) covers the technical need without a game store.",
    "verdict": "Available. Sunshine and Moonlight provide open, self-hosted game streaming; Stadia is recorded as retired for inventory completeness.",
    "sources": [
      "https://blog.google/products-and-platforms/products/stadia/message-on-stadia-streaming-strategy/",
      "https://support.google.com/stadia/answer/12790109"
    ]
  },
  {
    "id": "netflix-dvd",
    "company_id": "netflix",
    "name": "Netflix DVD",
    "product_type": "media",
    "categories": [
      "rental",
      "physical-media"
    ],
    "official_url": "https://dvd.netflix.com/",
    "status": "partial",
    "summary": "Netflix DVD was Netflix's disc-by-mail rental service. Netflix announced the wind-down in April 2023 and shipped the final discs on 29 September 2023.",
    "capabilities": [
      "DVD and Blu-ray rental by mail with a queue (historical)",
      "Disc shipping and return logistics (historical)",
      "Streaming add-on for subscribers (historical)"
    ],
    "alternatives": [
      {
        "name": "Jellyfin",
        "license": "GPL-2.0",
        "url": "https://jellyfin.org/",
        "covers": "Self-hosted media library and streaming server.",
        "note": "Streams files you own; no physical rental logistics."
      }
    ],
    "gap": "No build is required: the service is retired, and physical-disc logistics are not a software problem the catalog should try to solve.",
    "verdict": "Available. Jellyfin covers self-hosted media streaming for discs you already own; the retired rental service is recorded for completeness only.",
    "sources": [
      "https://about.netflix.com/news/netflix-dvd-the-final-season"
    ]
  },
  {
    "id": "amazon-appflow",
    "company_id": "amazon_aws",
    "name": "Amazon AppFlow",
    "product_type": "business_software",
    "categories": ["data-integration", "etl", "saas-integration"],
    "official_url": "https://aws.amazon.com/appflow/",
    "status": "pending",
    "summary": "Amazon AppFlow is a managed AWS service for transferring data between SaaS applications and AWS services through configured flows.",
    "capabilities": [
      "Connector profiles for SaaS and AWS sources and destinations",
      "Field mapping, filtering, masking and partitioning",
      "On-demand, scheduled and event-driven flow triggers"
    ],
    "alternatives": [],
    "gap": "Open-source alternatives, connector coverage, operational semantics and implementation scope remain unverified.",
    "verdict": "Pending REA research; no open-source equivalence is claimed.",
    "sources": [
      "https://aws.amazon.com/appflow/",
      "https://docs.aws.amazon.com/appflow/latest/userguide/what-is-appflow.html",
      "https://docs.aws.amazon.com/cli/latest/reference/appflow/"
    ]
  },
  {
    "id": "amazon-athena",
    "company_id": "amazon_aws",
    "name": "Amazon Athena",
    "product_type": "data_platform",
    "categories": ["analytics", "sql", "serverless"],
    "official_url": "https://aws.amazon.com/athena/",
    "status": "pending",
    "summary": "Amazon Athena is a managed AWS service for querying data in Amazon S3 with SQL and running serverless analytics workloads.",
    "capabilities": [
      "Serverless SQL queries over S3",
      "Interactive analytics and parallel execution",
      "Apache Spark workloads and JDBC/ODBC access"
    ],
    "alternatives": [],
    "gap": "Open-source alternatives, query semantics, connector coverage and operational limits remain unverified.",
    "verdict": "Pending REA research; no open-source equivalence is claimed.",
    "sources": [
      "https://aws.amazon.com/athena/",
      "https://docs.aws.amazon.com/athena/latest/ug/what-is.html",
      "https://docs.aws.amazon.com/athena/latest/APIReference/Welcome.html"
    ]
  },
  {
    "id": "amazon-augmented-ai",
    "company_id": "amazon_aws",
    "name": "Amazon Augmented AI",
    "product_type": "ai_application",
    "categories": ["human-in-the-loop", "machine-learning", "workflow"],
    "official_url": "https://docs.aws.amazon.com/augmented-ai/",
    "status": "pending",
    "summary": "Amazon Augmented AI (A2I) provides human review workflows for ML predictions; AWS documents that it is no longer open to new customers.",
    "capabilities": [
      "Human review loops for ML predictions",
      "Custom task types and worker task templates",
      "Integrations with Textract, Rekognition, SageMaker, IAM and S3"
    ],
    "alternatives": [],
    "gap": "The service is deprecated for new customers and open-source alternatives and current operational semantics remain unverified.",
    "verdict": "Pending REA research; no open-source equivalence is claimed.",
    "sources": [
      "https://docs.aws.amazon.com/augmented-ai/",
      "https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-getting-started.html",
      "https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-api-references.html"
    ]
  },
  {
    "id": "amazon-aurora",
    "company_id": "amazon_aws",
    "name": "Amazon Aurora",
    "product_type": "database",
    "categories": ["relational-database", "mysql", "postgresql", "managed-service"],
    "official_url": "https://aws.amazon.com/rds/aurora/",
    "status": "pending",
    "summary": "Amazon Aurora is a managed relational database engine compatible with MySQL and PostgreSQL, with clustered storage and managed replication.",
    "capabilities": [
      "MySQL- and PostgreSQL-compatible engines",
      "Cluster volume with writer and reader instances",
      "Managed replication, backup, recovery and failover"
    ],
    "alternatives": [],
    "gap": "Open-source alternatives, compatibility details, storage semantics and operational limits remain unverified.",
    "verdict": "Pending REA research; no open-source equivalence is claimed.",
    "sources": [
      "https://aws.amazon.com/rds/aurora/",
      "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/",
      "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.html"
    ]
  },
  {
    "id": "amazon-bio-discovery",
    "company_id": "amazon_aws",
    "name": "Amazon Bio Discovery",
    "product_type": "ai_application",
    "categories": ["drug-discovery", "biology", "lab-in-the-loop", "ai-agents"],
    "official_url": "https://aws.amazon.com/biodiscovery/",
    "status": "pending",
    "summary": "Amazon Bio Discovery is an early-access AWS application for AI-assisted antibody discovery and lab-in-the-loop experimentation.",
    "capabilities": [
      "Biological model catalog and benchmarks",
      "Agent-assisted antibody design and candidate evaluation",
      "Custom model pipelines and integrated lab-partner workflows"
    ],
    "alternatives": [],
    "gap": "Public API, model licensing, scientific validation, lab integrations and open-source alternatives remain unverified.",
    "verdict": "Pending REA research; no open-source equivalence is claimed.",
    "sources": [
      "https://aws.amazon.com/biodiscovery/",
      "https://aws.amazon.com/biodiscovery/pricing/",
      "https://aws.amazon.com/blogs/industries/introducing-amazon-bio-discovery/"
    ]
  },
  {
    "id": "amazon-braket",
    "company_id": "amazon_aws",
    "name": "Amazon Braket",
    "product_type": "research_platform",
    "categories": ["quantum-computing", "quantum-simulation", "developer-tool"],
    "official_url": "https://aws.amazon.com/braket/",
    "status": "pending",
    "summary": "Amazon Braket is a managed AWS service for developing, simulating and running quantum algorithms on supported hardware.",
    "capabilities": [
      "Quantum algorithm development and managed notebooks",
      "Circuit simulators and hybrid jobs",
      "Access to multiple third-party quantum hardware providers"
    ],
    "alternatives": [],
    "gap": "Provider behavior, simulator limits, pricing and open-source alternative coverage remain unverified.",
    "verdict": "Pending REA research; no open-source equivalence is claimed.",
    "sources": [
      "https://aws.amazon.com/braket/",
      "https://docs.aws.amazon.com/braket/latest/developerguide/what-is-braket.html",
      "https://docs.aws.amazon.com/braket/latest/developerguide/braket-how-it-works.html"
    ]
  },
  {
    "id": "amazon-chime",
    "company_id": "amazon_aws",
    "name": "Amazon Chime",
    "product_type": "messaging",
    "categories": ["video-conferencing", "chat", "calling"],
    "official_url": "https://aws.amazon.com/chime/",
    "status": "pending",
    "summary": "Amazon Chime was an AWS meetings, chat and calling service; AWS ended support on February 20, 2026, while Chime SDK remains separate.",
    "capabilities": ["Historical meetings", "Historical chat and calling", "Historical administration and scheduling"],
    "alternatives": [],
    "gap": "The product is retired; current replacement coverage and historical API behavior are not being treated as a build recommendation.",
    "verdict": "Retired. Keep separate from Amazon Chime SDK and do not recommend a new implementation from this entry.",
    "sources": [
      "https://aws.amazon.com/chime/getting-started/",
      "https://aws.amazon.com/blogs/messaging-and-targeting/update-on-support-for-amazon-chime/"
    ]
  },
  {
    "id": "amazon-chime-sdk",
    "company_id": "amazon_aws",
    "name": "Amazon Chime SDK",
    "product_type": "sdk",
    "categories": ["real-time-communications", "audio-video", "messaging", "screen-sharing"],
    "official_url": "https://aws.amazon.com/chime/chime-sdk/",
    "status": "pending",
    "summary": "Amazon Chime SDK provides real-time communication components for adding audio, video, messaging and screen sharing to applications.",
    "capabilities": [
      "Real-time audio and video",
      "Screen sharing and messaging",
      "Media pipelines, voice capabilities and multi-platform client SDKs"
    ],
    "alternatives": [],
    "gap": "Media topology, pricing, quotas, platform behavior and open-source alternative coverage remain unverified.",
    "verdict": "Pending REA research; no open-source equivalence is claimed.",
    "sources": [
      "https://aws.amazon.com/chime/chime-sdk/",
      "https://docs.aws.amazon.com/chime-sdk/latest/dg/",
      "https://docs.aws.amazon.com/chime-sdk/latest/APIReference/"
    ]
  },
  {
    "id": "amazon-cloudsearch",
    "company_id": "amazon_aws",
    "name": "Amazon CloudSearch",
    "product_type": "search_service",
    "categories": ["search", "managed-service", "developer-tool"],
    "official_url": "https://aws.amazon.com/cloudsearch/",
    "status": "pending",
    "summary": "Amazon CloudSearch was a managed AWS search service for indexing structured and plain-text data. AWS says it is no longer available to new customers and points new users to OpenSearch Service.",
    "capabilities": [
      "Managed full-text search and indexing",
      "Boolean, prefix, range, faceting and highlighting features",
      "Autocomplete and configurable ranking expressions",
      "AWS console, SDK, CLI and HTTP access"
    ],
    "alternatives": [],
    "gap": "The service is restricted for new customers; open-source search engines cover core indexing but not CloudSearch account integration or historical behavior.",
    "verdict": "Retired. Retain for catalog completeness; do not recommend a new implementation from this entry.",
    "sources": [
      "https://docs.aws.amazon.com/cloudsearch/latest/developerguide/what-is-cloudsearch.html",
      "https://aws.amazon.com/cloudsearch/",
      "https://aws.amazon.com/compare/cloudsearch-and-opensearch/"
    ]
  },
  {
    "id": "amazon-cloudwatch",
    "company_id": "amazon_aws",
    "name": "Amazon CloudWatch",
    "product_type": "data_platform",
    "categories": ["observability", "monitoring", "logging", "metrics", "application-performance"],
    "official_url": "https://aws.amazon.com/cloudwatch/",
    "status": "pending",
    "summary": "Amazon CloudWatch is AWS's observability platform for metrics, alarms, dashboards, logs, application performance and infrastructure monitoring.",
    "capabilities": [
      "Metrics, alarms and dashboards",
      "Logs collection and Logs Insights queries",
      "Application and infrastructure monitoring",
      "CloudWatch agent, OpenTelemetry and cross-account monitoring"
    ],
    "alternatives": [],
    "gap": "Open-source components cover individual telemetry planes but their combined coverage of AWS-native integrations and managed operations remains unverified.",
    "verdict": "Pending REA research; no open-source equivalence is claimed.",
    "sources": [
      "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html",
      "https://docs.aws.amazon.com/cloudwatch/",
      "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html"
    ]
  },
  {
    "id": "amazon-codeguru",
    "company_id": "amazon_aws",
    "name": "Amazon CodeGuru",
    "product_type": "developer_tool",
    "categories": ["code-quality", "security-analysis", "performance-profiling", "machine-learning"],
    "official_url": "https://aws.amazon.com/codeguru/",
    "status": "pending",
    "summary": "Amazon CodeGuru combines CodeGuru Reviewer for code analysis with CodeGuru Profiler for runtime performance recommendations.",
    "capabilities": [
      "Automated Java and Python code review",
      "Security and secrets detection recommendations",
      "Runtime performance profiling",
      "Repository and CI/CD integration"
    ],
    "alternatives": [],
    "gap": "Open-source analyzers and profilers cover portions of CodeGuru, but component status, learned recommendations and managed integrations remain unverified.",
    "verdict": "Pending REA research; no open-source equivalence is claimed.",
    "sources": [
      "https://docs.aws.amazon.com/codeguru/",
      "https://aws.amazon.com/documentation-overview/codeguru/",
      "https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-amazon-codeguru-reviewer.html"
    ]
  },
  {
    "id": "amazon-cognito",
    "company_id": "amazon_aws",
    "name": "Amazon Cognito",
    "product_type": "security",
    "categories": ["identity", "authentication", "authorization", "federation", "developer-tool"],
    "official_url": "https://aws.amazon.com/cognito/",
    "status": "pending",
    "summary": "Amazon Cognito provides user pools, identity pools, federation, authentication and temporary AWS credential flows for web and mobile applications.",
    "capabilities": [
      "User pools and managed authentication",
      "Identity pools and temporary AWS credentials",
      "OIDC, SAML and social federation",
      "MFA, passkeys and passwordless authentication"
    ],
    "alternatives": [],
    "gap": "Open-source identity servers cover portions of Cognito but AWS-native role exchange, managed login and service operations remain unverified.",
    "verdict": "Pending REA research; no open-source equivalence is claimed.",
    "sources": [
      "https://docs.aws.amazon.com/cognito/",
      "https://aws.amazon.com/cognito/",
      "https://aws.amazon.com/cognito/dev-resources/"
    ]
  },
  {
    "id": "amazon-comprehend",
    "company_id": "amazon_aws",
    "name": "Amazon Comprehend",
    "product_type": "ai_application",
    "categories": ["natural-language-processing", "machine-learning", "text-analysis", "document-analysis"],
    "official_url": "https://aws.amazon.com/comprehend/",
    "status": "pending",
    "summary": "Amazon Comprehend is an AWS NLP service for extracting entities, key phrases, language, sentiment and other insights from documents.",
    "capabilities": [
      "Entity, key-phrase, language and sentiment analysis",
      "Custom classification and entity recognition",
      "Real-time and asynchronous document analysis",
      "Topic modeling and AWS storage/encryption integrations"
    ],
    "alternatives": [],
    "gap": "Open-source NLP libraries cover individual tasks but managed APIs, model catalog, batch jobs and AWS integrations remain unverified.",
    "verdict": "Pending REA research; no open-source equivalence is claimed.",
    "sources": [
      "https://docs.aws.amazon.com/comprehend/latest/dg/",
      "https://docs.aws.amazon.com/comprehend/latest/APIReference/Welcome.html",
      "https://aws.amazon.com/comprehend/features/"
    ]
  },
  {
    "id": "amazon-connect-customer",
    "company_id": "amazon_aws",
    "name": "Amazon Connect Customer",
    "product_type": "business_software",
    "categories": ["contact-center", "customer-service", "omnichannel", "agentic-ai"],
    "official_url": "https://aws.amazon.com/connect/",
    "status": "pending",
    "summary": "Amazon Connect Customer is AWS's current customer-contact-center product for omnichannel communication, routing, workflows, analytics and agentic AI.",
    "capabilities": [
      "Omnichannel voice, chat, email and task routing",
      "Contact-center workflows and agent assistance",
      "Customer profiles, cases and analytics",
      "Agentic self-service and AI-powered support"
    ],
    "alternatives": [],
    "gap": "Open-source contact-center components cover individual channels but integrated routing, telephony, analytics, AI and AWS operations remain unverified.",
    "verdict": "Pending REA research; no open-source equivalence is claimed.",
    "sources": [
      "https://docs.aws.amazon.com/connect/latest/adminguide/what-is-amazon-connect.html",
      "https://aws.amazon.com/connect/",
      "https://aws.amazon.com/documentation-overview/connect-customer/"
    ]
  },
  {
    "id": "amazon-connect-decisions",
    "company_id": "amazon_aws",
    "name": "Amazon Connect Decisions",
    "product_type": "ai_agent_platform",
    "categories": ["supply-chain", "forecasting", "decisioning", "agentic-ai"],
    "official_url": "https://aws.amazon.com/products/connect/decisions/",
    "status": "pending",
    "summary": "Amazon Connect Decisions is an AWS supply-chain planning and decisioning solution with AI teammates for forecasting, planning, monitoring and approved execution.",
    "capabilities": [
      "Demand forecasting and consensus planning",
      "Constraint-aware supply planning",
      "Exception monitoring and root-cause analysis",
      "AI teammates and agentic onboarding"
    ],
    "alternatives": [],
    "gap": "Open-source planning and optimization components cover individual functions but the integrated AI-teammate and managed execution plane remains unverified.",
    "verdict": "Pending REA research; no open-source equivalence is claimed.",
    "sources": [
      "https://docs.aws.amazon.com/connect-decisions/latest/userguide/what-is-amazon-connect-decisions.html",
      "https://aws.amazon.com/products/connect/decisions/",
      "https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-connect-decisions-april/"
    ]
  },
  {
    "id": "amazon-connect-health",
    "company_id": "amazon_aws",
    "name": "Amazon Connect Health",
    "product_type": "ai_agent_platform",
    "categories": ["healthcare", "patient-engagement", "clinical-documentation", "medical-coding", "agentic-ai"],
    "official_url": "https://aws.amazon.com/products/connect/health/",
    "status": "pending",
    "summary": "Amazon Connect Health is AWS's healthcare-focused agentic AI service for patient engagement, point-of-care documentation and medical coding workflows.",
    "capabilities": [
      "Patient verification and appointment management",
      "Patient insights and ambient documentation",
      "Medical coding assistance",
      "Healthcare agentic workflows and unified SDK"
    ],
    "alternatives": [],
    "gap": "Open healthcare and NLP components cover isolated functions but managed agents, EHR integration, clinical safeguards and traceability remain unverified.",
    "verdict": "Pending REA research; no open-source equivalence is claimed.",
    "sources": [
      "https://docs.aws.amazon.com/connecthealth/latest/userguide/what-is-service.html",
      "https://aws.amazon.com/products/connect/health/",
      "https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-connect-health-agentic-ai-healthcare/"
    ]
  },
  {
    "id": "amazon-connect-talent",
    "company_id": "amazon_aws",
    "name": "Amazon Connect Talent",
    "product_type": "ai_agent_platform",
    "categories": ["recruiting", "talent-acquisition", "voice-interview", "assessment", "agentic-ai"],
    "official_url": "https://aws.amazon.com/products/connect/talent/",
    "status": "pending",
    "summary": "Amazon Connect Talent is an AWS AI hiring solution for assessments, AI-led voice interviews, candidate scoring and recruiter workflows.",
    "capabilities": [
      "AI-led voice interviews",
      "Competency-based assessments",
      "Candidate evaluation and scoring",
      "Mobile candidate portal and recruiter workflows"
    ],
    "alternatives": [],
    "gap": "Open ATS, conversational AI and assessment components cover isolated functions but integrated interviews, scoring, audit and AWS operations remain unverified.",
    "verdict": "Pending REA research; no open-source equivalence is claimed.",
    "sources": [
      "https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-connect-talent/",
      "https://aws.amazon.com/products/connect/talent/",
      "https://aws.amazon.com/products/connect/talent/faqs/"
    ]
  },
  {
    "id": "amazon-data-firehose",
    "company_id": "amazon_aws",
    "name": "Amazon Data Firehose",
    "product_type": "data_platform",
    "categories": ["streaming", "data-ingestion", "etl", "analytics", "managed-service"],
    "official_url": "https://aws.amazon.com/firehose/",
    "status": "pending",
    "summary": "Amazon Data Firehose is a managed streaming delivery service for buffering, transforming and loading data into AWS, HTTP and third-party destinations.",
    "capabilities": [
      "Managed streaming data delivery",
      "Buffering and transformation",
      "Delivery to S3, Redshift, OpenSearch, Splunk and HTTP endpoints",
      "Dynamic partitioning, format conversion and encryption"
    ],
    "alternatives": [],
    "gap": "Open-source streaming and connector tools cover portions of Firehose but managed scaling, buffering guarantees and AWS-native integrations remain unverified.",
    "verdict": "Pending REA research; no open-source equivalence is claimed.",
    "sources": [
      "https://docs.aws.amazon.com/firehose/latest/dev/",
      "https://aws.amazon.com/about-aws/whats-new/2024/02/amazon-data-firehose-formerly-kinesis-data-firehose/",
      "https://aws.amazon.com/documentation-overview/kinesis-data-firehose/"
    ]
  },
  {
    "id": "amazon-detective",
    "company_id": "amazon_aws",
    "name": "Amazon Detective",
    "product_type": "security",
    "categories": ["security-investigation", "threat-detection", "graph-analysis", "incident-response"],
    "official_url": "https://aws.amazon.com/detective/",
    "status": "pending",
    "summary": "Amazon Detective aggregates security telemetry and findings into behavior graphs, visualizations and investigation workflows.",
    "capabilities": [
      "Security finding investigation",
      "Behavior graphs and entity relationships",
      "CloudTrail and VPC Flow Log analysis",
      "GuardDuty integration and investigation visualizations"
    ],
    "alternatives": [],
    "gap": "Open-source security analytics and graph tools cover portions of Detective but managed behavior graphs, AWS-native telemetry and ML investigations remain unverified.",
    "verdict": "Pending REA research; no open-source equivalence is claimed.",
    "sources": [
      "https://docs.aws.amazon.com/detective/latest/userguide/",
      "https://docs.aws.amazon.com/detective/latest/APIReference/Welcome.html",
      "https://aws.amazon.com/detective/faqs/"
    ]
  },
  {
    "id": "amazon-devops-guru",
    "company_id": "amazon_aws",
    "name": "Amazon DevOps Guru",
    "product_type": "developer_tool",
    "categories": ["observability", "anomaly-detection", "operations", "machine-learning"],
    "official_url": "https://aws.amazon.com/devops-guru/",
    "status": "pending",
    "summary": "Amazon DevOps Guru was an AWS ML operations service for anomaly detection and recommendations; AWS has closed new-customer access and announced end of support in 2027.",
    "capabilities": [
      "ML anomaly detection for operational data",
      "Reactive and proactive insights",
      "CloudWatch and CloudTrail analysis",
      "Recommendations and SNS/OpsCenter notifications"
    ],
    "alternatives": [],
    "gap": "The service is being retired; open-source observability tools cover portions but not its historical managed AWS integration or learned recommendations.",
    "verdict": "Retired. Keep for catalog completeness; do not recommend a new implementation from this entry.",
    "sources": [
      "https://docs.aws.amazon.com/devops-guru/latest/userguide/",
      "https://docs.aws.amazon.com/devops-guru/latest/userguide/devops-guru-end-of-support.html",
      "https://aws.amazon.com/devops-guru/"
    ]
  },
  {
    "id": "amazon-documentdb",
    "company_id": "amazon_aws",
    "name": "Amazon DocumentDB",
    "product_type": "database",
    "categories": ["document-database", "nosql", "mongodb-compatibility", "managed-service"],
    "official_url": "https://aws.amazon.com/documentdb/",
    "status": "pending",
    "summary": "Amazon DocumentDB is a managed document database with a versioned MongoDB-compatible API, instance and elastic clusters, and AWS-native operations.",
    "capabilities": [
      "Managed document database",
      "MongoDB-compatible drivers and API",
      "Instance-based and elastic clusters",
      "Multi-AZ storage, backups, monitoring and encryption"
    ],
    "alternatives": [],
    "gap": "Open-source document databases cover core JSON storage but compatibility, managed operations, storage architecture and AWS integrations remain unverified.",
    "verdict": "Pending REA research; no open-source equivalence is claimed.",
    "sources": [
      "https://docs.aws.amazon.com/documentdb/latest/devguide/what-is.html",
      "https://docs.aws.amazon.com/documentdb/latest/devguide/how-it-works.html",
      "https://docs.aws.amazon.com/documentdb/latest/APIReference/"
    ]
  },
  {
    "id": "amazon-ec2-auto-scaling",
    "company_id": "amazon_aws",
    "name": "Amazon EC2 Auto Scaling",
    "product_type": "compute",
    "categories": ["compute", "autoscaling", "high-availability", "infrastructure"],
    "official_url": "https://aws.amazon.com/ec2/autoscaling/",
    "status": "pending",
    "summary": "Amazon EC2 Auto Scaling maintains EC2 capacity within configured limits using policies, schedules and health checks.",
    "capabilities": [
      "Auto Scaling groups and desired capacity",
      "Policy, scheduled and predictive scaling",
      "Health checks and instance replacement",
      "Multi-AZ distribution, lifecycle hooks and instance refresh"
    ],
    "alternatives": [],
    "gap": "Open-source orchestrators cover workload scaling but EC2 lifecycle, purchase options, AWS health checks and managed integrations remain unverified.",
    "verdict": "Pending REA research; no open-source equivalence is claimed.",
    "sources": [
      "https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html",
      "https://docs.aws.amazon.com/autoscaling/ec2/APIReference/Welcome.html",
      "https://aws.amazon.com/documentation-overview/ec2-autoscaling/"
    ]
  },
  {
    "id": "amazon-ecs-anywhere",
    "company_id": "amazon_aws",
    "name": "Amazon ECS Anywhere",
    "product_type": "container_orchestration",
    "categories": ["containers", "orchestration", "hybrid-cloud", "on-premises"],
    "official_url": "https://aws.amazon.com/ecs/anywhere/",
    "status": "pending",
    "summary": "Amazon ECS Anywhere is an ECS feature for registering external VMs and bare-metal servers and managing their container workloads through the ECS control plane.",
    "capabilities": [
      "ECS management of on-premises and external instances",
      "Container task scheduling on VMs and bare metal",
      "Single ECS control plane across environments",
      "ECS agent and activation-key registration"
    ],
    "alternatives": [],
    "gap": "Open-source orchestrators cover hybrid container management but ECS task semantics, AWS control-plane integration and agent behavior remain unverified.",
    "verdict": "Pending REA research; no open-source equivalence is claimed.",
    "sources": [
      "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-anywhere.html",
      "https://aws.amazon.com/ecs/anywhere/faqs/",
      "https://aws.amazon.com/ecs/anywhere/"
    ]
  },
  {
    "id": "amazon-eks-anywhere",
    "company_id": "amazon_aws",
    "name": "Amazon EKS Anywhere",
    "product_type": "container_orchestration",
    "categories": ["kubernetes", "containers", "hybrid-cloud", "on-premises", "edge"],
    "official_url": "https://aws.amazon.com/eks/eks-anywhere/",
    "status": "pending",
    "summary": "Amazon EKS Anywhere is AWS's Kubernetes distribution and lifecycle tooling for customer-managed clusters on premises and at the edge.",
    "capabilities": [
      "Customer-managed Kubernetes clusters",
      "Cluster API-based lifecycle management",
      "VMware, bare metal, Nutanix, CloudStack and Snow support",
      "Optional AWS visibility and enterprise subscriptions"
    ],
    "alternatives": [],
    "gap": "Open Kubernetes distributions and Cluster API stacks cover core operations but EKS Distro, curated packages, provider support and AWS integrations remain unverified.",
    "verdict": "Pending REA research; no open-source equivalence is claimed.",
    "sources": [
      "https://docs.aws.amazon.com/eks/latest/userguide/eks-deployment-options.html",
      "https://aws.amazon.com/eks/eks-anywhere/",
      "https://aws.amazon.com/eks/eks-anywhere/pricing/"
    ]
  },
  {
    "id": "amazon-eks-distro",
    "company_id": "amazon_aws",
    "name": "Amazon EKS Distro",
    "product_type": "container_orchestration",
    "categories": ["kubernetes", "containers", "open-source", "hybrid-cloud", "security"],
    "official_url": "https://aws.amazon.com/eks/eks-distro/",
    "status": "pending",
    "summary": "Amazon EKS Distro is AWS's open-source Kubernetes distribution, with reproducible builds, validated components and security lifecycle updates for self-managed deployments.",
    "capabilities": [
      "Open-source Kubernetes distribution from AWS",
      "Reproducible builds from Kubernetes source and tooling",
      "Validated components aligned with Amazon EKS",
      "Security patches and version lifecycle updates",
      "Self-managed deployment on AWS, on premises and other clouds"
    ],
    "alternatives": [],
    "gap": "Upstream Kubernetes distributions may cover the core platform, but EKS-D build provenance, curation, patching, compatibility and operational boundaries remain unverified.",
    "verdict": "Pending REA research; no open-source equivalence is claimed.",
    "sources": [
      "https://aws.amazon.com/eks/eks-distro/",
      "https://distro.eks.amazonaws.com/",
      "https://github.com/aws/eks-distro",
      "https://docs.aws.amazon.com/eks/latest/userguide/eks-deployment-options.html"
    ]
  },
  {
    "id": "amazon-elastic-block-store",
    "company_id": "amazon_aws",
    "name": "Amazon Elastic Block Store",
    "product_type": "storage",
    "categories": ["block-storage", "cloud-storage", "snapshots", "backup", "encryption"],
    "official_url": "https://aws.amazon.com/ebs/",
    "status": "pending",
    "summary": "Amazon EBS provides persistent block storage for EC2 with volume families, snapshots, Elastic Volumes, encryption and AWS APIs/CLI.",
    "capabilities": [
      "Durable block-level volumes for EC2",
      "SSD and HDD volume types with tunable performance",
      "Point-in-time snapshots and lifecycle management",
      "Elastic Volumes capacity, type and performance changes",
      "Encryption with AWS KMS and Multi-Attach options"
    ],
    "alternatives": [],
    "gap": "Open-source block-storage systems can cover persistent volumes, but EBS's EC2 integration, regional placement, snapshots, KMS integration and managed guarantees remain unverified.",
    "verdict": "Pending REA research; no open-source equivalence is claimed.",
    "sources": [
      "https://aws.amazon.com/ebs/",
      "https://aws.amazon.com/documentation-overview/ebs/",
      "https://docs.aws.amazon.com/ebs/",
      "https://docs.aws.amazon.com/cli/latest/reference/ebs/"
    ]
  },
  {
    "id": "amazon-elastic-container-service",
    "company_id": "amazon_aws",
    "name": "Amazon Elastic Container Service",
    "product_type": "container_orchestration",
    "categories": ["containers", "orchestration", "compute", "serverless", "managed-service"],
    "official_url": "https://aws.amazon.com/ecs/",
    "status": "pending",
    "summary": "Amazon ECS is AWS's managed container orchestration service for deploying, managing and scaling container workloads across EC2, Fargate, managed instances and external capacity.",
    "capabilities": [
      "Managed container orchestration",
      "Task and service scheduling",
      "EC2, Fargate, managed-instance and external capacity options",
      "IAM, VPC, load-balancing and CloudWatch integrations",
      "Regional deployment and scaling of container workloads"
    ],
    "alternatives": [],
    "gap": "Open-source orchestrators cover container scheduling, but ECS's task model, capacity providers, IAM integration, Fargate integration and managed control plane remain unverified.",
    "verdict": "Pending REA research; no open-source equivalence is claimed.",
    "sources": [
      "https://aws.amazon.com/ecs/",
      "https://docs.aws.amazon.com/ecs/",
      "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html",
      "https://aws.amazon.com/ecs/faqs/"
    ]
  },
  {
    "id": "amazon-elastic-file-system",
    "company_id": "amazon_aws",
    "name": "Amazon Elastic File System",
    "product_type": "storage",
    "categories": ["file-storage", "shared-storage", "nfs", "serverless", "cloud-storage"],
    "official_url": "https://aws.amazon.com/efs/",
    "status": "pending",
    "summary": "Amazon EFS is AWS's managed elastic file-storage service with shared NFS access for AWS compute and supported on-premises resources.",
    "capabilities": [
      "Serverless elastic file storage",
      "Shared NFSv4 file-system access",
      "Concurrent access from AWS compute and on-premises resources",
      "Storage classes and lifecycle management",
      "Encryption, access points and regional availability"
    ],
    "alternatives": [],
    "gap": "Open-source file systems can provide shared NFS or POSIX access, but EFS's managed elasticity, AWS integrations, mount-target model and operational guarantees remain unverified.",
    "verdict": "Pending REA research; no open-source equivalence is claimed.",
    "sources": [
      "https://aws.amazon.com/efs/",
      "https://aws.amazon.com/efs/faq/",
      "https://docs.aws.amazon.com/efs/latest/ug/how-it-works.html",
      "https://docs.aws.amazon.com/efs/latest/APIReference/"
    ]
  },
  {
    "id": "amazon-elastic-kubernetes-service",
    "company_id": "amazon_aws",
    "name": "Amazon Elastic Kubernetes Service",
    "product_type": "container_orchestration",
    "categories": ["kubernetes", "containers", "managed-service", "cloud-native", "orchestration"],
    "official_url": "https://aws.amazon.com/eks/",
    "status": "pending",
    "summary": "Amazon EKS is AWS's managed Kubernetes service with standard control-plane management, EKS Auto Mode and integrations across AWS identity, networking, storage and observability.",
    "capabilities": [
      "Managed Kubernetes control plane",
      "Standard EKS and EKS Auto Mode",
      "Kubernetes-conformant cluster operation",
      "IAM and Kubernetes access-control integration",
      "EC2, Fargate, EBS, EFS and AWS networking integrations"
    ],
    "alternatives": [],
    "gap": "Open-source Kubernetes distributions can run clusters, but EKS control-plane management, Auto Mode, IAM integration, add-ons and AWS operational guarantees remain unverified.",
    "verdict": "Pending REA research; no open-source equivalence is claimed.",
    "sources": [
      "https://aws.amazon.com/eks/",
      "https://docs.aws.amazon.com/eks/",
      "https://docs.aws.amazon.com/eks/latest/userguide/",
      "https://docs.aws.amazon.com/eks/latest/userguide/getting-started.html"
    ]
  },
  {
    "id": "amazon-elasticache-memcached",
    "company_id": "amazon_aws",
    "name": "Amazon ElastiCache for Memcached",
    "product_type": "database",
    "categories": ["caching", "in-memory-database", "memcached", "distributed-systems", "managed-service"],
    "official_url": "https://aws.amazon.com/elasticache/",
    "status": "pending",
    "summary": "Amazon ElastiCache for Memcached is AWS's managed Memcached-compatible in-memory cache with sharding, auto discovery, VPC isolation and managed operations.",
    "capabilities": [
      "Managed Memcached-compatible in-memory cache",
      "Sub-millisecond cache access",
      "Sharding across cache nodes",
      "TLS in transit and VPC isolation",
      "Auto discovery and managed provisioning, patching, monitoring and recovery"
    ],
    "alternatives": [],
    "gap": "Self-managed Memcached and other cache engines cover core caching, but ElastiCache's managed node lifecycle, networking, monitoring, recovery and auto-discovery remain unverified.",
    "verdict": "Pending REA research; no open-source equivalence is claimed.",
    "sources": [
      "https://aws.amazon.com/documentation-overview/memcached/",
      "https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/",
      "https://aws.amazon.com/elasticache/faqs/",
      "https://aws.amazon.com/elasticache/pricing/"
    ]
  },
  {
    "id": "amazon-elasticache-redis",
    "company_id": "amazon_aws",
    "name": "Amazon ElastiCache for Redis OSS",
    "product_type": "database",
    "categories": ["caching", "in-memory-database", "redis", "distributed-systems", "managed-service"],
    "official_url": "https://aws.amazon.com/elasticache/",
    "status": "pending",
    "summary": "Amazon ElastiCache for Redis OSS is AWS's managed Redis-compatible in-memory data store with node-based and serverless modes, replication, clustering and managed lifecycle operations.",
    "capabilities": [
      "Managed Redis OSS-compatible in-memory data store",
      "Node-based and serverless cache modes",
      "Replication, cluster mode and read replicas",
      "TLS, ACLs and AWS network isolation",
      "Backups, monitoring, scaling and managed engine upgrades"
    ],
    "alternatives": [],
    "gap": "Redis OSS and Valkey cover core engine behavior, but ElastiCache's managed lifecycle, failover, network integration, serverless mode and support model remain unverified.",
    "verdict": "Pending REA research; no open-source equivalence is claimed.",
    "sources": [
      "https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/",
      "https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/engine-versions.html",
      "https://aws.amazon.com/elasticache/faqs/",
      "https://aws.amazon.com/elasticache/pricing/"
    ]
  },
  {
    "id": "amazon-emr",
    "company_id": "amazon_aws",
    "name": "Amazon EMR",
    "product_type": "data_platform",
    "categories": ["big-data", "data-processing", "analytics", "hadoop", "spark"],
    "official_url": "https://aws.amazon.com/emr/",
    "status": "pending",
    "summary": "Amazon EMR is AWS's managed platform for Hadoop and Spark workloads across EC2 clusters, EMR on EKS and EMR Serverless.",
    "capabilities": [
      "Managed Hadoop and Spark clusters",
      "Cluster-based big-data processing on EC2",
      "EMR on EKS for containerized workloads",
      "EMR Serverless for managed analytics applications",
      "Integration with S3, DynamoDB and other AWS data stores"
    ],
    "alternatives": [],
    "gap": "Open-source frameworks provide processing engines, but EMR's curated releases, managed lifecycle, EKS and Serverless modes and AWS integrations remain unverified.",
    "verdict": "Pending REA research; no open-source equivalence is claimed.",
    "sources": [
      "https://aws.amazon.com/emr/",
      "https://docs.aws.amazon.com/emr/",
      "https://docs.aws.amazon.com/emr/latest/ManagementGuide/",
      "https://docs.aws.amazon.com/emr/latest/ReleaseGuide/"
    ]
  },
  {
    "id": "amazon-file-cache",
    "company_id": "amazon_aws",
    "name": "Amazon File Cache",
    "product_type": "storage",
    "categories": ["file-storage", "cache", "high-performance-computing", "s3", "nfs"],
    "official_url": "https://aws.amazon.com/filecache/",
    "status": "pending",
    "summary": "Amazon File Cache is AWS's managed high-speed temporary file cache over S3 or NFS repositories, exposing dispersed data through a unified file namespace.",
    "capabilities": [
      "Fully managed high-speed temporary file cache",
      "Unified namespace over S3 or NFS data repositories",
      "Low-latency and high-throughput file access",
      "Lazy loading and automatic cache eviction",
      "AWS CLI, API and console lifecycle management"
    ],
    "alternatives": [],
    "gap": "Open-source caches and parallel file systems can accelerate data access, but File Cache's unified S3/NFS namespace, managed lifecycle, lazy loading and AWS integration remain unverified.",
    "verdict": "Pending REA research; no open-source equivalence is claimed.",
    "sources": [
      "https://aws.amazon.com/filecache/",
      "https://aws.amazon.com/filecache/faqs/",
      "https://docs.aws.amazon.com/fsx/latest/FileCacheGuide/what-is.html",
      "https://docs.aws.amazon.com/fsx/latest/FileCacheGuide/managing-caches.html"
    ]
  },
  {
    "id": "amazon-fsx-lustre",
    "company_id": "amazon_aws",
    "name": "Amazon FSx for Lustre",
    "product_type": "storage",
    "categories": ["parallel-file-system", "high-performance-computing", "machine-learning", "s3", "lustre"],
    "official_url": "https://aws.amazon.com/fsx/lustre/",
    "status": "pending",
    "summary": "Amazon FSx for Lustre is AWS's managed high-performance parallel file system for HPC, machine learning and compute-intensive workloads, with S3 and on-premises integrations.",
    "capabilities": [
      "Managed high-performance Lustre file system",
      "Multiple deployment and storage classes",
      "Sub-millisecond access and high throughput",
      "S3 data repository integration and repository tasks",
      "EC2, ECS, EKS, SageMaker HyperPod and ParallelCluster integrations"
    ],
    "alternatives": [],
    "gap": "Upstream Lustre and other parallel file systems cover core storage, but FSx's managed lifecycle, storage classes, S3 tasks, support and AWS integrations remain unverified.",
    "verdict": "Pending REA research; no open-source equivalence is claimed.",
    "sources": [
      "https://aws.amazon.com/fsx/lustre/",
      "https://docs.aws.amazon.com/fsx/latest/LustreGuide/",
      "https://docs.aws.amazon.com/fsx/latest/LustreGuide/what-is.html",
      "https://aws.amazon.com/fsx/lustre/faqs/"
    ]
  },
  {
    "id": "amazon-forecast",
    "company_id": "amazon_aws",
    "name": "Amazon Forecast",
    "product_type": "machine_learning_framework",
    "categories": ["time-series", "forecasting", "machine-learning", "automl", "analytics"],
    "official_url": "https://aws.amazon.com/forecast/",
    "status": "pending",
    "summary": "Amazon Forecast was AWS's managed time-series forecasting service; AWS documentation states it is no longer available to new customers.",
    "capabilities": [
      "Managed time-series forecasting",
      "Automated machine-learning algorithm selection",
      "Dataset import and predictor training",
      "Forecast generation and query APIs",
      "Missing-value handling and built-in related datasets"
    ],
    "alternatives": [],
    "gap": "Open-source forecasting libraries can replace parts of the modeling workflow, but migration coverage for the retired service's dataset, predictor, API and operational model remains unverified.",
    "verdict": "Retired; no new deployment is recommended. Preserve as a historical entry pending migration research.",
    "sources": [
      "https://aws.amazon.com/forecast/",
      "https://docs.aws.amazon.com/forecast/",
      "https://docs.aws.amazon.com/forecast/latest/dg/what-is-forecast.html",
      "https://docs.aws.amazon.com/forecast/latest/dg/API_CreateForecast.html"
    ]
  },
  {
    "id": "amazon-fraud-detector",
    "company_id": "amazon_aws",
    "name": "Amazon Fraud Detector",
    "product_type": "security",
    "categories": ["fraud-detection", "machine-learning", "risk", "online-fraud", "managed-service"],
    "official_url": "https://aws.amazon.com/fraud-detector/",
    "status": "pending",
    "summary": "Amazon Fraud Detector was AWS's managed online-fraud ML service; AWS stopped accepting new customers on November 7, 2025.",
    "capabilities": [
      "Managed online fraud detection",
      "Custom fraud prediction models",
      "Historical event data training",
      "Business rules and detector versions",
      "Real-time prediction and model scores"
    ],
    "alternatives": [],
    "gap": "AWS identifies AutoGluon, SageMaker and WAF Fraud Control as related alternatives, but migration coverage for the historical event, detector, rule and prediction APIs remains unverified.",
    "verdict": "Retired; no new deployment is recommended. Preserve as a historical entry pending migration research.",
    "sources": [
      "https://aws.amazon.com/fraud-detector/",
      "https://docs.aws.amazon.com/frauddetector/latest/ug/frauddetector-availability-change.html",
      "https://docs.aws.amazon.com/frauddetector/latest/ug/",
      "https://aws.amazon.com/fraud-detector/faqs/"
    ]
  },
  {
    "id": "amazon-fsx-ontap",
    "company_id": "amazon_aws",
    "name": "Amazon FSx for NetApp ONTAP",
    "product_type": "storage",
    "categories": ["file-storage", "netapp-ontap", "nfs", "smb", "enterprise-storage"],
    "official_url": "https://aws.amazon.com/fsx/netapp-ontap/",
    "status": "pending",
    "summary": "Amazon FSx for NetApp ONTAP is a managed AWS service built on ONTAP, providing multi-protocol file and block storage with tiering, snapshots and replication.",
    "capabilities": [
      "Fully managed NetApp ONTAP file storage",
      "NFS, SMB and iSCSI access",
      "SSD and capacity-pool storage tiers",
      "Snapshots, clones, replication and data tiering",
      "AWS and NetApp management APIs and integrations"
    ],
    "alternatives": [],
    "gap": "Open-source systems cover subsets of file, block, snapshot and replication workflows, but managed ONTAP, tiering, multi-protocol behavior and AWS operations remain unverified.",
    "verdict": "Pending REA research; no open-source equivalence is claimed.",
    "sources": [
      "https://aws.amazon.com/fsx/netapp-ontap/",
      "https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/what-is-fsx-ontap.html",
      "https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/how-it-works-fsx-ontap.html",
      "https://aws.amazon.com/fsx/netapp-ontap/faqs/"
    ]
  },
  {
    "id": "amazon-fsx-openzfs",
    "company_id": "amazon_aws",
    "name": "Amazon FSx for OpenZFS",
    "product_type": "storage",
    "categories": ["file-storage", "openzfs", "nfs", "snapshots", "enterprise-storage"],
    "official_url": "https://aws.amazon.com/fsx/openzfs/",
    "status": "pending",
    "summary": "Amazon FSx for OpenZFS is AWS's managed OpenZFS file storage with NFS access, high performance, snapshots, clones, backups and multiple deployment types.",
    "capabilities": [
      "Fully managed OpenZFS file storage",
      "NFSv3 and NFSv4 access from AWS and on-premises compute",
      "High IOPS and low-latency shared storage",
      "Snapshots, clones, compression and backups",
      "Multi-AZ and Single-AZ deployment options"
    ],
    "alternatives": [],
    "gap": "OpenZFS deployments cover the underlying file system, but FSx's managed lifecycle, deployment options, failover, backups, S3 access and AWS operations remain unverified.",
    "verdict": "Pending REA research; no open-source equivalence is claimed.",
    "sources": [
      "https://aws.amazon.com/fsx/openzfs/",
      "https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/what-is-fsx.html",
      "https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/getting-started.html",
      "https://aws.amazon.com/fsx/openzfs/features/"
    ]
  },
  {
    "id": "amazon-fsx-windows",
    "company_id": "amazon_aws",
    "name": "Amazon FSx for Windows File Server",
    "product_type": "storage",
    "categories": ["file-storage", "windows", "smb", "active-directory", "enterprise-storage"],
    "official_url": "https://aws.amazon.com/fsx/windows/",
    "status": "pending",
    "summary": "Amazon FSx for Windows File Server is AWS's managed native Windows file storage with SMB shares, Active Directory integration, configurable performance and backups.",
    "capabilities": [
      "Fully managed Windows file servers",
      "Native Windows file system and SMB access",
      "Active Directory integration",
      "File systems, shares and VSS-consistent backups",
      "Configurable storage capacity, SSD IOPS and throughput"
    ],
    "alternatives": [],
    "gap": "Samba and Windows Server can provide SMB shares, but FSx's managed lifecycle, AD integration, backups, performance controls and AWS operations remain unverified.",
    "verdict": "Pending REA research; no open-source equivalence is claimed.",
    "sources": [
      "https://aws.amazon.com/fsx/windows/",
      "https://docs.aws.amazon.com/fsx/latest/WindowsGuide/what-is.html",
      "https://docs.aws.amazon.com/fsx/latest/WindowsGuide/getting-started.html",
      "https://aws.amazon.com/fsx/windows/faqs/"
    ]
  }
  ,{
    "id": "amazon-gamelift",
    "company_id": "amazon_aws",
    "name": "Amazon GameLift",
    "product_type": "games",
    "categories": ["game-development", "multiplayer", "game-servers", "matchmaking", "managed-service"],
    "official_url": "https://aws.amazon.com/gamelift/",
    "status": "pending",
    "summary": "Amazon GameLift is AWS's managed family for hosting, operating and scaling session-based multiplayer game servers, with related matchmaking and server options.",
    "capabilities": [
      "Managed hosting and scaling for session-based multiplayer game servers",
      "Game-session and player-session lifecycle management",
      "Multi-Region fleet placement, monitoring and autoscaling",
      "FlexMatch rule-based matchmaking and standalone integration",
      "Realtime Servers and FleetIQ options for selected architectures"
    ],
    "alternatives": [],
    "gap": "Agones, Open Match and self-managed fleets cover subsets, but the combined GameLift hosting, placement, scaling, matchmaking, observability and AWS integration behavior remains unverified.",
    "verdict": "Pending REA research; no open-source equivalence is claimed.",
    "sources": [
      "https://aws.amazon.com/gamelift/",
      "https://aws.amazon.com/documentation-overview/gamelift/",
      "https://docs.aws.amazon.com/gamelift/latest/developerguide/",
      "https://docs.aws.amazon.com/cli/latest/reference/gamelift/",
      "https://docs.aws.amazon.com/general/latest/gr/gamelift.html"
    ]
  }
  ,{
    "id": "amazon-guardduty",
    "company_id": "amazon_aws",
    "name": "Amazon GuardDuty",
    "product_type": "security",
    "categories": ["threat-detection", "security-monitoring", "malware-detection", "cloud-security", "managed-service"],
    "official_url": "https://aws.amazon.com/guardduty/",
    "status": "pending",
    "summary": "Amazon GuardDuty is AWS's managed threat-detection service for continuously analyzing AWS data sources, logs, workload activity and threat-intelligence signals.",
    "capabilities": [
      "Continuous detection of malicious and unauthorized activity",
      "Threat-intelligence and machine-learning analysis of AWS data sources",
      "Security findings for account, workload, identity and data threats",
      "Optional protection plans for S3, EKS, ECS, EC2, EBS, RDS, Lambda, Backup and AI activity",
      "Multi-account administration and EventBridge/Security Hub integration"
    ],
    "alternatives": [],
    "gap": "Falco, Wazuh, Suricata, Zeek, OpenSearch Security Analytics, YARA and ClamAV cover subsets, but the combined managed AWS ingestion, threat intelligence, ML detection, malware scanning and organization operations remain unverified.",
    "verdict": "Pending REA research; no open-source equivalence is claimed.",
    "sources": [
      "https://aws.amazon.com/guardduty/",
      "https://aws.amazon.com/documentation-overview/guardduty/",
      "https://docs.aws.amazon.com/guardduty/latest/ug/",
      "https://docs.aws.amazon.com/guardduty/latest/APIReference/",
      "https://docs.aws.amazon.com/cli/latest/reference/guardduty/"
    ]
  }
  ,{
    "id": "amazon-healthlake",
    "company_id": "amazon_aws",
    "name": "Amazon HealthLake",
    "product_type": "data_platform",
    "categories": ["healthcare", "fhir", "clinical-data", "health-data-lake", "managed-service"],
    "official_url": "https://aws.amazon.com/healthlake/",
    "status": "pending",
    "summary": "Amazon HealthLake is AWS's managed healthcare data service for storing, transforming, analyzing and sharing FHIR R4 health data.",
    "capabilities": [
      "Fully managed FHIR R4 data store",
      "Import and export of clinical data through S3 and native APIs",
      "FHIR CRUD and search operations with SQL analytics access",
      "Medical NLP for transforming unstructured clinical text",
      "Integration with healthcare, analytics, ML and event services"
    ],
    "alternatives": [],
    "gap": "HAPI FHIR, IBM FHIR Server, Smile CDR, Aidbox, OpenMRS and custom pipelines cover subsets, but managed scaling, NLP, SQL-on-FHIR, compliance and AWS integrations remain unverified.",
    "verdict": "Pending REA research; no open-source equivalence is claimed.",
    "sources": [
      "https://aws.amazon.com/healthlake/",
      "https://aws.amazon.com/documentation-overview/healthlake/",
      "https://docs.aws.amazon.com/healthlake/latest/devguide/",
      "https://docs.aws.amazon.com/healthlake/latest/APIReference/",
      "https://aws.amazon.com/healthlake/getting-started/"
    ]
  }
  ,{
    "id": "amazon-inspector",
    "company_id": "amazon_aws",
    "name": "Amazon Inspector",
    "product_type": "security",
    "categories": ["vulnerability-management", "security-scanning", "cloud-security", "sbom", "managed-service"],
    "official_url": "https://aws.amazon.com/inspector/",
    "status": "pending",
    "summary": "Amazon Inspector is AWS's automated vulnerability-management service for discovering workloads and code repositories and continually scanning them for vulnerabilities and unintended network exposure.",
    "capabilities": [
      "Continuous vulnerability scanning for EC2, ECR images, Lambda and code repositories",
      "Discovery of workloads and unintended network exposure",
      "Contextual risk scoring using CVE and exploitability signals",
      "Centralized findings and multi-account administration",
      "SBOM export and Security Hub/EventBridge/ECR integrations"
    ],
    "alternatives": [],
    "gap": "Trivy, Grype, Clair, OpenVAS, Dependency-Check, Semgrep and Falco cover subsets, but managed discovery, network exposure, continuous coverage, scoring, SBOM and AWS operations remain unverified.",
    "verdict": "Pending REA research; no open-source equivalence is claimed.",
    "sources": [
      "https://aws.amazon.com/inspector/",
      "https://aws.amazon.com/documentation-overview/inspector/",
      "https://docs.aws.amazon.com/inspector/latest/user/",
      "https://docs.aws.amazon.com/inspector/latest/APIReference/",
      "https://docs.aws.amazon.com/cli/latest/reference/inspector2/"
    ]
  }
  ,{
    "id": "amazon-ivs",
    "company_id": "amazon_aws",
    "name": "Amazon Interactive Video Service",
    "product_type": "media_streaming",
    "categories": ["live-video", "low-latency-streaming", "real-time-video", "interactive-media", "managed-service"],
    "official_url": "https://aws.amazon.com/ivs/",
    "status": "pending",
    "summary": "Amazon IVS is AWS's managed live-video service with low-latency and real-time streaming, interactive features and broadcast/player SDKs.",
    "capabilities": [
      "Managed low-latency live-video streaming",
      "Real-time interactive audio/video stages",
      "Video ingest, transcoding, distribution and playback",
      "Chat, timed metadata and interactive application APIs",
      "Broadcast and player SDKs for web, iOS and Android"
    ],
    "alternatives": [],
    "gap": "WebRTC, Janus, LiveKit, Jitsi, Owncast, OvenMediaEngine, SRS, MediaMTX and PeerTube cover subsets, but the combined managed streaming, real-time, Chat, SDK, scale and operations remain unverified.",
    "verdict": "Pending REA research; no open-source equivalence is claimed.",
    "sources": [
      "https://aws.amazon.com/ivs/",
      "https://aws.amazon.com/documentation-overview/interactive-video-service/",
      "https://docs.aws.amazon.com/ivs/",
      "https://docs.aws.amazon.com/cli/latest/reference/ivs/",
      "https://aws.amazon.com/ivs/pricing/"
    ]
  }
  ,{
    "id": "amazon-kendra",
    "company_id": "amazon_aws",
    "name": "Amazon Kendra",
    "product_type": "search",
    "categories": ["enterprise-search", "semantic-search", "information-retrieval", "rag", "managed-service"],
    "official_url": "https://aws.amazon.com/kendra/",
    "status": "pending",
    "summary": "Amazon Kendra is AWS's managed intelligent-search and information-retrieval service with semantic ranking, connectors, FAQ matching and RAG integrations.",
    "capabilities": [
      "Managed enterprise semantic search and information retrieval",
      "Natural-language answers and passage retrieval",
      "Indexes and connectors for multiple document repositories",
      "FAQ matching, relevance tuning, synonyms and query completion",
      "Kendra GenAI index and Amazon Q/Bedrock integrations"
    ],
    "alternatives": [],
    "gap": "OpenSearch, Solr, Vespa, Elasticsearch, Typesense, Meilisearch, Weaviate, Qdrant and Haystack pipelines cover subsets, but Kendra's managed connectors, semantic ranking, enrichment, access filtering and account constraints remain unverified.",
    "verdict": "Pending REA research; new-customer availability is restricted and no open-source equivalence is claimed.",
    "sources": [
      "https://aws.amazon.com/kendra/",
      "https://aws.amazon.com/documentation-overview/kendra/",
      "https://docs.aws.amazon.com/kendra/latest/dg/",
      "https://docs.aws.amazon.com/kendra/latest/APIReference/",
      "https://docs.aws.amazon.com/cli/latest/reference/kendra/"
    ]
  }
  ,{
    "id": "amazon-keyspaces",
    "company_id": "amazon_aws",
    "name": "Amazon Keyspaces (for Apache Cassandra)",
    "product_type": "database",
    "categories": ["cassandra", "nosql", "serverless-database", "distributed-database", "managed-service"],
    "official_url": "https://aws.amazon.com/keyspaces/",
    "status": "pending",
    "summary": "Amazon Keyspaces is AWS's serverless, managed Apache Cassandra-compatible database service with CQL and existing Cassandra drivers.",
    "capabilities": [
      "Managed Apache Cassandra-compatible database",
      "CQL access through Apache 2.0-licensed drivers",
      "Serverless on-demand and provisioned capacity modes",
      "Automatic scaling, TTL, point-in-time recovery and backups",
      "Multi-AZ replication, encryption, IAM, TLS and PrivateLink"
    ],
    "alternatives": [],
    "gap": "Apache Cassandra, ScyllaDB, YugabyteDB and HBase cover portions of the model or API, but Keyspaces' managed serverless operations, AWS controls, scaling and replication behavior remain unverified.",
    "verdict": "Pending REA research; no open-source equivalence is claimed.",
    "sources": [
      "https://aws.amazon.com/keyspaces/",
      "https://aws.amazon.com/documentation-overview/keyspaces/",
      "https://docs.aws.amazon.com/keyspaces/latest/devguide/",
      "https://docs.aws.amazon.com/keyspaces/latest/APIReference/",
      "https://docs.aws.amazon.com/cli/latest/reference/keyspaces/"
    ]
  }
  ,{
    "id": "amazon-kinesis-data-streams",
    "company_id": "amazon_aws",
    "name": "Amazon Kinesis Data Streams",
    "product_type": "data_platform",
    "categories": ["event-streaming", "real-time-analytics", "data-ingestion", "stream-processing", "managed-service"],
    "official_url": "https://aws.amazon.com/kinesis/data-streams/",
    "status": "pending",
    "summary": "Amazon Kinesis Data Streams is AWS's durable, scalable streaming-data ingestion service for ordered records, replay and real-time consumers.",
    "capabilities": [
      "Durable real-time streaming data ingestion",
      "Ordered records and partitioned shards",
      "On-demand and provisioned capacity modes",
      "Enhanced fan-out and dedicated consumer throughput",
      "Retention, replay, scaling and Lambda/Flink/Firehose/CloudWatch/KMS integrations"
    ],
    "alternatives": [],
    "gap": "Kafka, Redpanda, Pulsar, NATS JetStream, RabbitMQ Streams, Redis Streams and Samza cover subsets, but Kinesis's managed control plane, shard semantics, AWS integrations and scaling remain unverified.",
    "verdict": "Pending REA research; no open-source equivalence is claimed.",
    "sources": [
      "https://aws.amazon.com/kinesis/data-streams/",
      "https://aws.amazon.com/documentation-overview/kinesis-data-streams/",
      "https://aws.amazon.com/kinesis/data-streams/getting-started/",
      "https://docs.aws.amazon.com/streams/latest/dev/",
      "https://docs.aws.amazon.com/kinesis/latest/APIReference/"
    ]
  }
  ,{
    "id": "amazon-kinesis-video-streams",
    "company_id": "amazon_aws",
    "name": "Amazon Kinesis Video Streams",
    "product_type": "media_streaming",
    "categories": ["video-ingestion", "video-storage", "computer-vision", "webrtc", "managed-service"],
    "official_url": "https://aws.amazon.com/kinesis/video-streams/",
    "status": "pending",
    "summary": "Amazon Kinesis Video Streams is AWS's managed service for ingesting, processing and storing video and time-encoded data from connected devices.",
    "capabilities": [
      "Managed ingestion and storage of video and time-encoded data",
      "Device SDKs and GStreamer producer integrations",
      "HLS playback and frame-level media APIs",
      "WebRTC two-way media streaming and cloud forwarding",
      "Time indexing, retention, encryption and Rekognition/ML integrations"
    ],
    "alternatives": [],
    "gap": "WebRTC, Janus, LiveKit, MediaMTX, GStreamer, SRS, OvenMediaEngine, Shinobi and Frigate cover subsets, but the combined device, storage, playback, WebRTC, retention and AWS operations remain unverified.",
    "verdict": "Pending REA research; no open-source equivalence is claimed.",
    "sources": [
      "https://aws.amazon.com/kinesis/video-streams/",
      "https://aws.amazon.com/documentation-overview/kinesis-video-streams/",
      "https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/",
      "https://docs.aws.amazon.com/kinesisvideostreams/latest/APIReference/",
      "https://docs.aws.amazon.com/cli/latest/reference/kinesisvideo/"
    ]
  }
  ,{
    "id": "amazon-lex",
    "company_id": "amazon_aws",
    "name": "Amazon Lex",
    "product_type": "ai_application",
    "categories": ["conversational-ai", "chatbot", "natural-language-understanding", "speech-recognition", "managed-service"],
    "official_url": "https://aws.amazon.com/lex/",
    "status": "pending",
    "summary": "Amazon Lex is AWS's managed service for building voice and text conversational interfaces with NLU, ASR, intents, slots, multi-turn dialogs and integrations.",
    "capabilities": [
      "Voice and text conversational interfaces",
      "Natural-language understanding and automatic speech recognition",
      "Intents, slots, prompts, contexts and multi-turn dialogs",
      "Lambda fulfillment with Polly, Bedrock and Kendra integrations",
      "Bot versioning, aliases, deployment, analytics and test workbench"
    ],
    "alternatives": [],
    "gap": "Rasa, Botpress, Botkit, Microsoft Bot Framework SDK and open-source NLU stacks cover subsets, but the combined Lex ASR/NLU, dialogue, fulfillment, versioning, channels and managed operations remain unverified.",
    "verdict": "Pending REA research; no open-source equivalence is claimed.",
    "sources": [
      "https://aws.amazon.com/lex/",
      "https://aws.amazon.com/documentation-overview/lex/",
      "https://docs.aws.amazon.com/lexv2/latest/dg/",
      "https://docs.aws.amazon.com/lexv2/latest/APIReference/",
      "https://docs.aws.amazon.com/cli/latest/reference/lexv2-models/"
    ]
  }
  ,{
    "id": "amazon-lightsail",
    "company_id": "amazon_aws",
    "name": "Amazon Lightsail",
    "product_type": "cloud_infrastructure",
    "categories": ["virtual-private-server", "containers", "managed-database", "hosting", "managed-service"],
    "official_url": "https://aws.amazon.com/lightsail/",
    "status": "pending",
    "summary": "Amazon Lightsail is AWS's simplified hosting service combining VPS instances, containers, managed databases, storage, networking, CDN and load balancing.",
    "capabilities": [
      "Simplified virtual private servers and preconfigured stacks",
      "Container services and managed MySQL/PostgreSQL databases",
      "Object storage, block storage, snapshots and static IPs",
      "Load balancers, CDN distributions, DNS and domains",
      "Predictable plans with VPC peering and guided upgrade to EC2"
    ],
    "alternatives": [],
    "gap": "OpenStack, Proxmox, CapRover, Coolify, Dokku, Cloudron and self-hosted VPS platforms cover subsets, but Lightsail's bundles, AWS operations, billing, migration and integrated resources remain unverified.",
    "verdict": "Pending REA research; no open-source equivalence is claimed.",
    "sources": [
      "https://aws.amazon.com/lightsail/",
      "https://aws.amazon.com/documentation-overview/lightsail/",
      "https://docs.aws.amazon.com/lightsail/latest/userguide/",
      "https://docs.aws.amazon.com/lightsail/latest/reference/",
      "https://docs.aws.amazon.com/cli/latest/reference/lightsail/"
    ]
  }
  ,{
    "id": "amazon-location",
    "company_id": "amazon_aws",
    "name": "Amazon Location Service",
    "product_type": "cloud_infrastructure",
    "categories": ["maps", "places", "routes", "geofencing", "asset-tracking"],
    "official_url": "https://aws.amazon.com/location/",
    "status": "pending",
    "summary": "Amazon Location Service is AWS's managed location platform for maps, places, routes, device tracking and geofencing.",
    "capabilities": [
      "Dynamic and static maps",
      "Places search, geocoding and reverse geocoding",
      "Route calculation, optimization and vehicle restrictions",
      "Device tracking and geofencing",
      "API keys, Cognito/IAM, SDKs and AWS integrations"
    ],
    "alternatives": [],
    "gap": "OpenStreetMap, MapLibre, Valhalla, OSRM, GraphHopper, Pelias, Nominatim, TileServer GL, Traccar and PostGIS cover subsets, but managed providers, APIs, attribution, trackers and AWS operations remain unverified.",
    "verdict": "Pending REA research; no open-source equivalence is claimed.",
    "sources": [
      "https://aws.amazon.com/location/",
      "https://aws.amazon.com/location/getting-started/",
      "https://docs.aws.amazon.com/location/latest/developerguide/",
      "https://docs.aws.amazon.com/location/latest/APIReference/",
      "https://docs.aws.amazon.com/cli/latest/reference/location/"
    ]
  }
  ,{
    "id": "amazon-lookout-equipment",
    "company_id": "amazon_aws",
    "name": "Amazon Lookout for Equipment",
    "product_type": "machine_learning_framework",
    "categories": ["predictive-maintenance", "industrial-iot", "anomaly-detection", "time-series", "discontinued"],
    "official_url": "https://aws.amazon.com/lookout-for-equipment/",
    "status": "pending",
    "summary": "Amazon Lookout for Equipment was AWS's managed industrial time-series anomaly-detection service for predictive maintenance; AWS discontinued support on October 7, 2026.",
    "capabilities": [
      "Multivariate time-series anomaly detection for industrial assets",
      "Custom model training from historical sensor data",
      "Real-time inference and scheduled monitoring",
      "Dataset, labeling, evaluation and inference workflows",
      "Industrial predictive-maintenance use cases"
    ],
    "alternatives": [],
    "gap": "River, PyOD, Merlion, Kats, Sktime, InfluxDB/Telegraf, Grafana and OpenSearch cover subsets of the historical workflow; no active open-source equivalence is claimed.",
    "verdict": "Retired reference entry; no new deployment or open-source equivalence is claimed.",
    "sources": [
      "https://aws.amazon.com/lookout-for-equipment/",
      "https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/",
      "https://docs.aws.amazon.com/lookout-for-equipment/latest/userguide/how-it-works.html",
      "https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/doc-history.html",
      "https://docs.aws.amazon.com/general/latest/gr/lookoutequipment.html"
    ]
  }
  ,{
    "id": "amazon-lookout-metrics",
    "company_id": "amazon_aws",
    "name": "Amazon Lookout for Metrics",
    "product_type": "machine_learning_framework",
    "categories": ["anomaly-detection", "metrics", "time-series", "business-analytics", "discontinued"],
    "official_url": "https://aws.amazon.com/lookout-for-metrics/",
    "status": "pending",
    "summary": "Amazon Lookout for Metrics was AWS's managed anomaly-detection service for business and operational metrics; AWS fully shut it down on October 10, 2025.",
    "capabilities": [
      "Automated anomaly detection for business and operational metrics",
      "Metric sets and time-series detectors",
      "Root-cause analysis and anomaly alerts",
      "CloudWatch, S3, Redshift, RDS and SaaS data integrations",
      "Scheduled detection and visualization workflows"
    ],
    "alternatives": [],
    "gap": "Grafana/Prometheus, OpenSearch anomaly detection, River, Merlion, Kats, PyOD, ADTK and Flink CEP cover subsets of the historical workflow; no active equivalence is claimed.",
    "verdict": "Retired reference entry; no new deployment or open-source equivalence is claimed.",
    "sources": [
      "https://aws.amazon.com/lookout-for-metrics/",
      "https://docs.aws.amazon.com/lookoutmetrics/latest/dev/",
      "https://docs.aws.amazon.com/general/latest/gr/full_shutdown_services.html",
      "https://docs.aws.amazon.com/cli/latest/reference/lookoutmetrics/"
    ]
  }
  ,{
    "id": "amazon-lookout-vision",
    "company_id": "amazon_aws",
    "name": "Amazon Lookout for Vision",
    "product_type": "machine_learning_framework",
    "categories": ["computer-vision", "industrial-inspection", "anomaly-detection", "image-analysis", "discontinued"],
    "official_url": "https://aws.amazon.com/lookout-for-vision/",
    "status": "pending",
    "summary": "Amazon Lookout for Vision was AWS's managed computer-vision anomaly-detection service; AWS fully shut it down on October 31, 2025.",
    "capabilities": [
      "Industrial image anomaly detection",
      "Custom models trained from normal and anomalous image data",
      "Image classification and localization of visual defects",
      "Model evaluation, hosting and inference workflows",
      "Historical edge-device inference support"
    ],
    "alternatives": [],
    "gap": "OpenCV, YOLO, Detectron2, Anomalib, FiftyOne, TensorFlow, PyTorch and OpenVINO cover subsets of the historical workflow; no active equivalence is claimed.",
    "verdict": "Retired reference entry; no new deployment or open-source equivalence is claimed.",
    "sources": [
      "https://aws.amazon.com/lookout-for-vision/",
      "https://docs.aws.amazon.com/lookout-for-vision/latest/developer-guide/",
      "https://docs.aws.amazon.com/general/latest/gr/full_shutdown_services.html",
      "https://docs.aws.amazon.com/cli/latest/reference/lookoutvision/"
    ]
  }
  ,{
    "id": "amazon-managed-blockchain",
    "company_id": "amazon_aws",
    "name": "Amazon Managed Blockchain",
    "product_type": "cloud_infrastructure",
    "categories": ["blockchain", "web3", "distributed-ledger", "managed-service", "sunset-notice"],
    "official_url": "https://aws.amazon.com/managed-blockchain/",
    "status": "pending",
    "summary": "Amazon Managed Blockchain provides managed blockchain access, private Hyperledger Fabric networks and AMB Query; AWS stopped accepting new customers on October 29, 2026 and plans to end access after September 29, 2027.",
    "capabilities": [
      "Managed public blockchain access APIs",
      "Private Hyperledger Fabric networks",
      "Ethereum, Bitcoin and Polygon access surfaces",
      "Multi-blockchain data queries through AMB Query",
      "Managed blockchain infrastructure and APIs"
    ],
    "alternatives": [],
    "gap": "Open-source and managed alternatives may cover nodes, Hyperledger Fabric, Ethereum access or indexed blockchain data, but equivalent coverage and migration paths are not yet verified.",
    "verdict": "Active but sunset-bound reference entry; research the public APIs, migration constraints and independent implementation boundary before recommending a foundation.",
    "sources": [
      "https://aws.amazon.com/managed-blockchain/",
      "https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/Welcome.html",
      "https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/managed-blockchain-end-of-support.html",
      "https://docs.aws.amazon.com/managed-blockchain/latest/AMBQ-APIReference/Welcome.html"
    ]
  }
  ,{
    "id": "amazon-macie",
    "company_id": "amazon_aws",
    "name": "Amazon Macie",
    "product_type": "security",
    "categories": ["data-security", "sensitive-data-discovery", "privacy", "s3", "machine-learning"],
    "official_url": "https://aws.amazon.com/macie/",
    "status": "pending",
    "summary": "Amazon Macie discovers and protects sensitive data in Amazon S3 using machine learning and pattern matching, with API, CLI, SDK and EventBridge integrations.",
    "capabilities": [
      "Sensitive data discovery in Amazon S3",
      "Machine-learning and pattern-based classification",
      "S3 bucket security and access visibility",
      "Findings, statistics and data security posture reporting",
      "API, CLI, SDK and EventBridge integrations"
    ],
    "alternatives": [],
    "gap": "Open-source DLP, classification and S3 security alternatives have not yet been compared for coverage, operations and licensing.",
    "verdict": "Active reference entry; investigate the public API, classification behavior, findings lifecycle and independent foundation before implementation.",
    "sources": [
      "https://aws.amazon.com/macie/",
      "https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html",
      "https://docs.aws.amazon.com/macie/latest/APIReference/welcome.html",
      "https://docs.aws.amazon.com/general/latest/gr/macie.html"
    ]
  }
  ,{
    "id": "amazon-managed-service-apache-flink",
    "company_id": "amazon_aws",
    "name": "Amazon Managed Service for Apache Flink",
    "product_type": "data_platform",
    "categories": ["stream-processing", "real-time-analytics", "apache-flink", "serverless", "managed-service"],
    "official_url": "https://aws.amazon.com/managed-service-apache-flink/",
    "status": "pending",
    "summary": "Amazon Managed Service for Apache Flink runs managed Apache Flink applications for real-time stream processing, analytics, dashboards and metrics.",
    "capabilities": [
      "Managed Apache Flink stream processing",
      "Java, Python, Scala and SQL workloads",
      "Stateful time-series analytics and real-time metrics",
      "Managed scaling, checkpoints and application recovery",
      "Connectors for Kinesis, MSK, S3 and other AWS services"
    ],
    "alternatives": [],
    "gap": "Apache Flink itself and other stream-processing engines may cover portions of the service, but managed lifecycle, integrations, scaling and recovery equivalence are not verified.",
    "verdict": "Active reference entry; investigate the application lifecycle, API surface, connector behavior and independent foundation before implementation.",
    "sources": [
      "https://aws.amazon.com/managed-service-apache-flink/",
      "https://docs.aws.amazon.com/managed-flink/latest/java/",
      "https://docs.aws.amazon.com/managed-flink/latest/apiv2/Welcome.html",
      "https://aws.amazon.com/about-aws/whats-new/2023/08/amazon-managed-service-apache-flink/"
    ]
  }
  ,{
    "id": "amazon-managed-grafana",
    "company_id": "amazon_aws",
    "name": "Amazon Managed Grafana",
    "product_type": "data_platform",
    "categories": ["observability", "visualization", "dashboards", "monitoring", "managed-service"],
    "official_url": "https://aws.amazon.com/grafana/",
    "status": "pending",
    "summary": "Amazon Managed Grafana provides managed Grafana workspaces for querying and visualizing metrics, logs and traces from AWS and other data sources.",
    "capabilities": ["Managed Grafana workspaces", "Metrics, logs and traces visualization", "AWS and third-party data-source integrations", "SSO, IAM, access control and audit reporting", "Managed provisioning, scaling and maintenance"],
    "alternatives": [],
    "gap": "Open-source Grafana and other observability dashboards cover portions of the experience, but AWS provisioning, IAM integration, data-source permissions and managed operations are not yet compared.",
    "verdict": "Active reference entry; investigate workspace lifecycle, authentication, data-source permissions and independent foundation before implementation.",
    "sources": ["https://aws.amazon.com/grafana/", "https://docs.aws.amazon.com/grafana/latest/userguide/", "https://docs.aws.amazon.com/grafana/latest/userguide/AMG-manage-workspaces-users.html", "https://docs.aws.amazon.com/grafana/latest/userguide/AMG-and-IAM.html"]
  }
  ,{
    "id": "amazon-managed-prometheus",
    "company_id": "amazon_aws",
    "name": "Amazon Managed Service for Prometheus",
    "product_type": "data_platform",
    "categories": ["observability", "monitoring", "prometheus", "containers", "managed-service"],
    "official_url": "https://aws.amazon.com/prometheus/",
    "status": "pending",
    "summary": "Amazon Managed Service for Prometheus is a serverless, Prometheus-compatible monitoring service for container metrics with managed workspaces, ingestion, querying and collectors.",
    "capabilities": ["Managed Prometheus workspaces", "PromQL-compatible metric querying", "Remote write and metric ingestion", "Managed collectors and scrapers for container workloads", "IAM, CloudTrail and multi-AZ operational controls"],
    "alternatives": [],
    "gap": "Open-source Prometheus and related observability tools cover the data model and query language, but AWS managed scaling, collectors, IAM, retention and operations are not yet compared.",
    "verdict": "Active reference entry; investigate workspaces, ingestion, scrapers, query APIs, retention and independent foundation before implementation.",
    "sources": ["https://aws.amazon.com/documentation-overview/prometheus/", "https://docs.aws.amazon.com/prometheus/latest/userguide/", "https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html", "https://docs.aws.amazon.com/general/latest/gr/prometheus-service.html"]
  }
  ,{
    "id": "amazon-msk",
    "company_id": "amazon_aws",
    "name": "Amazon Managed Streaming for Apache Kafka",
    "product_type": "data_platform",
    "categories": ["streaming", "messaging", "apache-kafka", "event-driven", "managed-service"],
    "official_url": "https://aws.amazon.com/msk/",
    "status": "pending",
    "summary": "Amazon MSK is a managed Apache Kafka service with provisioned and serverless clusters, Kafka Connect, multi-AZ operations and AWS security integrations.",
    "capabilities": ["Managed Apache Kafka clusters", "MSK Serverless clusters", "Kafka Connect and native Kafka compatibility", "Multi-AZ availability and automated operations", "IAM, TLS, VPC, encryption and AWS integrations"],
    "alternatives": [],
    "gap": "Apache Kafka and other streaming systems cover portions of the service, but managed operations, serverless scaling, security and AWS integrations are not yet compared.",
    "verdict": "Active reference entry; investigate cluster lifecycle, serverless behavior, connectors, security and independent foundation before implementation.",
    "sources": ["https://aws.amazon.com/msk/", "https://aws.amazon.com/documentation-overview/msk/", "https://docs.aws.amazon.com/msk/", "https://aws.amazon.com/msk/faqs/"]
  }
  ,{
    "id": "amazon-mwaa",
    "company_id": "amazon_aws",
    "name": "Amazon Managed Workflows for Apache Airflow",
    "product_type": "data_platform",
    "categories": ["workflow-orchestration", "apache-airflow", "data-pipelines", "managed-service", "automation"],
    "official_url": "https://aws.amazon.com/managed-workflows-for-apache-airflow/",
    "status": "pending",
    "summary": "Amazon MWAA is a managed Apache Airflow service for creating, scheduling and monitoring cloud data workflows with AWS-managed infrastructure.",
    "capabilities": ["Managed Apache Airflow environments", "DAG scheduling and workflow monitoring", "Automatic worker scaling", "IAM, VPC, KMS and CloudWatch integration", "AWS and community Airflow operators"],
    "alternatives": [],
    "gap": "Open-source Apache Airflow covers the core orchestration engine, but AWS environment provisioning, security, scaling, upgrades and integrations are not yet compared.",
    "verdict": "Active reference entry; investigate environment lifecycle, Airflow versions, worker behavior, security and independent foundation before implementation.",
    "sources": ["https://aws.amazon.com/managed-workflows-for-apache-airflow/", "https://docs.aws.amazon.com/mwaa/latest/userguide/what-is-mwaa.html", "https://docs.aws.amazon.com/mwaa/latest/userguide/create-environment.html", "https://docs.aws.amazon.com/mwaa/latest/userguide/airflow-versions.html"]
  }
  ,{
    "id": "amazon-monitron",
    "company_id": "amazon_aws",
    "name": "Amazon Monitron",
    "product_type": "machine_learning_framework",
    "categories": ["industrial-iot", "predictive-maintenance", "condition-monitoring", "sensors", "discontinued-new-customer-access"],
    "official_url": "https://aws.amazon.com/monitron/",
    "status": "pending",
    "summary": "Amazon Monitron is an industrial condition-monitoring system using purpose-built sensors, gateways, machine learning and mobile/web applications; it is unavailable to new customers since October 31, 2024.",
    "capabilities": ["Industrial equipment condition monitoring", "Purpose-built vibration and temperature sensors", "Gateway-to-cloud telemetry", "ML-based abnormality detection", "Mobile and web monitoring applications"],
    "alternatives": [],
    "gap": "AWS points existing customers to partner alternatives; equivalent sensor, gateway, ML, workflow and lifecycle coverage is not yet verified.",
    "verdict": "Historical/active-for-existing-customers reference; not recommended for new deployments until access and replacement paths are independently verified.",
    "sources": ["https://aws.amazon.com/monitron/", "https://aws.amazon.com/blogs/machine-learning/maintain-access-and-consider-alternatives-for-amazon-monitron/", "https://docs.aws.amazon.com/Monitron/latest/user-guide/what-is-monitron.html", "https://aws.amazon.com/monitron/pricing/"]
  }
  ,{
    "id": "amazon-mq",
    "company_id": "amazon_aws",
    "name": "Amazon MQ",
    "product_type": "messaging",
    "categories": ["message-broker", "activemq", "rabbitmq", "messaging", "managed-service"],
    "official_url": "https://aws.amazon.com/amazon-mq/",
    "status": "pending",
    "summary": "Amazon MQ is a managed message-broker service for Apache ActiveMQ Classic and RabbitMQ with standard messaging protocols and AWS-managed operations.",
    "capabilities": ["Managed ActiveMQ Classic brokers", "Managed RabbitMQ brokers", "JMS, NMS, AMQP, STOMP, MQTT and WebSocket protocols", "High-availability, patching and version upgrades", "REST API, CLI, SDK and CloudWatch integrations"],
    "alternatives": [],
    "gap": "ActiveMQ, RabbitMQ and other brokers cover the core protocols, but managed AWS lifecycle, networking, security and HA behavior are not yet compared.",
    "verdict": "Active reference entry; investigate broker lifecycle, protocol behavior, HA, migration, security and independent foundation before implementation.",
    "sources": ["https://aws.amazon.com/amazon-mq/", "https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/", "https://docs.aws.amazon.com/amazon-mq/latest/api-reference/welcome.html", "https://aws.amazon.com/amazon-mq/faqs/"]
  }
  ,{
    "id": "amazon-neptune",
    "company_id": "amazon_aws",
    "name": "Amazon Neptune",
    "product_type": "database",
    "categories": ["graph-database", "graph-analytics", "gremlin", "opencypher", "sparql"],
    "official_url": "https://aws.amazon.com/neptune/",
    "status": "pending",
    "summary": "Amazon Neptune is a managed graph database service with property-graph and RDF query languages, plus Neptune Database and Neptune Analytics surfaces.",
    "capabilities": ["Managed property-graph and RDF database", "Gremlin, openCypher and SPARQL queries", "Neptune Database clusters and read replicas", "Neptune Analytics in-memory graph analysis", "Backups, multi-AZ replication, security and APIs"],
    "alternatives": [],
    "gap": "Open-source graph databases and analytics engines cover portions of the service, but AWS storage, availability, APIs, security and Neptune Analytics behavior are not yet compared.",
    "verdict": "Active reference entry; investigate Database and Analytics surfaces, query behavior, operations and independent foundation before implementation.",
    "sources": ["https://aws.amazon.com/neptune/", "https://docs.aws.amazon.com/neptune/", "https://docs.aws.amazon.com/neptune/latest/userguide/", "https://docs.aws.amazon.com/neptune/latest/userguide/neptune-setup.html"]
  },
  {
    "id": "amazon-nimble-studio",
    "company_id": "amazon_aws",
    "name": "Amazon Nimble Studio",
    "product_type": "media",
    "categories": ["virtual-studio", "visual-effects", "animation", "game-development", "cloud-workstations", "rendering"],
    "official_url": "https://aws.amazon.com/nimble-studio/",
    "status": "pending",
    "summary": "Amazon Nimble Studio was AWS's managed cloud studio for visual effects, animation and interactive content, combining virtual workstations, shared storage and scalable rendering.",
    "capabilities": ["Historical cloud virtual workstations for creative teams", "High-speed shared storage integration", "Render-farm integration with AWS Thinkbox Deadline", "Studio identity, permissions and collaboration workflows", "Windows and Linux creative application environments"],
    "alternatives": [],
    "gap": "The service is discontinued and AWS lists it among services in full shutdown. Open-source creative-workstation, storage and render-farm components cover subsets, but no equivalent replacement has been verified here.",
    "verdict": "Retired. Keep this entry for catalog completeness and historical reverse engineering; do not recommend a new implementation under the Amazon Nimble Studio name.",
    "sources": ["https://aws.amazon.com/nimble-studio/", "https://aws.amazon.com/about-aws/whats-new/2021/04/aws-announces-general-availability-amazon-nimble-studio/", "https://docs.aws.amazon.com/general/latest/gr/full_shutdown_services.html", "https://docs.aws.amazon.com/nimble-studio/latest/userguide/what-is-nimble-studio.html"]
  },
  {
    "id": "amazon-nova-act",
    "company_id": "amazon_aws",
    "name": "Amazon Nova Act",
    "product_type": "ai_agent_platform",
    "categories": ["browser-automation", "agentic-ai", "workflow-automation", "computer-use", "developer-tool"],
    "official_url": "https://aws.amazon.com/nova/",
    "status": "pending",
    "summary": "Amazon Nova Act is an AWS service and developer toolchain for building, deploying and managing AI agents that automate browser-based UI workflows.",
    "capabilities": ["Browser-based UI workflow automation", "Python SDK and natural-language act instructions", "Local development with SDK, CLI and IDE extension", "Deployment and monitoring of agent fleets in AWS", "API, tool and human-escalation integrations"],
    "alternatives": [{"name":"Browser Use","license":"MIT","url":"https://github.com/browser-use/browser-use","covers":"Open-source browser-agent framework for browser control, extraction, testing and agent workflows.","note":"Covers agentic browser interaction but not Nova Act's AWS model, managed fleet plane or service APIs."},{"name":"Stagehand","license":"MIT","url":"https://github.com/browserbase/stagehand","covers":"Open-source hybrid browser automation with AI primitives and deterministic browser APIs.","note":"Covers bounded browser automation but not Nova Act's managed workflow and human-escalation service."},{"name":"Playwright","license":"Apache-2.0","url":"https://playwright.dev/","repo":"https://github.com/microsoft/playwright","covers":"Deterministic cross-browser automation and testing foundation.","note":"A browser-control foundation, not a complete autonomous agent platform."}],
    "gap": "Browser Use, Stagehand and Playwright cover browser-control subsets, but Nova Act's integrated model, reliability, AWS deployment plane, workflow APIs, fleet operations and escalation behavior remain distinct.",
    "verdict": "Partial. Open-source browser foundations are credible for bounded implementations, but they are not equivalent to the managed Amazon Nova Act service.",
    "sources": ["https://docs.aws.amazon.com/nova-act/latest/userguide/what-is-nova-act.html", "https://docs.aws.amazon.com/nova-act/latest/APIReference/Welcome.html", "https://docs.aws.amazon.com/ai/responsible-ai/nova-act/overview.html", "https://github.com/browser-use/browser-use", "https://github.com/browserbase/stagehand", "https://playwright.dev/"]
  },
  {
    "id": "amazon-opensearch-service",
    "company_id": "amazon_aws",
    "name": "Amazon OpenSearch Service",
    "product_type": "search",
    "categories": ["search", "analytics", "observability", "managed-service", "serverless", "open-source"],
    "official_url": "https://aws.amazon.com/opensearch-service/",
    "status": "partial",
    "summary": "Amazon OpenSearch Service is AWS's managed OpenSearch and legacy Elasticsearch-compatible search and analytics service, including domains, Serverless collections and ingestion pipelines.",
    "capabilities": ["Managed OpenSearch and legacy Elasticsearch OSS domains", "OpenSearch Serverless collections", "Indexing, search, SQL and PPL analytics", "Ingestion pipelines, dashboards, monitoring and alerting", "IAM, VPC, encryption, snapshots and managed scaling"],
    "alternatives": [{"name":"OpenSearch","license":"Apache-2.0","url":"https://github.com/opensearch-project/OpenSearch","covers":"Open-source search and analytics engine with APIs, indexing, queries and extensions.","note":"Does not provide AWS's managed provisioning, account plane, regional operations, quotas or service integrations by itself."}],
    "gap": "OpenSearch covers the core search and analytics engine, but the AWS managed control plane, Serverless mode, provisioning, IAM/VPC integrations, scaling, snapshots, quotas and operational guarantees remain distinct.",
    "verdict": "Partial. Use OpenSearch as the primary open-source foundation for an independent implementation, but scope the AWS service plane separately and do not claim full equivalence without evidence.",
    "sources": ["https://aws.amazon.com/opensearch-service/", "https://docs.aws.amazon.com/opensearch-service/", "https://docs.aws.amazon.com/opensearch-service/latest/developerguide/what-is.html", "https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_Operations_Amazon_OpenSearch_Service.html", "https://opensearch.org/", "https://github.com/opensearch-project/OpenSearch"]
  },
  {
    "id": "amazon-personalize",
    "company_id": "amazon_aws",
    "name": "Amazon Personalize",
    "product_type": "machine_learning_framework",
    "categories": ["recommendations", "personalization", "machine-learning", "ranking", "customer-experience"],
    "official_url": "https://aws.amazon.com/personalize/",
    "status": "partial",
    "summary": "Amazon Personalize is a managed machine-learning service that trains private recommendation models from user, item and interaction data and serves personalized results through APIs.",
    "capabilities": ["Managed recommendation models trained on user, item and interaction data", "Real-time and batch recommendations", "Personalized ranking, similar items, Trending Now and Next Best Action", "Contextual recommendations, filters and promotions", "Segments, metadata, unstructured text and generative content features"],
    "alternatives": [{"name":"RecBole","license":"MIT","url":"https://github.com/RUCAIBox/RecBole","covers":"Open-source recommendation research and model library covering general, sequential, context-aware and knowledge-based recommendation.","note":"Provides algorithms and evaluation rather than AWS's managed ingestion, private model hosting, real-time service plane, quotas and operational integrations."}],
    "gap": "RecBole covers recommendation algorithms and evaluation, but not Amazon Personalize's managed data import, private model lifecycle, real-time/batch service APIs, filters, promotions, segments, security or AWS operations.",
    "verdict": "Partial. RecBole is a useful open-source foundation for an independent recommendation implementation, but the managed AWS service plane and production operations require separate design and verification.",
    "sources": ["https://aws.amazon.com/personalize/", "https://aws.amazon.com/documentation-overview/personalize/", "https://aws.amazon.com/personalize/faqs/", "https://docs.aws.amazon.com/personalize/", "https://docs.aws.amazon.com/personalize/latest/dg/setup.html", "https://github.com/RUCAIBox/RecBole"]
  },
  {
    "id": "amazon-pinpoint",
    "company_id": "amazon_aws",
    "name": "Amazon Pinpoint",
    "product_type": "business_software",
    "categories": ["customer-engagement", "messaging", "campaigns", "analytics", "mobile-push"],
    "official_url": "https://aws.amazon.com/pinpoint/",
    "status": "pending",
    "summary": "Amazon Pinpoint was AWS's customer-engagement service for segmentation, campaigns, journeys, analytics and multi-channel messaging; AWS ended support on October 30, 2026.",
    "capabilities": ["Historical customer segmentation and campaigns", "Historical journeys and engagement analytics", "Email, SMS, voice, push and custom channel messaging", "Mobile and endpoint event ingestion", "REST API, SDK, CLI and console workflows"],
    "alternatives": [],
    "gap": "The service is retired. AWS directs messaging-channel users toward AWS End User Messaging, while the historical engagement plane has different replacement paths; no open-source equivalent is verified here.",
    "verdict": "Retired. Keep this entry for historical catalog and reverse-engineering completeness; do not recommend a new implementation under the Amazon Pinpoint name.",
    "sources": ["https://aws.amazon.com/pinpoint/", "https://aws.amazon.com/pinpoint/faqs/", "https://docs.aws.amazon.com/pinpoint/", "https://docs.aws.amazon.com/pinpoint/latest/userguide/migrate.html", "https://docs.aws.amazon.com/pinpoint/latest/apireference/"]
  },
  {
    "id": "amazon-polly",
    "company_id": "amazon_aws",
    "name": "Amazon Polly",
    "product_type": "ai_application",
    "categories": ["text-to-speech", "speech-synthesis", "voice", "accessibility", "audio"],
    "official_url": "https://aws.amazon.com/polly/",
    "status": "partial",
    "summary": "Amazon Polly is a managed cloud text-to-speech service with multiple voice engines, languages, SSML, lexicons and streaming or file outputs.",
    "capabilities": ["Cloud text-to-speech synthesis", "Standard, neural, long-form and generative voice engines", "Dozens of languages and voice options", "SSML, lexicons, pronunciation, pitch, rate and volume controls", "Streaming and MP3, Ogg, PCM and telephony audio outputs"],
    "alternatives": [{"name":"Piper","license":"GPL-3.0","url":"https://github.com/OHF-Voice/piper1-gpl","covers":"Fast local neural text-to-speech engine with downloadable voice models.","note":"Does not cover Polly's hosted voice catalog, language coverage, managed API, streaming/service plane or all voice/model licensing."}],
    "gap": "Piper covers local neural synthesis, but Amazon Polly's hosted API, voice portfolio, language coverage, SSML/lexicon behavior, streaming, quotas, privacy and managed operations remain distinct.",
    "verdict": "Partial. Piper is a viable local foundation for an independent TTS implementation, but full Polly equivalence requires separate work for service APIs, voices, languages, streaming, permissions and operations.",
    "sources": ["https://aws.amazon.com/polly/", "https://aws.amazon.com/documentation-overview/polly/", "https://docs.aws.amazon.com/polly/", "https://docs.aws.amazon.com/polly/latest/dg/how-text-to-speech-works.html", "https://github.com/OHF-Voice/piper1-gpl"]
  },
  {
    "id": "amazon-q-developer",
    "company_id": "amazon_aws",
    "name": "Amazon Q Developer",
    "product_type": "ai_agent_platform",
    "categories": ["coding-assistant", "developer-tool", "agentic-ai", "aws-operations", "security"],
    "official_url": "https://aws.amazon.com/q/developer/",
    "status": "partial",
    "summary": "Amazon Q Developer is AWS's generative AI assistant for understanding, building, extending and operating AWS applications, with coding assistance across IDE, CLI, console and collaboration surfaces.",
    "capabilities": ["AWS-aware conversational assistance", "Code explanation, generation, completion and updates", "IDE, CLI, console, web and chat integrations", "Security scanning, debugging and code modernization", "AWS architecture, resource, cost and operations guidance"],
    "alternatives": [{"name":"OpenHands","license":"MIT","url":"https://github.com/OpenHands/OpenHands","covers":"Open-source AI-driven development agent with SDK, tools, workspaces and agent-server integrations.","note":"Does not provide Amazon's AWS-grounded knowledge, Bedrock-backed models, IAM/service integrations, managed quotas or Q-specific interfaces."}],
    "gap": "OpenHands covers an open agentic development foundation, but Amazon Q Developer's AWS grounding, model and safety plane, IDE/CLI integrations, IAM-aware operations, security scans, modernization flows and managed service limits remain distinct.",
    "verdict": "Partial. OpenHands is a credible open-source foundation for an independent coding agent, but it is not a drop-in replacement for Amazon Q Developer's AWS-specific product and managed control plane.",
    "sources": ["https://aws.amazon.com/q/developer/", "https://aws.amazon.com/q/developer/getting-started/", "https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/", "https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/explain-update-code.html", "https://github.com/OpenHands/OpenHands"]
  },
  {
    "id": "amazon-quicksight",
    "company_id": "amazon_aws",
    "name": "Amazon QuickSight",
    "product_type": "business_software",
    "categories": ["business-intelligence", "analytics", "data-visualization", "dashboards", "embedded-analytics"],
    "official_url": "https://aws.amazon.com/quicksight/",
    "status": "partial",
    "summary": "Amazon QuickSight is AWS's cloud business-intelligence service for dashboards, ad hoc analysis, visualizations, embedded analytics and governed data access.",
    "capabilities": ["Cloud business intelligence and interactive dashboards", "Ad hoc analysis, visualizations and stories", "Connectors for files, databases, AWS and SaaS sources", "Embedded analytics and APIs", "SPICE in-memory analytics, permissions and governance"],
    "alternatives": [{"name":"Apache Superset","license":"Apache-2.0","url":"https://github.com/apache/superset","covers":"Open-source data exploration, visualization, SQL and dashboard platform that can be self-hosted.","note":"Does not provide QuickSight's SPICE engine, AWS account integrations, managed operations, embedded contract or exact connector and governance behavior."}],
    "gap": "Apache Superset covers core BI dashboards and exploration, but QuickSight's SPICE storage and query layer, AWS integrations, embedded analytics, permissions, tenant model and managed operations remain distinct.",
    "verdict": "Partial. Apache Superset is a strong open-source BI foundation, but full QuickSight equivalence requires a separate data plane, embedding model, AWS integration layer and operational design.",
    "sources": ["https://aws.amazon.com/quicksight/", "https://docs.aws.amazon.com/quicksight/", "https://docs.aws.amazon.com/quicksight/latest/user/welcome.html", "https://docs.aws.amazon.com/cli/latest/reference/quicksight/", "https://github.com/apache/superset"]
  },
  {
    "id": "amazon-rekognition",
    "company_id": "amazon_aws",
    "name": "Amazon Rekognition",
    "product_type": "ai_application",
    "categories": ["computer-vision", "image-analysis", "video-analysis", "face-analysis", "moderation"],
    "official_url": "https://aws.amazon.com/rekognition/",
    "status": "partial",
    "summary": "Amazon Rekognition is AWS's managed image and video analysis service for labels, text, faces, moderation, custom labels, liveness and streaming analysis.",
    "capabilities": ["Image object, scene, label and text detection", "Face detection, comparison, collections and search", "Video analysis and tracking", "Content moderation and PPE detection", "Custom labels, face liveness and streaming video analysis"],
    "alternatives": [{"name":"CompreFace","license":"Apache-2.0","url":"https://github.com/exadel-inc/CompreFace","covers":"Self-hosted REST face detection, recognition and verification service with Docker deployment.","note":"Covers an important face-analysis subset, but not Rekognition's general image/video analysis, moderation, custom labels, liveness, streaming and AWS managed plane."}],
    "gap": "CompreFace covers face detection and recognition locally, but Rekognition's broader image/video APIs, moderation, custom labels, liveness, streaming, quotas, regional service plane and managed operations remain distinct.",
    "verdict": "Partial. CompreFace is a useful open-source foundation for face-analysis workflows, but full Rekognition equivalence requires separate computer-vision models, video processing, moderation, liveness and managed-service design.",
    "sources": ["https://aws.amazon.com/rekognition/", "https://docs.aws.amazon.com/rekognition/latest/dg/", "https://docs.aws.amazon.com/rekognition/latest/dg/how-it-works.html", "https://docs.aws.amazon.com/rekognition/latest/APIReference/", "https://github.com/exadel-inc/CompreFace"]
  },
  {
    "id": "amazon-route-53",
    "company_id": "amazon_aws",
    "name": "Amazon Route 53",
    "product_type": "networking",
    "categories": ["dns", "domain-registration", "traffic-routing", "health-checking", "networking"],
    "official_url": "https://aws.amazon.com/route53/",
    "status": "partial",
    "summary": "Amazon Route 53 is AWS's highly available DNS and domain service with hosted zones, routing policies, health checks, failover, Resolver and traffic-flow features.",
    "capabilities": ["Authoritative DNS hosting", "Domain registration and transfer", "Health checks and DNS failover", "Latency, weighted, geolocation and geoproximity routing", "Resolver, Profiles and traffic-flow configuration"],
    "alternatives": [{"name":"PowerDNS Authoritative Server","license":"GPL-2.0","url":"https://github.com/PowerDNS/pdns","covers":"Open-source authoritative DNS server with multiple backends, APIs and DNSSEC support.","note":"Does not provide Route 53's domain registrar, AWS account plane, global health-check service, routing products, Resolver or managed operations by itself."}],
    "gap": "PowerDNS covers authoritative DNS and automation foundations, but Route 53's registrar, global health checks, failover and traffic policies, Resolver, Profiles, AWS integrations and managed availability remain distinct.",
    "verdict": "Partial. PowerDNS is a strong open-source authoritative DNS foundation, but full Route 53 equivalence requires separate registrar, health-check, global routing, resolver and operational services.",
    "sources": ["https://aws.amazon.com/route53/", "https://aws.amazon.com/documentation-overview/route53/", "https://docs.aws.amazon.com/route53/", "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/", "https://github.com/PowerDNS/pdns"]
  },
  {
    "id": "amazon-security-lake",
    "company_id": "amazon_aws",
    "name": "Amazon Security Lake",
    "product_type": "data_platform",
    "categories": ["security", "data-lake", "siem", "log-management", "threat-detection"],
    "official_url": "https://aws.amazon.com/security-lake/",
    "status": "partial",
    "summary": "Amazon Security Lake is AWS's managed security data lake for centralizing OCSF-normalized security data in a customer's account and making it available to analytics subscribers.",
    "capabilities": ["Centralized security data lake in the customer AWS account", "OCSF-normalized data from AWS, SaaS, on-premises and cloud sources", "Source and subscriber management", "Query and notification access for security analytics", "Integration with Lake Formation, S3, Athena and AWS security services"],
    "alternatives": [{"name":"Matano","license":"Apache-2.0","url":"https://github.com/matanolabs/matano","covers":"Open-source cloud-native security data lake for AWS with log normalization, Apache Iceberg, detection-as-code and serverless ingestion.","note":"Does not reproduce Security Lake's exact AWS source/subscriber contracts, OCSF implementation, permissions, regional service plane or managed operations."}],
    "gap": "Matano covers a large part of the open security-data-lake foundation, but Security Lake's managed source and subscriber APIs, OCSF behavior, Lake Formation integration, notifications, quotas and AWS operational plane remain distinct.",
    "verdict": "Partial. Matano is a strong open-source foundation for an independent AWS security data lake, but full Security Lake equivalence requires separate validation of schemas, integrations, permissions and managed operations.",
    "sources": ["https://aws.amazon.com/security-lake/", "https://docs.aws.amazon.com/security-lake/", "https://docs.aws.amazon.com/security-lake/latest/userguide/getting-started.html", "https://docs.aws.amazon.com/security-lake/latest/userguide/subscriber-management.html", "https://github.com/matanolabs/matano"]
  },
  {
    "id": "amazon-ses",
    "company_id": "amazon_aws",
    "name": "Amazon Simple Email Service",
    "product_type": "business_software",
    "categories": ["email", "transactional-email", "smtp", "messaging", "deliverability"],
    "official_url": "https://aws.amazon.com/ses/",
    "status": "partial",
    "summary": "Amazon Simple Email Service is AWS's managed email delivery service with SMTP and API sending, identity verification, authentication, event publishing and inbound workflows.",
    "capabilities": ["Transactional and marketing email delivery", "SMTP and API sending", "Identity and domain verification", "DKIM, SPF, bounce and complaint handling", "Templates, configuration sets, event publishing and inbound email workflows"],
    "alternatives": [{"name":"Postal","license":"MIT","url":"https://github.com/postalserver/postal","covers":"Self-hosted mail delivery platform for incoming and outgoing email, with SMTP, tracking and webhooks.","note":"Does not provide SES's managed deliverability, AWS account and IAM integrations, regional quotas, reputation systems or exact API and event contracts."}],
    "gap": "Postal covers a self-hosted email-delivery foundation, but SES's managed deliverability, identity and reputation systems, SMTP/API contracts, quotas, event integrations and AWS operations remain distinct.",
    "verdict": "Partial. Postal is a credible open-source foundation for independent email delivery, but full SES equivalence requires separate work for deliverability, identity, reputation, eventing, compliance and managed operations.",
    "sources": ["https://aws.amazon.com/ses/", "https://aws.amazon.com/ses/getting-started/", "https://docs.aws.amazon.com/ses/", "https://docs.aws.amazon.com/ses/latest/APIReference-V2/", "https://github.com/postalserver/postal"]
  },
  {
    "id": "amazon-textract",
    "company_id": "amazon_aws",
    "name": "Amazon Textract",
    "product_type": "ai_application",
    "categories": ["ocr", "document-analysis", "forms", "tables", "handwriting", "machine-learning"],
    "official_url": "https://aws.amazon.com/textract/",
    "status": "partial",
    "summary": "Amazon Textract is AWS's managed document-analysis service for OCR, handwriting, forms, tables, layout, queries and related structured extraction workflows.",
    "capabilities": ["Printed and handwritten OCR", "Forms and key-value extraction", "Tables, cells and merged-cell extraction", "Queries, layout and signature detection", "Synchronous and asynchronous document-analysis APIs"],
    "alternatives": [{"name":"Tesseract OCR","license":"Apache-2.0","url":"https://github.com/tesseract-ocr/tesseract","covers":"Open-source OCR engine for extracting printed text from images and documents, usable as a local library or command-line tool.","note":"Covers core OCR locally, but not Textract's managed API, forms and tables semantics, queries, signatures, layout model, handwriting coverage, quotas or AWS service plane."}],
    "gap": "Tesseract covers a useful local OCR foundation, but Textract's structured forms and tables, queries, signatures, layout, asynchronous jobs, confidence/block model, managed APIs and AWS operations remain distinct.",
    "verdict": "Partial. Tesseract is a practical open-source OCR foundation for an independent implementation, but full Textract equivalence requires separate document-layout, forms, tables, handwriting, queries, signature, job-state and service-plane work.",
    "sources": ["https://aws.amazon.com/textract/", "https://aws.amazon.com/textract/faqs/", "https://docs.aws.amazon.com/textract/latest/dg/", "https://docs.aws.amazon.com/textract/latest/APIReference/", "https://docs.aws.amazon.com/cli/latest/reference/textract/", "https://github.com/tesseract-ocr/tesseract"]
  },
  {
    "id": "amazon-transcribe",
    "company_id": "amazon_aws",
    "name": "Amazon Transcribe",
    "product_type": "ai_application",
    "categories": ["speech-to-text", "automatic-speech-recognition", "audio", "streaming", "machine-learning"],
    "official_url": "https://aws.amazon.com/transcribe/",
    "status": "partial",
    "summary": "Amazon Transcribe is AWS's managed automatic speech-recognition service for batch and streaming transcription, speaker and channel analysis and domain customization.",
    "capabilities": ["Batch transcription from S3 media", "Real-time streaming transcription", "Speaker labels and channel identification", "Custom vocabulary and language customization", "Medical, call analytics and HealthScribe workflows"],
    "alternatives": [{"name":"Whisper","license":"MIT","url":"https://github.com/openai/whisper","covers":"Open-source automatic speech-recognition model and Python tooling for local audio transcription and language identification.","note":"Covers a strong local speech-to-text foundation, but not Transcribe's managed streaming protocol, AWS job plane, speaker/channel workflows, custom vocabulary APIs, medical/compliance features or service operations."}],
    "gap": "Whisper covers local speech recognition and language identification, but Transcribe's managed batch and streaming APIs, speaker/channel analytics, custom vocabulary, medical workflows, HealthScribe, quotas and AWS operations remain distinct.",
    "verdict": "Partial. Whisper is a strong open-source foundation for an independent transcription implementation, but full Transcribe equivalence requires separate streaming, job, diarization, channel, customization, domain and service-plane work.",
    "sources": ["https://aws.amazon.com/transcribe/", "https://docs.aws.amazon.com/transcribe/latest/dg/", "https://docs.aws.amazon.com/transcribe/latest/APIReference/", "https://docs.aws.amazon.com/cli/latest/reference/transcribe/", "https://github.com/openai/whisper"]
  },
  {
    "id": "amazon-timestream",
    "company_id": "amazon_aws",
    "name": "Amazon Timestream",
    "product_type": "data_platform",
    "categories": ["time-series", "database", "iot", "observability", "analytics", "serverless"],
    "official_url": "https://aws.amazon.com/timestream/",
    "status": "partial",
    "summary": "Amazon Timestream is AWS's managed time-series data platform with LiveAnalytics and managed InfluxDB offerings for ingestion, retention and SQL or InfluxDB-based analysis.",
    "capabilities": ["Managed time-series ingestion and querying", "Memory and magnetic storage tiers with retention policies", "SQL analytics across recent and historical data", "Serverless LiveAnalytics and managed InfluxDB options", "Integrations with IoT, Kinesis, Telegraf, Grafana and AWS analytics"],
    "alternatives": [{"name":"VictoriaMetrics","license":"Apache-2.0","url":"https://github.com/VictoriaMetrics/VictoriaMetrics","covers":"Open-source time-series database and monitoring backend with high-ingestion storage, query APIs and cluster options.","note":"Provides a local or self-hosted time-series foundation, but not Timestream's AWS IAM, serverless scaling, storage-tier semantics, SQL/InfluxDB product split, quotas or managed service plane."}],
    "gap": "VictoriaMetrics covers a strong self-hosted time-series foundation, but Timestream's serverless ingestion, memory and magnetic tiers, adaptive SQL query engine, AWS integrations, IAM and managed operations remain distinct.",
    "verdict": "Partial. VictoriaMetrics is a credible open-source foundation for independent time-series storage and analytics, but full Timestream equivalence requires separate retention, tiering, query, ingestion, integration and service-plane work.",
    "sources": ["https://aws.amazon.com/timestream/", "https://aws.amazon.com/documentation-overview/timestream/", "https://aws.amazon.com/timestream/faqs/", "https://docs.aws.amazon.com/timestream/latest/APIReference/", "https://docs.aws.amazon.com/cli/latest/reference/timestream-query/", "https://github.com/VictoriaMetrics/VictoriaMetrics"]
  },
  {
    "id": "amazon-translate",
    "company_id": "amazon_aws",
    "name": "Amazon Translate",
    "product_type": "ai_application",
    "categories": ["machine-translation", "natural-language-processing", "localization", "language", "machine-learning"],
    "official_url": "https://aws.amazon.com/translate/",
    "status": "partial",
    "summary": "Amazon Translate is AWS's managed neural machine translation service for real-time and batch text or document translation with terminology and parallel-data customization.",
    "capabilities": ["Neural machine translation for supported language pairs", "Real-time text and document translation", "Batch document translation", "Custom terminology and parallel-data customization", "Language identification and translation settings"],
    "alternatives": [{"name":"Argos Translate","license":"MIT","url":"https://github.com/argosopentech/argos-translate","covers":"Open-source offline neural machine translation library and CLI with installable language packages.","note":"Provides a local translation foundation, but not Amazon Translate's language coverage, managed APIs, batch service plane, parallel-data customization, terminology lifecycle, quotas or AWS operations."}],
    "gap": "Argos Translate covers local neural translation and offline execution, but Amazon Translate's managed APIs, supported-language breadth, batch workflows, custom terminology, parallel data, quotas and AWS service plane remain distinct.",
    "verdict": "Partial. Argos Translate is a useful open-source foundation for an independent translation tool, but full Amazon Translate equivalence requires separate language, customization, batch, API, security and managed-operation work.",
    "sources": ["https://aws.amazon.com/translate/", "https://aws.amazon.com/translate/details/", "https://docs.aws.amazon.com/translate/latest/dg/", "https://docs.aws.amazon.com/translate/latest/APIReference/", "https://docs.aws.amazon.com/cli/latest/reference/translate/", "https://github.com/argosopentech/argos-translate"]
  },
  {
    "id": "amazon-verified-permissions",
    "company_id": "amazon_aws",
    "name": "Amazon Verified Permissions",
    "product_type": "security",
    "categories": ["authorization", "access-control", "cedar", "policy-engine", "security"],
    "official_url": "https://aws.amazon.com/verified-permissions/",
    "status": "partial",
    "summary": "Amazon Verified Permissions is AWS's managed fine-grained authorization service using Cedar policies, schemas and policy stores for application access decisions.",
    "capabilities": ["Fine-grained application authorization with Cedar policies", "Policy stores, schemas and policy templates", "Principal, action, resource and context authorization decisions", "Policy validation and explainable allow/deny responses", "CloudTrail-integrated policy administration and AWS service APIs"],
    "alternatives": [{"name":"Cedar","license":"Apache-2.0","url":"https://github.com/cedar-policy/cedar","covers":"Open-source policy language and authorization engine used by Verified Permissions for policy evaluation and validation.","note":"Provides the policy engine and language locally, but not Verified Permissions' managed policy stores, hosted APIs, IAM integration, CloudTrail administration, scaling, quotas or AWS service plane."}],
    "gap": "Cedar covers the core open authorization language and evaluator, but Verified Permissions' managed policy stores, schema administration, hosted APIs, IAM, CloudTrail, consistency and operational plane remain distinct.",
    "verdict": "Partial. Cedar is the strongest open-source foundation for an independent authorization implementation, but full Verified Permissions equivalence requires separate management APIs, persistence, tenancy, audit, scaling and AWS integration work.",
    "sources": ["https://aws.amazon.com/verified-permissions/", "https://aws.amazon.com/verified-permissions/faqs/", "https://docs.aws.amazon.com/verifiedpermissions/latest/userguide/", "https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/", "https://docs.aws.amazon.com/cli/latest/reference/verifiedpermissions/", "https://github.com/cedar-policy/cedar"]
  },
  {
    "id": "amazon-vpc",
    "company_id": "amazon_aws",
    "name": "Amazon Virtual Private Cloud",
    "product_type": "cloud_infrastructure",
    "categories": ["networking", "virtual-network", "subnets", "routing", "security"],
    "official_url": "https://aws.amazon.com/vpc/",
    "status": "partial",
    "summary": "Amazon VPC is AWS's virtual networking foundation for isolated networks, subnets, routing, gateways, security controls, private connectivity and network analysis.",
    "capabilities": ["Logically isolated virtual networks and CIDR allocation", "Subnets, route tables and internet or NAT gateways", "Security groups and network ACLs", "VPC peering, endpoints, VPN and traffic mirroring", "IP address management, reachability analysis and multi-account networking"],
    "alternatives": [{"name":"OpenStack Neutron","license":"Apache-2.0","url":"https://github.com/openstack/neutron","covers":"Open-source virtual networking service for tenant networks, ports, subnets, routers, security groups and networking plugins.","note":"Covers a substantial virtual-network control plane, but not AWS VPC's account and region model, managed gateways, PrivateLink, IPAM, traffic analysis, quotas or service integrations."}],
    "gap": "OpenStack Neutron covers a strong self-hosted virtual-network foundation, but VPC's AWS account and region semantics, managed gateways, endpoints, IPAM, analysis tools, IAM and integrated service plane remain distinct.",
    "verdict": "Partial. Neutron is a credible open-source foundation for independent virtual-network orchestration, but full VPC equivalence requires separate cloud topology, gateway, identity, multi-region, quota and operations work.",
    "sources": ["https://aws.amazon.com/vpc/", "https://aws.amazon.com/vpc/faqs/", "https://docs.aws.amazon.com/vpc/latest/userguide/", "https://docs.aws.amazon.com/vpc/latest/APIReference/", "https://docs.aws.amazon.com/cli/latest/reference/ec2/", "https://github.com/openstack/neutron"]
  },
  {
    "id": "amazon-workmail",
    "company_id": "amazon_aws",
    "name": "Amazon WorkMail",
    "product_type": "business_software",
    "categories": ["email", "calendar", "contacts", "collaboration", "managed-service", "sunset-notice"],
    "official_url": "https://aws.amazon.com/workmail/",
    "status": "partial",
    "summary": "Amazon WorkMail is a managed business email and calendaring service with web, desktop and mobile clients, directory integration, administration APIs and message-flow controls; AWS documents end of support for March 31, 2027.",
    "capabilities": ["Managed business email and calendaring", "Web, desktop and mobile client access", "IMAP, SMTP and Exchange ActiveSync support", "Organization, user, group, resource and device administration", "Directory integration, message flow and configurable encryption keys"],
    "alternatives": [{"name":"mailcow: dockerized","license":"GPL-3.0","url":"https://github.com/mailcow/mailcow-dockerized","covers":"Open-source self-hosted email groupware stack with mail transport, IMAP, webmail, calendars, contacts and administration components.","note":"Covers a self-hosted collaboration and mail foundation, but not WorkMail's AWS IAM, managed availability, client behavior, directory integration, message-flow APIs, quotas or service plane."}],
    "gap": "Mailcow covers a substantial self-hosted email and groupware foundation, but WorkMail's managed AWS organization, IAM, directory, message-flow, client, compliance and operational behavior remain distinct; WorkMail also has an AWS end-of-support notice for March 31, 2027.",
    "verdict": "Partial. Mailcow is a practical open-source foundation for an independent mail and calendar service, but full WorkMail equivalence is not recommended without accounting for the announced end of support and validating its historical AWS-specific behavior.",
    "sources": ["https://aws.amazon.com/workmail/", "https://docs.aws.amazon.com/workmail/latest/userguide/", "https://docs.aws.amazon.com/workmail/latest/adminguide/", "https://docs.aws.amazon.com/workmail/latest/APIReference/", "https://docs.aws.amazon.com/general/latest/gr/workmail.html", "https://github.com/mailcow/mailcow-dockerized"]
  },
  {
    "id": "amazon-workspaces",
    "company_id": "amazon_aws",
    "name": "Amazon WorkSpaces",
    "product_type": "cloud_infrastructure",
    "categories": ["virtual-desktop", "desktop-as-a-service", "remote-access", "managed-service", "end-user-computing"],
    "official_url": "https://aws.amazon.com/workspaces/",
    "status": "partial",
    "summary": "Amazon WorkSpaces is AWS's managed virtual-desktop service, with persistent and pooled desktops, native or browser clients, directory and image management and workspace administration APIs.",
    "capabilities": ["Persistent and non-persistent cloud virtual desktops", "Windows, Linux and supported desktop bundles", "Desktop access from native clients and web browsers", "Directory, image, bundle, application and workspace-pool administration", "AutoStop, billing modes, networking, encryption and device controls"],
    "alternatives": [{"name":"Apache Guacamole","license":"Apache-2.0","url":"https://github.com/apache/guacamole-server","covers":"Open-source clientless remote desktop gateway supporting browser access to RDP, VNC and SSH sessions.","note":"Covers browser-based remote access, but not WorkSpaces' managed desktop provisioning, images, directory integration, billing modes, client controls, pools or AWS service plane."}],
    "gap": "Apache Guacamole covers a useful remote-access foundation, but WorkSpaces' managed desktop lifecycle, bundles, images, directories, pools, billing, protocols, quotas and AWS operations remain distinct.",
    "verdict": "Partial. Guacamole is a practical open-source foundation for browser-mediated remote desktop access, but full WorkSpaces equivalence requires separate desktop orchestration, image, identity, provisioning, scaling and managed-operation work.",
    "sources": ["https://aws.amazon.com/workspaces/", "https://docs.aws.amazon.com/workspaces/latest/adminguide/", "https://docs.aws.amazon.com/workspaces/latest/userguide/", "https://docs.aws.amazon.com/workspaces/latest/api/welcome.html", "https://docs.aws.amazon.com/cli/latest/reference/workspaces/", "https://github.com/apache/guacamole-server"]
  },
  {
    "id": "amazon-workspaces-applications",
    "company_id": "amazon_aws",
    "name": "Amazon WorkSpaces Applications",
    "product_type": "cloud_infrastructure",
    "categories": ["application-streaming", "desktop-as-a-service", "saas-conversion", "remote-access", "managed-service"],
    "official_url": "https://aws.amazon.com/workspaces/applications/",
    "status": "partial",
    "summary": "Amazon WorkSpaces Applications, formerly AppStream 2.0, is AWS's managed application-streaming service for delivering desktop applications and non-persistent sessions through browsers or clients.",
    "capabilities": ["Managed application and desktop streaming without application rewrites", "Image builders, app blocks, fleets and stacks", "Browser and native client access with encrypted pixel streaming", "Auto-scaling, multi-session and GPU-capable instance options", "User pools, SAML, streaming URLs, VPC networking and MCP access for agents"],
    "alternatives": [{"name":"Apache Guacamole","license":"Apache-2.0","url":"https://github.com/apache/guacamole-server","covers":"Open-source clientless browser gateway for RDP, VNC and SSH sessions.","note":"Provides browser-based remote access, but not WorkSpaces Applications' image and app-block packaging, fleet autoscaling, multi-session, GPU streaming, authentication modes, MCP controls or AWS service plane."}],
    "gap": "Apache Guacamole covers a remote-access subset, but WorkSpaces Applications' application packaging, image builders, fleets, stacks, autoscaling, encrypted pixel protocol, GPU support, authentication and agent/MCP controls remain distinct.",
    "verdict": "Partial. Guacamole is useful for independent remote-access workflows, but full WorkSpaces Applications equivalence requires separate application streaming, packaging, fleet, scaling, protocol, identity and agent-control work.",
    "sources": ["https://aws.amazon.com/workspaces/applications/", "https://aws.amazon.com/workspaces/applications/faqs/", "https://docs.aws.amazon.com/appstream2/latest/developerguide/", "https://docs.aws.amazon.com/appstream2/latest/APIReference/", "https://docs.aws.amazon.com/cli/latest/reference/appstream/", "https://github.com/apache/guacamole-server"]
  },
  {
    "id": "amazon-workspaces-secure-browser",
    "company_id": "amazon_aws",
    "name": "Amazon WorkSpaces Secure Browser",
    "product_type": "cloud_infrastructure",
    "categories": ["secure-browser", "browser-isolation", "remote-access", "zero-trust", "managed-service", "sunset-notice"],
    "official_url": "https://aws.amazon.com/workspaces/secure-browser/",
    "status": "partial",
    "summary": "Amazon WorkSpaces Secure Browser is a managed remote-browser service that streams encrypted pixels from isolated cloud browser sessions and enforces identity, network and browser policies; AWS has announced it will not accept new customers starting October 29, 2026.",
    "capabilities": ["Managed remote browser sessions with encrypted pixel streaming", "URL filtering and browser policy enforcement", "VPC, network and IP access controls", "SAML identity providers and portal-based access", "Data protection, session logging, user controls and CloudTrail integration"],
    "alternatives": [{"name":"Apache Guacamole","license":"Apache-2.0","url":"https://github.com/apache/guacamole-server","covers":"Open-source browser-based gateway for remote desktop protocols and isolated sessions.","note":"Provides remote-access primitives, but not WorkSpaces Secure Browser's disposable browser sessions, Chrome policy enforcement, pixel isolation, portal/IdP integration, data-protection controls or AWS service plane."}],
    "gap": "Apache Guacamole covers a remote-access subset, but Secure Browser's disposable cloud browser, browser policy, URL filtering, data protection, identity, portal, logging and managed operations remain distinct; AWS has also announced a new-customer closure date of October 29, 2026.",
    "verdict": "Partial. Guacamole can support an independent remote-access foundation, but full Secure Browser equivalence requires browser isolation, policy enforcement, data-protection, identity, portal and managed-operation work. The sunset notice must remain visible.",
    "sources": ["https://aws.amazon.com/workspaces/secure-browser/", "https://aws.amazon.com/workspaces/secure-browser/faqs/", "https://docs.aws.amazon.com/workspaces-web/latest/adminguide/", "https://docs.aws.amazon.com/workspaces-web/latest/APIReference/", "https://docs.aws.amazon.com/cli/latest/reference/workspaces-web/", "https://github.com/apache/guacamole-server"]
  },
  {
    "id": "aws-amplify",
    "company_id": "amazon_aws",
    "name": "AWS Amplify",
    "product_type": "developer_tool",
    "categories": ["full-stack", "web", "mobile", "hosting", "authentication", "serverless"],
    "official_url": "https://aws.amazon.com/amplify/",
    "status": "partial",
    "summary": "AWS Amplify is a set of tools, libraries, UI components, backend-building workflows and managed hosting for full-stack web and mobile applications powered by AWS.",
    "capabilities": ["Full-stack TypeScript development for web and mobile", "Authentication, authorization, data, storage and functions", "GraphQL and REST backend integration", "Amplify Hosting with Git-based CI/CD", "Amplify Studio, CLI, libraries, UI components and CDK extensibility"],
    "alternatives": [{"name":"Appwrite","license":"BSD-3-Clause","url":"https://github.com/appwrite/appwrite","covers":"Open-source backend-as-a-service with authentication, databases, storage, functions and web APIs for application development.","note":"Covers a broad backend foundation, but not Amplify's AWS-native resource generation, CDK integration, hosting, frontend libraries, mobile tooling, Studio or AWS deployment plane."}],
    "gap": "Appwrite covers authentication, databases, storage and functions, but Amplify's AWS-native provisioning, CDK, hosting, frontend/mobile libraries, Studio, CI/CD and managed AWS integration remain distinct.",
    "verdict": "Partial. Appwrite is a credible open-source full-stack backend foundation, but full Amplify equivalence requires separate frontend tooling, mobile libraries, AWS resource generation, hosting and deployment integration.",
    "sources": ["https://aws.amazon.com/amplify/", "https://aws.amazon.com/documentation-overview/amplify/", "https://docs.amplify.aws/", "https://docs.aws.amazon.com/amplify/", "https://github.com/aws-amplify/amplify-cli", "https://github.com/appwrite/appwrite"]
  },
  {
    "id": "aws-app-mesh",
    "company_id": "amazon_aws",
    "name": "AWS App Mesh",
    "product_type": "cloud_infrastructure",
    "categories": ["service-mesh", "microservices", "envoy", "networking", "observability", "discontinued"],
    "official_url": "https://aws.amazon.com/app-mesh/",
    "status": "pending",
    "summary": "AWS App Mesh was an Envoy-based managed service mesh for microservices on ECS, EKS, Kubernetes and EC2. AWS discontinued support on September 30, 2026 and directs migrations toward Amazon VPC Lattice or ECS Service Connect.",
    "capabilities": ["Envoy-based service mesh control plane", "Virtual nodes, virtual routers, routes and virtual services", "Traffic shifting, retries, timeouts and circuit breakers", "mTLS, tracing and telemetry integrations", "ECS, EKS, Kubernetes and EC2 integration"],
    "alternatives": [{"name":"Istio","license":"Apache-2.0","url":"https://github.com/istio/istio","covers":"Open-source service mesh with Envoy data plane, traffic management, security, telemetry and Kubernetes integration.","note":"Provides a strong mesh foundation, but not App Mesh's historical AWS control plane, IAM, ECS/EC2 integration, quotas, regional service behavior or migration path."}],
    "gap": "Istio covers the open service-mesh and Envoy capabilities, but App Mesh's AWS control plane, resource APIs, IAM, ECS/EC2 integrations and historical managed behavior remain distinct. The AWS service is discontinued.",
    "verdict": "Retired. Preserve this entry for catalog completeness and migration research; do not recommend implementing a new App Mesh-compatible service. Use Istio or AWS's documented successor paths for new work.",
    "sources": ["https://aws.amazon.com/app-mesh/", "https://docs.aws.amazon.com/app-mesh/latest/userguide/", "https://docs.aws.amazon.com/app-mesh/latest/APIReference/", "https://docs.aws.amazon.com/cli/latest/reference/appmesh/", "https://aws.amazon.com/blogs/containers/migrate-amazon-ecs-workloads-from-aws-app-mesh-to-amazon-vpc-lattice/", "https://github.com/istio/istio"]
  },
  {
    "id": "aws-app-runner",
    "company_id": "amazon_aws",
    "name": "AWS App Runner",
    "product_type": "cloud_infrastructure",
    "categories": ["application-platform", "containers", "paas", "deployment", "web-applications", "restricted-onboarding"],
    "official_url": "https://aws.amazon.com/apprunner/",
    "status": "partial",
    "summary": "AWS App Runner deploys source code or container images as managed, scalable web services with automatic builds, deployments, load balancing and operations. AWS closed App Runner to new customers on March 31, 2026 and recommends ECS Express Mode for new migrations.",
    "capabilities": ["Source-to-service deployment", "Container image deployment", "Automatic builds and deployments", "Managed scaling, load balancing and encryption", "VPC and CloudWatch integrations"],
    "alternatives": [{"name":"Coolify","license":"Apache-2.0","url":"https://github.com/coollabsio/coolify","covers":"Self-hostable PaaS for deploying applications and databases from repositories or container images with managed domains, TLS and deployment workflows.","note":"Covers self-hosted application deployment, but not App Runner's AWS-managed control plane, IAM, regional service behavior, built-in AWS integrations or operational guarantees."}],
    "gap": "Coolify provides a credible self-hosted PaaS workflow, but it does not reproduce App Runner's AWS control plane, managed runtimes, IAM, VPC behavior, CloudWatch integration, scaling semantics or AWS-native deployment surface.",
    "verdict": "Partial. Coolify is a useful open-source deployment alternative for a self-hosted build, while AWS App Runner remains relevant for historical compatibility and existing-customer migration research; AWS recommends ECS Express Mode for new customers.",
    "sources": ["https://aws.amazon.com/apprunner/", "https://docs.aws.amazon.com/apprunner/", "https://docs.aws.amazon.com/apprunner/latest/api/", "https://docs.aws.amazon.com/cli/latest/reference/apprunner/", "https://docs.aws.amazon.com/apprunner/latest/dg/apprunner-availability-change.html", "https://github.com/coollabsio/coolify"]
  },
  {
    "id": "aws-app2container",
    "company_id": "amazon_aws",
    "name": "AWS App2Container",
    "product_type": "developer_tool",
    "categories": ["application-modernization", "containers", "migration", "cli", "dotnet", "java"],
    "official_url": "https://aws.amazon.com/app2container/",
    "status": "partial",
    "summary": "AWS App2Container is a command-line tool that inventories and analyzes legacy applications, generates container images and deployment artifacts, and supports migration to Amazon ECS, EKS and App Runner.",
    "capabilities": ["Application inventory and dependency analysis", "Dockerfile and OCI image generation", "Artifact extraction and transformation", "ECS, EKS, App Runner and pipeline artifact generation", "Initialization, analyze, transform and deploy CLI phases"],
    "alternatives": [{"name":"Konveyor Tackle","license":"Apache-2.0","url":"https://github.com/konveyor/tackle2-hub","covers":"Open-source application modernization and migration platform for inventory, assessment and planning across application portfolios.","note":"Covers portfolio assessment and modernization planning, but not App2Container's exact CLI, container image generation, AWS deployment artifacts or supported runtime behavior."}],
    "gap": "Konveyor Tackle covers open modernization assessment and planning, but does not reproduce App2Container's application-server inventory, Dockerfile/image generation, AWS deployment templates, IAM integrations or CLI state machine.",
    "verdict": "Partial. Konveyor Tackle is a credible open-source modernization foundation, but an App2Container-equivalent implementation requires separate inventory agents, container build logic, runtime-specific dependency analysis and AWS deployment integrations.",
    "sources": ["https://aws.amazon.com/app2container/", "https://docs.aws.amazon.com/app2container/", "https://docs.aws.amazon.com/app2container/latest/UserGuide/what-is-a2c.html", "https://docs.aws.amazon.com/app2container/latest/UserGuide/cmd-help.html", "https://docs.aws.amazon.com/app2container/latest/UserGuide/a2c-commands.html", "https://github.com/konveyor/tackle2-hub"]
  },
  {
    "id": "aws-appsync",
    "company_id": "amazon_aws",
    "name": "AWS AppSync",
    "product_type": "developer_tool",
    "categories": ["graphql", "api-management", "realtime", "websockets", "serverless", "data-integration"],
    "official_url": "https://aws.amazon.com/appsync/",
    "status": "partial",
    "summary": "AWS AppSync is a managed API service for GraphQL and real-time event APIs, connecting applications to data sources, events and AI models through AWS-managed control and data planes.",
    "capabilities": ["Managed GraphQL APIs and schemas", "Data source resolvers and integrations", "Subscriptions and real-time GraphQL data", "AppSync Events over secure WebSockets", "Authorization, caching, observability and AWS integrations"],
    "alternatives": [{"name":"Hasura GraphQL Engine","license":"Apache-2.0","url":"https://github.com/hasura/graphql-engine","covers":"Open-source GraphQL engine that exposes databases and services through GraphQL APIs with authorization, actions, subscriptions and event workflows.","note":"Covers a strong GraphQL foundation, but not AppSync's AWS control plane, managed integrations, AppSync Events, IAM semantics, regional behavior or operational guarantees."}],
    "gap": "Hasura covers GraphQL API generation, authorization, subscriptions and data integration, but does not reproduce AppSync's AWS resource model, service integrations, AppSync Events control plane, IAM behavior, caching or regional managed semantics.",
    "verdict": "Partial. Hasura is a credible open-source GraphQL foundation, while a functionally equivalent AppSync implementation still requires an independent managed control plane, AWS-compatible integrations, real-time event channels and documented deviation handling.",
    "sources": ["https://aws.amazon.com/appsync/", "https://docs.aws.amazon.com/appsync/", "https://docs.aws.amazon.com/appsync/latest/APIReference/", "https://docs.aws.amazon.com/cli/latest/reference/appsync/", "https://docs.aws.amazon.com/appsync/latest/APIReference/API_CreateApi.html", "https://github.com/hasura/graphql-engine"]
  },
  {
    "id": "aws-artifact",
    "company_id": "amazon_aws",
    "name": "AWS Artifact",
    "product_type": "security",
    "categories": ["compliance", "audit", "governance", "agreements", "security-documentation"],
    "official_url": "https://aws.amazon.com/artifact/",
    "status": "pending",
    "summary": "AWS Artifact is a self-service portal and API for downloading AWS security and compliance documents and reviewing, accepting and tracking AWS agreements.",
    "capabilities": ["Compliance report and certification downloads", "AWS agreement review and acceptance", "Agreement status across accounts and organizations", "IAM-controlled access to audit artifacts", "Compliance inquiry and artifact API operations"],
    "alternatives": [],
    "gap": "No open-source project was verified as an equivalent source of AWS's confidential compliance reports, certifications, agreements, account-scoped access controls or legal acceptance workflows.",
    "verdict": "No verified alternative. AWS Artifact depends on AWS-issued evidence, confidential agreements and account-specific authorization; evaluate governance and compliance platforms only as adjacent tools, not as equivalent substitutes.",
    "sources": ["https://aws.amazon.com/artifact/", "https://aws.amazon.com/artifact/faq/", "https://docs.aws.amazon.com/artifact/", "https://docs.aws.amazon.com/artifact/latest/APIReference/Welcome.html", "https://docs.aws.amazon.com/cli/latest/reference/artifact/"]
  },
  {
    "id": "aws-audit-manager",
    "company_id": "amazon_aws",
    "name": "AWS Audit Manager",
    "product_type": "security",
    "categories": ["compliance", "audit", "governance", "evidence-collection", "controls", "restricted-onboarding"],
    "official_url": "https://aws.amazon.com/audit-manager/",
    "status": "pending",
    "summary": "AWS Audit Manager continuously audits AWS usage, maps controls to compliance frameworks, and automatically collects and organizes evidence for assessments. AWS closed the service to new customers on April 30, 2026.",
    "capabilities": ["Continuous AWS usage auditing", "Prebuilt and custom compliance frameworks", "Controls and assessment management", "Automated evidence collection and organization", "Multi-account delegation and GRC integrations"],
    "alternatives": [],
    "gap": "No open-source project was verified as an equivalent of AWS Audit Manager's AWS-native evidence collection, managed controls, account integrations, frameworks, delegated administration and assessment workflows.",
    "verdict": "No verified alternative. Preserve the entry for existing-customer compatibility and compliance research; assess open GRC tools only as adjacent components and account for the restricted onboarding status.",
    "sources": ["https://aws.amazon.com/audit-manager/", "https://docs.aws.amazon.com/audit-manager/", "https://docs.aws.amazon.com/audit-manager/latest/APIReference/", "https://docs.aws.amazon.com/cli/latest/reference/auditmanager/", "https://aws.amazon.com/audit-manager/faqs/"]
  },
  {
    "id": "aws-auto-scaling",
    "company_id": "amazon_aws",
    "name": "AWS Auto Scaling",
    "product_type": "cloud_infrastructure",
    "categories": ["autoscaling", "capacity-management", "predictive-scaling", "resource-management", "cloud-operations"],
    "official_url": "https://aws.amazon.com/autoscaling/",
    "status": "partial",
    "summary": "AWS Auto Scaling provides scaling plans and unified target-tracking and predictive scaling across supported AWS resources, distinct from the underlying EC2 Auto Scaling and Application Auto Scaling services.",
    "capabilities": ["Unified scaling plans across AWS resources", "Target tracking policies", "Predictive and dynamic EC2 scaling", "Minimum and maximum capacity limits", "Forecast data and scaling-plan management"],
    "alternatives": [{"name":"KEDA","license":"Apache-2.0","url":"https://github.com/kedacore/keda","covers":"Open-source Kubernetes event-driven autoscaler supporting scale-to-zero and event-based workloads across many metrics and integrations.","note":"Covers workload autoscaling in Kubernetes, but not AWS scaling plans, EC2 capacity, AWS resource control planes, predictive forecasts or IAM semantics."}],
    "gap": "KEDA provides a strong open autoscaling foundation for Kubernetes, but does not reproduce AWS Auto Scaling's multi-service scaling plans, EC2 predictive scaling, AWS resource integrations, forecast APIs or managed control plane.",
    "verdict": "Partial. KEDA is a credible open-source autoscaling component, while AWS Auto Scaling equivalence requires an independent multi-resource planner, forecast engine, provider adapters and cloud-specific authorization semantics.",
    "sources": ["https://aws.amazon.com/autoscaling/", "https://docs.aws.amazon.com/autoscaling/", "https://docs.aws.amazon.com/autoscaling/plans/APIReference/Welcome.html", "https://docs.aws.amazon.com/cli/latest/reference/autoscaling-plans/", "https://aws.amazon.com/autoscaling/faqs/", "https://github.com/kedacore/keda"]
  },
  {
    "id": "aws-backup",
    "company_id": "amazon_aws",
    "name": "AWS Backup",
    "product_type": "cloud_infrastructure",
    "categories": ["backup", "disaster-recovery", "storage", "compliance", "restore", "data-protection"],
    "official_url": "https://aws.amazon.com/backup/",
    "status": "partial",
    "summary": "AWS Backup is a managed, centralized and policy-based backup service for AWS resources and selected on-premises virtual machines, with backup plans, vaults, restore workflows, reporting, testing and search.",
    "capabilities": ["Centralized backup policies across AWS services", "Backup plans, vaults, selections and recovery points", "Cross-account and cross-region workflows", "Restore testing, legal holds and air-gapped vaults", "Backup Gateway and backup search"],
    "alternatives": [{"name":"Restic","license":"BSD-2-Clause","url":"https://github.com/restic/restic","covers":"Open-source, encrypted, deduplicated backup program supporting local and cloud-compatible repositories with snapshots and restore operations.","note":"Covers portable backup and restore primitives, but not AWS Backup's multi-service resource adapters, account governance, vault controls, managed restore testing, compliance reporting or AWS control plane."}],
    "gap": "Restic provides portable encrypted backup primitives, but does not reproduce AWS Backup's managed resource integrations, cross-account governance, vault policies, restore testing, service-specific recovery semantics or AWS IAM control plane.",
    "verdict": "Partial. Restic is a strong open-source backup foundation, while an AWS Backup-equivalent implementation requires a multi-service adapter layer, policy engine, recovery-point model, governance controls and cloud-specific integrations.",
    "sources": ["https://aws.amazon.com/backup/", "https://docs.aws.amazon.com/aws-backup/", "https://docs.aws.amazon.com/aws-backup/latest/APIReference/", "https://docs.aws.amazon.com/cli/latest/reference/backup/", "https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-feature-availability.html", "https://github.com/restic/restic"]
  },
  {
    "id": "aws-batch",
    "company_id": "amazon_aws",
    "name": "AWS Batch",
    "product_type": "cloud_infrastructure",
    "categories": ["batch-computing", "job-scheduling", "containers", "high-performance-computing", "machine-learning", "analytics"],
    "official_url": "https://aws.amazon.com/batch/",
    "status": "partial",
    "summary": "AWS Batch is a managed batch-computing service that plans, schedules and runs containerized ML, simulation and analytics workloads across ECS, EKS, Fargate, EC2 and Spot capacity.",
    "capabilities": ["Managed batch queues and scheduling", "Compute environments across ECS, EKS, Fargate and EC2", "Containerized ML, simulation and analytics workloads", "Array jobs, dependencies, retries and fair-share scheduling", "Service jobs, quotas and consumable resources"],
    "alternatives": [{"name":"Slurm","license":"GPL-2.0","url":"https://github.com/SchedMD/slurm","covers":"Open-source workload manager and job scheduler for clusters, supporting queues, dependencies, resource allocation, fair-share and high-performance computing workloads.","note":"Covers batch scheduling and cluster resource management, but not AWS Batch's managed cloud provisioning, ECS/EKS/Fargate integrations, AWS IAM model or service-specific control plane."}],
    "gap": "Slurm provides mature open batch scheduling, but does not reproduce AWS Batch's managed compute environments, container integrations, cloud provisioning, service jobs, AWS quotas or IAM and regional semantics.",
    "verdict": "Partial. Slurm is a strong open-source scheduling foundation, while AWS Batch equivalence requires a managed cloud adapter layer, dynamic capacity provisioning, container orchestration integrations and AWS-specific authorization.",
    "sources": ["https://aws.amazon.com/batch/", "https://docs.aws.amazon.com/batch/", "https://docs.aws.amazon.com/batch/latest/APIReference/", "https://docs.aws.amazon.com/cli/latest/reference/batch/", "https://docs.aws.amazon.com/batch/latest/userguide/what-is-batch.html", "https://github.com/SchedMD/slurm"]
  },
  {
    "id": "aws-billing-conductor",
    "company_id": "amazon_aws",
    "name": "AWS Billing Conductor",
    "product_type": "business_software",
    "categories": ["billing", "chargeback", "showback", "cost-management", "pricing", "finops"],
    "official_url": "https://aws.amazon.com/aws-cost-management/aws-billing-conductor/",
    "status": "partial",
    "summary": "AWS Billing Conductor creates a customizable second view of AWS billing data for showback and chargeback, with billing groups, pricing plans, pricing rules, credits, fees and custom line items.",
    "capabilities": ["Custom billing groups and pricing plans", "Pricing rules, credits, fees and custom line items", "Showback and chargeback reporting", "Account associations across AWS Organizations", "Custom cost visibility without changing the AWS invoice"],
    "alternatives": [{"name":"Lago","license":"AGPL-3.0","url":"https://github.com/getlago/lago","covers":"Open-source usage-based billing platform with meters, pricing models, invoices, credits, subscriptions and customer billing workflows.","note":"Covers product and usage billing, but not AWS Organizations account grouping, AWS CUR semantics, AWS pricing rules or the Billing Conductor management-account view."}],
    "gap": "Lago provides an open usage-billing foundation, but does not reproduce AWS Billing Conductor's AWS account associations, pricing-plan model, custom line items, Organization semantics, AWS cost data or billing-console integration.",
    "verdict": "Partial. Lago is a useful open-source billing foundation, while Billing Conductor equivalence requires AWS cost ingestion, account grouping, rate transformation, chargeback reporting and provider-specific authorization.",
    "sources": ["https://aws.amazon.com/aws-cost-management/aws-billing-conductor/", "https://docs.aws.amazon.com/billingconductor/latest/userguide/what-is-billingconductor.html", "https://docs.aws.amazon.com/billingconductor/latest/APIReference/", "https://docs.aws.amazon.com/cli/latest/reference/billingconductor/", "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/", "https://github.com/getlago/lago"]
  },
  {
    "id": "aws-cloudformation",
    "company_id": "amazon_aws",
    "name": "AWS CloudFormation",
    "product_type": "developer_tool",
    "categories": ["infrastructure-as-code", "provisioning", "orchestration", "templates", "stacksets", "resource-management"],
    "official_url": "https://aws.amazon.com/cloudformation/",
    "status": "partial",
    "summary": "AWS CloudFormation is a declarative infrastructure-as-code service that provisions and manages AWS and third-party resources as stacks, with change sets, rollback, drift detection, StackSets, Registry extensions and Hooks.",
    "capabilities": ["Declarative AWS and third-party resource templates", "Stack create, update, rollback and delete lifecycle", "Change sets, drift detection and termination protection", "Cross-account and cross-region StackSets", "IaC Generator, Registry extensions and Hooks"],
    "alternatives": [{"name":"OpenTofu","license":"MPL-2.0","url":"https://github.com/opentofu/opentofu","covers":"Open-source infrastructure-as-code tool with declarative configuration, state, providers, plans and resource lifecycle management across cloud and infrastructure APIs.","note":"Covers a broad IaC foundation, but not CloudFormation's stack semantics, AWS resource handlers, StackSets, Registry, Hooks, rollback behavior or AWS control-plane integration."}],
    "gap": "OpenTofu provides a strong open IaC foundation, but does not reproduce CloudFormation's stack and change-set model, AWS resource type handlers, StackSets, Registry extensions, Hooks, drift semantics or rollback behavior.",
    "verdict": "Partial. OpenTofu is a credible open-source IaC foundation, while CloudFormation equivalence requires a provider/resource registry, stack engine, change-set planner, rollback coordinator and AWS-specific control-plane semantics.",
    "sources": ["https://aws.amazon.com/cloudformation/", "https://docs.aws.amazon.com/cloudformation/", "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/", "https://docs.aws.amazon.com/cli/latest/reference/cloudformation/", "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/WhatIsCloudFormation.html", "https://github.com/opentofu/opentofu"]
  },
  {
    "id": "aws-cloud-map",
    "company_id": "amazon_aws",
    "name": "AWS Cloud Map",
    "product_type": "networking",
    "categories": ["service-discovery", "dns", "registry", "health-checks", "networking", "microservices"],
    "official_url": "https://aws.amazon.com/cloud-map/",
    "status": "partial",
    "summary": "AWS Cloud Map is a managed service-discovery registry for naming and discovering AWS and application resources through DNS or API calls, with namespaces, services, instances, health checks and attributes.",
    "capabilities": ["Cloud resource naming and service discovery", "DNS and API-based instance discovery", "Namespaces, services and registered instances", "Health checks and custom attributes", "Cross-account namespace sharing and IAM integration"],
    "alternatives": [{"name":"Netflix Eureka","license":"Apache-2.0","url":"https://github.com/Netflix/eureka","covers":"Open-source service registry and discovery system for locating services and handling registration and heartbeats in distributed applications.","note":"Covers service registration and discovery, but not Cloud Map's Route 53 DNS integration, AWS resource naming, namespaces, IAM, health-check semantics or regional managed control plane."}],
    "gap": "Netflix Eureka provides open service registration and discovery, but does not reproduce Cloud Map's DNS and API surfaces, AWS resource integrations, namespaces, cross-account sharing, IAM or managed health-check behavior.",
    "verdict": "Partial. Eureka is a credible open service-registry foundation, while Cloud Map equivalence requires DNS integration, resource adapters, namespace governance, health checks and AWS-specific authorization and regional behavior.",
    "sources": ["https://aws.amazon.com/cloud-map/", "https://docs.aws.amazon.com/cloud-map/", "https://docs.aws.amazon.com/cloud-map/latest/api/", "https://docs.aws.amazon.com/cli/latest/reference/servicediscovery/", "https://docs.aws.amazon.com/cloud-map/latest/dg/working-with-services.html", "https://github.com/Netflix/eureka"]
  },
  {
    "id": "aws-cloud-wan",
    "company_id": "amazon_aws",
    "name": "AWS Cloud WAN",
    "product_type": "networking",
    "categories": ["wide-area-network", "sd-wan", "global-networking", "network-segmentation", "transit-gateway", "network-management"],
    "official_url": "https://aws.amazon.com/cloud-wan/",
    "status": "partial",
    "summary": "AWS Cloud WAN is a managed wide-area networking service for building, managing and monitoring a unified global network connecting VPCs, branches, data centers, VPNs, SD-WAN and Transit Gateways.",
    "capabilities": ["Managed global WAN and core network", "Central network policies and segmentation", "Multi-region VPC, branch, data-center and VPN connectivity", "Transit Gateway and SD-WAN integration", "Topology dashboard and network health visibility"],
    "alternatives": [{"name":"OpenZiti","license":"Apache-2.0","url":"https://github.com/openziti/ziti","covers":"Open-source zero-trust overlay networking platform for connecting services, devices and identities across networks without exposing them directly to the public internet.","note":"Covers secure overlay connectivity, but not Cloud WAN's AWS core-network model, policy-driven regional segmentation, Transit Gateway integration, branch attachments or managed topology dashboard."}],
    "gap": "OpenZiti provides an open secure-overlay foundation, but does not reproduce Cloud WAN's AWS global network, core edges, policy model, segmentation, Transit Gateway and SD-WAN integrations, quotas or managed operations.",
    "verdict": "Partial. OpenZiti is a credible open networking foundation, while Cloud WAN equivalence requires a global network control plane, regional edge orchestration, attachment adapters, policy reconciliation and provider-specific routing semantics.",
    "sources": ["https://aws.amazon.com/cloud-wan/", "https://docs.aws.amazon.com/network-manager/latest/cloudwan/what-is-cloudwan.html", "https://docs.aws.amazon.com/network-manager/latest/cloudwan/", "https://docs.aws.amazon.com/general/latest/gr/cloudwan.html", "https://docs.aws.amazon.com/network-manager/latest/cloudwan/cloudwan-getting-started.html", "https://github.com/openziti/ziti"]
  },
  {
    "id": "microsoft-edge",
    "company_id": "microsoft",
    "name": "Microsoft Edge",
    "product_type": "browser",
    "categories": ["browser", "web_platform", "security", "productivity"],
    "official_url": "https://www.microsoft.com/en-us/edge",
    "status": "partial",
    "summary": "Microsoft Edge is a Chromium-based browser distributed across desktop and mobile platforms, with profiles, web compatibility, security controls, enterprise policy management and Microsoft-integrated features.",
    "capabilities": ["Cross-platform browser distribution", "Profiles and work/personal context separation", "Browser security, privacy and policy controls", "Web compatibility and extension ecosystem", "Enterprise deployment and update management"],
    "alternatives": [
      {"name":"Chromium","license":"BSD-3-Clause and component licenses","url":"https://www.chromium.org/","covers":"Open browser foundation with Chromium's multi-process architecture, web platform and extension model.","note":"Closest open foundation, but it does not reproduce Edge branding, Microsoft integrations, enterprise defaults or every Edge-specific service."},
      {"name":"Firefox","license":"MPL-2.0","url":"https://www.mozilla.org/firefox/","covers":"Independent browser with its own rendering engine, profiles, privacy controls and extension ecosystem.","note":"Provides a complete browser alternative but differs in engine, extension APIs, policy model and Microsoft integrations."},
      {"name":"Brave","license":"MPL-2.0 and component licenses","url":"https://brave.com/","covers":"Chromium-based browser distribution with privacy and blocking features.","note":"Shares a Chromium foundation but does not reproduce Edge enterprise controls, Microsoft account integration or exact behavior."},
      {"name":"LibreWolf","license":"MPL-2.0 and component licenses","url":"https://librewolf.net/","covers":"Privacy-oriented Firefox distribution with hardened defaults.","note":"Useful for privacy-focused browsing, but it has a different engine and does not provide Edge compatibility or enterprise integration."}
    ],
    "gap": "Open alternatives cover browser foundations or distributions, but none reproduces Microsoft Edge's combination of Chromium compatibility, Microsoft services, work/personal profile separation, enterprise policy surface and servicing model.",
    "verdict": "Partial. Chromium is the closest open foundation; Firefox, Brave and LibreWolf are viable browser alternatives, but Edge-specific integrations and enterprise behavior remain provider-specific.",
    "sources": ["https://www.microsoft.com/en-us/edge", "https://explore.microsoft.com/en-us/edge/features", "https://learn.microsoft.com/en-us/deployedge/", "https://learn.microsoft.com/en-us/deployedge/microsoft-edge-for-business", "https://learn.microsoft.com/en-us/lifecycle/products/microsoft-edge", "https://www.chromium.org/", "https://www.mozilla.org/firefox/", "https://brave.com/", "https://librewolf.net/"]
  },
  {
    "id": "microsoft-onedrive",
    "company_id": "microsoft",
    "name": "Microsoft OneDrive",
    "product_type": "storage",
    "categories": ["storage", "file-sharing", "sync", "collaboration"],
    "official_url": "https://www.microsoft.com/en-us/microsoft-365/onedrive/online-cloud-storage",
    "status": "partial",
    "summary": "Microsoft OneDrive is a cloud file-storage, sharing and synchronization product integrated with Microsoft 365, Microsoft Graph and SharePoint Online.",
    "capabilities": ["Cloud file storage and folders", "Sharing links and permissions", "Desktop sync and offline access", "Drive and DriveItem APIs through Microsoft Graph", "File picker, file handlers, delta and webhook integrations"],
    "alternatives": [
      {"name":"Nextcloud","license":"AGPL-3.0","url":"https://nextcloud.com/","covers":"Self-hosted file storage, synchronization, sharing and collaboration platform.","note":"Covers core storage and collaboration workflows, but not Microsoft's Graph resource model, SharePoint relationship, tenant ecosystem or OneDrive client behavior."},
      {"name":"ownCloud","license":"AGPL-3.0 and enterprise components","url":"https://owncloud.com/","covers":"Self-hosted file synchronization, sharing and content collaboration.","note":"Provides a credible self-hosted foundation but differs in APIs, identity, integrations, operations and enterprise feature boundaries."},
      {"name":"Seafile","license":"AGPL-3.0 and enterprise components","url":"https://www.seafile.com/","covers":"File synchronization, libraries, sharing and collaboration with self-hosted deployment options.","note":"Covers storage and sync but not OneDrive's Microsoft Graph, SharePoint, Office and account integration."},
      {"name":"Pydio Cells","license":"Apache-2.0 and enterprise components","url":"https://pydio.com/","covers":"Self-hosted content collaboration and file-sharing platform.","note":"Useful for controlled content collaboration, but not a drop-in replacement for OneDrive's APIs, clients or Microsoft 365 ecosystem."}
    ],
    "gap": "Open alternatives cover storage, sharing and synchronization, but none reproduces OneDrive's Microsoft Graph resource model, SharePoint relationship, Office integration, tenant controls, account ecosystem and client behavior.",
    "verdict": "Partial. Nextcloud, ownCloud, Seafile and Pydio Cells are credible open/self-hosted foundations, while OneDrive-specific integration and enterprise semantics remain provider-specific.",
    "sources": ["https://www.microsoft.com/en-us/microsoft-365/onedrive/online-cloud-storage", "https://learn.microsoft.com/en-us/onedrive", "https://learn.microsoft.com/en-us/graph/api/resources/onedrive", "https://learn.microsoft.com/en-us/onedrive/developer/", "https://support.microsoft.com/en-us/onedrive/store-your-work-files-on-onedrive", "https://nextcloud.com/", "https://owncloud.com/", "https://www.seafile.com/", "https://pydio.com/"]
  },
  {
    "id": "meta-account",
    "company_id": "meta",
    "name": "Meta Account",
    "product_type": "consumer_application",
    "categories": ["identity", "account-management", "security", "connected-experiences"],
    "official_url": "https://www.meta.com/account/",
    "status": "partial",
    "summary": "Meta Account is Meta's centralized identity and account-management service for connected apps and devices.",
    "capabilities": ["Connected login and account management", "Shared contact, password, MFA and preference settings", "Passkeys and security recommendations", "Connected app and device management"],
    "alternatives": [
      {"name":"Keycloak","license":"Apache-2.0","url":"https://www.keycloak.org/","covers":"Open-source identity and access-management server with federation and user management.","note":"Provides identity foundations but not Meta's connected app graph, consumer distribution or device ecosystem."},
      {"name":"Authentik","license":"Open-core; community components under permissive licenses","url":"https://goauthentik.io/","covers":"Open-source identity provider and access platform.","note":"Useful for self-hosted identity workflows, but not a replacement for Meta-specific account and app semantics."},
      {"name":"Zitadel","license":"AGPL-3.0 and enterprise components","url":"https://zitadel.com/","covers":"Open-source identity infrastructure for authentication and user management.","note":"Covers independent identity infrastructure but not Meta's account graph, rollout or proprietary security systems."}
    ],
    "gap": "Open alternatives provide identity foundations, but none reproduces Meta Account's connected app graph, device ecosystem, consumer distribution, security systems or Meta-specific settings semantics.",
    "verdict": "Partial. Keycloak, Authentik and Zitadel are credible foundations for bounded identity implementations, while Meta Account-specific ecosystem behavior remains provider-specific.",
    "sources": ["https://www.meta.com/technologies/", "https://www.meta.com/account/", "https://www.meta.com/help/accounts-center/", "https://about.fb.com/news/2026/04/meta-account/", "https://www.keycloak.org/", "https://goauthentik.io/", "https://zitadel.com/"]
  },
  {
    "id": "meta-verified",
    "company_id": "meta",
    "name": "Meta Verified",
    "product_type": "consumer_subscription",
    "categories": ["identity", "verification", "creator-tools", "support", "impersonation-protection"],
    "official_url": "https://www.meta.com/meta-verified/",
    "status": "partial",
    "summary": "Meta Verified is Meta's subscription service for eligible creator and business profiles, with verification, impersonation protection and support features.",
    "capabilities": ["Subscription plans for eligible profiles", "Verified badge", "Impersonation protection", "Enhanced support", "Profile, discovery and engagement benefits"],
    "alternatives": [
      {"name":"Keycloak","license":"Apache-2.0","url":"https://www.keycloak.org/","covers":"Open-source identity and access-management server.","note":"Provides identity foundations but not Meta's subscription, platform verification or support operations."},
      {"name":"Authentik","license":"Open-core; community components under permissive licenses","url":"https://goauthentik.io/","covers":"Open-source identity provider and access platform.","note":"Useful for self-hosted identity workflows, but not a replacement for Meta-specific verification and creator benefits."},
      {"name":"Zitadel","license":"AGPL-3.0 and enterprise components","url":"https://zitadel.com/","covers":"Open-source identity infrastructure for authentication and user management.","note":"Covers independent identity infrastructure but not Meta Verified's billing, abuse and discovery ecosystem."}
    ],
    "gap": "Open alternatives provide identity foundations, but none reproduces Meta Verified's subscription billing, platform verification, impersonation monitoring, support operations or creator-discovery ecosystem.",
    "verdict": "Partial. Keycloak, Authentik and Zitadel are credible foundations for bounded identity implementations, while Meta Verified-specific subscription and platform semantics remain provider-specific.",
    "sources": ["https://www.meta.com/technologies/", "https://www.meta.com/meta-verified/", "https://www.keycloak.org/", "https://goauthentik.io/", "https://zitadel.com/"]
  },
  {
    "id": "meta-one",
    "company_id": "meta",
    "name": "Meta One",
    "product_type": "consumer_subscription",
    "categories": ["subscription", "creator-tools", "social", "ai", "analytics"],
    "official_url": "https://www.meta.com/meta-one-plans/",
    "status": "partial",
    "summary": "Meta One is Meta's subscription service with personal, creator and business plans that add app features, AI usage and professional tools.",
    "capabilities": ["Personal, creator and business plans", "App-specific social features", "More AI media-generation usage", "Creator scheduling and analytics", "Shared access, verification and support"],
    "alternatives": [
      {"name":"WordPress","license":"GPL-2.0-or-later","url":"https://wordpress.org/","covers":"Open publishing platform with plugins, memberships and user roles.","note":"Covers publishing and community foundations but not Meta's app entitlements, social graph or bundled AI usage."},
      {"name":"Ghost","license":"MIT for the core; separate terms for hosted services","url":"https://ghost.org/","covers":"Open publishing and membership platform.","note":"Useful for creator publishing and memberships, but not Meta's cross-app distribution, analytics or AI services."},
      {"name":"Matomo","license":"GPL-3.0","url":"https://matomo.org/","covers":"Open analytics platform for owned web measurement.","note":"Covers analytics only and not Meta One's subscription, social, creator or AI features."}
    ],
    "gap": "Open alternatives cover publishing, membership and analytics pieces, but none reproduces Meta One's bundled app entitlements, AI usage, social graph, account system or platform distribution.",
    "verdict": "Partial. WordPress, Ghost and Matomo are credible foundations for bounded creator and analytics workflows, while Meta One-specific bundle and platform semantics remain provider-specific.",
    "sources": ["https://www.meta.com/technologies/", "https://www.meta.com/meta-one-plans/", "https://www.meta.com/meta-verified/", "https://wordpress.org/", "https://ghost.org/", "https://matomo.org/"]
  },
  {
    "id": "meta-muse",
    "company_id": "meta",
    "name": "Muse",
    "product_type": "ai_agent_platform",
    "categories": ["ai-agent", "computer-use", "browser-automation", "personal-assistant", "workflow-automation"],
    "official_url": "https://muse.ai/",
    "status": "partial",
    "summary": "Muse is Meta's personal AI agent surface for goal execution, browser-based computer use and connected workflows.",
    "capabilities": ["Goal-oriented personal assistance", "Persistent isolated browser computer", "Mobile, Mac and WhatsApp interaction", "Approval gates and audit trails", "Connected apps and workflow automation"],
    "alternatives": [
      {"name":"Open Interpreter","license":"AGPL-3.0","url":"https://github.com/OpenInterpreter/open-interpreter","covers":"Open-source natural-language computer interface for running local code and workflows.","note":"Provides an agent execution foundation, but not Muse's hosted browser computer, Meta distribution, credential store or product-specific safety controls."},
      {"name":"OpenHands","license":"MIT","url":"https://github.com/All-Hands-AI/OpenHands","covers":"Open-source software-development agent platform with tool use and isolated execution.","note":"Covers agent orchestration and tool execution, but not Muse's consumer assistant surface, connected apps or hosted personal workflows."},
      {"name":"Browser Use","license":"MIT","url":"https://github.com/browser-use/browser-use","covers":"Open-source browser automation library for browser-controlling agents.","note":"Covers browser control, but not Muse's broader personal-agent experience, approval model, audit trail or connected-app platform."}
    ],
    "gap": "Open alternatives cover agent execution and browser automation, but none reproduces Muse's hosted personal-agent surface, connected applications, credential handling, approval workflows or Meta distribution.",
    "verdict": "Partial. Open Interpreter, OpenHands and Browser Use are credible foundations for bounded agent and browser workflows, while Muse-specific hosted, safety and ecosystem semantics remain provider-specific.",
    "sources": ["https://www.meta.com/technologies/", "https://muse.ai/", "https://introducing.muse.ai/", "https://security.muse.ai/", "https://github.com/OpenInterpreter/open-interpreter", "https://github.com/All-Hands-AI/OpenHands", "https://github.com/browser-use/browser-use"]
  },
];
