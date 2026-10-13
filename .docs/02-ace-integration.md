> **Historical document — not authoritative.**
>
> This file predates the current CLI and ACE layout. It is kept for design
> history only and contains stale details (provider names, product names, and a
> workflow that no longer match the code). For current documentation see
> [`docs/`](../docs/README.md) and the repository [`README.md`](../README.md).

---

# ACE ProAgents Integration for RAE FAANG

> **The mission: make the products of the world's biggest technology companies free, open source, and accessible to everyone.**


## Overview
RAE FAANG uses **ACE (Agentic Compute Environment)** as its agent orchestration framework. ACE provides a git-native package ecosystem for reproducible orchestrator-driven agent environments (spec `ace/v1`).

## Why ACE?
- **Zero runtime dependencies** - Node ESM only (`ace.mjs`)
- **Git stays source of truth** - Environment specs in `package.json` + `ace-lock.json`
- **Specification is not state** - Runtime state in `.ace/` (private, not published)
- **Self-contained workspaces** - Each product gets its own ACE workspace
- **Governance built-in** - Governor → Supervisor → Worker hierarchy
- **Adapters for everything** - Swappable providers for all capabilities

## Workspace Structure

### Monorepo Approach
```
 /rae-faang (root ACE workspace)
├ package.json          # Root manifest with ace key
├ ace-lock.json         # Resolved dependencies
├ ace.mjs               # ACE CLI entry point
├ lib/                  # ACE modules
├ .docs/                # This documentation
├ products/             # Individual product workspaces
│   ├── rae-social/     # Meta: Instagram alternative
│   ├── rae-connect/    # Meta: WhatsApp alternative
│   ├── rae-market/     # Amazon: Marketplace
│   ├── rae-cloud/      # Amazon: Cloud platform
│   ├── rae-desktop/    # Apple: Desktop environment
│   ├── rae-video/      # Netflix: Streaming platform
│   ├── rae-search/     # Google: Search engine
│   └── rae-maps/       # Google: Maps
├ shared/               # Shared infrastructure
│   ├── auth/           # Authentication module
│   ├── storage/        # Storage abstraction
│   ├── sync/           # Synchronization engine
│   └── ui/             # Shared UI components
└ .ace/                 # Runtime state (gitignored)
```

### Per-Product ACE Workspace
Each product in `products/` is a self-contained ACE workspace:
```
 /products/rae-social/
├ package.json          # Product manifest + ace spec
├ ace-lock.json
├ ace.mjs               # Copied from root
├ lib/                  # Copied from root
├ src/                  # Product source code
├ tests/                # Test suites
├ specs/                # Feature specifications
├ .ace/                 # Runtime state
└ README.md
```

## ACE Configuration for RAE FAANG

### Root package.json (ace key)
```json
{
  "name": "rae-faang",
  "version": "0.1.0",
  "license": "MIT",
  "type": "module",
  "engines": { "node": ">=20", "ace": ">=1.0.0" },
  "dependencies": {},
  "ace": {
    "spec": "ace/v1",
    "name": "rae-faang",
    "orchestrator": { "runtime": "opencode", "role": "orchestrator" },
    "goal": {
      "statement": "Build open-source alternatives to FAANG products through agent-assisted reverse engineering and implementation",
      "milestones": [
        "Establish project organization and standards",
        "Complete first working alternative (RAE Social MVP)",
        "Implement shared infrastructure modules",
        "Scale to 5+ products with agentic automation",
        "Achieve open ecosystem with community contributions"
      ]
    },
    "agents": {
      "strategy": "dynamic",
      "defaults": { "runtime": "opencode" },
      "workers": [
        { "role": "researcher", "capabilities": ["web-search", "code-analysis", "spec-extraction"] },
        { "role": "architect", "capabilities": ["system-design", "api-design", "data-modeling"] },
        { "role": "frontend", "capabilities": ["react", "typescript", "css", "accessibility"] },
        { "role": "backend", "capabilities": ["node", "database", "api", "auth"] },
        { "role": "tester", "capabilities": ["unit-testing", "integration-testing", "e2e-testing"] },
        { "role": "reviewer", "capabilities": ["code-review", "security-audit", "performance"] },
        { "role": "documenter", "capabilities": ["technical-writing", "api-docs", "user-guides"] }
      ]
    },
    "tools": ["git", "github", "filesystem", "terminal", "web-search"],
    "runtime": { "provider": "local" },
    "extends": [],
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
    "git": { "push": true, "worktrees": true },
    "policies": {
      "require_review_before_merge": true,
      "production_access": false
    },
    "concurrency": {
      "max_active_agents": 8,
      "count_governor": false,
      "count_supervisors": false,
      "runtime_overrides": { "opencode": 4 }
    },
    "recovery": {
      "max_restarts": 3,
      "max_route_switches": 2,
      "cooldown_seconds": 30,
      "progress_window_seconds": 300
    },
    "experimental": {
      "management_bots": { "enabled": false }
    }
  }
}
```

## Agent Roles & Responsibilities

### Researcher Agents
- Investigate publicly observable product behavior
- Gather evidence from documentation, APIs, network traffic
- Extract feature specifications and user workflows
- Document findings in `specs/` directory

### Architect Agents
- Translate research into technical specifications
- Design system architecture and data models
- Define API contracts and integration points
- Create implementation plans with acceptance criteria

### Frontend Agents
- Implement user interfaces using React/TypeScript
- Ensure accessibility (WCAG 2.1 AA)
- Build responsive, cross-platform components
- Integrate with shared UI component library

### Backend Agents
- Build APIs, databases, authentication
- Implement business logic and data processing
- Ensure security best practices
- Optimize for performance and scalability

### Tester Agents
- Write unit, integration, and E2E tests
- Validate against acceptance criteria
- Test compatibility and interoperability
- Generate test reports and coverage metrics

### Reviewer Agents
- Perform code reviews for quality and security
- Audit for vulnerabilities and privacy issues
- Verify adherence to architecture principles
- Approve or request changes to handoffs

### Documenter Agents
- Create technical documentation
- Write API references and user guides
- Maintain architecture decision records
- Generate release notes and migration guides

## Governance Flow

```
 Governor (rae-faang root)
 ├── Monitors all project supervisors
 ├── Validates progress against milestones
 ├── Replaces failed routes/providers
 └── Escalates unresolvable issues

 Supervisor (per product workspace)
 ├── Decomposes goals into bounded tasks
 ├── Assigns tasks to workers (single owner)
 ├── Monitors worker progress and health
 ├── Switches worker routes when needed
 └── Verifies integrated work passes checks

 Worker (specialized agents)
 ├── Claims and executes assigned tasks
 ├── Reports changes, commands, results
 ├── Documents untested areas and risks
 └── Creates handoff artifacts on completion
```

## Commands Reference

### Workspace Management
```bash
# Initialize root workspace
node ace.mjs init --name rae-faang

# Initialize product workspace
cd products/rae-social
node ace.mjs init --name rae-social

# Install dependencies (from lockfile or git)
node ace.mjs install

# Start runtime
node ace.mjs run

# Check status
node ace.mjs status
node ace.mjs context --json
```

### Governance
```bash
# Run governor cycle
node ace.mjs govern --dry-run
node ace.mjs govern

# Supervise specific project
node ace.mjs supervise --project rae-social

# Task management
node ace.mjs task add --title "Implement feed algorithm" --project rae-social
node ace.mjs task list --project rae-social
node ace.mjs task claim <id> --agent frontend-1
node ace.mjs task start <id>
node ace.mjs task review <id>
node ace.mjs task integrate <id>
```

### Handoffs
```bash
node ace.mjs handoff submit <task> --file handoff.json
node ace.mjs handoff verify <task>
```

### Monitoring & Recovery
```bash
# View agents, tasks, events
node ace.mjs agents
node ace.mjs tasks
node ace.mjs events --limit 50
node ace.mjs logs --limit 100

# Snapshots for checkpoint/rollback
node ace.mjs snapshot
node ace.mjs restore <id>

# Autopilot for continuous operation
node ace.mjs autopilot on --interval 300 --mission "Complete RAE Social MVP"
node ace.mjs autopilot run --max-cycles 10
node ace.mjs autopilot off

# Watchdog (governor self-recovery)
node ace.mjs watchdog on
node ace.mjs watchdog status
node ace.mjs watchdog cycle
```

### Verification
```bash
# Run verification scripts (lint, typecheck, test, build)
node ace.mjs verify

# Check configuration
node ace.mjs config --resolve
node ace.mjs config check

# Adapter health
node ace.mjs adapters health
node ace.mjs adapters audit
```