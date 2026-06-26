'use client';

import React, { FC, ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import useInitAOS from '@/hooks/useInitAOS';

const Providers: FC<{ children: ReactNode }> = ({ children }) => {
	useInitAOS();

	return (
		<ThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange enableSystem>
			{children}
			<ProgressBar height="2px" color="#8a2be2" options={{ showSpinner: false }} />
		</ThemeProvider>
	);
};

export default Providers;
