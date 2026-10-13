> **Historical document — not authoritative.**
>
> This file predates the current CLI and ACE layout. It is kept for design
> history only and contains stale details (provider names, product names, and a
> workflow that no longer match the code). For current documentation see
> [`docs/`](../docs/README.md) and the repository [`README.md`](../README.md).

---

# Quick Start Guide

## Prerequisites

### Required Software
- **Node.js**: v20+ (LTS recommended)
- **npm**: v10+ (comes with Node.js)
- **Git**: For version control and worktrees
- **PostgreSQL**: v16+ (for backend products)
- **Docker** (optional, for containerized products)

### Recommended Editors
- **VS Code** with recommended extensions:
  - ESLint
  - Prettier
  - TypeScript
  - vitest
- **Opencode** for ACE agent integration

### ace-proagents Installation
```bash
# Clone the framework
git clone https://github.com/EnzoVezzaro/ace-proagents.git /tmp/ace-proagents

# Or install from npm (once published)
npm i ace-proagents
```

## Minimal Setup (5 Minutes)

### 1. Initialize RAE FAANG Workspace
```bash
# Clone this repo (if not already)
git clone <your-repo-url> rae-faang
cd rae-faang

# Initialize ACE workspace
node /tmp/ace-proagents/ace.mjs init --name rae-faang
```

### 2. Verify Setup
```bash
node ace.mjs status
# Should show: Status: running, Valid ace/v1 specification
```

### 3. First Product: RAE Social
```bash
mkdir -p products/rae-social
cd products/rae-social
node /tmp/ace-proagents/ace.mjs init --name rae-social
```

### 4. Install Dependencies
```bash
# From root workspace
npm install

# From product workspace
cd ../rae-social
npm install

# Install shared packages
cd ../rae-faang  # root
npm install @rae-faang/auth @rae-faang/storage @rae-faang/ui --workspaces
```

### 5. Start Development
```bash
# Root: start governor
node ace.mjs govern

# Product: start runtime
cd rae-social
node ace.mjs run

# Or combined from root
node ace.mjs run

# Open opencode for agent collaboration
opencode
```

## Development Commands Cheatsheet

### ACE CLI Quick Reference
| Command | Alias | Description |
|---------|-------|-------------|
| `ace init --name <n>` | | Scaffold workspace |
| `ace install` | | Install dependencies |
| `ace run` | | Start runtime |
| `ace status` | | Check status |
| `ace context --json` | | Show environment |
| `ace agents` | | List agents |
| `ace tasks` | | List tasks |
| `ace agents` | | List agents |
| `ace events --limit 20` | | Show recent events |
| `ace logs --limit 50` | | Tail event log |
| `ace verify` | | Run all checks |
| `ace govern` | | Governor cycle |
| `ace supervise --project <p>` | | Supervise project |
| `ace task add --title "<t>" --project <p> --role <r>` | | Create task |
| `ace task claim <id> --agent <a>` | | Claim task |
| `ace task start <id>` | | Start task |
| `ace task review <id>` | | Review task |
| `ace task integrate <id>` | | Integrate task |
| `ace handoff submit <task> --file <json>` | | Submit handoff |
| `ace handoff verify <task>` | | Verify handoff |
| `ace snapshot` | | Create snapshot |
| `ace restore <id>` | | Restore snapshot |
| `ace autopilot on --mission "<m>"` | | Start autopilot |
| `ace autopilot run --max-cycles 5` | | Run cycles then exit |
| `ace autopilot off` | | Stop autopilot |
| `ace watchdog on` | | Start watchdog |
| `ace watchdog status` | | Check watchdog |
| `ace watchdog cycle` | | One watchdog cycle |
| `ace config --resolve` | | Resolve config layers |
| `ace config check` | | Validate config |
| `ace adapters health` | | Check adapter health |
| `ace adapters audit` | | Audit adapter contracts |
| `ace doctor --json` | | Environment diagnostics |
| `ace secret set <name>` | | Store secret |

### Per-Product Commands
```bash
# From product workspace (rae-social)
cd products/rae-social

# Initialize (already done)
node ace.mjs init --name rae-social

# Run product-specific runtime
node ace.mjs run

# Supervise this product from root
# (already monitored by root governor)

# View product tasks
node ace.mjs tasks

# Product verification
node ace.mjs verify

# Product governance
node ace.mjs govern --project rae-social

# Stop product
node ace.mjs stop
```

### Shared Package Development
```bash
# From auth package
cd packages/auth
npm install  # or node ace.mjs install

# Develop locally with link
npm link  # from package dir
npm link @rae-faang/auth  # from product dir

# Or use npm workspaces from root
cd ../../rae-faang
npm install  # installs all workspace packages
```

### Testing Commands
```bash
# Unit tests (Vitest)
npm test  # or npx vitest run

# Specific test files
npx vitest run tests/api/media/upload.test.ts

# With coverage
npx vitest run --coverage

# E2E tests (Playwright)
npx playwright test

# Lint
npm run lint

# Type check
npm run typecheck  # if configured
# (usually: tsc --noEmit)
```

### Release Commands
```bash
# Version bump (semantic)
npm version patch   # or minor, major
# Or manually edit package.json

# Create git tag
git tag v0.1.0
git push origin v0.1.0

# Build for production
npm run build

# Docker build (if configured)
docker build -t rae-social:0.1.0 .

# Or via ACE
node ace.mjs run  # with production config
```

## Troubleshooting Common Issues

| Problem | Solution |
|---------|----------|
| `node: command not found` | Install Node.js v20+ from nodejs.org or nvm |
| `ace: command not found` | Ensure you're in the rae-faang dir and ran `npm install`, or use `node ace.mjs` |
| `INCOMPATIBLE_ADAPTER` | Run `node ace.mjs adapters audit`, use implemented providers |
| `MISSING_CREDENTIAL` | Run `node ace.mjs secret set <name>` for required credentials |
| `SECURITY_OVERRIDE_DENIED` | Check installation profile or environment profile settings |
| `CHAIN_EXHAUSTED` | Add fallback providers, verify all credentials are set |
| `NO_PROGRESS` | Check task has acceptance criteria, verify worker heartbeat |
| `ETIMEDOUT` / `ECONNREFUSED` | Check network policy, provider reachability, credentials |
| `ENOSPC` | Increase filesystem watchers, clean up old snapshots |
| `EACCES` | Check filesystem mode, git worktree permissions |
| Agent not responding | Check `.ace/heartbeats/`, restart with `ace restart` |

## Opencode Integration

### Launching Opencode with ACE
```bash
# From rae-faang root
opencode

# Or specify workspace
opencode --workspace ./rae-faang

# Opencode will auto-detect ACE configuration
# and set up agent orchestration
```

### Opencode Agent Roles Mapping
| ACE Role | Opencode Persona |
|----------|------------------|
| researcher | Web search, documentation gathering |
| architect | System design, architecture diagrams |
| frontend | React/TS component implementation |
| backend | Node.js, API, database work |
| tester | Test writing, validation |
| reviewer | Code review, quality assurance |
| documenter | Docs writing, README generation |

### Opencode Commands in ACE Context
```bash
# From within opencode, you can:
node ace.mjs task add --title "Implement upload" --project rae-social --role frontend
node ace.mjs task claim <id> --agent frontend-1
node ace.mjs verify  # From opencode session
```

## Next Actions

### Immediate (Next 30 Minutes)
1. Run `node /tmp/ace-proagents/ace.mjs init --name rae-faang` in `/Users/mac/Desktop/Github/rae-faang`
2. Verify `ace.mjs status` shows running state
3. Create `products/rae-social` directory and initialize
4. Read `.docs/01-project-overview.md` and `.docs/02-ace-integration.md`
5. Run `npm install` from root

### Short-term (Next 2 Hours)
1. Run researcher agent to investigate Instagram photo upload workflow
2. Create first specification in `products/rae-social/specs/03-feature-catalog.md`
3. Initialize shared package `@rae-faang/auth`
4. Set up React + Vite in RAE Social frontend
5. Configure PostgreSQL database schema

### Medium-term (Next 2 Days)
1. Implement F-001: Photo/Video Upload MVP
2. Run first `ace verify` cycle
3. Complete first handoff artifact
4. Publish infrastructure health report
5. Invite first contributors

### Long-term (First Sprint)
1. Complete RAE Social MVP (4 core features)
2. Release v0.1.0
3. Initialize second product workspace
4. Expand shared infrastructure
5. Enable autopilot for continuous development