import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const pkg = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8'));

test('rae-aws-sqs declares a valid ace/v1 workspace', () => {
  assert.equal(pkg.ace?.spec, 'ace/v1');
  assert.equal(pkg.ace?.name, 'rae-aws-sqs');
  assert.ok(pkg.ace?.goal, 'workspace should declare a goal');
});

test('rae-aws-sqs keeps its specification scaffold', () => {
  assert.ok(existsSync(join(ROOT, 'specs', '01-product-vision.md')));
});
