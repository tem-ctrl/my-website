import type { TimelineItem } from '@/lib/types';
import { useTranslations } from 'next-intl';
import React, { FC } from 'react';
import { BiSolidCalendar } from 'react-icons/bi';
import { MdLocationOn } from 'react-icons/md';

const TimelineItem: FC<TimelineItem> = ({
	className = '',
	startDate,
	endDate,
	title,
	place,
	description,
	location,
}) => {
	const t = useTranslations('TimelineItem');

	return (
		<article className={`${className} relative flex flex-col items-start gap-3 pl-8`}>
			<span className="absolute top-0 -left-2 z-10 h-4 w-4 rounded-full border-2 border-primary bg-primary" />
			<div className="flex items-center justify-start gap-3">
				<BiSolidCalendar size={20} />
				<p>
					<span>{startDate}</span> &ndash; <span>{endDate ?? 'ongoing'}</span>
				</p>
			</div>
			<h3 className="text-primary uppercase">
				<span>{title}</span>
				<span> &ndash; </span>
				<span className="font-bold">{place}</span>
			</h3>
			<div className="flex items-center justify-start gap-3">
				<MdLocationOn size={20} />
				<p>{location}</p>
			</div>
			{Array.isArray(description) ? (
				<>
					<h4 className="mb-2 text-primary">{t('responsibilities')}</h4>
					<ul className="flex list-inside list-disc flex-col gap-2">
						{description.map((elt, i) => (
							<li key={`${i}-${elt.slice(0, 10)}`}>{`${elt}.`}</li>
						))}
					</ul>
				</>
			) : (
				<p>{description}</p>
			)}
		</article>
	);
};

export default TimelineItem;
