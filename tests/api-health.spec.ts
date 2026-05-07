import { test, expect } from '@playwright/test';

test.describe('Health API', () => {
  test('should return health status', async ({ request }) => {
    const response = await request.get('/api/health');
    
    expect(response.status()).toBe(200);
    
    const data = await response.json();
    expect(data).toHaveProperty('status');
    expect(data.status).toBe('ok');
  });

  test('should return valid JSON response', async ({ request }) => {
    const response = await request.get('/api/health');
    
    expect(response.headers()['content-type']).toContain('application/json');
    
    const data = await response.json();
    expect(typeof data).toBe('object');
  });
});