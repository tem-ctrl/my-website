import { SkillItemProps, SocialMediaProps } from '@/app/utils/types';
import {
	BsWhatsapp,
	// BsTwitter,
	BsTiktok,
	BsGithub,
	BsLinkedin,
} from 'react-icons/bs';
// import { FaFacebookF } from 'react-icons/fa';

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
	// {
	//   skill: 'PHP',
	//   value: 50,
	// },
	// {
	//   skill: 'Laravel',
	//   value: 30,
	// },
];

export const SOCIAL_MEDIA: SocialMediaProps[] = [
	{
		name: 'LinkedIn',
		icon: <BsLinkedin />,
		link: 'https://linkedin.com/in/temgoua',
		bgColor: 'bg-[#3e63ac]',
	},
	{
		name: 'whatsapp',
		icon: <BsWhatsapp />,
		link: 'https://wa.me/237651331062',
		bgColor: 'bg-green-500',
	},
	{
		name: 'GitHub',
		icon: <BsGithub />,
		link: 'https://github.com/tem-ctrl',
		bgColor: 'bg-black',
	},
	// {
	// 	name: 'instagram',
	// 	icon: <BsInstagram />,
	// 	link: '',
	// 	bgColor: 'bg-neutral-700',
	// },
	// {
	// 	name: 'youtube',
	// 	icon: <BsYoutube />,
	// 	link: '',
	// 	bgColor: 'bg-[#ff0000]',
	// },
	// {
	// 	name: 'facebook',
	// 	icon: <FaFacebookF />,
	// 	link: 'https://web.facebook.com/profile.php?id=100091284335131',
	// 	bgColor: 'bg-[#3e63ac]',
	// },
	// {
	// 	name: 'twitter',
	// 	icon: <BsTwitter />,
	// 	link: 'https://twitter.com/gilbertemgoua',
	// 	bgColor: 'bg-blue-500',
	// },
	{
		name: 'tiktok',
		icon: <BsTiktok />,
		link: 'https://tiktok.com/@gnext25',
		bgColor: 'bg-black',
	},
	// {
	// 	name: 'snapchat',
	// 	icon: <GrSnapchat />,
	// 	link: '',
	// 	bgColor: 'bg-[#f7f400]',
	// },
	// {
	// 	name: 'sound_cloud',
	// 	icon: <FaSoundcloud />,
	// 	link: '',
	// 	bgColor: 'bg-[#f76721]',
	// },
];
