<script lang="ts">
	import Center from "$lib/components/Home/Center.svelte";
import "../app.css";
	// import PWABadge from '$/lib/PWABadge.svelte'
import { _ } from 'svelte-i18n';
</script>

<svelte:head>
	<title>{$_('home.title')}</title>
</svelte:head>

<Center />