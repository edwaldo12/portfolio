<script lang="ts">
  import { personalInfo } from '$lib/data/personal';
  import Services from '$lib/components/sections/Services.svelte';
</script>

<svelte:head>
  <title>Services - {personalInfo.name}</title>
  <meta name="description" content="Discover the professional services offered by {personalInfo.name}, including web development, consulting, and more." />
</svelte:head>

<main class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
  <Services />
</main>