import PageHeader from '@/app/components/common/PageHeader';
import { getMessages } from '@/app/utils/getMessages';
import { PageProps } from '@/app/utils/types';
import { Metadata } from 'next';
import { createTranslator } from 'next-intl';

export const generateMetadata = async ({ params: { locale } }: PageProps): Promise<Metadata> => {
	const messages = await getMessages(locale);
	const t = createTranslator({ locale, messages });

	return {
		title: t('ProjectsPage.title'),
		description: t('ProjectsPage.description'),
	};
};

const ProjectsPage = () => {
	return (
		<main className="scrollbar-none overflow-y-scroll px-2.5 md:px-[100px] hFill py-10 flex flex-col gap-12 items-center w-full">
			<PageHeader simpleText="My" primaryText="portfolio" tagline="A few of my latest projects" />
			<h1 className="text-3xl">Welcome to the projects page</h1>
		</main>
	);
};

export default ProjectsPage;
