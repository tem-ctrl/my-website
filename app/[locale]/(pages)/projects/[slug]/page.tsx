import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Suspense, use, ViewTransition } from 'react';
import { useTranslations } from 'next-intl';
import { getLocale, getTranslations } from 'next-intl/server';
import { BsGithub } from 'react-icons/bs';
import { FiArrowLeft, FiArrowRight, FiCheckCircle, FiExternalLink } from 'react-icons/fi';
import Magnetic from '@/components/common/Magnetic';
import Reveal from '@/components/common/Reveal';
import { Link } from '@/i18n/navigation';
import { PROJECTS, projectImageTransitionName } from '@/lib/constants';
import { PAGES } from '@/lib/routes';
import { pageMetadata } from '@/lib/seo';

export const generateStaticParams = () => PROJECTS.map(({ slug }) => ({ slug }));

export const generateMetadata = async ({
	params,
}: PageProps<'/[locale]/projects/[slug]'>): Promise<Metadata> => {
	const { slug } = await params;
	const locale = await getLocale();
	const t = await getTranslations('projects');

	if (!PROJECTS.some((project) => project.slug === slug)) return {};

	return pageMetadata({
		locale,
		path: PAGES.projectDetails(slug),
		title: `${t(`${slug}.title`)} - Gilbert Temgoua`,
		description: t(`${slug}.summary`),
	});
};

const sectionTitle = 'mb-4 text-2xl font-bold';

// Placeholder shown until the slug resolves; project links prefetch the full page, so it rarely shows
const ProjectDetailsSkeleton = () => (
	<div aria-hidden className="flex animate-pulse flex-col gap-12">
		<div className="h-6 w-32 rounded-full bg-foreground/10" />
		<div className="flex flex-col gap-5">
			<div className="h-6 w-24 rounded-full bg-foreground/10" />
			<div className="h-14 w-2/3 rounded-xl bg-foreground/10 md:h-16" />
			<div className="h-6 w-full max-w-3xl rounded-xl bg-foreground/10" />
		</div>
		<div className="aspect-video w-full rounded-2xl bg-foreground/10" />
	</div>
);

const ProjectDetails = ({ params }: Pick<PageProps<'/[locale]/projects/[slug]'>, 'params'>) => {
	const { slug } = use(params);

	const index = PROJECTS.findIndex((item) => item.slug === slug);

	if (index === -1) notFound();

	const project = PROJECTS[index];
	const previous = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];
	const next = PROJECTS[(index + 1) % PROJECTS.length];

	const t = useTranslations(`projects.${slug}`);
	const titles = useTranslations('projects');
	const p = useTranslations('ProjectDetailsPage');
	const filters = useTranslations('ProjectsPage.filters');

	const description = t.raw('description') as string;

	return (
		<>
			<Link
				href={PAGES.projects}
				className="group flex w-fit items-center gap-2 font-medium text-foreground/70 hover:text-primary-text"
			>
				<FiArrowLeft className="transition-transform group-hover:-translate-x-1" />
				{p('back')}
			</Link>

			<Reveal className="flex flex-col gap-5">
				{project.type && (
					<span
						className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${
							{
								professional: 'bg-primary text-white',
								personal: 'border border-primary/50 bg-primary/10 text-primary-text',
								education: 'border border-border bg-background/60',
							}[project.type]
						}`}
					>
						{filters(project.type)}
					</span>
				)}
				<h1 className="text-4xl font-black uppercase md:text-6xl">{t('title')}</h1>
				<p className="max-w-3xl text-lg text-foreground/70 md:text-xl">{t('summary')}</p>
				<div className="flex flex-wrap gap-4">
					{project.previewLink && (
						<Magnetic>
							<a
								href={project.previewLink}
								target="_blank"
								rel="noreferrer"
								className="flex h-12 items-center gap-2 rounded-full bg-primary px-6 font-medium text-white shadow-lg shadow-primary/30 transition-shadow hover:shadow-xl hover:shadow-primary/40"
							>
								{p('visitSite')}
								<FiExternalLink />
							</a>
						</Magnetic>
					)}
					{project.githubLink && (
						<Magnetic>
							<a
								href={`https://github.com/tem-ctrl/${project.githubLink}`}
								target="_blank"
								rel="noreferrer"
								className="flex h-12 items-center gap-2 rounded-full border border-primary/50 px-6 font-medium text-primary-text transition-colors hover:bg-primary hover:text-white"
							>
								<BsGithub />
								{p('viewOnGithub')}
							</a>
						</Magnetic>
					)}
				</div>
			</Reveal>

			<div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border/60 shadow-2xl shadow-primary/10">
				<ViewTransition name={projectImageTransitionName(slug)}>
					<Image
						src={`/assets/images/projects/${project.image}`}
						alt={t('title')}
						fill
						sizes="(min-width: 1152px) 1152px, 100vw"
						loading="eager"
						fetchPriority="high"
						className="object-cover object-top"
					/>
				</ViewTransition>
			</div>

			<div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
				<div className="flex flex-col gap-10">
					{description && (
						<Reveal>
							<h2 className={sectionTitle}>{p('description', { type: project.type ?? '' })}</h2>
							<p
								className="leading-relaxed text-foreground/80"
								dangerouslySetInnerHTML={{ __html: description }}
							/>
						</Reveal>
					)}
					{/* Case-study sections, rendered once their content is added to the messages */}
					{t.has('role') && (
						<Reveal>
							<h2 className={sectionTitle}>{p('role')}</h2>
							<p className="leading-relaxed text-foreground/80">{t('role')}</p>
						</Reveal>
					)}
					{t.has('outcome') && (
						<Reveal>
							<h2 className={sectionTitle}>{p('outcome')}</h2>
							<p className="leading-relaxed text-foreground/80">{t('outcome')}</p>
						</Reveal>
					)}
					<Reveal>
						<h2 className={sectionTitle}>{p('skills', { type: project.type ?? '' })}</h2>
						{/* Short training skills fit two columns; longer contribution bullets read better in one */}
						<ul className={`grid gap-3 ${project.type === 'education' ? 'sm:grid-cols-2' : ''}`}>
							{t.rich('skills', {
								sk: (skill) => (
									<li className="flex items-start gap-3">
										<FiCheckCircle className="mt-1 shrink-0 text-primary-text" />
										<span>{skill}</span>
									</li>
								),
							})}
						</ul>
					</Reveal>
				</div>

				<Reveal className="h-fit lg:sticky lg:top-[calc(var(--spacing-header)+2rem)]">
					<aside className="flex flex-col gap-6 rounded-2xl border border-border/60 bg-background/60 p-6 backdrop-blur-sm">
						<div>
							<h2 className="mb-2 text-sm font-semibold text-foreground/70 uppercase">
								{p('type')}
							</h2>
							<p className="font-medium">{project.type && filters(project.type)}</p>
						</div>
						{project.company && (
							<div>
								<h2 className="mb-2 text-sm font-semibold text-foreground/70 uppercase">
									{p('company')}
								</h2>
								<p className="font-medium">{project.company}</p>
							</div>
						)}
						<div>
							<h2 className="mb-3 text-sm font-semibold text-foreground/70 uppercase">
								{p('technologies')}
							</h2>
							<ul className="flex flex-wrap gap-2">
								{project.technologies?.map((tech) => (
									<li
										key={tech}
										className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary-text"
									>
										{tech}
									</li>
								))}
							</ul>
						</div>
					</aside>
				</Reveal>
			</div>

			<nav className="grid gap-4 border-t border-line pt-10 sm:grid-cols-2">
				<Link
					href={PAGES.projectDetails(previous.slug)}
					prefetch
					className="group flex flex-col gap-1 rounded-2xl border border-border/60 bg-background/60 p-5 backdrop-blur-sm transition-colors hover:border-primary/50"
				>
					<span className="flex items-center gap-2 text-sm text-foreground/70">
						<FiArrowLeft className="transition-transform group-hover:-translate-x-1" />
						{p('previous')}
					</span>
					<span className="text-lg font-bold uppercase group-hover:text-primary-text">
						{titles(`${previous.slug}.title`)}
					</span>
				</Link>
				<Link
					href={PAGES.projectDetails(next.slug)}
					prefetch
					className="group flex flex-col items-end gap-1 rounded-2xl border border-border/60 bg-background/60 p-5 text-right backdrop-blur-sm transition-colors hover:border-primary/50"
				>
					<span className="flex items-center gap-2 text-sm text-foreground/70">
						{p('next')}
						<FiArrowRight className="transition-transform group-hover:translate-x-1" />
					</span>
					<span className="text-lg font-bold uppercase group-hover:text-primary-text">
						{titles(`${next.slug}.title`)}
					</span>
				</Link>
			</nav>
		</>
	);
};

// `params` must be read inside Suspense, even with generateStaticParams, to keep navigations instant
const ProjectDetailsPage = ({ params }: PageProps<'/[locale]/projects/[slug]'>) => (
	<main className="mx-auto flex w-full max-w-6xl flex-col gap-12 py-10">
		<Suspense fallback={<ProjectDetailsSkeleton />}>
			<ProjectDetails params={params} />
		</Suspense>
	</main>
);

export default ProjectDetailsPage;
