'use client';

import { ReactNode, FC, useRef } from 'react';
import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react';

interface TimelineBlockProps {
	className?: string;
	children?: ReactNode;
	title: string;
}

// The purple line draws itself as the block scrolls through the viewport
const TimelineBlock: FC<TimelineBlockProps> = ({ className = '', children = <></>, title }) => {
	const ref = useRef<HTMLDivElement>(null);
	const reduceMotion = useReducedMotion();
	const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 60%'] });
	const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

	return (
		<section className={`${className} flex flex-col gap-10`}>
			<h2 className="text-2xl font-black uppercase">{title}</h2>
			<div ref={ref} className="relative flex flex-col gap-8">
				<div aria-hidden className="absolute inset-y-0 left-0 w-0.5 rounded-full bg-line" />
				<motion.div
					aria-hidden
					className="absolute inset-y-0 left-0 w-0.5 origin-top rounded-full bg-linear-to-b from-primary to-accent"
					style={{ scaleY: reduceMotion ? 1 : scaleY }}
				/>
				{children}
			</div>
		</section>
	);
};

export default TimelineBlock;
