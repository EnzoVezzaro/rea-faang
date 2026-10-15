# RAE FAANG — Agent-Ready Design System

**Version:** 1.0  
**Purpose:** A practical design contract for coding agents building or improving the RAE FAANG website and related interfaces.

> **Core premise:** We don't need FAANG anymore. Use your agent to build any of their products.

RAE FAANG catalogs products from Meta, Amazon, Apple, Netflix and Google. A visitor chooses a product to build with their own coding agent in their own project. Product pages supply product context, research and candidate open-source foundations; build skills are useful handoffs, not the product itself. The UI should make the build invitation primary, then help visitors find research and reuse options.

The reference-board image is an art-direction aid, not a source of literal copy or implementation code. Treat this document and the live catalog data as authoritative.

---

## 1. Creative direction

### Design thesis

**We don't need FAANG anymore. Use your agent to build any of their products.**

The site invites developers to choose a product from Meta, Amazon, Apple, Netflix or Google and build an independent implementation with their own coding agent. Keep it editorial, precise and technical. Show the product range first, then research and candidate foundations as helpful starting points—not a substitute for the build ambition.

### Three visual modes

1. **Introduction:** Oversized editorial typography, strong contrast, short copy and generous negative space. Use for the hero and major narrative transitions.
2. **Research archive:** Product dossiers, source trails, structured metadata, fine dividers, status labels, compact tables. Use for the catalog, product pages, and evidence.
3. **Build workstation:** Terminal panels, agent-kit files, workflow steps, test results, command snippets. Use for the how-it-works, kit, and verification experiences.

Move between these modes deliberately. Do not make every section a dashboard panel.

### Desired impression

- Independent and technically credible, not enterprise SaaS.
- Ambitious without making impossible promises.
- Evidence-led, not statistics-led.
- Designed by people who build and inspect software.
- Curious and approachable, even to someone who is not a systems expert.

### Avoid

- Purple/blue AI gradients, generic glowing brains, robot imagery, and stock photography.
- Glassmorphism, excessive blur, huge radii on every surface, floating blobs, and ornamental gradients.
- A generic SaaS layout where every section is a rounded card.
- Treating the catalog as a wall of logos or just another e-commerce grid.
- Animated metrics that imply progress or capabilities the data does not support.
- Wording that implies every catalog entry has a complete, production-ready replacement.
- Using “map” as the main brand metaphor. Prefer catalog, dossier, foundation, gap, specification, build, and verification.

---

## 2. Brand and voice

### Primary message hierarchy

**Brand:** RAE FAANG  
**Hero headline:** We don't need FAANG anymore.
**Hero subheadline:** Use your agent to build any of their products.
**Supporting statement:** RAE FAANG catalogs products from Meta, Amazon, Apple, Netflix and Google. Choose a product, use research and candidate projects as starting points, and build it with your coding agent in your project.

This is the product premise, not a claim that RAE itself has implemented every alternative. The interface must keep the ambition visible while honestly distinguishing mature candidates, partial coverage and gaps in the research.

### Voice rules

- Direct, confident, independent, specific.
- Prefer strong verbs: find, inspect, reuse, specify, build, test, verify.
- Explain the value before explaining the repository internals.
- Use short labels for data and clear sentences for consequential caveats.
- State uncertainty plainly. “Partial coverage” and “No verified alternative” are useful labels.
- Be exact in headlines and supporting copy; avoid claims the catalog cannot support.

### Copy patterns

Good:
- “Read the product research and see which projects may fit.”
- “Compare the candidate, its coverage and the open questions.”
- “Give your coding agent a product-specific starting point.”
- “Run the tests in your project and review the result.”

Avoid:
- “Build anything instantly.”
- “A perfect replacement for every product.”
- “Fully automated, production-ready software” unless proven for that exact feature.
- Vague metaphors that obscure what the product does.

---

## 3. Design tokens

Use semantic tokens. Components should reference tokens rather than embedding hex values. These are the starting values; tune only when there is a documented reason.

### Color palette

| Token | Value | Role |
|---|---|---|
| `--rf-bg` | `#0B0C0A` | Main page background |
| `--rf-surface` | `#121410` | Raised surface and panel background |
| `--rf-surface-2` | `#191C17` | Hovered/secondary surface |
| `--rf-border` | `#34382F` | Default dividers and borders |
| `--rf-border-strong` | `#5B6054` | Focused or emphasized boundaries |
| `--rf-text` | `#F0EFE7` | Primary text |
| `--rf-text-muted` | `#B6BAAF` | Secondary text |
| `--rf-text-subtle` | `#898F83` | Tertiary metadata; never use for essential copy at small sizes without contrast validation |
| `--rf-signal` | `#C8FF55` | Primary action and active state |
| `--rf-signal-ink` | `#14170E` | Text/icon on signal green |
| `--rf-amber` | `#F2AA43` | Partial coverage, caution, unresolved gap |
| `--rf-red` | `#FF655A` | Errors or destructive actions only |
| `--rf-blue` | `#8EB8FF` | Optional external-link/information accent; use sparingly |
| `--rf-paper` | `#E9E5D9` | Optional light editorial surface on selected sections |
| `--rf-paper-ink` | `#181A16` | Text on paper surface |

**Color rules**
- Signal green means primary action, selected navigation, or a state confirmed by the data. Do not use it for every decorative edge.
- Amber means partial, caution, needs review, or unresolved. Never use amber as generic “success.”
- Red is reserved for errors, failing checks, and destructive actions.
- Availability states must include visible text or an icon with an accessible label; color alone is insufficient.
- Default to dark surfaces. Use a light/paper surface only as a deliberate editorial contrast, not as an alternate theme on every card.

### Typography

Recommended stack:
- Display/body: `Inter`, then a system sans-serif fallback.
- Technical: `IBM Plex Mono` or `Geist Mono`, then a system monospace fallback.
- Do not add a remote font dependency if the repository already has an approved local font or type system.

| Token | Desktop | Mobile | Use |
|---|---:|---:|---|
| `--rf-display-xl` | 72/0.98, weight 700 | 46/1.02 | Hero headline |
| `--rf-display-lg` | 56/1.02, weight 700 | 38/1.06 | Major editorial statement |
| `--rf-h1` | 44/1.08, weight 680 | 34/1.1 | Page heading |
| `--rf-h2` | 32/1.15, weight 650 | 27/1.18 | Section heading |
| `--rf-h3` | 22/1.25, weight 620 | 20/1.25 | Card/record title |
| `--rf-body-lg` | 19/1.55, weight 400 | 18/1.55 | Hero support / lead copy |
| `--rf-body` | 16/1.55, weight 400 | 16/1.55 | Body copy |
| `--rf-small` | 14/1.45, weight 400 | 14/1.45 | Supporting copy |
| `--rf-label` | 12/1.35, weight 600 | 12/1.35 | Eyebrow, metadata, status |
| `--rf-code` | 13/1.6, mono | 12/1.55, mono | Commands and file paths |

Use sentence case for headings. Uppercase is reserved for short eyebrows, technical identifiers, and compact status labels. Do not set paragraphs in monospace.

### Spacing and layout

Use a 4px base scale, with 8px as the common rhythm.

| Token | Value |
|---|---:|
| `--rf-space-1` | 4px |
| `--rf-space-2` | 8px |
| `--rf-space-3` | 12px |
| `--rf-space-4` | 16px |
| `--rf-space-5` | 24px |
| `--rf-space-6` | 32px |
| `--rf-space-7` | 48px |
| `--rf-space-8` | 64px |
| `--rf-space-9` | 88px |
| `--rf-space-10` | 120px |

- Main content max width: `1440px`.
- Reading width: `680–760px`.
- Desktop page gutters: `clamp(24px, 5vw, 80px)`.
- Tablet gutters: `24px`.
- Mobile gutters: `16–20px`.
- Desktop grids: 12 columns; tablet: 8; mobile: 4.
- Use open space around editorial sections; compact spacing inside research records and tables.
- Typical section padding: 88–120px desktop, 64–80px tablet, 48–64px mobile.

### Shape, borders, and elevation

- Small metadata badge radius: `999px`.
- Input/button radius: `6–9px`.
- Dossier or large container radius: `10–14px`.
- Avoid rounding every nested element; square corners and thin rules are part of the technical character.
- Prefer borders and background shifts over shadows.
- If a shadow is necessary, keep it subtle and functional. No neon glow around every card.

### Motion

- Default transition: `160–220ms`, ease-out.
- Use motion to reveal state changes, connect product-to-alternative relationships, or confirm an action.
- Respect `prefers-reduced-motion` and preserve content when motion is disabled.
- Never make information appear only after animation or hover.
- Avoid infinite marquee motion on mobile; it can be paused and must not carry essential information.

---

## 4. Core components

### Navigation

- Wordmark left, primary links center or right, one primary CTA at far right on desktop.
- Desktop links: Catalog, How it works, Documentation, GitHub.
- The active section uses a thin signal-green underline or a small indicator; don't animate the whole navbar.
- Mobile uses a clear menu control with an accessible name, focus behavior, and escape-to-close support.
- Keep nav background solid or nearly solid; avoid heavy blur.

### Buttons

**Primary:** signal-green fill, dark ink, medium/bold text, compact arrow icon if useful.  
**Secondary:** transparent/dark surface, border, light text.  
**Quiet/link:** text and small arrow; underlined on hover/focus where appropriate.  
**Danger:** red only for destructive actions.

Button states: default, hover, pressed, disabled, loading, focus-visible. Loading buttons must retain their label or provide an accessible busy state. Do not use a button for navigation if a normal link is appropriate.

### Status labels

Use a consistent set of semantic status pills:
- **Available** — green; a documented open-source alternative exists.
- **Partial** — amber; coverage is incomplete or limited.
- **Research needed** — muted/amber depending on severity; evidence or analysis is incomplete.
- **No alternative identified** — neutral/amber; do not phrase as absolute proof that no project exists unless research supports that claim.
- **Built / Verified** — only when there is actual implementation evidence and a defined check.
- **Failed** — red, accompanied by explanation or a link to diagnostics.

Do not collapse alternative availability, implementation progress, and verification into a single status. These are separate dimensions and should be modeled separately when catalog data permits.

### Product row / product card

Each item should answer at a glance:
1. What target product is this?
2. Which company/category is it associated with?
3. What open-source project is the candidate alternative?
4. What is the coverage status?
5. What is the next useful action?

Desktop catalog prefers compact rows to oversized cards. Use cards only where the extra space carries meaningful preview content. Rows include title, company/category, alternative, license, status, and a clear open-details link. On mobile, stack title and status first, then alternative and license.

### Metadata and evidence links

- Labels are small, muted, and consistent: `COMPANY`, `ALTERNATIVE`, `LICENSE`, `COVERAGE`, `LAST CHECKED`, `SOURCE`.
- Source links must open the relevant original resource and have descriptive text; avoid unlabeled icon-only links.
- External links show a subtle external-link indicator and remain keyboard accessible.
- Never fabricate citations, verification dates, version numbers, or upstream license data.

### Code / command block

- Use a dark inset surface, monospace font, clear line wrapping, and visible language/context labels when relevant.
- Provide a copy affordance only when it works. On activation, show an accessible confirmation.
- Avoid horizontal scrolling when a command can wrap safely; preserve copyable raw command text.
- Commands shown in UI must be valid for the actual repository and current workflow.

### File artifact row

For kit files such as `spec.md`, `landscape.md`, `gap-analysis.md`, and `roles.md`, show:
- file name;
- one-sentence purpose;
- file type/size only if available;
- a visible read/download action;
- availability state based on actual artifact existence.

Do not present a decorative file row as downloadable unless the endpoint works.

### Process stepper

Use five stages: **Choose → Investigate → Specify → Build → Verify**.
- The current step has a green marker and explicit label.
- Completed steps use a check plus text.
- Blocked steps identify the blocker.
- A step is not “complete” simply because an agent says so; use an observable artifact or passing command.
- On narrow viewports, use a vertical stepper or horizontally scrollable labeled steps, never tiny unreadable icons only.

### Tables and filters

- Prefer clear headers, visible row dividers, and compact metadata.
- Provide text search, company filters, and status filters where the dataset supports them.
- Filters should be keyboard accessible and show selected states clearly.
- Include an empty state that explains how to widen or reset the search.
- Persist filter state in the URL only if that behavior matches the site's conventions.
- Never invent counts. Derive counts from catalog data and explain their scope.

### Notice / warning panels

Use for important limitations, not decorative highlights. Amber icon plus explanatory text is appropriate for partial coverage, license caveats, unresolved assumptions, or incomplete verification. Errors use red. Keep the message actionable and specific.

---

## 5. Example page patterns

These are page recipes, not rigid templates. Use them to keep the experience coherent while allowing the content to determine the layout.

### A. Landing page — introduction to action

**Goal:** State the agent-led build-any-product premise, then help visitors choose a product and inspect useful research and foundations.

1. Compact navbar.
2. Hero headline: `We don't need FAANG anymore.`
3. Hero subheadline: `Use your agent to build any of their products.`
4. Supporting statement: `RAE FAANG catalogs products from Meta, Amazon, Apple, Netflix and Google.` Explain that research and candidate open-source projects help an agent get started in the user's project; skills are optional handoffs.
5. Primary CTA `Explore products`; secondary CTA `How it works`.
6. On the right, show real catalog products and a functional product build pass that updates its product details and skill download.
7. A company/product strip confirms the catalog scope.
8. Story section explains how to choose a product and build it with an agent.
9. Full catalog index links to actual product records.
10. Research, reuse options and verification explain useful starting points without limiting the build ambition.
11. FAQ and final CTA.

**Hero behavior:** Desktop uses an editorial split. On mobile, stack premise and actions before the product chooser and pass. Keep the premise as the first message and the product controls functional.

### B. Catalog — fast discovery

**Page title:** `The catalog, live`  
**Section title:** `Every product, with its open-source alternative.`  
**Intro:** `Choose a product to inspect the candidate replacement, license, source material, coverage, and agent kit.`

Layout:
- Page title and derived inventory summary.
- Search field.
- Company and status filters.
- Compact, scannable product rows.
- Each row connects product → candidate alternative, includes a license where verified, and shows a distinct coverage label.
- Optional detail preview on wide screens; direct navigation remains available.
- A useful empty state and clear reset control.

Do not let filter chips become the most visually prominent element. The products are the content.

### C. Product dossier — understand the gap

**Top block:** product name, company, category, official URL, and separate coverage/build status labels.

**Primary relationship:** target product → candidate open-source foundation(s). State whether the candidate is full, partial, or only potentially relevant, and explain why.

**Suggested sections:**
1. `At a glance` — what the target does and why it is in the catalog.
2. `Open-source alternative` — upstream project, license, relevant capabilities, and links.
3. `Coverage and gaps` — what matches, what differs, and what remains unknown.
4. `Agent kit` — available specifications/research files and actual download/open actions.
5. `Evidence` — cited public sources and research report links.
6. `Next step` — use existing project, investigate further, or begin building.

Use a two-column desktop layout where the primary dossier occupies roughly two-thirds and a sticky summary rail holds status, license, and actions. On mobile, turn the rail into a compact summary near the top; never hide critical caveats in a sticky panel.

### D. Agent kit / build workspace — go from brief to work

**Title:** `Build plan / [Product]` or `Your agent kit`.

Show the actual downloadable files, each with a reason to exist. Provide a single clear action to download the complete kit only if the archive is actually generated. Include a copyable command or agent prompt only if tested.

Visual hierarchy:
- Product and target outcome.
- Kit readiness and explicit limitations.
- Artifact list (`spec.md`, `landscape.md`, `gap-analysis.md`, `roles.md`, or actual repository equivalents).
- Workflow stepper: Choose → Investigate → Specify → Build → Verify.
- Build checklist with observable completion criteria.
- Agent activity/log panel only when real activity data exists. Never fake a live terminal or fabricated progress.

For a static kit, call it a kit or build brief, not a live agent execution dashboard.

### E. Evidence / verification — earn trust

**Goal:** Let a skeptical developer inspect the basis for a claim.

- Make the claim explicit.
- Show source title, publisher/domain, source date if actually available, and link.
- Distinguish source material from RAE FAANG's interpretation.
- For checks, show command, result, timestamp/commit if available, and pass/fail state.
- Include raw report links when committed and accessible.
- Use a compact terminal panel as a supporting element, not a fake console with invented output.

### F. Documentation — help people contribute

- Narrow comfortable reading column.
- Clear H1/H2 hierarchy, table of contents for long docs, copyable real commands, callouts only for consequential warnings.
- Put a next action near the end of each page.
- Keep links to schemas, CLI reference, agent workflow, plan, and contributing guide visible where relevant.

---

## 6. Responsive behavior

### Desktop: 1200px and up
- Use editorial split layouts, 12-column grid, and compact information-rich data rows.
- Keep body copy to a readable measure.
- Use sticky summary rails only if they don't compete with the content.

### Tablet: 768–1199px
- Reduce column count and hero display size.
- Move sidebar information above or below the main content where two columns become cramped.
- Keep tables legible; use controlled horizontal overflow only for genuinely tabular data.

### Mobile: under 768px
- Single-column flow.
- Avoid 3+ column mini-cards.
- Keep the main message and primary CTA near the top.
- Use stacked product rows and collapsible secondary evidence only when the collapsed state is clearly signaled.
- Preserve readable tap targets (prefer 44px minimum height for major controls).
- No horizontal page overflow.

---

## 7. Accessibility and usability

- Target WCAG 2.2 AA contrast for text and controls.
- Every interactive element must be keyboard accessible with a visible `:focus-visible` state.
- Status and coverage meaning must not depend on color alone.
- Every icon-only control needs an accessible name.
- Label search, filters, and form controls programmatically.
- Use semantic headings in a logical sequence and landmarks for navigation/main/footer.
- Respect reduced-motion preferences.
- Do not use animation to indicate an essential status without a text equivalent.
- Test with narrow widths, zoom, keyboard-only navigation, and long product names.

---

## 8. Data integrity rules for UI agents

This is a product that earns trust through accurate distinctions. Never make the interface look more certain than the underlying data.

1. Source every product, alternative, license, coverage status, and count from the repository's actual data model.
2. Do not hardcode displayed catalog totals if they can be derived from data.
3. Keep these states separate whenever possible:
   - alternative availability;
   - feature/coverage completeness;
   - agent-kit availability;
   - implementation status;
   - verification status.
4. If a source is missing, show `Source not recorded` or omit the claim—do not invent a URL.
5. If an upstream license is unknown, show `License not verified` rather than guessing.
6. Do not label a system built, working, production-ready, or verified without an implementation artifact and a defined check.
7. Do not misrepresent a research dossier or generated specification as executable product code.
8. Treat upstream names and logos as references, not endorsements. Follow repository trademark and attribution notices.
9. Preserve third-party license and notice obligations.
10. If a visual example uses illustrative data, label it as illustrative. Prefer actual catalog entries in the shipped site.

---

## 9. Implementation contract for coding agents

Before changing UI:

1. Inspect the repository, framework, installed dependencies, existing routing, styles, and data schema.
2. Reuse the project's conventions and working components. Do not introduce a new framework, design library, or large dependency for superficial visual improvements.
3. Locate the catalog source of truth and its build/validation commands.
4. Implement the design tokens first, then shared components, then page patterns.
5. Keep content/data distinct from presentation. Make catalog UI data-driven.
6. Preserve working routes, keyboard behavior, SEO metadata, and semantic HTML.
7. Avoid rewriting generated files manually. Update their sources and use the existing build command.
8. Run available validation, tests, and site build commands. Report exact commands and outcomes honestly.
9. Inspect at desktop and mobile widths. Fix overflow, clipping, contrast, and focus visibility.
10. Summarize changed files, user-visible improvements, commands run, failures, and anything that remains unverified.

### Definition of done

- The page reflects the primary positioning verbatim or with an explicitly approved copy change.
- Shared tokens are used consistently.
- Catalog content and counts come from actual source data.
- Alternative/coverage/build/verification states are not conflated.
- Every CTA points to a real route or performs a real action.
- No fake terminal, fake live agent progress, fake source, or invented completion state is shown.
- Desktop and mobile layouts work without horizontal page overflow.
- Keyboard focus and reduced-motion behavior are supported.
- Relevant project validation/tests/build have been run; their results are reported without embellishment.

---

## 10. Reference-board interpretation

Use `reference-board.png` for composition and mood:
- A restrained near-black canvas.
- Signal-green primary actions and active states.
- Catalog rows rather than oversized generic cards.
- A product dossier with distinct alternative, license, and kit information.
- A staged workflow and a verification terminal.
- A compact mobile variant.

The board is exploratory. It may contain illustrative labels or layout ideas that must be checked against this spec and the live repository. Do not copy inaccurate wording, synthetic progress, invented status values, or decorative content into production.
