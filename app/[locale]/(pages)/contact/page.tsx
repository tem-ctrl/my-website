import FormInput from '@/app/components/common/FormInput';
import PageHeader from '@/app/components/common/PageHeader';
import PrimaryButton from '@/app/components/common/PrimaryButton';
import SocialMedia from '@/app/components/pages/contact/SacialMedia';
import { SOCIAL_MEDIA } from '@/app/utils/constants';
import { BiSolidUser } from 'react-icons/bi';
import { HiChatAlt2 } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';
import { FaTelegramPlane } from 'react-icons/fa';
import { createTranslator, useTranslations } from 'next-intl';
import FormTextarea from '@/app/components/common/FormTextArea';
import { PageProps } from '@/app/utils/types';
import { Metadata } from 'next';
import { getMessages } from '@/app/utils/getMessages';

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
				<div className="w-full flex justify-between">
					<PrimaryButton
						onClick={() => {}}
						text={t('sendButtonText')}
						icon={<FaTelegramPlane />}
						className="px-5 !h-11 !w-fit self-start uppercase"
					/>
					<div className="flex gap-2 items-center">
						{SOCIAL_MEDIA.map((media) => (
							<SocialMedia key={`social-media-${media.name}`} {...media} />
						))}
					</div>
				</div>
			</div>
		</main>
	);
};

export default ContactPage;
