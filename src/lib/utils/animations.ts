import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animation utilities for consistent animations across components
export class AnimationUtils {
  static fadeInUp(element: Element, options: { delay?: number } | number = 0) {
    const delay = typeof options === 'number' ? options : options.delay || 0;
    gsap.fromTo(element, 
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay,
        ease: 'power2.out'
      }
    );
  }

  static fadeInLeft(element: Element, options: { delay?: number } | number = 0) {
    const delay = typeof options === 'number' ? options : options.delay || 0;
    gsap.fromTo(element,
      {
        opacity: 0,
        x: -50
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        delay,
        ease: 'power2.out'
      }
    );
  }

  static fadeInRight(element: Element, options: { delay?: number } | number = 0) {
    const delay = typeof options === 'number' ? options : options.delay || 0;
    gsap.fromTo(element,
      {
        opacity: 0,
        x: 50
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        delay,
        ease: 'power2.out'
      }
    );
  }

  static scaleIn(element: Element, delay: number = 0) {
    gsap.fromTo(element,
      {
        opacity: 0,
        scale: 0.8
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        delay,
        ease: 'back.out(1.7)'
      }
    );
  }

  static staggerAnimation(elements: NodeListOf<Element> | Element[], animation: string = 'fadeInUp') {
    elements.forEach((element, index) => {
      const delay = index * 0.1;
      switch (animation) {
        case 'fadeInUp':
          this.fadeInUp(element, delay);
          break;
        case 'fadeInLeft':
          this.fadeInLeft(element, delay);
          break;
        case 'fadeInRight':
          this.fadeInRight(element, delay);
          break;
        case 'scaleIn':
          this.scaleIn(element, delay);
          break;
      }
    });
  }

  static scrollTriggerAnimation(element: Element, animation: any) {
    const scrollTriggerConfig = animation.scrollTrigger || {};
    gsap.fromTo(element, animation.from || {}, {
      ...animation.to,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        ...scrollTriggerConfig
      }
    });
  }

  static typewriterEffect(element: Element, text: string, speed: number = 50) {
    element.textContent = '';
    const chars = text.split('');
    
    chars.forEach((char, index) => {
      setTimeout(() => {
        element.textContent += char;
      }, index * speed);
    });
  }

  static progressBarAnimation(element: Element, targetWidth: number, duration: number = 1.5) {
    gsap.fromTo(element,
      { width: '0%' },
      {
        width: `${targetWidth}%`,
        duration,
        ease: 'power2.out'
      }
    );
  }

  static parallaxEffect(element: Element, speed: number = 0.5) {
    gsap.to(element, {
      yPercent: -50 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  }

  static hoverScale(element: Element, scale: number = 1.05) {
    element.addEventListener('mouseenter', () => {
      gsap.to(element, {
        scale,
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    element.addEventListener('mouseleave', () => {
      gsap.to(element, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  }

  static magneticEffect(element: Element, strength: number = 0.3) {
    element.addEventListener('mousemove', (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const rect = element.getBoundingClientRect();
      const x = mouseEvent.clientX - rect.left - rect.width / 2;
      const y = mouseEvent.clientY - rect.top - rect.height / 2;

      gsap.to(element, {
        x: x * strength,
        y: y * strength,
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    element.addEventListener('mouseleave', () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  }

  static infiniteRotation(element: Element, duration: number = 10) {
    gsap.to(element, {
      rotation: 360,
      duration,
      ease: 'none',
      repeat: -1
    });
  }

  static floatingAnimation(element: Element, distance: number = 10, duration: number = 3) {
    gsap.to(element, {
      y: distance,
      duration,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1
    });
  }
}

// Page transition animations
export const pageTransitions = {
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1, duration: 0.5 }
  },
  slideUp: {
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
  },
  slideDown: {
    from: { opacity: 0, y: -50 },
    to: { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
  }
};

// Scroll animations configuration
export const scrollAnimations = {
  fadeInUp: {
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
  },
  fadeInLeft: {
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' }
  },
  fadeInRight: {
    from: { opacity: 0, x: 50 },
    to: { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' }
  },
  scaleIn: {
    from: { opacity: 0, scale: 0.8 },
    to: { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' }
  }
};