'use client';

import React, { FC, KeyboardEvent, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import LocaleSwitch from '@/components/layout/LocaleSwitch';
import MenuToggle from '@/components/layout/MenuToggle';
import NavLink from '@/components/layout/NavLink';
import ThemeSwitcher from '@/components/layout/ThemeSwitcher';
import { usePathname } from '@/i18n/navigation';
import { PAGES } from '@/lib/routes';
import { CustomLink } from '@/lib/types';

interface HeaderNavProps {
	className?: string;
}

const menuItem = {
	closed: { opacity: 0, x: 16 },
	open: { opacity: 1, x: 0 },
};

const HeaderNav: FC<HeaderNavProps> = ({ className = '' }) => {
	const pathName = usePathname();
	const [prevPathName, setPrevPathName] = useState(pathName);
	const [showMenu, setShowMenu] = useState(false);
	const [hoveredHref, setHoveredHref] = useState<string | null>(null);
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
		{
			text: t('contact'),
			href: PAGES.contact,
		},
	];

	// Detail pages (e.g. /projects/kasa) keep their section highlighted
	const isActive = (href: string) =>
		href === PAGES.home ? pathName === href : pathName.startsWith(href);

	// The indicator follows the hovered link and falls back to the active one
	const highlightedHref = hoveredHref ?? navLinks.find(({ href }) => isActive(href))?.href;

	const onStepOut = () => {
		setTimeout(() => {
			if (!menuRef.current?.contains(document.activeElement)) setShowMenu(false);
		}, 200);
	};

	const onKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Escape') setShowMenu(false);
	};

	return (
		<nav
			className={`${className} flex h-full items-center gap-6 max-md:relative`}
			onBlur={onStepOut}
			onKeyDown={onKeyDown}
			ref={menuRef}
		>
			{/* Desktop links with the sliding indicator */}
			<ul
				className="flex items-center gap-6 max-md:hidden"
				onMouseLeave={() => setHoveredHref(null)}
			>
				{navLinks.map(({ href, text }) => (
					<li key={href}>
						<NavLink
							href={href}
							text={text}
							isActive={isActive(href)}
							indicatorId="desktop-nav-indicator"
							showIndicator={highlightedHref === href}
							onMouseEnter={() => setHoveredHref(href)}
						/>
					</li>
				))}
			</ul>

			<div className="flex w-5 items-center justify-center">
				<ThemeSwitcher />
			</div>
			<LocaleSwitch />
			<MenuToggle className="md:hidden" isOpen={showMenu} onToggle={() => setShowMenu(!showMenu)} />

			{/* Mobile menu: springs open from the toggle, links slide in one after another */}
			<AnimatePresence>
				{showMenu && (
					<motion.div
						key="mobile-menu"
						className="absolute top-full right-0 mt-2 w-56 origin-top-right rounded-2xl border border-border/60 bg-background/95 p-2 shadow-xl shadow-primary/10 backdrop-blur-md md:hidden"
						initial={{ opacity: 0, scale: 0.9, y: -8 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.9, y: -8 }}
						transition={{ type: 'spring', stiffness: 400, damping: 30 }}
					>
						<motion.ul
							className="flex flex-col"
							initial="closed"
							animate="open"
							variants={{ open: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } } }}
						>
							{navLinks.map(({ href, text }) => (
								<motion.li key={href} variants={menuItem}>
									<NavLink
										className={`w-full rounded-xl px-4 py-3 hover:bg-primary/10 ${
											isActive(href) ? 'bg-primary/10' : ''
										}`}
										href={href}
										text={text}
										isActive={isActive(href)}
										onClick={() => setShowMenu(false)}
									/>
								</motion.li>
							))}
						</motion.ul>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default HeaderNav;
