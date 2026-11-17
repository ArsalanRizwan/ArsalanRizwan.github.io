/**
 * Pocket Weather — Apple iOS privacy policy.
 *
 * Configuration confirmed by the developer on 17 November 2026:
 *   - Google AdMob, NON-personalised ads only; the IDFA is not accessed and no
 *     App Tracking Transparency prompt is shown
 *   - Google UMP consent message (published in AdMob) for the EEA, UK and Switzerland
 *   - no in-app purchases on iOS
 *   - no analytics or crash-reporting SDKs
 *   - suitable for all ages (not in the Kids category)
 *   - no Huawei SDKs or services
 *   - published on the App Store from Abdur Rehman Arshad's developer account
 * If any of this changes in the build, update this file. Not legal advice.
 */
import type { Policy } from './types';
import { contact, site } from '../site';

const email = contact.email;
export const iosPublisher = 'Abdur Rehman Arshad';

export const iosPolicy: Policy = {
  slug: 'ios',
  app: 'Pocket Weather',
  platform: 'Apple iOS — App Store',
  title: 'Pocket Weather Privacy Policy — Apple iOS',
  description:
    'Privacy policy for the iOS version of Pocket Weather: non-personalised Google AdMob ads, no tracking, no accounts, no purchases and no Huawei services.',
  effectiveDate: '17 November 2026',
  lastUpdated: '17 November 2026',
  status: 'published',
  developer: site.person.legalName,
  contactEmail: email,
  summary: [
    { label: 'Accounts', value: 'None. No sign-in.' },
    { label: 'Game progress', value: 'Stored only on your device.' },
    { label: 'Advertising', value: 'Google AdMob, non-personalised ads only.' },
    { label: 'Tracking', value: 'None. The game does not access the IDFA or track you across apps.' },
    { label: 'Purchases', value: 'None. The iOS version has no in-app purchases.' },
    { label: 'Analytics', value: 'None. No analytics or crash-reporting SDKs.' },
    { label: 'Huawei services', value: 'None. The iOS version contains no Huawei SDKs.' },
  ],
  sections: [
    {
      id: 'about',
      heading: '1. About this policy',
      html: `<p>This policy explains how the <strong>iOS version of Pocket Weather</strong> (the “game”) handles information when you play it on iPhone or iPad. The game is developed by ${site.person.legalName} (“I”, “me”, the “developer”) and published on the Apple App Store by ${iosPublisher}. Questions about this policy can be sent to the developer using the contact details in section 14.</p>
<p>It applies only to the iOS version distributed through the Apple App Store. The HUAWEI AppGallery version uses different services and has <a href="/privacy/pocket-weather/huawei/">its own policy</a>. <strong>The iOS version does not include any Huawei SDKs, Huawei advertising or Huawei account services.</strong></p>
<p>The game does not ask for your name, email address, contacts, photos, camera, microphone or precise location, and has no user accounts.</p>`,
    },
    {
      id: 'on-device',
      heading: '2. Information stored on your device',
      html: `<p>Your progress is saved locally on your device: unlocked levels and stars, seeds, My Island buildings, Daily Island progress and streak, chosen cloud skin and theme, and sound settings.</p>
<p>This information is <strong>not sent to the developer or publisher</strong>; there is no server that receives it. It is deleted when you delete the app. Whether it is included in your device backups depends on your iOS backup settings.</p>`,
    },
    {
      id: 'admob',
      heading: '3. Advertising with Google AdMob',
      html: `<p>The game is free and supported by ads served by <strong>Google AdMob</strong> through the Google Mobile Ads SDK. <strong>The game requests non-personalised ads only</strong>: ads are not selected based on a profile of your interests or your activity in other apps or websites. Non-personalised ads are chosen using contextual information such as the app and your general (coarse) location.</p>
<p>To serve and measure ads, limit how often an ad is shown, prevent fraud and improve its services, the Google Mobile Ads SDK may process:</p>
<ul>
<li>your IP address, which can be used to estimate your general location;</li>
<li>device information such as model, operating-system version, language and screen size;</li>
<li>identifiers that Apple makes available to apps without permission, such as the Identifier for Vendors (IDFV) — <strong>the game does not access the Identifier for Advertisers (IDFA)</strong>;</li>
<li>advertising data, such as which ads were shown and whether you interacted with them;</li>
<li>diagnostic information about the SDK’s performance and crashes.</li>
</ul>
<p>Google processes this information under its own terms. See <a href="https://policies.google.com/technologies/partner-sites" rel="noopener" target="_blank">How Google uses information from sites or apps that use its services</a> and the <a href="https://policies.google.com/privacy" rel="noopener" target="_blank">Google Privacy Policy</a>.</p>
<p>Reward videos are always optional. Ad content is limited to material suitable for a general audience.</p>
<p>The developer does not receive personal information from Google — only aggregated reports such as impressions and revenue.</p>`,
    },
    {
      id: 'tracking',
      heading: '4. Tracking and consent',
      html: `<p><strong>No tracking.</strong> The game does not track you as defined by Apple — it does not link data from the game with data from other companies’ apps or websites for advertising, and does not share data with data brokers. Because it does not access the IDFA, it does not show Apple’s App Tracking Transparency prompt.</p>
<p><strong>EEA, UK and Switzerland.</strong> If you are in the European Economic Area, the United Kingdom or Switzerland, the game shows a consent message (Google’s User Messaging Platform) before ads are loaded, asking whether information may be stored on and read from your device for advertising. You can change your choice later from the game’s settings. If you do not consent, Google may show limited ads or no ads.</p>`,
    },
    {
      id: 'purchases',
      heading: '5. In-app purchases',
      html: `<p>The iOS version has <strong>no in-app purchases</strong> and does not process any payment information.</p>`,
    },
    {
      id: 'analytics',
      heading: '6. Analytics and crash reporting',
      html: `<p>The game does not include any analytics or crash-reporting service. Unity Analytics and Unity Performance Reporting are not enabled. If you have chosen to share analytics with app developers in your iOS settings, Apple may provide aggregated, anonymous crash and usage reports to the publisher.</p>`,
    },
    {
      id: 'permissions',
      heading: '7. Device permissions',
      html: `<p>The game does not request access to your location, camera, microphone, photos, contacts, Bluetooth or tracking. Internet access is used to load ads.</p>`,
    },
    {
      id: 'sharing',
      heading: '8. How information is shared',
      html: `<p>The developer and publisher do not sell or share your personal information and hold no personal information about players. Information is processed by Google (advertising) and Apple (the App Store) as described above. No Huawei service receives any information from the iOS version. Information may be disclosed if required by law.</p>`,
    },
    {
      id: 'retention',
      heading: '9. Data retention',
      html: `<ul>
<li><strong>On your device:</strong> until you delete the app.</li>
<li><strong>Google and Apple:</strong> according to their own retention policies.</li>
<li><strong>Emails to the developer:</strong> only as long as needed to respond, and deleted on request.</li>
</ul>`,
    },
    {
      id: 'security',
      heading: '10. Data security',
      html: `<p>Progress is stored only on your device and there is no developer-operated server or account database. Communication with Google is handled by its SDK. No method of storage or transmission is completely secure, but the game is designed to minimise the information involved.</p>`,
    },
    {
      id: 'transfers',
      heading: '11. International data transfers',
      html: `<p>Google and Apple may process information in countries other than your own, including the United States, under the safeguards described in their privacy policies.</p>`,
    },
    {
      id: 'children',
      heading: '12. Children’s privacy',
      html: `<p>Pocket Weather is a calm game suitable for all ages. It is not designed specifically for children and is not listed in the App Store Kids category. It does not ask players for personal information, does not track players and serves only non-personalised ads limited to general-audience content.</p>
<p>If you are a parent or guardian and believe your child has provided personal information, please contact the developer.</p>`,
    },
    {
      id: 'rights',
      heading: '13. Your rights and choices',
      html: `<p>Depending on where you live, you may have rights to access, correct, delete or restrict the processing of your personal information, to object to processing and to data portability. Because the developer holds no personal information about players, most requests concern data held by Google or Apple.</p>
<ul>
<li>Change your ad-consent choice from the game’s settings (EEA, UK and Switzerland).</li>
<li>Delete local game data by deleting the app.</li>
<li>Manage data held by Google at <a href="https://myadcenter.google.com/" rel="noopener" target="_blank">My Ad Center</a> and by Apple through your Apple Account.</li>
<li>Contact the developer with any request; you will receive a reply within 30 days.</li>
</ul>
<p>You also have the right to complain to your local data-protection authority.</p>`,
    },
    {
      id: 'contact',
      heading: '14. Contact and changes',
      html: `<p>${site.person.legalName}<br/>Developer of Pocket Weather · ${site.person.location}<br/>Email: <a href="mailto:${email}">${email}</a></p>
<p>App Store publisher: ${iosPublisher}.</p>
<p>This policy will be updated whenever the game’s data practices change, and the “Last updated” date above will reflect the latest version.</p>`,
    },
  ],
};
