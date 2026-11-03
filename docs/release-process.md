# Release process

How a version of RAE FAANG is prepared, verified and published. Publishing and
deploying are maintainer decisions: an agent may prepare a release and prove it
locally, but must not push a tag, `npm publish`, or deploy the site without
explicit approval.

## Version sources

| Surface | Source of truth |
|---|---|
| Package version | `version` in `package.json` (mirrored in `package-lock.json`) |
| CLI version | `RAE CLI v<version>` reads `package.json` at runtime (`src/cli.js`) |
| Release history | `CHANGELOG.md`, one section per released version |
| Tag | `v<version>`, matching the changelog link reference |

Nothing else stores the version, so a release is one `package.json` bump plus a
`package-lock.json` update.

## SemVer rules for this project

| Change | Bump |
|---|---|
| Breaking change to a CLI command, flag, output shape, or a catalog JSON Schema | **major** |
| New CLI command or flag, new schema field, new catalogued product, new opportunity spec or documentation surface | **minor** |
| Data corrections, copy and docs fixes, generator fixes that keep every interface intact, test-script repairs | **patch** |

While the project is on `0.x`, the same mapping applies; treat the release as
`0.<minor>.<patch>` and bump `minor` for any new surface. A change to catalog
data alone is a patch unless it changes the schema.

## Preparing a release

1. **Collect the change.** Move everything under `## [Unreleased]` in
   `CHANGELOG.md` into a new `## [<version>] - <YYYY-MM-DD>` section, and add the
   `[<version>]: https://github.com/EnzoVezzaro/rea-faang/releases/tag/v<version>`
   link reference at the bottom of the file.
2. **Bump the version.** `npm version <major|minor|patch> --no-git-tag-version`
   updates `package.json` and `package-lock.json` without creating a commit or
   tag, so the bump can land in the same reviewed change.
3. **Regenerate derived output.** Run `npm run skills:catalog` and
   `npm run site:build` whenever catalog data, skills or docs changed; the
   validation step fails on drift.
4. **Verify.** Run every command below and record the real exit codes in the
   handoff artifact:

   ```bash
   npm ci
   npm run validate          # catalog, research, opportunities, skills, site --check
   npm test                  # 58 root tests across 5 files
   for f in products/*/*/package.json; do (cd "$(dirname "$f")" && npm test) || exit 1; done
   npm run ace -- config check  # the pinned ace-proagents, not a global install
   npm pack --dry-run        # package contents, no publish
   node src/cli.js --version # must print the new version
   ```

5. **Describe the artifact.** `npm pack --dry-run --json` lists the files and
   size that would be published. It must include `src/`, `lib/`, `catalog/`,
   `research/`, `opportunities/`, `tools/`, `docs/`, `ace.mjs` and the license
   files; a missing directory means the `files` list in `package.json` needs
   updating.
6. **Stop at the gate.** Commit the prepared release, then wait for maintainer
   approval before tagging, publishing or deploying.

## Publishing (maintainer only)

```bash
git tag -a v<version> -m "v<version>" && git push origin v<version>
npm publish
```

The site is deployed by `.github/workflows/pages.yml` after a successful CI run on
`main`; the Vercel project is optional and only canonical when the build is run
with `RAE_SITE_URL=https://rae-faang-landing.vercel.app`.

## What a handoff must record

- The version prepared and the changelog section that describes it.
- Exit codes for every verification command above.
- Any check that could not run, with the reason (for example no network, no
  `ace` runtime, or a maintainer-only step).
- An explicit statement that nothing was published, tagged or deployed.

## Related

- [`../CHANGELOG.md`](../CHANGELOG.md) — release history and the prepared
  `[Unreleased]` section.
- [`../CONTRIBUTING.md`](../CONTRIBUTING.md) — the contribution loop that feeds a
  release.
- [`../PLAN.md`](../PLAN.md) — workstreams and project definition of done.
