import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load the homepage', async ({ page }) => {
    await page.goto('/');
    
    // Check if the page loads successfully
    await expect(page).toHaveTitle(/Portfolio/);
    
    // Check if main sections are visible
    await expect(page.locator('main')).toBeVisible();
  });

  test('should have navigation menu', async ({ page }) => {
    await page.goto('/');
    
    // Check if navigation is present
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
    
    // Check for common navigation links
    const aboutLink = page.getByRole('link', { name: /about/i });
    const portfolioLink = page.getByRole('link', { name: /portfolio/i });
    const contactLink = page.getByRole('link', { name: /contact/i });
    
    await expect(aboutLink).toBeVisible();
    await expect(portfolioLink).toBeVisible();
    await expect(contactLink).toBeVisible();
  });

  test('should have hero section', async ({ page }) => {
    await page.goto('/');
    
    // Look for common hero section elements
    const heroSection = page.locator('section').first();
    await expect(heroSection).toBeVisible();
    
    // Check for name or title
    const nameElement = page.getByText(/Edwaldo/i);
    await expect(nameElement).toBeVisible();
  });

  test('should be responsive', async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    await expect(page.locator('main')).toBeVisible();
    
    // Test tablet viewport
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    
    await expect(page.locator('main')).toBeVisible();
    
    // Test desktop viewport
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');
    
    await expect(page.locator('main')).toBeVisible();
  });

  test('should have footer', async ({ page }) => {
    await page.goto('/');
    
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });

  test('should have proper meta tags', async ({ page }) => {
    await page.goto('/');
    
    // Check for viewport meta tag
    const viewport = page.locator('meta[name="viewport"]');
    await expect(viewport).toHaveAttribute('content', /width=device-width/);
  });
});