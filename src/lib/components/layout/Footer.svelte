<script lang="ts">
  import { onMount } from 'svelte';
  import { personalInfo } from '$lib/data/personal';
  import { ArrowUp, Github, Linkedin, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-svelte';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import { AnimationUtils } from '$lib/utils/animations';

  let showScrollTop = false;

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onMount(() => {
    const handleScroll = () => {
      showScrollTop = window.scrollY > 300;
    };

    window.addEventListener('scroll', handleScroll);
    
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate footer elements
    const logoElement = document.querySelector('.footer-logo');
    if (logoElement) {
      AnimationUtils.fadeInUp(logoElement, { delay: 0.2 });
    }
    
    const descriptionElement = document.querySelector('.footer-description');
    if (descriptionElement) {
      AnimationUtils.fadeInUp(descriptionElement, { delay: 0.4 });
    }
    
    const footerLinks = document.querySelectorAll('.footer-link');
    if (footerLinks.length > 0) {
      AnimationUtils.staggerAnimation(footerLinks, 'fadeInUp');
    }
    
    const socialElements = document.querySelectorAll('.footer-social');
    if (socialElements.length > 0) {
      AnimationUtils.staggerAnimation(socialElements, 'scaleIn');
    }
    
    const bottomElement = document.querySelector('.footer-bottom');
    if (bottomElement) {
      AnimationUtils.fadeInUp(bottomElement, { delay: 0.8 });
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const currentYear = new Date().getFullYear();
</script>

<footer class="bg-dark-200 border-t border-gray-800">
  <div class="container mx-auto px-6">
    <!-- Main Footer Content -->
    <div class="py-16">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Brand & Bio -->
        <div class="lg:col-span-2">
          <div class="mb-6">
            <h3 class="footer-logo text-2xl font-bold text-white mb-2">
              {personalInfo.name}
            </h3>
            <p class="text-accent font-medium mb-4">
              Fullstack Engineer
            </p>
            <p class="footer-description text-gray-400 leading-relaxed max-w-md">
              Passionate about creating exceptional digital experiences through modern web technologies and thoughtful design.
            </p>
          </div>
          
          <!-- Social Links -->
          <div class="flex gap-4">
            {#if personalInfo.social.github}
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                class="footer-social w-10 h-10 bg-dark-100 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent/30 hover:bg-accent/10 transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            {/if}
            {#if personalInfo.social.linkedin}
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                class="footer-social w-10 h-10 bg-dark-100 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent/30 hover:bg-accent/10 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            {/if}
            {#if personalInfo.social.twitter}
              <a
                href={personalInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                class="footer-social w-10 h-10 bg-dark-100 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent/30 hover:bg-accent/10 transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            {/if}
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold text-white mb-6">Quick Links</h4>
          <nav class="space-y-3">
            <a href="#home" class="footer-link block text-gray-400 hover:text-accent transition-colors duration-300">
              Home
            </a>
            <a href="#about" class="footer-link block text-gray-400 hover:text-accent transition-colors duration-300">
              About
            </a>
            <a href="#services" class="footer-link block text-gray-400 hover:text-accent transition-colors duration-300">
              Services
            </a>
            <!-- <a href="#portfolio" class="footer-link block text-gray-400 hover:text-accent transition-colors duration-300">
              Portfolio
            </a> -->
            <a href="#contact" class="footer-link block text-gray-400 hover:text-accent transition-colors duration-300">
              Contact
            </a>
          </nav>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-lg font-semibold text-white mb-6">Get In Touch</h4>
          <div class="space-y-4">
            <div class="footer-link flex items-center gap-3">
              <Mail size={16} class="text-accent flex-shrink-0" />
              <a
                href="mailto:{personalInfo.email}"
                class="text-gray-400 hover:text-accent transition-colors duration-300 text-sm"
              >
                {personalInfo.email}
              </a>
            </div>
            
            <div class="footer-link flex items-center gap-3">
              <Phone size={16} class="text-accent flex-shrink-0" />
              <a
                href="tel:{personalInfo.phone}"
                class="text-gray-400 hover:text-accent transition-colors duration-300 text-sm"
              >
                {personalInfo.phone}
              </a>
            </div>
            
            <div class="footer-link flex items-center gap-3">
              <MapPin size={16} class="text-accent flex-shrink-0" />
              <span class="text-gray-400 text-sm">
                {personalInfo.location}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="py-6 border-t border-gray-800">
      <div class="footer-bottom flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-2 text-gray-400 text-sm">
          <span>&copy; {currentYear} {personalInfo.name}. All rights reserved.</span>
        </div>
        
        <div class="flex items-center gap-2 text-gray-400 text-sm">
          <span>Made with</span>
          <Heart size={14} class="text-red-500 animate-pulse" />
          <span>using SvelteKit & Tailwind CSS</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Scroll to Top Button -->
  {#if showScrollTop}
    <button
      on:click={scrollToTop}
      class="fixed bottom-8 right-8 w-12 h-12 bg-accent text-dark-100 rounded-full flex items-center justify-center shadow-lg hover:bg-accent/90 transition-all duration-300 hover:scale-110 z-50"
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  {/if}
</footer>