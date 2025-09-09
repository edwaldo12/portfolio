<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { personalInfo, experiences, education } from '$lib/data/personal';
  import { Download, Calendar, MapPin, Mail, Phone, Award } from 'lucide-svelte';
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

  let aboutContainer: HTMLElement;

  onMount(async () => {
    if (!browser) return;
    
    await initGSAP();
    
    // Animate section title
    const titleElement = document.querySelector('.about-title');
    const subtitleElement = document.querySelector('.about-subtitle');
    if (titleElement) AnimationUtils.fadeInUp(titleElement, 0.2);
    if (subtitleElement) AnimationUtils.fadeInUp(subtitleElement, 0.4);
    
    // Animate about content
    const contentElement = document.querySelector('.about-content');
    const infoElement = document.querySelector('.about-info');
    if (contentElement) AnimationUtils.fadeInLeft(contentElement, 0.6);
    if (infoElement) AnimationUtils.fadeInRight(infoElement, 0.8);
    
    // Animate timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    if (timelineItems.length > 0) {
      AnimationUtils.staggerAnimation(timelineItems, 'fadeInLeft');
    }
    
    // Animate quick facts
    const factItems = document.querySelectorAll('.fact-item');
    if (factItems.length > 0) {
      AnimationUtils.staggerAnimation(factItems, 'fadeInUp');
    }
  });
</script>

<section bind:this={aboutContainer} id="about" class="py-20 bg-gray-50">
  <div class="container mx-auto px-6">
    <!-- Section Header -->
    <div class="text-center mb-16">
      <h2 class="about-title text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        About <span class="text-text-primary">Me</span>
      </h2>
      <p class="about-subtitle text-lg text-gray-600 max-w-2xl mx-auto">
        Get to know more about my background, experience, and what drives my passion for development.
      </p>
    </div>

    <div class="grid lg:grid-cols-2 gap-16 items-start">
      <!-- Personal Info -->
      <div class="about-content space-y-8">
        <!-- Bio -->
        <div class="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
          <h3 class="text-2xl font-semibold text-gray-900 mb-6">Who I Am</h3>
          <div class="space-y-4 text-gray-700 leading-relaxed">
            <p>{personalInfo.bio}</p>
            <p>
              With over {personalInfo.stats.experience} years of experience in frontend development and UX/UI design, 
              I've had the privilege of working on {personalInfo.stats.projects}+ projects for clients ranging from 
              startups to established businesses.
            </p>
          </div>
        </div>

        <!-- Quick Facts -->
        <div class="about-info bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
          <h3 class="text-2xl font-semibold text-gray-900 mb-6">Quick Facts</h3>
          <div class="grid grid-cols-2 gap-6">
            <div class="fact-item flex items-center gap-3">
                <MapPin size={20} class="text-text-primary flex-shrink-0" />
                <div>
                  <div class="text-gray-900 font-medium">Location</div>
                  <div class="text-gray-600 text-sm">{personalInfo.location}</div>
                </div>
              </div>
              <div class="fact-item flex items-center gap-3">
                <Calendar size={20} class="text-text-primary flex-shrink-0" />
                <div>
                  <div class="text-gray-900 font-medium">Experience</div>
                  <div class="text-gray-600 text-sm">{personalInfo.stats.experience}</div>
                </div>
              </div>
              <div class="fact-item flex items-center gap-3">
                <Award size={20} class="text-text-primary flex-shrink-0" />
                <div>
                  <div class="text-gray-900 font-medium">Projects</div>
                  <div class="text-gray-600 text-sm">{personalInfo.stats.projects}</div>
                </div>
              </div>
              <div class="fact-item flex items-center gap-3">
                <Award size={20} class="text-text-primary flex-shrink-0" />
                <div>
                  <div class="text-gray-900 font-medium">Clients</div>
                  <div class="text-gray-600 text-sm">{personalInfo.stats.clients}</div>
                </div>
              </div>
          </div>
        </div>

        <!-- Download CV -->
        <div class="text-center lg:text-left">
          <a
            href={personalInfo.resume}
            download
            class="inline-flex items-center bg-text-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Download size={20} class="mr-2" />
            Download Resume
          </a>
        </div>
      </div>

      <!-- Experience Timeline -->
      <div>
        <h3 class="text-2xl font-semibold text-gray-900 mb-8">Experience & Education</h3>
        
        <!-- Experience -->
        <div class="space-y-6 mb-12">
          <h4 class="text-lg font-medium text-text-primary mb-4">Work Experience</h4>
          <div class="relative">
            <!-- Timeline Line -->
            <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>
            
            {#each experiences as experience}
              <div class="timeline-item relative pl-12 pb-8 opacity-0">
                <!-- Timeline Dot -->
                <div class="absolute w-4 h-4 bg-text-primary rounded-full border-4 border-gray-50" style="left: 0.55rem"></div>
                
                <div class="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition-colors duration-300 shadow-sm">
                  <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h5 class="text-lg font-semibold text-gray-900">{experience.position}</h5>
                    <span class="text-sm text-text-primary font-medium">
                      {experience.startDate} - {experience.endDate || 'Present'}
                    </span>
                  </div>
                  
                  <div class="text-gray-700 font-medium mb-2">{experience.company}</div>
                  <div class="text-gray-600 text-sm mb-4">{experience.location}</div>
                  
                  <p class="text-gray-700 text-sm leading-relaxed mb-4">{experience.description}</p>
                  
                  {#if experience.achievements && experience.achievements.length > 0}
                    <ul class="space-y-1">
                      {#each experience.achievements as achievement}
                        <li class="flex items-start text-sm text-gray-600">
                          <div class="w-1.5 h-1.5 bg-text-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      {/each}
                    </ul>
                  {/if}
                </div>
              </div>
            {/each}
          </div>
        </div>

        <!-- Education -->
        <div class="space-y-6">
          <h4 class="text-lg font-medium text-text-primary mb-4">Education</h4>
          <div class="relative">
            <!-- Timeline Line -->
            <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>
            
            {#each education as edu, index}
              <div class="timeline-item relative pl-12 pb-8 opacity-0">
                <!-- Timeline Dot -->
                <div class="absolute w-4 h-4 bg-text-primary rounded-full border-4 border-gray-50" style="left: 0.55rem"></div>
                
                <div class="bg-white rounded-lg p-6 border border-gray-200 hover:border-primary/30 transition-colors duration-300 shadow-sm">
                  <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h5 class="text-lg font-semibold text-gray-900">{edu.degree}</h5>
                    <span class="text-sm text-primary font-medium">
                      {edu.startDate} - {edu.endDate}
                    </span>
                  </div>
                  
                  <div class="text-gray-700 font-medium mb-2">{edu.institution}</div>
                  <div class="text-gray-600 text-sm mb-4">{edu.location}</div>
                  
                  {#if edu.description}
                    <p class="text-gray-700 text-sm leading-relaxed">{edu.description}</p>
                  {/if}
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>


  .timeline-item:nth-child(1) { animation-delay: 0.1s; }
  .timeline-item:nth-child(2) { animation-delay: 0.2s; }
  .timeline-item:nth-child(3) { animation-delay: 0.3s; }
  .timeline-item:nth-child(4) { animation-delay: 0.4s; }
  .timeline-item:nth-child(5) { animation-delay: 0.5s; }
</style>