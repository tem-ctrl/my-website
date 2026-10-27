'use client';

import { FC } from 'react';
import { motion } from 'motion/react';
import { useLocale, useTranslations } from 'next-intl';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import Magnetic from '@/components/common/Magnetic';
import RotatingRole from '@/components/pages/home/RotatingRole';
import { Link } from '@/i18n/navigation';
import { cvPath } from '@/lib/constants';
import { PAGES } from '@/lib/routes';

const ROLES = ['Next.js', 'React & TypeScript', 'Tailwind CSS', 'GraphQL APIs'];

// Number of trailing headline words rendered with the brand gradient
const HIGHLIGHTED_WORDS = 3;

const fadeUp = (delay: number) => ({
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.6, delay, ease: 'easeOut' as const },
});

const Hero: FC = () => {
	const t = useTranslations('HomePage.hero');
	const locale = useLocale();
	const words = t('headline').split(' ');
	const headlineEnd = 0.2 + words.length * 0.06;

	return (
		<section className="grid min-h-page items-center gap-12 py-12 lg:grid-cols-[1.4fr_1fr]">
			<div className="flex flex-col items-start gap-6 max-lg:order-2 max-lg:items-center max-lg:text-center">
				<motion.span
					{...fadeUp(0)}
					className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
				>
					<span className="relative flex size-2">
						<span className="absolute inline-flex size-full animate-ping rounded-full bg-green-500 opacity-75" />
						<span className="relative inline-flex size-2 rounded-full bg-green-500" />
					</span>
					{t('badge')}
				</motion.span>

				<motion.p {...fadeUp(0.1)} className="text-lg text-foreground/80">
					{t('greeting')}
				</motion.p>

				<h1 className="text-4xl leading-tight font-black tracking-tight md:text-6xl">
					{words.map((word, i) => (
						<motion.span
							key={`${word}-${i}`}
							className={`inline-block ${
								i >= words.length - HIGHLIGHTED_WORDS
									? 'bg-linear-to-r from-primary to-fuchsia-500 bg-clip-text text-transparent'
									: ''
							}`}
							initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
							animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
							transition={{ duration: 0.5, delay: 0.2 + i * 0.06, ease: 'easeOut' }}
						>
							{word}&nbsp;
						</motion.span>
					))}
				</h1>

				<motion.p {...fadeUp(headlineEnd)} className="text-lg md:text-xl">
					{t('rolePrefix')} <RotatingRole roles={ROLES} />
				</motion.p>

				<motion.p {...fadeUp(headlineEnd + 0.1)} className="max-w-xl text-foreground/70">
					{t('intro')}
				</motion.p>

				<motion.div
					{...fadeUp(headlineEnd + 0.2)}
					className="mt-2 flex flex-wrap items-center gap-4 max-lg:justify-center"
				>
					<Magnetic>
						<Link
							href={PAGES.projects}
							className="group flex h-12 items-center gap-2 rounded-full bg-primary px-6 font-medium text-white shadow-lg shadow-primary/30 transition-shadow hover:shadow-xl hover:shadow-primary/40"
						>
							{t('viewWork')}
							<FiArrowRight className="transition-transform group-hover:translate-x-1" />
						</Link>
					</Magnetic>
					<Magnetic>
						<a
							href={cvPath(locale)}
							download
							className="flex h-12 items-center gap-2 rounded-full border border-primary/50 px-6 font-medium text-primary transition-colors hover:bg-primary hover:text-white"
						>
							<FiDownload />
							{t('downloadCv')}
						</a>
					</Magnetic>
				</motion.div>
			</div>

			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.8, ease: 'easeOut' }}
				className="relative mx-auto size-56 max-lg:order-1 md:size-80"
			>
				<div className="absolute -inset-6 rounded-full bg-linear-to-tr from-primary to-fuchsia-500 opacity-40 blur-3xl" />
				<div className="absolute -inset-1.5 rounded-full bg-[conic-gradient(from_0deg,var(--color-primary),transparent_35%,var(--color-fuchsia-500),transparent_70%,var(--color-primary))] motion-safe:animate-spin-slow" />
				<img
					src="/assets/images/me.png"
					alt={t('photoAlt')}
					className="object--contain relative size-full -scale-x-100 rounded-full border-4 border-background p-1 md:p-2"
				/>
			</motion.div>
		</section>
	);
};

export default Hero;
