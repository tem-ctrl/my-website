import PageHeader from '@/components/common/PageHeader';
import ProjectCard from '@/components/pages/projects/ProjectCard';
import { PROJECTS } from '@/utils/constants';
import { getTranslations } from 'next-intl/server';
import { PageProps } from '@/utils/types';
import { Metadata, NextPage } from 'next';
import { useTranslations } from 'next-intl';

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: 'ProjectsPage' });

	return { title: t('title'), description: t('description') };
};

const ProjectsPage: NextPage = () => {
	const t = useTranslations('ProjectsPage');

	return (
		<main className="scrollbar-none overflow-y-scroll px-2.5 md:px-25 hFill py-10 flex flex-col gap-12 items-center w-full">
			<PageHeader
				simpleText={t('PageHeader.simpleText')}
				primaryText={t('PageHeader.primaryText')}
				tagline={t('PageHeader.tagline')}
			/>
			<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5">
				{PROJECTS.map((project) => (
					<ProjectCard key={`project-${project.title}}`} {...project} />
				))}
			</div>
		</main>
	);
};

export default ProjectsPage;
