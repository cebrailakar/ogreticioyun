import { mount } from 'svelte'
import './app.css'
import './lib/Theme'
import App from './App.svelte'
import "./i18n";
import { waitLocale } from 'svelte-i18n'

const app = mount(App, {
  target: document.getElementById('app')!,
})
export async function preload() {
    return waitLocale()
}

export default app
