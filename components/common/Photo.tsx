import Image from 'next/image';
import { FC } from 'react';

interface PhotoProps {
	className?: string;
}

const Photo: FC<PhotoProps> = ({ className = '' }) => {
	return (
		<div className={`${className} flex w-full justify-center lg:w-1/3 lg:items-start`}>
			<Image
				src="/assets/images/me.png"
				alt="Gilbert Temgoua"
				width={392}
				height={475}
				sizes="(min-width: 768px) 248px, 146px"
				className="h-44 w-auto -scale-x-100 rounded-full object-fill md:h-75"
			/>
		</div>
	);
};

export default Photo;
