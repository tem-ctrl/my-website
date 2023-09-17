import Link from 'next-intl/link';

const NotFound = () => {
	return (
		<div className="w-full flex flex-col items-center gap-10 text-2xl">
			<h2 className="text-3xl">Not Found</h2>
			<p>Could not find requested resource</p>
			<Link href="/">Return Home</Link>
		</div>
	);
};

export default NotFound;
