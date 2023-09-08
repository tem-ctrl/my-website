'use client';

import React, { FC, ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const Providers: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<ThemeProvider enableSystem attribute="class">
			{children}
			<ProgressBar height="2px" color="#0000ff" />
		</ThemeProvider>
	);
};

export default Providers;
