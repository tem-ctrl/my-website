import { useTranslations } from 'next-intl';

// import { NextPage } from 'next';
const ProjectDetailsPage = ({ params }: { params: { slug: string } }) => {
	const t = useTranslations(`projects.${params.slug}`);

	return (
		<main className="flex flex-col items-center gap-5 py-10">
			<div className="grid grid-cols-2 gap-5">
				<img src={`/assets/images/projects/${params.slug}.png`} alt={t('title')} />
				<p>{t('title')}</p>
			</div>
			{/* <ul className='list-disc list-outside'>
        {Object.entries(t('skills')).map(([key, skill]) => (
          <li key={`${t('title')}-${key}`}>{skill}</li>
        ))}
      </ul> */}
		</main>
	);
};

export default ProjectDetailsPage;
