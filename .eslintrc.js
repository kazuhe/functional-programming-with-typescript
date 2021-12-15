module.exports = {
  root: true,

  env: {
    es6: true,
    browser: true,
    node: true,
  },

  plugins: ["prettier"],

  extends: [
    "plugin:@typescript-eslint/recommended",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],

  parser: "@typescript-eslint/parser",

  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },

  rules: {
    "prettier/prettier": ["error", {}],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
  },
};
