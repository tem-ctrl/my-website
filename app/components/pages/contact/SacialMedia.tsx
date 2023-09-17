import { SocialMediaProps } from '@/app/utils/types';
import Link from 'next/link';
import React, { FC } from 'react';

const SocialMedia: FC<SocialMediaProps> = ({ className = '', link, icon, bgColor, name }) => {
	return (
		<Link
			className={`${className} ${bgColor} text-base md:text-xl flex justify-center items-center w-7 h-7 md:w-9 md:h-9 rounded-full text-white`}
			href={link}
			target="_blank"
			aria-label={name}
			title={name}
		>
			{icon}
		</Link>
	);
};

export default SocialMedia;
