> **Historical document — not authoritative.**
>
> This file predates the current CLI and ACE layout. It is kept for design
> history only and contains stale details (provider names, product names, and a
> workflow that no longer match the code). For current documentation see
> [`docs/`](../docs/README.md) and the repository [`README.md`](../README.md).

---

# Development Workflow

> **The mission: make the products of the world's biggest technology companies free, open source, and accessible to everyone.**



## Overview
REA FAANG uses a structured, agent-assisted development workflow based on the ACE framework. This document describes the end-to-end process from feature identification to production release.

## Workflow Stages

### Stage 1: Investigation & Research
**Owner**: Researcher Agents
**Output**: `specs/01-product-vision.md`, `specs/02-user-workflows.md`, `specs/03-feature-catalog.md`

```
1. Select target product/feature from roadmap
2. Researcher agents gather evidence:
   - Public documentation review
   - Network/API observation (authorized)
   - User workflow mapping
   - Competitive analysis (existing open alternatives)
3. Document findings with source citations
4. Identify unknowns and assumptions
5. Architecture review of findings
```

**ACE Commands**:
```bash
node ace.mjs task add --title "Investigate Instagram feed algorithm" --project REA-social --role researcher
node ace.mjs task claim <id> --agent researcher-1
node ace.mjs task start <id>
# ... research work ...
node ace.mjs handoff submit <task> --file investigation-results.json
node ace.mjs handoff verify <task>
```

### Stage 2: Specification & Design
**Owner**: Architect Agents
**Output**: `specs/04-data-models.md`, `specs/05-api-contracts.md`, `specs/06-architecture.md`, `specs/07-acceptance-criteria.md`

```
1. Translate research into technical specifications
2. Define data models, API contracts, system boundaries
3. Create acceptance criteria (testable, measurable)
4. Design system architecture with component diagram
5. Identify shared infrastructure needs
6. Security threat modeling (STRIDE)
7. Architecture decision records (ADRs) for key choices
```

**ACE Commands**:
```bash
node ace.mjs task add --title "Design REA Social data models" --project REA-social --role architect
node ace.mjs task claim <id> --agent architect-1
# ... design work ...
node ace.mjs handoff submit <task> --file design-spec.json
```

### Stage 3: Implementation
**Owner**: Frontend/Backend Agents (parallel)
**Output**: Source code in `src/`, tests in `tests/`

```
1. Break specification into independent tasks
2. Each task assigned to single owner (lease enforced)
3. Implement with TDD: test first, then code
4. Use shared infrastructure packages
5. Follow coding standards (ESLint, Prettier, TypeScript strict)
6. Regular commits with conventional messages
7. Create handoff artifact on completion
```

**Task Decomposition Example**:
```
Feature: Photo Upload (F-001)
├── Task: Backend - Upload API endpoint (POST /api/media)
├── Task: Backend - Media processing pipeline (thumbnails, EXIF)
├── Task: Backend - Storage abstraction (local/S3/compatible)
├── Task: Frontend - Upload component (drag-drop, progress)
├── Task: Frontend - Media picker (camera, library)
├── Task: Integration - End-to-end upload flow
└── Task: Tests - Upload acceptance criteria validation
```

**ACE Commands**:
```bash
# Create multiple tasks
node ace.mjs task add --title "Backend: Upload API" --project REA-social --role backend --depends-on <design-task-id>
node ace.mjs task add --title "Frontend: Upload Component" --project REA-social --role frontend --depends-on <design-task-id>

# Claim and execute
node ace.mjs task claim <backend-task-id> --agent backend-1
node ace.mjs task claim <frontend-task-id> --agent frontend-1
node ace.mjs task start <backend-task-id>
node ace.mjs task start <frontend-task-id>
```

### Stage 4: Verification
**Owner**: Tester Agents + Reviewer Agents
**Output**: Test reports, review approvals, integration validation

```
1. Tester agents execute test suites
2. Verify against acceptance criteria
3. Contract testing (Pact) for API compatibility
4. E2E testing for critical user flows
5. Performance benchmarking
6. Accessibility audit (axe-core)
7. Security scan (SAST, dependency audit)
8. Reviewer agents approve handoffs
9. Supervisor verifies integrated project passes
```

**ACE Commands**:
```bash
# Run verification
node ace.mjs verify

# Or specific checks
node ace.mjs task add --title "E2E: Photo upload flow" --project REA-social --role tester
node ace.mjs verify lint
node ace.mjs verify typecheck
node ace.mjs verify test
node ace.mjs verify build
```

### Stage 5: Release
**Owner**: Supervisor + Governor
**Output**: Tagged release, deployment artifacts, documentation

```
1. Supervisor integrates all verified tasks
2. Governor confirms milestone alignment
3. Version bump (semantic versioning)
4. CHANGELOG generation
5. Docker image build and push
6. Deployment to staging
7. Smoke tests in staging
8. Production deployment (or release artifacts for self-host)
9. Release notes publication
10. Community announcement
```

## Continuous Integration

### GitHub Actions Workflow (`.github/workflows/ci.yml`)
```yaml
name: CI
on: [push, pull_request]

jobs:
  verify:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20', cache: 'npm' }
      - run: npm ci
      - run: node ace.mjs install
      - run: node ace.mjs verify lint
      - run: node ace.mjs verify typecheck
      - run: node ace.mjs verify test
      - run: node ace.mjs verify build
```

### Pre-commit Hooks (`.husky/pre-commit`)
```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```

### Lint-staged Config (`package.json`)
```json
{
  "lint-staged": {
    "*.{ts,tsx,js,jsx}": ["eslint --fix", "prettier --write"],
    "*.{json,md,yml,yaml}": ["prettier --write"]
  }
}
```

## Agent Handoff Protocol

### Handoff Artifact Structure (`.ace/handoffs/<task>/<attempt>.json`)
```json
{
  "taskId": "task-123",
  "attempt": 1,
  "agentId": "backend-1",
  "agentRole": "backend",
  "status": "completed",
  "summary": "Implemented POST /api/media endpoint with multipart upload, validation, and thumbnail generation",
  "changedFiles": [
    "src/api/media/upload.ts",
    "src/services/media/processor.ts",
    "tests/api/media/upload.test.ts"
  ],
  "commands": [
    { "command": "npm test tests/api/media/upload.test.ts", "exitCode": 0, "duration": 4500 },
    { "command": "npm run lint src/api/media", "exitCode": 0, "duration": 1200 }
  ],
  "checksNotRun": ["integration-test", "load-test"],
  "decisions": [
    "Used sharp for image processing (MIT license, fast)",
    "Stored thumbnails alongside originals in same bucket"
  ],
  "risks": [
    "Large file upload timeout not tested (>50MB)",
    "Concurrent upload handling needs load test"
  ],
  "recommendedNextAction": "Integration test with frontend upload component",
  "completedAt": "2026-10-13T14:30:00Z"
}
```

### Handoff Verification Checklist
- [ ] At least one command exited 0 (proves code runs)
- [ ] Changed files match task scope
- [ ] No untested critical paths without documented risk
- [ ] Decisions are reversible or documented
- [ ] Next action is specific and actionable

## Branch Strategy

### Main Branch Protection
- `main` branch protected
- Required reviews: 1 (Reviewer agent + human)
- Required status checks: lint, typecheck, test, build
- Linear history (squash merge)

### Feature Branches
```
feature/<product>-<short-description>
# Examples:
feature/REA-social-photo-upload
feature/REA-search-indexing-pipeline
feature/shared-auth-oauth2-provider
```

### Release Branches
```
release/<product>-v<major>.<minor>
# Example: release/REA-social-v1.0
```

## Release Process

### Versioning
- Semantic Versioning (MAJOR.MINOR.PATCH)
- MAJOR: Breaking API changes
- MINOR: New features, backward compatible
- PATCH: Bug fixes, backward compatible

### Release Checklist
- [ ] All milestone tasks verified
- [ ] CHANGELOG.md updated
- [ ] Version bumped in package.json
- [ ] Git tag created: `v<version>`
- [ ] Docker images built and tagged
- [ ] Documentation deployed
- [ ] Release notes published
- [ ] Community notification sent

## Monitoring & Metrics

### Development Metrics (tracked in ACE)
- Task cycle time (claim → complete)
- Handoff rejection rate
- Verification pass rate
- Agent utilization
- Code review turnaround

### Product Metrics (post-release)
- Active users (self-hosted: opt-in telemetry)
- Feature adoption
- Error rates
- Performance percentiles
- Community contributions

## Incident Response

### Severity Levels
| Level | Description | Response Time | Escalation |
|-------|-------------|---------------|------------|
| SEV-1 | Data loss, security breach, total outage | 15 min | Governor → Human |
| SEV-2 | Major feature broken, partial outage | 1 hour | Supervisor → Human |
| SEV-3 | Minor bug, degraded performance | 4 hours | Worker → Supervisor |
| SEV-4 | Cosmetic, documentation | Next sprint | Backlog |

### Process
1. Alert triggers (monitoring or user report)
2. Governor creates incident task
3. Supervisor assigns to appropriate worker
4. Fix implemented, verified, deployed
5. Postmortem written within 48 hours
6. Action items tracked to completion