<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { skillsData } from '$lib/data/skills';
  import { personalInfo } from '$lib/data/personal';
  import { Code, Database, Globe, Monitor, Server, Settings, Award, Calendar, Briefcase } from 'lucide-svelte';
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

  let skillsContainer: HTMLElement;
  let hoveredSkill: string | null = null;

  // Get appropriate icon for category
  function getCategoryIcon(iconName: string) {
    switch (iconName) {
      case 'code': return Code;
      case 'monitor': return Monitor;
      case 'server': return Server;
      case 'database': return Database;
      case 'settings': return Settings;
      default: return Globe;
    }
  }

  // Get level color based on skill level
  function getLevelColor(level: string) {
    switch (level) {
      case 'Expert': return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'Advanced': return 'text-blue-400 bg-blue-400/10 border-blue-400/30';
      case 'Proficient': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      case 'Intermediate': return 'text-orange-400 bg-orange-400/10 border-orange-400/30';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  }

  // Skill card hover animations
  async function handleSkillHover(skillName: string, isEntering: boolean) {
    const { gsap: gsapInstance } = await initGSAP();
    if (!gsapInstance) return;
    
    hoveredSkill = isEntering ? skillName : null;
    const skillCard = document.querySelector(`[data-skill="${skillName}"]`);
    
    if (skillCard) {
      if (isEntering) {
        gsapInstance.to(skillCard, {
          scale: 1.02,
          y: -5,
          boxShadow: '0 10px 30px rgba(16, 185, 129, 0.2)',
          duration: 0.3,
          ease: 'power2.out'
        });
      } else {
        gsapInstance.to(skillCard, {
          scale: 1,
          y: 0,
          boxShadow: '0 0 0 rgba(16, 185, 129, 0)',
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    }
  }

  onMount(async () => {
    // Animate section title
    const titleElement = document.querySelector('.skills-title');
    const subtitleElement = document.querySelector('.skills-subtitle');
    if (titleElement) await AnimationUtils.fadeInUp(titleElement, 0.2);
    if (subtitleElement) await AnimationUtils.fadeInUp(subtitleElement, 0.4);
    
    // Animate skill categories
    const skillCategories = document.querySelectorAll('.skill-category');
    if (skillCategories.length > 0) {
      await AnimationUtils.staggerAnimation(skillCategories, 'fadeInUp');
    }
    
    // Animate stats
    const statItems = document.querySelectorAll('.stat-item');
    if (statItems.length > 0) {
      await AnimationUtils.staggerAnimation(statItems, 'scaleIn');
    }
  });
</script>

<section bind:this={skillsContainer} id="skills" class="py-20 bg-gray-50">
  <div class="container mx-auto px-6">
    <!-- Section Header -->
    <div class="text-center mb-16">
      <h2 class="skills-title text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        My <span class="text-text-primary">Skills</span>
      </h2>
      <p class="skills-subtitle text-lg text-gray-600 max-w-2xl mx-auto">
        Professional expertise backed by real-world experience and proven results
      </p>
    </div>

    <!-- Skills Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {#each skillsData as category}
        <div class="skill-category bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-sm">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
              <svelte:component this={getCategoryIcon(category.icon)} class="w-6 h-6 text-text-primary" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900">{category.category}</h3>
          </div>
          
          <div class="space-y-4">
            {#each category.skills as skill}
              <div 
                class="skill-item p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-300 cursor-pointer"
                data-skill="{skill.name}"
                on:mouseenter={() => handleSkillHover(skill.name, true)}
                on:mouseleave={() => handleSkillHover(skill.name, false)}
                role="button"
                tabindex="0"
                aria-label="{skill.name} - {skill.level} level with {skill.experience} experience"
              >
                <div class="flex justify-between items-start mb-2">
                  <div class="flex-1">
                    <h4 class="text-gray-900 font-semibold text-lg mb-1">{skill.name}</h4>
                    <p class="text-gray-600 text-sm mb-2">{skill.description}</p>
                  </div>
                  <div class="flex flex-col items-end ml-4">
                    <span class="px-3 py-1 rounded-full text-xs font-semibold border {getLevelColor(skill.level)} mb-1">
                      {skill.level}
                    </span>
                    <div class="flex items-center text-gray-500 text-xs">
                      <Calendar class="w-3 h-3 mr-1" />
                      {skill.experience}
                    </div>
                  </div>
                </div>
                
                <!-- Project showcase on hover -->
                {#if hoveredSkill === skill.name && skill.projects}
                  <div class="mt-3 pt-3 border-t border-gray-300 animate-in slide-in-from-top-2 duration-200">
                    <div class="flex items-center mb-2">
                      <Briefcase class="w-3 h-3 text-text-primary mr-1" />
                      <span class="text-text-primary text-xs font-medium">Featured Projects:</span>
                    </div>
                    <div class="flex flex-wrap gap-1">
                      {#each skill.projects as project}
                        <span class="px-2 py-1 bg-gray-100 text-text-primary text-xs rounded border border-gray-200">
                          {project}
                        </span>
                      {/each}
                    </div>
                  </div>
                {/if}
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>

    <!-- Professional Stats -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="stat-item text-center bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-sm">
        <div class="flex items-center justify-center mb-3">
          <Award class="w-8 h-8 text-text-primary mr-2" />
          <div class="text-3xl font-bold text-text-primary">{personalInfo.stats.experience}</div>
        </div>
        <div class="text-gray-900 font-medium">Years of Experience</div>
        <div class="text-gray-600 text-sm mt-1">Building scalable solutions</div>
      </div>
      <div class="stat-item text-center bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-sm">
        <div class="flex items-center justify-center mb-3">
          <Briefcase class="w-8 h-8 text-text-primary mr-2" />
          <div class="text-3xl font-bold text-text-primary">{personalInfo.stats.projects}</div>
        </div>
        <div class="text-gray-900 font-medium">Projects Completed</div>
        <div class="text-gray-600 text-sm mt-1">From concept to deployment</div>
      </div>
      <div class="stat-item text-center bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-sm">
        <div class="flex items-center justify-center mb-3">
          <Globe class="w-8 h-8 text-text-primary mr-2" />
          <div class="text-3xl font-bold text-text-primary">{personalInfo.stats.clients}</div>
        </div>
        <div class="text-gray-900 font-medium">Happy Clients</div>
        <div class="text-gray-600 text-sm mt-1">Worldwide partnerships</div>
      </div>
    </div>
  </div>
</section>

<style>
  /* Styles handled by GSAP animations */
</style>