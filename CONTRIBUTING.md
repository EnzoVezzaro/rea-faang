![RAE FAANG](assets/logo.svg)

# Contributing to RAE FAANG

Thanks for helping build open-source alternatives to the products of the world's
biggest technology companies. This guide is the human-facing companion to
[`AGENTS.md`](AGENTS.md) (which covers AI agents).

---

## Ways to contribute

- **Research** a product's publicly observable behavior and improve its dossier
  in `research/companies/<company>/products/<id>.md`.
- **Specify** a product in `products/<company>/<product>/specs/`.
- **Build** an implementation in a product workspace.
- **Test** — add coverage and verify acceptance criteria.
- **Document** — improve `docs/`, product READMEs, or migration guides.
- **Review** code and research for correctness, security, and provenance.
- **Report** bugs and propose new product directions.

---

## Setup

Requires **Node.js 20+**.

```bash
git clone <your-repo-url> rae-faang
cd rae-faang
npm install
npm test            # runs the deterministic CLI test suite
npm run validate    # catalog + research structural validation
ace status # ACE environment overview
```

See [`docs/getting-started.md`](docs/getting-started.md) for the full guide and
[`docs/cli-reference.md`](docs/cli-reference.md) for every command.

---

## The contribution loop

1. **Find work.** Read [`PLAN.md`](PLAN.md). Pick one focused task.
2. **Branch.** `feature/<product>-<short-description>` or
   `fix/<short-description>`.
3. **Change the smallest thing that satisfies the task.** Keep it independently
   testable and easy to review.
4. **Verify.** Run the task's verification command and quote the real result.
5. **Open a PR** with a conventional, why-focused message.

A good change starts with evidence: state the behavior you want to reproduce, the
sources supporting it, and the criteria for calling it done.

---

## Standards

- **Evidence-backed.** Every material claim about a target product cites a
  public source. Distinguish verified observations from assumptions.
- **Agent-friendly `--format json`.** The CLI's machine output is stable; don't
  break it without updating the tests.
- **Small PRs.** One concern per PR.
- **Tests travel with code.** New behavior gets a test; bug fixes get a
  regression test.
- **Don't weaken verification.** No deleted tests, loosened schemas, swallowed
  errors, or lint/type suppressions used only to pass.
- **Match the surrounding code.** The CLI is dependency-light, ESM, `node:`-first.
  Prefer the standard library. New dependencies need a reason in the PR.

### Adding a dependency

The repository deliberately stays close to zero-dependency (the CLI uses only
`js-yaml` and `minimist`; ACE has none). Justify any new dependency, prefer the
Node standard library, and keep it pinned.

---

## Responsible reverse engineering

We advance open software through **clean-room** work. Do not:

- copy proprietary source code or redistribute protected assets;
- decompile, disassemble, or use leaked private material;
- bypass access controls or misuse confidential information.

Use only publicly observable behavior, official documentation, published
protocols, and interfaces you are authorized to inspect. Product names describe a
functional reference only — they imply no affiliation or endorsement. Document the
provenance and licensing of everything you add.

---

## Commit messages

Focus on **why**, not just what:

```
Research: record Netflix streaming capability evidence

Add cited sources for adaptive-bitrate and recommendations so the
dossier can move from pending to researched.
```

---

## Reporting security issues

Do not open a public issue for a suspected vulnerability. Contact the
maintainers privately and give them time to respond before disclosure.

---

## See also

- [`AGENTS.md`](AGENTS.md) — the agent operating model.
- [`PLAN.md`](PLAN.md) — the development plan.
- [`docs/`](docs/README.md) — the documentation set.
