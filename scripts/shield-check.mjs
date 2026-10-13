// Repo Shield monitoring check (generated).
// Verifies this repository carries the expected protection files with a valid
// license (SPDX identifier present, from the known set, matching NOTICE, and
// not an un-pasted Apache/GPL placeholder), and, when a search term is
// configured, heuristically detects public copies being used for training.
// Detection is heuristic by design; it is not proof of infringement and is not
// legal advice.
import { readFileSync, existsSync } from "node:fs";

const REQUIRED = ["NOTICE", "AI_TRAINING_POLICY.md"];
const MARKERS = { NOTICE: "AI-TRAINING", "AI_TRAINING_POLICY.md": "ai-training-consent" };
const KNOWN_SPDX = ["MIT", "ISC", "Unlicense", "Apache-2.0", "GPL-3.0-only"];

let failures = 0;
const report = [];
for (const file of REQUIRED) {
  const present = existsSync(file);
  const marker = MARKERS[file];
  const ok = present && (!marker || readFileSync(file, "utf8").includes(marker));
  if (!ok) failures++;
  report.push(`${ok ? "OK  " : "FAIL"} ${file}`);
}

// License self-check: LICENSE must exist, carry a known SPDX identifier, and
// must not be an un-pasted placeholder. The claimed license in NOTICE must
// match the LICENSE identifier.
const licenseText = existsSync("LICENSE") ? readFileSync("LICENSE", "utf8") : "";
const licenseMatch = (text) => (text.match(/SPDX-License-Identifier:\s*(\S+)/) || [])[1];
const licenseId = licenseMatch(licenseText);
const noticeId = existsSync("NOTICE") ? licenseMatch(readFileSync("NOTICE", "utf8")) : null;
const known = !!licenseId && KNOWN_SPDX.includes(licenseId);
const placeholder = /not embedded/.test(licenseText);
const licenseOk = known && !placeholder;
const licenseNote = !licenseId
  ? "(missing SPDX-License-Identifier)"
  : !known
    ? `(unrecognized license: ${licenseId})`
    : placeholder
      ? "(placeholder — paste the canonical full text)"
      : `(${licenseId})`;
report.push(`${licenseOk ? "OK  " : "FAIL"} LICENSE ${licenseNote}`);
if (!licenseOk) failures++;
if (licenseOk && noticeId && noticeId !== licenseId) {
  failures++;
  report.push(`FAIL NOTICE license mismatch (NOTICE: ${noticeId}, LICENSE: ${licenseId})`);
}
console.log(report.join("\n"));

const term = process.env.REPO_SHIELD_SEARCH_TERM;
if (term) {
  console.log("Scanning public copies (heuristic)...");
  const res = await fetch(
    `https://api.github.com/search/code?q=${encodeURIComponent(term)}&`,
    { headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}`, Accept: "application/vnd.github+json" } },
  );
  if (res.status === 200) {
    const json = await res.json();
    const total = json.total_count ?? 0;
    const inThisRepo = (json.items ?? []).filter((i) => i.repository.full_name === process.env.GITHUB_REPOSITORY);
    const others = (json.items ?? []).filter((i) => i.repository.full_name !== process.env.GITHUB_REPOSITORY);
    console.log(`Public copies outside this repo: ${others.length} (total hits ${total})`);
    if (others.length > 0 && inThisRepo.length === 0) {
      // Probable scraped/ingested copy outside our control.
      failures++;
      console.log("WARNING: protection marker found outside this repository.");
    }
  } else {
    console.log(`Scan skipped (api status ${res.status}); set REPO_SHIELD_SEARCH_TERM in env to enable.`);
  }
}

if (failures > 0) {
  const body = `## Repo Shield found gaps\n\n${report.join("\n")}\n\nAdd or fix the flagged files, then re-run this workflow.\n\n_This is an automated check; it is heuristic and not legal advice._`;
  const { execSync } = await import("node:child_process");
  try {
    const title = "Repo Shield: protection files missing";
    console.log("Opening issue via gh...");
    execSync(`gh issue create --title "${title}" --body "${body.replace(/"/g, '\\"')}"`, { stdio: "inherit" });
  } catch (e) {
    console.error("Could not open issue:", e?.message);
  }
  process.exit(1);
}
console.log("Protected: licenses and AI-training notices are present.");
