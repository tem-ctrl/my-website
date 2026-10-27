'use client';

import React, { FC, ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { ProgressProvider } from '@bprogress/next/app';

const Providers: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
			<ProgressProvider height="2px" color="var(--color-primary)" options={{ showSpinner: false }}>
				<div className="pt-header">{children}</div>
			</ProgressProvider>
		</ThemeProvider>
	);
};

export default Providers;
