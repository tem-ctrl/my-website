import React, { FC } from 'react';
import { useTranslations } from 'next-intl';
import SectionHeading from '@/components/common/SectionHeading';
import { TECH_STACK } from '@/lib/constants';

// Infinite logo strip: the list is rendered twice and shifted by -50% in a loop.
// With reduced motion, the duplicate is hidden and the logos simply wrap.
const TechMarquee: FC = () => {
	const t = useTranslations('HomePage.stack');

	return (
		<section className="flex flex-col gap-12">
			<SectionHeading title={t('title')} subtitle={t('subtitle')} />

			<div className="group overflow-hidden mask-[linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
				<div className="flex w-max group-hover:[animation-play-state:paused] motion-safe:animate-marquee motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center">
					{[0, 1].map((copy) => (
						<ul
							key={copy}
							aria-hidden={copy === 1}
							className={`flex gap-4 pr-4 motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:pr-0 ${
								copy === 1 ? 'motion-reduce:hidden' : ''
							}`}
						>
							{TECH_STACK.map(({ name, icon }) => (
								<li
									key={name}
									className="flex items-center gap-3 rounded-xl border border-border/60 bg-background/60 px-5 py-3 whitespace-nowrap backdrop-blur-sm transition-colors hover:border-primary/50 hover:text-primary"
								>
									<span className="text-2xl">{icon}</span>
									<span className="font-medium">{name}</span>
								</li>
							))}
						</ul>
					))}
				</div>
			</div>
		</section>
	);
};

export default TechMarquee;
