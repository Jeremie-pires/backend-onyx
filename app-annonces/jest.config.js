module.exports = {
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/migrations/**',
    '!src/models/index.js'
  ],
  testMatch: [
    '**/tests/**/*.test.js'
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/tests/'
  ],
  verbose: true,
  forceExit: true,
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true
};
