'use client';

import React, { FC } from 'react';
import { useTranslations } from 'next-intl';
import Counter from '@/components/common/Counter';
import Reveal from '@/components/common/Reveal';
import { EXPERIENCE_START, PROJECTS, TECH_STACK } from '@/lib/constants';

// Computed on the client so the value never goes stale in the static page
const yearsOfExperience = () => {
	const start = new Date(EXPERIENCE_START);
	const now = new Date();
	const months = (now.getFullYear() - start.getFullYear()) * 12 + now.getMonth() - start.getMonth();

	return Math.floor(months / 12);
};

const STATS = [
	{ key: 'experience', value: yearsOfExperience, suffix: '+' },
	{ key: 'projects', value: PROJECTS.length, suffix: '' },
	{ key: 'technologies', value: TECH_STACK.length, suffix: '+' },
	{ key: 'remote', value: 100, suffix: '%' },
] as const;

const Stats: FC = () => {
	const t = useTranslations('HomePage.stats');

	return (
		<section className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
			{STATS.map(({ key, value, suffix }, i) => (
				<Reveal
					key={key}
					delay={i * 0.1}
					className="flex flex-col items-center gap-1 rounded-2xl border border-border/60 bg-background/60 p-6 text-center backdrop-blur-sm"
				>
					<Counter
						value={value}
						suffix={suffix}
						className="bg-linear-to-r from-primary to-fuchsia-500 bg-clip-text text-4xl font-black text-transparent md:text-5xl"
					/>
					<span className="text-sm text-foreground/70 uppercase">{t(key)}</span>
				</Reveal>
			))}
		</section>
	);
};

export default Stats;
