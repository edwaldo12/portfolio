<script lang="ts">
  import { personalInfo } from '$lib/data/personal';
  import Portfolio from '$lib/components/sections/Portfolio.svelte';
</script>

<svelte:head>
  <title>Portfolio - {personalInfo.name}</title>
  <meta name="description" content="Explore {personalInfo.name}'s portfolio showcasing innovative web applications and development projects." />
</svelte:head>

<main class="min-h-screen bg-gradient-to-br from-dark-100 via-dark-200 to-dark-100">
  <Portfolio />
</main>