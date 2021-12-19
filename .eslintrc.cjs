module.exports = {
  env: {
    node: true,
    es6: true,
  },
  parserOptions: { ecmaVersion: 2022 },
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:unicorn/recommended',
    'airbnb-base',
  ],
  rules: {
    'import/extensions': ['error', 'always', { ignorePackages: true }],
  },
};
