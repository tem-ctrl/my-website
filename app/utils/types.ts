export type CustomLink = {
	text: string;
	href: string;
};

export interface TimelineItemProps {
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

export interface InfoItemProps {
	className?: string;
	label: string;
	value: string;
	isEmail?: boolean;
}

export interface SocialMediaProps {
	className?: string;
	link: string;
	icon: JSX.Element;
	bgColor: string;
	name?: string;
}
