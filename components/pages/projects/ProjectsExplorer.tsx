'use client';

import React, { FC, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import ProjectCard from '@/components/pages/projects/ProjectCard';
import { PROJECTS } from '@/lib/constants';
import { Project } from '@/lib/types';

const FILTERS = ['all', 'professional', 'education'] as const;

type Filter = (typeof FILTERS)[number];

// Professional work gets wider cards (2 per row vs 3) to stand out from training projects
const cardSpan = ({ type }: Project) =>
	type === 'professional' ? 'lg:col-span-3' : 'lg:col-span-2';

const ProjectsExplorer: FC = () => {
	const t = useTranslations('ProjectsPage.filters');
	const [filter, setFilter] = useState<Filter>('all');

	const projects = PROJECTS.filter(({ type }) => filter === 'all' || type === filter);
	const count = (value: Filter) =>
		value === 'all' ? PROJECTS.length : PROJECTS.filter(({ type }) => type === value).length;

	return (
		<div className="flex w-full flex-col items-center gap-10">
			<div
				role="tablist"
				className="flex gap-1 rounded-full border border-border/60 bg-background/60 p-1 backdrop-blur-sm"
			>
				{FILTERS.map((value) => (
					<button
						key={value}
						role="tab"
						aria-selected={filter === value}
						onClick={() => setFilter(value)}
						className={`relative cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors md:px-5 ${
							filter === value ? 'text-white' : 'hover:text-primary'
						}`}
					>
						{filter === value && (
							<motion.span
								layoutId="project-filter"
								className="absolute inset-0 rounded-full bg-primary"
								transition={{ type: 'spring', stiffness: 400, damping: 30 }}
							/>
						)}
						<span className="relative">
							{t(value)} <span className="opacity-60">{count(value)}</span>
						</span>
					</button>
				))}
			</div>

			<motion.ul layout className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-6">
				<AnimatePresence mode="popLayout" initial={false}>
					{projects.map((project) => (
						<motion.li
							key={project.slug}
							layout
							className={cardSpan(project)}
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.9 }}
							transition={{ type: 'spring', stiffness: 300, damping: 30 }}
						>
							<ProjectCard {...project} />
						</motion.li>
					))}
				</AnimatePresence>
			</motion.ul>
		</div>
	);
};

export default ProjectsExplorer;
