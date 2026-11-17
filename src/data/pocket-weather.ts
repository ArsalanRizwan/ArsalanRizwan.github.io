/**
 * Pocket Weather — case study, platform availability and SDK inventory.
 *
 * Sources:
 *  - Huawei AppGallery listing C119535461 (read 17 Nov 2026): name, tagline, description,
 *    version 0.2.0, updated 11/3/2026, 74.87 MB, Rated 7+, in-app purchases,
 *    developer "Muhammad Arsalan Rizwan".
 *  - Local Unity project "Pocket Weather" (read-only audit, 17 Nov 2026):
 *    Unity 6000.3.7f1, URP 17.3.0, Input System, DOTween, TextMesh Pro,
 *    Plugins/Android/HmsBridge.java, Editor/HuaweiAndroidPatcher.cs, Store/*.cs.
 *
 * TO PUBLISH THE iOS VERSION: set platforms[1].status = 'available', fill `url`
 * with the real App Store link and update `version`. Nothing else needs to change.
 */
import mainMenu from '../assets/projects/pocket-weather/main-menu.png';
import dailyIsland from '../assets/projects/pocket-weather/daily-island.png';
import pause from '../assets/projects/pocket-weather/pause.png';
import myIsland from '../assets/projects/pocket-weather/my-island.png';
import levelStart from '../assets/projects/pocket-weather/level-start.png';
import levelFailed from '../assets/projects/pocket-weather/level-failed.png';
import campfire from '../assets/projects/pocket-weather/campfire-level.png';
import watering from '../assets/projects/pocket-weather/watering.png';
import restored from '../assets/projects/pocket-weather/island-restored-green.png';
import celebration from '../assets/projects/pocket-weather/celebration.png';
import levelComplete from '../assets/projects/pocket-weather/level-complete.png';
import icon from '../assets/projects/pocket-weather/icon.png';

export type PlatformStatus = 'available' | 'coming-soon';

export interface Platform {
  id: 'huawei' | 'ios';
  store: string;
  os: string;
  status: PlatformStatus;
  /** Real store URL. Leave null until the listing is live — never use a placeholder URL. */
  url: string | null;
  version: string | null;
  updated: string | null;
  summary: string;
  advertising: string;
  purchases: string;
  privacyPolicy: string;
}

export const pocketWeather = {
  title: 'Pocket Weather',
  tagline: 'Be a little rain cloud! Water thirsty islands and help every garden bloom.',
  positioning: 'A playful weather-inspired mobile game built around interactive environments and progression.',
  icon,
  appGalleryUrl: 'https://appgallery.huawei.com/app/C119535461',

  /** Text quoted from the AppGallery "Introduction" section. */
  storeFeatures: [
    '50 hand-made island levels that slowly introduce new surprises',
    'Put out fires, grow crops for harvest, water picky cacti and watch out for drought clouds',
    'Cute bunnies that hop away from your rain',
    'A new Daily Island to play every day',
    'Build your own island that keeps growing seeds while you’re away',
    'Unlock cheerful cloud skins and island themes',
    'Relaxing music, soft colors and simple one-finger controls',
  ],

  facts: [
    { k: 'Platform', v: 'Android · HUAWEI AppGallery' },
    { k: 'Version', v: '0.2.0 (first release)' },
    { k: 'Updated', v: '3 Nov 2026' },
    { k: 'Content rating', v: 'Rated 7+' },
    { k: 'Price', v: 'Free · in-app purchases' },
    { k: 'Engine', v: 'Unity 6 (6000.3) · URP' },
  ],

  overview: [
    'Pocket Weather puts the player in charge of a small, expressive rain cloud floating above tiny low-poly islands. Each island is dry and struggling; the cloud brings it back to life — one careful shower at a time.',
    'The core objective of every level is balance rather than speed. Plants must be watered into their green zone, but overwatering drowns them, while houses and campfires have to stay dry. The cloud’s water tank empties as it rains and refills over the sea, so routes and timing matter.',
    'The result is a calm, cozy puzzle game for all ages with one-finger controls, soft colours and relaxing music — built first for HUAWEI AppGallery, with an iOS version in preparation.',
  ],

  /** Mechanics confirmed in the Unity source (script summaries). */
  mechanics: [
    { name: 'The cloud', detail: 'Hold a finger on the screen and the cloud flies there. Over land it rains; over the sea it refills its tank. It grows greyer and bigger when full, smaller and whiter when empty.' },
    { name: 'Plants & crops', detail: 'Plants grow as they receive rain. Fill each one into its green zone to win — push past 100% and it drowns.' },
    { name: 'Things to keep dry', detail: 'Houses and campfires carry a wetness meter. If rain fills it, the level is lost.' },
    { name: 'Wildfires', detail: 'Fires grow, spread toward the nearest house and dry out nearby plants until rain puts them out.' },
    { name: 'Drought clouds', detail: 'A grumpy dark cloud drifts across the island drying every plant it passes. Follow it and re-water what it dried.' },
    { name: 'Boulders', detail: 'Keep raining on a boulder to charge a storm; when the charge is full, lightning smashes it.' },
    { name: 'Island life', detail: 'Bunnies hop around and run away from the rain; small explorers walk toward goals that the player has to open up.' },
  ],

  progression: [
    { name: 'Stars & seeds', detail: 'Finishing a level awards up to three stars based on the water used, plus seeds.' },
    { name: 'Daily Island', detail: 'A new procedurally built island every day. The date is the random seed, so every player gets the same island on the same day.' },
    { name: 'My Island', detail: 'A personal home island that is built up with seeds and keeps growing seeds while the player is away (up to 12 hours).' },
    { name: 'Cosmetics', detail: 'Cloud skins and My Island themes, unlocked with stars, seeds or the Candy Bundle.' },
  ],

  gallery: [
    { src: mainMenu, alt: 'Pocket Weather main menu with the title, a dry island, the cloud character and Play, Levels, Daily Island and My Island buttons', caption: 'Main menu' },
    { src: levelStart, alt: 'Level 2 start: a dry sandy island with plants, palm trees and a campfire, water meter at the top', caption: 'A level begins — the island is dry' },
    { src: watering, alt: 'The cloud raining over plants while their meters fill', caption: 'Rain fills each plant’s meter' },
    { src: campfire, alt: 'A campfire level with the hint “Keep the campfire burning. No rain on the fire!”', caption: 'Some things must stay dry' },
    { src: restored, alt: 'The island turns green once every plant is watered', caption: 'The island comes back to life' },
    { src: celebration, alt: 'Confetti bursting over a restored green island', caption: 'Island restored' },
    { src: levelComplete, alt: 'Island Restored panel with two of three stars, water used 63, plus 29 seeds, and a Next button', caption: 'Stars and seeds' },
    { src: levelFailed, alt: 'Oops panel: Too much water! The wheat drowned. Try again button', caption: 'Too much water drowns the crops' },
    { src: dailyIsland, alt: 'Daily Island mode: a new island every day, keep every plant green until the timer fills', caption: 'Daily Island' },
    { src: myIsland, alt: 'My Island: a green home island with Build Bushes for 30 seeds and cloud skin options', caption: 'My Island' },
    { src: pause, alt: 'Pause menu with Resume, Restart and Menu, plus music and sound toggles', caption: 'Pause menu' },
  ],

  /** Only technologies confirmed in Packages/manifest.json and Assets/. */
  technologies: [
    { name: 'Unity 6', detail: 'Editor 6000.3.7f1' },
    { name: 'C#', detail: 'Gameplay, UI, progression and store logic' },
    { name: 'Universal Render Pipeline', detail: 'com.unity.render-pipelines.universal 17.3.0' },
    { name: 'Unity Input System', detail: 'com.unity.inputsystem 1.18.0' },
    { name: 'DOTween', detail: 'Demigiant DOTween for UI and feedback tweens' },
    { name: 'TextMesh Pro', detail: 'With a Fredoka SDF font asset' },
    { name: 'Procedural meshes', detail: 'Flat-shaded low-poly islands, foam rings and icospheres generated in code' },
    { name: 'Java (Android)', detail: 'A thin native bridge to HUAWEI Mobile Services' },
    { name: 'Gradle post-processing', detail: 'An editor build hook injects Huawei repositories, SDKs, ProGuard rules and manifest entries' },
  ],

  development: [
    { title: 'Levels as prefabs', body: 'Each level is a prefab whose root component discovers every plant and hazard placed beneath it, so new levels are designed by moving objects around in the editor. Editor tools generate the level database and extra content.' },
    { title: 'Procedural islands', body: 'Islands are generated at runtime as flat-shaded low-poly meshes — grass top, sandy beach, dirt underside and a foam ring for the shoreline. The same seed always produces the same island, which is what makes a shared Daily Island possible.' },
    { title: 'Player-friendly monetisation', body: 'Interstitial ads only appear in the pause after a level ends, never during play. The first three levels and the first minute of a session are ad-free, pacing is gentler for new players, ads pause after repeated failures, and a player who chooses a reward video gets a break. “No Forced Ads” removes banners and interstitials while keeping optional reward videos.' },
    { title: 'Verified purchases', body: 'Purchases are only delivered after their signature has been verified with the IAP public key. Consumables are granted once per purchase token and then consumed; unconsumed items are redelivered on the next launch, and restores never revoke items when a query fails.' },
    { title: 'Mobile polish', body: 'Safe-area aware UI that moves up above the banner, short haptic taps tied to the sound-effects toggle, and a splash screen that falls back to the game’s sky blue if no ad loads in time.' },
  ],

  platforms: [
    {
      id: 'huawei',
      store: 'HUAWEI AppGallery',
      os: 'Android (HUAWEI and other Android devices supported by AppGallery)',
      status: 'available',
      url: 'https://appgallery.huawei.com/app/C119535461',
      version: '0.2.0',
      updated: '3 Nov 2026',
      summary: 'First public release: 50 levels, the Daily Island and My Island.',
      advertising: 'HUAWEI Ads Kit (Petal Ads) — splash, banner, interstitial and optional rewarded ads; non-personalised ads requested.',
      purchases: 'HUAWEI IAP Kit, with HUAWEI Account Kit sign-in for purchases.',
      privacyPolicy: '/privacy/pocket-weather/huawei/',
    },
    {
      id: 'ios',
      store: 'Apple App Store',
      os: 'iOS',
      status: 'coming-soon',
      url: null,
      version: null,
      updated: null,
      summary: 'An iOS version is in preparation. It has not been submitted to or approved by Apple.',
      advertising: 'Planned: Google AdMob (Google Mobile Ads SDK).',
      purchases: 'Planned: Apple In-App Purchase. No Huawei SDKs or services will ship in the iOS build.',
      privacyPolicy: '/privacy/pocket-weather/ios/',
    },
  ] satisfies Platform[],

  /** SDK inventory per build — mirrored in the privacy policies. */
  integrations: {
    huawei: [
      { name: 'HUAWEI Ads Kit (Petal Ads)', pkg: 'com.huawei.hms:ads-prime 3.4.91.301', use: 'Splash, banner (320×50), interstitial and rewarded ads. Non-personalised ads requested; ad content limited to the “W” (all ages) classification for live ads.' },
      { name: 'HUAWEI IAP Kit', pkg: 'com.huawei.hms:iap 6.16.6.305', use: 'Seed packs, No Forced Ads and the Candy Bundle; product prices, purchase, verification, consumption and restore.' },
      { name: 'HUAWEI Account Kit', pkg: 'com.huawei.hms:hwid 6.12.0.300', use: 'HUAWEI ID sign-in (default parameters, silent sign-in at launch) required by AppGallery for games with in-app purchases.' },
      { name: 'AppGallery Connect configuration', pkg: 'agconnect-services.json', use: 'App identifiers for HUAWEI services.' },
      { name: 'Android permissions', pkg: 'AndroidManifest.xml', use: 'INTERNET and ACCESS_NETWORK_STATE (added by the Huawei build step).' },
    ],
    ios: [
      { name: 'Google AdMob', pkg: 'Google Mobile Ads SDK (planned)', use: 'Planned advertising integration for the iOS build. Not yet present in the Unity project.' },
      { name: 'Apple In-App Purchase', pkg: 'StoreKit (planned)', use: 'Required by Apple for digital items; replaces HUAWEI IAP on iOS.' },
      { name: 'Excluded', pkg: 'All com.huawei.hms SDKs', use: 'HUAWEI Ads, IAP and Account Kit, the HMS bridge and agconnect-services.json must not be included in the iOS build.' },
    ],
  },
};
