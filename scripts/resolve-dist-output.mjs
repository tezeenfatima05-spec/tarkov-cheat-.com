import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

/** Plain Astro static → `dist/`; @astrojs/cloudflare static → `dist/client/`. */
export function resolveDistOutput() {
  const client = path.join(root, 'dist', 'client');
  const plain = path.join(root, 'dist');

  // After CI build + Wrangler’s second build, sitemap lives under `client` while stale `dist/index.html` may remain.
  if (fs.existsSync(path.join(client, 'sitemap-0.xml'))) return client;
  if (fs.existsSync(path.join(plain, 'sitemap-0.xml'))) return plain;
  if (fs.existsSync(path.join(client, 'index.html'))) return client;
  if (fs.existsSync(path.join(plain, 'index.html'))) return plain;
  if (fs.existsSync(client)) return client;
  return plain;
}

/** Image prune targets (both layouts when present). */
export function resolveDistImageRoots() {
  const roots = new Set();
  for (const dir of [
    path.join(root, 'dist', 'images'),
    path.join(root, 'dist', 'client', 'images'),
  ]) {
    if (fs.existsSync(dir)) roots.add(dir);
  }
  return [...roots];
}
