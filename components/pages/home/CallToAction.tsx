import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { FiMail } from 'react-icons/fi';
import Magnetic from '@/components/common/Magnetic';
import Reveal from '@/components/common/Reveal';
import { Link } from '@/i18n/navigation';
import { CONTACT_EMAIL } from '@/lib/constants';
import { PAGES } from '@/lib/routes';

const CallToAction: FC = () => {
	const t = useTranslations('HomePage.cta');

	return (
		<Reveal>
			<section className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary to-accent-strong px-6 py-16 text-center text-white md:px-16 md:py-20">
				<div
					aria-hidden
					className="absolute inset-0 bg-[radial-gradient(rgb(255_255_255/0.15)_1px,transparent_1px)] bg-size-[20px_20px]"
				/>
				<div className="relative flex flex-col items-center gap-6">
					<h2 className="text-3xl font-black md:text-5xl">{t('title')}</h2>
					<p className="max-w-2xl text-white/85 md:text-lg">{t('text')}</p>
					<div className="flex flex-wrap items-center justify-center gap-6">
						<Magnetic>
							<Link
								href={PAGES.contact}
								className="flex h-12 items-center rounded-full bg-white px-8 font-semibold text-primary shadow-lg transition-shadow hover:shadow-xl"
							>
								{t('button')}
							</Link>
						</Magnetic>
						<a
							href={`mailto:${CONTACT_EMAIL}`}
							className="flex items-center gap-2 text-white/90 hover:text-white hover:underline"
						>
							<FiMail />
							{CONTACT_EMAIL}
						</a>
					</div>
				</div>
			</section>
		</Reveal>
	);
};

export default CallToAction;
