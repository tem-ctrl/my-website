'use client';

import FormInput from '@/app/components/common/FormInput';
import PageHeader from '@/app/components/common/PageHeader';
import PrimaryButton from '@/app/components/common/PrimaryButton';
import SocialMedia from '@/app/components/pages/contact/SacialMedia';
import { SOCIAL_MEDIA } from '@/app/utils/constants';
import { BiSolidUser } from 'react-icons/bi';
import { HiChatAlt2 } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';
import { FaTelegramPlane } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import Head from 'next/head';

const ContactPage = () => {
	const t = useTranslations('ContactPage');

	return (
		<main className="scrollbar-none overflow-y-scroll px-2.5 md:px-[100px] hFill py-5 md:pt-10 flex flex-col gap-8 md:gap-12 items-center w-full">
			<Head>
				<title>{t('title')}</title>
				<meta name="description" content={t('description')} />
			</Head>
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
				<div className="w-full relative">
					<textarea
						className="rounded-[30px] bg-neutral-300 dark:bg-neutral-800 py-2 pl-12 pr-4 h-32 md:h-36 w-full focus:outline-none focus:ring-1 focus:ring-primary overflow-scroll scrollbar-none"
						placeholder={t('messagePlaceholder')}
						minLength={10}
					/>
					<HiChatAlt2 className="inline absolute top-3 left-4 text-2xl" />
				</div>
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
