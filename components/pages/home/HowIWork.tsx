import React, { FC } from 'react';
import { useTranslations } from 'next-intl';
import { FiCode, FiFigma, FiShare2 } from 'react-icons/fi';
import Reveal from '@/components/common/Reveal';
import SectionHeading from '@/components/common/SectionHeading';

const POINTS = [
	{ key: 'design', icon: <FiFigma /> },
	{ key: 'quality', icon: <FiCode /> },
	{ key: 'api', icon: <FiShare2 /> },
] as const;

const HowIWork: FC = () => {
	const t = useTranslations('HomePage.howIWork');

	return (
		<section className="flex flex-col gap-12">
			<SectionHeading title={t('title')} subtitle={t('subtitle')} />

			<div className="grid gap-6 md:grid-cols-3">
				{POINTS.map(({ key, icon }, i) => (
					<Reveal
						key={key}
						delay={i * 0.15}
						className="group flex flex-col gap-4 rounded-2xl border border-border/60 bg-background/60 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-primary/50"
					>
						<span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-2xl text-primary-text transition-colors group-hover:bg-primary group-hover:text-white">
							{icon}
						</span>
						<h3 className="text-xl font-bold">{t(`${key}.title`)}</h3>
						<p className="text-foreground/70">{t(`${key}.text`)}</p>
					</Reveal>
				))}
			</div>
		</section>
	);
};

export default HowIWork;
