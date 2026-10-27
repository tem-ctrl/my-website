import type { SocialMedia } from '@/lib/types';
import Link from 'next/link';
import React, { FC } from 'react';

const SocialMedia: FC<SocialMedia> = ({ className = '', link, icon, bgColor, name }) => {
	return (
		<Link
			className={`${className} ${bgColor} flex h-7 w-7 items-center justify-center rounded-full text-base text-white md:h-9 md:w-9 md:text-xl`}
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
