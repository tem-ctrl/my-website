'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs';

const ThemeSwitch = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, systemTheme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return <BsFillSunFill className="text-primary/40 text-lg" />;
	}

	const currentTheme = theme === 'system' ? systemTheme : theme;

	return (
		<button
			className="text-lg text-primary cursor-pointer"
			onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
			name="theme switcher"
		>
			{currentTheme === 'dark' ? <BsFillSunFill /> : <BsMoonFill className="text-base" />}
		</button>
	);
};

export default ThemeSwitch;
