import React, { FC } from 'react';

interface SkillItemProps {
	className?: string;
	skill: string;
	value: number; // Percentage
}

const SkillItem: FC<SkillItemProps> = ({ className = '', skill, value = 50 }) => {
	return (
		<div className={`${className} relative min-w-[300px]`}>
			<p className="uppercase">{skill}</p>
			<div className="w-full h-0.5 bg-gray-300 dark:bg-gray-800">
				<div className="bg-primary h-full" style={{ width: `${value}%` }} />
			</div>
		</div>
	);
};

export default SkillItem;
