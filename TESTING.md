# Testing Setup for SvelteKit Portfolio

This project now includes a comprehensive testing setup with both unit tests and end-to-end tests.

## 🧪 Testing Framework

### Unit Testing (Vitest)
- **Framework**: Vitest with jsdom environment
- **Location**: `src/**/*.test.ts` files
- **Configuration**: `vitest.config.ts`

### End-to-End Testing (Playwright)
- **Framework**: Playwright
- **Location**: `tests/*.spec.ts` files
- **Configuration**: `playwright.config.ts`

## 📁 Test Files Created

### Unit Tests
- `src/lib/data/personal.test.ts` - Tests for personal data validation
- `src/lib/utils/animations.test.ts` - Tests for animation utilities
- `src/lib/components/ui/LoadingScreen.test.ts` - Tests for LoadingScreen component
- `src/routes/api/health/+server.test.ts` - Tests for health API endpoint

### E2E Tests
- `tests/homepage.spec.ts` - Homepage functionality tests
- `tests/test-page.spec.ts` - Test page routing tests
- `tests/api-health.spec.ts` - API endpoint tests

## 🚀 Running Tests

### Unit Tests
```bash
# Run all unit tests
npm run test:run

# Run tests in watch mode
npm run test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

### End-to-End Tests
```bash
# Run all E2E tests
npm run test:e2e

# Run E2E tests with UI
npm run test:e2e:ui

# Run E2E tests in headed mode (visible browser)
npm run test:e2e:headed
```

## 📋 Test Coverage

### Data Layer
- ✅ Personal information validation
- ✅ Experience data structure
- ✅ Education data validation
- ✅ Social links format validation

### Utilities
- ✅ Animation utilities (GSAP integration)
- ✅ Page transition configurations
- ✅ Scroll animation configurations

### Components
- ✅ LoadingScreen component props
- ✅ Component visibility logic
- ✅ Callback function handling

### API Endpoints
- ✅ Health check endpoint
- ✅ JSON response validation
- ✅ Status code verification

### E2E Scenarios
- ✅ Homepage loading and navigation
- ✅ Test page routing
- ✅ Responsive design testing
- ✅ API endpoint accessibility

## 🔧 Configuration Files

### Vitest Configuration (`vitest.config.ts`)
```typescript
export default defineConfig({
  plugins: [sveltekit()],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
    environment: 'jsdom',
    setupFiles: ['src/test/setup.ts'],
    globals: true
  }
});
```

### Playwright Configuration (`playwright.config.ts`)
```typescript
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  use: {
    baseURL: 'http://127.0.0.1:4173',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
  webServer: {
    command: 'npm run build && npm run preview',
    url: 'http://127.0.0.1:4173',
  },
});
```

## 📦 Dependencies Added

### Development Dependencies
- `vitest` - Unit testing framework
- `@vitest/ui` - Vitest UI interface
- `jsdom` - DOM environment for tests
- `@testing-library/svelte` - Svelte component testing utilities
- `@testing-library/jest-dom` - Custom Jest matchers
- `@testing-library/user-event` - User interaction testing
- `playwright` - E2E testing framework
- `@playwright/test` - Playwright test runner

## 🎯 Test Scripts

The following scripts have been added to `package.json`:

```json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:run": "vitest run",
    "test:coverage": "vitest run --coverage",
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui",
    "test:e2e:headed": "playwright test --headed"
  }
}
```

## 🚨 Troubleshooting

### Common Issues

1. **GSAP Mocking Issues**: The animation tests mock GSAP to prevent SSR issues
2. **Component Rendering**: Some Svelte components may need special handling for testing
3. **Browser Dependencies**: Playwright may need additional system dependencies on some platforms

### Running Tests in CI/CD

For continuous integration, use:
```bash
npm run test:run && npm run test:e2e
```

## 📈 Next Steps

1. Add more component tests as you develop new features
2. Expand E2E test coverage for user workflows
3. Set up test coverage reporting
4. Add visual regression testing if needed
5. Integrate with your CI/CD pipeline

## 🎉 Benefits

- **Reliability**: Catch bugs before they reach production
- **Confidence**: Refactor code knowing tests will catch regressions
- **Documentation**: Tests serve as living documentation
- **Quality**: Maintain high code quality standards
- **Automation**: Run tests automatically in CI/CD pipelines