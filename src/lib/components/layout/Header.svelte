<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { personalInfo } from '$lib/data/personal';
  import { Menu, X } from 'lucide-svelte';
  import { AnimationUtils } from '$lib/utils/animations';

  // Browser-only GSAP import
  let gsap: any;
  
  async function initGSAP() {
    if (browser && !gsap) {
      const gsapModule = await import('gsap');
      gsap = gsapModule.gsap;
    }
    return gsap;
  }

  let isMenuOpen = false;
  let scrollY = 0;
  let isScrolled = false;
  let scrollOpacity = 0;

  const menuItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    // { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' }
  ];

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function closeMenu() {
    isMenuOpen = false;
  }

  // Enhanced hover animations
  async function handleNavHover(event: MouseEvent, isEntering: boolean) {
    const gsapInstance = await initGSAP();
    if (!gsapInstance) return;
    
    const target = event.target as HTMLElement;
    const underline = target.querySelector('.nav-underline') as HTMLElement;
    
    if (isEntering) {
      gsapInstance.to(target, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
      gsapInstance.to(underline, { scaleX: 1, duration: 0.4, ease: 'power2.out' });
    } else {
      gsapInstance.to(target, { scale: 1, duration: 0.3, ease: 'power2.out' });
      gsapInstance.to(underline, { scaleX: 0, duration: 0.4, ease: 'power2.out' });
    }
  }

  async function handleLogoHover(event: MouseEvent, isEntering: boolean) {
    const gsapInstance = await initGSAP();
    if (!gsapInstance) return;
    
    const target = event.target as HTMLElement;
    
    if (isEntering) {
      gsapInstance.to(target, { 
        scale: 1.1, 
        rotation: 5, 
        duration: 0.4, 
        ease: 'back.out(1.7)' 
      });
    } else {
      gsapInstance.to(target, { 
        scale: 1, 
        rotation: 0, 
        duration: 0.4, 
        ease: 'back.out(1.7)' 
      });
    }
  }

  async function handleCtaHover(event: MouseEvent, isEntering: boolean) {
    const gsapInstance = await initGSAP();
    if (!gsapInstance) return;
    
    const target = event.target as HTMLElement;
    
    if (isEntering) {
      gsapInstance.to(target, { 
        scale: 1.05, 
        y: -2, 
        boxShadow: '0 10px 25px rgba(16, 185, 129, 0.25)', 
        duration: 0.3, 
        ease: 'power2.out' 
      });
    } else {
      gsapInstance.to(target, { 
        scale: 1, 
        y: 0, 
        boxShadow: '0 0px 0px rgba(16, 185, 129, 0)', 
        duration: 0.3, 
        ease: 'power2.out' 
      });
    }
  }

  onMount(() => {
    const handleScroll = () => {
      scrollY = window.scrollY;
      isScrolled = scrollY > 20;
      
      // Calculate opacity based on scroll position (0-80px range for smoother transition)
      const maxScroll = 80;
      scrollOpacity = Math.min(scrollY / maxScroll, 1);
    };

    window.addEventListener('scroll', handleScroll);
    
    if (browser) {
      initGSAP().then(() => {
        // Animate header elements
        const logoElement = document.querySelector('.header-logo');
        if (logoElement) {
          AnimationUtils.fadeInUp(logoElement, 0.2);
        }

        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach((item, index) => {
          AnimationUtils.fadeInUp(item as HTMLElement, 0.3 + index * 0.1);
        });

        const ctaButton = document.querySelector('.header-cta');
        if (ctaButton) {
          AnimationUtils.fadeInUp(ctaButton as HTMLElement, 0.6);
        }
      });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<svelte:window bind:scrollY />

<!-- Header with enhanced glassmorphism effect -->
<nav 
  class="fixed top-0 left-0 right-0 z-[9999] transition-all duration-700 ease-out
         {isScrolled 
           ? 'bg-white/40 backdrop-blur-3xl shadow-2xl border-b border-white/30' 
           : 'bg-white/20 backdrop-blur-md'}"
  style="backdrop-filter: blur({scrollOpacity * 30 + 10}px) saturate(180%); 
         box-shadow: {isScrolled ? '0 8px 32px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)' : '0 4px 16px rgba(0, 0, 0, 0.05)'};
         border: {isScrolled ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid rgba(255, 255, 255, 0.1)'};
         background-image: {isScrolled ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)' : 'none'};"
>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16 md:h-20">
      <!-- Logo -->
      <a 
        href="#hero" 
        class="header-logo text-2xl font-bold text-gray-900 hover:text-text-primary transition-colors cursor-pointer flex-shrink-0 min-w-0"
        style="text-shadow: 0 1px 2px rgba(0, 0, 0, {0.1 + scrollOpacity * 0.1});"
        on:mouseenter={(e) => handleLogoHover(e, true)}
        on:mouseleave={(e) => handleLogoHover(e, false)}
      >
        <span class="truncate">{personalInfo.name.split(' ')[0]}</span>
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-8">
        {#each menuItems as item}
          <a
            href={item.href}
            class="nav-item relative text-gray-600 hover:text-text-primary transition-colors font-medium cursor-pointer py-2 px-1"
            style="text-shadow: 0 1px 2px rgba(0, 0, 0, {0.05 + scrollOpacity * 0.05});"
            on:click={closeMenu}
            on:mouseenter={(e) => handleNavHover(e, true)}
            on:mouseleave={(e) => handleNavHover(e, false)}
          >
            {item.label}
            <div class="nav-underline absolute bottom-0 left-0 w-full h-0.5 bg-text-primary transform scale-x-0 origin-left"></div>
          </a>
        {/each}
      </div>

      <!-- CTA Button -->
      <div class="hidden md:block">
        <a
          href="#contact"
          class="header-cta bg-text-primary hover:bg-gray-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 cursor-pointer shadow-lg"
          on:mouseenter={(e) => handleCtaHover(e, true)}
          on:mouseleave={(e) => handleCtaHover(e, false)}
        >
          Let's Talk
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button
        class="md:hidden text-gray-700 hover:text-text-primary transition-colors p-2 rounded-lg hover:bg-gray-100/50 flex-shrink-0"
        style="filter: drop-shadow(0 1px 2px rgba(0, 0, 0, {0.1 + scrollOpacity * 0.1}));"
        on:click={toggleMenu}
        aria-label="Toggle menu"
      >
        {#if isMenuOpen}
          <X size={24} />
        {:else}
          <Menu size={24} />
        {/if}
      </button>
    </div>
  </div>

  <!-- Mobile Menu -->
  <div
    class="md:hidden fixed inset-0 bg-white/30 backdrop-blur-3xl z-[9998] transition-all duration-300
           {isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}"
    style="backdrop-filter: blur(25px) saturate(180%); 
           border: 1px solid rgba(255, 255, 255, 0.3);
           box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4);
           background-image: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);"
  >
    <div class="flex flex-col items-center justify-center h-full space-y-8 px-6">
      {#each menuItems as item}
        <a
          href={item.href}
          class="mobile-nav-item relative text-2xl text-gray-700 hover:text-text-primary transition-colors font-semibold cursor-pointer py-3 px-6 rounded-lg hover:bg-gray-100/50"
          on:click={closeMenu}
          on:mouseenter={(e) => handleNavHover(e, true)}
          on:mouseleave={(e) => handleNavHover(e, false)}
        >
          {item.label}
          <div class="nav-underline absolute bottom-0 left-0 w-full h-0.5 bg-text-primary transform scale-x-0 origin-left"></div>
        </a>
      {/each}
      <a
        href="#contact"
        class="mobile-cta bg-text-primary hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 mt-8 cursor-pointer shadow-lg"
        on:click={closeMenu}
        on:mouseenter={(e) => handleCtaHover(e, true)}
        on:mouseleave={(e) => handleCtaHover(e, false)}
      >
        Let's Talk
      </a>
    </div>
  </div>
</nav>
