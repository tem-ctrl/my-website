'use client';

import PageHeader from '@/app/components/common/PageHeader';
import ProjectCard from '@/app/components/pages/blog/BlogCard';
import { getMessages } from '@/app/utils/getMessages';
import { PageProps } from '@/app/utils/types';
import { Metadata } from 'next';
import { createTranslator } from 'next-intl';

export const generateMetadata = async ({ params: { locale } }: PageProps): Promise<Metadata> => {
	const messages = await getMessages(locale);
	const t = createTranslator({ locale, messages });

	return {
		title: t('BlogPage.title'),
		description: t('BlogPage.description'),
	};
};

const BlogPage = () => {
	const blog = [
		'Next new Generation',
		'React Server Components',
		'My Blasting blog post',
		'Next new Generation 5',
		'React Server Components 25',
		'My Blasting blog post 96',
	];

	return (
		<main className="scrollbar-none overflow-y-scroll px-2.5 md:px-[100px] hFill py-10 flex flex-col gap-12 items-center w-full">
			<PageHeader simpleText="latest" primaryText="posts" tagline="My latest blog articles" />
			<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
				{blog.map((project) => (
					<ProjectCard key={project} title={project} />
				))}
			</div>
		</main>
	);
};

export default BlogPage;
