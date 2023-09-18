import { InfoItem } from '@/app/utils/types';
import Link from 'next/link';
import React, { FC } from 'react';

const InfoItem: FC<InfoItem> = ({ className = '', label, value }) => {
	const isEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);

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
