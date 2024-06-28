const isInstalled = require('is-installed');
const prettierOptions = require('@airteam/prettier-config');

const OVERRIDES = {
  react: {
    extends: [
      'react-app',
      'plugin:jsx-a11y/recommended',
      'prettier'
    ],
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
};

function applyOverrides(baseConfig) {
  if (isInstalled.sync('react')) {
    const overrides = OVERRIDES.react;

    Object.keys(overrides).forEach(key => {
      if (
        typeof overrides[key] === 'object' &&
        !Array.isArray(overrides[key])
      ) {
        Object.assign(baseConfig[key], overrides[key]);
      } else {
        baseConfig[key] = overrides[key];
      }
    });

    baseConfig.parserOptions.ecmaFeatures.jsx = true;
  }

  return baseConfig;
}

module.exports = applyOverrides({
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: false,
      impliedStrict: true,
      experimentalObjectRestSpread: true,
      legacyDecorators: true,
    },
  },
  env: {
    node: true,
    es6: true,
  },
  settings: {},
  rules: {
    strict: 'off',
    curly: 'error',
    eqeqeq: ['warn', 'smart'],
    'consistent-return': 'warn',
    'no-console': 'off',
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'none',
      },
    ],
    'prefer-arrow-callback': 'warn',
    'prefer-const': 'warn',
    'prettier/prettier': ['error', prettierOptions],
  },
});
