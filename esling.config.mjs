import tseslint from 'typescript-eslint';

export default tseslint.config({
  files: ['**/*.ts'],
  plugins: {
    prettier: require('eslint-plugin-prettier'),
  },
  rules: {
    'prettier/prettier': 'error',
  },
  ignores: ['node_modules', 'dist'],
});
