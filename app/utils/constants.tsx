import { SkillItemProps, SocialMediaProps } from '@/app/utils/types';
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
];

export const SOCIAL_MEDIA: SocialMediaProps[] = [
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
		bgColor: 'bg-black',
	},
	{
		name: 'whatsapp',
		icon: <BsWhatsapp />,
		link: 'https://wa.me/237651331062',
		bgColor: 'bg-green-500',
	},
	// {
	// 	name: 'youtube',
	// 	icon: <BsYoutube />,
	// 	link: '',
	// 	bgColor: 'bg-[#ff0000]',
	// },
	// {
	// 	name: 'twitter',
	// 	icon: <BsTwitter />,
	// 	link: 'https://twitter.com/gilbertemgoua',
	// 	bgColor: 'bg-blue-500',
	// },
	// {
	// 	name: 'tiktok',
	// 	icon: <BsTiktok />,
	// 	link: 'https://tiktok.com/@gnext25',
	// 	bgColor: 'bg-black',
	// }
];
