<script>
    import { _ } from 'svelte-i18n';
</script>
<div class="h-screen flex flex-col items-center justify-center space-y-4 perspective-distant">
<!-- Title -->
<h1 class="text-6xl font-bold text-gray-800 -mt-12 mb-30 rotate-x-51 rotate-z-43 transform-3d">{$_("home.title").toUpperCase()}</h1>

<!-- Play Button -->
<button class="bg-custom-1 text-white px-6 py-3 w-45 hover:bg-white">
{$_("home.play")}
</button>

</div>
<!-- Credit -->