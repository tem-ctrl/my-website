'use client';

// import { NextPage } from 'next';
import { useRouter } from 'next-intl/client';

const BlogDetailsPage = ({ params }: { params: { slug: string } }) => {
	const router = useRouter();

	return (
		<div className="h-[500px] w-[500px] m-auto flex items-center justify-center gap-10">
			<button onClick={() => router.back()}> Retour </button>
			Blog title: {decodeURI(params.slug)}
		</div>
	);
};

export default BlogDetailsPage;
