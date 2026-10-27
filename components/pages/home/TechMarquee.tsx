import React, { FC } from 'react';
import { useTranslations } from 'next-intl';
import Marquee from '@/components/common/Marquee';
import Reveal from '@/components/common/Reveal';
import SectionHeading from '@/components/common/SectionHeading';
import { TECH_STACK } from '@/lib/constants';
import { TechItem } from '@/lib/types';

const TechChip: FC<TechItem> = ({ name, icon }) => {
	return (
		<li className="flex items-center gap-3 rounded-xl border border-border/60 bg-background/60 px-5 py-3 whitespace-nowrap backdrop-blur-sm transition-colors hover:border-primary/50 hover:text-primary">
			<span className="text-2xl">{icon}</span>
			<span className="font-medium">{name}</span>
		</li>
	);
};

const TechMarquee: FC = () => {
	const t = useTranslations('HomePage.stack');

	return (
		<section className="flex flex-col gap-12">
			<SectionHeading title={t('title')} subtitle={t('subtitle')} />

			<Reveal>
				<Marquee speed={35}>
					{TECH_STACK.map((tech) => (
						<TechChip key={tech.name} {...tech} />
					))}
				</Marquee>
			</Reveal>
		</section>
	);
};

export default TechMarquee;
