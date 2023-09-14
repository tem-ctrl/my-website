'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next-intl/client';
import React, { ChangeEvent, useRef, useTransition } from 'react';

const LocaleSwitcher = () => {
	const t = useTranslations('LocaleSwitcher');
	const [isPending, startTransition] = useTransition();
	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();
	const switcherRef = useRef<HTMLSelectElement>(null);

	function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
		const nextLocale = event.target.value;

		startTransition(() => {
			router.replace(pathname, { locale: nextLocale });
		});
	}

	return (
		<label
			className={`${
				isPending && 'transition-opacity [&:disabled]:opacity-50'
			} !h-fit text-gray-500 dark:text-gray-700`}
		>
			<p className="sr-only">{t('label')}</p>
			<select
				className="outline-none inline-flex bg-transparent p-2 rounded-sm"
				defaultValue={locale}
				disabled={isPending}
				onChange={onSelectChange}
				ref={switcherRef}
			>
				{['en', 'fr'].map((cur) => (
					<option key={cur} value={cur}>
						{t('locale', { locale: cur })}
					</option>
				))}
			</select>
		</label>
	);
};

export default LocaleSwitcher;
