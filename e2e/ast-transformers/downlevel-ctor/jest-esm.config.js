/** @type {import('ts-jest/dist/types').ProjectConfigTsJest} */
module.exports = {
  displayName: 'ast-transformer',
  preset: '<rootDir>/../../../node_modules/ts-jest/presets/default-esm',
  globals: {
    'ts-jest': {
      useESM: true,
      tsconfig: '<rootDir>/../../tsconfig-esm.json',
    },
  },
  transform: { '^.+\\.(ts|js|html)$': '<rootDir>/../../../build/index.js' },
};
