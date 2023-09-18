import React, { FC } from 'react';
import { PAGES } from '@/app/config';
import { useRouter } from 'next-intl/client';
import { Project } from '@/app/utils/types';

const ProjectCard: FC<Project> = ({ className = '', title, image }) => {
	const router = useRouter();

	return (
		<div
			className={`${className} overflow-hidden cursor-pointer relative h-[220px] rounded-lg bg-neutral-300 dark:bg-neutral-800`}
			onClick={() => router.push(PAGES.projectDetails(title))}
		>
			<img
				src={image ?? `https://ui-avatars.com/api?name=${title}`}
				alt={title}
				className="w-full h-full bg-[length:100%_100%] hover:scale-110 transit rounded-lg"
			/>
			<h2 className="absolute rounded-b-lg w-full bottom-0 text-lg text-white font-semibold bg-bgDark/40 uppercase h-10 flex items-center justify-center">
				{title}
			</h2>
		</div>
	);
};

export default ProjectCard;
