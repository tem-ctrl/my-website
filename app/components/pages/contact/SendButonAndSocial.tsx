'use client';

import PrimaryButton from '@/app/components/common/PrimaryButton';
import SocialMedia from '@/app/components/pages/contact/SacialMedia';
import { SOCIAL_MEDIA } from '@/app/utils/constants';
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
	);
};

export default SendButtonAndSocial;
