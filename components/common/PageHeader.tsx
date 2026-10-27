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
			<h1 className="text-center text-3xl font-black uppercase md:text-5xl">
				{simpleText} <span className="text-primary-text">{primaryText}</span>
			</h1>

			<div className="mt-5 flex items-center justify-center gap-5">
				<div className="h-0.5 w-10 bg-primary" />
				<p className="text-center uppercase max-md:text-sm">{tagline}</p>
				<div className="h-0.5 w-10 bg-primary" />
			</div>
		</div>
	);
};

export default PageHeader;
