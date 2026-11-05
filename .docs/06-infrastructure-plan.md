> **Historical document - not authoritative.**
>
> This file predates the current CLI and ACE layout. It is kept for design
> history only and contains stale details (provider names, product names, and a
> workflow that no longer match the code). For current documentation see
> [`docs/`](../docs/README.md) and the repository [`README.md`](../README.md).

---

# Infrastructure Plan for REA FAANG Product Development

## Overview
This document prepares the plan to start building the product's infrastructure for REA FAANG using the ace-proagents framework. It covers the initial setup, shared infrastructure, and first product workspace.

## Initial Infrastructure Setup (Phase 1 - Foundation)

### 1. Root Repository Configuration

#### Initialize ACE Workspace
```bash
# In /Users/mac/Desktop/Github/rea-faang/
ace init --name rea-faang
```

This creates:
- `package.json` with `ace` key (spec `ace/v1`)
- `ace-lock.json`
- Starter `README.md`
- `ace.mjs` + `lib/` copy

#### Configure Root package.json (ace key)
Update with REA FAANG-specific configuration:

```json
{
  "name": "rea-faang",
  "version": "0.1.0",
  "license": "MIT",
  "type": "module",
  "engines": { "node": ">=20", "ace": ">=1.0.0" },
  "scripts": {
    "dev": "ace run",
    "govern": "ace govern",
    "supervise": "ace supervise --project rea-social",
    "test": "vitest run",
    "lint": "eslint .",
    "build": "tsc --build"
  },
  "dependencies": {
    "@rea-faang/auth": "workspace:^0.1.0",
    "@rea-faang/storage": "workspace:^0.1.0",
    "@rea-faang/ui": "workspace:^0.1.0"
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

### 3. Initialize First Product Workspace: REA Social

#### Create Product Directory
```bash
mkdir -p products/rea-social
```

#### Initialize Product ACE Workspace
```bash
cd products/rea-social
ace init --name rea-social
```

#### Configure Product package.json
```json
{
  "name": "rea-social",
  "version": "0.1.0",
  "license": "MIT",
  "type": "module",
  "engines": { "node": ">=20", "ace": ">=1.0.0" },
  "description": "REA FAANG: Open-source Instagram alternative",
  "scripts": {
    "dev": "ace run",
    "test": "vitest run",
    "lint": "eslint .",
    "build": "tsc --build"
  },
  "dependencies": {
    "@rea-faang/auth": "^0.1.0",
    "@rea-faang/storage": "^0.1.0",
    "@rea-faang/ui": "^0.1.0"
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

#### Initialize Shared Package: `@rea-faang/auth`
```bash
mkdir -p packages/auth
cd packages/auth
ace init --name @rea-faang/auth
```

Configure with auth-specific settings:
```json
{
  "name": "@rea-faang/auth",
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

#### Initialize Shared Package: `@rea-faang/storage`
```bash
mkdir -p packages/storage
cd packages/storage
ace init --name @rea-faang/storage
```

Configure with storage-specific settings:
```json
{
  "name": "@rea-faang/storage",
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

#### Initialize Shared Package: `@rea-faang/ui`
```bash
mkdir -p packages/ui
cd packages/ui
ace init --name @rea-faang/ui
```

Configure with UI-specific settings:
```json
{
  "name": "@rea-faang/ui",
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
/rea-faang (root ACE workspace)
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
│   └── rea-social/
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
  "nohoist": ["**/@rea-faang/*"]
}
```

Or use npm link for local development:
```bash
# From each package directory
npm link

# From product workspace
npm link @rea-faang/auth @rea-faang/storage @rea-faang/ui
```

### Agent Orchestration Setup

#### Root-level Governor Configuration
Each product supervisor reports to the root governor:

```bash
# Start root governor
ace govern

# In separate terminal, monitor rea-social supervisor
ace supervise --project rea-social
```

#### Initialize Agents for REA Social
```bash
# Create agent roles
ace task add --title "Set up REA Social project structure" --project rea-social --role architect
ace task claim <task-id> --agent architect-1

# Research agent investigates Instagram
ace task add --title "Investigate Instagram feed and story workflows" --project rea-social --role researcher
ace task claim <task-id> --agent researcher-1

# Frontend agent sets up React project
ace task add --title "Set up React + Vite project scaffolding" --project rea-social --role frontend
ace task claim <task-id> --agent frontend-1
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

## First Product: REA Social MVP Plan

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
- **Styling**: Tailwind CSS + @rea-faang/ui components
- **Backend**: Node.js + Express (or Hono)
- **Database**: PostgreSQL with Prisma ORM
- **Storage**: Local filesystem + S3-compatible fallback
- **Auth**: JWT + bcrypt, optional OAuth2 later
- **Testing**: Vitest + Playwright
- **Deployment**: Docker + Vercel (frontend) / Railway (backend)

#### ACE Runtime Configuration for REA Social
```json
// products/rea-social/ace config (subset)
{
  "goal": {
    "statement": "Build MVP of REA Social - Instagram alternative with photo upload, feed, profiles, and following",
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
- [x] Initialize first product: REA Social
- [x] Configure REA Social ACE workspace
- [x] Set up shared packages: @rea-faang/auth, @rea-faang/storage, @rea-faang/ui

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
ace status
ace context --json

# Verify all workspaces
ace agents
ace tasks

# Check adapter health
ace adapters health

# Verify configuration
ace config --resolve
```

### Expected Output Summary
```
Status: running
Agents: 6 active (researcher: 1, architect: 1, frontend: 1, backend: 1, tester: 1, reviewer: 1)
Tasks: 6 active, 0 completed
Context: Valid ace/v1 specification
Adapters: All healthy
Governor: Monitoring 1 supervisor (rea-social)
```

## Scaling to Full Infrastructure

### Phase 3: Expand Catalog (After REA Social MVP)
- Initialize additional product workspaces:
  - `products/rea-connect` (WhatsApp alternative)
  - `products/rea-market` (Marketplace alternative)
  - `products/rea-search` (Search engine alternative)
- Add shared modules:
  - `@rea-faang/sync` (CRDT synchronization)
  - `@rea-faang/api` (API client generation)
  - `@rea-faang/testing` (Test utilities)
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