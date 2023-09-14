'use client';

import React, { FC } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { i18n } from '@/i18n-config';

interface LanguageSwitcherProps {
	className?: string;
}

const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ className = '' }) => {
	const pathName = usePathname();
	const router = useRouter();

	const redirectedPathName = (locale: string) => {
		if (!pathName) return '/';
		const segments = pathName.split('/');

		segments[1] = locale;

		return segments.join('/');
	};

	return (
		<ul className={`${className} flex gap-1 items-start`}>
			{i18n.locales.map((locale) => (
				<li
					role="button"
					key={locale}
					className="flex items-center gap-1"
					onClick={() => router.push(redirectedPathName(locale))}
				>
					<img
						src={`./assets/images/${locale}-flag.png`}
						alt={`drapeau ${locale === 'en' ? 'anglais' : 'français'}`}
						width={40}
						height={40}
					/>
					<p>{locale}</p>
				</li>
			))}
		</ul>
	);
};

export default LanguageSwitcher;
