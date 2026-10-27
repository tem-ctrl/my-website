import { FC, Suspense } from 'react';
import { PAGES } from '@/lib/routes';
import { Link } from '@/i18n/navigation';
import HeaderNav from '@/components/layout/HeaderNav';

const Header: FC = () => {
	return (
		<header className="fixed inset-x-0 top-0 z-20 mx-auto flex h-header w-full items-center justify-between bg-background/80 px-2.5 shadow-sm shadow-line backdrop-blur-md md:px-10 lg:px-14">
			<Link href={PAGES.home} className="flex w-20 items-center justify-center md:w-30">
				<img
					src="/assets/images/logo.png"
					alt="Gilbert Temgoua, Web developer"
					className="w-full"
				/>
			</Link>
			{/* HeaderNav reads the pathname: on unknown routes it streams in after the shell */}
			<Suspense>
				<HeaderNav />
			</Suspense>
		</header>
	);
};

export default Header;
