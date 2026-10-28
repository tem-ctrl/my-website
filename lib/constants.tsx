import { Experience, Project, SkillGroup, SocialMedia, TechItem } from '@/lib/types';
import { BiLogoLinkedin } from 'react-icons/bi';
import { BsWhatsapp, BsGithub } from 'react-icons/bs';
import { AiOutlineApi } from 'react-icons/ai';
import { FaMagento } from 'react-icons/fa';
import { MdBolt, MdInventory2, MdStorefront } from 'react-icons/md';
import {
	SiAlpinedotjs,
	SiClaude,
	SiCss,
	SiCursor,
	SiDocker,
	SiFastapi,
	SiFigma,
	SiFlask,
	SiGit,
	SiGithubactions,
	SiGraphql,
	SiHtml5,
	SiJavascript,
	SiJquery,
	SiJira,
	SiLaravel,
	SiLess,
	SiNextdotjs,
	SiMysql,
	SiPhp,
	SiPostgresql,
	SiPytest,
	SiPython,
	SiReact,
	SiRedux,
	SiSass,
	SiSwr,
	SiTailwindcss,
	SiTestinglibrary,
	SiTypescript,
	SiVitest,
	SiWoocommerce,
	SiWordpress,
} from 'react-icons/si';
import { TbTestPipe } from 'react-icons/tb';

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
		slug: 'saloonprived',
		title: 'saloonprived',
		image: 'saloonprived.png',
		previewLink: 'https://saloonprived.com/',
		type: 'professional',
		// TODO: confirm the full stack
		technologies: ['Next.js'],
	},
	{
		slug: 'featlink',
		title: 'featlink',
		image: 'featlink.png',
		previewLink: 'https://feat-link.com/',
		type: 'professional',
		// TODO: confirm the full stack
		technologies: ['Next.js'],
	},
	{
		slug: 'dobell',
		title: 'dobell',
		image: 'dobell.png',
		previewLink: 'https://www.dobell.co.uk/',
		type: 'professional',
		// TODO: confirm the full stack
		technologies: ['Magento 2'],
	},
	{
		slug: 'legeakademiet',
		title: 'legeakademiet',
		// TODO: replace with a real screenshot (the site blocks headless browsers)
		image: 'legeakademiet.png',
		previewLink: 'https://legeakademiet.dk/',
		type: 'professional',
		// TODO: confirm the full stack
		technologies: ['Magento 2'],
	},
	{
		slug: 'hoitolatukku',
		title: 'hoitolatukku',
		image: 'hoitolatukku.png',
		previewLink: 'https://hoitolatukku.fi/',
		type: 'professional',
		technologies: ['WordPress', 'WooCommerce', 'Akeneo', 'PHP'],
	},
	{
		slug: 'juliussilvert',
		title: 'juliussilvert',
		image: 'juliussilvert.png',
		previewLink: 'https://my.juliussilvert.com/',
		requiredAuth: true,
		type: 'professional',
		// TODO: confirm the full stack
		technologies: ['Magento 2'],
	},
	{
		slug: 'seriesaddict',
		title: 'seriesaddict',
		image: 'seriesaddict.png',
		previewLink: 'https://seriesaddict.fr/',
		type: 'professional',
		// TODO: confirm the full stack
		technologies: ['Vue.js'],
	},
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
		slug: 'open-source-guru',
		title: 'open-source-guru',
		image: 'open-source-guru.png',
		githubLink: 'open-source-guru',
		previewLink: 'https://open-source-guru.dev/',
		type: 'personal',
		technologies: ['Next.js', 'TypeScript', 'Fastify', 'PostgreSQL', 'Docker'],
	},
	{
		slug: 'retrouve-moi',
		title: 'retrouve-moi',
		image: 'retrouve-moi.png',
		githubLink: 'retrouve-moi',
		previewLink: 'https://retrouve-moi.com/',
		type: 'personal',
		technologies: ['Next.js', 'TypeScript', 'Laravel', 'Tailwind CSS', 'Docker', 'Playwright'],
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

/** Work periods, in the same order as the `AboutPage.experience-N` messages */
export const EXPERIENCES: Experience[] = [
	{ start: '2026-08', end: '2026-08' }, // Micro1
	{ start: '2024-07', end: '2026-04' }, // Scandiweb
	{ start: '2023-03', end: '2024-07' }, // Bantubeat
];

export const cvPath = (locale: string) => `/cvs/gilbert_temgoua_cv_${locale}.pdf`;

export const TECH_STACK: TechItem[] = [
	{ name: 'Next.js', icon: <SiNextdotjs /> },
	{ name: 'React', icon: <SiReact /> },
	{ name: 'TypeScript', icon: <SiTypescript /> },
	{ name: 'JavaScript', icon: <SiJavascript /> },
	{ name: 'Tailwind CSS', icon: <SiTailwindcss /> },
	{ name: 'GraphQL', icon: <SiGraphql /> },
	{ name: 'Redux', icon: <SiRedux /> },
	{ name: 'SWR', icon: <SiSwr /> },
	{ name: 'Alpine.js', icon: <SiAlpinedotjs /> },
	{ name: 'jQuery', icon: <SiJquery /> },
	{ name: 'HTML5', icon: <SiHtml5 /> },
	{ name: 'CSS', icon: <SiCss /> },
	{ name: 'Sass', icon: <SiSass /> },
	{ name: 'Less', icon: <SiLess /> },
	{ name: 'PHP', icon: <SiPhp /> },
	{ name: 'Python', icon: <SiPython /> },
	{ name: 'Laravel', icon: <SiLaravel /> },
	{ name: 'Flask', icon: <SiFlask /> },
	{ name: 'FastAPI', icon: <SiFastapi /> },
	{ name: 'REST API', icon: <AiOutlineApi /> },
	{ name: 'MySQL', icon: <SiMysql /> },
	{ name: 'PostgreSQL', icon: <SiPostgresql /> },
	{ name: 'Magento 2', icon: <FaMagento /> },
	{ name: 'ScandiPWA', icon: <MdStorefront /> },
	{ name: 'Hyvä', icon: <MdBolt /> },
	{ name: 'WordPress', icon: <SiWordpress /> },
	{ name: 'WooCommerce', icon: <SiWoocommerce /> },
	{ name: 'Akeneo', icon: <MdInventory2 /> },
	{ name: 'Git', icon: <SiGit /> },
	{ name: 'GitHub Actions', icon: <SiGithubactions /> },
	{ name: 'Docker', icon: <SiDocker /> },
	{ name: 'Jira', icon: <SiJira /> },
	{ name: 'Figma', icon: <SiFigma /> },
	{ name: 'Playwright', icon: <TbTestPipe /> },
	{ name: 'Vitest', icon: <SiVitest /> },
	{ name: 'Testing Library', icon: <SiTestinglibrary /> },
	{ name: 'PHPUnit', icon: <TbTestPipe /> },
	{ name: 'pytest', icon: <SiPytest /> },
	{ name: 'Claude Code', icon: <SiClaude /> },
	{ name: 'Cursor', icon: <SiCursor /> },
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
			'SWR',
			'Alpine.js',
			'jQuery',
			'HTML5',
			'CSS',
			'Sass',
			'Less',
		]),
	},
	{
		key: 'backend',
		items: techByName([
			'PHP',
			'Python',
			'Laravel',
			'Flask',
			'FastAPI',
			'GraphQL',
			'REST API',
			'MySQL',
			'PostgreSQL',
		]),
	},
	{
		key: 'cms',
		items: techByName(['Magento 2', 'ScandiPWA', 'Hyvä', 'WordPress', 'WooCommerce', 'Akeneo']),
	},
	{
		key: 'tools',
		items: techByName([
			'Git',
			'GitHub Actions',
			'Docker',
			'Jira',
			'Figma',
			'Playwright',
			'Vitest',
			'Testing Library',
			'PHPUnit',
			'pytest',
			'Claude Code',
			'Cursor',
		]),
	},
];
