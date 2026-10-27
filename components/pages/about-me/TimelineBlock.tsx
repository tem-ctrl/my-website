import React, { FC } from 'react';

interface TimelineBlockProps {
	className?: string;
	children?: React.ReactNode;
	title: string;
}

const TimelineBlock: FC<TimelineBlockProps> = ({ className = '', children = <></>, title }) => {
	return (
		<section className={`${className} flex flex-col gap-10`}>
			<h2 className="text-2xl uppercase">{title}</h2>
			<div className="flex border-spacing-y-1 flex-col gap-8 border-l border-l-primary">
				{children}
			</div>
		</section>
	);
};

export default TimelineBlock;
