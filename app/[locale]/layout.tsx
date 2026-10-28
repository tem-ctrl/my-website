import '@/app/globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { Suspense } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import Providers from '@/components/layout/Providers';
import Background from '@/components/layout/Background';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import GoogleTag from '@/components/robot/GoogleTag';

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['300', '400', '500', '700', '900'],
	display: 'swap',
	variable: '--font-roboto',
});

export const generateStaticParams = () => routing.locales.map((locale) => ({ locale }));

export const generateMetadata = async (): Promise<Metadata> => {
	const t = await getTranslations('RootLayout');

	return {
		metadataBase: new URL('https://gtemgoua.vercel.app'),
		title: t('title'),
		description: t('description'),
	};
};

const RootLayout = async ({ children }: LayoutProps<'/[locale]'>) => {
	const locale = await getLocale();

	return (
		<html lang={locale} className={roboto.variable} suppressHydrationWarning>
			<body>
				<Background />
				<Suspense>
					<GoogleTag />
				</Suspense>
				<NextIntlClientProvider>
					<Providers>
						<Header />
						<div className="flex w-full flex-1 flex-col px-5 md:px-6 lg:px-14">{children}</div>
						<Footer />
					</Providers>
				</NextIntlClientProvider>
			</body>
		</html>
	);
};

export default RootLayout;
