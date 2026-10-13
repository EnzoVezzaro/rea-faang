# Opportunity specs

An opportunity spec is the bridge from research to implementation. One is
**required** for every product whose `opportunity_status` is `build_missing`:

```bash
node src/cli.js opportunities validate   # fails if a build_missing spec is missing
node src/cli.js opportunities list       # which products have a spec
node src/cli.js opportunities export     # all classified opportunities as JSON
```

- File name: `opportunities/<product_id>.md` (the id from `catalog/products.jsonl`).
- One spec per product.
- Grounded in the product's research dossier
  (`research/companies/<company_id>/products/<product_id>.md`).

## Required structure

```markdown
# Opportunity: <Product Name> (<product_id>)

| | |
|---|---|
| **Target product** | <name> (`<product_id>`) |
| **Company** | <company_id> |
| **Classification** | build_missing |
| **Status** | proposed \| in_progress \| shipped |
| **Proposed alternative** | <name> |
| **License** | <SPDX id> |

## Why this is a build opportunity
Why no existing open-source project closes the gap, citing the dossier.

## Alternatives considered
Existing projects, and why reusing/extending them is not enough.

## Proposed scope (MVP)
The smallest end-to-end thing that delivers real value.

## Out of scope (non-goals)
Explicitly what this is *not*.

## Architecture sketch
Components and which open-source infrastructure is reused vs. built.

## Acceptance criteria
Testable, measurable checkboxes. Each maps to a test or a named manual check.

## Risks and open questions

## Evidence
Public sources, carried over from the dossier.
```

## Rules

- **Evidence-first.** Every claim about the target or about an alternative traces
  to a cited public source.
- **Reuse before build.** Prefer extending existing open-source infrastructure;
  state what is genuinely new.
- **Testable criteria.** Vague goals ("works well") are not acceptance criteria.
- **Honest scale.** Do not promise parity with a product at a scale the project
  cannot operate.
