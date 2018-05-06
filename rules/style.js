// This is the collection of rules that makes the code look a certain way (my way)
module.exports = {
  rules: {
    'array-bracket-spacing': [ 'error', 'always' ],
    'arrow-spacing': [ 'error', { before: true, after: true } ],
    'block-spacing': [ 'error', 'always' ],
    'brace-style': [ 'error', 'stroustrup', { allowSingleLine: true } ],
    'comma-dangle': [ 'error', 'never' ],
    'comma-spacing': [ 'error', { before: false, after: true } ],
    'comma-style': [ 'error', 'last' ],
    'computed-property-spacing': [ 'error', 'never' ],
    'curly': [ 'error', 'multi-line' ],
    'dot-notation': [ 'error', { allowKeywords: true } ],
    'dot-location': [ 'error', 'property' ],
    'eol-last': 'error',
    'generator-star-spacing': [ 'error', 'after' ],
    'indent': [ 'error', 2 ],
    'jsx-quotes': [ 'error', 'prefer-single' ],
    'key-spacing': [ 'error', {
      singleLine: {
        beforeColon: false,
        afterColon: true
      },
      multiLine: {
        beforeColon: false,
        afterColon: true,
        mode: 'minimum'
      }
    } ],
    'keyword-spacing': [ 'error', { before: true, after: true } ],
    'linebreak-style': [ 'error', 'unix' ],
    'no-extra-parens': [ 'error', 'functions' ],
    'no-floating-decimal': 'warn',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': [ 'error', {
      ignoreEOLComments: true,
      exceptions: {
        VariableDeclarator: true,
        ArrayExpression: true
      }
    } ],
    'no-lonely-if': 'error',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': [ 'warn', { max: 3 } ],
    'no-sequences': 'error',
    'no-trailing-spaces': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-spacing': [ 'error', 'always' ],
    'one-var': [ 'error', { initialized: 'never' } ],
    'operator-linebreak': [ 'error', 'after', { overrides: { '?': 'before', ':': 'before' } } ],
    'quotes': [ 'error', 'single', 'avoid-escape' ],
    'quote-props': [ 'error', 'consistent-as-needed' ],
    'semi': [ 'error', 'always' ],
    'semi-spacing': [ 'error', { before: false, after: true } ],
    'space-before-blocks': [ 'error', 'always' ],
    'space-before-function-paren': [ 'error', 'always' ],
    'space-in-parens': [ 'error', 'never' ],
    'space-infix-ops': 'error',
    'space-unary-ops': [ 'error', { words: true, nonwords: false } ],
    'spaced-comment': [ 'error', 'always', { markers: [ 'global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',' ] } ],
    'template-curly-spacing': [ 'error', 'never' ],
    'yield-star-spacing': [ 'error', 'both' ],
    'yoda': [ 'error', 'never' ]
  }
};
