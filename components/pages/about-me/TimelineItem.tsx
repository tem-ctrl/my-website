import type { TimelineItem } from '@/lib/types';
import { useTranslations } from 'next-intl';
import React, { FC } from 'react';
import { BiSolidCalendar } from 'react-icons/bi';
import { MdLocationOn } from 'react-icons/md';
import Reveal from '@/components/common/Reveal';

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
		<Reveal className={`${className} relative pl-8`}>
			<span className="absolute top-6 -left-1.75 z-10 size-4 rounded-full bg-primary ring-4 ring-primary/20" />
			<article className="flex flex-col items-start gap-3 rounded-2xl border border-border/60 bg-background/60 p-6 backdrop-blur-sm transition-colors hover:border-primary/50">
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
		</Reveal>
	);
};

export default TimelineItem;
