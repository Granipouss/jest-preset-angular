/** @type {import('ts-jest/dist/types').ProjectConfigTsJest} */
module.exports = {
  displayName: 'with-babel',
  preset: '<rootDir>/../../node_modules/ts-jest/presets/js-with-babel-esm',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/../tsconfig-esm.json',
      babelConfig: true,
    },
  },
  transform: {
    '^.+\\.(ts|js|html)$': '<rootDir>/../../build/index.js',
  },
};
