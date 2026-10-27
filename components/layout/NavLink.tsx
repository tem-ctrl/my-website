'use client';

import React, { FC } from 'react';
import { Link, usePathname } from '@/i18n/navigation';

interface NavLinkProps {
	className?: string;
	href: string;
	text: string;
}

const NavLink: FC<NavLinkProps> = ({ className = '', href, text }) => {
	const pathname = usePathname();
	const isActive = pathname === href;

	const activeClass = isActive
		? 'underline decoration-4 underline-offset-4 md:underline-offset-8 text-primary'
		: '';

	return (
		<Link
			className={`${className} ${activeClass} inline-block text-sm font-medium uppercase hover:text-primary`}
			href={href}
		>
			{text}
		</Link>
	);
};

export default NavLink;
