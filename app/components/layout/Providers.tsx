'use client';

import React, { FC, ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const Providers: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<ThemeProvider enableSystem attribute="class">
			<div className="pt-[60px]">{children}</div>
			<ProgressBar height="2px" color="#8a2be2" options={{ showSpinner: false }} />
		</ThemeProvider>
	);
};

export default Providers;
