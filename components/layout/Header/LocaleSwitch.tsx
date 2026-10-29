'use client';

import { useOptimistic, useTransition } from 'react';
import { motion } from 'motion/react';
import { Locale, useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

const LocaleSwitch = () => {
	const t = useTranslations('LocaleSwitch');
	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();
	const [isPending, startTransition] = useTransition();
	const [activeLocale, setActiveLocale] = useOptimistic(locale);

	const onLocaleChange = (nextLocale: Locale) => {
		if (nextLocale === activeLocale) return;

		startTransition(() => {
			setActiveLocale(nextLocale);
			router.replace(pathname, { locale: nextLocale, scroll: false });
		});
	};

	return (
		<div
			role="group"
			aria-label={t('label')}
			aria-busy={isPending}
			className="flex items-center rounded-full border border-border/60 bg-background/60 p-0.5 text-xs font-semibold"
		>
			{routing.locales.map((cur) => {
				const isActive = cur === activeLocale;

				return (
					<button
						key={cur}
						type="button"
						lang={cur}
						aria-pressed={isActive}
						aria-label={t('name', { locale: cur })}
						onClick={() => onLocaleChange(cur)}
						className={`${
							isActive ? 'text-white' : 'text-foreground/70 hover:text-primary-text'
						} relative cursor-pointer rounded-full px-2.5 py-1 transition-colors`}
					>
						{isActive && (
							<motion.span
								layoutId="locale-indicator"
								className="absolute inset-0 rounded-full bg-primary shadow-md shadow-primary/30"
								transition={{ type: 'spring', stiffness: 500, damping: 35 }}
							/>
						)}
						<span className="relative">{t('locale', { locale: cur })}</span>
					</button>
				);
			})}
		</div>
	);
};

export default LocaleSwitch;
