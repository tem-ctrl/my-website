'use client';

import { FC } from 'react';
import { PAGES } from '@/config';
import { Link } from '@/i18n/navigation';
import HeaderNav from '@/components/layout/Header/HeaderNav';

const Header: FC = () => {
	return (
		<header className="fixed z-50 top-0 flex justify-between items-center h-15 w-full px-2.5 md:px-10 lg:px-14 shadow-sm shadow-gray-300 dark:shadow-gray-800">
			<Link href={PAGES.home} className="flex justify-center items-center w-20 md:w-30">
				<img
					src="/assets/images/logo.png"
					alt="Gilbert Temgoua, Web developer"
					className="w-full"
				/>
			</Link>
			<HeaderNav />
		</header>
	);
};

export default Header;
