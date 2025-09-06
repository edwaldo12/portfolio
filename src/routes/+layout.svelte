<script lang="ts">
  import '../app.css';
  import Header from '$lib/components/layout/Header.svelte';
  import Footer from '$lib/components/layout/Footer.svelte';
  import LoadingScreen from '$lib/components/ui/LoadingScreen.svelte';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

  // Check if we're on an error page
  $: isErrorPage = $page.error !== null;
  $: isHomePage = $page.url.pathname === '/';
  
  // Loading screen state
  let showLoadingScreen = true;
  let hasShownLoading = false;

  onMount(() => {
    if (browser) {
      // Check if loading screen has been shown in this session
      const hasShown = sessionStorage.getItem('loadingShown');
      if (hasShown) {
        showLoadingScreen = false;
        hasShownLoading = true;
      }
    }
  });

  function handleLoadingComplete() {
    showLoadingScreen = false;
    hasShownLoading = true;
    if (browser) {
      sessionStorage.setItem('loadingShown', 'true');
    }
  }
</script>

<!-- Loading Screen -->
{#if showLoadingScreen && isHomePage && !isErrorPage}
  <LoadingScreen 
    isVisible={showLoadingScreen} 
    onComplete={handleLoadingComplete} 
  />
{/if}

<!-- Main Content - hidden during loading -->
<div class="{showLoadingScreen && isHomePage && !isErrorPage ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500">
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
</div>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
  
  :global(body) {
    overflow-x: hidden;
  }
</style>