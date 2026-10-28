import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getLocale, getTranslations } from 'next-intl/server';
import { pageMetadata } from '@/lib/seo';
import { PAGES } from '@/lib/routes';
import PageHeader from '@/components/common/PageHeader';
import ContactForm from '@/components/pages/contact/ContactForm';

export const generateMetadata = async (): Promise<Metadata> => {
	const locale = await getLocale();
	const t = await getTranslations('ContactPage');

	return pageMetadata({
		locale,
		path: PAGES.contact,
		title: t('title'),
		description: t('description'),
	});
};

const ContactPage = () => {
	const t = useTranslations('ContactPage');

	return (
		<main className="flex w-full flex-1 flex-col items-center gap-8 py-5 md:gap-10 md:px-25 md:py-8">
			<PageHeader
				simpleText={t('PageHeader.simpleText')}
				primaryText={t('PageHeader.primaryText')}
				tagline={t('PageHeader.tagline')}
			/>
			<ContactForm className="mx-auto w-full max-w-2xl" />
		</main>
	);
};

export default ContactPage;
