<script lang="ts">
  import { onMount } from 'svelte';
  import { personalInfo } from '$lib/data/personal';
  import { Menu, X } from 'lucide-svelte';
  import { gsap } from 'gsap';
  import { AnimationUtils } from '$lib/utils/animations';

  let isMenuOpen = false;
  let scrollY = 0;
  let isScrolled = false;

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
  function handleNavHover(event: MouseEvent, isEntering: boolean) {
    const target = event.target as HTMLElement;
    const underline = target.querySelector('.nav-underline') as HTMLElement;
    
    if (isEntering) {
      gsap.to(target, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
      gsap.to(underline, { scaleX: 1, duration: 0.4, ease: 'power2.out' });
    } else {
      gsap.to(target, { scale: 1, duration: 0.3, ease: 'power2.out' });
      gsap.to(underline, { scaleX: 0, duration: 0.4, ease: 'power2.out' });
    }
  }

  function handleLogoHover(event: MouseEvent, isEntering: boolean) {
    const target = event.target as HTMLElement;
    
    if (isEntering) {
      gsap.to(target, { 
        scale: 1.1, 
        rotation: 5, 
        duration: 0.4, 
        ease: 'back.out(1.7)' 
      });
    } else {
      gsap.to(target, { 
        scale: 1, 
        rotation: 0, 
        duration: 0.4, 
        ease: 'back.out(1.7)' 
      });
    }
  }

  function handleCtaHover(event: MouseEvent, isEntering: boolean) {
    const target = event.target as HTMLElement;
    
    if (isEntering) {
      gsap.to(target, { 
        scale: 1.05, 
        y: -2, 
        boxShadow: '0 10px 25px rgba(34, 197, 94, 0.3)', 
        duration: 0.3, 
        ease: 'power2.out' 
      });
    } else {
      gsap.to(target, { 
        scale: 1, 
        y: 0, 
        boxShadow: '0 0px 0px rgba(34, 197, 94, 0)', 
        duration: 0.3, 
        ease: 'power2.out' 
      });
    }
  }

  onMount(() => {
    const handleScroll = () => {
      scrollY = window.scrollY;
      isScrolled = scrollY > 50;
    };

    window.addEventListener('scroll', handleScroll);
    
    // Animate header elements
    const logoElement = document.querySelector('.header-logo');
    if (logoElement) {
      AnimationUtils.fadeInUp(logoElement, { delay: 0.2 });
    }
    
    const navItems = document.querySelectorAll('.nav-item');
    if (navItems.length > 0) {
      AnimationUtils.staggerAnimation(navItems, 'fadeInUp');
    }
    
    const ctaElement = document.querySelector('.header-cta');
    if (ctaElement) {
      AnimationUtils.fadeInUp(ctaElement, { delay: 0.8 });
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<header
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-300
         {isScrolled ? 'bg-dark-100/95 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'}"
>
  <nav class="container mx-auto px-6 py-4">
    <div class="flex items-center justify-between">
      <!-- Logo -->
      <a 
        href="#hero" 
        class="header-logo text-2xl font-bold text-white hover:text-accent transition-colors cursor-pointer"
        on:mouseenter={(e) => handleLogoHover(e, true)}
        on:mouseleave={(e) => handleLogoHover(e, false)}
      >
        {personalInfo.name.split(' ')[0]}
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-8">
        {#each menuItems as item}
          <a
            href={item.href}
            class="nav-item relative text-gray-300 hover:text-accent transition-colors font-medium cursor-pointer py-2 px-1"
            on:click={closeMenu}
            on:mouseenter={(e) => handleNavHover(e, true)}
            on:mouseleave={(e) => handleNavHover(e, false)}
          >
            {item.label}
            <div class="nav-underline absolute bottom-0 left-0 w-full h-0.5 bg-accent transform scale-x-0 origin-left"></div>
          </a>
        {/each}
      </div>

      <!-- CTA Button -->
      <div class="hidden md:block">
        <a
          href="#contact"
          class="header-cta bg-accent text-dark-100 px-6 py-2 rounded-lg font-medium hover:bg-accent/90 transition-colors cursor-pointer"
          on:mouseenter={(e) => handleCtaHover(e, true)}
          on:mouseleave={(e) => handleCtaHover(e, false)}
        >
          Let's Talk
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button
        class="md:hidden text-white hover:text-accent transition-colors"
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

  <!-- Mobile Menu -->
  <div
    class="md:hidden fixed inset-0 bg-dark-100/95 backdrop-blur-md z-40 transition-all duration-300
           {isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}"
  >
    <div class="flex flex-col items-center justify-center h-full space-y-8">
      {#each menuItems as item}
        <a
          href={item.href}
          class="mobile-nav-item relative text-2xl text-gray-300 hover:text-accent transition-colors font-medium cursor-pointer py-2 px-4"
          on:click={closeMenu}
          on:mouseenter={(e) => handleNavHover(e, true)}
          on:mouseleave={(e) => handleNavHover(e, false)}
        >
          {item.label}
          <div class="nav-underline absolute bottom-0 left-0 w-full h-0.5 bg-accent transform scale-x-0 origin-left"></div>
        </a>
      {/each}
      <a
        href="#contact"
        class="mobile-cta bg-accent text-dark-100 px-8 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors mt-8 cursor-pointer"
        on:click={closeMenu}
        on:mouseenter={(e) => handleCtaHover(e, true)}
        on:mouseleave={(e) => handleCtaHover(e, false)}
      >
        Let's Talk
      </a>
    </div>
  </div>
  </nav>
</header>