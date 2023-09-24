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

export interface SkillItem {
	className?: string;
	skill: string;
	value: number; // Percentage
}

export interface InfoItem {
	className?: string;
	label: string;
	value: string;
	isEmail?: boolean;
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
}
