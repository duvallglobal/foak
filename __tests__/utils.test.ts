import { createUrl, ensureStartsWith, validateEnvironmentVariables } from '../lib/utils';

describe('lib/utils', () => {
  describe('createUrl', () => {
    it('creates URL without query params', () => {
      const params = new URLSearchParams();
      const result = createUrl('/test', params);
      expect(result).toBe('/test');
    });

    it('creates URL with single query param', () => {
      const params = new URLSearchParams();
      params.set('q', 'search term');
      const result = createUrl('/search', params);
      expect(result).toBe('/search?q=search+term');
    });

    it('creates URL with multiple query params', () => {
      const params = new URLSearchParams();
      params.set('q', 'test');
      params.set('sort', 'price');
      params.set('category', 'clothes');
      const result = createUrl('/products', params);
      expect(result).toBe('/products?q=test&sort=price&category=clothes');
    });

    it('handles special characters in query params', () => {
      const params = new URLSearchParams();
      params.set('q', 'search & filter');
      const result = createUrl('/search', params);
      expect(result).toBe('/search?q=search+%26+filter');
    });
  });

  describe('ensureStartsWith', () => {
    it('adds prefix when string does not start with it', () => {
      const result = ensureStartsWith('example.com', 'https://');
      expect(result).toBe('https://example.com');
    });

    it('does not add prefix when string already starts with it', () => {
      const result = ensureStartsWith('https://example.com', 'https://');
      expect(result).toBe('https://example.com');
    });

    it('handles empty strings', () => {
      const result = ensureStartsWith('', 'prefix:');
      expect(result).toBe('prefix:');
    });

    it('handles multiple occurrences of prefix', () => {
      const result = ensureStartsWith('test://test://example.com', 'test://');
      expect(result).toBe('test://test://example.com');
    });
  });

  describe('validateEnvironmentVariables', () => {
    const originalEnv = process.env;

    beforeEach(() => {
      jest.resetModules();
      process.env = { ...originalEnv };
    });

    afterAll(() => {
      process.env = originalEnv;
    });

    it('passes validation when all required env vars are present', () => {
      process.env.SHOPIFY_STORE_DOMAIN = 'test-store.myshopify.com';
      process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN = 'test-token';
      
      expect(() => validateEnvironmentVariables()).not.toThrow();
    });

    it('throws error when SHOPIFY_STORE_DOMAIN is missing', () => {
      delete process.env.SHOPIFY_STORE_DOMAIN;
      process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN = 'test-token';
      
      expect(() => validateEnvironmentVariables()).toThrow(/SHOPIFY_STORE_DOMAIN/);
    });

    it('throws error when SHOPIFY_STOREFRONT_ACCESS_TOKEN is missing', () => {
      process.env.SHOPIFY_STORE_DOMAIN = 'test-store.myshopify.com';
      delete process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
      
      expect(() => validateEnvironmentVariables()).toThrow(/SHOPIFY_STOREFRONT_ACCESS_TOKEN/);
    });

    it('throws error when SHOPIFY_STORE_DOMAIN contains brackets', () => {
      process.env.SHOPIFY_STORE_DOMAIN = '[test-store].myshopify.com';
      process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN = 'test-token';
      
      expect(() => validateEnvironmentVariables()).toThrow(/brackets/);
    });

    it('throws error when both env vars are missing', () => {
      delete process.env.SHOPIFY_STORE_DOMAIN;
      delete process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
      
      expect(() => validateEnvironmentVariables()).toThrow();
    });
  });
});