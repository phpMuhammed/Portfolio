import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cvPath = path.resolve(
  __dirname,
  '..',
  'public',
  'cv',
  'Mohammed_Ayman_Musabeh_Senior_Full_Stack_Developer_CV.pdf'
);

if (!existsSync(cvPath)) {
  console.error(
    `\nBuild failed: CV file is missing.\nExpected it at: ${cvPath}\nAdd the CV PDF before building — see README.md.\n`
  );
  process.exit(1);
}
