import { use } from 'react';
import { setRequestLocale } from 'next-intl/server';
import BlogDetails from '@/components/pages/blog/BlogDetails';
import { BLOG_POSTS } from '@/lib/constants';

export const generateStaticParams = () => BLOG_POSTS.map((slug) => ({ slug }));

const BlogDetailsPage = ({ params }: PageProps<'/[locale]/blog/[slug]'>) => {
	const { locale, slug } = use(params);

	setRequestLocale(locale);

	return <BlogDetails slug={slug} />;
};

export default BlogDetailsPage;
