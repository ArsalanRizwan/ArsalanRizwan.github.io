/**
 * Professional timeline.
 * LinkedIn could not be read (it requires sign-in), so entries are built from:
 *  - Fiverr public profile "Work experience" (read 17 Nov 2026)
 *  - GitHub bio "RA at LUMS | Computer Science Graduate"
 *  - Pocket Weather project settings (company name "Vimersive")
 *  - your brief
 * Anything not verified is flagged with `verify` so you can confirm or correct it.
 */
export interface Experience {
  org: string;
  unit?: string;
  role: string;
  type?: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
  source: string;
  /** Shown as a small "to confirm" marker in development builds & README checklist. */
  verify?: string;
}

export const experience: Experience[] = [
  {
    org: 'Lahore University of Management Sciences (LUMS)',
    unit: 'CHISEL Lab',
    role: 'Senior Unity AR/VR Developer · Research Assistant',
    type: 'Full-time',
    period: 'Nov 2022 — Present',
    location: 'Lahore, Pakistan',
    summary:
      'Designing and developing AR, VR and MR applications in Unity for Meta Quest and other platforms — from concept and prototyping through polished, client-facing builds.',
    highlights: [
      'Interactive games, simulations, training applications, educational experiences and research prototypes.',
      '15+ immersive projects involving custom VR interactions, gameplay systems, UI, 3D environments, optimisation and hardware testing.',
      'Work spanning healthcare, education, industrial training and consumer applications.',
    ],
    source: 'Fiverr profile — Work experience; GitHub bio (“RA at LUMS”)',
    verify: 'Exact LinkedIn job title and CHISEL Lab naming',
  },
  {
    org: 'Vimersive',
    role: 'Founder · Unity / XR Developer',
    type: 'Independent studio',
    period: 'Dates to confirm',
    summary:
      'Independent development label for VR applications, interactive experiences and Unity-based products. Pocket Weather is built under the Vimersive company name.',
    highlights: [
      'Pocket Weather — mobile game published on HUAWEI AppGallery.',
      'Unity VR and interactive experiences for independent and client work.',
    ],
    source: 'Your brief; Pocket Weather Unity project (company name “Vimersive”)',
    verify: 'Start date and official name (“Vimersive” vs “Vimersive Studio”)',
  },
  {
    org: 'Fiverr',
    role: 'Freelance Unity AR/VR Developer',
    type: 'Freelance · Level 2 seller',
    period: 'Ongoing',
    summary:
      'Unity VR development for Meta Quest and custom Unity C# scripts and systems for international clients — working from an idea, a GDD, a prototype or an existing Unity project.',
    highlights: [
      '5.0 average from 47 public reviews (read 17 Nov 2026).',
      'Clients across Pakistan, Brazil and Saudi Arabia among the most recent reviews, including ongoing collaborations.',
      'Services: VR interactions, gameplay mechanics, UI, environment integration, optimisation and deployment.',
    ],
    source: 'Fiverr public profile',
  },
];

export const education = [
  {
    title: 'Computer Science graduate',
    org: 'Institution to confirm',
    source: 'GitHub bio',
    verify: 'Degree title, institution and year (LinkedIn not accessible)',
  },
];
