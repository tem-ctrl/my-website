import PageHeader from '@/app/components/common/PageHeader';
import ProjectCard from '@/app/components/pages/projects/ProjectCard';
import { PROJECTS } from '@/app/utils/constants';
import { getMessages } from '@/app/utils/getMessages';
import { PageProps } from '@/app/utils/types';
import { Metadata, NextPage } from 'next';
import { createTranslator, useTranslations } from 'next-intl';

export const generateMetadata = async ({ params: { locale } }: PageProps): Promise<Metadata> => {
	const messages = await getMessages(locale);
	const t = createTranslator({ locale, messages });

	return {
		title: t('ProjectsPage.title'),
		description: t('ProjectsPage.description'),
	};
};

const ProjectsPage: NextPage = () => {
	const t = useTranslations('ProjectsPage');

	return (
		<main className="scrollbar-none overflow-y-scroll px-2.5 md:px-[100px] hFill py-10 flex flex-col gap-12 items-center w-full">
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
