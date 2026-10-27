import React, { FC } from 'react';
import { SkillItemProps } from '@/lib/types';

const SkillItem: FC<SkillItemProps> = ({ className = '', skill, value = 50 }) => {
	return (
		<div className={`${className} relative min-w-75`}>
			<p className="absolute bottom-3 font-medium uppercase">{skill}</p>
			<p
				className="absolute bottom-3 z-10 flex h-8 w-11 items-center justify-center rounded-sm border border-primary bg-background"
				style={{ left: `calc(${value}% - 22px)` }}
			>
				{value}%
			</p>
			<span
				className="absolute bottom-1.5 inline-block h-3 w-3 rotate-45 border-r border-b border-primary bg-primary p-1"
				style={{ left: `calc(${value}% - 6px)` }}
			/>
			<div className="h-0.5 w-full bg-line">
				<div className="h-full bg-primary" style={{ width: `${value}%` }} />
			</div>
		</div>
	);
};

export default SkillItem;
