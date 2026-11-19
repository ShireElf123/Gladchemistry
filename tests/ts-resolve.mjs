// Lets plain `node` run the app's TypeScript modules (which use bundler-style
// extensionless imports) so the real code paths can be tested directly.
import { existsSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, resolve as resolvePath } from 'node:path';

const CANDIDATES = ['.ts', '.tsx', '/index.ts', '/index.tsx'];

export async function resolve(specifier, context, next) {
  if (specifier.startsWith('.') && context.parentURL?.startsWith('file:')) {
    const base = dirname(fileURLToPath(context.parentURL));
    const target = resolvePath(base, specifier);
    if (!existsSync(target)) {
      for (const suffix of CANDIDATES) {
        if (existsSync(target + suffix)) {
          return { url: pathToFileURL(target + suffix).href, shortCircuit: true };
        }
      }
    }
  }
  return next(specifier, context);
}
