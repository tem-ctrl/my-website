import '@/app/globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import React, { FC, Suspense } from 'react';
import Providers from '@/app/components/layout/Providers';
import Header from '@/app/components/layout/Header';
import { NextIntlClientProvider, createTranslator } from 'next-intl';
import { PageProps } from '@/app/utils/types';
import { getMessages } from '@/app/utils/getMessages';
import NotFound from '@/app/components/common/NotFound';
import GoogleTag from '@/app/components/robot/GoogleTag';

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['300', '400', '500', '700', '900'],
	display: 'swap',
});

type Locale = { locale: string };

export const generateMetadata = async ({ params: { locale } }: PageProps): Promise<Metadata> => {
	const messages = await getMessages(locale);
	const t = createTranslator({ locale, messages });

	return {
		title: t('RootLayout.title'),
		description: t('RootLayout.description'),
	};
};

const locales = ['en', 'fr'];

interface RootLayoutProps {
	children: React.ReactNode;
	params: Locale;
}

const RootLayout: FC<RootLayoutProps> = async ({ children, params }) => {
	const isValidLocale = locales.some((cur) => cur === params.locale);

	if (!isValidLocale) NotFound();

	const messages = await getMessages(params.locale);

	return (
		<html lang={params.locale}>
			<body
				className={`${roboto.className} max-w-[1600px] mx-auto bg-bgLight dark:bg-bgDark text-light dark:text-dark`}
			>
				<Suspense>
					<GoogleTag />
				</Suspense>
				<NextIntlClientProvider messages={messages} locale={params.locale}>
					<Providers>
						<Header />
						<div className="px-2.5 md:px-6 lg:px-14 w-full">{children}</div>
						{/* <Footer /> */}
					</Providers>
				</NextIntlClientProvider>
			</body>
		</html>
	);
};

export default RootLayout;
