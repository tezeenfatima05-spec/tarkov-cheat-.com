import fs from 'node:fs';
import path from 'node:path';
import { resolveDistImageRoots } from './resolve-dist-output.mjs';

/** Drop source PNGs from dist — pages serve WebP variants only. */
let removed = 0;
let bytes = 0;

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
      continue;
    }
    if (!/\.png$/i.test(entry.name)) continue;
    const stat = fs.statSync(full);
    if (stat.size < 80_000) continue;
    bytes += stat.size;
    fs.unlinkSync(full);
    removed += 1;
  }
}

for (const distImages of resolveDistImageRoots()) {
  walk(distImages);
}

console.log(
  `Pruned ${removed} source PNG(s) from dist image folders (${(bytes / 1024 / 1024).toFixed(1)} MB).`,
);
