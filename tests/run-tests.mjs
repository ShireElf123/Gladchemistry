/**
 * One command for the Phase 4 suite: `npm test`.
 *
 * Builds the jsdom harness, then runs each suite as a real process so a failure
 * is a non-zero exit code. Every assertion runs against shipped code.
 */
import { register } from 'node:module';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

register('./ts-resolve.mjs', import.meta.url);
const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');

const node = process.execPath;
const run = (args, label) => {
  console.log(`\n${'='.repeat(66)}\n${label}\n${'='.repeat(66)}`);
  const res = spawnSync(args[0], args.slice(1), { cwd: root, stdio: 'inherit' });
  return res.status === 0;
};

// The UI suite needs the components bundled for jsdom. esbuild mirrors how the
// app is actually built and keeps react external so there is one React instance.
const okUi = run(
  [
    join(root, 'node_modules/.bin/esbuild'),
    'tests/ui.tsx',
    '--bundle',
    '--platform=node',
    '--format=esm',
    '--jsx=automatic',
    '--log-level=error',
    '--outfile=tests/build/ui.js',
    '--external:react',
    '--external:react-dom',
    '--external:react-dom/client',
    '--external:react-router-dom',
  ],
  'building the jsdom harness'
);
if (!okUi) {
  console.log('\nHarness build failed');
  process.exit(1);
}

const suites = [
  ['cart.test.mjs', 'PRICING, PERSISTENCE & VALIDATION'],
  ['client.test.mjs', 'CLIENT SUBMISSION (no fake success)'],
  ['api.test.mjs', 'SERVERLESS ENDPOINTS (real orders only)'],
  ['ui-run.mjs', 'UI INTERACTIONS (jsdom)'],
];

let failed = 0;
for (const [file, label] of suites) {
  const passed = run([node, '--no-warnings', '--import', join(here, 'register.mjs'), join(here, file)], label);
  if (!passed) failed++;
}

console.log(
  `\n${failed === 0 ? 'ALL SUITES PASSED' : `${failed} SUITE(S) FAILED`}`
);
process.exit(failed === 0 ? 0 : 1);
