'use client';

import React, { FC, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { VscMenu, VscChromeClose } from 'react-icons/vsc';
import LocaleSwitcher from '@/components/layout/LocaleSwitcher';
import NavLink from '@/components/layout/NavLink';
import ThemeSwitcher from '@/components/layout/ThemeSwitcher';
import { useTranslations } from 'next-intl';
import { PAGES } from '@/lib/routes';
import { CustomLink } from '@/lib/types';

interface HeaderNavProps {
	className?: string;
}

const HeaderNav: FC<HeaderNavProps> = ({ className = '' }) => {
	const pathName = usePathname();
	const [prevPathName, setPrevPathName] = useState(pathName);
	const [showMenu, setShowMenu] = useState(false);
	const menuRef = useRef<HTMLElement>(null);
	const t = useTranslations('HeaderNav');

	// Close the mobile menu on navigation
	if (pathName !== prevPathName) {
		setPrevPathName(pathName);
		setShowMenu(false);
	}

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

	const onStepOut = () => {
		setTimeout(() => {
			if (!menuRef.current?.contains(document.activeElement)) setShowMenu(false);
		}, 200);
	};

	return (
		<nav
			className={`${className} flex h-full items-center gap-6 max-md:relative`}
			onBlur={onStepOut}
			ref={menuRef}
		>
			<div
				className={`${showMenu ? 'max-md:flex' : 'max-md:hidden'} flex items-end justify-center gap-5 bg-background max-md:absolute max-md:top-13.75 max-md:-right-3.75 max-md:w-30 max-md:flex-col max-md:rounded-sm max-md:pt-3 max-md:pr-5 max-md:pb-7 md:items-center md:gap-6`}
			>
				{navLinks.map((link) => (
					<NavLink {...link} key={link.text} />
				))}
			</div>
			<div className="flex w-5 items-center justify-center">
				<ThemeSwitcher />
			</div>
			<LocaleSwitcher />
			<button
				className="cursor-pointer rounded-full bg-primary p-1.5 text-[21px] text-white md:hidden"
				onClick={() => setShowMenu(!showMenu)}
				name="mobile menu opener"
			>
				{showMenu ? <VscChromeClose /> : <VscMenu />}
			</button>
		</nav>
	);
};

export default HeaderNav;
