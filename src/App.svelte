<script lang="ts">
 // import PWABadge from './lib/PWABadge.svelte'
 import { _ } from "svelte-i18n";
 import Navbar from "./components/Navbar.svelte";
</script>

<svelte:head>
  <title>{$_('page_title')}</title>
</svelte:head>
<main>
  <Navbar />
</main>