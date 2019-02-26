module.exports = {
  rootDir: '../../',
  preset: 'ts-jest',
  projects: ['<rootDir>/packages/*/.config/jest.config.js'],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/.config/typescript/tsconfig.testing.json',
    },
  },
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/'],
};