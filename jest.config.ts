import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'node',

  // Only look for tests under src
  roots: ['<rootDir>/src'],

  // You said: __tests__ per module
  testMatch: ['**/__tests__/**/*.(spec|test).ts'],

  transform: {
    '^.+\\.ts$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
  },

  // Coverage
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: ['src/**/*.ts', '!src/**/*.d.ts', '!src/**/__tests__/**'],
  coverageReporters: ['text', 'lcov'],

  // Keep output clean
  clearMocks: true,

  rootDir: '.',
};

export default config;
