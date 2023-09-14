import { InfoItemProps } from '@/app/utils/types';
import Link from 'next/link';
import React, { FC } from 'react';

const InfoItem: FC<InfoItemProps> = ({ className = '', label, value, isEmail = false }) => {
	return (
		<p className={`${className} flex gap-5`}>
			<span className="whitespace-nowrap">{`${label} :`}</span>
			{isEmail ? (
				<Link className="italic text-primary" href={`mailto:${value}`}>
					{value}
				</Link>
			) : (
				<span className="italic text-primary">{value}</span>
			)}
		</p>
	);
};

export default InfoItem;
