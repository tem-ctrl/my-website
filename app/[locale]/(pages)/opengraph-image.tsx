import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { OG_SIZE, pageOgImage } from '@/lib/og';

export const alt = 'Gilbert Temgoua, web developer';
export const size = OG_SIZE;
export const contentType = 'image/png';

export const generateStaticParams = () => routing.locales.map((locale) => ({ locale }));

// Default card for every page without its own: availability, greeting and headline
const OpengraphImage = async ({ params }: { params: Promise<{ locale: string }> }) => {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: 'HomePage.hero' });

	return pageOgImage({
		kicker: t('badge'),
		online: true,
		title: t('greeting'),
		text: t('headline'),
	});
};

export default OpengraphImage;
