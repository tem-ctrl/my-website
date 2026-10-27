import React, { FC } from 'react';
import { useTranslations } from 'next-intl';
import { FiArrowRight } from 'react-icons/fi';
import Reveal from '@/components/common/Reveal';
import SectionHeading from '@/components/common/SectionHeading';
import ProjectCard from '@/components/pages/projects/ProjectCard';
import { Link } from '@/i18n/navigation';
import { PROJECTS } from '@/lib/constants';
import { PAGES } from '@/lib/routes';

const FEATURED = PROJECTS.filter(({ type }) => type === 'professional');

const FeaturedProjects: FC = () => {
	const t = useTranslations('HomePage.featured');

	return (
		<section className="flex flex-col gap-12">
			<SectionHeading title={t('title')} subtitle={t('subtitle')} />

			<div className="grid gap-6 md:grid-cols-2 lg:gap-10">
				{FEATURED.map((project, i) => (
					<Reveal key={project.slug} delay={i * 0.15}>
						<ProjectCard {...project} />
					</Reveal>
				))}
			</div>

			<Reveal className="flex justify-center">
				<Link
					href={PAGES.projects}
					className="group flex items-center gap-2 font-medium text-primary hover:underline"
				>
					{t('seeAll')}
					<FiArrowRight className="transition-transform group-hover:translate-x-1" />
				</Link>
			</Reveal>
		</section>
	);
};

export default FeaturedProjects;
