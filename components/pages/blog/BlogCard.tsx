'use client';

import { PAGES } from '@/lib/routes';
import { useRouter } from '@/i18n/navigation';
import React, { FC } from 'react';

interface BlogCardProps {
	className?: string;
	title: string;
}

const BlogCard: FC<BlogCardProps> = ({ className = '', title }) => {
	const router = useRouter();

	return (
		<div
			className={`${className} h-96 rounded-md border-2 border-primary text-2xl text-primary hover:bg-primary hover:text-white`}
		>
			<button
				className="flex h-full w-full items-center justify-center"
				onClick={() => router.push(PAGES.blogDetails(title))}
			>
				{title}
			</button>
		</div>
	);
};

export default BlogCard;
