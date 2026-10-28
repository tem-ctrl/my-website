'use client';

import { FC, MouseEventHandler } from 'react';
import { motion } from 'motion/react';
import { Link } from '@/i18n/navigation';

interface NavLinkProps {
	className?: string;
	href: string;
	text: string;
	isActive?: boolean;
	indicatorId?: string;
	showIndicator?: boolean;
	onClick?: MouseEventHandler<HTMLAnchorElement>;
	onMouseEnter?: MouseEventHandler<HTMLAnchorElement>;
}

const NavLink: FC<NavLinkProps> = ({
	className = '',
	href,
	text,
	isActive = false,
	indicatorId,
	showIndicator = false,
	onClick,
	onMouseEnter,
}) => {
	return (
		<Link
			className={`${className} ${isActive ? 'text-primary-text' : ''} relative inline-block text-sm font-medium uppercase transition-colors hover:text-primary-text`}
			href={href}
			onClick={onClick}
			onMouseEnter={onMouseEnter}
		>
			{text}
			{showIndicator && indicatorId && (
				// Same layoutId across links: Motion animates the bar from one link to the next
				<motion.span
					layoutId={indicatorId}
					className="absolute inset-x-0 -bottom-2 h-1 rounded-full bg-primary"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ type: 'spring', stiffness: 500, damping: 35 }}
				/>
			)}
		</Link>
	);
};

export default NavLink;
