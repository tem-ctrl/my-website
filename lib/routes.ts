export const PAGES = {
	home: '/',
	blog: '/blog',
	blogDetails: (slug: string) => `/blog/${slug}`,
	projects: '/projects',
	projectDetails: (slug: string) => `/projects/${slug}`,
	contact: '/contact',
	aboutMe: '/about-me',
};
