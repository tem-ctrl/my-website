import '@/globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import React, { FC, Suspense, ReactNode } from 'react';
import Providers from '@/components/layout/Providers';
import Header from '@/components/layout/Header';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { PageProps } from '@/utils/types';
import NotFound from '@/components/common/NotFound';
import GoogleTag from '@/components/robot/GoogleTag';
import { routing } from '@/i18n/routing';
import { getTranslations, getMessages } from 'next-intl/server';
import Footer from '@/components/layout/Footer';

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['300', '400', '500', '700', '900'],
	display: 'swap',
});

type Locale = Promise<{ locale: string }>;

export const generateStaticParams = () => {
  return routing.locales.map((locale) => ({locale}));
};

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: 'RootLayout' });

	return {
		title: t('title'),
		description: t('description')
	};
};

interface RootLayoutProps {
	children: ReactNode;
	params: Locale;
}

const RootLayout: FC<RootLayoutProps> = async ({ children, params }) => {
	const { locale } = await params;
	const messages = await getMessages();

	if (!hasLocale(routing.locales, locale)) {
		return <NotFound />;
	}

	return (
		// Fix AOS braking scroll behavior: data-scroll-behavior="smooth"
		<html lang={locale} suppressHydrationWarning data-scroll-behavior="smooth">
			<body
				className={`${roboto.className} bg-bgLight dark:bg-bgDark text-light dark:text-dark`}
			>
				<Suspense>
					<GoogleTag />
				</Suspense>
				<NextIntlClientProvider locale={locale} messages={messages}>
					<Providers>
						<Header />
						<div className="px-2.5 pt-15 md:px-6 lg:px-14 w-full">{children}</div>
						<Footer />
					</Providers>
				</NextIntlClientProvider>
			</body>
		</html>
	);
};

export default RootLayout;
