'use client';

// import { NextPage } from 'next';
import { use } from 'react';
import { useRouter } from '@/app/i18n/navigation';

const BlogDetailsPage = ({ params }: { params: Promise<{ slug: string }> }) => {
	const { slug } = use(params);
	const router = useRouter();

	return (
		<div className="h-[500px] w-[500px] m-auto flex items-center justify-center gap-10">
			<button onClick={() => router.back()}> Retour </button>
			Blog title: {decodeURI(slug)}
		</div>
	);
};

export default BlogDetailsPage;
