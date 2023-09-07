'use client';

import { FC, useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { IoMdMoon } from 'react-icons/io';
import { BsFillSunFill } from 'react-icons/bs';
import { PAGES } from '@/app/config';
import NavLink from '@/app/components/common/NavLink';

const Header: FC = () => {
	const { systemTheme, theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const renderThemeChanger = () => {
		if (!mounted) return null;
		const currentTheme = theme === 'system' ? systemTheme : theme;

		return (
			<button
				className="text-primary"
				onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
			>
				{currentTheme === 'dark' ? <BsFillSunFill /> : <IoMdMoon />}
			</button>
		);
	};

	return (
		<header className="flex justify-between items-center h-[50px] w-full">
			<h2>Temgoua</h2>
			<nav className="flex gap-5 pr-10">
				<NavLink href={PAGES.home} text="Accueil" />
				<NavLink href={PAGES.blog} text="Blog" />
				<NavLink href={PAGES.projects} text="Projects" />
				<NavLink href={PAGES.contact} text="Contact" />
				<span>{renderThemeChanger()}</span>
			</nav>
		</header>
	);
};

export default Header;
