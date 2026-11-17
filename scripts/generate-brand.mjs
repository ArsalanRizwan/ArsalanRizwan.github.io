// Generates the brand asset set in /public from SVG sources.
// Run: node scripts/generate-brand.mjs   (re-run after changing the monogram)
import sharp from 'sharp';
import { mkdirSync, writeFileSync, readFileSync } from 'node:fs';

const OBS = '#101114', IVORY = '#F1F0EC', SLATE = '#8298B5', SILVER = '#A5A5A5', GRAPHITE = '#202329';

const monoPaths = (stroke, sw = 3.5) => `
  <g stroke="${stroke}" stroke-width="${sw}" stroke-linecap="square" stroke-linejoin="miter" fill="none">
    <path d="M8 56 L31 8 L31 56"/><path d="M18.5 37 H31"/>
    <path d="M31 8 H41 A11 11 0 0 1 41 30 H31"/><path d="M40 30 L56 56"/>
  </g>
  <circle cx="56" cy="8" r="2.6" fill="${SLATE}"/>`;

const monogram = (stroke = IVORY) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">${monoPaths(stroke)}</svg>`;
const monogramTile = (bg = OBS, fg = IVORY) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="${bg}"/><g transform="translate(9.6 9.6) scale(0.7)">${monoPaths(fg, 4.6)}</g></svg>`;

const FONT = `font-family="Manrope, 'Segoe UI', Arial, Helvetica, sans-serif"`;
const wordmark = (fg = IVORY, sub = SILVER) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 96">
  <g transform="translate(8 16)">${monoPaths(fg)}</g>
  <text x="96" y="50" ${FONT} font-size="30" font-weight="800" letter-spacing="7" fill="${fg}">ARSALAN STUDIO</text>
  <text x="97" y="76" ${FONT} font-size="12.5" font-weight="600" letter-spacing="4.4" fill="${sub}">BY ARSALAN RIZWAN</text>
</svg>`;

const ogBase = (title, kicker, sub, mark = true) => `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="g" cx="78%" cy="30%" r="60%"><stop offset="0" stop-color="${SLATE}" stop-opacity=".28"/><stop offset="1" stop-color="${OBS}" stop-opacity="0"/></radialGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0H0V48" fill="none" stroke="${IVORY}" stroke-opacity=".05"/></pattern>
  </defs>
  <rect width="1200" height="630" fill="${OBS}"/><rect width="1200" height="630" fill="url(#grid)"/><rect width="1200" height="630" fill="url(#g)"/>
  <circle cx="985" cy="300" r="180" fill="none" stroke="${IVORY}" stroke-opacity=".12"/>
  <ellipse cx="985" cy="300" rx="250" ry="64" transform="rotate(-24 985 300)" fill="none" stroke="${SLATE}" stroke-opacity=".55"/>
  ${mark ? `<g transform="translate(906 221) scale(2.5)">${monoPaths(IVORY, 3)}</g>` : ""}
  <text x="80" y="110" ${FONT} font-size="20" font-weight="700" letter-spacing="6" fill="${SLATE}">${kicker}</text>
  ${title.map((t, i) => `<text x="76" y="${236 + i * 92}" ${FONT} font-size="80" font-weight="600" letter-spacing="-3" fill="${IVORY}">${t}</text>`).join('')}
  <line x1="80" x2="1120" y1="520" y2="520" stroke="${IVORY}" stroke-opacity=".14"/>
  <text x="80" y="566" ${FONT} font-size="20" font-weight="800" letter-spacing="6" fill="${IVORY}">ARSALAN STUDIO</text>
  <text x="1120" y="566" text-anchor="end" ${FONT} font-size="18" font-weight="600" letter-spacing="4" fill="${SILVER}">${sub}</text>
</svg>`;

mkdirSync('public/brand', { recursive: true });
const w = (p, s) => writeFileSync(p, s.trim() + '\n');

w('public/brand/ar-monogram.svg', monogram(IVORY));
w('public/brand/ar-monogram-dark.svg', monogram(OBS));
w('public/brand/ar-monogram-tile.svg', monogramTile());
w('public/brand/wordmark.svg', wordmark());
w('public/brand/wordmark-dark.svg', wordmark(OBS, GRAPHITE));
w('public/favicon.svg', monogramTile());

const png = (svg, out, size) => sharp(Buffer.from(svg), { density: 600 }).resize(size, size).png().toFile(out);
await png(monogramTile(), 'public/favicon-32.png', 32);
await png(monogramTile(), 'public/apple-touch-icon.png', 180);
await png(monogramTile(), 'public/brand/icon-192.png', 192);
await png(monogramTile(), 'public/brand/ar-monogram-512.png', 512);
await sharp(Buffer.from(wordmark()), { density: 400 }).png().toFile('public/brand/wordmark.png');

await sharp(Buffer.from(ogBase(['Engineering ideas.', 'Creating experiences.'], 'INDEPENDENT CREATIVE TECHNOLOGY STUDIO', 'BY ARSALAN RIZWAN')))
  .png().toFile('public/brand/og-default.png');

// Pocket Weather OG: real app icon + title
const icon = readFileSync('src/assets/projects/pocket-weather/icon.png');
const iconBuf = await sharp(icon).resize(240, 240)
  .composite([{ input: Buffer.from('<svg width="240" height="240"><rect width="240" height="240" rx="54" fill="#fff"/></svg>'), blend: 'dest-in' }])
  .png().toBuffer();
const pwSvg = ogBase(['Pocket Weather'], 'FEATURED PRODUCT · MOBILE GAME', 'HUAWEI APPGALLERY · iOS COMING SOON', false)
  .replace('</svg>', `<text x="80" y="330" ${FONT} font-size="30" font-weight="500" fill="${SILVER}">Be a little rain cloud. Bring tiny islands back to life.</text></svg>`);
await sharp(Buffer.from(pwSvg)).composite([{ input: iconBuf, left: 810, top: 180 }]).png().toFile('public/brand/og-pocket-weather.png');

w('public/site.webmanifest', JSON.stringify({
  name: 'Arsalan Studio', short_name: 'Arsalan Studio', start_url: '/', display: 'standalone',
  background_color: OBS, theme_color: OBS,
  icons: [{ src: '/brand/icon-192.png', sizes: '192x192', type: 'image/png' }, { src: '/brand/ar-monogram-512.png', sizes: '512x512', type: 'image/png' }],
}, null, 2));
console.log('brand assets generated');
