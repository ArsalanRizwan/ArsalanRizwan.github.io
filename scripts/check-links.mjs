// Validates the built site in ./dist:
//  - every internal href/src resolves to a file
//  - every page has exactly one <h1>, a <title>, a meta description and a canonical link
//  - required routes exist
// Pass --external to also request every external link (slow; some sites block bots).
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';

const DIST = 'dist';
const REQUIRED = [
  '/', '/work/', '/work/pocket-weather/', '/about/', '/expertise/', '/lab/', '/contact/',
  '/privacy/', '/privacy/pocket-weather/', '/privacy/pocket-weather/huawei/', '/privacy/pocket-weather/ios/',
  '/404.html', '/robots.txt', '/sitemap-index.xml', '/favicon.svg',
];

const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));
const pages = walk(DIST).filter((f) => f.endsWith('.html'));
const errors = [];
const external = new Set();

const resolve = (from, ref) => {
  const clean = ref.split('#')[0].split('?')[0];
  if (!clean) return true;
  const base = clean.startsWith('/') ? join(DIST, clean) : join(dirname(from), clean);
  return existsSync(base) && statSync(base).isFile() ? true : existsSync(join(base, 'index.html'));
};

for (const page of pages) {
  const html = readFileSync(page, 'utf8');
  const rel = page.slice(DIST.length).replace(/\\/g, '/');
  for (const [, attr, url] of html.matchAll(/\s(href|src|srcset)="([^"]+)"/g)) {
    const refs = attr === 'srcset' ? url.split(',').map((s) => s.trim().split(' ')[0]) : [url];
    for (const ref of refs) {
      if (/^(mailto:|tel:|data:|javascript:)/.test(ref)) continue;
      if (/^https?:\/\//.test(ref)) {
        if (!ref.startsWith('https://arsalanrizwan.github.io')) external.add(ref);
        continue;
      }
      if (!resolve(page, ref)) errors.push(`${rel}: broken ${attr} → ${ref}`);
    }
  }
  if (rel.endsWith('404.html')) continue;
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) errors.push(`${rel}: expected 1 <h1>, found ${h1}`);
  if (!/<title>[^<]+<\/title>/.test(html)) errors.push(`${rel}: missing <title>`);
  if (!/<meta name="description" content="[^"]+"/.test(html)) errors.push(`${rel}: missing meta description`);
  if (!/<link rel="canonical"/.test(html)) errors.push(`${rel}: missing canonical`);
  for (const m of html.matchAll(/<img\b[^>]*>/g)) if (!/\salt=/.test(m[0])) errors.push(`${rel}: <img> without alt`);
}

for (const r of REQUIRED) {
  const p = r.endsWith('/') ? join(DIST, r, 'index.html') : join(DIST, r);
  if (!existsSync(p)) errors.push(`missing required route ${r}`);
}

if (process.argv.includes('--external')) {
  for (const url of external) {
    try {
      const res = await fetch(url, { method: 'GET', redirect: 'follow', headers: { 'user-agent': 'Mozilla/5.0 link-check' } });
      if (res.status >= 400) console.warn(`external ${res.status}: ${url}`);
    } catch (e) {
      console.warn(`external error: ${url} (${e.message})`);
    }
  }
}

console.log(`${pages.length} pages checked, ${external.size} unique external links.`);
if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log('All internal links, routes and page metadata OK.');
