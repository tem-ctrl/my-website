import React, { FC } from 'react';

interface PhotoProps {
	className?: string;
}

const Photo: FC<PhotoProps> = ({ className = '' }) => {
	return (
		<div className={`${className} w-full flex lg:items-start justify-center`}>
			<img
				src="/assets/images/me.png"
				alt="Gilbert Temgoua"
				className="h-44 md:h-[300px] object-fill scale-x-[-1] rounded-full"
			/>
		</div>
	);
};

export default Photo;
