<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { createForm } from 'svelte-forms-lib';
  import * as yup from 'yup';
  import emailjs from '@emailjs/browser';
  import { personalInfo } from '$lib/data/personal';
  import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-svelte';
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

  let isSubmitting = false;
  let submitMessage = '';
  let submitStatus: 'success' | 'error' | '' | 'idle' = '';

  // Form validation schema
  const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
    email: yup.string().required('Email is required').email('Please enter a valid email'),
    subject: yup.string().required('Subject is required').min(5, 'Subject must be at least 5 characters'),
    message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters')
  });

  const { form, errors, handleChange, handleSubmit, isValid } = createForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      await submitForm(values);
    }
  });

  const submitForm = async (formData: any) => {
    isSubmitting = true;
    submitStatus = 'idle';

    try {
      // Initialize EmailJS (you'll need to configure these in your EmailJS account)
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: personalInfo.email
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      submitStatus = 'success';
      submitMessage = 'Thank you! Your message has been sent successfully. I\'ll get back to you soon.';
      
      // Reset form
      $form = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    } catch (error) {
      console.error('Email send error:', error);
      submitStatus = 'error';
      submitMessage = 'Sorry, there was an error sending your message. Please try again or contact me directly.';
    } finally {
      isSubmitting = false;
      
      // Clear status after 5 seconds
      setTimeout(() => {
        submitStatus = 'idle';
        submitMessage = '';
      }, 5000);
    }
  };

  onMount(async () => {
    if (!browser) return;
    
    // Initialize EmailJS
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    
    await initGSAP();
    
    // Animate section title
    const titleElement = document.querySelector('.contact-title');
    const subtitleElement = document.querySelector('.contact-subtitle');
    if (titleElement) AnimationUtils.fadeInUp(titleElement, 0.2);
    if (subtitleElement) AnimationUtils.fadeInUp(subtitleElement, 0.4);
    
    // Animate contact form
    const formElement = document.querySelector('.contact-form');
    if (formElement) AnimationUtils.fadeInLeft(formElement, 0.6);
    
    // Animate contact info
    const infoElement = document.querySelector('.contact-info');
    if (infoElement) AnimationUtils.fadeInRight(infoElement, 0.8);
    
    // Animate contact items
    const contactItems = document.querySelectorAll('.contact-item');
    if (contactItems.length > 0) {
      AnimationUtils.staggerAnimation(contactItems, 'fadeInUp');
    }
    
    // Animate social links
    const socialLinks = document.querySelectorAll('.social-link');
    if (socialLinks.length > 0) {
      AnimationUtils.staggerAnimation(socialLinks, 'scaleIn');
    }
  });
</script>

<section id="contact" class="py-20 bg-gray-50">
  <div class="container mx-auto px-6">
    <!-- Section Header -->
    <div class="text-center mb-16">
      <h2 class="contact-title text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Get In <span class="text-text-primary">Touch</span>
      </h2>
      <p class="contact-subtitle text-lg text-gray-600 max-w-2xl mx-auto">
        Ready to start your next project? Let's discuss your ideas and create something amazing together.
      </p>
    </div>

    <div class="grid lg:grid-cols-2 gap-16">
      <!-- Contact Info -->
      <div class="contact-info space-y-8">
        <div>
          <h3 class="text-2xl font-semibold text-gray-900 mb-6">Let's Talk</h3>
          <p class="text-gray-600 leading-relaxed mb-8">
            I'm always interested in new opportunities and exciting projects. 
            Whether you have a question, want to discuss a project, or just want to say hello, 
            feel free to reach out!
          </p>
        </div>

        <!-- Contact Details -->
        <div class="space-y-6">
          <div class="contact-item flex items-center gap-4">
            <div class="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <Mail size={20} class="text-text-primary" />
            </div>
            <div>
              <div class="text-gray-900 font-medium">Email</div>
              <a href="mailto:{personalInfo.email}" class="text-gray-600 hover:text-text-primary transition-colors">
                {personalInfo.email}
              </a>
            </div>
          </div>

          <div class="contact-item flex items-center gap-4">
            <div class="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <Phone size={20} class="text-text-primary" />
            </div>
            <div>
              <div class="text-gray-900 font-medium">Phone</div>
              <a href="tel:{personalInfo.phone}" class="text-gray-600 hover:text-text-primary transition-colors">
                {personalInfo.phone}
              </a>
            </div>
          </div>

          <div class="contact-item flex items-center gap-4">
            <div class="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <MapPin size={20} class="text-text-primary" />
            </div>
            <div>
              <div class="text-gray-900 font-medium">Location</div>
              <div class="text-gray-600">{personalInfo.location}</div>
            </div>
          </div>
        </div>

        <!-- Social Links -->
        <div>
          <h4 class="text-lg font-medium text-gray-900 mb-4">Follow Me</h4>
          <div class="flex gap-4">
            {#if personalInfo.social.github}
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                class="social-link w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:text-text-primary hover:border-gray-300 transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <Github size={20} />
              </a>
            {/if}
            {#if personalInfo.social.linkedin}
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                class="social-link w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:text-text-primary hover:border-gray-300 transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <Linkedin size={20} />
              </a>
            {/if}
            {#if personalInfo.social.twitter}
              <a
                href={personalInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                class="social-link w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:text-text-primary hover:border-gray-300 transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <Twitter size={20} />
              </a>
            {/if}
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="contact-form bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
        <h3 class="text-2xl font-semibold text-gray-900 mb-6">Send Message</h3>
        
        <form on:submit={handleSubmit} class="space-y-6">
          <!-- Name -->
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              bind:value={$form.name}
              on:change={handleChange}
              class="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:border-text-primary focus:outline-none transition-colors
                {$errors.name ? 'border-red-500' : ''}"
              placeholder="Your full name"
            />
            {#if $errors.name}
              <p class="text-red-400 text-sm mt-1">{$errors.name}</p>
            {/if}
          </div>

          <!-- Email -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              bind:value={$form.email}
              on:change={handleChange}
              class="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:border-text-primary focus:outline-none transition-colors
                {$errors.email ? 'border-red-500' : ''}"
              placeholder="your.email@example.com"
            />
            {#if $errors.email}
              <p class="text-red-400 text-sm mt-1">{$errors.email}</p>
            {/if}
          </div>

          <!-- Subject -->
          <div>
            <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
              Subject *
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              bind:value={$form.subject}
              on:change={handleChange}
              class="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:border-text-primary focus:outline-none transition-colors
                {$errors.subject ? 'border-red-500' : ''}"
              placeholder="What's this about?"
            />
            {#if $errors.subject}
              <p class="text-red-400 text-sm mt-1">{$errors.subject}</p>
            {/if}
          </div>

          <!-- Message -->
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              bind:value={$form.message}
              on:change={handleChange}
              class="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:border-text-primary focus:outline-none transition-colors resize-none
                {$errors.message ? 'border-red-500' : ''}"
              placeholder="Tell me about your project..."
            ></textarea>
            {#if $errors.message}
              <p class="text-red-400 text-sm mt-1">{$errors.message}</p>
            {/if}
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            disabled={!$isValid || isSubmitting}
            class="w-full bg-text-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2
              {isSubmitting ? 'animate-pulse' : 'hover:scale-105'}"
          >
            {#if isSubmitting}
              <div class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Sending...
            {:else}
              <Send size={20} />
              Send Message
            {/if}
          </button>

          <!-- Status Message -->
          {#if submitMessage}
            <div class="p-4 rounded-lg text-center
              {submitStatus === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : ''}
              {submitStatus === 'error' ? 'bg-red-500/10 text-red-400 border border-red-500/20' : ''}"
            >
              {submitMessage}
            </div>
          {/if}
        </form>
      </div>
    </div>
  </div>
</section>