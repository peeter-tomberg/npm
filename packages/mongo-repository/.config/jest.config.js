const package = require('../package.json');
const base = require('../../../.config/jest/jest.config.js');

module.exports = {
  ...base,
  roots: ['<rootDir>/packages/mongo-repository'],
  name: package.name,
  displayName: package.name,
};