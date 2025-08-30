<script lang="ts">
  import '../app.css';
  import Header from '$lib/components/layout/Header.svelte';
  import Footer from '$lib/components/layout/Footer.svelte';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';

  // Check if we're on an error page
  $: isErrorPage = $page.error !== null;
  $: isHomePage = $page.url.pathname === '/';
</script>

<!-- Only show header and footer on non-error pages -->
{#if !isErrorPage}
  <Header />
{/if}

<main class="{isErrorPage ? '' : 'min-h-screen'}">
  <slot />
</main>

{#if !isErrorPage}
  <Footer />
{/if}

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
  
  :global(body) {
    overflow-x: hidden;
  }
</style>