'use client'

import React, { FC, useEffect } from 'react';
import { InfoItemType } from '@/app/utils/types';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/en';
import 'dayjs/locale/fr';

const InfoItem: FC<InfoItemType> = ({ className = '', label, value, isExperience = false }) => {
	const isEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
  const locale = useLocale()

  dayjs.extend(relativeTime);
  const exp = dayjs('2023-04-01').fromNow(true);

  useEffect(() => {
    if (!isExperience) return;
    console.info('WORK EXPERIENCE: ', exp);
  }, [locale])

  return (
		<p className={`${className} flex gap-5`}>
			<span className="whitespace-nowrap">{`${label} :`}</span>
			{isEmail ? (
				<Link className="italic text-primary" target='_blank' href={`mailto:${value}`}>
					{value}
				</Link>
			) : (
				<span className="italic text-primary">{isExperience ? exp : value}</span>
			)}
		</p>
	);
};

export default InfoItem;
