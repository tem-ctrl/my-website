import { FC } from 'react';
import { PAGES } from '@/app/config';
import Link from 'next/link';
import HeaderNav from '@/app/components/layout/HeaderNav';

const Header: FC = () => {
	return (
		<header className="fixed bg-opacity-100 z-10 top-0 flex justify-between items-center h-[60px] w-full px-2.5 md:px-10 shadow-sm shadow-gray-300 dark:shadow-gray-800">
			<div className="flex justify-center items-center">
				<Link href={PAGES.home}>Temgoua</Link>
			</div>
			<HeaderNav />
		</header>
	);
};

export default Header;
