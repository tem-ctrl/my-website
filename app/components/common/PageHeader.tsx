import React, { FC } from 'react';

interface PageHeaderProps {
	className?: string;
	simpleText: string;
	primaryText: string;
	tagline: string;
}

const PageHeader: FC<PageHeaderProps> = ({ className = '', simpleText, primaryText, tagline }) => {
	return (
		<div className={`${className}`}>
			<h1 className="text-3xl md:text-5xl uppercase font-[900] text-center">
				{simpleText} <span className="text-primary">{primaryText}</span>
			</h1>

			<div className="flex items-center justify-center gap-5 mt-5">
				<div className="w-10 h-0.5 bg-primary" />
				<p className="uppercase smm:text-sm text-center">{tagline}</p>
				<div className="w-10 h-0.5 bg-primary" />
			</div>
		</div>
	);
};

export default PageHeader;
