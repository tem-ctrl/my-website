'use client';

import { FC, ReactNode } from 'react';
import { motion } from 'motion/react';

interface RevealProps {
	className?: string;
	children: ReactNode;
	delay?: number;
}

const Reveal: FC<RevealProps> = ({ className = '', children, delay = 0 }) => {
	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-80px' }}
			transition={{ duration: 0.6, delay, ease: 'easeOut' }}
		>
			{children}
		</motion.div>
	);
};

export default Reveal;
