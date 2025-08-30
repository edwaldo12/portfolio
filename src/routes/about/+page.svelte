<script lang="ts">
  import { personalInfo } from '$lib/data/personal';
  import About from '$lib/components/sections/About.svelte';
</script>

<svelte:head>
  <title>About - {personalInfo.name}</title>
  <meta name="description" content="Learn more about {personalInfo.name}, a passionate full-stack developer with expertise in modern web technologies." />
</svelte:head>

<main class="min-h-screen bg-gradient-to-br from-dark-100 via-dark-200 to-dark-100">
  <About />
</main>