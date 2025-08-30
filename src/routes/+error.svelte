<script lang="ts">
  import { page } from '$app/stores';
  import { personalInfo } from '$lib/data/personal';
  import { Home, ArrowLeft } from 'lucide-svelte';

  $: status = $page.status;
  $: message = $page.error?.message || 'Something went wrong';
</script>

<svelte:head>
  <title>Error {status} - {personalInfo.name}</title>
  <meta name="description" content="An error occurred while loading the page." />
</svelte:head>

<main class="min-h-screen bg-gradient-to-br from-dark-100 via-dark-200 to-dark-100 flex items-center justify-center px-6">
  <div class="text-center max-w-md mx-auto">
    <!-- Error Code -->
    <div class="mb-8">
      <h1 class="text-8xl md:text-9xl font-bold text-accent mb-4">{status}</h1>
      <div class="w-24 h-1 bg-accent mx-auto mb-6"></div>
    </div>

    <!-- Error Message -->
    <div class="mb-8">
      <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">
        {#if status === 404}
          Page Not Found
        {:else if status === 500}
          Server Error
        {:else}
          Oops! Something went wrong
        {/if}
      </h2>
      <p class="text-gray-400 text-lg leading-relaxed">
        {#if status === 404}
          The page you're looking for doesn't exist or has been moved.
        {:else if status === 500}
          We're experiencing some technical difficulties. Please try again later.
        {:else}
          {message}
        {/if}
      </p>
    </div>

    <!-- Action Buttons -->
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <button
        on:click={() => history.back()}
        class="inline-flex items-center justify-center px-6 py-3 bg-dark-200 text-white rounded-lg font-medium hover:bg-dark-300 transition-colors duration-300"
      >
        <ArrowLeft size={20} class="mr-2" />
        Go Back
      </button>
      
      <a
        href="/"
        class="inline-flex items-center justify-center px-6 py-3 bg-accent text-dark-100 rounded-lg font-medium hover:bg-accent/90 transition-colors duration-300"
      >
        <Home size={20} class="mr-2" />
        Home Page
      </a>
    </div>

    <!-- Additional Help -->
    {#if status === 404}
      <div class="mt-12 pt-8 border-t border-gray-700">
        <p class="text-gray-500 text-sm mb-4">Looking for something specific?</p>
        <div class="flex flex-wrap gap-2 justify-center">
          <a href="/about" class="text-accent hover:text-accent/80 text-sm transition-colors">About</a>
          <span class="text-gray-600">•</span>
          <a href="/portfolio" class="text-accent hover:text-accent/80 text-sm transition-colors">Portfolio</a>
          <span class="text-gray-600">•</span>
          <a href="/services" class="text-accent hover:text-accent/80 text-sm transition-colors">Services</a>
          <span class="text-gray-600">•</span>
          <a href="/contact" class="text-accent hover:text-accent/80 text-sm transition-colors">Contact</a>
        </div>
      </div>
    {/if}
  </div>
</main>

<style>
  /* Subtle animation for the error code */
  h1 {
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.8;
    }
  }
</style>