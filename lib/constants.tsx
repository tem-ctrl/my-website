import { Project, SkillGroup, SocialMedia, TechItem } from '@/lib/types';
import { BiLogoLinkedin } from 'react-icons/bi';
import { BsWhatsapp, BsGithub } from 'react-icons/bs';
import { FaMagento } from 'react-icons/fa';
import {
	SiCss,
	SiFigma,
	SiGit,
	SiGraphql,
	SiHtml5,
	SiJavascript,
	SiMysql,
	SiNextdotjs,
	SiNodedotjs,
	SiPhp,
	SiPython,
	SiReact,
	SiRedux,
	SiSass,
	SiTailwindcss,
	SiTypescript,
} from 'react-icons/si';

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
		bgColor: 'bg-[#22c55e]',
	},
];

export const PROJECTS: Project[] = [
	{
		slug: 'panhomestores',
		title: 'panhomestores',
		image: 'panhomestores.png',
		previewLink: 'https://www.panhomestores.com/uae_en/',
		type: 'professional',
		technologies: ['Magento 2', 'React', 'Redux', 'GraphQL', 'HTML', 'SCSS'],
	},
	{
		slug: 'bantubeat',
		title: 'bantubeat',
		image: 'bantubeat.png',
		previewLink: 'https://bantubeat.com',
		requiredAuth: true,
		type: 'professional',
		technologies: ['NextJs', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Sass'],
	},
	{
		slug: 'kasa',
		title: 'kasa',
		image: 'kasa.png',
		githubLink: 'oc_p7_kasa',
		previewLink: '',
		type: 'education',
		technologies: ['ReactJs', 'JavaScript', 'HTML', 'CSS', 'Sass'],
	},
	{
		slug: 'piiquante',
		title: 'piiquante',
		image: 'piiquante.png',
		githubLink: 'oc_p6_piiquante',
		previewLink: '',
		type: 'education',
		technologies: ['NodeJs', 'Express', 'MongoDB'],
	},
	{
		slug: 'kanap',
		title: 'kanap',
		image: 'kanap.png',
		githubLink: 'oc_p5_kanap',
		previewLink: '',
		type: 'education',
		technologies: ['HTML', 'CSS', 'JavaScript'],
	},
	{
		slug: 'panthere',
		title: 'panthere',
		image: 'panthere.png',
		githubLink: 'oc_p4_panthere',
		previewLink: 'https://tem-ctrl.github.io/oc_p4_panthere',
		type: 'education',
		technologies: ['HTML', 'CSS', 'Sass'],
	},
	{
		slug: 'ohmyfood',
		title: 'ohmyfood',
		image: 'ohmyfood.png',
		githubLink: 'oc_p3_ohmyfood',
		previewLink: 'https://tem-ctrl.github.io/oc_p3_ohmyfood',
		type: 'education',
		technologies: ['HTML', 'CSS', 'Sass'],
	},
	{
		slug: 'booki',
		title: 'booki',
		image: 'booki.png',
		githubLink: 'oc_p2_booki',
		previewLink: 'https://tem-ctrl.github.io/oc_p2_booki',
		type: 'education',
		technologies: ['HTML', 'CSS'],
	},
];

export const SITE_URL = 'https://gtemgoua.vercel.app';

export const CONTACT_EMAIL = 'gilbertemgoua@gmail.com';

/** Start of professional experience, used to compute years of experience */
export const EXPERIENCE_START = '2023-04-01';

export const cvPath = (locale: string) => `/cvs/gilbert_temgoua_cv_${locale}.pdf`;

export const TECH_STACK: TechItem[] = [
	{ name: 'Next.js', icon: <SiNextdotjs /> },
	{ name: 'React', icon: <SiReact /> },
	{ name: 'TypeScript', icon: <SiTypescript /> },
	{ name: 'JavaScript', icon: <SiJavascript /> },
	{ name: 'Tailwind CSS', icon: <SiTailwindcss /> },
	{ name: 'GraphQL', icon: <SiGraphql /> },
	{ name: 'Redux', icon: <SiRedux /> },
	{ name: 'HTML5', icon: <SiHtml5 /> },
	{ name: 'CSS', icon: <SiCss /> },
	{ name: 'Sass', icon: <SiSass /> },
	{ name: 'Magento 2', icon: <FaMagento /> },
	{ name: 'Node.js', icon: <SiNodedotjs /> },
	{ name: 'PHP', icon: <SiPhp /> },
	{ name: 'MySQL', icon: <SiMysql /> },
	{ name: 'Python', icon: <SiPython /> },
	{ name: 'Figma', icon: <SiFigma /> },
	{ name: 'Git', icon: <SiGit /> },
];

/** View transition name shared by a project's card and details page image, so it morphs between them */
export const projectImageTransitionName = (slug: string) => `project-image-${slug}`;

const techByName = (names: string[]) => TECH_STACK.filter(({ name }) => names.includes(name));

export const SKILL_GROUPS: SkillGroup[] = [
	{
		key: 'frontend',
		items: techByName([
			'Next.js',
			'React',
			'TypeScript',
			'JavaScript',
			'Tailwind CSS',
			'Redux',
			'HTML5',
			'CSS',
			'Sass',
		]),
	},
	{
		key: 'backend',
		items: techByName(['GraphQL', 'Node.js', 'PHP', 'MySQL', 'Python', 'Magento 2']),
	},
	{ key: 'tools', items: techByName(['Git', 'Figma']) },
];
