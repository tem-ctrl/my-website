import React, { FC } from 'react';
import { useTranslations } from 'next-intl';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import Reveal from '@/components/common/Reveal';
import SectionHeading from '@/components/common/SectionHeading';
import { Link } from '@/i18n/navigation';
import { PROJECTS } from '@/lib/constants';
import { PAGES } from '@/lib/routes';

const FEATURED = PROJECTS.filter(({ type }) => type === 'professional');

const FeaturedProjects: FC = () => {
	const t = useTranslations('HomePage.featured');
	const p = useTranslations('projects');

	return (
		<section className="flex flex-col gap-12">
			<SectionHeading title={t('title')} subtitle={t('subtitle')} />

			<div className="grid gap-6 md:grid-cols-2 lg:gap-10">
				{FEATURED.map(({ slug, image, technologies = [] }, i) => (
					<Reveal key={slug} delay={i * 0.15}>
						<Link
							href={PAGES.projectDetails(slug)}
							className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-background/60 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20"
						>
							<div className="relative aspect-video overflow-hidden">
								<img
									src={`/assets/images/projects/${image}`}
									alt={p(`${slug}.title`)}
									className="size-full object-cover object-top transition duration-500 group-hover:scale-105"
								/>
								<div className="absolute inset-0 bg-linear-to-t from-bg-dark/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
							</div>
							<div className="flex flex-1 flex-col gap-4 p-6">
								<div className="flex items-center justify-between gap-4">
									<h3 className="text-2xl font-bold uppercase">{p(`${slug}.title`)}</h3>
									<FiArrowUpRight className="shrink-0 text-2xl text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
								</div>
								<p className="text-foreground/70">{t(slug)}</p>
								<ul className="mt-auto flex flex-wrap gap-2">
									{technologies.map((tech) => (
										<li
											key={tech}
											className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
										>
											{tech}
										</li>
									))}
								</ul>
							</div>
						</Link>
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
