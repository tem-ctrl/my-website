import React, { FC } from 'react';
import { SkillItemProps } from '@/app/utils/types';

const SkillItem: FC<SkillItemProps> = ({ className = '', skill, value = 50 }) => {
	return (
		<div className={`${className} relative min-w-[300px]`}>
			<p className="uppercase absolute bottom-3 font-medium">{skill}</p>
			<p
				className={`w-11 h-8 border border-primary rounded-[4px] flex justify-center items-center z-10 bg-bgLight dark:bg-bgDark`}
				style={{ position: 'absolute', left: `calc(${value}% - 22px)`, bottom: '12px' }}
			>
				{value}%
			</p>
			<span
				className="h-3 w-3 border-b border-r border-primary inline-block p-1 rotate-45 bg-primary"
				style={{ position: 'absolute', left: `calc(${value}% - 6px)`, bottom: '6px' }}
			/>
			<div className="w-full h-0.5 bg-gray-300 dark:bg-gray-800">
				<div className="bg-primary h-full" style={{ width: `${value}%` }} />
			</div>
		</div>
	);
};

export default SkillItem;
