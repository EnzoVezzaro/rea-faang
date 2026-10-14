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
      'https://www.reddit.com/r/selfhosted/comments/19eqv5k/google_search_self_hosted_alternative/',
      'https://homelabcompass.com/alternatives/self-hosted-search-engine',
      'https://www.xda-developers.com/self-hosted-search-engine-pros-cons/',
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
        name: 'Llama / Mistral / Qwen / Gemma',
        license: 'mixed (mostly open weights)',
        url: 'https://huggingface.co/blog/daya-shankar/open-source-llm-models-to-run-locally',
        covers: 'Capable open-weight model families you can run yourself.',
        note: 'Many are open-weight under custom licences, not OSI open source.',
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
      'https://huggingface.co/blog/daya-shankar/open-source-llm-models-to-run-locally',
      'https://www.instaclustr.com/education/open-source-ai/top-7-open-source-llms-for-2026/',
      'https://github.com/12britz/awesome-free-models',
    ],
  },
  {
    id: 'gmail',
    company_id: 'google',
    name: 'Gmail',
    product_type: 'consumer_application',
    categories: ['productivity'],
    official_url: 'https://mail.google.com/',
    status: 'available',
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
        license: 'MIT',
        url: 'https://github.com/Mindbaz/awesome-opensource-email',
        covers: 'Modern all-in-one mail servers.',
        note: 'Newer entrants in the same space.',
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
      'https://opensource.com/alternatives/gmail',
      'https://github.com/Mindbaz/awesome-opensource-email',
    ],
  },
  {
    id: 'google-maps',
    company_id: 'google',
    name: 'Google Maps',
    product_type: 'consumer_application',
    categories: ['search', 'discovery'],
    official_url: 'https://maps.google.com/',
    status: 'available',
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
      'https://github.com/organicmaps/organicmaps',
      'https://tuta.com/blog/google-maps-alternatives-foss',
      'https://www.xda-developers.com/organic-maps-open-source-google-maps-alternative-delivers/',
    ],
  },
  {
    id: 'google-chrome',
    company_id: 'google',
    name: 'Google Chrome',
    product_type: 'browser',
    categories: ['browser'],
    official_url: 'https://www.google.com/chrome/',
    status: 'available',
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
      'https://opensource.com/article/19/7/open-source-browsers',
      'https://www.xda-developers.com/ditched-chrome-years-5-open-source-browsers-recommend-instead/',
      'https://brave.com/',
    ],
  },
  {
    id: 'android',
    company_id: 'google',
    name: 'Android',
    product_type: 'operating_system',
    categories: ['operating_system'],
    official_url: 'https://www.android.com/',
    status: 'available',
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
      'Available. Android’s core is open source and several independent distributions replace the proprietary layer.',
    sources: [
      'https://grapheneos.org/',
      'https://lineageos.org/',
      'https://kevinboone.me/lineage-eos-graphene.html',
    ],
  },
  {
    id: 'youtube',
    company_id: 'google',
    name: 'YouTube',
    product_type: 'media',
    categories: ['media'],
    official_url: 'https://www.youtube.com/',
    status: 'available',
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
    gap: 'The software is replaceable; the licensed content library and creator monetisation are not.',
    verdict:
      'Available. PeerTube is a fully open hosting platform; the gap is content and network effects rather than code.',
    sources: [
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
    status: 'available',
    summary:
      'Google Cloud is Google’s public cloud: compute, storage, networking, data, ML and managed services on a global footprint.',
    capabilities: [
      'IaaS compute, block/object storage, networking',
      'Managed databases, data and ML services',
      'Global regions and managed control plane',
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
      'https://www.openstack.org/',
      'https://www.amazee.io/blog/post/best-open-source-cloud-providers/',
      'https://openalternative.co/alternatives/google-cloud',
    ],
  },
  {
    id: 'google-firebase',
    company_id: 'google',
    name: 'Firebase',
    product_type: 'developer_tool',
    categories: ['developer_tool'],
    official_url: 'https://firebase.google.com/',
    status: 'available',
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
    gap: 'Firebase’s managed scale, its proprietary SDK surface and vendor-hosted extensions have no single open equivalent.',
    verdict: 'Available. Multiple mature, self-hostable backends cover the core.',
    sources: [
      'https://www.nocobase.com/en/blog/open-source-firebase-alternatives',
      'https://northflank.com/blog/appwrite-alternatives',
      'https://supabase.com/',
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
      'https://en.wikipedia.org/wiki/TensorFlow',
      'https://softwaremill.com/ml-engineer-comparison-of-pytorch-tensorflow-jax-and-flax/',
      'https://www.articsledge.com/post/tensorflow',
    ],
  },
  {
    id: 'google-workspace',
    company_id: 'google',
    name: 'Google Workspace',
    product_type: 'productivity_application',
    categories: ['productivity'],
    official_url: 'https://workspace.google.com/',
    status: 'available',
    summary:
      'Google Workspace bundles Gmail, Calendar, Drive, Docs, Sheets, Slides, Meet and Chat into one hosted collaboration suite.',
    capabilities: [
      'File sync and share (Drive)',
      'Real-time collaborative docs, sheets, slides',
      'Email, calendar, video meetings, chat',
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
      'https://nextcloud.com/',
      'https://opensource.com/article/22/7/open-source-collabora-online',
      'https://budgethomelab.com/articles/open-source-google-workspace-alternatives/',
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
      'Netflix Streaming is a subscription video-on-demand service: a licensed and original content library delivered through adaptive streaming, recommendations and DRM.',
    capabilities: [
      'Adaptive-bitrate streaming at scale',
      'Personalised recommendations',
      'Profiles, parental controls, offline downloads',
      'DRM (Widevine/FairPlay/PlayReady)',
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
    gap: 'The licensed content library, the recommendation model and the DRM/content-licensing arrangements cannot be open-sourced.',
    verdict:
      'Partial. The streaming software is open source (Jellyfin); the catalogue, recommendations and rights are pending and will remain so.',
    sources: [
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
    status: 'available',
    summary:
      'WhatsApp is Meta’s end-to-end encrypted messaging app: one-to-one and group chat, calls, media and status, built on a proprietary centralised service.',
    capabilities: [
      'End-to-end encrypted messaging and calls',
      'Group chats, media sharing, status',
      'Multi-device sync',
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
    gap: 'Network effects and the multi-billion-user contact graph are not reproducible; the protocol and clients are open.',
    verdict: 'Available. Federated and P2P open messengers cover the function.',
    sources: [
      'https://element.io/',
      'https://simplex.chat/',
      'https://eylenburg.github.io/im_comparison.htm',
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
      'Llama is Meta’s family of large language models, released as downloadable weights under the Meta Llama Community Licence (open weights, not an OSI licence).',
    capabilities: [
      'General-purpose text generation and reasoning',
      'Instruction-tuned and multimodal variants',
      'Self-hostable weights',
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
      'https://codetocloud.io/blog/open-source-llms-developers/',
      'https://www.reddit.com/r/LocalLLaMA/comments/1sqh6kk/stop_letting_vc_bros_gaslight_us_qwen_and_llama/',
      'https://onyx.app/insights/best-open-source-llms-2026',
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
    "summary": "Google Drive is Google's cloud storage and file-sync platform, bundled with Google Workspace and tied to its online editors.",
    "capabilities": [
      "Cloud file storage and sync",
      "Sharing and permissions",
      "Integration with Google Workspace editors"
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
      "https://nextcloud.com/",
      "https://en.wikipedia.org/wiki/Google_Drive"
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
      "Browser-based document editing",
      "Real-time co-authoring and comments",
      "Cloud storage and sharing"
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
      "https://www.onlyoffice.com/",
      "https://www.collaboraonline.com/"
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
      "Browser-based spreadsheet editing",
      "Real-time co-authoring",
      "Formulas, charts and pivot tables"
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
      "https://www.getgrist.com/",
      "https://www.onlyoffice.com/"
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
      "Browser-based video meetings",
      "Screen sharing and recording (paid tiers)",
      "Calendar integration"
    ],
    "alternatives": [
      {
        "name": "Jitsi Meet",
        "license": "Apache-2.0",
        "url": "https://jitsi.org/",
        "covers": "Self-hosted video conferencing with no account required.",
        "note": "Mature; deployed at scale."
      }
    ],
    "gap": "Core video conferencing is fully covered by Jitsi Meet; the remaining gaps are polish, scale guarantees and Workspace integration.",
    "verdict": "Available. Jitsi Meet covers the core function, is mature and self-hostable.",
    "sources": [
      "https://jitsi.org/",
      "https://en.wikipedia.org/wiki/Google_Meet"
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
      "Web calendar with sharing",
      "Invitations and scheduling",
      "CalDAV sync"
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
      }
    ],
    "gap": "Open calendaring is a solved problem via CalDAV; the missing pieces are Google's appointment-booking UX and integrations.",
    "verdict": "Available. Open calendaring is mature (Nextcloud Calendar, Radicale) via the CalDAV standard.",
    "sources": [
      "https://radicale.org/",
      "https://nextcloud.com/calendar/"
    ]
  },
  {
    "id": "google-photos",
    "company_id": "google",
    "name": "Google Photos",
    "product_type": "consumer_application",
    "categories": [
      "photo-management",
      "backup"
    ],
    "official_url": "https://photos.google.com/",
    "status": "partial",
    "summary": "Google Photos is Google's photo and video backup, organization and sharing service.",
    "capabilities": [
      "Automatic backup from devices",
      "Search and organization",
      "Sharing and albums"
    ],
    "alternatives": [
      {
        "name": "Immich",
        "license": "AGPL-3.0",
        "url": "https://immich.app/",
        "covers": "Self-hosted photo and video backup with mobile apps.",
        "note": "Fast-moving; verify parity per release."
      }
    ],
    "gap": "Immich covers backup, albums and search well; ML-powered search quality and unlimited-scale economics remain Google's edge.",
    "verdict": "Partial. A strong self-hosted alternative exists (Immich); search quality and mobile polish approach but do not match Google Photos.",
    "sources": [
      "https://immich.app/",
      "https://en.wikipedia.org/wiki/Google_Photos"
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
      "Aggregation across publishers",
      "Personalized feed",
      "Alerts and follow topics"
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
      }
    ],
    "gap": "RSS covers following sources; Google's editorial ranking and personalization have no equivalent.",
    "verdict": "Available for the core job (following sources): FreshRSS is a mature self-hosted news aggregator. The personalized ranking layer is not replicated.",
    "sources": [
      "https://freshrss.org/",
      "https://miniflux.net/"
    ]
  },
  {
    "id": "google-play",
    "company_id": "google",
    "name": "Google Play",
    "product_type": "consumer_application",
    "categories": [
      "app-store"
    ],
    "official_url": "https://play.google.com/",
    "status": "partial",
    "summary": "Google Play is Google's app store and digital distribution service for Android.",
    "capabilities": [
      "App discovery and distribution",
      "Automatic updates",
      "Billing"
    ],
    "alternatives": [
      {
        "name": "F-Droid",
        "license": "GPL-3.0",
        "url": "https://f-droid.org/",
        "covers": "Catalogue of free and open-source Android apps.",
        "note": "Covers FOSS apps only."
      }
    ],
    "gap": "F-Droid covers open-source app distribution; the commercial catalogue, billing and DRM are structurally not replicated.",
    "verdict": "Partial. Open-source distribution exists (F-Droid) but covers only FOSS apps, with no paid catalogue.",
    "sources": [
      "https://f-droid.org/",
      "https://en.wikipedia.org/wiki/Google_Play"
    ]
  },
  {
    "id": "google-analytics",
    "company_id": "google",
    "name": "Google Analytics",
    "product_type": "business_software",
    "categories": [
      "web-analytics"
    ],
    "official_url": "https://analytics.google.com/",
    "status": "available",
    "summary": "Google Analytics is Google's web and product analytics platform.",
    "capabilities": [
      "Traffic and audience analytics",
      "Conversion tracking",
      "Reporting"
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
      }
    ],
    "gap": "Web analytics is one of the strongest open-source categories; the core need is fully covered.",
    "verdict": "Available. Self-hosted analytics is mature (Matomo, Plausible, Umami).",
    "sources": [
      "https://matomo.org/",
      "https://plausible.io/"
    ]
  },
  {
    "id": "google-classroom",
    "company_id": "google",
    "name": "Google Classroom",
    "product_type": "business_software",
    "categories": [
      "education",
      "learning-management"
    ],
    "official_url": "https://classroom.google.com/",
    "status": "available",
    "summary": "Google Classroom is Google's education and assignment-management platform for schools.",
    "capabilities": [
      "Assignment distribution and grading",
      "Class streams and announcements",
      "Workspace integration"
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
        "note": ""
      }
    ],
    "gap": "Mature LMS platforms go far beyond Classroom; the gap is Google's Workspace integration, not features.",
    "verdict": "Available. Moodle and Canvas are established open-source LMS platforms with large deployments.",
    "sources": [
      "https://moodle.org/",
      "https://en.wikipedia.org/wiki/Google_Classroom"
    ]
  },
  {
    "id": "google-ads",
    "company_id": "google",
    "name": "Google Ads",
    "product_type": "advertising_technology",
    "categories": [
      "advertising"
    ],
    "official_url": "https://ads.google.com/",
    "status": "pending",
    "summary": "Google Ads is Google's online advertising platform for search, display and video campaigns.",
    "capabilities": [
      "Search and display ad buying",
      "Targeting and bidding",
      "Campaign analytics"
    ],
    "alternatives": [],
    "gap": "The core product is a marketplace, not just software: advertiser demand, publisher inventory and the ad auction have no open-source equivalent. Self-hosted ad servers cover only serving.",
    "verdict": "No verified alternative. No open-source project replicates the ads marketplace; only ad serving is open (Revive Adserver).",
    "sources": [
      "https://www.revive-adserver.com/",
      "https://en.wikipedia.org/wiki/Google_Ads"
    ]
  },
  {
    "id": "youtube-music",
    "company_id": "google",
    "name": "YouTube Music",
    "product_type": "media_streaming",
    "categories": [
      "music-streaming"
    ],
    "official_url": "https://music.youtube.com/",
    "status": "partial",
    "summary": "YouTube Music is Google's music streaming service, successor to Google Play Music.",
    "capabilities": [
      "On-demand streaming of a licensed catalogue",
      "Personalized recommendations",
      "Library uploads"
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
    "gap": "Self-hosted servers stream a library you own; the licensed catalogue and recommendation engine are not replicable in open source.",
    "verdict": "Partial. Streaming your own library is solved (Navidrome, Funkwhale); the licensed catalogue is not.",
    "sources": [
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
    "status": "pending",
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
    "summary": "Netflix Games is Netflix's mobile-game offering bundled with the subscription.",
    "capabilities": [
      "Mobile games included with membership",
      "Cloud streaming of titles",
      "No ads or in-app purchases"
    ],
    "alternatives": [],
    "gap": "Thousands of open-source games exist, but no project replicates a curated game subscription; the gap is curation, not technology.",
    "verdict": "No verified alternative. No open-source equivalent of a game subscription exists; individual open games are abundant.",
    "sources": [
      "https://libregamewiki.org/",
      "https://en.wikipedia.org/wiki/Netflix"
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
    "status": "partial",
    "summary": "Netflix Kids is Netflix's children's experience: a filtered catalogue and profiles for kids.",
    "capabilities": [
      "Kid-filtered catalogue",
      "Age-appropriate profiles",
      "Parental controls"
    ],
    "alternatives": [
      {
        "name": "Jellyfin",
        "license": "GPL-2.0",
        "url": "https://jellyfin.org/",
        "covers": "Kids profiles and parental controls in a self-hosted media server.",
        "note": ""
      }
    ],
    "gap": "Jellyfin covers profiles and parental controls; the licensed children's catalogue is not replicable.",
    "verdict": "Partial. The experience is self-hostable (Jellyfin) for content you own; the catalogue is licensed content.",
    "sources": [
      "https://jellyfin.org/",
      "https://en.wikipedia.org/wiki/Netflix"
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
    "summary": "Netflix Profiles are per-viewer identities with separate watch history, lists and recommendations.",
    "capabilities": [
      "Per-viewer history and recommendations",
      "Kids and standard profiles",
      "Watch anywhere"
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
    "gap": "Multi-user profiles are standard in self-hosted media servers; recommendation quality differs.",
    "verdict": "Partial. Jellyfin provides per-user profiles; the recommender is not equivalent.",
    "sources": [
      "https://jellyfin.org/",
      "https://en.wikipedia.org/wiki/Netflix"
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
    "summary": "Tudum is Netflix's editorial publication covering shows, films and fandom.",
    "capabilities": [
      "Editorial articles and interviews",
      "Companion content",
      "Newsroom-style updates"
    ],
    "alternatives": [],
    "gap": "Editorial content is journalism, not software; open CMSs can serve a publication, but the content itself is Netflix's.",
    "verdict": "No verified alternative. Not a software-replication problem; open CMSs cover publishing, not content.",
    "sources": [
      "https://en.wikipedia.org/wiki/Netflix"
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
    "summary": "Instagram is Meta's photo- and video-sharing social network with Stories and Reels.",
    "capabilities": [
      "Photo and video sharing",
      "Stories and Reels",
      "Following and discovery feeds"
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
    "gap": "Pixelfed covers image sharing on the fediverse; short-video feeds and network scale are not replicated.",
    "verdict": "Partial. Pixelfed covers the core (photo sharing); Reels-scale video is not.",
    "sources": [
      "https://pixelfed.org/",
      "https://en.wikipedia.org/wiki/Instagram"
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
    "summary": "Facebook is Meta's social network: profiles, groups, events, marketplace and pages.",
    "capabilities": [
      "Profiles and social graph",
      "Groups and events",
      "Marketplace and pages"
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
    "gap": "Open federated networks cover social posting well; the breadth of groups, marketplace and events at global scale is not matched by any single project.",
    "verdict": "Partial. Open networks (Mastodon, Diaspora) cover core social networking; no single project matches Facebook's breadth.",
    "sources": [
      "https://joinmastodon.org/",
      "https://diasporafoundation.org/"
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
    "summary": "Threads is Meta's text microblogging network.",
    "capabilities": [
      "Short-text posts and replies",
      "Fediverse interconnection",
      "Following feeds"
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
    "gap": "Microblogging is fully covered by ActivityPub (Mastodon and others), which Threads itself can federate with.",
    "verdict": "Available. Mastodon is a mature, self-hostable microblogging platform covering the core function.",
    "sources": [
      "https://joinmastodon.org/",
      "https://en.wikipedia.org/wiki/Threads_(app)"
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
  }
];
