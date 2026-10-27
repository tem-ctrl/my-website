import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { use } from 'react';
import { useTranslations } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import PrimaryButtonLink from '@/components/common/PrimaryButtonLink';
import { PROJECTS } from '@/lib/constants';
import { BsGithub } from 'react-icons/bs';

export const generateStaticParams = () => PROJECTS.map(({ slug }) => ({ slug }));

export const generateMetadata = async ({
	params,
}: PageProps<'/[locale]/projects/[slug]'>): Promise<Metadata> => {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: 'ProjectsPage' });

	return {
		title: t('title'),
		description: t('description'),
	};
};

const ProjectDetailsPage = ({ params }: PageProps<'/[locale]/projects/[slug]'>) => {
	const { locale, slug } = use(params);

	setRequestLocale(locale);

	const project = PROJECTS.find((item) => item.slug === slug);

	if (!project) notFound();

	const t = useTranslations(`projects.${slug}`);
	const p = useTranslations('ProjectDetailsPage');
	const commonClassNames = 'text-xl underline font-medium mb-2';

	return (
		<main className="grid w-full grid-cols-1 gap-5 py-10 lg:grid-cols-2 lg:gap-10">
			<img
				src={`/assets/images/projects/${slug}.png`}
				alt={t('title')}
				className="w-full rounded-lg"
			/>
			<div className="flex flex-col gap-5 lg:gap-3">
				<h1 className="text-3xl font-bold text-primary uppercase max-lg:text-center">
					{t('title')}
				</h1>
				<div className="flex gap-3 lg:flex-col">
					{project.githubLink && (
						<PrimaryButtonLink
							text={p('viewOnGithub')}
							href={`https://github.com/tem-ctrl/${project.githubLink}`}
							icon={<BsGithub />}
							className="w-full lg:w-fit"
							newTab
						/>
					)}
					{project.previewLink && (
						<PrimaryButtonLink
							text={p('visitSite')}
							href={project.previewLink}
							className="w-full lg:w-fit"
							newTab
						/>
					)}
				</div>
				<section>
					<h2 className={commonClassNames}>{p('technologies')}</h2>
					<ul className="flex flex-wrap items-center gap-3">
						{project.technologies?.map((tech) => (
							<li key={tech} className="font-medium">
								{tech}
							</li>
						))}
					</ul>
				</section>
			</div>
			<div className="col-span-full grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-10">
				<section>
					<h2 className={commonClassNames}>{p('description', { type: project.type ?? '' })}</h2>
					<p dangerouslySetInnerHTML={{ __html: t.raw('description') }} />
				</section>
				<div>
					<h2 className={commonClassNames}>{p('skills')}</h2>
					<ul className="ml-2 list-outside list-disc pl-3">
						{t.rich('skills', {
							sk: (skill) => <li>{skill}</li>,
						})}
					</ul>
				</div>
			</div>
		</main>
	);
};

export default ProjectDetailsPage;
