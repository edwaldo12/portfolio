import { describe, it, expect, vi, beforeEach } from 'vitest';
import { AnimationUtils, pageTransitions, scrollAnimations } from './animations';

// Mock browser environment
Object.defineProperty(window, 'location', {
  value: {
    href: 'http://localhost:3000'
  },
  writable: true
});

// Mock GSAP
const mockGsap = {
  fromTo: vi.fn(),
  to: vi.fn(),
  registerPlugin: vi.fn()
};

// Mock the dynamic imports
vi.mock('gsap', () => ({
  default: mockGsap
}));

vi.mock('gsap/ScrollTrigger', () => ({
  default: {}
}));

// Mock the browser environment for the animations module
vi.mock('$app/environment', () => ({
  browser: true
}));

describe('AnimationUtils', () => {
  let mockElement: HTMLElement;

  beforeEach(() => {
    mockElement = document.createElement('div');
    vi.clearAllMocks();
  });

  describe('fadeInUp', () => {
    it('should call gsap.fromTo with correct parameters', async () => {
      await AnimationUtils.fadeInUp(mockElement, { delay: 0.5 });
      
      expect(mockGsap.fromTo).toHaveBeenCalledWith(
        mockElement,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.5,
          ease: 'power2.out'
        }
      );
    });

    it('should work with number delay parameter', async () => {
      await AnimationUtils.fadeInUp(mockElement, 1.0);
      
      expect(mockGsap.fromTo).toHaveBeenCalledWith(
        mockElement,
        expect.any(Object),
        expect.objectContaining({
          delay: 1.0
        })
      );
    });
  });

  describe('fadeInLeft', () => {
    it('should call gsap.fromTo with correct x-axis animation', async () => {
      await AnimationUtils.fadeInLeft(mockElement);
      
      expect(mockGsap.fromTo).toHaveBeenCalledWith(
        mockElement,
        {
          opacity: 0,
          x: -50
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0,
          ease: 'power2.out'
        }
      );
    });
  });

  describe('fadeInRight', () => {
    it('should call gsap.fromTo with correct x-axis animation', async () => {
      await AnimationUtils.fadeInRight(mockElement);
      
      expect(mockGsap.fromTo).toHaveBeenCalledWith(
        mockElement,
        {
          opacity: 0,
          x: 50
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0,
          ease: 'power2.out'
        }
      );
    });
  });

  describe('scaleIn', () => {
    it('should call gsap.fromTo with scale animation', async () => {
      await AnimationUtils.scaleIn(mockElement, 0.3);
      
      expect(mockGsap.fromTo).toHaveBeenCalledWith(
        mockElement,
        {
          opacity: 0,
          scale: 0.8
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: 0.3,
          ease: 'back.out(1.7)'
        }
      );
    });
  });

  describe('staggerAnimation', () => {
    it('should call fadeInUp for each element with staggered delay', async () => {
      const elements = [document.createElement('div'), document.createElement('div')];
      const fadeInUpSpy = vi.spyOn(AnimationUtils, 'fadeInUp');
      
      await AnimationUtils.staggerAnimation(elements, 'fadeInUp');
      
      expect(fadeInUpSpy).toHaveBeenCalledTimes(2);
      expect(fadeInUpSpy).toHaveBeenCalledWith(elements[0], 0);
      expect(fadeInUpSpy).toHaveBeenCalledWith(elements[1], 0.1);
    });
  });

  describe('typewriterEffect', () => {
    it('should set text content character by character', () => {
      const text = 'Hello';
      AnimationUtils.typewriterEffect(mockElement, text, 10);
      
      expect(mockElement.textContent).toBe('');
      
      // Wait for all characters to be typed
      setTimeout(() => {
        expect(mockElement.textContent).toBe(text);
      }, text.length * 10 + 10);
    });
  });

  describe('progressBarAnimation', () => {
    it('should animate progress bar width', async () => {
      await AnimationUtils.progressBarAnimation(mockElement, 75, 2.0);
      
      expect(mockGsap.fromTo).toHaveBeenCalledWith(
        mockElement,
        { width: '0%' },
        {
          width: '75%',
          duration: 2.0,
          ease: 'power2.out'
        }
      );
    });
  });
});

describe('pageTransitions', () => {
  it('should have correct fadeIn configuration', () => {
    expect(pageTransitions.fadeIn).toEqual({
      from: { opacity: 0 },
      to: { opacity: 1, duration: 0.5 }
    });
  });

  it('should have correct slideUp configuration', () => {
    expect(pageTransitions.slideUp).toEqual({
      from: { opacity: 0, y: 50 },
      to: { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
    });
  });
});

describe('scrollAnimations', () => {
  it('should have correct fadeInUp configuration', () => {
    expect(scrollAnimations.fadeInUp).toEqual({
      from: { opacity: 0, y: 50 },
      to: { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    });
  });

  it('should have correct scaleIn configuration', () => {
    expect(scrollAnimations.scaleIn).toEqual({
      from: { opacity: 0, scale: 0.8 },
      to: { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' }
    });
  });
});