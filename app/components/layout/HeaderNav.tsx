'use client';

import React, { FC, useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import { IoMdMoon } from 'react-icons/io';
import { BsFillSunFill } from 'react-icons/bs';
import { usePathname } from 'next/navigation';
import { VscMenu, VscChromeClose } from 'react-icons/vsc';
import LocaleSwitcher from '@/app/components/layout/LocaleSwitcher';
import NavLink from '@/app/components/layout/NavLink';
import { useTranslations } from 'next-intl';
import { PAGES } from '@/app/config';
import { CustomLink } from '@/app/utils/types';

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
		if (!mounted) return null;
		const currentTheme = theme === 'system' ? systemTheme : theme;

		return (
			<button
				className="text-xl hover:text-primary"
				onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
				name="theme switcher"
			>
				{currentTheme === 'dark' ? <BsFillSunFill /> : <IoMdMoon />}
			</button>
		);
	};

	return (
		<nav
			className={`${className} flex items-center h-full gap-6 smm:relative`}
			onBlur={onStepOut}
			ref={menuRef}
		>
			<div
				className={`
          ${showMenu ? 'smm:flex' : 'smm:hidden'} 
          bg-bgLight dark:bg-bgDark smm:w-[120px] smm:pr-5 smm:pt-3 smm:pb-7 items-end md:items-center smm:absolute smm:top-[55px] smm:right-[-15px] smm:rounded-[4px] flex smm:flex-col justify-center gap-5 md:gap-6
        `}
			>
				{navLinks.map((link) => (
					<NavLink {...link} key={link.text} />
				))}
			</div>
			<div className="w-[20px] flex items-center justify-center">{renderThemeChanger()}</div>
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
