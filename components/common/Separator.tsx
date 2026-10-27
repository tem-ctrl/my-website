import React, { FC } from 'react';

interface SeparatorProps {
	className?: string;
}

const Separator: FC<SeparatorProps> = ({ className = '' }) => {
	return <div className={`${className} h-px w-full bg-line`} />;
};

export default Separator;
