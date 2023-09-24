'use client';

import React, { FC } from 'react';
import PrimaryButton from '@/app/components/common/PrimaryButton';
import { PAGES } from '@/app/config';
import { useRouter } from 'next-intl/client';
import { BsBriefcaseFill } from 'react-icons/bs';
import { BiSolidUser } from 'react-icons/bi';
import { useLocale, useTranslations } from 'next-intl';

interface MoreAndPortfolioButtonsProps {
	className?: string;
}

const MoreAndPortfolioButtons: FC<MoreAndPortfolioButtonsProps> = ({ className = '' }) => {
	const router = useRouter();
	const locale = useLocale();
	const t = useTranslations('HomePage');

	return (
		<div className={`${className} `}>
			<PrimaryButton
				onClick={() => router.push(PAGES.aboutMe, { locale })}
				text={t('moreButtonText')}
				icon={<BiSolidUser />}
				className="uppercase"
			/>
			<PrimaryButton
				onClick={() => router.push(PAGES.projects, { locale })}
				text={t('portfolioButtonText')}
				icon={<BsBriefcaseFill />}
				className="uppercase"
			/>
		</div>
	);
};

export default MoreAndPortfolioButtons;
