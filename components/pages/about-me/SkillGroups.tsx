import React, { FC } from 'react';
import { useTranslations } from 'next-intl';
import Reveal from '@/components/common/Reveal';
import { SKILL_GROUPS } from '@/lib/constants';

interface SkillGroupsProps {
	className?: string;
}

const SkillGroups: FC<SkillGroupsProps> = ({ className = '' }) => {
	const t = useTranslations('AboutPage.skillGroups');

	return (
		<div className={`${className} grid gap-6 md:grid-cols-3`}>
			{SKILL_GROUPS.map(({ key, items }, i) => (
				<Reveal
					key={key}
					delay={i * 0.15}
					className="flex flex-col gap-5 rounded-2xl border border-border/60 bg-background/60 p-6 backdrop-blur-sm"
				>
					<h3 className="text-lg font-bold uppercase">{t(key)}</h3>
					<ul className="flex flex-wrap gap-2">
						{items.map(({ name, icon }) => (
							<li
								key={name}
								className="flex items-center gap-2 rounded-xl border border-border/60 bg-background/60 px-3 py-2 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
							>
								<span className="text-lg">{icon}</span>
								{name}
							</li>
						))}
					</ul>
				</Reveal>
			))}
		</div>
	);
};

export default SkillGroups;
