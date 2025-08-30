<script lang="ts">
  import { onMount } from 'svelte';
  import { personalInfo } from '$lib/data/personal';
  import { skillsData } from '$lib/data/skills';
  import { Code, Database, Palette, Globe } from 'lucide-svelte';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import { AnimationUtils } from '$lib/utils/animations';

  let skillsContainer: HTMLElement;
  let isVisible = false;

  // Hover animation functions for progress bars
  function handleProgressBarHover(event: MouseEvent) {
    const progressBar = event.currentTarget as HTMLElement;
    gsap.to(progressBar, {
      filter: 'brightness(1.3) saturate(1.2)',
      boxShadow: '0 0 15px rgba(34, 197, 94, 0.4)',
      scale: 1.02,
      duration: 0.3,
      ease: 'power2.out'
    });
  }

  function handleProgressBarLeave(event: MouseEvent) {
    const progressBar = event.currentTarget as HTMLElement;
    gsap.to(progressBar, {
      filter: 'brightness(1) saturate(1)',
      boxShadow: '0 0 0px rgba(34, 197, 94, 0)',
      scale: 1,
      duration: 0.3,
      ease: 'power2.out'
    });
  }

  // Hover animation functions for percentage text
  function handlePercentageHover(event: MouseEvent) {
    const percentageText = event.currentTarget as HTMLElement;
    const skillContainer = percentageText.closest('.space-y-4 > div');
    const progressBar = skillContainer?.querySelector('.progress-bar') as HTMLElement;
    
    // Animate percentage text with neon glow
    gsap.to(percentageText, {
      textShadow: '0 0 10px rgba(34, 197, 94, 0.8), 0 0 20px rgba(34, 197, 94, 0.6), 0 0 30px rgba(34, 197, 94, 0.4)',
      scale: 1.1,
      duration: 0.3,
      ease: 'power2.out'
    });
    
    // Animate corresponding progress bar
    if (progressBar) {
      gsap.to(progressBar, {
        filter: 'brightness(1.5) saturate(1.4)',
        boxShadow: '0 0 20px rgba(34, 197, 94, 0.6)',
        scale: 1.03,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
  }

  function handlePercentageLeave(event: MouseEvent) {
    const percentageText = event.currentTarget as HTMLElement;
    const skillContainer = percentageText.closest('.space-y-4 > div');
    const progressBar = skillContainer?.querySelector('.progress-bar') as HTMLElement;
    
    // Reset percentage text
    gsap.to(percentageText, {
      textShadow: '0 0 0px rgba(34, 197, 94, 0)',
      scale: 1,
      duration: 0.3,
      ease: 'power2.out'
    });
    
    // Reset corresponding progress bar
    if (progressBar) {
      gsap.to(progressBar, {
        filter: 'brightness(1) saturate(1)',
        boxShadow: '0 0 0px rgba(34, 197, 94, 0)',
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
  }

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate section title
    const titleElement = document.querySelector('.skills-title');
    const subtitleElement = document.querySelector('.skills-subtitle');
    if (titleElement) AnimationUtils.fadeInUp(titleElement, 0.2);
    if (subtitleElement) AnimationUtils.fadeInUp(subtitleElement, 0.4);
    
    // Animate skill categories
    const skillCategories = document.querySelectorAll('.skill-category');
    if (skillCategories.length > 0) {
      AnimationUtils.staggerAnimation(skillCategories, 'fadeInUp');
    }
    
    // Animate progress bars
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach((bar, index) => {
      const percentage = parseInt(bar.getAttribute('data-percentage') || '0');
      
      gsap.set(bar, { width: '0%' });
      
      ScrollTrigger.create({
        trigger: bar,
        start: 'top 80%',
        onEnter: () => {
          gsap.to(bar, {
            width: `${percentage}%`,
            duration: 1.5,
            delay: index * 0.1,
            ease: 'power2.out'
          });
        }
      });
    });
    
    // Animate stats
    const statItems = document.querySelectorAll('.stat-item');
    if (statItems.length > 0) {
      AnimationUtils.staggerAnimation(statItems, 'scaleIn');
    }
  });
</script>

<section bind:this={skillsContainer} id="skills" class="py-20 bg-dark-200">
  <div class="container mx-auto px-6">
    <!-- Section Header -->
    <div class="text-center mb-16">
      <h2 class="skills-title text-4xl md:text-5xl font-bold text-white mb-4">
        My <span class="text-accent">Skills</span>
      </h2>
      <p class="skills-subtitle text-lg text-gray-400 max-w-2xl mx-auto">
        Here are the technologies and tools I work with to bring ideas to life
      </p>
    </div>

    <!-- Skills Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {#each skillsData as category}
        <div class="skill-category bg-dark-100 rounded-xl p-6 border border-gray-800 hover:border-accent/50 transition-all duration-300">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
              {#if category.category === 'Frontend'}
                <Code class="w-6 h-6 text-accent" />
              {:else if category.category === 'Backend'}
                <Database class="w-6 h-6 text-accent" />
              {:else if category.category === 'Design'}
                <Palette class="w-6 h-6 text-accent" />
              {:else}
                <Globe class="w-6 h-6 text-accent" />
              {/if}
            </div>
            <h3 class="text-xl font-semibold text-white">{category.category}</h3>
          </div>
          
          <div class="space-y-4">
            {#each category.skills as skill}
              <div>
                <div class="flex justify-between items-center mb-2">
                  <span class="text-gray-300 font-medium">{skill.name}</span>
                  <span 
                    class="text-accent font-semibold cursor-pointer transition-all duration-300"
                    on:mouseenter={handlePercentageHover}
                    on:mouseleave={handlePercentageLeave}
                    role="button"
                    tabindex="0"
                    aria-label="Hover to highlight {skill.name} progress bar"
                  >{skill.level}%</span>
                </div>
                <div class="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    class="progress-bar bg-gradient-to-r from-accent to-accent/80 h-2 rounded-full transition-all duration-1000 ease-out cursor-pointer"
                    data-percentage="{skill.level}"
                    on:mouseenter={handleProgressBarHover}
                    on:mouseleave={handleProgressBarLeave}
                    role="progressbar"
                    aria-label="{skill.name} skill level: {skill.level}%"
                  ></div>
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>

    <!-- Additional Stats -->
    <div class="grid grid-cols-3 gap-6">
      <div class="stat-item text-center bg-dark-100 rounded-xl p-6 border border-gray-800">
        <div class="text-3xl font-bold text-accent mb-2">{personalInfo.stats.experience}</div>
        <div class="text-gray-400">Experience</div>
      </div>
      <div class="stat-item text-center bg-dark-100 rounded-xl p-6 border border-gray-800">
        <div class="text-3xl font-bold text-accent mb-2">{personalInfo.stats.projects}</div>
        <div class="text-gray-400">Projects</div>
      </div>
      <div class="stat-item text-center bg-dark-100 rounded-xl p-6 border border-gray-800">
        <div class="text-3xl font-bold text-accent mb-2">{personalInfo.stats.clients}</div>
        <div class="text-gray-400">Clients</div>
      </div>
    </div>
  </div>
</section>

<style>
  /* Styles handled by GSAP animations */
</style>