'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import React, { useState, useTransition } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const LocaleSwitcher = () => {
	const t = useTranslations('LocaleSwitcher');
	const [isPending, startTransition] = useTransition();
	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();
	const [currentLocale, setCurrentLocale] = useState(locale);
	const [showLanguages, setShowLanguages] = useState(false);

	const onLocaleChanged = (locale: string): void => {
		setCurrentLocale(locale);
		startTransition(() => {
			router.replace(pathname, { locale: locale, scroll: false });
		});
	};

	const flagSize = 18;

	return (
		<div
			className={`${
				isPending && 'opacity-50 transition-opacity'
			} relative flex h-full items-center justify-center text-sm`}
			onMouseEnter={() => setShowLanguages(true)}
			onMouseLeave={() => setShowLanguages(false)}
			onClick={() => setShowLanguages(!showLanguages)}
		>
			<p className="sr-only">{t('label')}</p>
			<div className="flex cursor-pointer items-center justify-start gap-1.5">
				<img
					src={`/assets/images/${currentLocale}-flag.png`}
					alt={t('imageAlt', { locale: currentLocale })}
					width={flagSize}
				/>
				<span>{t('locale', { locale: currentLocale })}</span>
				<FaChevronDown className={`${showLanguages && 'rotate-180'} inline text-sm`} />

				{showLanguages && (
					<div className="absolute top-12 -left-2 flex w-17.5 flex-col items-start gap-0 rounded-md border border-border bg-background p-0 [&>*:first-child]:rounded-t-md [&>*:last-child]:rounded-b-md">
						{routing.locales
							.filter((l) => !currentLocale.includes(l))
							.map((cur) => (
								<button
									key={cur}
									className="flex w-full items-center justify-start gap-2 px-3 py-1 hover:bg-primary hover:text-white"
									onClick={() => onLocaleChanged(cur)}
									name="language switcher"
								>
									<img
										src={`/assets/images/${cur}-flag.png`}
										alt={t('imageAlt', { locale: cur })}
										width={flagSize}
									/>
									<span>{t('locale', { locale: cur })}</span>
								</button>
							))}
					</div>
				)}
			</div>
		</div>
	);
};

export default LocaleSwitcher;
