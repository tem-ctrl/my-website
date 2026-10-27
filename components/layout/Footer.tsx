import { FC } from 'react';
import { cacheLife } from 'next/cache';
import { useTranslations } from 'next-intl';
import SocialMedia from '@/components/pages/contact/SacialMedia';
import { SOCIAL_MEDIA } from '@/lib/constants';

// The current year is cached (refreshed daily) so the footer stays part of the static shell
const CurrentYear = async () => {
	'use cache';
	cacheLife('days');

	return new Date().getFullYear();
};

const Footer: FC = () => {
	const t = useTranslations('Footer');

	return (
		<footer className="flex w-full items-center justify-between gap-4 border-t border-line px-2.5 py-6 text-sm max-md:flex-col md:px-6 lg:px-14">
			<p>
				&copy; <CurrentYear /> Gilbert Temgoua. {t('rights')}
			</p>
			<div className="flex items-center gap-2">
				{SOCIAL_MEDIA.map((media) => (
					<SocialMedia key={`footer-social-${media.name}`} {...media} />
				))}
			</div>
		</footer>
	);
};

export default Footer;
