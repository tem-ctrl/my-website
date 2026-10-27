'use client';

import { useTheme } from 'next-themes';
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs';

// Both icons are rendered and CSS picks the visible one, so the server markup
// is correct for either theme and there is no hydration flash.
const ThemeSwitcher = () => {
	const { resolvedTheme, setTheme } = useTheme();

	return (
		<button
			className="text-lg text-primary"
			onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
			name="theme switcher"
		>
			<BsFillSunFill className="hidden dark:block" />
			<BsMoonFill className="text-base dark:hidden" />
		</button>
	);
};

export default ThemeSwitcher;
