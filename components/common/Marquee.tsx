'use client';

import { FC, ReactNode, useEffect, useRef, useState } from 'react';
import { motion, useAnimationFrame, useMotionValue, useSpring } from 'motion/react';

interface MarqueeProps {
	className?: string;
	/** List items (`<li>`) to scroll */
	children: ReactNode;
	/** Speed in pixels per second */
	speed?: number;
	reverse?: boolean;
}

// Endless horizontal strip. The items are repeated as many times as needed to cover the
// container, and the offset wraps around after exactly one copy, so the loop has no visible
// restart. Hovering eases the strip to a stop. With reduced motion the items simply wrap.
const Marquee: FC<MarqueeProps> = ({ className = '', children, speed = 40, reverse = false }) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const copyRef = useRef<HTMLUListElement>(null);
	const copyWidth = useRef(0);
	const [copies, setCopies] = useState(2);

	const x = useMotionValue(0);
	const speedFactor = useSpring(1, { stiffness: 80, damping: 20 });

	useEffect(() => {
		const container = containerRef.current;
		const copy = copyRef.current;

		if (!container || !copy) return;

		const observer = new ResizeObserver(() => {
			copyWidth.current = copy.offsetWidth;
			setCopies(Math.max(2, Math.ceil(container.offsetWidth / copy.offsetWidth) + 1));
		});

		observer.observe(container);
		observer.observe(copy);

		return () => observer.disconnect();
	}, []);

	useAnimationFrame((_, delta) => {
		const width = copyWidth.current;

		if (!width || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		const distance = ((reverse ? 1 : -1) * speed * speedFactor.get() * delta) / 1000;

		// Keep the offset within [-width, 0): one copy further is the exact same picture
		x.set(((((x.get() + distance) % width) + width) % width) - width);
	});

	return (
		<div
			ref={containerRef}
			className={`${className} overflow-hidden mask-[linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)] motion-reduce:mask-none`}
			onMouseEnter={() => speedFactor.set(0)}
			onMouseLeave={() => speedFactor.set(1)}
		>
			<motion.div
				className="flex w-max motion-reduce:w-full motion-reduce:transform-none!"
				style={{ x }}
			>
				{Array.from({ length: copies }, (_, i) => (
					<ul
						key={i}
						ref={i === 0 ? copyRef : undefined}
						aria-hidden={i > 0}
						className={`flex shrink-0 gap-4 pr-4 motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:pr-0 ${
							i > 0 ? 'motion-reduce:hidden' : ''
						}`}
					>
						{children}
					</ul>
				))}
			</motion.div>
		</div>
	);
};

export default Marquee;
