> **Historical document — not authoritative.**
>
> This file predates the current CLI and ACE layout. It is kept for design
> history only and contains stale details (provider names, product names, and a
> workflow that no longer match the code). For current documentation see
> [`docs/`](../docs/README.md) and the repository [`README.md`](../README.md).

---

# Infrastructure Plan for RAE FAANG Product Development

## Overview
This document prepares the plan to start building the product's infrastructure for RAE FAANG using the ace-proagents framework. It covers the initial setup, shared infrastructure, and first product workspace.

## Initial Infrastructure Setup (Phase 1 — Foundation)

### 1. Root Repository Configuration

#### Initialize ACE Workspace
```bash
# In /Users/mac/Desktop/Github/rae-faang/
node /tmp/ace-proagents/ace.mjs init --name rae-faang
```

This creates:
- `package.json` with `ace` key (spec `ace/v1`)
- `ace-lock.json`
- Starter `README.md`
- `ace.mjs` + `lib/` copy

#### Configure Root package.json (ace key)
Update with RAE FAANG-specific configuration:

```json
{
  "name": "rae-faang",
  "version": "0.1.0",
  "license": "MIT",
  "type": "module",
  "engines": { "node": ">=20", "ace": ">=1.0.0" },
  "scripts": {
    "dev": "node ace.mjs run",
    "govern": "node ace.mjs govern",
    "supervise": "node ace.mjs supervise --project rae-social",
    "test": "vitest run",
    "lint": "eslint .",
    "build": "tsc --build"
  },
  "dependencies": {
    "@rae-faang/auth": "workspace:^0.1.0",
    "@rae-faang/storage": "workspace:^0.1.0",
    "@rae-faang/ui": "workspace:^0.1.0"
  },
  "devDependencies": {
    "vitest": "^2.0.0",
    "eslint": "^8.57.0",
    "prettier": "^3.2.5",
    "@types/node": "^20.11.0"
  }
}
```

### 2. Create `.docs/` Structure
Already created in previous steps. Files:
- `01-project-overview.md`
- `02-ace-integration.md`
- `03-product-specifications.md`
- `04-architecture-decisions.md`
- `05-development-workflow.md`

### 3. Initialize First Product Workspace: RAE Social

#### Create Product Directory
```bash
mkdir -p products/rae-social
```

#### Initialize Product ACE Workspace
```bash
cd products/rae-social
node /tmp/ace-proagents/ace.mjs init --name rae-social
```

#### Configure Product package.json
```json
{
  "name": "rae-social",
  "version": "0.1.0",
  "license": "MIT",
  "type": "module",
  "engines": { "node": ">=20", "ace": ">=1.0.0" },
  "description": "RAE FAANG: Open-source Instagram alternative",
  "scripts": {
    "dev": "node ace.mjs run",
    "test": "vitest run",
    "lint": "eslint .",
    "build": "tsc --build"
  },
  "dependencies": {
    "@rae-faang/auth": "^0.1.0",
    "@rae-faang/storage": "^0.1.0",
    "@rae-faang/ui": "^0.1.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "vitest": "^2.0.0",
    "eslint": "^8.57.0",
    "prettier": "^3.2.5"
  }
}
```

### 4. Create Shared Infrastructure Packages

#### Initialize Shared Package: `@rae-faang/auth`
```bash
mkdir -p packages/auth
cd packages/auth
node /tmp/ace-proagents/ace.mjs init --name @rae-faang/auth
```

Configure with auth-specific settings:
```json
{
  "name": "@rae-faang/auth",
  "version": "0.1.0",
  "license": "MIT",
  "type": "module",
  "peerDependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "jsonwebtoken": "^9.0.2",
    "nacl": "^1.0.1"
  }
}
```

#### Initialize Shared Package: `@rae-faang/storage`
```bash
mkdir -p packages/storage
cd packages/storage
node /tmp/ace-proagents/ace.mjs init --name @rae-faang/storage
```

Configure with storage-specific settings:
```json
{
  "name": "@rae-faang/storage",
  "version": "0.1.0",
  "license": "MIT",
  "type": "module",
  "peerDependencies": {
    "react": "^18.2.0"
  },
  "dependencies": {
    "async-validator": "^4.2.5",
    "multiformats": "^13.0.0",
    "uint8array-tools": "^1.1.1"
  }
}
```

#### Initialize Shared Package: `@rae-faang/ui`
```bash
mkdir -p packages/ui
cd packages/ui
node /tmp/ace-proagents/ace.mjs init --name @rae-faang/ui
```

Configure with UI-specific settings:
```json
{
  "name": "@rae-faang/ui",
  "version": "0.1.0",
  "license": "MIT",
  "type": "module",
  "peerDependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "dependencies": {
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "lucide-react": "^0.360.0"
  }
}
```

## Infrastructure Architecture

### Directory Layout After Initial Setup
```
/rae-faang (root ACE workspace)
├── package.json                # Root manifest + ace spec
├── ace-lock.json               # Resolved lockfile
├── ace.mjs                     # CLI entry point
├── lib/                        # ACE modules
├── .docs/                      # This documentation
├── packages/                   # Shared infrastructure
│   ├── auth/
│   │   ├── package.json
│   │   ├── ace-lock.json
│   │   └── src/
│   ├── storage/
│   │   ├── package.json
│   │   └── src/
│   └── ui/
│       ├── package.json
│       └── src/
├── products/
│   └── rae-social/
│       ├── package.json        # Product manifest + ace spec
│       ├── ace-lock.json
│       ├── ace.mjs             # Copied from root
│       ├── lib/                # Copied from root
│       ├── src/
│       │   ├── components/
│       │   ├── pages/
│       │   ├── api/
│       │   └── hooks/
│       ├── tests/
│       │   ├── unit/
│       │   ├── integration/
│       │   └── e2e/
│       ├── specs/
│       │   ├── 01-product-vision.md
│       │   ├── 02-user-workflows.md
│       │   └── 03-feature-catalog.md
│       └── .ace/
│           └── runtime state
└── .ace/                       # Root runtime state (gitignored)
```

### Dependency Management Strategy

#### Monorepo with npm workspaces (recommended)
```json
{
  "workspaces": [
    "packages/*",
    "products/*"
  ],
  "nohoist": ["**/@rae-faang/*"]
}
```

Or use npm link for local development:
```bash
# From each package directory
npm link

# From product workspace
npm link @rae-faang/auth @rae-faang/storage @rae-faang/ui
```

### Agent Orchestration Setup

#### Root-level Governor Configuration
Each product supervisor reports to the root governor:

```bash
# Start root governor
node ace.mjs govern

# In separate terminal, monitor rae-social supervisor
node ace.mjs supervise --project rae-social
```

#### Initialize Agents for RAE Social
```bash
# Create agent roles
node ace.mjs task add --title "Set up RAE Social project structure" --project rae-social --role architect
node ace.mjs task claim <task-id> --agent architect-1

# Research agent investigates Instagram
node ace.mjs task add --title "Investigate Instagram feed and story workflows" --project rae-social --role researcher
node ace.mjs task claim <task-id> --agent researcher-1

# Frontend agent sets up React project
node ace.mjs task add --title "Set up React + Vite project scaffolding" --project rae-social --role frontend
node ace.mjs task claim <task-id> --agent frontend-1
```

#### Opencode Integration
Configure opencode as the agent runtime in ACE:

```json
// In root package.json ace config
"orchestrator": { "runtime": "opencode", "role": "orchestrator" },
"agents": {
  "defaults": { "runtime": "opencode" },
  "workers": [
    { "role": "researcher" },
    { "role": "architect" },
    { "role": "frontend" },
    { "role": "backend" },
    { "role": "tester" },
    { "role": "reviewer" }
  ]
}
```

## First Product: RAE Social MVP Plan

### MVP Scope (Phase 2)
Based on the feature catalog and architecture decisions:

#### Core Features (F-001 to F-004)
1. **F-001: Photo/Video Upload** - Basic upload with progress indicator
2. **F-002: Feed** - Chronological photo feed (no algorithm for MVP)
3. **F-003: User Profiles** - Basic profile page with bio and avatar
4. **F-004: Following** - Follow/unfollow functionality

#### Non-Goals (Phase 2)
- Stories (F-005)
- Direct messaging (F-006)
- Algorithmically ranked feed
- Comments, likes, shares
- Live streaming, Reels
- Creator analytics

#### Technical MVP Stack
- **Frontend**: React 18 + React Router + Vite
- **Styling**: Tailwind CSS + @rae-faang/ui components
- **Backend**: Node.js + Express (or Hono)
- **Database**: PostgreSQL with Prisma ORM
- **Storage**: Local filesystem + S3-compatible fallback
- **Auth**: JWT + bcrypt, optional OAuth2 later
- **Testing**: Vitest + Playwright
- **Deployment**: Docker + Vercel (frontend) / Railway (backend)

#### ACE Runtime Configuration for RAE Social
```json
// products/rae-social/ace config (subset)
{
  "goal": {
    "statement": "Build MVP of RAE Social - Instagram alternative with photo upload, feed, profiles, and following",
    "milestones": [
      "Setup project infrastructure",
      "Implement photo upload flow",
      "Build feed component",
      "Create user profiles",
      "Implement follow system",
      "Test and verify MVP",
      "Publish first release"
    ]
  },
  "agents": {
    "strategy": "dynamic",
    "defaults": { "runtime": "opencode" },
    "workers": [
      { "role": "researcher", "maxCycles": 5 },
      { "role": "architect", "maxCycles": 3 },
      { "role": "frontend", "maxCycles": 8 },
      { "role": "backend", "maxCycles": 8 },
      { "role": "tester", "maxCycles": 5 },
      { "role": "reviewer", "maxCycles": 5 }
    ]
  },
  "tools": ["git", "github", "filesystem", "terminal", "npm"],
  "runtime": { "provider": "local" },
  "adapters": {
    "workspace": { "provider": "git-worktrees" },
    "agent-runtime": { "provider": "opencode" },
    "provider": { "provider": "openrouter" },
    "context": { "provider": "markdown-files" },
    "handoff": { "provider": "json-files" },
    "verification": { "provider": "npm-scripts" },
    "persistence": { "provider": "local-files" }
  },
  "network": { "mode": "open" },
  "filesystem": { "mode": "project-root" },
  "git": { "push": false, "worktrees": true },
  "policies": {
    "require_review_before_merge": true,
    "production_access": false
  },
  "concurrency": {
    "max_active_agents": 6,
    "count_governor": false,
    "count_supervisors": false,
    "runtime_overrides": { "opencode": 4 }
  },
  "recovery": {
    "max_restarts": 3,
    "max_route_switches": 2,
    "cooldown_seconds": 30,
    "progress_window_seconds": 120
  }
}
```

## Setup Checklist

### ✅ Completed
- [x] Clone ace-proagents framework
- [x] Initialize root ACE workspace
- [x] Configure root package.json with ace spec
- [x] Create .docs/ documentation structure
- [x] Create packages/shared-infrastructure
- [x] Initialize first product: RAE Social
- [x] Configure RAE Social ACE workspace
- [x] Set up shared packages: @rae-faang/auth, @rae-faang/storage, @rae-faang/ui

### ⏳ Next Steps
- [ ] Install dependencies: `npm install` from root
- [ ] Run `ace install` to populate lockfiles
- [ ] Start researcher agents to investigate Instagram workflows
- [ ] Create first feature specification (F-001: Photo Upload)
- [ ] Initialize frontend with Vite + React
- [ ] Set up backend API scaffold
- [ ] Configure PostgreSQL database
- [ ] Implement first task and begin development
- [ ] Run first governor cycle to verify infrastructure
- [ ] Publish infrastructure state and governance report

## Verification

### Infrastructure Health Check
```bash
# From root workspace
node ace.mjs status
node ace.mjs context --json

# Verify all workspaces
node ace.mjs agents
node ace.mjs tasks

# Check adapter health
node ace.mjs adapters health

# Verify configuration
node ace.mjs config --resolve
```

### Expected Output Summary
```
Status: running
Agents: 6 active (researcher: 1, architect: 1, frontend: 1, backend: 1, tester: 1, reviewer: 1)
Tasks: 6 active, 0 completed
Context: Valid ace/v1 specification
Adapters: All healthy
Governor: Monitoring 1 supervisor (rae-social)
```

## Scaling to Full Infrastructure

### Phase 3: Expand Catalog (After RAE Social MVP)
- Initialize additional product workspaces:
  - `products/rae-connect` (WhatsApp alternative)
  - `products/rae-market` (Marketplace alternative)
  - `products/rae-search` (Search engine alternative)
- Add shared modules:
  - `@rae-faang/sync` (CRDT synchronization)
  - `@rae-faang/api` (API client generation)
  - `@rae-faang/testing` (Test utilities)
- Configure cross-product governance
- Enable autopilot for continuous development

### Phase 4: Agentic at Scale
- Dynamic agent spawning based on workload
- Cross-product task dependencies
- Continuous integration across all products
- Community contributor onboarding via ACE
- Open ecosystem with forks and extensions

### Phase 5: Open Ecosystem
- Connect products through shared standards
- ActivityPub federation for social products
- Matrix messaging for communication products
- S3-compatible storage integration
- Community-maintained forks and extensions
- Sustainable governance model