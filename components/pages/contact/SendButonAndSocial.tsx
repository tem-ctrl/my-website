'use client';

import PrimaryButton from '@/components/common/PrimaryButton';
import SocialMedia from '@/components/pages/contact/SacialMedia';
import { SOCIAL_MEDIA } from '@/lib/constants';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import { FiLoader } from 'react-icons/fi';

interface SendButtonAndSocialProps {
	className?: string;
	isPending?: boolean;
}

const SendButtonAndSocial: FC<SendButtonAndSocialProps> = ({
	className = '',
	isPending = false,
}) => {
	const t = useTranslations('ContactPage');

	return (
		<div className={`${className}`}>
			<PrimaryButton
				type="submit"
				disabled={isPending}
				text={isPending ? t('status.sending') : t('sendButtonText')}
				icon={isPending ? <FiLoader className="animate-spin" /> : <FaTelegramPlane />}
				className="h-11! w-fit! self-start px-5 uppercase disabled:cursor-wait disabled:opacity-70"
			/>
			<div className="flex items-center gap-2">
				{SOCIAL_MEDIA.map((media) => (
					<SocialMedia key={`social-media-${media.name}`} {...media} />
				))}
			</div>
		</div>
	);
};

export default SendButtonAndSocial;
