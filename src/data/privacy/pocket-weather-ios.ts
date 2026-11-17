/**
 * Pocket Weather — Apple iOS privacy policy (DRAFT).
 *
 * The iOS build is not yet released and the audited Unity project contains no
 * iOS advertising or purchase integration yet (Ads.cs / Shop.cs only call the
 * Android HMS bridge). This draft describes the INTENDED configuration:
 *   - Google AdMob (Google Mobile Ads SDK) for ads
 *   - Apple In-App Purchase (StoreKit) for purchases
 *   - no Huawei SDKs or services
 * Every item in `iosChecklist` must be verified against the final build before
 * this policy is used for App Store submission. Not legal advice.
 */
import type { Policy } from './types';
import { contact, site } from '../site';

const email = contact.email;

export const iosPolicy: Policy = {
  slug: 'ios',
  app: 'Pocket Weather',
  platform: 'Apple iOS — App Store (not yet released)',
  title: 'Pocket Weather Privacy Policy — Apple iOS',
  description:
    'Draft privacy policy for the planned iOS version of Pocket Weather, which is intended to use Google AdMob and Apple In-App Purchase.',
  effectiveDate: 'To be set on iOS release',
  lastUpdated: '17 November 2026',
  status: 'draft',
  draftNotice:
    'The iOS version of Pocket Weather has not been released. This policy describes the intended iOS configuration and will be finalised against the actual build before submission to Apple. Sections marked “to be confirmed” depend on that final configuration.',
  developer: site.person.legalName,
  contactEmail: email,
  summary: [
    { label: 'Accounts', value: 'None. No sign-in on iOS.' },
    { label: 'Game progress', value: 'Stored only on your device.' },
    { label: 'Advertising', value: 'Google AdMob (Google Mobile Ads SDK).' },
    { label: 'Tracking', value: 'Only if you allow it in Apple’s App Tracking Transparency prompt — to be confirmed.' },
    { label: 'Payments', value: 'Apple In-App Purchase. The developer never sees payment details.' },
    { label: 'Huawei services', value: 'None. The iOS version contains no Huawei SDKs.' },
  ],
  sections: [
    {
      id: 'about',
      heading: '1. About this policy',
      html: `<p>This policy explains how the <strong>iOS version of Pocket Weather</strong> (the “game”), developed by ${site.person.legalName} (“I”, “me”, the “developer”), handles information when you play it on iPhone or iPad.</p>
<p>It applies only to the iOS version distributed through the Apple App Store. The HUAWEI AppGallery version uses different services and has <a href="/privacy/pocket-weather/huawei/">its own policy</a>. <strong>The iOS version does not include any Huawei SDKs, Huawei advertising or Huawei account services.</strong></p>
<p>The game does not ask for your name, email address, contacts, photos, camera, microphone or precise location, and has no user accounts.</p>`,
    },
    {
      id: 'on-device',
      heading: '2. Information stored on your device',
      html: `<p>Your progress is saved locally on your device: unlocked levels and stars, seeds, My Island buildings, Daily Island progress and streak, chosen cloud skin and theme, owned cosmetic items, sound settings and whether you own “No Forced Ads” or the Candy Bundle.</p>
<p>This information is <strong>not sent to me</strong> and I have no server that receives it. It is deleted when you delete the app. Whether it is included in your device backups depends on your iOS backup settings.</p>`,
    },
    {
      id: 'admob',
      heading: '3. Advertising with Google AdMob',
      html: `<p>The game is free and supported by ads served by <strong>Google AdMob</strong> through the Google Mobile Ads SDK. Google acts under its own privacy terms. To serve and measure ads, prevent fraud and improve its services, the SDK may process:</p>
<ul>
<li>your IP address, which can be used to estimate your general (coarse) location;</li>
<li>device information such as model, operating-system version, language and screen size;</li>
<li>identifiers: the Identifier for Advertisers (IDFA) <strong>only if you allow tracking</strong> (see section 4), and identifiers Apple makes available to apps without permission, such as the Identifier for Vendors (IDFV);</li>
<li>advertising data, such as which ads were shown and whether you interacted with them;</li>
<li>diagnostic information about the SDK’s performance and crashes.</li>
</ul>
<p>See <a href="https://policies.google.com/technologies/partner-sites" rel="noopener" target="_blank">How Google uses information from sites or apps that use its services</a> and the <a href="https://policies.google.com/privacy" rel="noopener" target="_blank">Google Privacy Policy</a>.</p>
<p><strong>Ad formats and placement (to be confirmed for iOS):</strong> the game is designed so that ads never interrupt play — between-level ads only after a level ends and not in the first three levels, and reward videos that are always optional. The optional “No Forced Ads” purchase removes banner and between-level ads.</p>
<p>I do not receive personal information from Google. I see only aggregated reports such as impressions and revenue.</p>`,
    },
    {
      id: 'tracking',
      heading: '4. Tracking, App Tracking Transparency and consent',
      html: `<p><strong>App Tracking Transparency (ATT).</strong> Apple requires apps to ask your permission through the ATT prompt before “tracking” you — linking data from the app with data from other companies’ apps or websites for advertising, or sharing it with data brokers. If the iOS version requests personalised ads using the IDFA, it will show Apple’s ATT prompt first. If you choose <em>Ask App Not to Track</em>, the IDFA is not available to the game or to Google and ads are not personalised based on cross-app tracking. You can change this at any time in <em>Settings › Privacy &amp; Security › Tracking</em>.</p>
<p><strong>Consent in the EEA, UK and Switzerland.</strong> Where required by law and by Google’s EU User Consent Policy, the game will show a consent message (using Google’s User Messaging Platform) before personalised ads are served, and you can choose non-personalised ads. You will be able to change your choice from the game’s settings.</p>
<p><strong>US state privacy laws.</strong> Where applicable, ads can be requested in Google’s restricted data processing mode.</p>
<p class="note"><strong>To be confirmed:</strong> whether the iOS build requests personalised ads at all. If the final build requests only non-personalised ads and does not access the IDFA, the ATT prompt will not be shown and this section will be updated to say so.</p>`,
    },
    {
      id: 'purchases',
      heading: '5. In-app purchases',
      html: `<p>Optional purchases (seed packs, No Forced Ads, Candy Bundle) are processed by <strong>Apple In-App Purchase</strong> using your Apple Account. I never receive your payment details. The game receives a transaction record from Apple (product, transaction identifier and date) to deliver and restore your purchases. A “Restore Purchases” option lets you recover non-consumable items. Apple’s handling of payments is described in the <a href="https://www.apple.com/legal/privacy/" rel="noopener" target="_blank">Apple Privacy Policy</a>.</p>`,
    },
    {
      id: 'analytics',
      heading: '6. Analytics and crash reporting',
      html: `<p>The game does not include a separate analytics or crash-reporting service. Unity Analytics and Unity Performance Reporting are not enabled. If you have opted in to share analytics with app developers in your iOS settings, Apple may provide me with aggregated, anonymous crash and usage reports.</p>
<p class="note"><strong>To be confirmed:</strong> if an analytics or crash-reporting SDK is added before release, it will be listed here and in the App Store privacy details.</p>`,
    },
    {
      id: 'permissions',
      heading: '7. Device permissions',
      html: `<p>The iOS version does not request access to your location, camera, microphone, photos, contacts or Bluetooth. The only system prompt it may show is Apple’s App Tracking Transparency prompt (section 4). Internet access is used to load ads and process purchases.</p>`,
    },
    {
      id: 'sharing',
      heading: '8. How information is shared',
      html: `<p>I do not sell your personal information. Information is processed by Google (advertising) and Apple (payments and the App Store) as described above. No Huawei service receives any information from the iOS version. I may disclose information if required by law, but I hold no personal information about players on any server.</p>`,
    },
    {
      id: 'retention',
      heading: '9. Data retention',
      html: `<ul>
<li><strong>On your device:</strong> until you delete the app.</li>
<li><strong>Google and Apple:</strong> according to their own retention policies.</li>
<li><strong>Emails to me:</strong> only as long as needed to respond, and deleted on request.</li>
</ul>`,
    },
    {
      id: 'security',
      heading: '10. Data security',
      html: `<p>Progress is stored only on your device and there is no developer-operated server or account database. Purchases are handled by Apple. Communication with Google and Apple is handled by their SDKs and frameworks. No method of storage or transmission is completely secure, but the game is designed to minimise the information involved.</p>`,
    },
    {
      id: 'transfers',
      heading: '11. International data transfers',
      html: `<p>Google and Apple may process information in countries other than your own, including the United States, under the safeguards described in their privacy policies.</p>`,
    },
    {
      id: 'children',
      heading: '12. Children’s privacy',
      html: `<p>Pocket Weather is a calm game suitable for all ages. It does not ask players for personal information and does not knowingly collect personal information from children for the developer.</p>
<p class="note"><strong>To be confirmed before release:</strong> the App Store age rating and whether the game is placed in the Kids category. If the game is directed at children, ads will be requested with Google’s child-directed settings and a suitable maximum ad-content rating, no IDFA or tracking will be used, and the game will not be placed in the Kids category unless it meets Apple’s Kids-category rules for third-party advertising.</p>
<p>If you are a parent or guardian and believe your child has provided personal information, please contact me.</p>`,
    },
    {
      id: 'rights',
      heading: '13. Your rights and choices',
      html: `<p>Depending on where you live, you may have rights to access, correct, delete or restrict the processing of your personal information, to object to processing and to data portability.</p>
<ul>
<li>Allow or deny tracking in <em>Settings › Privacy &amp; Security › Tracking</em>.</li>
<li>Change your ad-consent choice from the game’s settings (where a consent message is shown).</li>
<li>Delete local game data by deleting the app.</li>
<li>Manage data held by Google at <a href="https://myadcenter.google.com/" rel="noopener" target="_blank">My Ad Center</a> and by Apple through your Apple Account.</li>
<li>Contact me with any request; I will respond within 30 days.</li>
</ul>
<p>You also have the right to complain to your local data-protection authority.</p>`,
    },
    {
      id: 'changes',
      heading: '14. Changes to this policy',
      html: `<p>This policy will be finalised when the iOS version is released, and updated whenever the game’s data practices change. The “Last updated” date above will always reflect the latest version.</p>`,
    },
    {
      id: 'contact',
      heading: '15. Contact',
      html: `<p>${site.person.legalName}<br/>Developer of Pocket Weather · ${site.person.location}<br/>Email: <a href="mailto:${email}">${email}</a></p>`,
    },
  ],
};

/**
 * Outstanding items to verify before submitting the iOS app.
 * Rendered on /privacy/pocket-weather/ios/ and documented in README.md.
 */
export const iosChecklist: { area: string; items: string[] }[] = [
  {
    area: 'Build configuration',
    items: [
      'Exclude Assets/Plugins/Android (HmsBridge.java, HmsPurchaseActivity.java) and agconnect-services.json from the iOS build, and confirm no com.huawei.* frameworks appear in the generated Xcode project.',
      'Set a real iOS bundle identifier (Player Settings currently shows the Unity template default).',
      'Add the Google Mobile Ads Unity plugin, iOS AdMob app ID (GADApplicationIdentifier) and the SKAdNetwork identifiers Google lists in Info.plist.',
      'Replace HUAWEI IAP with Apple In-App Purchase (StoreKit / Unity IAP) including a visible Restore Purchases button.',
      'Remove the HUAWEI ID sign-in flow from iOS — no account is needed.',
    ],
  },
  {
    area: 'Advertising & tracking',
    items: [
      'Decide personalised vs non-personalised ads. If the IDFA is used, add NSUserTrackingUsageDescription and request ATT before loading ads; if not, do not show the ATT prompt.',
      'Integrate Google’s User Messaging Platform (UMP) consent form for the EEA, UK and Switzerland and add a way to revisit consent in Settings.',
      'Configure Google’s age-restricted treatment (ageRestrictedTreatment, which replaces the deprecated tagForChildDirectedTreatment / tagForUnderAgeOfConsent) and the maximum ad-content rating to match the final age rating.',
      'Wait for the ATT callback (if used) and UMP consent before loading the first ad, including any launch/app-open ad.',
      'Enable restricted data processing for applicable US states if required.',
    ],
  },
  {
    area: 'App Store Connect',
    items: [
      'Complete App Privacy details including data collected by the Google Mobile Ads SDK (see Google’s iOS data-disclosure guidance).',
      'Confirm the Google Mobile Ads SDK version ships its privacy manifest (PrivacyInfo.xcprivacy) and signature; add the app’s own privacy manifest for any required-reason APIs used by Unity.',
      'Set the age rating and decide on the Kids category (third-party ads in Kids-category apps are heavily restricted).',
      'Add the privacy-policy URL https://arsalanrizwan.github.io/privacy/pocket-weather/ios/ in App Store Connect and link it inside the game.',
      'Finalise this policy: remove “to be confirmed” notes, set the effective date and re-publish.',
    ],
  },
];
