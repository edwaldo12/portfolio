<script lang="ts">
  import { onMount } from 'svelte';
  import { services } from '$lib/data/services';
  import { ArrowRight } from 'lucide-svelte';
  import * as Icons from 'lucide-svelte';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import { AnimationUtils } from '$lib/utils/animations';

  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: any } = {
      'code': Icons.Code,
      'palette': Icons.Palette,
      'smartphone': Icons.Smartphone,
      'search': Icons.Search,
      'server': Icons.Server,
      'zap': Icons.Zap
    };
    return iconMap[iconName] || Icons.Code;
  };

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);
    
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

<section id="services" class="py-20 bg-dark-100">
  <div class="container mx-auto px-6">
    <!-- Section Header -->
    <div class="text-center mb-16">
      <h2 class="services-title text-4xl md:text-5xl font-bold text-white mb-4">
        My <span class="text-accent">Services</span>
      </h2>
      <p class="services-subtitle text-lg text-gray-400 max-w-2xl mx-auto">
        I offer comprehensive digital solutions to help bring your ideas to life with modern technologies and creative design.
      </p>
    </div>

    <!-- Services Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each services as service}
        <div class="service-card group bg-dark-200 rounded-xl p-8 border border-gray-800 hover:border-accent/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-accent/10">
          <!-- Icon -->
          <div class="mb-6">
            <div class="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
              <svelte:component this={getIconComponent(service.icon)} size={32} class="text-accent" />
            </div>
          </div>

          <!-- Content -->
          <div class="mb-6">
            <h3 class="text-xl font-semibold text-white mb-3 group-hover:text-accent transition-colors duration-300">
              {service.title}
            </h3>
            <p class="text-gray-400 leading-relaxed mb-4">
              {service.description}
            </p>
            
            <!-- Price Range -->
            <div class="text-accent font-semibold text-sm mb-4">
              {service.priceRange}
            </div>
          </div>

          <!-- Features -->
          <div class="mb-6">
            <ul class="space-y-2">
              {#each service.features as feature}
                <li class="flex items-center text-sm text-gray-300">
                  <div class="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                  {feature}
                </li>
              {/each}
            </ul>
          </div>

          <!-- CTA -->
          <div class="pt-4 border-t border-gray-700">
            <a
              href="/contact"
              class="inline-flex items-center text-accent hover:text-white transition-colors duration-300 font-medium group/link"
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
      <div class="services-cta bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 border border-accent/20">
        <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">
          Ready to Start Your Project?
        </h3>
        <p class="text-gray-400 mb-6 max-w-2xl mx-auto">
          Let's discuss your ideas and create something amazing together. I'm here to help you bring your vision to life.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            class="bg-accent text-dark-100 px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 hover:scale-105"
          >
            Start a Project
          </a>
          <a
            href="/portfolio"
            class="border-2 border-accent text-accent px-8 py-4 rounded-lg font-semibold hover:bg-accent hover:text-dark-100 transition-all duration-300 hover:scale-105"
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