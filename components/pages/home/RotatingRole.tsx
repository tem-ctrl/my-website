'use client';

import { FC, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

interface RotatingRoleProps {
	roles: string[];
	interval?: number;
}

// Cycles through `roles`, sliding each one in from below
const RotatingRole: FC<RotatingRoleProps> = ({ roles, interval = 2500 }) => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), interval);

		return () => clearInterval(id);
	}, [roles.length, interval]);

	return (
		<span className="relative inline-flex overflow-hidden align-bottom">
			<AnimatePresence mode="wait" initial={false}>
				<motion.span
					key={roles[index]}
					className="inline-block font-semibold text-primary-text"
					initial={{ y: '100%', opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: '-100%', opacity: 0 }}
					transition={{ duration: 0.35, ease: 'easeOut' }}
				>
					{roles[index]}
				</motion.span>
			</AnimatePresence>
		</span>
	);
};

export default RotatingRole;
