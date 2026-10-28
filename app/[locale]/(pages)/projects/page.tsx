import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getLocale, getTranslations } from 'next-intl/server';
import { pageMetadata } from '@/lib/seo';
import { PAGES } from '@/lib/routes';
import PageHeader from '@/components/common/PageHeader';
import ProjectsExplorer from '@/components/pages/projects/ProjectsExplorer';

export const generateMetadata = async (): Promise<Metadata> => {
	const locale = await getLocale();
	const t = await getTranslations('ProjectsPage');

	return pageMetadata({
		locale,
		path: PAGES.projects,
		title: t('title'),
		description: t('description'),
	});
};

const ProjectsPage = () => {
	const t = useTranslations('ProjectsPage');

	return (
		<main className="mx-auto flex min-h-page w-full max-w-6xl flex-col items-center gap-12 py-10">
			<PageHeader
				simpleText={t('PageHeader.simpleText')}
				primaryText={t('PageHeader.primaryText')}
				tagline={t('PageHeader.tagline')}
			/>
			<ProjectsExplorer />
		</main>
	);
};

export default ProjectsPage;
