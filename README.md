# RAE FAANG

### Reverse Engineer Anything. Rebuild Everything. Open Source for Everyone.

> **The mission: make the products of the world's biggest technology companies free, open source, and accessible to everyone.**

RAE FAANG is an open-source initiative to reverse engineer, understand, and independently rebuild the products, tools, platforms, and services created by FAANG companies — Meta, Amazon, Apple, Netflix, and Google — and make open-source alternatives available to the public.

Every person should have access to world-class software, regardless of their income, location, operating system, or ability to pay for subscriptions.

We want to build the open-source alternatives to the products billions of people use every day.

**One company at a time. One product at a time. One feature at a time. Until there is an open alternative for everything we can build.**

---

## Start here

RAE FAANG is being built in the open. This repository currently contains the
**foundation**: a product-intelligence catalog, evidence-backed research
dossiers, specification workspaces, and the agent environment that drives them.
It does not yet contain finished product implementations — see
[Project Status](#project-status) for the honest picture.

**What works today**

- A deterministic **catalog CLI** (`src/cli.js`) that validates research, tracks
  coverage, and reports gaps, covered by tests (`npm test`).
- **34 catalogued products** across 6 company entries, with 34 matching research
  dossiers and JSON Schemas (target: 75 products — see
  `catalog/manifests/faang.json`).
- **16 specification scaffolds** under `products/<company>/<product>/specs/` — the
  ten-file structure exists, but the files are still placeholders.
- A working **ACE** (`ace-proagents`) agent environment wired at the repository
  root and in every product workspace.

**Try it**

```bash
npm install
node src/cli.js research coverage   # how researched is the catalog?
node src/cli.js gaps all            # what is missing?
node ace.mjs status                 # the agent environment
npm test                            # verify the tooling
```

**Links**

- **Live landing page:** https://enzovezzaro.github.io/rae-faang/
- [`docs/`](docs/README.md) — the canonical documentation set (start here).
- [`docs/getting-started.md`](docs/getting-started.md) — install and run.
- [`docs/cli-reference.md`](docs/cli-reference.md) — every CLI command.
- [`AGENTS.md`](AGENTS.md) — how AI agents work in this repo.
- [`CONTRIBUTING.md`](CONTRIBUTING.md) — how humans contribute.
- [`PLAN.md`](PLAN.md) — what to build next.
- [`site/`](site/index.html) — the landing page (deployed to GitHub Pages).

---

## The Vision

Imagine a world where you can use an open-source alternative to Instagram, WhatsApp, Google Search, Google Maps, Gmail, YouTube, Amazon, Netflix, iCloud, and hundreds of other products — without being locked into a proprietary ecosystem, forced subscriptions, or a single company's decisions.

Imagine developers having access to the same categories of tools and capabilities as the largest technology companies, with the freedom to inspect the source code, modify the software, run it on their own infrastructure, and contribute improvements back to the community.

Imagine AI agents working alongside human developers to analyze existing software, understand its behavior, implement equivalent functionality, test it, and continuously improve the resulting open-source products.

**That is what RAE FAANG aims to build.**

We are not building a single application. We are building an ecosystem of open-source alternatives to the products of the world's largest technology companies.

## Why RAE FAANG?

Modern software is increasingly controlled by a small number of corporations. Their products can be incredibly useful, but access, functionality, interoperability, and long-term availability often depend on decisions made behind closed doors.

Subscriptions become more expensive. Features disappear. APIs change. Services shut down. Data becomes difficult to move. Users have limited control over how their software works.

Open source offers another path.

- **Free access:** Make our software available to everyone without mandatory subscriptions or artificial paywalls.
- **Open source:** Publish the source code so anyone can inspect, learn from, modify, and improve it under its license.
- **User ownership:** Prioritize local-first operation, self-hosting, data portability, and user control wherever practical.
- **Interoperability:** Support open standards and make it easier to move data between applications.
- **Community-driven development:** Let contributors shape priorities instead of depending on a single corporation.
- **AI-powered development:** Use AI agents to accelerate software investigation, implementation, testing, documentation, and maintenance.
- **Long-term sustainability:** Build software that communities can maintain, fork, and operate independently.

Our goal is not to prevent companies from building great products. It is to ensure that the public has the freedom to build, use, and improve alternatives.

---

## The Five Companies

RAE FAANG focuses on the five companies behind the FAANG acronym.

| Company | Product families to recreate |
|---|---|
| **Meta** | Social networking, messaging, communities, media sharing, collaboration, and VR software |
| **Amazon** | E-commerce, marketplaces, cloud infrastructure, developer services, streaming, and digital assistants |
| **Apple** | Desktop and mobile experiences, productivity, creative applications, media services, and device ecosystems |
| **Netflix** | Video streaming, content discovery, recommendation systems, media delivery, and creator tooling |
| **Google** | Search, maps, email, video, office productivity, cloud infrastructure, developer tools, and AI services |

These categories are starting points, not a final inventory. Products and priorities will evolve as the community identifies opportunities and develops new implementations.

## The Product Universe

RAE FAANG aims to build an expanding catalog of independent open-source alternatives. The following examples illustrate the intended scope.

### 1. Meta

Reimagine social software without closed ecosystems.

- **RAE Social** — An Instagram-style photo and video sharing platform.
- **RAE Connect** — A WhatsApp-style messaging application with end-to-end encryption.
- **RAE Communities** — A Facebook-style social network with groups, pages, events, and feeds.
- **RAE Messenger** — Real-time messaging, calls, and media sharing.
- **RAE Creator** — Creator profiles, publishing, analytics, and audience management.
- **RAE Worlds** — Open social experiences and virtual environments.

### 2. Amazon

Make commerce and cloud infrastructure more accessible.

- **RAE Market** — An Amazon-style marketplace with product listings, search, reviews, and checkout integrations.
- **RAE Cloud** — An open cloud platform for deploying applications, managing compute, storage, and networking.
- **RAE Storage** — Object storage and file management inspired by cloud storage services.
- **RAE Stream** — A media streaming platform.
- **RAE Dev** — Developer infrastructure, build pipelines, artifact storage, and deployment tools.
- **RAE Assistant** — A voice-enabled assistant and automation platform.

### 3. Apple

Build open alternatives to familiar software experiences.

- **RAE Desktop** — A polished desktop environment inspired by modern desktop operating systems.
- **RAE Mobile** — An open mobile software experience.
- **RAE Photos** — Photo organization, editing, albums, and synchronization.
- **RAE Music** — A music library and streaming client.
- **RAE Notes** — Notes, documents, handwriting, and cross-device synchronization.
- **RAE Cloud Drive** — File synchronization, backup, and sharing.

### 4. Netflix

Make streaming technology accessible to independent creators and communities.

- **RAE Video** — An on-demand video streaming platform.
- **RAE Discover** — Content discovery and personalized recommendations.
- **RAE Studio** — Media management, transcoding, and publishing workflows.
- **RAE Delivery** — Video delivery infrastructure and adaptive streaming.
- **RAE Watch** — Watch parties, shared viewing, and synchronized playback.
- **RAE Analytics** — Privacy-conscious audience and streaming analytics.

### 5. Google

Rebuild the essential tools of the modern internet.

- **RAE Search** — A search engine with crawling, indexing, ranking, and discovery.
- **RAE Maps** — Interactive maps, geospatial search, routing, and navigation.
- **RAE Mail** — Email, labels, filters, contacts, and calendar integration.
- **RAE Workspace** — Documents, spreadsheets, presentations, and collaborative editing.
- **RAE Drive** — Cloud file storage, synchronization, and sharing.
- **RAE Meet** — Video conferencing and screen sharing.
- **RAE Browser** — A browser experience built around privacy, extensibility, and user control.
- **RAE Translate** — Language translation and localization tools.
- **RAE Analytics** — Open website analytics and reporting.
- **RAE AI** — An extensible AI platform for models, agents, and intelligent applications.
- **RAE DevTools** — Developer utilities, observability, testing, and deployment workflows.

These are proposed product directions, not claims that the applications already exist or have reached feature parity.

---

## How We Build

### Reverse engineer. Understand. Reimplement. Verify.

RAE FAANG takes inspiration from agent-assisted software investigation tools such as [REA](https://github.com/morluto/rea). The objective is to turn software analysis into a repeatable engineering workflow that can produce working, independently implemented alternatives.

Our process has five stages.

**1. Investigate**

Study publicly observable product behavior, official documentation, published protocols, accessible interfaces, and software that we are authorized to inspect.

Identify user workflows, features, data models, interfaces, system boundaries, and integration requirements.

**2. Understand**

Document how the observed functionality behaves. Build feature specifications, architecture diagrams, compatibility requirements, and testable acceptance criteria.

Distinguish verified observations from assumptions and unknowns.

**3. Reimplement**

Build an independent implementation using suitable open-source technologies. Recreate functionality and familiar workflows without copying proprietary source code or protected assets.

**4. Verify**

Compare the implementation against documented behavior. Test correctness, usability, performance, accessibility, security, interoperability, and edge cases.

**5. Release and improve**

Publish the source code, documentation, test suites, and reproducible build instructions. Invite the community to identify missing features, report issues, and contribute improvements.

The cycle repeats until the implementation becomes increasingly capable, reliable, and useful.

---

## AI Agents as Development Infrastructure

RAE FAANG is designed to benefit from agentic software development.

AI agents can help investigate features, explore public interfaces, write specifications, implement modules, generate tests, review code, and identify compatibility gaps. Human contributors remain essential for architectural decisions, security review, validation, and project direction.

A mature implementation could coordinate specialized agents for each product and feature.

- **Research agents** investigate product behavior and gather evidence.
- **Architecture agents** translate findings into specifications and implementation plans.
- **Development agents** build isolated features and modules.
- **Testing agents** validate functionality, compatibility, and regressions.
- **Security agents** inspect vulnerabilities, permissions, and data handling.
- **Review agents** evaluate code quality and consistency.
- **Maintenance agents** identify broken integrations, dependency updates, and unfinished work.

Agents should work from explicit requirements and verifiable acceptance criteria. Progress should be measured by tested functionality and reproducible results, not merely by generated code or claimed completion.

Automation can accelerate development, but it must not replace validation.

---

## Architecture Principles

Every product has different requirements. RAE FAANG does not mandate one technology stack for everything.

Instead, we follow shared engineering principles.

### Modular by design

Products should be decomposed into independent modules with clear interfaces. Components should be replaceable without unnecessarily rewriting the entire application.

### Open standards first

Prefer documented protocols, interoperable formats, and existing open-source infrastructure wherever they meet the requirements.

### Local-first where practical

Users should retain control of their data. Products should support local operation, self-hosting, export, or synchronization alternatives where technically feasible.

### Security and privacy by default

Use secure authentication, least-privilege access, encryption where appropriate, transparent data practices, and meaningful security testing.

### Cross-platform accessibility

Prioritize web-based applications and portable implementations when suitable. Native applications can be developed where they provide meaningful benefits.

### Testable implementations

Features should have automated tests and documented acceptance criteria. Compatibility claims must be supported by evidence.

### Sustainable maintenance

Prefer dependable dependencies, clear documentation, reproducible builds, and architectures that contributors can understand and maintain.

---

## Development Roadmap

RAE FAANG is an ambitious, long-term initiative. We should build it incrementally, prioritizing useful software that can be completed and maintained.

### Phase 1 — Foundation

- Establish the project organization and contribution guidelines.
- Define the shared engineering standards and responsible research policy.
- Create a product inventory and feature-tracking system.
- Establish a repeatable investigation, implementation, and verification workflow.
- Select the first product based on feasibility, user demand, and achievable impact.

### Phase 2 — First Working Alternative

- Select one product with a clearly defined scope.
- Document its core workflows and acceptance criteria.
- Implement a functional minimum viable product.
- Add automated tests, documentation, and deployment instructions.
- Publish the source code and gather community feedback.

### Phase 3 — Expand the Catalog

- Implement additional features and product alternatives.
- Reuse common infrastructure where appropriate.
- Establish shared authentication, storage, synchronization, and integration modules where useful.
- Improve compatibility and feature coverage through measurable milestones.

### Phase 4 — Agentic Development at Scale

- Coordinate multiple specialized development agents.
- Automate testing, code review, issue triage, and maintenance tasks.
- Introduce continuous integration and reproducible releases.
- Track product coverage, test results, known limitations, and maintenance health.

### Phase 5 — An Open Ecosystem

- Connect products through shared standards and integrations.
- Support community-maintained forks and extensions.
- Improve self-hosting, portability, and migration between services.
- Build a sustainable ecosystem in which people can use and contribute to the entire catalog.

---

## Project Status

**Status: Foundation — cataloguing, research, and specifications.**

The product universe described above is the mission and the proposed directions;
it is not a claim that these products have been implemented. What actually
exists today is the foundation:

| Layer | State |
|---|---|
| Catalog | 34 of 75 in-scope products catalogued across Google, Apple, Amazon/AWS, Netflix, and Meta |
| Research | 34 dossiers with validated frontmatter; all currently `pending` (none yet fully `researched`) |
| Alternatives & opportunities | Classified per product; `build_missing` items require an opportunity spec |
| Specifications | 16 product workspaces with the `specs/` structure scaffolded; the files are placeholders, not finished specifications |
| Implementations | Not started — the specification workspaces are the first deliverable |
| Tooling | Deterministic CLI with tests; ACE agent environment configured and running |

Each product will have clearly isolated modules, documentation, development
status, and a release process. We value working software over ambitious claims:
progress is measured by what has been researched, tested, and released, not by
what has been described. See [`PLAN.md`](PLAN.md) for the plan and
[`docs/`](docs/README.md) for the details.

---

## Contributing

RAE FAANG is for developers, designers, researchers, security engineers, documentation writers, AI enthusiasts, and anyone who wants to help build an open software ecosystem.

You can contribute by:

- Researching a product's publicly observable behavior.
- Writing feature specifications and technical documentation.
- Building or improving an application.
- Implementing compatible APIs and open protocols.
- Writing automated tests and reproducible benchmarks.
- Auditing security and privacy.
- Improving accessibility and localization.
- Reporting bugs and proposing new product directions.
- Developing tools that make agent-assisted implementation more reliable.

### A good contribution starts with evidence

Before implementing a feature, describe the behavior you want to reproduce, the evidence supporting the specification, and the criteria for considering it complete.

Keep contributions focused, independently testable, and easy to review.

See [`CONTRIBUTING.md`](CONTRIBUTING.md) for how to contribute as a human, and [`AGENTS.md`](AGENTS.md) for how AI agents operate in this repository.

---

## Responsible Reverse Engineering

RAE FAANG exists to advance open software, interoperability, education, and user freedom.

We will prioritize clean-room implementations, public documentation, lawful observation, and independently developed code.

We will not treat reverse engineering as permission to copy proprietary source code, extract private data, bypass access controls, redistribute protected assets, or misuse confidential information.

Product names in the catalog describe the software being used as a functional reference. They do not imply endorsement, affiliation, or authorization by the companies concerned. Implementations must comply with applicable laws, licenses, and third-party rights.

Each project should clearly document its provenance, dependencies, limitations, and licensing.

---

## The Long-Term Goal

We do not expect a small team to recreate every product overnight.

We do believe that open-source communities, combined with better engineering tools and capable AI agents, can progressively build alternatives that were previously too expensive or complex for independent developers to pursue.

A single feature can become a module. A module can become an application. An application can become infrastructure. Infrastructure can empower thousands of other projects.

Over time, independent contributions can create an ecosystem of software that no single corporation controls.

**We want the public to have the freedom to use these tools, understand them, modify them, host them, and build upon them.**

Not just alternatives to a handful of products.

An open-source alternative to the entire ecosystem.

---

## License

RAE FAANG is released under the **MIT License** — see [`LICENSE`](LICENSE). The
repository also carries an explicit AI-training notice ([`NOTICE`](NOTICE)) and a
machine-readable policy ([`AI_TRAINING_POLICY.md`](AI_TRAINING_POLICY.md)),
generated with [Repo Shield](https://github.com/EnzoVezzaro/repo-shield) and
verified every week by `.github/workflows/repo-shield.yml`. Run the check locally
with `node scripts/shield-check.mjs`.

Third-party dependencies, assets, and referenced projects keep their own
licenses. Document the provenance and licensing of anything you add.

---

## Join the Mission

Help us make powerful software accessible to everyone.

- **Explore:** Browse the product catalog and identify opportunities.
- **Build:** Choose a feature and help turn it into working software.
- **Contribute:** Share code, research, tests, documentation, and feedback.
- **Spread the word:** Help more developers discover and participate in the project.

Every contribution moves the ecosystem forward.

---

**RAE FAANG — The open-source alternative to everything.**

*Built by the community. Powered by collaboration. Open to everyone.*