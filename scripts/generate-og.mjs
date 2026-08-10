import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(__dirname, '..', 'public');
const fontsDir = path.resolve(__dirname, '..', 'node_modules', '@fontsource');
mkdirSync(outDir, { recursive: true });

const WIDTH = 1200;
const HEIGHT = 630;

function loadFont(pkg, file) {
  return readFileSync(path.join(fontsDir, pkg, 'files', file));
}

const fonts = [
  { name: 'Inter', weight: 500, style: 'normal', data: loadFont('inter', 'inter-latin-500-normal.woff') },
  { name: 'Inter', weight: 700, style: 'normal', data: loadFont('inter', 'inter-latin-700-normal.woff') },
  { name: 'IBM Plex Sans Arabic', weight: 400, style: 'normal', data: loadFont('ibm-plex-sans-arabic', 'ibm-plex-sans-arabic-arabic-400-normal.woff') },
  { name: 'IBM Plex Sans Arabic', weight: 500, style: 'normal', data: loadFont('ibm-plex-sans-arabic', 'ibm-plex-sans-arabic-arabic-500-normal.woff') },
  { name: 'IBM Plex Sans Arabic', weight: 700, style: 'normal', data: loadFont('ibm-plex-sans-arabic', 'ibm-plex-sans-arabic-arabic-700-normal.woff') },
  { name: 'IBM Plex Sans Arabic', weight: 400, style: 'normal', data: loadFont('ibm-plex-sans-arabic', 'ibm-plex-sans-arabic-latin-400-normal.woff') },
  { name: 'IBM Plex Sans Arabic', weight: 500, style: 'normal', data: loadFont('ibm-plex-sans-arabic', 'ibm-plex-sans-arabic-latin-500-normal.woff') },
  { name: 'IBM Plex Sans Arabic', weight: 700, style: 'normal', data: loadFont('ibm-plex-sans-arabic', 'ibm-plex-sans-arabic-latin-700-normal.woff') },
  { name: 'IBM Plex Mono', weight: 400, style: 'normal', data: loadFont('ibm-plex-mono', 'ibm-plex-mono-latin-400-normal.woff') },
];

function buildTree({ name, title, subtitle, dir }) {
  const isRtl = dir === 'rtl';
  const align = isRtl ? 'flex-end' : 'flex-start';
  const textAlign = isRtl ? 'right' : 'left';
  const fontFamily = isRtl ? 'IBM Plex Sans Arabic, Inter' : 'Inter, IBM Plex Sans Arabic';

  return {
    type: 'div',
    props: {
      style: {
        width: WIDTH,
        height: HEIGHT,
        display: 'flex',
        position: 'relative',
        backgroundColor: '#0a0a0a',
      },
      children: [
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute',
              left: 0,
              top: 0,
              width: 10,
              height: HEIGHT,
              backgroundColor: '#0f766e',
              display: 'flex',
            },
          },
        },
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: align,
              justifyContent: 'center',
              height: HEIGHT,
              paddingLeft: 80,
              paddingRight: 80,
            },
            children: [
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex',
                    fontFamily,
                    fontWeight: 700,
                    fontSize: 64,
                    color: '#f3f2f0',
                    textAlign,
                  },
                  children: name,
                },
              },
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex',
                    fontFamily,
                    fontWeight: 500,
                    fontSize: 34,
                    color: '#2dd4bf',
                    textAlign,
                    marginTop: 18,
                  },
                  children: title,
                },
              },
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex',
                    fontFamily: `IBM Plex Mono, ${fontFamily}`,
                    fontWeight: 400,
                    fontSize: 24,
                    color: '#b8b5b0',
                    textAlign,
                    marginTop: 20,
                  },
                  children: subtitle,
                },
              },
            ],
          },
        },
      ],
    },
  };
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
  const svg = await satori(buildTree(image), { width: WIDTH, height: HEIGHT, fonts });
  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: WIDTH } });
  const png = resvg.render().asPng();
  const outPath = path.join(outDir, image.file);
  writeFileSync(outPath, png);
  console.log(`Generated ${outPath}`);
}
