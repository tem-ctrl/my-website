import React, { FC } from 'react';
import { PAGES } from '@/lib/routes';
import { Project } from '@/lib/types';
import { Link } from '@/i18n/navigation';

const ProjectCard: FC<Project> = ({ className = '', title, image, slug }) => {
	return (
		<Link
			className={`${className} relative h-55 cursor-pointer overflow-hidden rounded-lg bg-card`}
			href={PAGES.projectDetails(slug)}
		>
			<img
				src={`/assets/images/projects/${image}`}
				alt={title}
				className="h-full w-full rounded-lg bg-size-[100%_100%] transition-all delay-100 ease-in-out hover:scale-110"
			/>
			<h2 className="absolute bottom-0 flex h-10 w-full items-center justify-center rounded-b-lg bg-bg-dark/40 text-lg font-semibold text-white uppercase">
				{title}
			</h2>
		</Link>
	);
};

export default ProjectCard;
