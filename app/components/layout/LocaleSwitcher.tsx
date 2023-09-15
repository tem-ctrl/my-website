'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next-intl/client';
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
			router.replace(pathname, { locale });
		});
	};

	const flagSize = 18;

	return (
		<div
			className={`${
				isPending && 'transition-opacity opacity-50'
			} text-gray-500 relative h-full flex justify-center items-center text-sm`}
			onMouseEnter={() => setShowLanguages(true)}
			onMouseLeave={() => setShowLanguages(false)}
			onClick={() => setShowLanguages(!showLanguages)}
		>
			<p className="sr-only">{t('label')}</p>
			<div className="flex items-center justify-start gap-1.5 cursor-pointer">
				<img
					src={`/assets/images/${currentLocale}-flag.png`}
					alt={t('imageAlt', { locale: currentLocale })}
					width={flagSize}
				/>
				<span>{t('locale', { locale: currentLocale })}</span>
				<FaChevronDown className={`${showLanguages && 'rotate-180'} inline text-sm`} />

				{showLanguages && (
					<div className="w-[70px] flex flex-col items-start gap-0 p-0 rounded-md border border-gray-300 dark:border-gray-600  absolute top-12 -left-[8px] bg-bgLight dark:bg-bgDark [&>*:first-child]:rounded-t-md [&>*:last-child]:rounded-b-md">
						{['en', 'fr'].map((cur) => (
							<button
								key={cur}
								className="flex items-center justify-start gap-2 hover:bg-primary hover:text-white w-full py-1 px-3"
								onClick={() => onLocaleChanged(cur)}
							>
								<img src={`/assets/images/${cur}-flag.png`} alt={t('imageAlt')} width={flagSize} />
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
