import { Project, SkillItem, SocialMedia } from '@/app/utils/types';
import { BiLogoLinkedin } from 'react-icons/bi';
import { BsWhatsapp, BsGithub } from 'react-icons/bs';

export const SKILLS: SkillItem[] = [
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

export const PROJECTS: Project[] = [
	{
		slug: 'my-website',
		title: 'my Website',
		image: 'my-website.png',
		githubLink: 'my-website',
		previewLink: 'https://gtemgoua.vercel.app',
	},
	{
		slug: 'bantubeat',
		title: 'bantubeat',
		image: 'bantubeat.png',
		previewLink: 'https://bantubeat.com',
		requiredAuth: true,
	},
	{
		slug: 'scandiweb-test',
		title: 'Scandiweb Test',
		image: 'scandiweb-test.png',
		githubLink: 'scandiweb-test',
	},
	{
		slug: 'kasa',
		title: 'kasa',
		image: 'kasa.png',
		githubLink: 'oc_p7_kasa',
		previewLink: '',
	},
	{
		slug: 'piiquante',
		title: 'piiquante',
		image: 'piiquante.png',
		githubLink: 'oc_p6_piiquante',
		previewLink: '',
	},
	{
		slug: 'kanap',
		title: 'kanap',
		image: 'kanap.png',
		githubLink: 'oc_p5_kanap',
		previewLink: '',
	},
	{
		slug: 'panthere',
		title: 'panthere',
		image: 'panthere.png',
		githubLink: 'oc_p4_panthere',
		previewLink: 'https://tem-ctrl.github.io/oc_p4_panthere',
	},
	{
		slug: 'ohmyfood',
		title: 'ohmyfood',
		image: 'ohmyfood.png',
		githubLink: 'oc_p3_ohmyfood',
		previewLink: 'https://tem-ctrl.github.io/oc_p3_ohmyfood',
	},
	{
		slug: 'booki',
		title: 'booki',
		image: 'booki.png',
		githubLink: 'oc_p2_booki',
		previewLink: 'https://tem-ctrl.github.io/oc_p2_booki',
	},
];

export const BLOG_POSTS = [
	'Next new Generation',
	'React Server Components',
	'My Blasting blog post',
	'Next new Generation 5',
	'React Server Components 25',
	'My Blasting blog post 96',
];
