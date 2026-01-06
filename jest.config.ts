import type { Config } from 'jest';
import { pathsToModuleNameMapper } from 'ts-jest';
import tsConfig from './tsconfig.base.json';

const config: Config = {
  testEnvironment: 'node',

  // Only look for tests under src
  roots: ['<rootDir>/src'],

  // You said: __tests__ per module
  testMatch: ['**/__tests__/**/*.(spec|test).ts'],

  transform: {
    '^.+\\.ts$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
  },
  moduleNameMapper: pathsToModuleNameMapper(tsConfig.compilerOptions.paths, {
    prefix: '<rootDir>',
  }),

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
