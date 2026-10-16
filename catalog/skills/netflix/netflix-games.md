---
name: netflix-games
description: "Evidence-aware build skill for Netflix Games (netflix-games); investigate, assess reuse, implement scoped behavior and verify."
---

# Netflix Games — implementation skill (`netflix-games`)

> **Research status:** pending. Alternative coverage is **no verified alternative**; this describes candidate research only and does not determine whether your agent can build the product. Dossier prose, capability labels and source URLs are not automatically verified. The compiler does not fetch websites or candidate source and does not infer undocumented behavior.

> This is the coding-agent build skill for **Netflix Games**. Give this file to your coding agent in the project where you want the product built.

## Product description

This is the coding-agent skill for **Netflix Games** (`netflix-games`). Product status and capability notes below distinguish catalog leads from verified behavior; use the source index and current dossier before scoping implementation.

## 1. Product identity and scope

| Field | Canonical record / result | Evidence status and limits |
|---|---|---|
| Name / stable ID | **Netflix Games** / `netflix-games` | Product catalog |
| Company / category | Netflix / `games` / `game-subscription` | Product catalog |
| Official website / docs | [https://www.netflix.com/tudum/games](https://www.netflix.com/tudum/games) / Not recorded | URL lead; compiler does not fetch source |
| Lifecycle / supported versions / platforms | active / Unknown / Unknown | Version/platform matrix not structured |
| Intended users, roles, jobs, value | Unknown | No structured evidence |
| Boundaries / original architecture | Unknown | Do not infer from category or marketing |
| Independent implementation scope | User-selected; start with evidenced vertical slice | Proposed decision |
| Exclusions | Proprietary source, protected assets, unauthorized access, unsupported parity claims | Clean-room boundary; further product-specific limits unknown |

Research lens: **games** — verify real users/jobs, complete lifecycles, platform/version support, permissions, persistence, failure and recovery behavior. Product type is a question prompt, not evidence of features.

## 2. Product capability map

Capability labels are leads, not complete verified behavior.

| Feature ID | Capability lead | Verification | Evidence | Behavioral details / priority |
|---|---|---|---|---|
| `NETFLIX-GAMES-CAP-57E4AE48` | Mobile games included with membership | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `NETFLIX-GAMES-CAP-10C489C5` | Cloud streaming of titles | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |
| `NETFLIX-GAMES-CAP-A62BAA00` | No ads or in-app purchases | UNKNOWN | None linked | User problem, entry, I/O, preconditions, permissions, state/dependencies, failures/recovery, platform and priority are unknown; investigate. |

## 3. Complete user workflows

**Observed start page, not a completed workflow:** dated capture exposes `button: Link copied to clipboard Share`, `button: play Puzzled Thumbnail`, `button: Previous items`, `button: Next items`, `button: Go to page 1`, `button: Go to page 2`, `button: Go to page 3`, `button: Action`, `button: Adventure`, `button: Arcade`, `button: Educational`, `button: Idler`, `button: Party`, `button: Puzzle`, `button: Racing`, `button: Role Playing`, `button: Simulation`, `button: Sports`, `button: Strategy`, `button: Table Top`, `link: Skip to main content`, `link: Sign In`, `link: Tudum by Netflix - Home`, `combobox: Select option`, `link: Home`, `link: Top 10`, `link: Trending`, `link: What to Watch`, `link: Shows`, `link: Movies`, `link: Puzzled`, `link: Podcasts`, `link: Shop opens in a new tab`, `link: Featured`, `link: Available Games`, `link: About`, `link: Starstruck Work out where the stars shine. Play`, `link: Sudoku Solve the classic numbers game. Play`, `link: Jigsaw Piece together the big picture. Play`, `link: Shapes Turn shapes into something bigger. Play`, `link: Crossover Swap letters and emojis into words. Play`, `link: Waywords Find the path hidden in words. Play`, `link: Keysmash Just add vowels. Play`, `link: Bonza Put the words back together. Play`, `link: Explore More Puzzles`, `link: cloud saves`, `link: maturity rating`, `link: Action`, `link: Adventure`, `link: Fantasy`, `link: Horror`, `link: Kids and Family`, `link: Reality`, `link: Sci-Fi`, `link: Article`, `link: Tudum Magazine Privacy Statement and Terms of Use`, `link: Below Surfaces to the No. 1 Spot in This Week’s Top 10`, `link: The Mosquito Bowl Trailer Puts Four College Football Heroes on the Front Lines`, `link: 24 Thrillers Too Suspenseful to Pause for Even a Second`, `link: The 2nd and 3rd STAGE of STEEL BALL RUN JoJo’s Bizarre Adventure Have Started`, `link: 10 Creature Features for When You’ve Had Enough of Humanity`, `link: East of Eden Triumphs to the No. 1 Spot in This Week's Top 10`, `link: TYSON Director Floyd Russ on Mike Tyson, Access, Archives, and the Toad`, `link: What Are the Rules of the STEEL BALL RUN Race in JoJo’s Bizarre Adventure?`, `link: See More`, `link: 8 Spicy Romance Movies and Series That Crank Up the Heat`, `link: Inside the Ending of East of Eden`, `link: East of Eden`, `link: Animals`, `link: UNABOMBER`, `link: Below`, `link: The Perfect Lie`, `link: The Gentlemen`, `link: The Whisper Man`, `link: Wonka's The Golden Ticket`, `link: Crew Girl`, `link: KPop Demon Hunters`, `link: Our Sticky Love`, `link: Beauty in Black`, `link: A Different World`, `link: My Life With the Walter Boys`, `button: Back To Top`, `link: Tudum By Netflix - Home`, `link: About Tudum`, `link: Netflix House`, `link: Netflix Shop`, `link: Sign Up`, `link: Privacy`, `link: Terms of Use`, `link: Cookie Preferences`, `link: Do Not Sell or Share My Personal Information`, `link: Ad Choices`, `button: Close`. It did not activate controls; submissions, results, validation, persistence, cancellation, retry and recovery remain UNKNOWN.

- **Mobile games included with membership:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **Cloud streaming of titles:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.
- **No ads or in-app purchases:** full workflow is UNKNOWN; investigate actor/permissions, start state, actions/responses, validation, intermediate state, persistence, integrations, success, cancellation, errors, retry, recovery and edge cases. Do not invent a category-typical journey.

## 4. Interaction and interface specification

| Observable interface | Evidence-backed snapshot | Unknown / untested |
|---|---|---|
| Navigation/landmarks | `banner`, `navigation: Main Menu`, `main`, `navigation: Page level navigation`, `contentinfo` | Full IA/routes/authenticated navigation |
| Views/headings | `All of The Games on Netflix Right Now - Netflix Tudum`, `Featured`, `Puzzled`, `Solve new word, logic, and visual puzzles daily`, `Starstruck`, `Sudoku`, `Jigsaw`, `Shapes`, `Crossover`, `Waywords`, `Keysmash`, `Bonza`, `Available Games`, `Action`, `Adventure`, `Arcade`, `Educational`, `Idler`, `Party`, `Puzzle`, `Racing`, `Role Playing`, `Simulation`, `Sports`, `Strategy` | Results and subsequent views |
| Controls | `button: Link copied to clipboard Share`, `button: play Puzzled Thumbnail`, `button: Previous items`, `button: Next items`, `button: Go to page 1`, `button: Go to page 2`, `button: Go to page 3`, `button: Action`, `button: Adventure`, `button: Arcade`, `button: Educational`, `button: Idler`, `button: Party`, `button: Puzzle`, `button: Racing`, `button: Role Playing`, `button: Simulation`, `button: Sports`, `button: Strategy`, `button: Table Top`, `link: Skip to main content`, `link: Sign In`, `link: Tudum by Netflix - Home`, `combobox: Select option`, `link: Home`, `link: Top 10`, `link: Trending`, `link: What to Watch`, `link: Shows`, `link: Movies`, `link: Puzzled`, `link: Podcasts`, `link: Shop opens in a new tab`, `link: Featured`, `link: Available Games`, `link: About`, `link: Starstruck Work out where the stars shine. Play`, `link: Sudoku Solve the classic numbers game. Play`, `link: Jigsaw Piece together the big picture. Play`, `link: Shapes Turn shapes into something bigger. Play`, `link: Crossover Swap letters and emojis into words. Play`, `link: Waywords Find the path hidden in words. Play`, `link: Keysmash Just add vowels. Play`, `link: Bonza Put the words back together. Play`, `link: Explore More Puzzles`, `link: cloud saves`, `link: maturity rating`, `link: Action`, `link: Adventure`, `link: Fantasy`, `link: Horror`, `link: Kids and Family`, `link: Reality`, `link: Sci-Fi`, `link: Article`, `link: Tudum Magazine Privacy Statement and Terms of Use`, `link: Below Surfaces to the No. 1 Spot in This Week’s Top 10`, `link: The Mosquito Bowl Trailer Puts Four College Football Heroes on the Front Lines`, `link: 24 Thrillers Too Suspenseful to Pause for Even a Second`, `link: The 2nd and 3rd STAGE of STEEL BALL RUN JoJo’s Bizarre Adventure Have Started`, `link: 10 Creature Features for When You’ve Had Enough of Humanity`, `link: East of Eden Triumphs to the No. 1 Spot in This Week's Top 10`, `link: TYSON Director Floyd Russ on Mike Tyson, Access, Archives, and the Toad`, `link: What Are the Rules of the STEEL BALL RUN Race in JoJo’s Bizarre Adventure?`, `link: See More`, `link: 8 Spicy Romance Movies and Series That Crank Up the Heat`, `link: Inside the Ending of East of Eden`, `link: East of Eden`, `link: Animals`, `link: UNABOMBER`, `link: Below`, `link: The Perfect Lie`, `link: The Gentlemen`, `link: The Whisper Man`, `link: Wonka's The Golden Ticket`, `link: Crew Girl`, `link: KPop Demon Hunters`, `link: Our Sticky Love`, `link: Beauty in Black`, `link: A Different World`, `link: My Life With the Walter Boys`, `button: Back To Top`, `link: Tudum By Netflix - Home`, `link: About Tudum`, `link: Netflix House`, `link: Netflix Shop`, `link: Sign Up`, `link: Privacy`, `link: Terms of Use`, `link: Cookie Preferences`, `link: Do Not Sell or Share My Personal Information`, `link: Ad Choices`, `button: Close` | Activation, forms, validation, loading/empty/success/error, keyboard behavior |
| Links | `[Skip to main content](#maincontent)`, `[Sign In](https://www.netflix.com/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fprofiles%2Fchoose%3Fnext%3Dhttps%253A%252F%252Fwww.netflix.com%252Ftudum%252Fgames)`, `[Tudum by Netflix - Home](/tudum)`, `[Home](/tudum)`, `[Top 10](/tudum/top10)`, `[Trending](/tudum/topics/trending)`, `[What to Watch](/tudum/topics/what-to-watch)`, `[Shows](/tudum/topics/tv-shows)`, `[Movies](/tudum/topics/movies)`, `[Puzzled](/tudum/puzzled)`, `[Podcasts](/tudum/podcasts)`, `[Shop opens in a new tab](https://netflix.shop)`, `[Featured](#featured)`, `[Available Games](#games)`, `[About](#about)`, `[Starstruck Work out where the stars shine. Play](/tudum/puzzled/starstruck/daily)`, `[Sudoku Solve the classic numbers game. Play](/tudum/puzzled/sudoku/daily)`, `[Jigsaw Piece together the big picture. Play](/tudum/puzzled/jigsaw/daily)`, `[Shapes Turn shapes into something bigger. Play](/tudum/puzzled/shapes/daily)`, `[Crossover Swap letters and emojis into words. Play](/tudum/puzzled/crossover/daily)`, `[Waywords Find the path hidden in words. Play](/tudum/puzzled/waywords/daily)`, `[Keysmash Just add vowels. Play](/tudum/puzzled/keysmash/daily)`, `[Bonza Put the words back together. Play](/tudum/puzzled/bonza/daily)`, `[Explore More Puzzles](/tudum/puzzled)`, `[cloud saves](https://help.netflix.com/en/node/123943)`, `[maturity rating](https://help.netflix.com/en/node/121877)`, `[Action](/tudum/topics/action)`, `[Adventure](/tudum/topics/adventure)`, `[Fantasy](/tudum/topics/fantasy)`, `[Horror](/tudum/topics/horror)`, `[Kids and Family](/tudum/topics/kids-and-family)`, `[Reality](/tudum/topics/reality)`, `[Sci-Fi](/tudum/topics/sci-fi)`, `[Article](/tudum/topics/article)`, `[Tudum Magazine Privacy Statement and Terms of Use](/tudum/articles/tudum-magazine-terms-and-conditions)`, `[Below Surfaces to the No. 1 Spot in This Week’s Top 10](/tudum/articles/top-10-october-5-2026)`, `[The Mosquito Bowl Trailer Puts Four College Football Heroes on the Front Lines](/tudum/articles/the-mosquito-bowl-trailer)`, `[24 Thrillers Too Suspenseful to Pause for Even a Second](/tudum/articles/best-thrillers-on-netflix)`, `[The 2nd and 3rd STAGE of STEEL BALL RUN JoJo’s Bizarre Adventure Have Started](/tudum/articles/steel-ball-run-jojos-bizarre-adventure-release-date-news)`, `[10 Creature Features for When You’ve Had Enough of Humanity](/tudum/articles/best-creature-features-movies-shows)` | Deep-link and route semantics |
| Responsive/platform behavior | Unknown | No comparison captured |
| Search/filter/sort/settings/import/export | Unknown unless explicitly observed | Complete interactions not captured |

A REA page capture is not product-wide interface evidence. Use original interface design and assets; do not reproduce protected branding.

## 5. Functional requirements and traceability

### REQ-FUNC-57E4AE48 — Mobile games included with membership
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-57E4AE48`; fixture and expected output must be specified from evidence.
- **Trace:** `NETFLIX-GAMES-CAP-57E4AE48` → `REQ-FUNC-57E4AE48` → `TEST-FUNC-57E4AE48`.

### REQ-FUNC-10C489C5 — Cloud streaming of titles
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-10C489C5`; fixture and expected output must be specified from evidence.
- **Trace:** `NETFLIX-GAMES-CAP-10C489C5` → `REQ-FUNC-10C489C5` → `TEST-FUNC-10C489C5`.

### REQ-FUNC-A62BAA00 — No ads or in-app purchases
- **Required behavior:** Unknown; capability is a research lead until observed/documented.
- **Preconditions, expected result, failures:** Unknown; derive from researched workflow including permission and recovery paths.
- **Priority:** Unassigned; rank after user scope/impact are known.
- **Evidence / verification:** UNKNOWN; None linked; research required.
- **Acceptance criteria:** Blocked until a repeatable input, observable outcome and relevant negative/error case have an evidence-backed oracle.
- **Associated test ID:** `TEST-FUNC-A62BAA00`; fixture and expected output must be specified from evidence.
- **Trace:** `NETFLIX-GAMES-CAP-A62BAA00` → `REQ-FUNC-A62BAA00` → `TEST-FUNC-A62BAA00`.

Keep original behavior VERIFIED/CORROBORATED distinct from inference and independent decisions INFERRED/PROPOSED. UNKNOWN stays unknown; contradictory evidence stays CONFLICTED. These requirements are blocked planning placeholders until evidence, user scope, measurable criteria and test oracles are recorded.

## 6. Data model and state

**Original product structures:** UNKNOWN. No structured evidence establishes fields/types, IDs, ownership/permissions, lifecycle, persistence, constraints, deletion/retention, import/export, migration, concurrency or indexes.

**Independent model (PROPOSED):** define only state needed for the researched first slice; specify IDs, validation, owners, state transitions, concurrency, deletion/export/retention and migration. Do not describe it as the target’s model.

## 7. APIs, integrations and protocols

**Original contracts:** none verified in structured evidence. Dossier prose does not establish supported APIs. Do not invent target endpoints, schemas, auth, events or limits. If the independent implementation needs an interface, define a versioned contract labelled PROPOSED, including request/response, authorization, errors, limits, timeouts, retries and idempotency.

## 8. Architecture and technical design

**PROPOSED independent design; target internals unknown.** Use only components required by verified scope.

```mermaid
flowchart LR
  UI[Interface] --> APP[Application and domain boundary]
  APP --> DB[(Persistence if needed)]
  APP --> EXT[Authorized integrations if needed]
```

Separate interface/domain/persistence/integration boundaries. Enforce access at trusted boundaries, isolate tenants where relevant, and define timeout/partial failure behavior. Add queues/caches/scaling/deployment components only when requirements justify them. Record configuration, secrets, data flow, recovery, observability and deployment assumptions in the implementation project.

## 9. Open-source foundation and dependency strategy

**Decision:** no suitable project verified in the current catalog. This is a research gap, not proof no candidate exists. Search by user job before a fresh build.


## 10. Security and privacy

No product-specific security/privacy controls are verified by current evidence. Proposed independent controls: authenticate/authorize state changes server-side; validate inputs; protect secrets; apply least privilege and suitable abuse/rate controls; minimize data; define consent, retention, export/delete, backup/restore; keep sensitive payloads out of logs; handle external trust boundaries/timeouts/retries; test cross-user access, malformed inputs, leaks, abuse and recovery.

Product-specific review: Review product-specific identity, authorization, privacy, abuse and dependency threats. Do not claim compliance, privacy or security parity without scoped assessment.

## 11. Error handling and edge cases

These are test prompts, not target behavior assertions. Keep only relevant cases and derive expected behavior from evidence or label an independent decision PROPOSED.

- **EDGE-001:** Missing/malformed/oversized input. Target behavior is UNKNOWN until researched; specify recovery before release.
- **EDGE-002:** Unauthorized or revoked action and tenant isolation where applicable. Target behavior is UNKNOWN until researched; specify recovery before release.
- **EDGE-003:** Empty data/results and duplicate operations. Target behavior is UNKNOWN until researched; specify recovery before release.
- **EDGE-004:** Concurrent updates or stale writes to mutable state. Target behavior is UNKNOWN until researched; specify recovery before release.
- **EDGE-005:** Network timeout, throttling, external outage, retry and partial failure. Target behavior is UNKNOWN until researched; specify recovery before release.
- **EDGE-006:** Cancellation/interruption during state change and restart recovery. Target behavior is UNKNOWN until researched; specify recovery before release.
- **EDGE-007:** Corrupt/incompatible imported or persisted data; migration failure. Target behavior is UNKNOWN until researched; specify recovery before release.
- **EDGE-008:** Expired credentials/session where applicable. Target behavior is UNKNOWN until researched; specify recovery before release.

## 12. Testing and behavioral verification

- **TEST-FUNC-57E4AE48** → `REQ-FUNC-57E4AE48`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-10C489C5** → `REQ-FUNC-10C489C5`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.
- **TEST-FUNC-A62BAA00** → `REQ-FUNC-A62BAA00`: unit/integration/E2E level after interface selection. Setup: deterministic fixture for evidenced precondition. Steps: main workflow plus relevant error/permission branch. Expected result: unknown until evidence defines oracle. Pass: repeatable assertions meet approved criteria. No network in routine tests; no claim of original parity.

These are proposed deterministic implementation-test plans, not original-product observations. Compare the original only through separately authorized, repeatable public observation. A passing spec test does not establish parity.

## 13. Implementation roadmap

### Phase 1 — Foundation and dependencies

- **Tasks:** Inspect user project, stack, constraints, tests, candidate implementations and licenses.
- **Prerequisites:** Repository inspection and user scope.
- **Deliverables:** Project map, evidence ledger, reuse decision, bounded plan
- **Requirements:** Select after evidence review
- **Tests:** Clean setup/validation smoke test
- **Completion:** Clean setup and documented dependency/reuse decision.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 2 — Core domain behavior

- **Tasks:** Research then implement one useful vertical slice with explicit state, validation and permissions.
- **Prerequisites:** Phase 1 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-57E4AE48, REQ-FUNC-10C489C5, REQ-FUNC-A62BAA00
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Integrated domain behavior with deterministic unit/integration tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 3 — Primary user workflows

- **Tasks:** Complete the best-evidenced journey through success, cancellation and recovery.
- **Prerequisites:** Phase 2 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** REQ-FUNC-57E4AE48, REQ-FUNC-10C489C5, REQ-FUNC-A62BAA00
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** E2E acceptance checks via user-facing interface.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 4 — Integrations

- **Tasks:** Add only documented/authorized integrations; mock boundaries for offline routine tests.
- **Prerequisites:** Phase 3 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** Select after evidence review
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Contract and failure-injection tests.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 5 — Secondary capabilities

- **Tasks:** Implement remaining in-scope behavior by user priority and evidence.
- **Prerequisites:** Phase 4 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** Select after evidence review
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Trace: REQ-FUNC-57E4AE48, REQ-FUNC-10C489C5, REQ-FUNC-A62BAA00; document exclusions and unknowns.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 6 — Security and reliability

- **Tasks:** Review access, privacy, abuse, migration, backup, observability and recovery as applicable.
- **Prerequisites:** Phase 5 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** Select after evidence review
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Applicable security/recovery checks and risks recorded.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.

### Phase 7 — Verification and release

- **Tasks:** Run project checks; inspect behavior, accessibility, compatibility, license and docs.
- **Prerequisites:** Phase 6 and evidence/scope decisions
- **Deliverables:** Integrated working slice and updated traceability
- **Requirements:** Select after evidence review
- **Tests:** Focused tests for implemented requirements and failures
- **Completion:** Reproducible result and transparent completion/gap report.
- **Unresolved risks:** Record source limitations, conflicts and unverified compatibility.


## 14. Evidence, uncertainty and exclusions

### Evidence index

| Source ID | Title / location | URL | Access date | Claim supported | Classification and limits |
|---|---|---|---|---|---|
| `SRC-PRODUCT` | Official product page — Catalog identity field; page not fetched by compiler. | [link](https://www.netflix.com/tudum/games) | Not recorded | Netflix Games is identified at this URL in the canonical catalog. | **UNKNOWN** — Catalog URL is a lead, not independently checked behavior. |
| `ev_35395302435935f8f8728ea1ed3181a6d65803db9875378bea12336f19fbc77c` | Netflix Games Public web-surface observation (REA) — REA report; status captured; completeness reported complete. | [link](https://www.netflix.com/tudum/games) | 2026-10-14T03:56:22.119Z | A dated unauthenticated snapshot exposed controls button: Link copied to clipboard Share, button: play Puzzled Thumbnail, button: Previous items, button: Next items, button: Go to page 1, button: Go to page 2, button: Go to page 3, button: Action, button: Adventure, button: Arcade, button: Educational, button: Idler, button: Party, button: Puzzle, button: Racing, button: Role Playing, button: Simulation, button: Sports, button: Strategy, button: Table Top, link: Skip to main content, link: Sign In, link: Tudum by Netflix - Home, combobox: Select option, link: Home, link: Top 10, link: Trending, link: What to Watch, link: Shows, link: Movies, link: Puzzled, link: Podcasts, link: Shop opens in a new tab, link: Featured, link: Available Games, link: About, link: Starstruck Work out where the stars shine. Play, link: Sudoku Solve the classic numbers game. Play, link: Jigsaw Piece together the big picture. Play, link: Shapes Turn shapes into something bigger. Play, link: Crossover Swap letters and emojis into words. Play, link: Waywords Find the path hidden in words. Play, link: Keysmash Just add vowels. Play, link: Bonza Put the words back together. Play, link: Explore More Puzzles, link: cloud saves, link: maturity rating, link: Action, link: Adventure, link: Fantasy, link: Horror, link: Kids and Family, link: Reality, link: Sci-Fi, link: Article, link: Tudum Magazine Privacy Statement and Terms of Use, link: Below Surfaces to the No. 1 Spot in This Week’s Top 10, link: The Mosquito Bowl Trailer Puts Four College Football Heroes on the Front Lines, link: 24 Thrillers Too Suspenseful to Pause for Even a Second, link: The 2nd and 3rd STAGE of STEEL BALL RUN JoJo’s Bizarre Adventure Have Started, link: 10 Creature Features for When You’ve Had Enough of Humanity, link: East of Eden Triumphs to the No. 1 Spot in This Week's Top 10, link: TYSON Director Floyd Russ on Mike Tyson, Access, Archives, and the Toad, link: What Are the Rules of the STEEL BALL RUN Race in JoJo’s Bizarre Adventure?, link: See More, link: 8 Spicy Romance Movies and Series That Crank Up the Heat, link: Inside the Ending of East of Eden, link: East of Eden, link: Animals, link: UNABOMBER, link: Below, link: The Perfect Lie, link: The Gentlemen, link: The Whisper Man, link: Wonka's The Golden Ticket, link: Crew Girl, link: KPop Demon Hunters, link: Our Sticky Love, link: Beauty in Black, link: A Different World, link: My Life With the Walter Boys, button: Back To Top, link: Tudum By Netflix - Home, link: About Tudum, link: Netflix House, link: Netflix Shop, link: Sign Up, link: Privacy, link: Terms of Use, link: Cookie Preferences, link: Do Not Sell or Share My Personal Information, link: Ad Choices, button: Close and landmarks banner, navigation: Main Menu, main, navigation: Page level navigation, contentinfo. | **VERIFIED** — Snapshot only; no activation, authenticated workflow, search results or internals. Event sequence records provider receipt order; simultaneous browser causality is not inferred. Network content is retained only when selected; response bytes are browser-decoded, not compressed wire bytes. Request bytes are limited to what Playwright exposes; not_exposed does not establish body absence or multipart file coverage. Network content reads settle within 5 seconds each and never wait for unfinished responses or refetch them. Playwright scenario events do not expose request initiator stacks; receipt order does not prove causality. Storage values are hashed only after declared-secret redaction. |

### Confidence classifications

VERIFIED: observed/documented within exact scope. CORROBORATED: supported by multiple compatible sources. INFERRED: reasoned, not directly established. PROPOSED: independent design or candidate. UNKNOWN: not established. CONFLICTED: sources disagree. A source URL alone is not verification; confidence cannot exceed the source. Every important claim in a future completed research record must cite its source location and access date.

### Prioritized unknowns

| Priority | Unknown / blocker | Next evidence action |
|---|---|---|
| P0 | Claim-level evidence linked to each capability. | QUESTION → SELECT TOOL → INVESTIGATE → RECORD EVIDENCE → TRACE BEHAVIOR → UPDATE REQUIREMENTS → VERIFY. Investigate official documentation and authorized public behavior; update evidence IDs. |
| P0 | Intended user, roles, user jobs, and requested implementation boundary. | QUESTION → SELECT TOOL → INVESTIGATE → RECORD EVIDENCE → TRACE BEHAVIOR → UPDATE REQUIREMENTS → VERIFY. Research product/user scope; ask user when scope choice materially changes deliverable. |
| P0 | Full successful, denied, failed, cancelled, retry and recovery workflows. | QUESTION → SELECT TOOL → INVESTIGATE → RECORD EVIDENCE → TRACE BEHAVIOR → UPDATE REQUIREMENTS → VERIFY. Observe authorized workflows; record checkpoint and observable oracle. |
| P1 | Supported versions, platforms, responsive and accessibility behavior. | QUESTION → SELECT TOOL → INVESTIGATE → RECORD EVIDENCE → TRACE BEHAVIOR → UPDATE REQUIREMENTS → VERIFY. Verify product version and platform documentation; run authorized observation. |
| P1 | Data model, state, ownership, retention, import/export and concurrency. | QUESTION → SELECT TOOL → INVESTIGATE → RECORD EVIDENCE → TRACE BEHAVIOR → UPDATE REQUIREMENTS → VERIFY. Use primary docs or record as unknown; propose only the independent slice model. |
| P1 | API/protocol contracts, integrations, authorization, limits and errors. | QUESTION → SELECT TOOL → INVESTIGATE → RECORD EVIDENCE → TRACE BEHAVIOR → UPDATE REQUIREMENTS → VERIFY. Use official API spec or label independent contract PROPOSED. |
| P1 | Candidate repository state, implementation, tests, license and operations. | QUESTION → SELECT TOOL → INVESTIGATE → RECORD EVIDENCE → TRACE BEHAVIOR → UPDATE REQUIREMENTS → VERIFY. Inspect exact repository/version and distribution dependencies before recommendation. |
| P2 | Representative performance targets and operational scale. | QUESTION → SELECT TOOL → INVESTIGATE → RECORD EVIDENCE → TRACE BEHAVIOR → UPDATE REQUIREMENTS → VERIFY. Define workload and target before measurement; avoid scale equivalence claims. |

### Resumable investigation checkpoint

Resume token: `netflix-games`. Read dossier, REA report and raw Evidence before repeating. Record question/reason, authorized source/tool, target/version/scope, actions, Evidence IDs and locations, observation vs inference, conflicts/unknowns, affected feature/requirement IDs, checks/date and next question. Reuse evidence when sufficient/current. Select specialized REA/native inspection only when ordinary public/repository inspection cannot answer a user-visible question and the target/tool are authorized; do not assume tools are installed. Current capture covers a public unauthenticated page only.

### Dossier notes (not independently verified)

# 1. Executive summary

Netflix Games is Netflix's mobile-game offering bundled with the subscription.

---

# 2. Product identity and ownership

- **Official name:** Netflix Games
- **Company and business unit:** netflix
- **Current lifecycle status:** active
- **Official website:** https://www.netflix.com/tudum/games

---

# 3. Product capabilities

- Mobile games included with membership
- Cloud streaming of titles
- No ads or in-app purchases

---

# 4. Technical architecture

Not yet researched.

---

# 5. User workflows

Not yet researched.

---

# 6. Pricing and access

Not yet researched.

---

# 7. API and integration surface

Not yet researched.

---

# 8. Existing open-source alternatives

No open-source alternative has been verified yet.

---

# 9. Alternative comparison

Thousands of open-source games exist, but no project replicates a curated game subscription; the gap is curation, not technology.

---

# 10. Missing capabilities and opportunity analysis

Thousands of open-source games exist, but no project replicates a curated game subscription; the gap is curation, not technology.

---

# 11. RAE implementation strategy

Pending. No open-source equivalent of a game subscription exists; individual open games are abundant.

---

# 12. Security, privacy, and compliance

Not yet researched.

---

# 13. Sources and evidence

- https://libregamewiki.org/
- https://en.wikipedia.org/wiki/Netflix

---

# 14. Open questions

- Full feature inventory and technical architecture are not yet researched.

---

# 15. Research history

- v1: dossier created; research pending.

---

# 16. Alternative comparison (continued)

Thousands of open-source games exist, but no project replicates a curated game subscription; the gap is curation, not technology.

---

# 17. RAE implementation strategy (continued)

Pending. No open-source equivalent of a game subscription exists; individual open games are abundant.

Research status is **pending**. Dossier prose above is preserved for context but is not claim-level evidence by itself.

## 15. Downstream execution instructions

1. Read this complete skill and the target project instructions. Retrieve bundled research with `npx rae-faang research dossier netflix-games` and inspect canonical identity with `npx rae-faang products show netflix-games --format json`.
2. Inspect the existing repository, architecture, dependencies, tests, configuration and interface before editing.
3. Confirm target scope and user priorities; list evidence blockers and never fill them with invented facts.
4. Evaluate candidate foundations through actual code, exact version, license/dependency terms, tests, security, maintenance, operations and fit.
5. Make a minimal dependency-aware plan for a functioning vertical slice.
6. Implement the slice with original code/assets and the host project’s conventions.
7. Add deterministic tests for every implemented requirement, including relevant failure and permission paths.
8. Implement remaining scoped capabilities incrementally; explicitly mark partial, excluded and unknown items.
9. Review security, privacy, dependencies, licensing, accessibility and compatibility.
10. Run actual project checks and inspect behavior through the interface the user will use.
11. Fix causes; do not weaken tests, hide errors or claim parity from generated code.
12. Document deviations, unimplemented requirements, limitations and checks not run.
13. Report requirement → code → test evidence and actual command results.
Give this product skill to your coding agent in the project where you want to build; generate a portable Markdown copy with `npx rae-faang netflix-games --out ./netflix-games.md` when useful. For a directory containing `skill.md` and `mcp.json`, use `npx rae-faang build agent-kit netflix-games --out ./netflix-games-agent`.

### Multi-agent task plan and outputs

Researcher: own the evidence ledger and unknowns. Architect: approve scope, boundaries and contracts before parallel work. Implementers: deliver non-overlapping, integrated vertical slices. Tester: map acceptance checks to requirement IDs. Reviewer: inspect privacy, security, accessibility and license risk. Documenter: preserve setup and limitations. Handoffs record changed files, requirement IDs, commands/exit codes, checks not run and one specific next action.

### Acceptance criteria and definition of done

- Every in-scope behavior has a unique requirement ID, evidence/confidence, bounded scope, measurable acceptance oracle and associated test/manual check.
- Each implemented requirement maps to code and a deterministic passing test or repeatable manual observation; unknown requirements remain blocked/unknown.
- Primary and relevant alternate/failure workflows run through the user-facing interface; partial/excluded scope and recovery behavior are documented.
- Security, privacy, dependency/license, accessibility, compatibility, setup, project checks, and unrun checks are reported honestly.
- Requirement trace is evidence → workflow → specification/contract → implementation → automated test; passing specification checks do not claim target parity.

### Product quality and verification plan

- Correctness: tested success, empty, malformed, denied, duplicate, timeout/retry, cancellation, partial failure and recovery cases as relevant.
- Security/privacy: trust boundaries, least privilege, secret handling, data minimization, retention/export/deletion and abuse controls.
- UX/accessibility: keyboard/screen reader, labels/focus, loading/empty/error/success states, responsive behavior and reduced motion where relevant.
- Reliability/performance: reproducible setup, migrations, backup/restore, observability, representative workloads and measured targets before claims.
- Compatibility/licensing: test claimed versions/platforms; check direct/transitive license obligations and dependencies.

### End-to-end implementation milestones

Follow the seven dependency-aware phases in the roadmap above. Prefer a complete, tested vertical slice over disconnected scaffolding; continue remaining verified in-scope requirements and record blockers.

### Required deliverables

- Evidence ledger, behavior/capability map, prioritized unknowns and source limitations.
- User scope, architecture/data/API decisions with original-vs-proposed labels, and a candidate reuse/license evaluation.
- Working implementation, requirement-to-test traceability, actual project check results and interface-level verification.
- Documented deviations, partial/not-started/excluded requirements, unrun checks, setup and next actionable step.

### Provenance

- Product: [catalog/products.jsonl](../../products.jsonl) (`netflix-games`).
- Dossier: [research/companies/netflix/products/netflix-games.md](../../../research/companies/netflix/products/netflix-games.md).
- REA capture: [catalog/rea/netflix/netflix-games.md](../../rea/netflix/netflix-games.md) (2026-10-14T03:56:22.119Z); raw record: [catalog/rea/evidence/netflix-games.json](../../rea/evidence/netflix-games.json).
- Curated alternative source: tools/skills/catalog-data.mjs; see candidate qualifications above.

## Sources

- [Official product page](https://www.netflix.com/tudum/games) — Netflix Games is identified at this URL in the canonical catalog. (UNKNOWN; accessed Not recorded).
- [Netflix Games Public web-surface observation (REA)](https://www.netflix.com/tudum/games) — A dated unauthenticated snapshot exposed controls button: Link copied to clipboard Share, button: play Puzzled Thumbnail, button: Previous items, button: Next items, button: Go to page 1, button: Go to page 2, button: Go to page 3, button: Action, button: Adventure, button: Arcade, button: Educational, button: Idler, button: Party, button: Puzzle, button: Racing, button: Role Playing, button: Simulation, button: Sports, button: Strategy, button: Table Top, link: Skip to main content, link: Sign In, link: Tudum by Netflix - Home, combobox: Select option, link: Home, link: Top 10, link: Trending, link: What to Watch, link: Shows, link: Movies, link: Puzzled, link: Podcasts, link: Shop opens in a new tab, link: Featured, link: Available Games, link: About, link: Starstruck Work out where the stars shine. Play, link: Sudoku Solve the classic numbers game. Play, link: Jigsaw Piece together the big picture. Play, link: Shapes Turn shapes into something bigger. Play, link: Crossover Swap letters and emojis into words. Play, link: Waywords Find the path hidden in words. Play, link: Keysmash Just add vowels. Play, link: Bonza Put the words back together. Play, link: Explore More Puzzles, link: cloud saves, link: maturity rating, link: Action, link: Adventure, link: Fantasy, link: Horror, link: Kids and Family, link: Reality, link: Sci-Fi, link: Article, link: Tudum Magazine Privacy Statement and Terms of Use, link: Below Surfaces to the No. 1 Spot in This Week’s Top 10, link: The Mosquito Bowl Trailer Puts Four College Football Heroes on the Front Lines, link: 24 Thrillers Too Suspenseful to Pause for Even a Second, link: The 2nd and 3rd STAGE of STEEL BALL RUN JoJo’s Bizarre Adventure Have Started, link: 10 Creature Features for When You’ve Had Enough of Humanity, link: East of Eden Triumphs to the No. 1 Spot in This Week's Top 10, link: TYSON Director Floyd Russ on Mike Tyson, Access, Archives, and the Toad, link: What Are the Rules of the STEEL BALL RUN Race in JoJo’s Bizarre Adventure?, link: See More, link: 8 Spicy Romance Movies and Series That Crank Up the Heat, link: Inside the Ending of East of Eden, link: East of Eden, link: Animals, link: UNABOMBER, link: Below, link: The Perfect Lie, link: The Gentlemen, link: The Whisper Man, link: Wonka's The Golden Ticket, link: Crew Girl, link: KPop Demon Hunters, link: Our Sticky Love, link: Beauty in Black, link: A Different World, link: My Life With the Walter Boys, button: Back To Top, link: Tudum By Netflix - Home, link: About Tudum, link: Netflix House, link: Netflix Shop, link: Sign Up, link: Privacy, link: Terms of Use, link: Cookie Preferences, link: Do Not Sell or Share My Personal Information, link: Ad Choices, button: Close and landmarks banner, navigation: Main Menu, main, navigation: Page level navigation, contentinfo. (VERIFIED; accessed 2026-10-14T03:56:22.119Z).
