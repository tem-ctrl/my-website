'use client';

import { FC, MouseEvent, ReactNode } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

interface MagneticProps {
	className?: string;
	children: ReactNode;
	strength?: number;
}

// Pulls its content slightly towards the cursor while hovered
const Magnetic: FC<MagneticProps> = ({ className = '', children, strength = 0.3 }) => {
	const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 });
	const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 });

	const onMouseMove = (event: MouseEvent<HTMLDivElement>) => {
		const { left, top, width, height } = event.currentTarget.getBoundingClientRect();

		x.set((event.clientX - left - width / 2) * strength);
		y.set((event.clientY - top - height / 2) * strength);
	};

	const onMouseLeave = () => {
		x.set(0);
		y.set(0);
	};

	return (
		<motion.div
			className={`${className} inline-block`}
			style={{ x, y }}
			onMouseMove={onMouseMove}
			onMouseLeave={onMouseLeave}
		>
			{children}
		</motion.div>
	);
};

export default Magnetic;
