import { Link } from '@/i18n/navigation';

const NotFound = () => {
	return (
		<div className="flex w-full flex-col items-center gap-10 text-2xl">
			<h2 className="text-3xl">Not Found</h2>
			<p>Could not find requested resource</p>
			<Link href="/">Return Home</Link>
		</div>
	);
};

export default NotFound;
