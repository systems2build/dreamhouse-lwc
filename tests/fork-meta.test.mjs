import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
const read = path => readFileSync(path,'utf8');
const pkg = JSON.parse(read('package.json'));
const license = read('LICENSE');
test('repository SPDX metadata matches root license',()=>{
  assert.match(license,/Apache License[\s\S]*Version 2\.0/);
  assert.equal(pkg.license,'Apache-2.0');
});
test('no inherited upstream automation is enabled',()=>{
  const live=readdirSync('.github/workflows').filter(n=>/\.ya?ml$/i.test(n));
  assert.deepEqual(live,['reference-validation.yml']);
  const stored=readdirSync('.github/upstream-workflows').filter(n=>/\.ya?ml$/i.test(n));
  assert.equal(stored.length,9);
});
test('fork attribution and approval limits are documented',()=>{
  assert.match(read('README.md'),/educational fork/i);
  assert.match(read('FORK_STATUS.md'),/No installation, deployment, package promotion/);
});
