import FormInput from '@/app/components/common/FormInput';
import PageHeader from '@/app/components/common/PageHeader';
import { BiSolidUser } from 'react-icons/bi';
import { HiChatAlt2 } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';
import { createTranslator, useTranslations } from 'next-intl';
import FormTextarea from '@/app/components/common/FormTextArea';
import { PageProps } from '@/app/utils/types';
import { Metadata } from 'next';
import { getMessages } from '@/app/utils/getMessages';
import SendButtonAndSocial from '@/app/components/pages/contact/SendButonAndSocial';
import { BsInfoCircleFill } from 'react-icons/bs';
import Link from 'next/link';

export const generateMetadata = async ({ params: { locale } }: PageProps): Promise<Metadata> => {
	const messages = await getMessages(locale);
	const t = createTranslator({ locale, messages });

	return {
		title: t('ContactPage.title'),
		description: t('ContactPage.description'),
	};
};

const ContactPage = () => {
	const t = useTranslations('ContactPage');

	return (
		<main className="scrollbar-none overflow-y-scroll px-2.5 md:px-[100px] hFill py-5 md:pt-10 flex flex-col gap-8 md:gap-12 items-center w-full">
			<PageHeader
				simpleText={t('PageHeader.simpleText')}
				primaryText={t('PageHeader.primaryText')}
				tagline={t('PageHeader.tagline')}
			/>
			<Link
				className="border-2 border-orange-500 text-orange-500 hover:border-primary hover:text-primary rounded-md flex relative justify-center items-center smm:w-full py-3 md:p-4"
				href="mailto:gilbertemgoua@gmail.com"
			>
				<BsInfoCircleFill className="absolute -top-3 -left-3 text-2xl z-10 bg-bgLight dark:bg-bgDark" />
				<p className="text-center">{t('info')}</p>
			</Link>
			<div className="flex flex-col gap-3 md:gap-5 w-full lg:w-3/4 mx-auto">
				<p>{t('invitation')}</p>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 w-full">
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
				<SendButtonAndSocial className="w-full flex justify-between" />
			</div>
		</main>
	);
};

export default ContactPage;
