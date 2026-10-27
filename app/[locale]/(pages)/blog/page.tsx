import { Metadata } from 'next';
import { use } from 'react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import PageHeader from '@/components/common/PageHeader';
import BlogCard from '@/components/pages/blog/BlogCard';
import { BLOG_POSTS } from '@/lib/constants';

export const generateMetadata = async ({
	params,
}: PageProps<'/[locale]/blog'>): Promise<Metadata> => {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: 'BlogPage' });

	return {
		title: t('title'),
		description: t('description'),
	};
};

const BlogPage = ({ params }: PageProps<'/[locale]/blog'>) => {
	const { locale } = use(params);

	setRequestLocale(locale);

	return (
		<main className="scrollbar-none flex h-page w-full flex-col items-center gap-12 px-2.5 py-10 md:px-25">
			<PageHeader simpleText="latest" primaryText="posts" tagline="My latest blog articles" />
			<div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
				{BLOG_POSTS.map((blog) => (
					<BlogCard key={blog} title={blog} />
				))}
			</div>
		</main>
	);
};

export default BlogPage;
