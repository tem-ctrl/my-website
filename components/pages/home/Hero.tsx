import Image from 'next/image';
import { CSSProperties, FC } from 'react';
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

// Entrance animations are plain CSS (see --animate-* in globals.css) so they play on first
// paint, before JavaScript loads; this keeps the hero fast to show (LCP).
const delay = (seconds: number): CSSProperties => ({ animationDelay: `${seconds}s` });

const Hero: FC = () => {
	const t = useTranslations('HomePage.hero');
	const locale = useLocale();
	const words = t('headline').split(' ');
	const headlineEnd = 0.2 + words.length * 0.06;

	return (
		<section className="grid min-h-page items-center gap-12 py-12 lg:grid-cols-[1.4fr_1fr]">
			<div className="flex flex-col items-start gap-6 max-lg:order-2 max-lg:items-center max-lg:text-center">
				<span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary-text motion-safe:animate-fade-up">
					<span className="relative flex size-2">
						<span className="absolute inline-flex size-full animate-ping rounded-full bg-green-500 opacity-75" />
						<span className="relative inline-flex size-2 rounded-full bg-green-500" />
					</span>
					{t('badge')}
				</span>

				<p className="text-lg text-foreground/80 motion-safe:animate-fade-up" style={delay(0.1)}>
					{t('greeting')}
				</p>

				<h1 className="text-4xl leading-tight font-black tracking-tight md:text-6xl">
					{words.map((word, i) => (
						<span
							key={`${word}-${i}`}
							className={`inline-block motion-safe:animate-blur-in ${
								i >= words.length - HIGHLIGHTED_WORDS
									? 'bg-linear-to-r from-primary to-fuchsia-500 bg-clip-text text-transparent'
									: ''
							}`}
							style={delay(0.2 + i * 0.06)}
						>
							{word}&nbsp;
						</span>
					))}
				</h1>

				<p className="text-lg motion-safe:animate-fade-up md:text-xl" style={delay(headlineEnd)}>
					{t('rolePrefix')} <RotatingRole roles={ROLES} />
				</p>

				<p
					className="max-w-xl text-foreground/70 motion-safe:animate-fade-up"
					style={delay(headlineEnd + 0.1)}
				>
					{t('intro')}
				</p>

				<div
					className="mt-2 flex flex-wrap items-center gap-4 motion-safe:animate-fade-up max-lg:justify-center"
					style={delay(headlineEnd + 0.2)}
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
							className="flex h-12 items-center gap-2 rounded-full border border-primary/50 px-6 font-medium text-primary-text transition-colors hover:bg-primary hover:text-white"
						>
							<FiDownload />
							{t('downloadCv')}
						</a>
					</Magnetic>
				</div>
			</div>

			<div className="relative mx-auto size-56 motion-safe:animate-zoom-in max-lg:order-1 md:size-80">
				<div className="absolute -inset-6 rounded-full bg-linear-to-tr from-primary to-fuchsia-500 opacity-40 blur-3xl" />
				<div className="absolute -inset-1.5 rounded-full bg-[conic-gradient(from_0deg,var(--color-primary),transparent_35%,var(--color-fuchsia-500),transparent_70%,var(--color-primary))] motion-safe:animate-spin-slow" />
				<Image
					src="/assets/images/me.png"
					alt={t('photoAlt')}
					width={392}
					height={475}
					sizes="(min-width: 768px) 320px, 224px"
					loading="eager"
					fetchPriority="high"
					className="relative size-full -scale-x-100 rounded-full border-4 border-background object-contain p-1 md:p-2"
				/>
			</div>
		</section>
	);
};

export default Hero;
