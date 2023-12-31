import React, { FC } from 'react';

interface SeparatorProps {
	className?: string;
}

const Separator: FC<SeparatorProps> = ({ className = '' }) => {
	return <div className={`${className} w-full h-[1px] bg-gray-300 dark:bg-gray-800`} />;
};

export default Separator;
