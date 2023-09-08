import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { FC } from 'react';
import Providers from '@/app/components/layout/Providers';
import Header from '@/app/components/layout/Header';

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['300', '400', '500', '700'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'GTemgoua Portfolio',
	description: "Gilbert Temgoua's development porfolio and personal website",
};

interface RootLayoutProps {
	children: React.ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
	return (
		<html lang="en">
			<body
				className={`${roboto.className} max-w-[1600px] mx-auto bg-bgLight dark:bg-bgDark text-light dark:text-dark`}
			>
				<Providers>
					<Header />
					{children}
					{/* <Footer /> */}
				</Providers>
			</body>
		</html>
	);
};

export default RootLayout;
