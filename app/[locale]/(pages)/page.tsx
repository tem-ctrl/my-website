import { Metadata } from 'next';
import { use } from 'react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import CallToAction from '@/components/pages/home/CallToAction';
import FeaturedProjects from '@/components/pages/home/FeaturedProjects';
import Hero from '@/components/pages/home/Hero';
import HowIWork from '@/components/pages/home/HowIWork';
import Stats from '@/components/pages/home/Stats';
import TechMarquee from '@/components/pages/home/TechMarquee';

export const generateMetadata = async ({ params }: PageProps<'/[locale]'>): Promise<Metadata> => {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: 'HomePage' });

	return {
		title: t('title'),
		description: t('description'),
	};
};

const HomePage = ({ params }: PageProps<'/[locale]'>) => {
	const { locale } = use(params);

	setRequestLocale(locale);

	return (
		<main className="mx-auto flex w-full max-w-6xl flex-col gap-24 pb-24 md:gap-32">
			<Hero />
			<Stats />
			<FeaturedProjects />
			<TechMarquee />
			<HowIWork />
			<CallToAction />
		</main>
	);
};

export default HomePage;
