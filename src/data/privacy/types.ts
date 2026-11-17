export interface PolicySection {
  id: string;
  heading: string;
  /** Trusted HTML authored in this repository (not user input). */
  html: string;
}

export interface Policy {
  slug: string;
  app: string;
  platform: string;
  title: string;
  description: string;
  /** ISO date or a short human string for drafts. */
  effectiveDate: string;
  lastUpdated: string;
  status: 'published' | 'draft';
  /** Shown at the top of draft policies. */
  draftNotice?: string;
  developer: string;
  contactEmail: string;
  summary: { label: string; value: string }[];
  sections: PolicySection[];
}
