'use client';

import PrimaryButton from '@/components/common/PrimaryButton';
import SocialMedia from '@/components/pages/contact/SacialMedia';
import { SOCIAL_MEDIA } from '@/lib/constants';
import { useTranslations } from 'next-intl';
import React, { FC } from 'react';
import { FaTelegramPlane } from 'react-icons/fa';

interface SendButtonAndSocialProps {
	className?: string;
}

const SendButtonAndSocial: FC<SendButtonAndSocialProps> = ({ className = '' }) => {
	const t = useTranslations('ContactPage');

	return (
		<div className={`${className}`}>
			<PrimaryButton
				text={t('sendButtonText')}
				icon={<FaTelegramPlane />}
				className="h-11! w-fit! self-start px-5 uppercase"
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
