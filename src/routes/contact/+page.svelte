<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { Send, Mail, Phone, MapPin } from 'lucide-svelte';
  import emailjs from '@emailjs/browser';
  import { personalInfo } from '$lib/data/personal';

  // Browser-only GSAP import
  let gsap: any;
  
  async function initGSAP() {
    if (browser && !gsap) {
      const gsapModule = await import('gsap');
      gsap = gsapModule.gsap;
    }
    return gsap;
  }

  let formElement: HTMLFormElement;
  let contactSection: HTMLElement;
  
  // Form data
  let formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  
  // Validation errors
  let errors = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  
  // Form validation state
  let isFormValid = false;
  let messageCharCount = 0;
  const minMessageLength = 10;
  
  // Email sending state
  let isSubmitting = false;
  let submitMessage = '';
  let submitStatus: 'success' | 'error' | 'idle' = 'idle';

  onMount(async () => {
    // Initialize EmailJS
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    
    if (!browser) return;
    
    const gsapInstance = await initGSAP();
    if (!gsapInstance) return;
    
    // Ensure elements exist before animating
    if (contactSection) {
      // Animate contact section
      gsapInstance.fromTo(contactSection, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
      );
    }

    // Wait for DOM to be ready before animating contact items
    setTimeout(() => {
      const contactItems = document.querySelectorAll('.contact-item');
      if (contactItems.length > 0) {
        gsapInstance.fromTo(contactItems, 
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.8, stagger: 0.2, delay: 0.3 }
        );
      }
    }, 100);
  });
  
  // Validation functions
  const validateName = (name: string) => {
    if (!name.trim()) {
      return 'Name is required';
    }
    if (name.trim().length < 2) {
      return 'Name must be at least 2 characters';
    }
    return '';
  };
  
  const validateEmail = (email: string) => {
    if (!email.trim()) {
      return 'Email is required';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }
    return '';
  };
  
  const validateSubject = (subject: string) => {
    if (!subject.trim()) {
      return 'Subject is required';
    }
    if (subject.trim().length < 3) {
      return 'Subject must be at least 3 characters';
    }
    return '';
  };
  
  const validateMessage = (message: string) => {
    if (!message.trim()) {
      return 'Message is required';
    }
    if (message.trim().length < minMessageLength) {
      return `Message must be at least ${minMessageLength} characters`;
    }
    return '';
  };
  
  // Real-time validation
  const validateForm = () => {
    errors.name = validateName(formData.name);
    errors.email = validateEmail(formData.email);
    errors.subject = validateSubject(formData.subject);
    errors.message = validateMessage(formData.message);
    
    isFormValid = !errors.name && !errors.email && !errors.subject && !errors.message;
  };
  
  // Handle input changes with real-time validation
  const handleInputChange = (field: keyof typeof formData, value: string) => {
    formData[field] = value;
    
    if (field === 'message') {
      messageCharCount = value.length;
    }
    
    validateForm();
  };
  
  // Submit form with EmailJS
  const submitForm = async () => {
    isSubmitting = true;
    submitStatus = 'idle';
    submitMessage = '';

    try {
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
      formData = { name: '', email: '', subject: '', message: '' };
      messageCharCount = 0;
      errors = { name: '', email: '', subject: '', message: '' };
      isFormValid = false;
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

  const handleSubmit = async (event: SubmitEvent) => {
    event.preventDefault();
    
    validateForm();
    
    if (!isFormValid) {
      console.log('Form validation failed');
      return;
    }
    
    // Submit form with EmailJS
    await submitForm();
  };
</script>

<svelte:head>
  <title>Contact - {personalInfo.name}</title>
  <meta name="description" content="Get in touch with {personalInfo.name}. Let's discuss your next project." />
</svelte:head>

<main class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20">
  <div bind:this={contactSection} class="container mx-auto px-6">
    <div class="text-center mb-16">
      <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
        Get In <span class="text-gradient">Touch</span>
      </h1>
      <p class="text-xl text-gray-400 max-w-2xl mx-auto">
        Ready to start your next project? Let's discuss how we can work together.
      </p>
    </div>

    <div class="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
      <!-- Contact Information -->
      <div class="space-y-8">
        <div class="contact-item flex items-center space-x-4 p-6 bg-dark-200/50 rounded-lg border border-gray-700/30">
          <div class="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
            <Mail class="text-accent" size={24} />
          </div>
          <div>
            <h3 class="text-white font-semibold mb-1">Email</h3>
            <a href="mailto:{personalInfo.email}" class="text-gray-400 hover:text-accent transition-colors">
              {personalInfo.email}
            </a>
          </div>
        </div>

        <div class="contact-item flex items-center space-x-4 p-6 bg-dark-200/50 rounded-lg border border-gray-700/30">
          <div class="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
            <Phone class="text-accent" size={24} />
          </div>
          <div>
            <h3 class="text-white font-semibold mb-1">Phone</h3>
            <a href="tel:{personalInfo.phone}" class="text-gray-400 hover:text-accent transition-colors">
              {personalInfo.phone}
            </a>
          </div>
        </div>

        <div class="contact-item flex items-center space-x-4 p-6 bg-dark-200/50 rounded-lg border border-gray-700/30">
          <div class="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
            <MapPin class="text-accent" size={24} />
          </div>
          <div>
            <h3 class="text-white font-semibold mb-1">Location</h3>
            <p class="text-gray-400">Jakarta, Indonesia</p>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="contact-item">
        <form bind:this={formElement} on:submit={handleSubmit} class="space-y-6">
          <div>
            <label for="name" class="block text-white font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              bind:value={formData.name}
              on:input={(e) => handleInputChange('name', (e.target as HTMLInputElement).value)}
              class="w-full px-4 py-3 bg-dark-200/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors {errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-700/30 focus:border-accent'}"
              placeholder="Your name"
            />
            {#if errors.name}
              <p class="text-red-400 text-sm mt-1">{errors.name}</p>
            {/if}
          </div>

          <div>
            <label for="email" class="block text-white font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              bind:value={formData.email}
              on:input={(e) => handleInputChange('email', (e.target as HTMLInputElement).value)}
              class="w-full px-4 py-3 bg-dark-200/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors {errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-700/30 focus:border-accent'}"
              placeholder="your.email@example.com"
            />
            {#if errors.email}
              <p class="text-red-400 text-sm mt-1">{errors.email}</p>
            {/if}
          </div>

          <div>
            <label for="subject" class="block text-white font-medium mb-2">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              bind:value={formData.subject}
              on:input={(e) => handleInputChange('subject', (e.target as HTMLInputElement).value)}
              class="w-full px-4 py-3 bg-dark-200/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors {errors.subject ? 'border-red-500 focus:border-red-500' : 'border-gray-700/30 focus:border-accent'}"
              placeholder="Project discussion"
            />
            {#if errors.subject}
              <p class="text-red-400 text-sm mt-1">{errors.subject}</p>
            {/if}
          </div>

          <div>
            <div class="flex justify-between items-center mb-2">
              <label for="message" class="block text-white font-medium">Message</label>
              <span class="text-sm {messageCharCount < minMessageLength ? 'text-red-400' : 'text-gray-400'}">
                {messageCharCount}/{minMessageLength} min
              </span>
            </div>
            <textarea
              id="message"
              name="message"
              rows="6"
              bind:value={formData.message}
              on:input={(e) => handleInputChange('message', (e.target as HTMLTextAreaElement).value)}
              class="w-full px-4 py-3 bg-dark-200/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors resize-none {errors.message ? 'border-red-500 focus:border-red-500' : 'border-gray-700/30 focus:border-accent'}"
              placeholder="Tell me about your project..."
            ></textarea>
            {#if errors.message}
              <p class="text-red-400 text-sm mt-1">{errors.message}</p>
            {/if}
          </div>

          <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            class="w-full px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 {isFormValid && !isSubmitting ? 'bg-accent text-dark-100 hover:bg-accent/90 hover:scale-105' : 'bg-gray-600 text-gray-400 cursor-not-allowed'} {isSubmitting ? 'animate-pulse' : ''}"
          >
            {#if isSubmitting}
              <div class="w-5 h-5 border-2 border-dark-100/30 border-t-dark-100 rounded-full animate-spin"></div>
              Sending...
            {:else}
              <Send size={20} />
              Send Message
            {/if}
          </button>
          
          <!-- Status Message -->
          {#if submitMessage}
            <div class="p-4 rounded-lg text-center transition-all duration-300
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
</main>

<style>
  .text-gradient {
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
</style>