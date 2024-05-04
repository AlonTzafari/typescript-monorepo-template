/* eslint-env node */
module.exports = {
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended-type-checked',
    ],
    plugins: ['@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parserOptions: {
      project: ['./tsconfig.eslint.json', 'packages/apps/*/tsconfig.json', , 'packages/libs/*/tsconfig.json'],
      tsconfigRootDir: __dirname,
    },
    root: true,
    rules: {
        semi: ['error', 'never']
    }
  };