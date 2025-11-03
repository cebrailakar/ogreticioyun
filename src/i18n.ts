import { addMessages,init, getLocaleFromNavigator } from 'svelte-i18n';

import trTR from './language/tr-TR.json';

addMessages('tr-tr', trTR);

init({
  fallbackLocale: 'tr-tr',
  initialLocale: getLocaleFromNavigator(),
});