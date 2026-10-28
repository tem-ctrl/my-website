import { Metadata } from 'next';
import { getLocale, getTranslations } from 'next-intl/server';
import { personJsonLd, pageMetadata } from '@/lib/seo';
import { useLocale, useTranslations } from 'next-intl';
import JsonLd from '@/components/common/JsonLd';
import { CONTACT_EMAIL, SOCIAL_MEDIA, TECH_STACK } from '@/lib/constants';
import { PAGES } from '@/lib/routes';
import CallToAction from '@/components/pages/home/CallToAction';
import FeaturedProjects from '@/components/pages/home/FeaturedProjects';
import Hero from '@/components/pages/home/Hero';
import HowIWork from '@/components/pages/home/HowIWork';
import Stats from '@/components/pages/home/Stats';
import TechMarquee from '@/components/pages/home/TechMarquee';

export const generateMetadata = async (): Promise<Metadata> => {
	const locale = await getLocale();
	const t = await getTranslations('HomePage');

	return pageMetadata({
		locale,
		path: PAGES.home,
		title: t('title'),
		description: t('description'),
	});
};

const HomePage = () => {
	const locale = useLocale();
	const t = useTranslations('HomePage');

	return (
		<main className="mx-auto flex w-full max-w-6xl flex-col gap-24 pb-24 md:gap-32">
			<JsonLd
				data={personJsonLd({
					locale,
					jobTitle: t('jobTitle'),
					description: t('description'),
					email: CONTACT_EMAIL,
					knowsAbout: TECH_STACK.map(({ name }) => name),
					// Public profiles only (not WhatsApp)
					sameAs: SOCIAL_MEDIA.filter(({ name }) => name !== 'whatsapp').map(({ link }) => link),
				})}
			/>
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
