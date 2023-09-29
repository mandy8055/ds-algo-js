module.exports = {
  transform: {
    '^.+\\.mjs$': 'babel-jest',
  },
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/**/*.test.mjs'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.mjs',
    '!scripts/**/*.mjs',
    '!src/**/driver.mjs',
  ],
  coverageReporters: ['text', 'lcov'],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 88,
      functions: 88,
      lines: 88,
      statements: 88,
    },
  },
  reporters: [
    'default',
    [
      './node_modules/jest-html-reporters',
      {
        pageTitle: 'Test Report',
        publicPath: './coverage/html-report',
      },
    ],
  ],
};
