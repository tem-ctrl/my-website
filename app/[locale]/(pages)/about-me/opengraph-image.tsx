import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { OG_SIZE, pageOgImage } from '@/lib/og';

export const alt = 'About Gilbert Temgoua, web developer';
export const size = OG_SIZE;
export const contentType = 'image/png';

export const generateStaticParams = () => routing.locales.map((locale) => ({ locale }));

const OpengraphImage = async ({ params }: { params: Promise<{ locale: string }> }) => {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: 'AboutPage.PageHeader' });

	return pageOgImage({
		kicker: `${t('simpleText')} ${t('primaryText')}`,
		title: 'Gilbert Temgoua',
		text: t('tagline'),
	});
};

export default OpengraphImage;
