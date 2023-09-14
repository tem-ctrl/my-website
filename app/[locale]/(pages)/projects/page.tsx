import PageHeader from '@/app/components/common/PageHeader';

const ProjectsPage = () => {
	return (
		<main className="scrollbar-none overflow-y-scroll px-2.5 md:px-[100px] hFill py-10 flex flex-col gap-12 items-center w-full">
			<PageHeader simpleText="My" primaryText="portfolio" tagline="A few of my latest projects" />
			<h1 className="text-3xl">Welcome to the projects page</h1>
		</main>
	);
};

export default ProjectsPage;
