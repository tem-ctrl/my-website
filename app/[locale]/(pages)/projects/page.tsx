'use client';

import PageHeader from '@/app/components/common/PageHeader';
import ProjectCard from '@/app/components/pages/projects/ProjectCard';
import { Project } from '@/app/utils/types';

const ProjectsPage = () => {
	const projects: Project[] = [
		{
			title: 'kasa',
			image: '/assets/images/projects/kasa.png',
		},
		{
			title: 'piiquante',
			image: '/assets/images/projects/piiquante.png',
		},
		{
			title: 'kanap',
			image: '/assets/images/projects/kanap.png',
		},
		{
			title: 'panthere',
			image: '/assets/images/projects/panthere.png',
		},
		{
			title: 'ohmyfood',
			image: '/assets/images/projects/ohmyfood.png',
		},
		{
			title: 'booki',
			image: '/assets/images/projects/booki.png',
		},
	];

	return (
		<main className="scrollbar-none overflow-y-scroll px-2.5 md:px-[100px] hFill py-10 flex flex-col gap-12 items-center w-full">
			<PageHeader
				simpleText="My"
				primaryText="portfolio"
				tagline="A few of my web development projects"
			/>
			<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5">
				{projects.map((project) => (
					<ProjectCard key={`project-${project.title}}`} {...project} />
				))}
			</div>
		</main>
	);
};

export default ProjectsPage;
