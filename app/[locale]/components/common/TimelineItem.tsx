import { TimelineItemProps } from '@/app/utils/types';
import React, { FC } from 'react';
import { BiSolidCalendar } from 'react-icons/bi';
import { MdLocationOn } from 'react-icons/md';

const TimelineItem: FC<TimelineItemProps> = ({
	className = '',
	startDate,
	endDate,
	title,
	place,
	description,
	location,
}) => {
	return (
		<article className={`${className} flex flex-col items-start gap-3 relative pl-8`}>
			<span className="absolute top-0 -left-2 z-10 bg-primary h-4 w-4 rounded-full border-2 border-primary" />
			<div className="flex justify-start items-center gap-3">
				<BiSolidCalendar size={20} />
				<p>
					<span>{startDate}</span> &ndash; <span>{endDate ?? 'ongoing'}</span>
				</p>
			</div>
			<h3 className="uppercase text-primary">
				<span>{title}</span>
				<span> &ndash; </span>
				<span className="font-bold">{place}</span>
			</h3>
			<div className="flex justify-start items-center gap-3">
				<MdLocationOn size={20} />
				<p>{location}</p>
			</div>
			{Array.isArray(description) ? (
				<div>
					<h4 className="text-primary mb-2">Responsibilities</h4>
					<ul className="list-[-] pl-3">
						{description.map((elt, i) => (
							<li key={`${i}-${elt.slice(0, 10)}`}>{`${elt}.`}</li>
						))}
					</ul>
				</div>
			) : (
				<p>{description}</p>
			)}
		</article>
	);
};

export default TimelineItem;
