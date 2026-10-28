import type React from 'react';

export type CustomLink = {
	text: string;
	href: string;
};

export interface TimelineItem {
	className?: string;
	startDate: string;
	endDate?: string;
	title: string;
	place: string;
	description: string | string[];
	location: string;
}

export interface InfoItemType {
	className?: string;
	label: string;
	value: string;
	isEmail?: boolean;
	isExperience?: boolean;
}

export interface SocialMedia {
	className?: string;
	link: string;
	icon: React.JSX.Element;
	bgColor: string;
	name?: string;
}

export type ProjectType = 'professional' | 'personal' | 'education';

export interface Project {
	className?: string;
	slug: string;
	title: string;
	image: string;
	githubLink?: string;
	previewLink?: string;
	requiredAuth?: boolean;
	/** Shown in the home page "Featured work" section */
	featured?: boolean;
	type?: ProjectType;
	technologies?: string[];
}

export interface TechItem {
	name: string;
	icon: React.JSX.Element;
}

/** `YYYY-MM` */
export type YearMonth = `${number}-${number}`;

export interface Experience {
	start: YearMonth;
	/** Last month worked (inclusive), omitted while ongoing */
	end?: YearMonth;
}

export interface SkillGroup {
	key: 'frontend' | 'backend' | 'cms' | 'tools';
	items: TechItem[];
}
