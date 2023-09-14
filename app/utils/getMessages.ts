import { notFound } from 'next/navigation';

export const getMessages = async (locale: string) => {
	try {
		return (await import(`../../messages/${locale}.json`)).default;
	} catch (error) {
		notFound();
	}
};
