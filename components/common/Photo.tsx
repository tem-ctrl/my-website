import React, { FC } from 'react';

interface PhotoProps {
	className?: string;
}

const Photo: FC<PhotoProps> = ({ className = '' }) => {
	return (
		<div className={`${className} flex w-full justify-center lg:w-1/3 lg:items-start`}>
			<img
				src="/assets/images/me.png"
				alt="Gilbert Temgoua"
				className="h-44 -scale-x-100 rounded-full object-fill md:h-75"
			/>
		</div>
	);
};

export default Photo;
