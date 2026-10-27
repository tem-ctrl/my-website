import { Metadata } from 'next';
import { use } from 'react';
import { useTranslations } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { pageMetadata } from '@/lib/seo';
import { PAGES } from '@/lib/routes';
import PageHeader from '@/components/common/PageHeader';
import ContactForm from '@/components/pages/contact/ContactForm';

export const generateMetadata = async ({
	params,
}: PageProps<'/[locale]/contact'>): Promise<Metadata> => {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: 'ContactPage' });

	return pageMetadata({
		locale,
		path: PAGES.contact,
		title: t('title'),
		description: t('description'),
	});
};

const ContactPage = ({ params }: PageProps<'/[locale]/contact'>) => {
	const { locale } = use(params);

	setRequestLocale(locale);

	const t = useTranslations('ContactPage');

	return (
		<main className="flex min-h-page w-full flex-col items-center gap-8 px-2.5 py-5 md:gap-12 md:px-25 md:pt-10">
			<PageHeader
				simpleText={t('PageHeader.simpleText')}
				primaryText={t('PageHeader.primaryText')}
				tagline={t('PageHeader.tagline')}
			/>
			<ContactForm className="mx-auto w-full lg:w-3/4" />
		</main>
	);
};

export default ContactPage;
