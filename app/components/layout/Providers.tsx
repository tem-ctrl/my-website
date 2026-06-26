'use client';

import React, { FC, ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import useInitAOS from '@/app/hooks/useInitAOS';

const Providers: FC<{ children: ReactNode }> = ({ children }) => {
	useInitAOS();

	return (
		<ThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange enableSystem>
			<div className="pt-15">{children}</div>
			<ProgressBar height="2px" color="#8a2be2" options={{ showSpinner: false }} />
		</ThemeProvider>
	);
};

export default Providers;
