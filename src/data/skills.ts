/**
 * Capabilities. Refined against the Fiverr profile (skills + services), the public
 * GitHub repositories and the local project audit. Add or remove freely.
 */
export interface Capability {
  id: string;
  title: string;
  intro: string;
  skills: string[];
  evidence: string;
}

export const capabilities: Capability[] = [
  {
    id: 'games',
    title: 'Game Development',
    intro: 'Gameplay that feels good in the hand — systems, feedback and progression built to be tuned.',
    skills: ['Unity (2D & 3D)', 'C#', 'Game mechanics', 'Interactive systems', 'Gameplay & UI programming', 'Procedural content', 'Performance optimisation', 'Monetisation & IAP integration'],
    evidence: 'Pocket Weather (published), Fiverr “Full Game Creation” gig, Unity prototypes.',
  },
  {
    id: 'immersive',
    title: 'Immersive Technology',
    intro: 'VR, AR and mixed reality for Meta Quest and mobile — interactions people understand without a manual.',
    skills: ['Virtual Reality', 'Augmented Reality', 'Mixed Reality', 'Meta Quest 2 / Quest 3', 'OpenXR', 'XR Interaction Toolkit', 'Spatial interaction', 'Hand tracking', 'Passthrough experiences', 'AR Foundation'],
    evidence: 'LUMS AR/VR work, VR Art Gallery, Fiverr Quest 3 and MR client reviews.',
  },
  {
    id: 'software',
    title: 'Software Development',
    intro: 'Solid engineering behind the experience — clean architecture, native bridges and integrations.',
    skills: ['C#', 'Java', 'Python', 'Mobile app development', 'Android native plugins', 'iOS AR development', 'API integration (PHP / MySQL)', 'Interactive application architecture'],
    evidence: 'Public GitHub repositories, Pocket Weather Android bridge.',
  },
  {
    id: 'emerging',
    title: 'Emerging Technologies',
    intro: 'Exploring where AI, speech and new interfaces make interactive work more natural.',
    skills: ['Artificial Intelligence', 'Speech recognition', 'Voice commands', 'Conversational characters', 'Experimental interfaces', 'Research prototypes'],
    evidence: 'Voice-command navigation in VR Art Gallery, speech recognition prototypes.',
  },
];

/** Short list used on the homepage marquee. */
export const disciplines = [
  'Game Development', 'Virtual Reality', 'Augmented Reality', 'Mixed Reality',
  'Software Engineering', 'Mobile Applications', 'Artificial Intelligence', 'Interactive Experiences',
  'Research & Experimentation',
];
