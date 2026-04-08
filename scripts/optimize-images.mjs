import sharp from 'sharp';
import { readdir, mkdir, copyFile } from 'fs/promises';
import { join, extname } from 'path';

const ASSETS_DIR = '../assets';
const OUTPUT_DIR = './public/images';
const LOGOS_DIR = './public/logos';

const MAX_WIDTH = 2400;
const MOBILE_WIDTH = 1200;
const QUALITY = 80;

// Mapping from original filenames to descriptive names
const FILE_MAP = {
  'IMG_1358.jpeg': 'hero-panoramic',
  'IMG_1290.jpeg': 'hero-sunset',
  'IMG_2071.jpeg': 'home-ranch-exterior',
  'IMG_2458.jpeg': 'home-coastal-aerial',
  'IMG_0799.jpeg': 'construction-framing',
  'IMG_0599.jpeg': 'interior-great-room',
  'IMG_0334.jpeg': 'interior-kitchen',
  '2836892069324847495.jpeg': 'interior-bathroom-vanity',
  'IMG_6777.jpeg': 'interior-shower-tile',
  'IMG_8596.jpeg': 'interior-ceiling-beams',
  'E2994EFA-CEB0-4CBE-82BE-612D6986E26920241024_124913.jpeg': 'exterior-deck-panoramic',
  'IMG_0029.jpeg': 'exterior-siding-detail',
  'IMG_1526.jpeg': 'exterior-winter-home',
  'IMG_5785.jpeg': 'exterior-deck-foggy',
  'IMG_5321.jpeg': 'about-horseback-flag',
  'IMG_0587.jpeg': 'outbuilding-barn-dark',
  'IMG_7473.jpeg': 'outbuilding-ag-barn',
  'IMG_2929.jpeg': 'construction-roof',
  'IMG_3406.jpeg': 'construction-deck-ramp',
  'IMG_0550.jpeg': 'construction-shop-progress',
  'IMG_1353 2.jpeg': 'home-ranch-front',
  'IMG_1298.jpeg': 'home-modern-hillside',
};

async function processImage(inputPath, outputName) {
  const meta = await sharp(inputPath).metadata();
  const w = meta.width;
  const h = meta.height;
  const ratio = w / h;

  console.log(`  ${outputName}: ${w}x${h} (${ratio > 2 ? 'panoramic' : 'landscape'})`);

  // Full size (max 2400px wide, or 2560 for panoramic)
  const fullWidth = ratio > 2 ? 2560 : MAX_WIDTH;
  const resizeWidth = w > fullWidth ? fullWidth : w;

  await sharp(inputPath)
    .resize(resizeWidth, null, { withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(join(OUTPUT_DIR, `${outputName}.webp`));

  // Mobile size (1200px)
  const mobileWidth = w > MOBILE_WIDTH ? MOBILE_WIDTH : w;
  await sharp(inputPath)
    .resize(mobileWidth, null, { withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(join(OUTPUT_DIR, `${outputName}-mobile.webp`));

  // Also generate a JPEG fallback at full size
  await sharp(inputPath)
    .resize(resizeWidth, null, { withoutEnlargement: true })
    .jpeg({ quality: QUALITY })
    .toFile(join(OUTPUT_DIR, `${outputName}.jpg`));
}

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });
  await mkdir(LOGOS_DIR, { recursive: true });

  console.log('Processing photos...\n');

  for (const [original, outputName] of Object.entries(FILE_MAP)) {
    const inputPath = join(ASSETS_DIR, original);
    try {
      await processImage(inputPath, outputName);
      console.log(`  -> Done\n`);
    } catch (err) {
      console.error(`  -> ERROR: ${err.message}\n`);
    }
  }

  // Process logos
  console.log('Processing logos...\n');

  // Transparent PNG logo -> keep as PNG + generate WebP
  await sharp(join(ASSETS_DIR, 'Logo-transparent-bg.png'))
    .resize(400, null, { withoutEnlargement: true })
    .png({ quality: 90 })
    .toFile(join(LOGOS_DIR, 'logo-transparent.png'));

  await sharp(join(ASSETS_DIR, 'Logo-transparent-bg.png'))
    .resize(400, null, { withoutEnlargement: true })
    .webp({ quality: 90 })
    .toFile(join(LOGOS_DIR, 'logo-transparent.webp'));

  // Large logo
  await sharp(join(ASSETS_DIR, 'NEW-LOGO-transparent-bg.png'))
    .resize(600, null, { withoutEnlargement: true })
    .png({ quality: 90 })
    .toFile(join(LOGOS_DIR, 'logo-large.png'));

  await sharp(join(ASSETS_DIR, 'NEW-LOGO-transparent-bg.png'))
    .resize(600, null, { withoutEnlargement: true })
    .webp({ quality: 90 })
    .toFile(join(LOGOS_DIR, 'logo-large.webp'));

  // Small header logo
  await sharp(join(ASSETS_DIR, 'Logo-transparent-bg.png'))
    .resize(200, null, { withoutEnlargement: true })
    .png({ quality: 90 })
    .toFile(join(LOGOS_DIR, 'logo-header.png'));

  console.log('Logo processing done.\n');
  console.log('All images optimized!');
}

main().catch(console.error);
