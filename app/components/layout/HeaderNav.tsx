'use client';

import React, { FC, useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs';
import { usePathname } from 'next/navigation';
import { VscMenu, VscChromeClose } from 'react-icons/vsc';
import LocaleSwitcher from '@/components/layout/LocaleSwitcher';
import NavLink from '@/components/layout/NavLink';
import { useTranslations } from 'next-intl';
import { PAGES } from '@/config';
import { CustomLink } from '@/utils/types';

interface HeaderNavProps {
	className?: string;
}

const HeaderNav: FC<HeaderNavProps> = ({ className = '' }) => {
	const { systemTheme, theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const pathName = usePathname();
	const [showMenu, setShowMenu] = useState(false);
	const menuRef = useRef<HTMLElement>(null);
	const t = useTranslations('HeaderNav');

	const navLinks: CustomLink[] = [
		{
			text: t('home'),
			href: PAGES.home,
		},
		{
			text: t('about'),
			href: PAGES.aboutMe,
		},
		{
			text: t('projects'),
			href: PAGES.projects,
		},
		// {
		// 	text: t('blog'),
		// 	href: PAGES.blog,
		// },
		{
			text: t('contact'),
			href: PAGES.contact,
		},
	];

	useEffect(() => {
		setMounted(true);
	}, []);
	useEffect(() => {
		setShowMenu(false);
	}, [pathName]);

	const onStepOut = () => {
		setTimeout(() => {
			!menuRef.current?.contains(document.activeElement) && setShowMenu(false);
		}, 200);
	};

	const renderThemeChanger = () => {
		if (!mounted) return <BsFillSunFill className="text-primary/40 text-lg" />;
		const currentTheme = theme === 'system' ? systemTheme : theme;

		return (
			<button
				className="text-lg text-primary"
				onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
				name="theme switcher"
			>
				{currentTheme === 'dark' ? <BsFillSunFill /> : <BsMoonFill className="text-base" />}
			</button>
		);
	};

	return (
		<nav
			className={`${className} flex items-center h-full gap-6 relative md:static`}
			onBlur={onStepOut}
			ref={menuRef}
		>
			<div
				className={`
          ${showMenu ? 'flex' : 'hidden md:flex'}
          bg-bgLight dark:bg-bgDark w-30 md:w-fit pr-5 pt-3 md:pt-0 pb-7 md:pb-0 items-end md:items-center absolute md:static top-13.75 md:top-0 -right-3.75 md:right-0 rounded-sm md:rounded-none flex flex-col md:flex-row justify-center gap-5 md:gap-6
        `}
			>
				{navLinks.map((link) => (
					<NavLink {...link} key={link.text} />
				))}
			</div>
			<div className="w-5 flex items-center justify-center">{renderThemeChanger()}</div>
			<LocaleSwitcher />
			<button
				className="p-1.5 md:hidden text-[21px] text-myPrimary rounded-full bg-primary text-white cursor-pointer"
				onClick={() => setShowMenu(!showMenu)}
				name="mobile menu opener"
			>
				{showMenu ? <VscChromeClose /> : <VscMenu />}
			</button>
		</nav>
	);
};

export default HeaderNav;
