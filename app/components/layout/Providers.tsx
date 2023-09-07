'use client';

import React, { FC, ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const Providers: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<ThemeProvider enableSystem attribute="class">
			<div className="h-full w-full">{children}</div>
			<ProgressBar height="2px" style="text-dark dark:text-white" />
		</ThemeProvider>
	);
};

export default Providers;