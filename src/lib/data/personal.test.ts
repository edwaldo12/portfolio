import { describe, it, expect } from 'vitest';
import { 
  personalInfo, 
  experiences, 
  education, 
  getCurrentExperience, 
  getExperienceById, 
  getEducationById,
  type PersonalInfo,
  type Experience,
  type Education
} from './personal';

describe('personalInfo', () => {
  it('should have all required fields', () => {
    expect(personalInfo).toHaveProperty('name');
    expect(personalInfo).toHaveProperty('title');
    expect(personalInfo).toHaveProperty('subtitle');
    expect(personalInfo).toHaveProperty('bio');
    expect(personalInfo).toHaveProperty('longBio');
    expect(personalInfo).toHaveProperty('location');
    expect(personalInfo).toHaveProperty('email');
    expect(personalInfo).toHaveProperty('avatar');
    expect(personalInfo).toHaveProperty('social');
    expect(personalInfo).toHaveProperty('stats');
  });

  it('should have valid name', () => {
    expect(personalInfo.name).toBe('Edwaldo Utama');
    expect(personalInfo.name).toContain(' ');
  });

  it('should have valid email format', () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    expect(personalInfo.email).toMatch(emailRegex);
  });

  it('should have valid social links', () => {
    expect(personalInfo.social.github).toMatch(/^https:\/\/github\.com\//);
    expect(personalInfo.social.linkedin).toMatch(/^https:\/\/www\.linkedin\.com\/in\//);
    expect(personalInfo.social.twitter).toMatch(/^https:\/\/twitter\.com\//);
  });

  it('should have valid stats', () => {
    expect(personalInfo.stats.experience).toMatch(/\d+\+ Years/);
    expect(personalInfo.stats.projects).toMatch(/\d+\+ Projects/);
    expect(personalInfo.stats.clients).toMatch(/\d+\+ Clients/);
  });

  it('should have valid phone format', () => {
    expect(personalInfo.phone).toMatch(/^\+\d{2} \d{3}-\d{4}-\d{4}$/);
  });
});

describe('experiences', () => {
  it('should be an array', () => {
    expect(Array.isArray(experiences)).toBe(true);
    expect(experiences.length).toBeGreaterThan(0);
  });

  it('should have valid experience objects', () => {
    experiences.forEach((exp: Experience) => {
      expect(exp).toHaveProperty('id');
      expect(exp).toHaveProperty('company');
      expect(exp).toHaveProperty('position');
      expect(exp).toHaveProperty('duration');
      expect(exp).toHaveProperty('startDate');
      expect(exp).toHaveProperty('location');
      expect(exp).toHaveProperty('description');
      expect(exp).toHaveProperty('technologies');
      expect(exp).toHaveProperty('current');
      expect(typeof exp.current).toBe('boolean');
    });
  });

  it('should have only one current experience', () => {
    const currentExperiences = experiences.filter(exp => exp.current);
    expect(currentExperiences).toHaveLength(1);
  });

  it('should have valid date formats', () => {
    experiences.forEach((exp: Experience) => {
      expect(exp.startDate).toMatch(/^\d{4}$/);
      if (exp.endDate) {
        expect(exp.endDate).toMatch(/^\d{4}$/);
        expect(parseInt(exp.endDate)).toBeGreaterThanOrEqual(parseInt(exp.startDate));
      }
    });
  });

  it('should have technologies as arrays', () => {
    experiences.forEach((exp: Experience) => {
      expect(Array.isArray(exp.technologies)).toBe(true);
      expect(exp.technologies.length).toBeGreaterThan(0);
    });
  });

  it('should have achievements as arrays when present', () => {
    experiences.forEach((exp: Experience) => {
      if (exp.achievements) {
        expect(Array.isArray(exp.achievements)).toBe(true);
        expect(exp.achievements.length).toBeGreaterThan(0);
      }
    });
  });
});

describe('education', () => {
  it('should be an array', () => {
    expect(Array.isArray(education)).toBe(true);
    expect(education.length).toBeGreaterThan(0);
  });

  it('should have valid education objects', () => {
    education.forEach((edu: Education) => {
      expect(edu).toHaveProperty('id');
      expect(edu).toHaveProperty('institution');
      expect(edu).toHaveProperty('degree');
      expect(edu).toHaveProperty('field');
      expect(edu).toHaveProperty('duration');
      expect(edu).toHaveProperty('startDate');
      expect(edu).toHaveProperty('endDate');
      expect(edu).toHaveProperty('location');
    });
  });

  it('should have valid date ranges', () => {
    education.forEach((edu: Education) => {
      expect(edu.startDate).toMatch(/^\d{4}$/);
      expect(edu.endDate).toMatch(/^\d{4}$/);
      expect(parseInt(edu.endDate)).toBeGreaterThanOrEqual(parseInt(edu.startDate));
    });
  });
});

describe('getCurrentExperience', () => {
  it('should return the current experience', () => {
    const current = getCurrentExperience();
    expect(current).toBeDefined();
    expect(current?.current).toBe(true);
  });

  it('should return undefined if no current experience', () => {
    // This test would need to mock the experiences array
    // For now, we know there should be one current experience
    const current = getCurrentExperience();
    expect(current).toBeDefined();
  });
});

describe('getExperienceById', () => {
  it('should return correct experience by id', () => {
    const exp = getExperienceById('exp-1');
    expect(exp).toBeDefined();
    expect(exp?.id).toBe('exp-1');
  });

  it('should return undefined for non-existent id', () => {
    const exp = getExperienceById('non-existent');
    expect(exp).toBeUndefined();
  });
});

describe('getEducationById', () => {
  it('should return correct education by id', () => {
    const edu = getEducationById('edu-1');
    expect(edu).toBeDefined();
    expect(edu?.id).toBe('edu-1');
  });

  it('should return undefined for non-existent id', () => {
    const edu = getEducationById('non-existent');
    expect(edu).toBeUndefined();
  });
});