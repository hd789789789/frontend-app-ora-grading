const { createConfig } = require('@edx/frontend-build');

module.exports = createConfig('jest', {
  setupFilesAfterEnv: [
    'jest-expect-message',
    '<rootDir>/src/setupTest.js',
  ],
  modulePaths: ['<rootDir>/src/'],
  coveragePathIgnorePatterns: [
    'src/segment.js',
    'src/postcss.config.js',
    'testUtils', // don't unit test jest mocking tools
    'src/data/services/lms/fakeData', // don't unit test mock data
    'src/test', // don't unit test integration test utils
  ],
  testTimeout: 120000,
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@openedx/paragon$': '<rootDir>/mockParagon.js',
    '^@openedx/paragon/(.*)$': '<rootDir>/mockParagon.js',
  },
});
