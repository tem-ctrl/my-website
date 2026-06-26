import PageHeader from '@/components/common/PageHeader';
import BlogCard from '@/components/pages/blog/BlogCard';
import { BLOG_POSTS } from '@/utils/constants';
import { getTranslations } from 'next-intl/server';
import { PageProps } from '@/utils/types';
import { Metadata, NextPage } from 'next';

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: 'AboutPage' });

	return { title: t('BlogPage.title'), description: t('BlogPage.description') };
};

const BlogPage: NextPage = () => {
	return (
		<main className="scrollbar-none overflow-y-scroll px-2.5 md:px-25 hFill py-10 flex flex-col gap-12 items-center w-full">
			<PageHeader simpleText="latest" primaryText="posts" tagline="My latest blog articles" />
			<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
				{BLOG_POSTS.map((blog) => (
					<BlogCard key={blog} title={blog} />
				))}
			</div>
		</main>
	);
};

export default BlogPage;
