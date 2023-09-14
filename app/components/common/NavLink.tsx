import React, { FC } from 'react';
import { usePathname } from 'next-intl/client';
import Link from 'next-intl/link';

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
			className={`${className} ${activeClass} hover:text-primary font-medium inline-block uppercase text-sm`}
			href={href}
		>
			{text}
		</Link>
	);
};

export default NavLink;
