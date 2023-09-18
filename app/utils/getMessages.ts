import NotFound from '@/app/components/common/NotFound';

export const getMessages = async (locale: string) => {
	try {
		return (await import(`../i18n/${locale}.json`)).default;
	} catch (error) {
		NotFound();
	}
};
