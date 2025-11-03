<script lang="ts">
 // import PWABadge from './lib/PWABadge.svelte'
  import { _ } from "svelte-i18n";
  import Background from "./components/Background.svelte";
  import { Canvas } from '@threlte/core'
</script>

<svelte:head>
  <title>{$_('page_title')}</title>
</svelte:head>

<Canvas style="width: 100vw; height: 100vh;">
  <Background/>
</Canvas>