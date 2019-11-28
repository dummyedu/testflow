
module.exports = {
  verbose: true,
  collectCoverage: true,
  coverageDirectory: './coverage/',
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/testutils/**/*',
    '!src/bin/**/*',
  ],
  setupFiles: [
    'react-app-polyfill/jsdom',
  ],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
  ],
  testEnvironment: 'jest-environment-jsdom-fourteen',
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
