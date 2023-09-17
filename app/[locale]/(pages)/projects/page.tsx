'use client';

import PageHeader from '@/app/components/common/PageHeader';
import ProjectCard from '@/app/components/pages/projects/ProjectCard';

const ProjectsPage = () => {
	const projects = [
		'bantubeat',
		'salooprived',
		'legal-bantubeat',
		'booki',
		'ohmyfood',
		'panthere',
		'kanap',
		'piiquante',
		'kasa',
	];

	return (
		<main className="scrollbar-none overflow-y-scroll px-2.5 md:px-[100px] hFill py-10 flex flex-col gap-12 items-center w-full">
			<PageHeader simpleText="My" primaryText="portfolio" tagline="A few of my latest projects" />
			<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5">
				{projects.map((project) => (
					<ProjectCard key={project} title={project} />
				))}
			</div>
		</main>
	);
};

export default ProjectsPage;
