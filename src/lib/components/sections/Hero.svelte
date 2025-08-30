<script lang="ts">
  import { onMount } from 'svelte';
  import { ChevronDown, Download, Mail } from 'lucide-svelte';
  import { personalInfo } from '$lib/data/personal';
  import { gsap } from 'gsap';
  import { AnimationUtils } from '$lib/utils/animations';

  let heroElement: HTMLElement;
  let typedText = '';
  let currentRoleIndex = 0;
  let isDeleting = false;
  let typeSpeed = 100;

  const roles = [
    'Fullstack Engineer',
    'Software Engineer',
    'Web Developer',
    'Backend Engineer',
    'Frontend Engineer'
  ];

  onMount(() => {
    // GSAP Timeline for hero animations
    const tl = gsap.timeline();
    
    // Animate hero content
    tl.from('.hero-greeting', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power2.out'
    })
    .from('.hero-name', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.6')
    .from('.hero-role', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.6')
    .from('.hero-bio', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.4')
    .from('.hero-stats', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.4')
    .from('.hero-buttons', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.4');
    
    // Typing animation
    const typeWriter = () => {
      const currentRole = roles[currentRoleIndex];
      
      if (isDeleting) {
        typedText = currentRole.substring(0, typedText.length - 1);
        typeSpeed = 50;
      } else {
        typedText = currentRole.substring(0, typedText.length + 1);
        typeSpeed = 100;
      }

      if (!isDeleting && typedText === currentRole) {
        setTimeout(() => {
          isDeleting = true;
        }, 2000);
      } else if (isDeleting && typedText === '') {
        isDeleting = false;
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
      }

      setTimeout(typeWriter, typeSpeed);
    };

    // Start typing animation after initial animations
    setTimeout(typeWriter, 1500);

    // Scroll indicator animation with GSAP
    gsap.to('.scroll-indicator', {
      y: 10,
      duration: 1,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1
    });
    
    // Floating animation for decorative elements
    gsap.to('.hero-decoration', {
      y: 15,
      duration: 3,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1,
      stagger: 0.5
    });

    // Scroll indicator animation
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const rate = scrolled * -0.5;
      if (heroElement) {
        heroElement.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const scrollToNext = () => {
    const nextSection = document.querySelector('#about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
</script>

<section
  id="hero"
  bind:this={heroElement}
  class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-100 via-dark-200 to-dark-100"
>
  <!-- Background particles -->
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-bounce-slow"></div>
  </div>

  <div class="container mx-auto px-6 relative z-10">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <!-- Content -->
      <div class="text-center lg:text-left animate-fade-in">
        <div class="mb-6">
          <p class="hero-greeting text-accent font-medium mb-2 tracking-wide uppercase text-sm">
            Welcome to my cave !
          </p>
          <h1 class="hero-name text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            Hi, I'm <span class="text-gradient">{personalInfo.name}</span>
          </h1>
          <div class="hero-role text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-6 h-12 flex items-center justify-center lg:justify-start">
            <span>I'm a </span>
            <span class="text-accent ml-2 font-semibold min-w-[200px] text-left">
              {typedText}<span class="animate-pulse">|</span>
            </span>
          </div>
          <p class="hero-bio text-lg text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            {personalInfo.bio}
          </p>
        </div>

        <!-- Stats -->
        <div class="hero-stats grid grid-cols-3 gap-6 mb-8">
          <div class="text-center lg:text-left">
            <div class="text-2xl md:text-3xl font-bold text-accent">{personalInfo.stats.experience}</div>
            <div class="text-sm text-gray-400 uppercase tracking-wide">Experience</div>
          </div>
          <div class="text-center lg:text-left">
            <div class="text-2xl md:text-3xl font-bold text-accent">{personalInfo.stats.projects}</div>
            <div class="text-sm text-gray-400 uppercase tracking-wide">Projects</div>
          </div>
          <div class="text-center lg:text-left">
            <div class="text-2xl md:text-3xl font-bold text-accent">{personalInfo.stats.clients}</div>
            <div class="text-sm text-gray-400 uppercase tracking-wide">Clients</div>
          </div>
        </div>

        <!-- CTA Buttons -->
        <div class="hero-buttons flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a
            href="/contact"
            class="bg-accent text-dark-100 px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
          >
            <Mail size={20} />
            Get In Touch
          </a>
          <a
            href={personalInfo.resume}
            target="_blank"
            rel="noopener noreferrer"
            class="border-2 border-accent text-accent px-8 py-4 rounded-lg font-semibold hover:bg-accent hover:text-dark-100 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
          >
            <Download size={20} />
            Download CV
          </a>
        </div>
      </div>

      <!-- Profile Image -->
      <div class="hero-image flex justify-center lg:justify-end">
        <div class="relative">
          <!-- Decorative elements -->
          <div class="hero-decoration absolute -top-4 -left-4 w-72 h-72 bg-accent/20 rounded-full blur-2xl animate-pulse"></div>
          <div class="hero-decoration absolute -bottom-4 -right-4 w-64 h-64 bg-primary/20 rounded-full blur-2xl animate-pulse delay-500"></div>
          
          <!-- Profile image container -->
          <div class="relative z-10 w-80 h-80 rounded-full overflow-hidden border-4 border-accent/30 shadow-2xl">
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              class="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          
          <!-- Floating elements -->
          <div class="hero-decoration absolute top-8 -right-8 w-16 h-16 bg-accent/20 rounded-full animate-bounce-slow"></div>
          <div class="hero-decoration absolute -bottom-8 -left-8 w-12 h-12 bg-primary/20 rounded-full animate-bounce-slow delay-1000"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Scroll indicator -->
  <button
    on:click={scrollToNext}
    class="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-accent transition-colors animate-bounce cursor-pointer"
    aria-label="Scroll to next section"
  >
    <ChevronDown size={32} />
  </button>
</section>

<style>
  .text-gradient {
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .animate-bounce-slow {
    animation: bounce 3s infinite;
  }

  .animate-fade-in {
    animation: fadeIn 1s ease-out;
  }



  .delay-500 {
    animation-delay: 0.5s;
  }

  .delay-1000 {
    animation-delay: 1s;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes bounce {
    0%, 20%, 53%, 80%, 100% {
      transform: translate3d(0, 0, 0);
    }
    40%, 43% {
      transform: translate3d(0, -15px, 0);
    }
    70% {
      transform: translate3d(0, -7px, 0);
    }
    90% {
      transform: translate3d(0, -2px, 0);
    }
  }
</style>