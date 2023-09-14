import '@/app/globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { FC } from 'react';
import Providers from '@/app/[locale]/components/layout/Providers';
import Header from '@/app/[locale]/components/layout/Header';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['300', '400', '500', '700', '900'],
	display: 'swap',
});

type Locale = { locale: string };

export function generateStaticParams(): Locale[] {
	return [{ locale: 'en' }, { locale: 'fr' }];
}

export const metadata: Metadata = {
	title: 'GTemgoua Portfolio',
	description: "Gilbert Temgoua's development porfolio and personal website",
};

interface RootLayoutProps {
	children: React.ReactNode;
	params: Locale;
}

const RootLayout: FC<RootLayoutProps> = async ({ children, params }) => {
	let messages;

	try {
		messages = (await import(`../../messages/${params.locale}.json`)).default;
	} catch (error) {
		notFound();
	}

	return (
		<html lang={params.locale}>
			<body
				className={`${roboto.className} max-w-[1600px] mx-auto bg-bgLight dark:bg-bgDark text-light dark:text-dark`}
			>
				<NextIntlClientProvider messages={messages} locale={params.locale}>
					<Providers>
						<Header />
						{children}
						{/* <Footer /> */}
					</Providers>
				</NextIntlClientProvider>
			</body>
		</html>
	);
};

export default RootLayout;
