import React, { FC } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface NavLinkProps {
	className?: string;
	href: string;
	text: string;
}

const NavLink: FC<NavLinkProps> = ({ className = '', href, text }) => {
	const isActive = usePathname() === href;
	const activeClass = isActive ? 'underline decoration-4 underline-offset-8 text-yellow-600' : '';

	return (
		<Link
			className={`${className} ${activeClass} hover:text-yellow-600 inline-block uppercase text-sm`}
			href={href}
		>
			{text}
		</Link>
	);
};

export default NavLink;
