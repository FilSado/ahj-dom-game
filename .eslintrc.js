module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'import/extensions': 'off',
  },
  overrides: [
    {
      files: ['dist/**/*.js'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
};
