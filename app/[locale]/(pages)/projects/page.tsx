import { Metadata } from 'next';
import { use } from 'react';
import { useTranslations } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import PageHeader from '@/components/common/PageHeader';
import ProjectCard from '@/components/pages/projects/ProjectCard';
import { PROJECTS } from '@/lib/constants';

export const generateMetadata = async ({
	params,
}: PageProps<'/[locale]/projects'>): Promise<Metadata> => {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: 'ProjectsPage' });

	return {
		title: t('title'),
		description: t('description'),
	};
};

const ProjectsPage = ({ params }: PageProps<'/[locale]/projects'>) => {
	const { locale } = use(params);

	setRequestLocale(locale);

	const t = useTranslations('ProjectsPage');

	return (
		<main className="flex min-h-page w-full flex-col items-center gap-12 px-2.5 py-10 md:px-25">
			<PageHeader
				simpleText={t('PageHeader.simpleText')}
				primaryText={t('PageHeader.primaryText')}
				tagline={t('PageHeader.tagline')}
			/>
			<div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
				{PROJECTS.map((project) => (
					<ProjectCard key={`project-${project.title}}`} {...project} />
				))}
			</div>
		</main>
	);
};

export default ProjectsPage;
