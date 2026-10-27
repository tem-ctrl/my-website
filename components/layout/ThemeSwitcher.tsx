'use client';

import React, { MouseEvent } from 'react';
import { flushSync } from 'react-dom';
import { useTheme } from 'next-themes';
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs';

// Both icons are rendered and CSS picks the visible one, so the server markup
// is correct for either theme and there is no hydration flash.
const ThemeSwitcher = () => {
	const { resolvedTheme, setTheme } = useTheme();

	// The new theme is revealed as a circle growing from the button (View Transitions API).
	// Browsers without support, and reduced-motion users, get an instant switch.
	const onToggle = (event: MouseEvent<HTMLButtonElement>) => {
		const nextTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
		const root = document.documentElement;

		if (
			typeof document.startViewTransition !== 'function' ||
			window.matchMedia('(prefers-reduced-motion: reduce)').matches
		) {
			setTheme(nextTheme);

			return;
		}

		const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
		const x = left + width / 2;
		const y = top + height / 2;
		const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

		root.classList.add('theme-transition');

		const transition = document.startViewTransition(() => {
			flushSync(() => setTheme(nextTheme));
		});

		transition.ready.then(() => {
			root.animate(
				{ clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
				{ duration: 600, easing: 'ease-in-out', pseudoElement: '::view-transition-new(root)' }
			);
		});
		transition.finished.finally(() => root.classList.remove('theme-transition'));
	};

	return (
		<button
			className="relative flex size-5 cursor-pointer items-center justify-center text-lg text-primary"
			onClick={onToggle}
			name="theme switcher"
			aria-label="Toggle theme"
		>
			<BsFillSunFill className="hidden dark:block dark:animate-icon-in" />
			<BsMoonFill className="animate-icon-in text-base dark:hidden" />
		</button>
	);
};

export default ThemeSwitcher;
