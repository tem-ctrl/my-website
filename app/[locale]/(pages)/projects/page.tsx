import { Metadata } from 'next';
import { use } from 'react';
import { useTranslations } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import PageHeader from '@/components/common/PageHeader';
import ProjectsExplorer from '@/components/pages/projects/ProjectsExplorer';

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
