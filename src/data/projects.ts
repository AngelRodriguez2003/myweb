import type { ImageMetadata } from 'astro';
import type { Lang } from '../i18n/utils';
import { explosive } from './explosive';
import { portfolio } from './portfolio';

export interface Screenshot<Id extends string = string> {
	id: Id;
	image: ImageMetadata;
}

/** Copy for a project card and modal; each project has a block of this shape in the dictionaries. */
export interface ProjectCopy {
	name: string;
	chips: string[];
	stack: string;
	tagline: string;
	browserAlt: string;
	phoneAlt: string;
	intro: string;
	what: string[];
	how: string[];
	tech: string[];
	screens: Record<string, { title: string; desc: string }>;
}

export interface Project {
	/** Dictionary key holding the project's copy. */
	key: 'explosive' | 'portfolio';
	/** `warm` uses the --w-* palette as designed for Project Explosive; `base` maps it onto the site tokens. */
	tone: 'warm' | 'base';
	/** Live app; when missing there's no "Try it" button. */
	liveUrl?: string;
	/** Host shown in the modal's fake address bar. */
	liveHost?: string;
	repoUrl: string;
	/** Full case study page, if there is one. */
	caseUrl?: Record<Lang, string>;
	cover: { web: ImageMetadata; mobile: ImageMetadata };
	web: Screenshot[];
	mobile: Screenshot[];
}

export const projects: Project[] = [explosive, portfolio];
