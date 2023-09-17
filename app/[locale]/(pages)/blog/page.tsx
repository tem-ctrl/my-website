'use client';

import PageHeader from '@/app/components/common/PageHeader';
import ProjectCard from '@/app/components/pages/blog/BlogCard';

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
