<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { ChevronDown, Download, Mail } from 'lucide-svelte';
  import { personalInfo } from '$lib/data/personal';
  import golangSvg from '$lib/assets/golang.svg';
  import phpSvg from '$lib/assets/php.svg';
  import nestjsSvg from '$lib/assets/nest-js.svg';
  import rabbitMqSvg from '$lib/assets/rabbit-mq.svg';
  import natsSvg from '$lib/assets/nats.svg';
  import kafkaSvg from '$lib/assets/kafka.svg';
  import jwtSvg from '$lib/assets/jwt.svg';
  import arangodbSvg from '$lib/assets/arangodb.svg';
  import mongodbSvg from '$lib/assets/mongodb.svg';
  import temporalSvg from '$lib/assets/temporal.svg';
  import redisSvg from '$lib/assets/redis.svg';
  import k8sSvg from '$lib/assets/k8s.svg';
  import gcpSvg from '$lib/assets/gcp.svg';
  import ddogSvg from '$lib/assets/ddog.svg';
  import nodeJsSvg from '$lib/assets/node-js.svg';
  import postgresSvg from '$lib/assets/postgres.svg';
  import mysqlSvg from '$lib/assets/mysql.svg';
  import typescriptSvg from '$lib/assets/typescript.svg';
  import codeigniterSvg from '$lib/assets/codeigniter.svg';
  import grpcSvg from '$lib/assets/grpc.svg';
  import reactSvg from '$lib/assets/react.svg';
  import nextjsSvg from '$lib/assets/next-js.svg';
  import solidjsSvg from '$lib/assets/solid-js.svg';


  // Browser-only GSAP import
  let gsap: any;
  
  async function initGSAP() {
    if (browser && !gsap) {
      const gsapModule = await import('gsap');
      gsap = gsapModule.gsap;
    }
    return gsap;
  }

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

  const featuredTechIcon = [
    { src: ddogSvg, alt: 'Datadog', delay: '0.6s', className: 'h-10' },
    { src: gcpSvg, alt: 'Google Cloud', delay: '0.9s', className: 'h-10' },
    { src: k8sSvg, alt: 'Kubernetes', delay: '1.2s', className: 'h-10' },
    { src: redisSvg, alt: 'Redis', delay: '1.5s', className: 'h-10' },
    { src: temporalSvg, alt: 'Temporal', delay: '1.8s', className: 'h-10 w-20' },
    { src: mongodbSvg, alt: 'MongoDB', delay: '2.1s', className: 'h-10 w-20' },
    { src: arangodbSvg, alt: 'ArangoDB', delay: '2.4s' }
  ];

  const techIcons = [
    { src: kafkaSvg, alt: 'Apache Kafka', delay: '0.3s' },
    { src: natsSvg, alt: 'NATS', delay: '0.6s' },
    { src: rabbitMqSvg, alt: 'RabbitMQ', delay: '0.9s' },
    { src: nodeJsSvg, alt: 'NodeJS', delay: '1.2s' },
    { src: nestjsSvg, alt: 'NestJS', delay: '1.5s' },
    { src: phpSvg, alt: 'PHP', delay: '1.8s' },
    { src: golangSvg, alt: 'Golang', delay: '2.1s' }
  ];

  onMount(() => {
    if (!browser) return;
    
    initGSAP().then(() => {
      // Initialize hero animations
      const tl = gsap.timeline({ delay: 0.5 });
      
      // Animate hero content
      tl.fromTo('.hero-title', 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
      )
      .fromTo('.hero-subtitle', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.5'
      )
      .fromTo('.hero-description', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.3'
      )
      .fromTo('.hero-cta', 
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' }, '-=0.2'
      );
      
      // Typing animation for the subtitle
      const subtitle = document.querySelector('.typing-text');
      if (subtitle) {
        const text = subtitle.textContent || '';
        subtitle.textContent = '';
        
        gsap.to(subtitle, {
          duration: text.length * 0.05,
          ease: 'none',
          onUpdate: function() {
            const progress = this.progress();
            const currentLength = Math.floor(progress * text.length);
            subtitle.textContent = text.slice(0, currentLength);
          }
        });
      }
      
      // Scroll indicator animation - subtle floating
      gsap.to('.scroll-indicator', {
        y: -5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
      });
      
      // Floating decorative elements
      gsap.to('.floating-element', {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        stagger: 0.5
      });

      // Tech stack icons fade-in animation
      gsap.to('.tech-icon', {
        opacity: 1,
        y: -10,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.2,
        delay: 2
      });
    });
    
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
  class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white overflow-hidden"
>
  <div class="absolute bottom-16 right-20">
    <div class="relative flex flex-col items-end gap-3">
      <div class="flex gap-6">
        {#each featuredTechIcon as icon}
          <div class="tech-icon opacity-0" style={`animation-delay: ${icon.delay};`}>
            <img src={icon.src} alt={icon.alt} class={`transition-all duration-300 hover:scale-110 hover:rotate-6 ${icon.className ?? 'w-12 h-12'}`} />
          </div>
        {/each}
      </div>
      <div class="flex gap-6">
        {#each techIcons as icon}
          <div class="tech-icon opacity-0" style={`animation-delay: ${icon.delay};`}>
            <img src={icon.src} alt={icon.alt} class="w-12 h-12 transition-all duration-300 hover:scale-110 hover:rotate-6" />
          </div>
        {/each}
      </div>
      <div class="absolute right-0 top-full translate-y-3 flex gap-3 flex-wrap">
         <div class="tech-icon opacity-0" style="animation-delay: 1.3s;">
           <img src={solidjsSvg} alt="Solid.js" class="w-10 h-10 transition-all duration-300 hover:scale-110 hover:rotate-6" />
         </div>
         <div class="tech-icon opacity-0" style="animation-delay: 1.45s;">
           <img src={nextjsSvg} alt="Next.js" class="w-10 h-10 transition-all duration-300 hover:scale-110 hover:rotate-6" />
         </div>
         <div class="tech-icon opacity-0" style="animation-delay: 1.6s;">
           <img src={reactSvg} alt="React" class="w-10 h-10 transition-all duration-300 hover:scale-110 hover:rotate-6" />
         </div>
         <div class="tech-icon opacity-0" style="animation-delay: 1.75s;">
           <img src={grpcSvg} alt="gRPC" class="w-10 h-10 transition-all duration-300 hover:scale-110 hover:rotate-6" />
         </div>
         <div class="tech-icon opacity-0" style="animation-delay: 1.9s;">
           <img src={codeigniterSvg} alt="CodeIgniter" class="w-10 h-10 transition-all duration-300 hover:scale-110 hover:rotate-6" />
         </div>
         <div class="tech-icon opacity-0" style="animation-delay: 2.05s;">
           <img src={typescriptSvg} alt="TypeScript" class="w-10 h-10 transition-all duration-300 hover:scale-110 hover:rotate-6" />
         </div>
         <div class="tech-icon opacity-0" style="animation-delay: 2.2s;">
           <img src={mysqlSvg} alt="MySQL" class="w-12 h-12 transition-all duration-300 hover:scale-110 hover:rotate-6" />
         </div>
         <div class="tech-icon opacity-0" style="animation-delay: 2.35s;">
           <img src={postgresSvg} alt="PostgreSQL" class="w-10 h-10 transition-all duration-300 hover:scale-110 hover:rotate-6" />
         </div>
         <div class="tech-icon opacity-0" style="animation-delay: 2.5s;">
           <img src={jwtSvg} alt="JWT" class="w-10 h-10 transition-all duration-300 hover:scale-110 hover:rotate-6" />
         </div>
       </div>
    </div>
  </div>

  <div class="container mx-auto px-6 relative z-10 overflow-hidden">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <!-- Content -->
      <div class="text-center lg:text-left animate-fade-in">
        <div class="mb-6">
          <p class="hero-greeting text-text-primary font-medium mb-2 tracking-wide uppercase text-sm">
            Welcome to my cave !
          </p>
          <h1 class="hero-name text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 leading-tight">
            Hi, I'm <span class="text-gradient">{personalInfo.name}</span>
          </h1>
          <div class="hero-role text-2xl md:text-3xl lg:text-4xl text-gray-600 mb-6 h-12 flex items-center justify-center lg:justify-start">
            <span>I'm a </span>
            <span class="text-text-primary ml-2 font-semibold min-w-[200px] text-left">
              {typedText}<span class="animate-pulse">|</span>
            </span>
          </div>
          <p class="hero-bio text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            {personalInfo.bio}
          </p>
        </div>

        <!-- Stats -->
        <div class="hero-stats grid grid-cols-3 gap-6 mb-8">
          <div class="text-center lg:text-left">
            <div class="text-2xl md:text-3xl font-bold text-text-primary">{personalInfo.stats.experience}</div>
            <div class="text-sm text-gray-500 uppercase tracking-wide">Experience</div>
          </div>
          <div class="text-center lg:text-left">
            <div class="text-2xl md:text-3xl font-bold text-text-primary">{personalInfo.stats.projects}</div>
            <div class="text-sm text-gray-500 uppercase tracking-wide">Projects</div>
          </div>
          <div class="text-center lg:text-left">
            <div class="text-2xl md:text-3xl font-bold text-text-primary">{personalInfo.stats.clients}</div>
            <div class="text-sm text-gray-500 uppercase tracking-wide">Clients</div>
          </div>
        </div>

        <!-- CTA Buttons -->
        <div class="hero-buttons flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a
            href="/contact"
            class="bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
          >
            <Mail size={20} />
            Get In Touch
          </a>
          <a
            href={personalInfo.resume}
            target="_blank"
            rel="noopener noreferrer"
            class="border-2 border-accent text-accent px-8 py-4 rounded-lg font-semibold hover:bg-accent hover:text-white transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
          >
            <Download size={20} />
            Download CV
          </a>
        </div>
      </div>

      <!-- Profile Image -->
      <div class="hero-image flex justify-center lg:justify-end overflow-hidden">
        <div class="relative overflow-hidden">
          <!-- Removed decorative circles to clean up the design -->
          
          <!-- Profile image container -->
          <div class="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-700/50">
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              class="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          

        </div>
      </div>
    </div>
  </div>

  <!-- Scroll indicator -->
  <button
    on:click={scrollToNext}
    class="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 hover:text-accent transition-all duration-300 hover:scale-110 cursor-pointer"
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
  .animate-fade-in {
    animation: fadeIn 1s ease-out;
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



</style>
