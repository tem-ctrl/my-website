import { FC } from 'react';
import { PAGES } from '@/app/config';
import Link from 'next-intl/link';
import HeaderNav from '@/app/components/layout/HeaderNav';

const Header: FC = () => {
	return (
		<header className="fixed bg-bgLight/95 dark:bg-bgDark/95 z-20 top-0 flex justify-between items-center h-[60px] w-full px-2.5 md:px-10 shadow-sm shadow-gray-300 dark:shadow-gray-800">
			<Link href={PAGES.home} className="flex justify-center items-center w-20 md:w-[120px]">
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
