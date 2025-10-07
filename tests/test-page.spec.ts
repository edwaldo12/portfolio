import { test, expect } from '@playwright/test';

test.describe('Test Page', () => {
  test('should load the test page', async ({ page }) => {
    await page.goto('/test');
    
    // Check if the page loads successfully
    await expect(page).toHaveTitle(/Portfolio/);
    
    // Check if the test page content is visible
    await expect(page.getByRole('heading', { name: 'Test Page' })).toBeVisible();
    await expect(page.getByText('This is a simple test page to verify routing works.')).toBeVisible();
  });

  test('should have proper navigation', async ({ page }) => {
    await page.goto('/test');
    
    // Check if navigation elements are present
    const header = page.locator('header');
    await expect(header).toBeVisible();
  });

  test('should be responsive', async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/test');
    
    await expect(page.getByRole('heading', { name: 'Test Page' })).toBeVisible();
    
    // Test desktop viewport
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/test');
    
    await expect(page.getByRole('heading', { name: 'Test Page' })).toBeVisible();
  });
});