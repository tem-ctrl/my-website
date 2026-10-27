'use client';

import { useRouter } from '@/i18n/navigation';
import React, { FC } from 'react';

interface BlogDetailsProps {
	slug: string;
}

const BlogDetails: FC<BlogDetailsProps> = ({ slug }) => {
	const router = useRouter();

	return (
		<div className="m-auto flex h-125 w-125 items-center justify-center gap-10">
			<button onClick={() => router.back()}> Retour </button>
			Blog title: {decodeURI(slug)}
		</div>
	);
};

export default BlogDetails;
