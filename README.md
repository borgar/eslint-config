# @borgar/eslint-config

I have opinions on how my code should look. This is a capture of those.

Look at the [example.js](./example.js) to get a feel for what the code looks like.

## Installing it

Pull it into your package like this:

    npm install --save-dev eslint @eslint/js globals typescript-eslint @borgar/eslint-config

Then add an eslint.config.js file:

```js
import borgarLint from '@borgar/eslint-config';
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
    commaDangle: true,
    singleBlocks: true,
    lineLength: 120
  }),
);
```
