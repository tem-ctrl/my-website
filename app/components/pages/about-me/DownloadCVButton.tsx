'use client';

import PrimaryButton from '@/app/components/common/PrimaryButton';
import { useLocale, useTranslations } from 'next-intl';
import React, { FC } from 'react';
import { FaDownload } from 'react-icons/fa';

interface DownloadCvButtonProps {
	className?: string;
}

const DownloadCvButton: FC<DownloadCvButtonProps> = ({ className = '' }) => {
	const locale = useLocale();
	const t = useTranslations('AboutPage');

	const downloadCV = () => {
		if (typeof window == undefined) return;
		let href = `cvs/gilbert_temgoua_cv_${locale}.pdf`;

		window.open(`${window.location.origin}/${href}`, '_blank');
	};

	return (
		<PrimaryButton
			text={t('downloadCvButton')}
			onClick={downloadCV}
			icon={<FaDownload />}
			className={`${className} !w-fit text-sm col-span-full smm:justify-self-center`}
		/>
	);
};

export default DownloadCvButton;
