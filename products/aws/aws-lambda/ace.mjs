#!/usr/bin/env node
/**
 * Product ACE entry point.
 *
 * ACE keeps one CLI in the repository root so there is a single source of truth
 * for the spec (see docs/agent-workflow.md). This shim runs the root CLI from
 * the product directory, so `ace <command>` works here exactly as it
 * does at the repository root, and `npm update ace-proagents` only has to be
 * re-applied once.
 */
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const rootAce = resolve(here, '..', '..', '..', 'ace.mjs');
const { status } = spawnSync(process.execPath, [rootAce, ...process.argv.slice(2)], {
  stdio: 'inherit',
  cwd: process.cwd(),
});

process.exit(status ?? 1);
