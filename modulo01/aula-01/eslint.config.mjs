import config from 'eslint-config-standard';

export default [
  ...[].concat(config),
  {
    rules: {
      semi: 'error',
      'prefer-const': 'error',
      singleQuote: true,
      tabWidth: 2,
      useTabs: false,
    },
  },
];
