/**
 * Central personal / brand information.
 * Everything here is either verified from a public source (noted inline) or an
 * explicit placeholder. Edit this file to change details site-wide.
 */

export const site = {
  brand: 'ARSALAN STUDIO',
  attribution: 'BY ARSALAN RIZWAN',
  tagline: 'ENGINEERING IDEAS. CREATING EXPERIENCES.',
  positioning: 'Independent Creative Technology Studio',
  title: 'Arsalan Studio | Arsalan Rizwan — Creative Technologist',
  description:
    'Arsalan Rizwan is a software developer and creative technologist working across game development, AR, VR, mixed reality, software engineering, and emerging technologies.',

  person: {
    name: 'Arsalan Rizwan',
    /** Name as published on Huawei AppGallery (developer field). */
    legalName: 'Muhammad Arsalan Rizwan',
    identity: 'Software Developer | Creative Technologist | AR/VR Developer',
    /** Fiverr profile + GitHub profile both list Pakistan / Lahore. */
    location: 'Lahore, Pakistan',
    /** Fiverr profile: English, Urdu, Punjabi. */
    languages: ['English', 'Urdu', 'Punjabi'],
  },

  /**
   * Availability indicator on the homepage. Kept OFF until you explicitly
   * confirm your current availability. Set `show: true` to display it.
   */
  availability: {
    show: false,
    label: 'Available for selected projects',
  },
} as const;

/**
 * Contact + social links. Only verified links are filled in.
 * - email: published as the contact address in the existing Pocket Weather
 *   privacy policy linked from AppGallery.
 * - fiverr / linkedin: supplied directly by you.
 * - github / x: from the public GitHub profile api.github.com/users/ArsalanRizwan.
 */
export const contact = {
  email: 'marsalanrizwan19@gmail.com',
};

export interface SocialLink {
  label: string;
  href: string;
  handle: string;
}

export const social: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/muhammad-arsalan-rizwan-534a21234/', handle: 'muhammad-arsalan-rizwan' },
  { label: 'Fiverr', href: 'https://www.fiverr.com/marsalanrizwan?public_mode=true', handle: 'marsalanrizwan' },
  { label: 'GitHub', href: 'https://github.com/ArsalanRizwan', handle: 'ArsalanRizwan' },
  { label: 'X', href: 'https://x.com/MArsalanRizwan', handle: '@MArsalanRizwan' },
  { label: 'AppGallery', href: 'https://appgallery.huawei.com/app/C119535461', handle: 'Pocket Weather' },
];

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work/' },
  { label: 'Expertise', href: '/expertise/' },
  { label: 'About', href: '/about/' },
  { label: 'The Lab', href: '/lab/' },
  { label: 'Contact', href: '/contact/' },
];
