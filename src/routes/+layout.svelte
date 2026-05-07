<script lang="ts">
  import '../app.css';
  import Header from '$lib/components/layout/Header.svelte';
  import Footer from '$lib/components/layout/Footer.svelte';
  import { page } from '$app/stores';

  $: isErrorPage = $page.error !== null;
</script>

<div>
  {#if !isErrorPage}
    <Header />
  {/if}

  <main class="{isErrorPage ? '' : 'min-h-screen'}">
    <slot />
  </main>

  {#if !isErrorPage}
    <Footer />
  {/if}
</div>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
  
  :global(body) {
    overflow-x: hidden;
  }
</style>
