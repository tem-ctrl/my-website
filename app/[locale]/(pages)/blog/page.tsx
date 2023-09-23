import PageHeader from '@/app/components/common/PageHeader';
import BlogCard from '@/app/components/pages/blog/BlogCard';
import { BLOG_POSTS } from '@/app/utils/constants';
import { getMessages } from '@/app/utils/getMessages';
import { PageProps } from '@/app/utils/types';
import { Metadata, NextPage } from 'next';
import { createTranslator } from 'next-intl';

export const generateMetadata = async ({ params: { locale } }: PageProps): Promise<Metadata> => {
	const messages = await getMessages(locale);
	const t = createTranslator({ locale, messages });

	return {
		title: t('BlogPage.title'),
		description: t('BlogPage.description'),
	};
};

const BlogPage: NextPage = () => {
	return (
		<main className="scrollbar-none overflow-y-scroll px-2.5 md:px-[100px] hFill py-10 flex flex-col gap-12 items-center w-full">
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
