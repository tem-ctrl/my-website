import React, { FC } from 'react';

interface TimelineBlockProps {
	className?: string;
	children?: React.ReactNode;
	title: string;
}

const TimelineBlock: FC<TimelineBlockProps> = ({ className = '', children = <></>, title }) => {
	return (
		<section className={`${className} flex flex-col gap-10`}>
			<h2 className="uppercase text-2xl">{title}</h2>
			<div className="flex flex-col gap-8 border-l border-l-primary border-spacing-y-1">
				{children}
			</div>
		</section>
	);
};

export default TimelineBlock;
