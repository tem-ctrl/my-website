'use client';

import React, { FC } from 'react';
import { PAGES } from '@/config';
import { Project } from '@/utils/types';
import { Link } from '@/i18n/navigation';

const ProjectCard: FC<Project> = ({ className = '', title, image, slug }) => {
	return (
		<Link
			className={`${className} overflow-hidden cursor-pointer relative h-55 rounded-lg bg-neutral-300 dark:bg-neutral-800`}
			href={{ pathname: PAGES.projectDetails(slug) }}
		>
			<img
				src={`/assets/images/projects/${image}`}
				alt={title}
				className="w-full h-full bg-size-[100%_100%] hover:scale-110 transit rounded-lg"
			/>
			<h2 className="absolute rounded-b-lg w-full bottom-0 text-lg text-white font-semibold bg-bgDark/40 uppercase h-10 flex items-center justify-center">
				{title}
			</h2>
		</Link>
	);
};

export default ProjectCard;
