import stylistic from '@stylistic/eslint-plugin';

type Severity = 0 | 1 | 2;
type SeverityString = 'error' | 'off' | 'warn';
type RuleLevel = Severity | SeverityString;
type RuleLevelAndOptions = [RuleLevel, ...unknown[]];
type RuleEntry = RuleLevel | RuleLevelAndOptions;
type Rules = Record<string, RuleEntry>;
type ESConfig = {
  plugins?: Record<string, typeof stylistic>,
  rules?: Rules
};

const basic_rules: Rules = {
  'no-shadow': [ 'error', { hoist: 'all', builtinGlobals: true } ],
  'require-atomic-updates': 'off',
  'no-console': [ 'error', { allow: [ 'error', 'warn' ] } ],
  // restricted, deprecated or future features
  'no-restricted-properties': [
    'error',
    { property: 'substring', message: 'Please use slice to cut strings.' },
    { property: 'substr', message: 'Please use slice to cut strings.' }
    // { property: 'only', message: 'Don\'t leave .only in tests.' }
  ]
};

const config_typescript: Rules = {
  ...basic_rules,
  '@typescript-eslint/prefer-nullish-coalescing': 'off',
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/no-unused-vars': [ 'warn', { caughtErrors: 'none' } ],
  '@typescript-eslint/ban-ts-comment': [ 'error', { 'ts-check': false, 'ts-expect-error': 'allow-with-description', 'ts-ignore': false, 'ts-nocheck': false } ],
  '@typescript-eslint/no-unsafe-argument': 'off',
  '@typescript-eslint/no-inferrable-types': 'off',
  '@typescript-eslint/no-unsafe-member-access': 'off',
  '@typescript-eslint/no-unsafe-return': 'off',
  '@typescript-eslint/no-base-to-string': 'off',
  '@typescript-eslint/prefer-optional-chain': 'warn',
  '@typescript-eslint/prefer-for-of': 'warn',
  '@typescript-eslint/consistent-type-definitions': [ 'error', 'type' ],
  '@typescript-eslint/no-empty-function': 'off'
};

const config_style: Rules = {
  '@stylistic/array-bracket-newline': [ 'error', 'consistent' ],
  '@stylistic/array-bracket-spacing': [ 'error', 'always' ],
  '@stylistic/array-element-newline': [ 'error', 'consistent' ],
  '@stylistic/arrow-parens': [ 'error', 'as-needed' ],
  '@stylistic/arrow-spacing': [ 'error', { before: true, after: true } ],
  '@stylistic/block-spacing': [ 'error', 'always' ],
  '@stylistic/comma-spacing': [ 'error', { before: false, after: true } ],
  '@stylistic/comma-style': [ 'error', 'last' ],
  '@stylistic/comma-dangle': [ 'error', 'always-multiline' ],
  '@stylistic/computed-property-spacing': [ 'error', 'never' ],
  '@stylistic/dot-location': [ 'error', 'property' ],
  '@stylistic/eol-last': 'error',
  '@stylistic/function-call-spacing': [ 'error', 'never' ],
  '@stylistic/function-paren-newline': [ 'error', 'consistent' ],
  '@stylistic/generator-star-spacing': [ 'error', { before: false, after: true, method: { before: true, after: false } } ],
  '@stylistic/implicit-arrow-linebreak': [ 'error', 'beside' ],
  '@stylistic/indent': [ 'error', 2, { SwitchCase: 1, ignoredNodes: [ 'JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild' ] } ],
  '@stylistic/jsx-quotes': [ 'error', 'prefer-double' ],
  '@stylistic/key-spacing': [ 'error', { singleLine: { beforeColon: false, afterColon: true }, multiLine: { beforeColon: false, afterColon: true, mode: 'minimum' } } ],
  '@stylistic/keyword-spacing': [ 'error', { before: true, after: true } ],
  '@stylistic/linebreak-style': [ 'error', 'unix' ],
  '@stylistic/lines-between-class-members': [ 'error', 'always', { exceptAfterSingleLine: true } ],
  '@stylistic/multiline-ternary': [ 'error', 'always-multiline' ],
  '@stylistic/new-parens': 'error',
  '@stylistic/no-confusing-arrow': [ 'error', { allowParens: true } ],
  '@stylistic/no-extra-parens': [ 'error', 'functions' ],
  '@stylistic/no-extra-semi': 'error',
  '@stylistic/no-floating-decimal': 'warn',
  '@stylistic/no-mixed-spaces-and-tabs': 'error',
  '@stylistic/no-multi-spaces': [ 'error', { ignoreEOLComments: true, exceptions: { VariableDeclarator: true, ArrayExpression: true } } ],
  '@stylistic/no-multiple-empty-lines': [ 'error', { max: 1, maxEOF: 1, maxBOF: 0 } ],
  '@stylistic/no-trailing-spaces': 'error',
  '@stylistic/no-whitespace-before-property': 'error',
  '@stylistic/nonblock-statement-body-position': [ 'error', 'beside' ],
  '@stylistic/object-curly-newline': [ 'error', { consistent: true } ],
  '@stylistic/type-generic-spacing': [ 'error' ],
  '@stylistic/type-named-tuple-spacing': [ 'error' ],
  '@stylistic/object-curly-spacing': [ 'error', 'always' ],
  '@stylistic/object-property-newline': [ 'error', { allowAllPropertiesOnSameLine: true } ],
  '@stylistic/operator-linebreak': [ 'error', 'after', { overrides: { '?': 'before', ':': 'before' } } ],
  '@stylistic/padded-blocks': [ 'error', 'never' ],
  '@stylistic/quote-props': [ 'error', 'consistent-as-needed' ],
  '@stylistic/quotes': [ 'error', 'single', { avoidEscape: true } ],
  '@stylistic/rest-spread-spacing': [ 'error', 'never' ],
  '@stylistic/semi': [ 'error', 'always' ],
  '@stylistic/semi-spacing': [ 'error', { before: false, after: true } ],
  '@stylistic/semi-style': [ 'error', 'last' ],
  '@stylistic/space-before-blocks': [ 'error', 'always' ],
  '@stylistic/space-before-function-paren': [ 'error', 'always' ],
  '@stylistic/space-in-parens': [ 'error', 'never' ],
  '@stylistic/space-infix-ops': 'error',
  '@stylistic/space-unary-ops': [ 'error', { words: true, nonwords: false } ],
  '@stylistic/spaced-comment': [ 'error', 'always', { markers: [ 'global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',' ] } ],
  '@stylistic/switch-colon-spacing': 'error',
  '@stylistic/template-curly-spacing': [ 'error', 'never' ],
  '@stylistic/template-tag-spacing': [ 'error', 'never' ],
  '@stylistic/wrap-iife': [ 'error', 'any' ],
  '@stylistic/yield-star-spacing': [ 'error', 'after' ],
  '@stylistic/brace-style': [ 'error', 'stroustrup', { allowSingleLine: false } ],
  'max-len': 'off'
};

const config_jsdoc: Rules = {
  'jsdoc/tag-lines': [ 'error', 'any', { startLines: 1 } ],
  'jsdoc/require-jsdoc': 'off',
  'jsdoc/require-param-description': 'off',
  'jsdoc/require-property-description': 'off',
  'jsdoc/require-returns-description': 'off'
};

type StyleOpts = {
  commaDangle?: boolean,
  singleBlocks?: boolean
  lineLength?: null|number|number[],
};

export default {
  config: {
    jsdoc: { rules: config_jsdoc },

    // TOOD: add a set for JS only that works without typescript-eslint
    // recommendedJS: { rules: basic_rules };

    recommended: { rules: config_typescript },

    stylistic: (opts: StyleOpts): ESConfig => {
      const {
        commaDangle = true,
        lineLength = null,
        singleBlocks = false
      } = opts;

      const dynamic: Rules = {};
      dynamic['@stylistic/brace-style'] = [ 'error', 'stroustrup', { allowSingleLine: !!singleBlocks } ];
      dynamic['@stylistic/comma-dangle'] = [ 'error', commaDangle ? 'always-multiline' : 'never' ];

      let code = 120;
      let comment = 120;
      if (lineLength && lineLength !== Infinity) {
        if (Array.isArray(lineLength)) {
          if (isFinite(+lineLength[0])) {
            code = +lineLength[0];
            comment = code;
          }
          if (lineLength.length > 1 && isFinite(+lineLength[1])) {
            comment = +lineLength[1];
          }
        }
        else if (isFinite(lineLength) && typeof lineLength === 'number') {
          code = lineLength;
          comment = lineLength;
        }
      }
      if (lineLength === 0 || lineLength === null || lineLength === Infinity) {
        dynamic['max-len'] = [ 'off' ];
      }
      else {
        dynamic['max-len'] = [ 'error', {
          code: code,
          comments: comment,
          tabWidth: 2,
          ignorePattern: '^\\s*\\* @\\S', // allow long lines in type comments
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true
        } ];
      }

      return {
        plugins: {
          '@stylistic': stylistic
        },
        rules: Object.assign({}, config_style, dynamic)
      };
    }
  }
};
