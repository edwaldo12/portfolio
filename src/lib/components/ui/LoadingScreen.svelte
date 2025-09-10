<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { personalInfo } from '$lib/data/personal';

  export let isVisible = true;
  export let onComplete: () => void = () => {};

  let loadingContainer: HTMLElement;
  let logoText: HTMLElement;
  let subtitle: HTMLElement;
  let progressBar: HTMLElement;
  let dots: HTMLElement[] = [];

  // Browser-only GSAP import
  let gsap: any;
  
  async function initGSAP() {
    if (browser && !gsap) {
      const gsapModule = await import('gsap');
      gsap = gsapModule.gsap;
    }
    return gsap;
  }

  onMount(async () => {
    if (!browser) return;
    
    const gsapInstance = await initGSAP();
    if (!gsapInstance) return;

    // Initial state - everything hidden
    gsapInstance.set([logoText, subtitle, progressBar], {
      opacity: 0,
      y: 30
    });

    // Animate dots with much slower, more elegant timing
    dots.forEach((dot, index) => {
      gsapInstance.set(dot, { scale: 0.3, opacity: 0.2 });
      gsapInstance.to(dot, {
        scale: 1.2,
        opacity: 0.8,
        duration: 2.5,
        delay: index * 0.4,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
      });
    });

    // Main animation sequence with lightning-fast timing
    const tl = gsapInstance.timeline();

    // Name "Edwaldo": 0.4s delay + 0.7s fade-in duration
    tl.to(logoText, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      delay: 0.4,
      ease: 'power3.out'
    })
    // Add breathing effect to the logo text
    .to(logoText, {
      scale: 1.02,
      duration: 0.6,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut'
    }, '-=0.15')
    // Subtitle "Fullstack Engineer" appears after logo
    .to(subtitle, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power3.out'
    }, '-=0.4')
    // Progress bar appears after subtitle
    .to(progressBar, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power3.out'
    })
    // Progress bar fills up
    .to(progressBar.querySelector('.progress-fill'), {
      width: '100%',
      duration: 1.2,
      ease: 'power2.inOut'
    }, '-=0.25');

    // Auto-hide after 2.8 seconds to allow progress bar to complete
    setTimeout(() => {
      hideLoadingScreen();
    }, 2800);
  });

  async function hideLoadingScreen() {
    if (!browser) return;
    
    const gsapInstance = await initGSAP();
    if (!gsapInstance) return;

    // Much slower, more luxurious fade-out with staggered elements
    const tl = gsapInstance.timeline();
    
    // First fade out the progress bar and dots
    tl.to([progressBar, ...dots], {
      opacity: 0,
      y: -20,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.inOut'
    })
    // Then fade out subtitle
    .to(subtitle, {
      opacity: 0,
      y: -30,
      duration: 1,
      ease: 'power2.inOut'
    }, '-=0.4')
    // Then fade out logo with scale effect
    .to(logoText, {
      opacity: 0,
      y: -40,
      scale: 0.95,
      duration: 1.2,
      ease: 'power2.inOut'
    }, '-=0.6')
    // Finally fade out the entire container
    .to(loadingContainer, {
      opacity: 0,
      duration: 1.5,
      ease: 'power3.inOut',
      onComplete: () => {
        isVisible = false;
        onComplete();
      }
    }, '-=0.8');
  }
</script>

{#if isVisible}
  <div 
    bind:this={loadingContainer}
    class="fixed inset-0 z-[10000] bg-white flex items-center justify-center overflow-hidden"
  >
    <!-- Enhanced Background Pattern with Gradual Transitions -->
    <div class="absolute inset-0 opacity-8">
      <div class="absolute inset-0 bg-gradient-to-br from-accent/8 via-accent/3 via-transparent to-accent/5"></div>
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/4 rounded-full blur-3xl animate-pulse-slow"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/3 rounded-full blur-3xl animate-pulse-slow" style="animation-delay: 2s;"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/2 rounded-full blur-[100px] animate-pulse-slow" style="animation-delay: 4s;"></div>
    </div>

    <!-- Main Content -->
    <div class="relative text-center px-8">
      <!-- Logo/Name -->
      <div bind:this={logoText} class="mb-4">
        <h1 class="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight">
          {personalInfo.name.split(' ')[0]}
        </h1>
        <div class="w-24 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
      </div>

      <!-- Subtitle -->
      <div bind:this={subtitle} class="mb-12">
        <p class="text-xl md:text-2xl text-gray-600 font-light tracking-wide">
          Fullstack Engineer
        </p>
      </div>

      <!-- Progress Bar -->
      <div bind:this={progressBar} class="mb-8">
        <div class="w-64 h-1 bg-gray-300 rounded-full mx-auto overflow-hidden">
          <div class="progress-fill h-full bg-gradient-to-r from-accent to-green-400 rounded-full w-0"></div>
        </div>
      </div>

      <!-- Loading Dots -->
      <div class="flex justify-center space-x-2">
        {#each Array(3) as _, i}
          <div 
            bind:this={dots[i]}
            class="w-3 h-3 bg-accent rounded-full"
          ></div>
        {/each}
      </div>

      <!-- Loading Text -->
      <div class="mt-6">
        <p class="text-sm text-gray-500 tracking-widest uppercase">
          Loading Experience
        </p>
      </div>
    </div>

    <!-- Enhanced Decorative Elements with Slower Animations -->
    <div class="absolute top-8 left-8 w-16 h-16 border border-accent/20 rounded-full animate-pulse-slow"></div>
    <div class="absolute bottom-8 right-8 w-12 h-12 border border-accent/15 rounded-full animate-pulse-slow" style="animation-delay: 1.2s;"></div>
    <div class="absolute top-1/3 right-16 w-8 h-8 border border-accent/12 rounded-full animate-pulse-slow" style="animation-delay: 2.4s;"></div>
    <div class="absolute top-16 right-8 w-6 h-6 bg-accent/8 rounded-full animate-pulse-slow" style="animation-delay: 3.6s;"></div>
    <div class="absolute bottom-1/3 left-12 w-10 h-10 border border-accent/10 rounded-full animate-pulse-slow" style="animation-delay: 4.8s;"></div>
    
    <!-- Additional floating elements -->
    <div class="absolute top-1/4 left-1/3 w-2 h-2 bg-accent/20 rounded-full animate-float" style="animation-delay: 1s;"></div>
    <div class="absolute bottom-1/4 right-1/3 w-3 h-3 bg-accent/15 rounded-full animate-float" style="animation-delay: 2.5s;"></div>
  </div>
{/if}

<style>
  @keyframes pulse {
    0%, 100% {
      opacity: 0.2;
      transform: scale(1);
    }
    50% {
      opacity: 0.5;
      transform: scale(1.05);
    }
  }

  @keyframes pulse-slow {
    0%, 100% {
      opacity: 0.1;
      transform: scale(0.95);
    }
    50% {
      opacity: 0.6;
      transform: scale(1.08);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px) scale(1);
      opacity: 0.3;
    }
    33% {
      transform: translateY(-8px) scale(1.1);
      opacity: 0.7;
    }
    66% {
      transform: translateY(4px) scale(0.9);
      opacity: 0.5;
    }
  }

  .animate-pulse-slow {
    animation: pulse-slow 4s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
  }

  .animate-float {
    animation: float 6s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
  }
</style>