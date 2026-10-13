---
version: alpha
mission: "The mission: make the products of the world's biggest technology companies free, open source, and accessible to everyone."


name: RAE
description: A nostalgic, independent-web-inspired design system for modern agentic software development.
colors:
  primary: "#E8FF6B"
  secondary: "#A7B1C2"
  tertiary: "#80F5D2"
  neutral: "#F5F3EB"
  background: "#101114"
  surface: "#181A20"
  surface-raised: "#20232B"
  surface-hover: "#282C35"
  text: "#F5F3EB"
  text-muted: "#A7B1C2"
  text-subtle: "#747D8C"
  border: "#343844"
  border-strong: "#555D6D"
  accent-pink: "#FF8EBD"
  accent-blue: "#8EBBFF"
  success: "#80F5D2"
  warning: "#E8FF6B"
  danger: "#FF7777"
  focus: "#80F5D2"
typography:
  display:
    fontFamily: "Space Grotesk, Arial, sans-serif"
    fontSize: 72px
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: -0.055em
  h1:
    fontFamily: "Space Grotesk, Arial, sans-serif"
    fontSize: 56px
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -0.045em
  h2:
    fontFamily: "Space Grotesk, Arial, sans-serif"
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: -0.035em
  h3:
    fontFamily: "Space Grotesk, Arial, sans-serif"
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.025em
  body-lg:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.65
  body-md:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.65
  body-sm:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.04em
  code:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
spacing:
  0: 0px
  1: 4px
  2: 8px
  3: 12px
  4: 16px
  5: 20px
  6: 24px
  8: 32px
  10: 40px
  12: 48px
  16: 64px
  20: 80px
  24: 96px
  32: 128px
rounded:
  none: 0px
  xs: 3px
  sm: 5px
  md: 8px
  lg: 12px
  xl: 18px
  full: 9999px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#101114"
    rounded: "{rounded.sm}"
    padding: "12px 18px"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    padding: "12px 18px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "24px"
  input:
    backgroundColor: "{colors.background}"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    padding: "12px 14px"
---

# RAE — Design System

## 1. Overview

### Product intent

RAE should feel like a message from the internet we once imagined: an open, creative, independent network where curious people could build things that mattered.

Reinterpret that spirit for a world in which AI agents can write code, operate tools, collaborate on software, and work toward shared goals.

The experience must balance two seemingly different qualities:

- **Nostalgia:** the optimism, experimentation, handmade graphics, personal websites, terminal windows, and sense of possibility associated with the early web.
- **Modernity:** precise typography, responsive layouts, sophisticated interaction, dependable software, and the clarity expected from a contemporary developer tool.

The result must feel intentional, emotionally resonant, and technically credible.

RAE is not a retro-themed website. It is a contemporary product with a memory of what the internet could be.

### Brand personality

- Independent rather than corporate.
- Curious rather than predictable.
- Human rather than sterile.
- Technical rather than intimidating.
- Expressive rather than chaotic.
- Optimistic without becoming naive.
- Experimental without sacrificing usability.
- Open and collaborative rather than closed and proprietary.

### Core design thesis

**Old internet soul. Modern tools. A future we build ourselves.**

Every design decision should support this thesis.

### Audience

Design for software engineers, open-source contributors, AI builders, independent developers, researchers, and technically curious people.

Assume that the audience appreciates authenticity, working software, readable technical information, thoughtful details, and tools that respect their intelligence.

Do not explain technical concepts through exaggerated marketing language. Show what the product enables.

### Design priorities

When design goals conflict, use this order:

1. Usability and accessibility.
2. Product clarity and trust.
3. Consistency with this design system.
4. Distinctive visual expression.
5. Decorative experimentation.

Never sacrifice basic usability to preserve an aesthetic effect.

## 2. Experience Principles

### 2.1 The web should feel alive

Interfaces should feel like places to explore, not static collections of cards.

Use purposeful motion, live status indicators, interactive demonstrations, evolving diagrams, terminal-like details, and responsive feedback.

Every animated or interactive element must have a reason to exist.

### 2.2 Nostalgia through details, not imitation

Reference the early internet through:

- Monospaced typography and technical annotations.
- Compact status labels and connection indicators.
- Small pixel-inspired graphics and geometric illustrations.
- Understated grid structures and document-like layouts.
- Occasional playful hyperlinks and hand-built visual details.
- Restrained phosphor-inspired highlights.
- A sense of discovery and creative independence.

Do not reproduce obsolete browser chrome, illegible pixel fonts, fake loading screens, or deliberately broken layouts.

The inspiration is the spirit of the early web, not its usability limitations.

### 2.3 Technology should be visible

Where appropriate, reveal the mechanisms behind the product.

Show agent activity, code changes, execution states, task relationships, or system events through understandable visual representations.

Prefer real data and real product behavior over simulated demonstrations. If an example is illustrative, label it accordingly.

### 2.4 Use restraint to make expression meaningful

The interface should have a calm, coherent foundation. Expressive colors, unusual illustrations, animations, and experimental elements become more effective when used selectively.

Do not make every section visually loud.

### 2.5 Open-source sensibility

Avoid visual language associated with generic enterprise dashboards or aggressive growth marketing.

Use direct language, visible technical substance, transparent status, and recognizable developer conventions.

If third-party integrations or ecosystem logos appear, use authentic assets and accurate brand representations.

## 3. Colors

### Color philosophy

Use a dark, near-black foundation with warm off-white typography and a distinctive acid-lime accent.

The lime suggests phosphor displays, experimentation, and digital energy. Mint provides a secondary signal for active or successful states. Pink and blue are occasional expressive accents.

The palette should feel atmospheric, not fluorescent.

### Semantic roles

- **Primary — Acid Lime (`#E8FF6B`):** primary calls to action, selected controls, key emphasis, and a limited number of memorable visual details.
- **Secondary — Silver Blue (`#A7B1C2`):** supporting text, descriptions, and secondary metadata.
- **Tertiary — Digital Mint (`#80F5D2`):** successful operations, healthy states, and selected technical visualizations.
- **Background (`#101114`):** main page canvas.
- **Surface (`#181A20`):** cards, panels, and grouped content.
- **Raised Surface (`#20232B`):** elevated panels, popovers, and active containers.
- **Border (`#343844`):** quiet separation between elements.
- **Text (`#F5F3EB`):** primary text and headings.
- **Muted Text (`#A7B1C2`):** secondary information.
- **Subtle Text (`#747D8C`):** tertiary information, used only where contrast remains sufficient.
- **Pink (`#FF8EBD`):** rare expressive highlights and illustrations.
- **Blue (`#8EBBFF`):** technical diagrams and secondary data visualization.

### Rules

1. Use the background as the default canvas; do not place every section inside a card.
2. Reserve lime for important actions, meaningful highlights, and intentional accents.
3. Do not use lime for every heading, icon, border, and status label simultaneously.
4. Never use lime text on a white or similarly bright background without a verified contrast-safe treatment.
5. Use mint for success, not as a universal decoration.
6. Use danger red for errors and destructive actions.
7. Distinguish states using labels or icons as well as color.
8. Do not introduce new accent colors for individual features without a documented reason.
9. Keep gradients exceptional. The default visual language is solid color, subtle texture, and precise contrast.
10. Validate actual foreground/background combinations against WCAG 2.2 AA requirements.

The YAML tokens are the intended defaults. If a combination fails accessibility testing, create a documented accessible variant instead of preserving the original value at the expense of readability.

## 4. Typography

### Typeface roles

**Space Grotesk** — display headings, major statements, and expressive editorial moments.

**Inter** — body text, interface copy, form labels, navigation, and general readability.

**IBM Plex Mono** — code, technical metadata, timestamps, system states, terminal output, and small editorial annotations.

Use project-installed fonts when available. Otherwise, load the chosen fonts through the existing font pipeline and provide reliable fallbacks.

Avoid adding multiple font families merely to create variety.

### Hierarchy

- Display: 64–80px on wide desktop screens.
- H1: 48–64px on desktop, scaled fluidly for smaller screens.
- H2: 32–44px.
- H3: 24–30px.
- Body: 16–18px.
- Supporting copy: 14–16px.
- Technical metadata: 11–13px, subject to readability and contrast.

These are target ranges, not permission to use oversized type everywhere.

### Rules

- Use tight tracking for large headings and comfortable line-height for body text.
- Keep hero headlines short enough to scan quickly.
- Use sentence case for most headings and interface labels.
- Reserve uppercase text for small metadata, category labels, and status annotations.
- Use monospaced text for information that benefits from a technical or terminal-like character.
- Do not render entire paragraphs in monospace.
- Avoid long passages in all caps.
- Use tabular numerals for counters, durations, and changing numeric values where alignment matters.
- Preserve a clear hierarchy between headings, body text, metadata, and actions.
- Use fluid type sizing with sensible minimums and maximums rather than abrupt viewport-dependent jumps.

## 5. Layout and Spacing

### Spatial philosophy

Combine editorial breathing room with the precision of a developer workspace.

Marketing pages should feel spacious and exploratory. Product interfaces may be denser, but must remain orderly and scannable.

Use the spacing tokens defined in the YAML frontmatter. Avoid arbitrary spacing values when a token provides the intended result.

### Containers

- Main desktop content: approximately 1120–1280px maximum width.
- Reading-oriented content: approximately 640–760px.
- Wide technical demonstrations: up to the main content width.
- Desktop page gutters: 32–48px.
- Tablet page gutters: 24–32px.
- Mobile page gutters: 16–20px.

Use fluid widths and prevent horizontal overflow.

### Grid

Prefer simple, adaptable grids.

- Use asymmetric editorial layouts when they strengthen the narrative.
- Use consistent columns for technical comparisons and structured content.
- Use CSS Grid for two-dimensional arrangements and Flexbox for one-dimensional alignment.
- Keep related information visually grouped.
- Allow cards to expand naturally when content length varies.
- Avoid complex overlapping compositions that collapse unpredictably on mobile.

### Vertical rhythm

- Hero sections should have room for a headline, explanation, primary action, and meaningful product visual.
- Section spacing should reflect narrative importance.
- Large breaks between major sections are encouraged on the landing page.
- Dense interface regions should use tighter, consistent spacing.
- Repeated elements should align to the same baseline and spacing system.

Do not compensate for weak hierarchy by adding more whitespace indiscriminately.

## 6. Elevation and Depth

### Default approach

Use tonal contrast and borders to create depth. Heavy shadows are not the defining visual language.

Prefer:

- Slightly differentiated surface colors.
- Thin, low-contrast borders.
- Clear separation between canvas and interactive regions.
- Restrained shadows for floating menus and dialogs.
- Small changes in surface color for hover and active states.

### Shadow rules

Shadows should be subtle and functional.

Use them for elements that float above the document, such as menus, dialogs, and transient notifications.

Avoid enormous blurred shadows, luminous card outlines, and glowing effects around ordinary components.

A glow may appear in a carefully designed hero illustration or an exceptional live-state indicator, but it must not become the default treatment.

## 7. Shapes and Borders

The shape language combines contemporary software precision with a slightly utilitarian, handmade character.

- Default radius: 5–8px.
- Larger content panels: 8–12px.
- Prominent editorial panels: up to 18px where appropriate.
- Compact controls: 3–5px.
- Pill shapes: reserved for status chips, compact tags, or deliberately pill-shaped controls.

Do not make every component a pill.

Avoid excessive rounding, oversized bubbles, and the generic appearance of a dashboard built entirely from rounded cards.

Use square corners for code windows, terminal-inspired elements, and technical diagrams when they reinforce the visual concept.

Borders should usually be 1px and low contrast. Increase contrast for keyboard focus, active selection, or critical boundaries.

## 8. Iconography and Illustration

### Iconography

Use a consistent icon family already established in the project.

Prefer simple, recognizable line icons with consistent stroke weight.

Icons should communicate a function, state, or meaningful concept. Avoid decorative icon overload.

- Icon-only controls require accessible names.
- Pair unfamiliar actions with visible labels or tooltips.
- Keep icon sizes aligned with the surrounding type and control dimensions.
- Do not mix unrelated icon families without a clear reason.

### Illustration

Illustrations should feel like artifacts of a creative technical culture.

Suitable directions include:

- Minimal network maps.
- Abstract constellations of connected agents.
- Terminal-inspired compositions.
- Geometric diagrams of collaborating systems.
- Pixel-inspired symbols used sparingly.
- Visual references to the early web interpreted through contemporary rendering.

Avoid generic AI brains, stock robot mascots, meaningless glowing orbs, and abstract gradients that communicate nothing about the product.

Every substantial illustration should reinforce a specific idea.

## 9. Motion and Interaction

### Motion philosophy

Motion should make software feel responsive and alive without interrupting thought.

The experience should feel deliberate, not theatrical.

### Timing

Use these target durations:

- Immediate feedback: 80–140ms.
- Hover and focus transitions: 120–180ms.
- Dropdowns and small panels: 160–220ms.
- Section reveals: 250–450ms.
- Exceptional narrative transitions: up to 600ms when justified.

Prefer ease-out curves for entering elements and ease-in curves for exiting elements. Use consistent easing across related components.

### Allowed patterns

- Subtle movement in a network visualization.
- Small position or color changes on hover.
- Short transitions for navigation and menus.
- Typing or streaming effects when representing actual live output.
- Carefully timed hero animations that reveal a concept.
- Real-time status changes tied to actual application state.
- Small success confirmations after completed actions.

### Forbidden patterns

- Long mandatory intro animations.
- Fake terminal output presented as live execution.
- Endless decorative typing loops.
- Large parallax effects that interfere with reading.
- Scroll hijacking.
- Motion that delays primary actions.
- Excessive bouncing, spring effects, or attention-grabbing pulses.
- Animations that run continuously without conveying meaningful change.

### Accessibility

Respect `prefers-reduced-motion`.

When reduced motion is enabled, remove nonessential movement and replace spatial transitions with simple opacity changes or immediate state changes.

Never communicate a critical state through animation alone.

## 10. Responsive Design

Design for small screens from the beginning rather than treating mobile as a compressed desktop layout.

### Desktop

- Preserve the editorial character of the landing page.
- Use wide product demonstrations where they add value.
- Allow generous horizontal space and intentional asymmetry.
- Keep navigation and calls to action immediately understandable.

### Tablet

- Simplify multi-column layouts when their contents become crowded.
- Reduce heading sizes and section spacing proportionally.
- Prevent navigation and controls from wrapping unpredictably.

### Mobile

- Use a single-column reading flow for most landing-page sections.
- Stack calls to action when necessary.
- Ensure buttons and interactive targets are comfortably touchable; aim for at least 44 × 44 CSS pixels.
- Keep technical demonstrations legible and provide horizontal scrolling only for genuinely two-dimensional or preformatted content.
- Simplify complex diagrams instead of merely shrinking them.
- Keep the most important product message and action visible without requiring users to navigate a maze of decorative sections.
