'use client';

import React, { FC, ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { ProgressProvider } from '@bprogress/next/app';
import { MotionConfig } from 'motion/react';

const Providers: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
			<ProgressProvider height="2px" color="var(--color-primary)" options={{ showSpinner: false }}>
				{/* Animations respect the OS "reduce motion" setting */}
				<MotionConfig reducedMotion="user">
					<div className="pt-header">{children}</div>
				</MotionConfig>
			</ProgressProvider>
		</ThemeProvider>
	);
};

export default Providers;
