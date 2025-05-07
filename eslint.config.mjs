import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';

export default tseslint.config({
  files: ['**/*.ts'],
  plugins: {
    prettier: prettierPlugin,
  },
  rules: {
    'prettier/prettier': 'error',
  },
  ignores: ['node_modules', 'dist', 'apps/backend/src/generated/**/*'],
});
