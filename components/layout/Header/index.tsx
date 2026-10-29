import { FC, Suspense } from 'react';
import { PAGES } from '@/lib/routes';
import { Link } from '@/i18n/navigation';
import Logo from '@/components/common/Logo';
import HeaderNav from '@/components/layout/Header/HeaderNav';

const Header: FC = () => {
	return (
		<header className="fixed inset-x-0 top-0 z-20 mx-auto flex h-header w-full items-center justify-between bg-background/80 px-5 shadow-sm shadow-line backdrop-blur-md md:px-10 lg:px-14">
			<Link href={PAGES.home} aria-label="Gilbert Temgoua, Web developer">
				<Logo />
			</Link>
			{/* HeaderNav reads the pathname: on unknown routes it streams in after the shell */}
			<Suspense>
				<HeaderNav />
			</Suspense>
		</header>
	);
};

export default Header;
