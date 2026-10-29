'use client';

import React, { FC, useCallback } from 'react';
import { InfoItemType } from '@/lib/types';
import { formatDuration, monthsOfExperience } from '@/lib/experience';
import Link from 'next/link';
import { useLocale } from 'next-intl';

const InfoItem: FC<InfoItemType> = ({
	className = '',
	label,
	value,
	type = 'text',
	isExperience = false,
}) => {
	const locale = useLocale();

	const exp = useCallback((): string => formatDuration(monthsOfExperience(), locale), [locale]);

	return (
		<p className={`${className} flex gap-5`}>
			<span className="whitespace-nowrap">{`${label} :`}</span>
			{type === 'email' ? (
				<Link className="text-primary-text italic" target="_blank" href={`mailto:${value}`}>
					{value}
				</Link>
			) : type === 'tel' ? (
				<Link className="text-primary-text italic" href={`tel:${value.replace(/[^\d+]/g, '')}`}>
					{value}
				</Link>
			) : (
				<span className="text-primary-text italic">{isExperience ? exp() : value}</span>
			)}
		</p>
	);
};

export default InfoItem;
