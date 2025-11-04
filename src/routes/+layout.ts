import type { LayoutLoad } from './$types';
import '$lib/locale/load';
import { waitLocale } from 'svelte-i18n';

export const load: LayoutLoad = async () => {
	await waitLocale();
	return {
		localeReady: true
	};
};
