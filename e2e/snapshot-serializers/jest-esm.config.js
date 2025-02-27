/** @type {import('ts-jest/dist/types').ProjectConfigTsJest} */
module.exports = {
  displayName: 'snapshot-serializers',
  preset: '<rootDir>/../../node_modules/ts-jest/presets/default-esm',
  globals: {
    'ts-jest': {
      useESM: true,
      tsconfig: '<rootDir>/../tsconfig-esm.json',
      stringifyContentPathRegex: '\\.html$',
    },
  },
  setupFilesAfterEnv: ['<rootDir>/../../setup-jest.js'],
  snapshotSerializers: [
    '<rootDir>/../../build/serializers/html-comment',
    '<rootDir>/../../build/serializers/ng-snapshot',
    '<rootDir>/../../build/serializers/no-ng-attributes',
  ],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|js|html)$': '<rootDir>/../../build/index.js',
  },
};
