# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Developers choosing a product they want their coding agent to build in their own project. The site also serves open-source contributors evaluating the catalog and its research.

## Product Purpose

RAE FAANG is a product-intelligence catalog that helps visitors choose among products from Meta, Amazon, Apple, Netflix, and Google, review product research and possible open-source foundations, and give a product-specific Markdown skill to their coding agent.

The desired visitor action is to choose a product and download or generate its skill for use in their own project.

## Positioning

Unlike a plain product or alternatives directory, each catalog product has a Markdown skill with product context, research references, reuse/build guidance, and verification directions. Coverage describes research into existing alternatives; it does not state whether a visitor can build the product.

## Operating Context

The public website contains a landing page, searchable and filterable product catalog, product dossier pages, and documentation. The generated site is static HTML/CSS with a small vanilla-JavaScript layer. The source of truth is catalog and documentation data rendered through `tools/site/` templates. Visitors can download a product skill or use the `rae` CLI to generate it.

## Capabilities and Constraints

- Catalog product pages and counts are generated from repository catalog data.
- Product records expose alternative-coverage states: available, partial, or pending/no verified alternative.
- The site must distinguish alternative research coverage from build capability.
- Product pages link to sources, candidate projects, and product-specific skills where available.
- Preserve search, company and coverage filters, navigation, downloads, internal links, and reduced-motion support.
- Do not invent event dates, registration, attendees, customers, pricing, or live agent activity.
- The repository declares the project MIT licensed; do not imply affiliation with or endorsement by the referenced companies.

## Brand Commitments

Keep the RAE FAANG name and the repository's independent, evidence-led, open-source purpose. The user selected the v0 IRL event landing template as a visual reference for all public pages and asked for creative adaptation, not copied event content.

## Evidence on Hand

`catalog/products.jsonl`, `catalog/skills/`, `research/companies/`, `catalog/rea/`, `docs/`, `site/COPY.md`, `README.md`, and `DESIGN.md`. The catalog and research are repository data; the site should label coverage accurately and link to source material rather than imply exhaustive verification.

## Product Principles

- Make choosing and using a product skill the clearest path.
- Show product-specific proof and catalog facts instead of unsupported marketing claims.
- Make research coverage limits explicit.
- Keep the catalog, dossiers, and documentation navigable across screen sizes.
- Preserve keyboard access and reduced-motion behavior.

## Accessibility & Inclusion

Keep semantic navigation and headings, keyboard-operable controls, visible focus, labelled filters and status messages, and reduced-motion support. Maintain responsive layouts and readable contrast.
