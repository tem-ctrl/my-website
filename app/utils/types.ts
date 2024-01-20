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

export interface SkillItemProps {
	className?: string;
	skill: string;
	value: number; // Percentage
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
	icon: JSX.Element;
	bgColor: string;
	name?: string;
}

export type PageProps = { params: { locale: string } };

export interface Project {
	className?: string;
	slug: string;
	title: string;
	image: string;
	githubLink?: string;
	previewLink?: string;
	requiredAuth?: boolean;
	type?: 'education' | 'professional';
	technologies?: string[];
}
