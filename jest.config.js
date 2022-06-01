module.exports = {
  coverageDirectory: './coverage',
  collectCoverageFrom: [
    '**/src/**/*.js',
    '!**/*.story.js',
    '!**/__tests__/**',
    '!**/node_modules/**'
  ],
  setupFilesAfterEnv: ['./src/setupTests.js'],
  testEnvironment: 'jest-environment-jsdom'
  //coverageThreshold: {
  //global: {
  //statements: 85,
  //branches: 80,
  //functions: 100,
  //lines: 85
  //}
  //}
};
