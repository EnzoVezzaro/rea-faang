> **Historical document — not authoritative.**
>
> This file predates the current CLI and ACE layout. It is kept for design
> history only and contains stale details (provider names, product names, and a
> workflow that no longer match the code). For current documentation see
> [`docs/`](../docs/README.md) and the repository [`README.md`](../README.md).

---

# Architecture Decision Records (ADRs)

> **The mission: make the products of the world's biggest technology companies free, open source, and accessible to everyone.**



## ADR Format
Each architectural decision is recorded in `architecture/adrs/` with format:
```
ADR-<number>-<short-title>.md
```

## ADR Template
```markdown
# ADR-<number>: <Title>

**Status**: Proposed | Accepted | Superseded | Deprecated
**Date**: YYYY-MM-DD
**Deciders**: <names/roles>
**Tags**: <comma-separated>

## Context
What is the issue that motivates this decision?

## Decision
What is the change we're proposing/doing?

## Consequences
### Positive
- 

### Negative
- 

### Neutral
- 

## Alternatives Considered
1. <alternative> - <reason rejected>
2. <alternative> - <reason rejected>

## Implementation Notes
- 

## Related ADRs
- ADR-<number>
```

## Accepted ADRs

### ADR-001: Monorepo with Per-Product ACE Workspaces
**Status**: Accepted
**Date**: 2026-10-13
**Deciders**: Architecture Team

**Context**: Need to manage 25+ product alternatives with shared infrastructure while maintaining independent deployment and development.

**Decision**: 
- Root repository contains shared infrastructure and ACE configuration
- Each product in `products/<name>/` is a self-contained ACE workspace
- Shared modules published as npm packages (`@REA-faang/*`)
- Git worktrees for parallel task isolation

**Consequences**:
- Positive: Independent versioning, clear ownership, shared tooling
- Negative: Initial setup complexity, duplicate ACE runtime per product
- Neutral: Requires CI/CD matrix for multi-product builds

### ADR-002: TypeScript as Primary Language
**Status**: Accepted
**Date**: 2026-10-13
**Deciders**: Architecture Team

**Context**: Need type safety across frontend, backend, and shared packages for AI agent reliability.

**Decision**: 
- TypeScript strict mode for all new code
- Shared types in `@REA-faang/types` package
- Zod schemas for runtime validation
- tsc for type checking in CI

**Consequences**:
- Positive: AI agents can reason about types, catch errors early
- Negative: Build step required, learning curve for contributors
- Neutral: Compatible with JavaScript ecosystem

### ADR-003: Local-First with Optional Cloud Sync
**Status**: Accepted
**Date**: 2026-10-13
**Deciders**: Architecture Team

**Context**: User ownership and data portability are core principles.

**Decision**:
- All products work fully offline/local
- Sync is opt-in, uses CRDTs (Yjs/Automerge)
- Self-hosted sync server option
- Data export in standard formats (JSON, SQL, Markdown)

**Consequences**:
- Positive: User control, privacy, offline capability
- Negative: Conflict resolution complexity, eventual consistency
- Neutral: Requires careful schema design for CRDT compatibility

### ADR-004: React + React Native for Frontend
**Status**: Accepted
**Date**: 2026-10-13
**Deciders**: Architecture Team

**Context**: Cross-platform requirement (web, desktop, mobile) with shared code.

**Decision**:
- React for web (Next.js for SSR/SEO)
- React Native for mobile (Expo for managed workflow)
- Tauri for desktop (Rust backend, WebView frontend)
- Shared components in `@REA-faang/ui`

**Consequences**:
- Positive: Maximum code sharing, large ecosystem, AI agent familiarity
- Negative: Bundle size, native performance gaps
- Neutral: Alternative: Flutter, but less AI training data

### ADR-005: PostgreSQL + Redis for Backend
**Status**: Accepted
**Date**: 2026-10-13
**Deciders**: Architecture Team

**Context**: Need reliable, scalable, well-understood data layer for multiple products.

**Decision**:
- PostgreSQL 16+ for primary storage (JSONB for flexibility)
- Redis for caching, sessions, pub/sub, rate limiting
- Prisma ORM for type-safe database access
- pgvector for AI/embedding workloads

**Consequences**:
- Positive: Mature, ACID, JSON support, vector search, AI agent friendly
- Negative: Operational overhead vs SQLite/embedded
- Neutral: Can swap to CockroachDB for multi-region

### ADR-006: Open Standards First Protocol Strategy
**Status**: Accepted
**Date**: 2026-10-13
**Deciders**: Architecture Team

**Context**: Interoperability and avoiding vendor lock-in are core principles.

**Decision**:
- ActivityPub for social federation (Mastodon compatible)
- Matrix for messaging (Element compatible)
- WebRTC for real-time communication
- OpenID Connect/OAuth 2.1 for auth
- S3-compatible API for storage
- OpenAPI 3.1 for REST APIs

**Consequences**:
- Positive: Ecosystem integration, existing clients, no lock-in
- Negative: May limit custom features, spec compliance burden
- Neutral: Can extend with proprietary features behind flags

### ADR-007: AI Agent Development Workflow
**Status**: Accepted
**Date**: 2026-10-13
**Deciders**: Architecture Team

**Context**: REA FAANG explicitly uses AI agents as development infrastructure.

**Decision**:
- ACE (ace-proagents) for agent orchestration
- Opencode as primary agent runtime
- Specialized agent roles (researcher, architect, frontend, backend, tester, reviewer, documenter)
- Governance: Governor → Supervisor → Worker
- Verification gates: lint → typecheck → test → build

**Consequences**:
- Positive: Accelerated development, consistent process, auditability
- Negative: Dependency on ACE framework, agent reliability variance
- Neutral: Human review required for all merges

### ADR-008: Clean Room Reverse Engineering Policy
**Status**: Accepted
**Date**: 2026-10-13
**Deciders**: Legal, Architecture Team

**Context**: Must legally and ethically rebuild FAANG products without infringing.

**Decision**:
- Only publicly observable behavior as reference
- No decompilation, disassembly, or proprietary code access
- Independent implementation from specifications
- Provenance tracking in all handoffs
- Legal review for each product before release

**Consequences**:
- Positive: Legal defensibility, ethical clarity
- Negative: Slower initial development, gaps in undocumented behavior
- Neutral: Community can contribute observed behaviors

### ADR-009: Testing Strategy - Contract-First
**Status**: Accepted
**Date**: 2026-10-13
**Deciders**: Architecture Team

**Context**: Need reliable verification that implementations match specifications.

**Decision**:
- Acceptance criteria → Contract tests → Implementation
- Pact for consumer-driven contracts
- Vitest for unit, Playwright for E2E
- Property-based testing for algorithms (fast-check)
- Mutation testing for test quality (Stryker)

**Consequences**:
- Positive: Living documentation, prevents regressions, AI-verifiable
- Negative: Upfront investment, maintenance overhead
- Neutral: Test generation by AI agents encouraged

### ADR-010: Observability Stack
**Status**: Accepted
**Date**: 2026-10-13
**Deciders**: Architecture Team

**Context**: Need visibility into distributed system across products.

**Decision**:
- OpenTelemetry for instrumentation
- Prometheus + Grafana for metrics
- Loki for logs
- Tempo for traces
- Custom dashboards per product

**Consequences**:
- Positive: Vendor-neutral, CNCF standard, AI agent analyzable
- Negative: Operational complexity, resource overhead
- Neutral: Can integrate with cloud providers later