import sharp from 'sharp';
import { mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(__dirname, '..', 'public');
mkdirSync(outDir, { recursive: true });

const WIDTH = 1200;
const HEIGHT = 630;

function escapeXml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function buildSvg({ name, title, subtitle, dir }) {
  const isRtl = dir === 'rtl';
  const textAnchor = isRtl ? 'end' : 'start';
  const x = isRtl ? WIDTH - 80 : 80;
  const fontFamily = isRtl
    ? "'IBM Plex Sans Arabic', 'Inter', sans-serif"
    : "'Inter', sans-serif";

  return `<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${WIDTH}" height="${HEIGHT}" fill="#0a0a0a"/>
  <rect x="0" y="0" width="10" height="${HEIGHT}" fill="#0f766e"/>
  <text x="${x}" y="300" text-anchor="${textAnchor}" font-family="${fontFamily}" font-size="64" font-weight="700" fill="#f3f2f0">${escapeXml(name)}</text>
  <text x="${x}" y="360" text-anchor="${textAnchor}" font-family="${fontFamily}" font-size="34" font-weight="500" fill="#2dd4bf">${escapeXml(title)}</text>
  <text x="${x}" y="410" text-anchor="${textAnchor}" font-family="monospace" font-size="24" font-weight="400" fill="#b8b5b0">${escapeXml(subtitle)}</text>
</svg>`;
}

const images = [
  {
    file: 'og-en.png',
    name: 'Mohammed Musabeh',
    title: 'Senior Full Stack Developer',
    subtitle: 'Backend Architecture · Laravel & PHP',
    dir: 'ltr',
  },
  {
    file: 'og-ar.png',
    name: 'محمد مصبح',
    title: 'مطوّر Full Stack أول',
    subtitle: 'هندسة الأنظمة الخلفية · Laravel و PHP',
    dir: 'rtl',
  },
];

for (const image of images) {
  const svg = buildSvg(image);
  const outPath = path.join(outDir, image.file);
  await sharp(Buffer.from(svg)).png().toFile(outPath);
  console.log(`Generated ${outPath}`);
}
