/**
 * Pocket Weather — HUAWEI AppGallery privacy policy.
 *
 * Based on a read-only audit of the Pocket Weather Unity project (17 Nov 2026):
 *  - Plugins/Android/HmsBridge.java, HmsPurchaseActivity.java
 *  - Editor/HuaweiAndroidPatcher.cs (SDKs: com.huawei.hms:ads-prime, iap, hwid;
 *    permissions INTERNET + ACCESS_NETWORK_STATE)
 *  - Scripts/Core/SaveData.cs (PlayerPrefs only), Store/StoreConfig.cs, Ads.cs, Shop.cs
 *  - ProjectSettings/UnityConnectSettings.asset (Unity Analytics, Unity Ads,
 *    Unity IAP, Performance Reporting: disabled)
 * and on the policy previously published for this app (effective 23 Oct 2026).
 *
 * This is not legal advice and has not been reviewed by a lawyer.
 */
import type { Policy } from './types';
import { contact, site } from '../site';

const email = contact.email;

export const huaweiPolicy: Policy = {
  slug: 'huawei',
  app: 'Pocket Weather',
  platform: 'Android — HUAWEI AppGallery',
  title: 'Pocket Weather Privacy Policy — HUAWEI AppGallery',
  description:
    'How the HUAWEI AppGallery version of Pocket Weather handles information, including HUAWEI Ads Kit, IAP Kit and Account Kit.',
  effectiveDate: '17 November 2026',
  lastUpdated: '17 November 2026',
  status: 'published',
  developer: site.person.legalName,
  contactEmail: email,
  summary: [
    { label: 'Accounts', value: 'No Pocket Weather account. A HUAWEI ID is used only for HUAWEI in-app purchases.' },
    { label: 'Game progress', value: 'Stored only on your device.' },
    { label: 'Advertising', value: 'HUAWEI Ads Kit (Petal Ads), non-personalised ads requested.' },
    { label: 'Payments', value: 'Processed by HUAWEI IAP. The developer never sees payment details.' },
    { label: 'Sold or shared for profit', value: 'No.' },
    { label: 'Permissions', value: 'Internet and network state only.' },
  ],
  sections: [
    {
      id: 'about',
      heading: '1. About this policy',
      html: `<p>This policy explains how <strong>Pocket Weather</strong> (the “game”), published on HUAWEI AppGallery (app ID C119535461) by ${site.person.legalName} (“I”, “me”, the “developer”), handles information when you play the AppGallery version of the game on Android.</p>
<p>It applies only to the HUAWEI AppGallery version. Other versions of Pocket Weather, such as the planned iOS version, use different services and have <a href="/privacy/pocket-weather/">their own policies</a>.</p>
<p>Pocket Weather is a casual puzzle game in which you play a small rain cloud that waters islands. It does not ask for your name, email address, contacts, photos, camera, microphone or location.</p>`,
    },
    {
      id: 'on-device',
      heading: '2. Information stored on your device',
      html: `<p>The game saves your progress locally on your device using the game engine’s standard local storage. This includes:</p>
<ul>
<li>unlocked levels and stars earned;</li>
<li>seeds, your My Island buildings and when they were last collected;</li>
<li>your Daily Island progress and streak;</li>
<li>chosen cloud skin and island theme, and which cosmetic items you own;</li>
<li>music and sound-effect (and vibration) settings;</li>
<li>whether you own “No Forced Ads” or the Candy Bundle.</li>
</ul>
<p>This information is <strong>not sent to me</strong> and I have no server that receives it. It is deleted when you uninstall the game or clear its storage in your device settings.</p>`,
    },
    {
      id: 'collected',
      heading: '3. Information processed by third-party services',
      html: `<p>The game itself does not collect personal information for the developer. However, the following HUAWEI services are built into the AppGallery version and process some information to provide their functions. They act under Huawei’s own privacy terms.</p>
<div class="table-wrap"><table>
<thead><tr><th>Service</th><th>Why it is used</th><th>Information it may process</th></tr></thead>
<tbody>
<tr><td><strong>HUAWEI Ads Kit</strong> (Petal Ads)</td><td>Shows a launch splash ad, a banner on menus, interstitial ads between levels and optional reward videos.</td><td>Device and advertising identifiers such as the Open Anonymous Device Identifier (OAID), device model, operating system, language, network type, IP address and ad interactions (for example impressions and clicks).</td></tr>
<tr><td><strong>HUAWEI IAP Kit</strong></td><td>Processes optional purchases (seed packs, No Forced Ads, Candy Bundle).</td><td>Purchase records: product ID, order and purchase token, purchase time and status, and a signature used to verify the purchase. Payment details are handled entirely by Huawei.</td></tr>
<tr><td><strong>HUAWEI Account Kit</strong> (HUAWEI ID)</td><td>AppGallery requires games with in-app purchases to use HUAWEI ID sign-in. The game attempts a silent sign-in at launch and asks you to sign in only if you start a purchase or tap Sign in.</td><td>Your HUAWEI ID sign-in status and the basic identifier Huawei provides with default sign-in parameters (OpenID). The game does not request your name, email address, phone number or profile picture, and does not store your HUAWEI ID information.</td></tr>
</tbody></table></div>
<p>HUAWEI Account Kit may also process basic device information (such as operating-system version and model) and network information.</p>
<p><strong>Providers.</strong> HUAWEI Mobile Services SDKs are provided by Huawei Software Technologies Co., Ltd. For users in the European Economic Area, Petal Ads is operated by Aspiegel SE (Ireland), which acts as an independent controller for advertising data.</p>
<p>Exactly what each SDK processes, and for how long, is described by Huawei:</p>
<ul>
<li><a href="https://developer.huawei.com/consumer/en/doc/HMSCore-Guides/advertisement-service-data-protection-0000002476949158" rel="noopener" target="_blank">Petal Ads — data protection information</a></li>
<li><a href="https://developer.huawei.com/consumer/en/doc/HMSCore-Guides/sdk-data-security-0000001050044906" rel="noopener" target="_blank">HUAWEI IAP Kit — SDK privacy and security statement</a></li>
<li><a href="https://developer.huawei.com/consumer/en/doc/HMSCore-Guides/sdk-data-security-0000001050050911" rel="noopener" target="_blank">HUAWEI Account Kit — SDK privacy and security statement</a></li>
<li><a href="https://consumer.huawei.com/en/privacy/privacy-policy/" rel="noopener" target="_blank">Huawei Consumer Privacy Statement</a> and the <a href="https://privacy.consumer.huawei.com/legal/hiapp/privacy-statement.htm?country=SG&amp;branchid=2&amp;language=en_US" rel="noopener" target="_blank">Statement About AppGallery and Privacy</a></li>
</ul>`,
    },
    {
      id: 'advertising',
      heading: '4. Advertising',
      html: `<p>Pocket Weather is free and supported by advertising provided through HUAWEI Ads Kit (Petal Ads).</p>
<ul>
<li><strong>Non-personalised ads.</strong> The game asks HUAWEI Ads to serve non-personalised ads. Non-personalised ads are chosen based on context (such as the app and general device information) rather than a profile of your interests. Huawei may still process device identifiers for purposes such as frequency capping, fraud prevention and ad measurement.</li>
<li><strong>All-ages content.</strong> Live ads are requested with Huawei’s “W” content classification, which is intended to restrict ads to content suitable for all ages.</li>
<li><strong>Where ads appear.</strong> A splash ad may appear when the game opens and a banner on menus. Interstitial ads appear only after a level has ended, never during play, and not during the first three levels. Reward videos are always optional.</li>
<li><strong>Your choices.</strong> The optional “No Forced Ads” purchase removes the banner and between-level ads. You can also limit ad tracking or reset the OAID in your device settings (on HUAWEI devices: Settings › Privacy › Ads and privacy).</li>
</ul>
<p>I do not receive personal information from HUAWEI Ads. I only see aggregated reports such as numbers of impressions and revenue.</p>`,
    },
    {
      id: 'purchases',
      heading: '5. In-app purchases',
      html: `<p>Purchases are optional. They are processed by HUAWEI IAP, and you need a HUAWEI ID to make one. I never receive your card or payment details.</p>
<p>After a purchase, the game receives the purchase record described above. It verifies the record’s signature on your device, delivers the item, and—for consumable seed packs—confirms consumption with Huawei so the item can be bought again. The game queries your owned purchases when it starts so items can be restored after reinstalling. These records are not sent to me.</p>`,
    },
    {
      id: 'permissions',
      heading: '6. Device permissions',
      html: `<p>The AppGallery version requests only:</p>
<ul>
<li><strong>Internet</strong> — to load ads and communicate with HUAWEI IAP and HUAWEI ID;</li>
<li><strong>Network state</strong> — to check whether a connection is available.</li>
</ul>
<p>The game uses the device vibrator for short haptic feedback when sound effects are on; this does not collect any information.</p>`,
    },
    {
      id: 'engine',
      heading: '7. Game engine',
      html: `<p>Pocket Weather is built with the Unity engine. Unity Analytics, Unity Ads, Unity In-App Purchasing and Unity Performance Reporting are <strong>not enabled</strong> in this game. Depending on engine settings, Unity may collect limited technical information about the device and engine performance; where this applies it is governed by the <a href="https://unity.com/legal/game-player-and-app-user-privacy-policy" rel="noopener" target="_blank">Unity Game Player and App User Privacy Policy</a>.</p>`,
    },
    {
      id: 'sharing',
      heading: '8. How information is shared',
      html: `<p>I do not sell your personal information, and I do not share it with anyone for their own marketing. Information is processed only by the HUAWEI services listed above, to provide ads, purchases and sign-in. I may disclose information if required by law, but the game holds no personal information on any server I control.</p>`,
    },
    {
      id: 'retention',
      heading: '9. Data retention',
      html: `<ul>
<li><strong>On your device:</strong> kept until you uninstall the game or clear its data.</li>
<li><strong>HUAWEI services:</strong> retained by Huawei according to its own statements (for example, Huawei states that IAP transaction records are kept to support payments and may be retained for up to seven years, and that Petal Ads data is kept for a limited period).</li>
<li><strong>Emails to me:</strong> if you contact me, I keep the correspondence only as long as needed to respond and for reasonable record-keeping, and delete it on request.</li>
</ul>`,
    },
    {
      id: 'security',
      heading: '10. Data security',
      html: `<p>The game stores progress only locally and has no developer-operated server or user database. Purchases are verified with Huawei’s cryptographic signature before items are delivered. Communication with HUAWEI services is handled by Huawei’s SDKs. No method of storage or transmission is completely secure, but I aim to minimise the information involved in the first place.</p>`,
    },
    {
      id: 'transfers',
      heading: '11. International data transfers',
      html: `<p>HUAWEI services may process information on servers in different regions (for example, Huawei operates service sites in Singapore, Germany, Russia and China) depending on your location and account region. Such transfers are managed by Huawei under its privacy statement and applicable law.</p>`,
    },
    {
      id: 'children',
      heading: '12. Children’s privacy',
      html: `<p>Pocket Weather is a calm game designed for players of all ages and is rated 7+ on AppGallery. It does not ask players for personal information and does not knowingly collect personal information from children for the developer.</p>
<p>Ads are requested as non-personalised and restricted to all-ages content. Purchases require a HUAWEI ID, which is subject to Huawei’s account and parental-control settings. If you are a parent or guardian and believe your child has provided personal information, please contact me and I will help you remove it.</p>`,
    },
    {
      id: 'rights',
      heading: '13. Your rights and choices',
      html: `<p>Depending on where you live, you may have rights to access, correct, delete or restrict the processing of your personal information, to object to processing, and to data portability.</p>
<ul>
<li>Delete local game data at any time by uninstalling the game or clearing its storage.</li>
<li>Limit ad tracking or reset your advertising identifier in your device settings.</li>
<li>Manage information held by Huawei (ads, purchases, HUAWEI ID) through your HUAWEI ID settings or Huawei’s privacy channels.</li>
<li>Contact me with any request; I will respond within 30 days and, where the information is held by Huawei, explain how to reach them.</li>
</ul>
<p>You also have the right to complain to your local data-protection authority.</p>`,
    },
    {
      id: 'changes',
      heading: '14. Changes to this policy',
      html: `<p>If the game’s data practices change—for example, if a new service is added—I will update this page and change the “Last updated” date. Significant changes will be reflected in the AppGallery listing’s privacy-policy link before the update is released.</p>
<p>Previous version: effective 23 October 2026. This version adds HUAWEI Account Kit, which is used for purchases.</p>`,
    },
    {
      id: 'contact',
      heading: '15. Contact',
      html: `<p>${site.person.legalName}<br/>Developer of Pocket Weather · ${site.person.location}<br/>Email: <a href="mailto:${email}">${email}</a></p>`,
    },
  ],
};

/** Items found during the audit that should be reviewed for the Huawei build. Rendered on the policy page. */
export const huaweiChecklist: { area: string; items: string[] }[] = [
  {
    area: 'Recommended review for the AppGallery build',
    items: [
      'Petal Ads policy asks publishers to obtain consent before showing ads and to tell users data is shared with Petal Ads. The current build initialises ads at launch without an in-game consent step — consider adding a first-launch privacy notice with a link to this policy.',
      'Huawei asks publishers to indicate child / under-18 status on ad requests (setTagForChildProtection, setTagForUnderAgeOfPromise). The build sets non-personalised ads and the “W” content classification but not these tags.',
      'Huawei recommends delaying IAP initialisation until the user has agreed to the privacy policy; the build performs a silent HUAWEI ID sign-in at launch.',
      'The previously published policy names the package com.Vimersive.PocketWeather while Player Settings use com.Vimersive.PocketWeather.huawei — confirm which is live and keep the AppGallery listing’s privacy-policy link pointed at this page.',
      'The Android manifest enables cleartext (HTTP) traffic as suggested by the Huawei Ads setup guide; confirm whether it is still required.',
      'Unity “Engine Diagnostics” appears enabled in project settings; confirm what it sends in a release build or disable it.',
    ],
  },
];
