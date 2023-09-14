import { getUserLocale } from 'get-user-locale';

// Get the preferred locale
export const getLocale = () => getUserLocale({ fallbackLocale: 'en' })?.slice(0, 2);
