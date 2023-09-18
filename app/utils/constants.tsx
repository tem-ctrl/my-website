import { SkillItemProps, SocialMedia } from '@/app/utils/types';
import { BiLogoLinkedin } from 'react-icons/bi';
import { BsWhatsapp, BsGithub } from 'react-icons/bs';

export const SKILLS: SkillItemProps[] = [
	{
		skill: 'HTML',
		value: 90,
	},
	{
		skill: 'CSS',
		value: 80,
	},
	{
		skill: 'Sass',
		value: 70,
	},
	{
		skill: 'Tailwind CSS',
		value: 80,
	},
	{
		skill: 'JavaScript',
		value: 80,
	},
	{
		skill: 'Typescript',
		value: 60,
	},
	{
		skill: 'ReactJs',
		value: 70,
	},
	{
		skill: 'NextJs',
		value: 80,
	},
	{
		skill: 'Python',
		value: 80,
	},
	{
		skill: 'PHP',
		value: 60,
	},
];

export const SOCIAL_MEDIA: SocialMedia[] = [
	{
		name: 'LinkedIn',
		icon: <BiLogoLinkedin />,
		link: 'https://linkedin.com/in/temgoua',
		bgColor: 'bg-[#3e63ac]',
	},
	{
		name: 'GitHub',
		icon: <BsGithub />,
		link: 'https://github.com/tem-ctrl',
		bgColor: 'bg-black/90',
	},
	{
		name: 'whatsapp',
		icon: <BsWhatsapp />,
		link: 'https://wa.me/237651331062',
		bgColor: 'bg-green-500',
	},
];
