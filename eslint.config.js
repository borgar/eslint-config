import borgarLint from './dist/index.js';
import eslint from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    files: [
      '**/*.js',
      '**/*.ts',
      '**/*.mjs'
    ],
    ignores: [
      'dist/*'
    ],
    languageOptions: {
      globals: { ...globals.browser },
      parserOptions: { projectService: { allowDefaultProject: [] } }
    }
  },
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  borgarLint.config.recommended,
  borgarLint.config.stylistic({
    commaDangle: false,
    singleBlocks: false,
    lineLength: Infinity
  }),
);
