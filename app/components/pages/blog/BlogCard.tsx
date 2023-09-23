'use client';

import { PAGES } from '@/app/config';
import { useRouter } from 'next-intl/client';
import React, { FC } from 'react';

interface BlogCardProps {
	className?: string;
	title: string;
}

const BlogCard: FC<BlogCardProps> = ({ className = '', title }) => {
	const router = useRouter();

	return (
		<div
			className={`${className} h-96 rounded-md text-2xl text-primary border-2 border-primary hover:bg-primary hover:text-white`}
		>
			<button
				className="w-full h-full flex justify-center items-center"
				onClick={() => router.push(PAGES.blogDetails(title))}
			>
				{title}
			</button>
		</div>
	);
};

export default BlogCard;
