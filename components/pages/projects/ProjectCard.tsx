'use client';

import Image from 'next/image';
import React, { FC, MouseEvent, ViewTransition } from 'react';
import {
	motion,
	useMotionTemplate,
	useMotionValue,
	useReducedMotion,
	useSpring,
} from 'motion/react';
import { useTranslations } from 'next-intl';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import { Link } from '@/i18n/navigation';
import { projectImageTransitionName } from '@/lib/constants';
import { PAGES } from '@/lib/routes';
import { Project } from '@/lib/types';

/** Max tilt angle in degrees */
const TILT = 6;

const ProjectCard: FC<Project> = ({ className = '', slug, image, type, technologies = [] }) => {
	const t = useTranslations('ProjectsPage');
	const p = useTranslations(`projects.${slug}`);
	const reduceMotion = useReducedMotion();

	const rotateX = useSpring(0, { stiffness: 250, damping: 20 });
	const rotateY = useSpring(0, { stiffness: 250, damping: 20 });
	const spotlightX = useMotionValue(0);
	const spotlightY = useMotionValue(0);
	const spotlight = useMotionTemplate`radial-gradient(420px circle at ${spotlightX}px ${spotlightY}px, color-mix(in oklab, var(--color-primary) 18%, transparent), transparent 65%)`;

	const onMouseMove = (event: MouseEvent<HTMLDivElement>) => {
		const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
		const x = event.clientX - left;
		const y = event.clientY - top;

		spotlightX.set(x);
		spotlightY.set(y);

		if (reduceMotion) return;

		rotateX.set((0.5 - y / height) * TILT * 2);
		rotateY.set((x / width - 0.5) * TILT * 2);
	};

	const onMouseLeave = () => {
		rotateX.set(0);
		rotateY.set(0);
	};

	const visibleTechnologies = technologies.slice(0, 4);
	const hiddenTechnologiesCount = technologies.length - visibleTechnologies.length;

	return (
		<motion.div
			className={`${className} group relative h-full rounded-2xl border border-border/60 bg-background/60 backdrop-blur-sm transition-[border-color,box-shadow] duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20`}
			style={{ rotateX, rotateY, transformPerspective: 1000 }}
			onMouseMove={onMouseMove}
			onMouseLeave={onMouseLeave}
		>
			{/* Cursor spotlight */}
			<motion.div
				aria-hidden
				className="pointer-events-none absolute inset-0 z-10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
				style={{ background: spotlight }}
			/>

			<Link href={PAGES.projectDetails(slug)} className="flex h-full flex-col">
				<div className="relative aspect-video overflow-hidden rounded-t-2xl">
					<ViewTransition name={projectImageTransitionName(slug)}>
						<Image
							src={`/assets/images/projects/${image}`}
							alt={p('title')}
							fill
							sizes="(min-width: 1152px) 560px, (min-width: 768px) 50vw, 100vw"
							className="object-cover object-top transition duration-500 group-hover:scale-105"
						/>
					</ViewTransition>

					{type && (
						<span
							className={`absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-md ${
								type === 'professional'
									? 'bg-primary/90 text-white'
									: 'bg-background/80 text-foreground'
							}`}
						>
							{t(`filters.${type}`)}
						</span>
					)}

					{/* Details reveal */}
					<div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center gap-2 bg-linear-to-t from-bg-dark/80 to-transparent pt-10 pb-4 font-medium text-white transition-transform duration-300 group-hover:translate-y-0">
						{t('viewProject')}
						<FiArrowRight />
					</div>
				</div>

				<div className="flex flex-1 flex-col gap-3 p-5">
					<div className="flex items-center justify-between gap-4">
						<h3 className="text-xl font-bold uppercase">{p('title')}</h3>
						<FiArrowUpRight className="shrink-0 text-xl text-primary-text transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
					</div>
					<p className="line-clamp-2 text-sm text-foreground/70">{p('summary')}</p>
					<ul className="mt-auto flex flex-wrap gap-2 pt-2">
						{visibleTechnologies.map((tech) => (
							<li
								key={tech}
								className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary-text"
							>
								{tech}
							</li>
						))}
						{hiddenTechnologiesCount > 0 && (
							<li className="rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-foreground/70">
								+{hiddenTechnologiesCount}
							</li>
						)}
					</ul>
				</div>
			</Link>
		</motion.div>
	);
};

export default ProjectCard;
