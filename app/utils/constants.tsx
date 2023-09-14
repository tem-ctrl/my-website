import {
	InfoItemProps,
	SkillItemProps,
	SocialMediaProps,
	TimelineItemProps,
} from '@/app/utils/types';
import {
	BsWhatsapp,
	// BsTwitter,
	BsTiktok,
	BsGithub,
	BsLinkedin,
} from 'react-icons/bs';
// import { FaFacebookF } from 'react-icons/fa';

export const EXPERIENCE: TimelineItemProps[] = [
	{
		startDate: 'Apr 2023',
		place: 'Bantubeat',
		title: 'Frontend developer (freelance)',
		location: 'Fully remote',
		description: [
			'Transform Figma design into web pages using NextJs, Typescript and Tailwind CSS',
			'Review, clean and refactor code to ensure excellent code quality over the entire apps',
			'Manage front-end developement team',
			'Ensure flawless communication with APIs (REST and GraphQL) using either client side or server side rendering',
			'Fix bugs',
			'Help new comers in getting involved in the projects',
		],
	},
];

export const EDUCATION: TimelineItemProps[] = [
	{
		startDate: 'Oct 2022',
		endDate: 'Jan 2023',
		title: 'Web developer training path',
		place: 'Openclassrooms',
		location: 'Online',
		description:
			'Web developer path with a strong emphasis on frontend (ReactJs) and an intoduction to backend (NodeJs)',
	},
	{
		startDate: 'Jan 2019',
		endDate: 'Aug 2021',
		title: 'Python and web development training',
		place: 'self-taught',
		location: 'Yaounde, Cameroon',
		description: 'Learn Python, HTML, CSS and JavaScript from beginner to advanced level',
	},
	{
		startDate: 'Oct 2013',
		endDate: 'Jul 2018',
		title: 'Bachelor degree',
		place: 'University of Dschang',
		location: 'Dschang, Cameroon',
		description: 'Bachelor degree in Physics (major: Electronics)',
	},
];

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

export const MY_PERSONAL_INFO: InfoItemProps[] = [
	{
		label: 'Name',
		value: 'Gilbert',
	},
	{
		label: 'Last name',
		value: 'TEMGOUA DONKOO',
	},
	{
		label: 'Phone',
		value: '+237 651 331 062',
	},
	{
		label: 'Email',
		value: 'gilbertemgoua@gmail.com',
		isEmail: true,
	},
	{
		label: 'Nationality',
		value: 'Cameroon',
	},
	{
		label: 'City',
		value: 'Yaounde',
	},
];

export const MY_PROFESSIONAL_INFO: InfoItemProps[] = [
	{
		label: 'Experience',
		value: '6 months',
	},
	{
		label: 'Open to work',
		value: 'Yes',
	},
	{
		label: 'Availability',
		value: 'Immediate',
	},
	{
		label: 'Job type',
		value: 'Full time, Part time, Freelance',
	},
	{
		label: 'Job location',
		value: 'Fully remote, Onsite',
	},
	{
		label: 'Willing to relocate to',
		value: 'Anywhere',
	},
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
