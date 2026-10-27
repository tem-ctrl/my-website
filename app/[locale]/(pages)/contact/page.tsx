import { Metadata } from 'next';
import Link from 'next/link';
import { use } from 'react';
import { useTranslations } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import FormInput from '@/components/common/FormInput';
import FormTextarea from '@/components/common/FormTextArea';
import PageHeader from '@/components/common/PageHeader';
import SendButtonAndSocial from '@/components/pages/contact/SendButonAndSocial';
import { BiSolidUser } from 'react-icons/bi';
import { BsInfoCircleFill } from 'react-icons/bs';
import { HiChatAlt2 } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';

export const generateMetadata = async ({
	params,
}: PageProps<'/[locale]/contact'>): Promise<Metadata> => {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: 'ContactPage' });

	return {
		title: t('title'),
		description: t('description'),
	};
};

const ContactPage = ({ params }: PageProps<'/[locale]/contact'>) => {
	const { locale } = use(params);

	setRequestLocale(locale);

	const t = useTranslations('ContactPage');

	return (
		<main className="scrollbar-none flex h-page w-full flex-col items-center gap-8 px-2.5 py-5 md:gap-12 md:px-25 md:pt-10">
			<PageHeader
				simpleText={t('PageHeader.simpleText')}
				primaryText={t('PageHeader.primaryText')}
				tagline={t('PageHeader.tagline')}
			/>
			<Link
				className="relative flex items-center justify-center rounded-md border-2 border-orange-500 py-3 text-orange-500 hover:border-primary hover:text-primary max-md:w-full md:p-4"
				href="mailto:gilbertemgoua@gmail.com"
			>
				<BsInfoCircleFill className="absolute -top-3 -left-3 z-10 bg-background text-2xl" />
				<p className="text-center">{t('info')}</p>
			</Link>
			<div className="mx-auto flex w-full flex-col gap-3 md:gap-5 lg:w-3/4">
				<p>{t('invitation')}</p>
				<div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 md:gap-5">
					<FormInput
						type="text"
						placeholder={t('namePlaceholder')}
						icon={<BiSolidUser />}
						minLength={3}
						required
					/>
					<FormInput type="email" placeholder={t('emailPlaceholder')} icon={<MdEmail />} required />
				</div>
				<FormTextarea
					placeholder={t('messagePlaceholder')}
					minLength={10}
					icon={<HiChatAlt2 />}
					iconClass="text-xl"
				/>
				<SendButtonAndSocial className="flex w-full justify-between" />
			</div>
		</main>
	);
};

export default ContactPage;
