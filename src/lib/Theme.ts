
import { writable } from 'svelte/store';
const initialTheme = 'light';

export const theme = writable(initialTheme);

export function toggleTheme() {
  theme.update(t => {
    const newTheme = t === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    return newTheme;
  });
}

if (typeof window !== 'undefined') {
  document.documentElement.setAttribute('data-theme', initialTheme);
}
