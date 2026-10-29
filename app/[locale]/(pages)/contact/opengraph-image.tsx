import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { OG_SIZE, pageOgImage } from '@/lib/og';

export const alt = 'Contact Gilbert Temgoua, web developer';
export const size = OG_SIZE;
export const contentType = 'image/png';

export const generateStaticParams = () => routing.locales.map((locale) => ({ locale }));

// The page header labels the card; the home page call to action makes the pitch
const OpengraphImage = async ({ params }: { params: Promise<{ locale: string }> }) => {
	const { locale } = await params;
	const header = await getTranslations({ locale, namespace: 'ContactPage.PageHeader' });
	const cta = await getTranslations({ locale, namespace: 'HomePage.cta' });

	return pageOgImage({
		kicker: `${header('simpleText')} ${header('primaryText')}`,
		title: cta('title'),
		text: cta('text'),
	});
};

export default OpengraphImage;
