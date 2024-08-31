/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',

    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-recommended',

    '@vue/eslint-config-typescript',
    '@vue/eslint-config-typescript/recommended',

    'eslint-config-prettier',
    '@vue/eslint-config-prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  overrides: [
    {
      files: ['*.html'],
      rules: {
        'vue/comment-directive': 'off',
      },
    },
  ],
};
