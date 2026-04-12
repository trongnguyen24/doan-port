import { browser } from '$app/environment';
import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

const defaultLocale = 'en';

register('en', () => import('./locales/en.json'));
register('vi', () => import('./locales/vi.json'));

init({
	fallbackLocale: defaultLocale,
	initialLocale: browser ? localStorage.getItem('locale') || defaultLocale : defaultLocale
});
