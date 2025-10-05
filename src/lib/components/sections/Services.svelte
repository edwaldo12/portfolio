<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { services } from '$lib/data/services';
  import { ArrowRight } from 'lucide-svelte';
  import * as Icons from 'lucide-svelte';
  import { AnimationUtils } from '$lib/utils/animations';

  // Browser-only GSAP import
  let gsap: any;
  let ScrollTrigger: any;
  
  async function initGSAP() {
    if (browser && !gsap) {
      const gsapModule = await import('gsap');
      const scrollTriggerModule = await import('gsap/ScrollTrigger');
      gsap = gsapModule.gsap;
      ScrollTrigger = scrollTriggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);
    }
    return { gsap, ScrollTrigger };
  }

  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: any } = {
      'code': Icons.Code,
      'palette': Icons.Palette,
      'smartphone': Icons.Smartphone,
      'search': Icons.Search,
      'server': Icons.Server,
      'zap': Icons.Zap,
      'message-circle': Icons.MessageCircle
    };
    return iconMap[iconName] || Icons.Code;
  };

  onMount(async () => {
    if (!browser) return;
    
    await initGSAP();
    
    // Animate section title
    const titleElement = document.querySelector('.services-title');
    const subtitleElement = document.querySelector('.services-subtitle');
    if (titleElement) AnimationUtils.fadeInUp(titleElement, 0.2);
    if (subtitleElement) AnimationUtils.fadeInUp(subtitleElement, 0.4);
    
    // Animate service cards
    const serviceCards = document.querySelectorAll('.service-card');
    if (serviceCards.length > 0) {
      AnimationUtils.staggerAnimation(serviceCards, 'fadeInUp');
    }
    
    // Animate CTA section
    const ctaElement = document.querySelector('.services-cta');
    if (ctaElement) AnimationUtils.fadeInUp(ctaElement, 0.6);
  });
</script>

<section id="services" class="py-20 bg-white">
  <div class="container mx-auto px-6">
    <!-- Section Header -->
    <div class="text-center mb-16">
      <h2 class="services-title text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        My <span class="text-text-primary">Services</span>
      </h2>
      <p class="services-subtitle text-lg text-gray-600 max-w-2xl mx-auto">
        I offer comprehensive digital solutions to help bring your ideas to life with modern technologies and creative design.
      </p>
    </div>

    <!-- Services Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each services as service}
        <div class="service-card group bg-white rounded-xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl shadow-sm">
          <!-- Icon -->
          <div class="mb-6">
            <div class="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300">
              <svelte:component this={getIconComponent(service.icon)} size={32} class="text-text-primary" />
            </div>
          </div>

          <!-- Content -->
          <div class="mb-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-3 group-hover:text-text-primary transition-colors duration-300">
              {service.title}
            </h3>
            <p class="text-gray-600 leading-relaxed mb-4">
              {service.description}
            </p>
            
            <!-- Price Range -->
            <div class="text-text-primary font-semibold text-sm mb-4">
              {service.priceRange}
            </div>
          </div>

          <!-- Features -->
          <div class="mb-6">
            <ul class="space-y-2">
              {#each service.features as feature}
                <li class="flex items-center text-sm text-gray-700">
                  <div class="w-1.5 h-1.5 bg-text-primary rounded-full mr-3 flex-shrink-0"></div>
                  {feature}
                </li>
              {/each}
            </ul>
          </div>

          <!-- CTA -->
          <div class="pt-4 border-t border-gray-300">
            <a
              href="/contact"
              class="inline-flex items-center text-text-primary hover:text-gray-900 transition-colors duration-300 font-medium group/link"
            >
              Get Started
              <ArrowRight size={16} class="ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      {/each}
    </div>

    <!-- Call to Action -->
    <div class="text-center mt-16">
      <div class="services-cta bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-sm">
        <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Ready to Start Your Project?
        </h3>
        <p class="text-gray-600 mb-6 max-w-2xl mx-auto">
          Let's discuss your ideas and create something amazing together. I'm here to help you bring your vision to life.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            class="bg-text-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Start a Project
          </a>
          <a
            href="/portfolio"
            class="border-2 border-text-primary text-text-primary px-8 py-4 rounded-lg font-semibold hover:bg-text-primary hover:text-white transition-all duration-300 hover:scale-105"
          >
            View My Work
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .group:hover .group\/link {
    transform: translateX(4px);
  }
</style>
