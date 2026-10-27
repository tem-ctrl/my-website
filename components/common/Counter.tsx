'use client';

import React, { FC, useEffect, useRef } from 'react';
import { animate, useInView, useReducedMotion } from 'motion/react';

interface CounterProps {
	className?: string;
	value: number | (() => number);
	suffix?: string;
}

// Counts up from 0 to `value` the first time it scrolls into view
const Counter: FC<CounterProps> = ({ className = '', value, suffix = '' }) => {
	const ref = useRef<HTMLSpanElement>(null);
	const isInView = useInView(ref, { once: true, margin: '-40px' });
	const reduceMotion = useReducedMotion();

	useEffect(() => {
		if (!isInView) return;

		const target = typeof value === 'function' ? value() : value;
		const controls = animate(0, target, {
			duration: reduceMotion ? 0 : 1.6,
			ease: 'easeOut',
			onUpdate: (latest) => {
				if (ref.current) ref.current.textContent = `${Math.round(latest)}${suffix}`;
			},
		});

		return () => controls.stop();
	}, [isInView, value, suffix, reduceMotion]);

	return (
		<span ref={ref} className={className}>
			0{suffix}
		</span>
	);
};

export default Counter;
