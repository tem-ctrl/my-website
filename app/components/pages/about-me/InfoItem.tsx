'use client'

import React, { FC, useCallback } from 'react';
import { InfoItemType } from '@/app/utils/types';
import Link from 'next/link';
import { useLocale } from 'next-intl';

const InfoItem: FC<InfoItemType> = ({ className = '', label, value, isExperience = false }) => {
	const isEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
  const locale = useLocale();

  const exp = useCallback((): string => {
    const start = new Date('2023-04-01');
    const today = new Date();
    const isEn = locale.includes('en');

    const m1 = today.getMonth() - start.getMonth()
    + (12 * (today.getFullYear() - start.getFullYear()));

    const m = today.getDate() > 10 ? m1 + 1 : m1;
    const y = Math.floor(m / 12);
    const m2 = m % 12;

    const mths = isEn ? `month${m2 > 1 ? 's' : ''}` : 'mois';
    const yrs = isEn ? `year${y > 1 ? 's' : ''}` : `an${y > 1 ? 's' : ''}`;
    
    if (y === 0) return `${m2} ${mths}`;
    if (m2 === 0) return `${y} ${yrs}`;

    return `${y} ${yrs} ${m2} ${mths}`;
  }, [locale]);

  return (
		<p className={`${className} flex gap-5`}>
			<span className="whitespace-nowrap">{`${label} :`}</span>
			{isEmail ? (
				<Link className="italic text-primary" target='_blank' href={`mailto:${value}`}>
					{value}
				</Link>
			) : (
				<span className="italic text-primary">{isExperience ? exp() : value}</span>
			)}
		</p>
	);
};

export default InfoItem;
