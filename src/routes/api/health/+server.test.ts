import { describe, it, expect } from 'vitest';
import { GET } from './+server.js';

describe('Health API Endpoint', () => {
  it('should return health status', async () => {
    const response = await GET();
    
    expect(response.status).toBe(200);
    
    const data = await response.json();
    expect(data).toHaveProperty('status');
    expect(data.status).toBe('ok');
  });

  it('should return valid JSON response', async () => {
    const response = await GET();
    
    expect(response.headers.get('content-type')).toContain('application/json');
    
    const data = await response.json();
    expect(typeof data).toBe('object');
  });

  it('should include message', async () => {
    const response = await GET();
    const data = await response.json();
    
    expect(data).toHaveProperty('message');
    expect(data.message).toBe('Server is working');
  });
});