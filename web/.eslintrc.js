module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'airbnb',
    'plugin:react/all',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier',
  ],
  plugins: ['@typescript-eslint'],
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  env: {
    browser: true,
    node: true,
    jasmine: true,
  },
  rules: {
    'no-console': 'off',
    'import/extensions': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-no-bind': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react/jsx-no-literals': 'off',
    'react/display-name': 'off',
    'react/jsx-max-depth': 'off',
    indent: 2,
    'import/no-unresolved': [2, { caseSensitive: false }],
    '@typescript-eslint/no-plusplus': 'off',
    '@typescript-eslint/guard-for-in': 'off',
    '@typescript-eslint/no-param-reassign': 'off',
    '@typescript-eslint/no-restricted-syntax': 'off',
    'react/button-has-type': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/no-unused-prop-types': 'off',
    'no-param-reassign': [2, { props: false }],
    'arrow-body-style': ['error', 'as-needed'],
    'no-unused-expressions': [1],
  },
};
