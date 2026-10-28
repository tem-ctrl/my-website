import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import {
	CONTACT_EMAIL,
	EXPERIENCES,
	PROJECTS,
	SKILL_GROUPS,
	SOCIAL_MEDIA,
	cvPath,
	SITE_URL,
} from '@/lib/constants';
import { formatDuration, formatMonth, monthsOfExperience } from '@/lib/experience';
import { PAGES } from '@/lib/routes';
import { localizedUrl } from '@/lib/seo';

// Markdown versions of the site for LLMs and AI agents (https://llmstxt.org), built from the
// same messages and data as the pages so they never drift. English is the reference locale.
const LOCALE = routing.defaultLocale;

type Entry = {
	startDate: string;
	endDate?: string;
	title: string;
	place: string;
	location: string;
	description: string | Record<string, string>;
};

/** Removes the HTML / rich-text tags used in the messages (`<br />`, `<sk>…</sk>`) */
const plain = (text: string) =>
	text
		.replace(/<br\s*\/?>/g, ' ')
		.replace(/<[^>]+>/g, '')
		.replace(/\s+/g, ' ')
		.trim();

/** `<sk>A</sk><sk>B</sk>` → ['A', 'B'] */
const skillList = (text: string) =>
	[...text.matchAll(/<sk>(.*?)<\/sk>/g)].map(([, skill]) => plain(skill));

/** Numbered entries (`experience-1`, `education-2`, …) in message order */
const numbered = (about: Record<string, unknown>, prefix: string) =>
	Object.entries(about)
		.filter(([key]) => new RegExp(`^${prefix}-\\d+$`).test(key))
		.map(([, value]) => value as Entry);

const publicProfiles = () =>
	SOCIAL_MEDIA.filter(({ name }) => name !== 'whatsapp').map(
		({ name, link }) => `- [${name}](${link})`
	);

const loadContent = async () => {
	const t = await getTranslations({ locale: LOCALE });

	return {
		home: t.raw('HomePage') as Record<string, Record<string, string> | string>,
		about: t.raw('AboutPage') as Record<string, unknown>,
		projects: t.raw('projects') as Record<
			string,
			{ title: string; summary: string; description: string; skills: string }
		>,
		filters: t.raw('ProjectsPage.filters') as Record<string, string>,
	};
};

const header = async () => {
	const { home } = await loadContent();
	const hero = home.hero as Record<string, string>;

	return [
		'# Gilbert Temgoua',
		'',
		`> ${home.jobTitle}. ${hero.headline} ${hero.intro}`,
		'',
		`${hero.badge}: full time, part time or freelance, fully remote or onsite. Contact: ${CONTACT_EMAIL}.`,
		`The website is available in English (${localizedUrl('en', '/')}) and French (${localizedUrl('fr', '/')}).`,
	];
};

/** Short index: who Gilbert is and where to find each piece of content */
export const buildLlmsTxt = async () => {
	const { projects, filters } = await loadContent();

	return [
		...(await header()),
		'',
		'## Pages',
		'',
		`- [Home](${localizedUrl(LOCALE, PAGES.home)}): overview, featured projects, tech stack`,
		`- [About me](${localizedUrl(LOCALE, PAGES.aboutMe)}): profile, experience, education, skills`,
		`- [Projects](${localizedUrl(LOCALE, PAGES.projects)}): portfolio of professional and training projects`,
		`- [Contact](${localizedUrl(LOCALE, PAGES.contact)}): contact form and social profiles`,
		`- [Full content](${SITE_URL}/llms-full.txt): this whole website as a single Markdown file`,
		'',
		'## Projects',
		'',
		...PROJECTS.map(
			({ slug, type }) =>
				`- [${projects[slug].title}](${localizedUrl(LOCALE, PAGES.projectDetails(slug))})${
					type ? ` (${filters[type]})` : ''
				}: ${projects[slug].summary}`
		),
		'',
		'## Optional',
		'',
		`- [Resume (PDF, English)](${SITE_URL}${cvPath('en')})`,
		`- [Resume (PDF, French)](${SITE_URL}${cvPath('fr')})`,
		...publicProfiles(),
		'',
	].join('\n');
};

/** Everything a model needs to answer questions about Gilbert, in one file */
export const buildLlmsFullTxt = async () => {
	const { about, projects, filters } = await loadContent();
	const t = await getTranslations({ locale: LOCALE, namespace: 'AboutPage' });
	const professionalInfo = about.professionalInfo as Record<string, string>;
	const skillGroups = about.skillGroups as Record<string, string>;

	const entry = ({ startDate, endDate, title, place, location, description }: Entry) => [
		`### ${title} · ${place}`,
		'',
		`${startDate} – ${endDate ?? 'ongoing'} · ${location}`,
		'',
		...(typeof description === 'string'
			? [plain(description)]
			: Object.values(description).map((item) => `- ${plain(item)}`)),
		'',
	];

	return [
		...(await header()),
		'',
		'## Profile',
		'',
		`- Name: Gilbert Temgoua Donkoo`,
		`- Location: Yaoundé, Cameroon`,
		`- Email: ${CONTACT_EMAIL}`,
		`- Professional experience: ${formatDuration(monthsOfExperience(), LOCALE)}`,
		...['openToWork', 'availability', 'jobtype', 'jobLocation', 'relocateTo'].map(
			(key) => `- ${professionalInfo[key]}: ${professionalInfo[`${key}Value`]}`
		),
		'',
		`## ${t('experienceTitle')}`,
		'',
		...numbered(about, 'experience')
			.map((experience, i) => ({
				...experience,
				startDate: formatMonth(EXPERIENCES[i].start, LOCALE),
				endDate: EXPERIENCES[i].end && formatMonth(EXPERIENCES[i].end, LOCALE),
			}))
			.flatMap(entry),
		`## ${t('educationTitle')}`,
		'',
		...numbered(about, 'education').flatMap(entry),
		'## Skills',
		'',
		...SKILL_GROUPS.map(
			({ key, items }) => `- ${skillGroups[key]}: ${items.map(({ name }) => name).join(', ')}`
		),
		'',
		'## Projects',
		'',
		...PROJECTS.flatMap(({ slug, type, technologies = [], previewLink, githubLink }) => {
			const project = projects[slug];
			const description = plain(project.description ?? '');

			return [
				`### ${project.title}`,
				'',
				`- Type: ${type ? filters[type] : 'n/a'}`,
				`- Page: ${localizedUrl(LOCALE, PAGES.projectDetails(slug))}`,
				...(previewLink?.startsWith('http') ? [`- Live site: ${previewLink}`] : []),
				...(githubLink ? [`- Source code: https://github.com/tem-ctrl/${githubLink}`] : []),
				`- Technologies: ${technologies.join(', ')}`,
				'',
				project.summary,
				'',
				...(description ? [description, ''] : []),
				'Skills applied:',
				'',
				...skillList(project.skills).map((skill) => `- ${skill}`),
				'',
			];
		}),
		'## Contact',
		'',
		`- Email: ${CONTACT_EMAIL}`,
		`- Contact form: ${localizedUrl(LOCALE, PAGES.contact)}`,
		...publicProfiles(),
		'',
	].join('\n');
};
