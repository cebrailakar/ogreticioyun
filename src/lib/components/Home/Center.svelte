<script>
    import { _ } from 'svelte-i18n';
</script>
<div class="h-screen flex flex-col items-center justify-center space-y-4">
<!-- Title -->
<h1 class="text-6xl font-bold text-gray-800 -mt-12 mb-30">{$_("home.title")}</h1>

<!-- Play Button -->
<button class="bg-blue-500 text-white px-6 py-3 w-45">
{$_("home.play")}
</button>

</div>
<!-- Credit -->