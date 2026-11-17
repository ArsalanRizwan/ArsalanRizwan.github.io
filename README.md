# Arsalan Studio — by Arsalan Rizwan

**Engineering ideas. Creating experiences.**

Source for the personal brand, portfolio and privacy-documentation site of Arsalan Rizwan, published at
**https://arsalanrizwan.github.io/**.

- Static site built with [Astro 5](https://astro.build) + TypeScript, no UI framework, no CSS framework.
- All content lives in typed data files under `src/data/` — pages and components never need editing to add content.
- Deployed to GitHub Pages by GitHub Actions on every push to `main`.

---

## 1. Installation & local development

Requirements: Node.js 20.3+ (CI uses Node 22) and npm.

```bash
npm install          # install dependencies
npm run dev          # dev server at http://localhost:4321
npm run build        # type-check (astro check) + production build into ./dist
npm run preview      # serve ./dist locally
npm run check:links  # validate links, routes and page metadata in ./dist
node scripts/check-links.mjs --external   # also request every external URL
```

> `package.json` contains an npm `overrides` entry that pins `@rollup/pluginutils`' copy of `estree-walker` to v3.
> Without it, some Node 24 builds fail with *“estree-walker does not provide an export named walk”*.

## 2. Project structure

```
src/
  data/                 ← EDIT CONTENT HERE
    site.ts             brand, personal info, contact email, social links, nav, availability flag
    projects.ts         the project database (every Work card + project page)
    pocket-weather.ts   Pocket Weather case study, platform availability, SDK inventory
    experience.ts       professional timeline + education
    skills.ts           capabilities / expertise
    lab.ts              The Lab experiments
    testimonials.ts     public client reviews
    privacy/            privacy-policy content (one file per app + platform)
    types.ts            shared types and the category list
  assets/projects/<slug>/   project images (optimised to WebP at build time)
  components/           Header, Footer, Monogram, ProjectCard, ProjectVisual, PolicyPage, …
  layouts/Base.astro    <head>, SEO, Open Graph, JSON-LD, header/footer
  pages/                routes (file-based)
  styles/global.css     design tokens and global styles
  scripts/reveal.ts     scroll-reveal animations (respects reduced motion)
public/
  brand/                logo SVGs/PNGs and Open Graph images (generated)
  favicon.svg, favicon-32.png, apple-touch-icon.png, site.webmanifest, robots.txt
scripts/
  generate-brand.mjs    regenerates logo PNGs, favicons and OG images
  check-links.mjs       post-build validation (also run in CI)
.github/workflows/deploy.yml
```

### Routes

| Route | Page |
|---|---|
| `/` | Home: hero, selected work, Pocket Weather, expertise, about, experience, testimonials, Lab, contact |
| `/work/` | All projects with category filters (`?category=xr|games|software|ai|research`) |
| `/work/<slug>/` | Generated project page for each entry in `projects.ts` |
| `/work/pocket-weather/` | Dedicated Pocket Weather case study |
| `/expertise/`, `/about/`, `/lab/`, `/contact/` | Section pages |
| `/privacy/` | Privacy documentation index |
| `/privacy/pocket-weather/` | Version chooser |
| `/privacy/pocket-weather/huawei/` | HUAWEI AppGallery policy (in effect) |
| `/privacy/pocket-weather/ios/` | Apple iOS policy (published) |

## 3. Adding or editing a project

1. Create `src/assets/projects/<slug>/` and add images (PNG/JPG; they are converted to responsive WebP).
2. In `src/data/projects.ts`, import the images at the top and add an entry:

```ts
import myCover from '../assets/projects/my-project/cover.jpg';

{
  id: 'my-project',
  title: 'My Project',
  slug: 'my-project',                 // → /work/my-project/
  category: 'xr',                     // xr | games | software | ai | research
  alsoIn: ['ai'],                     // optional extra filters
  year: '2026',
  shortDescription: 'One sentence for cards and SEO.',
  description: ['Paragraph one.', 'Paragraph two.'],
  role: 'Unity XR developer',
  technologies: ['Unity 6', 'C#', 'OpenXR'],
  platforms: ['Meta Quest 3'],
  features: ['…'],
  challenges: [{ title: '…', body: '…' }],       // optional
  implementation: [{ title: '…', body: '…' }],   // optional
  outcomes: ['Only verified outcomes'],          // optional
  cover: { src: myCover, alt: 'Describe the image' },
  images: [{ src: other, alt: '…', caption: '…' }],
  videos: [{ title: 'Demo', url: 'https://youtube.com/…' }],
  status: 'Client project',
  links: [{ label: 'App Store', href: '…', kind: 'store' }],
  sources: [{ label: 'Fiverr profile', href: '…' }],
  featured: true,                    // show on the homepage
  order: 80,                         // higher = earlier
}
```

Projects without a `cover` show a typographic placeholder marked “Visual pending” — replace it by adding a cover.
Set `needsAssets: false` (or remove it) once real visuals are added. `todo` notes are never shown publicly.

### Replacing images

Drop the new file into the project’s folder and update the import (or keep the same file name). Alt text lives next to
the import in the data file. Brand images: edit `scripts/generate-brand.mjs` and run `node scripts/generate-brand.mjs`.

## 4. Social links, contact and availability

All in `src/data/site.ts`:

- `contact.email` — used site-wide and in every privacy policy.
- `social` — order and links shown in the footer and on `/contact/`.
- `availability.show` — **off by default**. Set to `true` (and edit the label) to show an availability indicator on the homepage and contact page.

There is intentionally no contact form: a form needs a configured third-party service. The site uses a working
`mailto:` link and a copy-to-clipboard button instead.

## 5. Pocket Weather — App Store availability

Everything is in `src/data/pocket-weather.ts` → `platforms`. When the iOS app is live:

```ts
{
  id: 'ios',
  status: 'available',                                // was 'coming-soon'
  url: 'https://apps.apple.com/app/idXXXXXXXXXX',     // the real URL — never a placeholder
  version: '1.0.0',
  updated: '…',
  summary: '…',
}
```

The platform cards, homepage badge, buttons and JSON-LD update automatically. While `url` is `null`, no store link is rendered.

## 6. Updating privacy policies

- Huawei: `src/data/privacy/pocket-weather-huawei.ts`
- iOS: `src/data/privacy/pocket-weather-ios.ts` (set `status: 'draft'` to show a draft banner)

Each policy has `effectiveDate`, `lastUpdated`, `summary` (the “At a glance” box) and `sections` (HTML strings).
When data practices change, update the relevant section, bump `lastUpdated`, and keep the app’s store listing
pointing at the right URL:

- AppGallery: `https://arsalanrizwan.github.io/privacy/pocket-weather/huawei/`
- App Store Connect: `https://arsalanrizwan.github.io/privacy/pocket-weather/ios/`

To add another app, create a new file in `src/data/privacy/`, a page in `src/pages/privacy/<app>/`, and list it in `src/pages/privacy/index.astro`.

### iOS configuration (confirmed 17 Nov 2026)

The iOS policy describes: non-personalised Google AdMob ads only (no IDFA, no ATT prompt), Google UMP consent message for EEA/UK/Switzerland, no in-app purchases, no analytics or crash reporting, all ages (not Kids category), no Huawei SDKs, App Store publisher Abdur Rehman Arshad. If the build changes any of this, update `src/data/privacy/pocket-weather-ios.ts`.

`public/app-ads.txt` authorises the AdMob publisher `pub-2091686976047536`. The App Store listing's Marketing URL must be `https://arsalanrizwan.github.io/` for AdMob to find it.

### Review items for the Huawei build

Rendered on the Huawei policy page from `huaweiChecklist` (consent before Petal Ads, child/under-age tags,
deferring IAP/sign-in until consent, package-name mismatch, cleartext traffic, Unity Engine Diagnostics).

> These policies were written from an audit of the game’s source. They are **not legal advice**, have not been
> reviewed by a lawyer, and publishing them does not by itself guarantee platform or legal compliance.

## 7. Deployment

`.github/workflows/deploy.yml` runs on every push to `main`:

1. `npm ci`
2. `npm run build` (astro check + build)
3. `npm run check:links` (fails the build on broken internal links or missing metadata)
4. Uploads `dist/` and deploys with `actions/deploy-pages`.

Repository: `ArsalanRizwan/ArsalanRizwan.github.io` → Settings → Pages → Source: **GitHub Actions**.
For a `USERNAME.github.io` repository the site is served from the root, so `base` is `/` in `astro.config.mjs`.
To use a custom domain later, set `SITE_URL`/`site` in `astro.config.mjs`, update `public/robots.txt`, and add
the domain under Settings → Pages.

## 8. Content sources & what still needs confirming

Content was gathered on 17 Nov 2026 from: the public Fiverr profile page, the HUAWEI AppGallery listing, public GitHub
repositories and local project folders. **LinkedIn could not be read** (sign-in wall) and Fiverr’s portfolio and gig
sub-pages were behind a human-verification check, so they were not used.

Search the data files for `todo:` and `verify:` to find every item awaiting confirmation (job titles, dates,
education, your role on team projects, client permission, missing screenshots and videos).

Client names found in local project files are deliberately not published.
