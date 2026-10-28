import { EXPERIENCES } from '@/lib/constants';
import { YearMonth } from '@/lib/types';

const monthIndex = (date: YearMonth) => {
	const [year, month] = date.split('-').map(Number);

	return year * 12 + month - 1;
};

/** Months worked, counting each calendar month once where experiences overlap */
export const monthsOfExperience = (now = new Date()) => {
	const current = now.getFullYear() * 12 + now.getMonth();
	const months = new Set<number>();

	EXPERIENCES.forEach(({ start, end }) => {
		for (let m = monthIndex(start); m <= (end ? monthIndex(end) : current); m++) months.add(m);
	});

	return months.size;
};

/** 39 → '3 years 3 months' / '3 ans 3 mois' */
export const formatDuration = (months: number, locale: string) => {
	const isEn = locale.includes('en');
	const y = Math.floor(months / 12);
	const m = months % 12;

	const mths = isEn ? `month${m > 1 ? 's' : ''}` : 'mois';
	const yrs = isEn ? `year${y > 1 ? 's' : ''}` : `an${y > 1 ? 's' : ''}`;

	if (y === 0) return `${m} ${mths}`;
	if (m === 0) return `${y} ${yrs}`;

	return `${y} ${yrs} ${m} ${mths}`;
};

/** '2024-07' → 'Jul 2024' / 'Juil. 2024' */
export const formatMonth = (date: YearMonth, locale: string) => {
	const [year, month] = date.split('-').map(Number);
	const text = new Intl.DateTimeFormat(locale, {
		month: 'short',
		year: 'numeric',
		timeZone: 'UTC',
	}).format(Date.UTC(year, month - 1));

	return text.charAt(0).toUpperCase() + text.slice(1);
};
