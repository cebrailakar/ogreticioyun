import { addMessages, init, getLocaleFromNavigator } from 'svelte-i18n';

import trTR from './tr-TR.json';

addMessages('tr-tr', trTR);

init({
  fallbackLocale: 'tr-tr',
  initialLocale: getLocaleFromNavigator(),
});