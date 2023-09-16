import '@/app/globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import React, { FC } from 'react';
import Providers from '@/app/components/layout/Providers';
import Header from '@/app/components/layout/Header';
import { NextIntlClientProvider, createTranslator } from 'next-intl';
import { PageProps } from '@/app/utils/types';
import { getMessages } from '@/app/utils/getMessages';

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['300', '400', '500', '700', '900'],
	display: 'swap',
});

type Locale = { locale: string };

export function generateStaticParams(): Locale[] {
	return [{ locale: 'en' }, { locale: 'fr' }];
}

export const generateMetadata = async ({ params: { locale } }: PageProps): Promise<Metadata> => {
	const messages = await getMessages(locale);
	const t = createTranslator({ locale, messages });

	return {
		title: t('RootLayout.title'),
		description: t('RootLayout.description'),
	};
};

interface RootLayoutProps {
	children: React.ReactNode;
	params: Locale;
}

const RootLayout: FC<RootLayoutProps> = async ({ children, params }) => {
	const messages = await getMessages(params.locale);

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
