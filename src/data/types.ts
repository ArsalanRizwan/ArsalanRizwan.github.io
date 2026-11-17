import type { ImageMetadata } from 'astro';

export type CategoryId = 'xr' | 'games' | 'software' | 'ai' | 'research';

export const categories: { id: CategoryId; label: string; short: string }[] = [
  { id: 'xr', label: 'AR / VR / MR Experiences', short: 'XR' },
  { id: 'games', label: 'Game Development', short: 'Games' },
  { id: 'software', label: 'Software & Mobile Applications', short: 'Software' },
  { id: 'ai', label: 'AI & Emerging Technologies', short: 'AI' },
  { id: 'research', label: 'Research & Experiments', short: 'Research' },
];

export interface ProjectImage {
  src: ImageMetadata;
  alt: string;
  caption?: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  kind: 'store' | 'github' | 'client' | 'video' | 'profile' | 'other';
}

export interface CaseSection {
  title: string;
  body: string;
}

export type ProjectStatus =
  | 'Published'
  | 'Client project'
  | 'Research project'
  | 'Prototype'
  | 'Open source'
  | 'Academic project'
  | 'In development';

export interface Project {
  id: string;
  title: string;
  slug: string;
  /** Primary category (used for filtering). */
  category: CategoryId;
  /** Additional categories the project also belongs to. */
  alsoIn?: CategoryId[];
  year?: string;
  shortDescription: string;
  /** Paragraphs. */
  description: string[];
  role?: string;
  technologies: string[];
  platforms?: string[];
  features?: string[];
  challenges?: CaseSection[];
  implementation?: CaseSection[];
  /** Only verified outcomes. */
  outcomes?: string[];
  cover?: ProjectImage;
  images?: ProjectImage[];
  videos?: { title: string; url: string }[];
  status: ProjectStatus;
  links?: ProjectLink[];
  /** Where the information came from. */
  sources: { label: string; href?: string }[];
  featured?: boolean;
  /** Higher numbers appear first. */
  order?: number;
  /** Projects with a bespoke page set this (e.g. Pocket Weather). */
  customPage?: string;
  /** True when visuals are a generated placeholder that should be replaced. */
  needsAssets?: boolean;
  /** Notes about unverified details — listed in README, not shown publicly. */
  todo?: string[];
}

export interface LabEntry {
  id: string;
  title: string;
  kind: string;
  year?: string;
  summary: string;
  tags: string[];
  link?: { label: string; href: string };
  project?: string; // slug of related project
  source: string;
}
