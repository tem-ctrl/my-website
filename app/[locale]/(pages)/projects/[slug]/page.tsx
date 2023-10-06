import { getMessages } from '@/app/utils/getMessages';
import { PageProps, Project } from '@/app/utils/types';
import { Metadata } from 'next';
import { createTranslator, useTranslations } from 'next-intl';
import { PROJECTS } from '@/app/utils/constants';
import PrimaryButtonLink from '@/app/components/common/PrimaryButtonLink';
import { BsGithub } from 'react-icons/bs';

export const generateMetadata = async ({ params: { locale } }: PageProps): Promise<Metadata> => {
	const messages = await getMessages(locale);
	const t = createTranslator({ locale, messages });

	return {
		title: t('ProjectsPage.title'),
		description: t('ProjectsPage.description'),
	};
};

const ProjectDetailsPage = ({ params }: { params: { slug: string } }) => {
	const slug = params.slug;
	const t = useTranslations(`projects.${slug}`);
	const p = useTranslations('ProjectDetailsPage');
	const project = PROJECTS.find((item) => item.slug === slug) ?? ({} as Project);
	const commonClassNames = 'text-xl underline font-medium mb-2';

	return (
		<main className="grid grid-col-1 lg:grid-cols-2 gap-5 lg:gap-10 py-10 w-full">
			<img
				src={`/assets/images/projects/${slug}.png`}
				alt={t('title')}
				className="rounded-lg w-full"
			/>
			<div className="flex flex-col gap-5 lg:gap-3">
				<h1 className="text-3xl text-primary uppercase font-bold mdm:text-center">{t('title')}</h1>
				<div className="flex lg:flex-col gap-3 ">
					{project.githubLink && (
						<PrimaryButtonLink
							text={p('viewOnGithub')}
							href={`https://github.com/tem-ctrl/${project.githubLink}`}
							icon={<BsGithub />}
							className="w-full lg:w-fit"
							newTab
						/>
					)}
					{project.previewLink && (
						<PrimaryButtonLink
							text={p('visitSite')}
							href={project.previewLink}
							// icon={<BsGithub />}
							className="w-full lg:w-fit"
							newTab
						/>
					)}
				</div>
				<section>
					<h2 className={commonClassNames}>{p('technologies')}</h2>
					<ul className="flex gap-3 items-center flex-wrap">
						{project.technologies?.map((tech) => (
							<li key={tech} className="font-medium">
								{tech}
							</li>
						))}
					</ul>
				</section>
			</div>
			<div className="col-span-full grid grid-col-1 lg:grid-cols-2 gap-5 lg:gap-10">
				<section>
					<h2 className={commonClassNames}>{p('description', { type: project.type })}</h2>
					<p dangerouslySetInnerHTML={{ __html: t.raw('description') }} />
				</section>
				<div>
					<h2 className={commonClassNames}>{p('skills')}</h2>
					<ul className="list-disc list-outside pl-3 ml-2">
						{t.rich('skills', {
							sk: (skill) => <li>{skill}</li>,
						})}
					</ul>
				</div>
			</div>
		</main>
	);
};

export default ProjectDetailsPage;
