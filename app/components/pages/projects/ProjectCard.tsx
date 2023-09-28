'use client';

import React, { FC } from 'react';
import { PAGES } from '@/app/config';
import { Project } from '@/app/utils/types';
import Link from 'next-intl/link';

const ProjectCard: FC<Project> = ({ className = '', title, image, slug }) => {
	return (
		<Link
			className={`${className} overflow-hidden cursor-pointer relative h-[220px] rounded-lg bg-neutral-300 dark:bg-neutral-800`}
			href={{ pathname: PAGES.projectDetails(slug) }}
		>
			<img
				src={`/assets/images/projects/${image}`}
				alt={title}
				className="w-full h-full bg-[length:100%_100%] hover:scale-110 transit rounded-lg"
			/>
			<h2 className="absolute rounded-b-lg w-full bottom-0 text-lg text-white font-semibold bg-bgDark/40 uppercase h-10 flex items-center justify-center">
				{title}
			</h2>
		</Link>
	);
};

export default ProjectCard;
