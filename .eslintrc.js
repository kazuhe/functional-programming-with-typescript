module.exports = {
  root: true,

  env: {
    es6: true,
    browser: true,
    node: true,
  },

  plugins: ['prettier'],

  extends: ['eslint:recommended', 'plugin:prettier/recommended'],

  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },

  rules: {
    'prettier/prettier': ['error', { singleQuote: true, semi: false }],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
}
