import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const publicDir = path.join(root, 'public');
const sourcePath = path.join(publicDir, 'favicon-source.png');

if (!fs.existsSync(sourcePath)) {
  console.error('Missing public/favicon-source.png — add the brand image first.');
  process.exit(1);
}

async function stripNearBlackBackground(input) {
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const threshold = 40;

  for (let i = 0; i < data.length; i += info.channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (r <= threshold && g <= threshold && b <= threshold) {
      data[i + 3] = 0;
    }
  }

  return sharp(data, {
    raw: { width: info.width, height: info.height, channels: info.channels },
  }).png();
}

const transparent = await stripNearBlackBackground(sourcePath);
const square = await transparent
  .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png();

await square.clone().resize(180, 180).png().toFile(path.join(publicDir, 'apple-touch-icon.png'));
await square.clone().resize(32, 32).png().toFile(path.join(publicDir, 'favicon-32.png'));
await square.clone().resize(16, 16).png().toFile(path.join(publicDir, 'favicon-16.png'));
await square.clone().resize(32, 32).png().toFile(path.join(publicDir, 'favicon.ico'));
await square.clone().resize(64, 64).png().toFile(path.join(publicDir, 'favicon.png'));

console.log('Brand icons generated from favicon-source.png (transparent background).');
