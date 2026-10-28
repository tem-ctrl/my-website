'use client';

import { FC } from 'react';
import { motion } from 'motion/react';

interface MenuToggleProps {
	className?: string;
	isOpen: boolean;
	onToggle: () => void;
}

const transition = { type: 'spring', stiffness: 400, damping: 25 } as const;

// Hamburger icon whose three bars morph into a cross when the menu is open
const MenuToggle: FC<MenuToggleProps> = ({ className = '', isOpen, onToggle }) => {
	return (
		<button
			className={`${className} relative flex size-8.5 cursor-pointer items-center justify-center rounded-full bg-primary text-white`}
			onClick={onToggle}
			name="mobile menu opener"
			aria-label="Menu"
			aria-expanded={isOpen}
		>
			<motion.span
				className="absolute h-0.5 w-4 rounded-full bg-current"
				initial={false}
				animate={isOpen ? { y: 0, rotate: 45 } : { y: -5, rotate: 0 }}
				transition={transition}
			/>
			<motion.span
				className="absolute h-0.5 w-4 rounded-full bg-current"
				initial={false}
				animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
				transition={transition}
			/>
			<motion.span
				className="absolute h-0.5 w-4 rounded-full bg-current"
				initial={false}
				animate={isOpen ? { y: 0, rotate: -45 } : { y: 5, rotate: 0 }}
				transition={transition}
			/>
		</button>
	);
};

export default MenuToggle;
