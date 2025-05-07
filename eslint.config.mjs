import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';

export default tseslint.config({
  files: ['**/*.ts', '**/*.tsx'],
  languageOptions: {
    parser: tseslint.parser,
  },
  plugins: {
    prettier: prettierPlugin,
    '@typescript-eslint': tseslint.plugin,
  },
  rules: {
    'prettier/prettier': 'error',
  },
  ignores: ['node_modules', 'dist', 'apps/backend/src/generated/**/*'],
});
