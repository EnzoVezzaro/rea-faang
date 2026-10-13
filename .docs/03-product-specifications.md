> **Historical document — not authoritative.**
>
> This file predates the current CLI and ACE layout. It is kept for design
> history only and contains stale details (provider names, product names, and a
> workflow that no longer match the code). For current documentation see
> [`docs/`](../docs/README.md) and the repository [`README.md`](../README.md).

---

# Product Specifications Template

> **The mission: make the products of the world's biggest technology companies free, open source, and accessible to everyone.**



## Standard Specification Format
Every RAE FAANG product follows this specification structure in `products/<name>/specs/`:

```
specs/
├── 01-product-vision.md       # High-level vision and goals
├── 02-user-workflows.md       # Core user journeys and flows
├── 03-feature-catalog.md      # Complete feature inventory
├── 04-data-models.md          # Entity relationships, schemas
├── 05-api-contracts.md        # REST/GraphQL/gRPC definitions
├── 06-architecture.md         # System design, components
├── 07-acceptance-criteria.md  # Testable completion criteria
├── 08-security-model.md       # Threat model, mitigations
├── 09-integration-points.md   # External dependencies, APIs
└── 10-migration-guide.md      # From proprietary to RAE alternative
```

## Specification Quality Gates

### Evidence Requirements
- **Observed Behavior**: Direct observation of target product
- **Public Documentation**: Official docs, API references, blog posts
- **Network Analysis**: API calls, data formats, protocols (authorized only)
- **Open Source References**: Related open projects, standards
- **Community Knowledge**: Public forums, reverse engineering writeups

### Verification Levels
| Level | Description | Evidence Required |
|-------|-------------|-------------------|
| L1 - Documented | Specification written, source cited | 1+ public sources |
| L2 - Prototyped | Working prototype demonstrates behavior | Code + test passing |
| L3 - Verified | Automated tests validate against criteria | Full test suite passing |
| L4 - Compatible | Interoperates with target ecosystem | Integration tests |
| L5 - Production | Deployed, monitored, maintained | Live usage metrics |

## Product Specification Examples

### RAE Social (Instagram Alternative) - specs/03-feature-catalog.md excerpt

```markdown
# Feature Catalog: RAE Social

## Core Features (MVP - Phase 2)

### F-001: Photo/Video Upload
- **Reference**: Instagram post creation flow
- **Evidence**: Public API docs, mobile app observation
- **Acceptance**: 
  - Upload JPEG, PNG, HEIC, MP4, MOV up to 100MB
  - Progress indicator, background upload
  - Automatic thumbnail generation
  - EXIF stripping option (privacy)
- **Verification Level Target**: L3

### F-002: Feed Algorithm
- **Reference**: Instagram chronological + algorithmic feed
- **Evidence**: Public blog posts, user reports
- **Acceptance**:
  - Chronological ordering option
  - Algorithmic ranking (engagement, recency, relationship)
  - Configurable weights per user
  - "Show less like this" feedback
- **Verification Level Target**: L3

### F-003: Stories (24h Ephemeral Content)
- **Reference**: Instagram Stories
- **Evidence**: Public feature descriptions
- **Acceptance**:
  - Photo/video with text, stickers, drawing
  - 24-hour expiration, automatic cleanup
  - Viewer list for author
  - Reply via DM
- **Verification Level Target**: L2 (MVP), L3 (Phase 3)

### F-004: Direct Messaging
- **Reference**: Instagram Direct / Messenger
- **Evidence**: Signal Protocol specs, public API
- **Acceptance**:
  - E2E encryption (Signal Protocol)
  - Text, media, voice messages
  - Group conversations (up to 32)
  - Message reactions, replies
- **Verification Level Target**: L3

## Extended Features (Phase 3+)

### F-005: Reels (Short-form Video)
### F-006: Explore/Discovery
### F-007: Creator Analytics
### F-008: Shopping Tags
### F-009: Live Streaming
### F-010: AR Filters/Effects
```

### RAE Search (Google Search Alternative) - specs/04-data-models.md excerpt

```markdown
# Data Models: RAE Search

## Core Entities

### Document
```typescript
interface SearchDocument {
  id: string;                    // Content hash (SHA-256)
  url: string;                   // Canonical URL
  title: string;                 // Extracted title
  content: string;               // Full text content
  contentHash: string;           // For deduplication
  language: string;              // ISO 639-1
  crawledAt: Date;               // Last crawl timestamp
  indexedAt: Date;               // Last index update
  metadata: DocumentMetadata;
  rankingSignals: RankingSignals;
}
```

### DocumentMetadata
```typescript
interface DocumentMetadata {
  contentType: 'html' | 'pdf' | 'text' | 'image' | 'video';
  contentLength: number;
  lastModified: Date | null;
  etag: string | null;
  robotsMeta: RobotsDirectives;
  structuredData: StructuredData[];
  outgoingLinks: string[];
  incomingLinkCount: number;
}
```

### RankingSignals
```typescript
interface RankingSignals {
  pageRank: number;              // Link graph score
  contentQuality: number;        // ML-based quality
  freshness: number;             // Recency boost
  userEngagement: number;        // Click-through, dwell
  authority: number;             // Domain trust
  relevance: number;             // Query-specific (runtime)
}
```

## Index Structure

### Inverted Index (Primary)
- Term → PostingList(DocumentID, positions, tf-idf)
- Compressed with Roaring Bitmaps
- Sharded by term hash

### Forward Index (Document Store)
- DocumentID → Full document + metadata
- Columnar storage (Parquet) for analytics
- Hot/cold tiering by access frequency

### Link Graph
- Adjacency list: SourceID → TargetID[]
- PageRank computed offline, stored per document
- Incremental updates for new documents
```