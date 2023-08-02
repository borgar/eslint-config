// Specific to JSDoc
module.exports = {
  rules: {
    'jsdoc/check-access': 'error', // jsdoc/recommended
    'jsdoc/check-alignment': 'warn', // jsdoc/recommended
    'jsdoc/check-examples': 0,
    'jsdoc/check-indentation': 0,
    'jsdoc/check-line-alignment': 0,
    'jsdoc/check-param-names': 'warn', // jsdoc/recommended
    'jsdoc/check-property-names': 'error', // jsdoc/recommended
    'jsdoc/check-syntax': 'error',
    'jsdoc/check-tag-names': 'error', // jsdoc/recommended
    'jsdoc/check-types': 'error', // jsdoc/recommended
    'jsdoc/check-values': 'error', // jsdoc/recommended
    'jsdoc/empty-tags': 'error', // jsdoc/recommended
    'jsdoc/implements-on-classes': 'error', // jsdoc/recommended
    'jsdoc/informative-docs': 0,
    'jsdoc/match-description': 0,
    'jsdoc/match-name': 0,
    'jsdoc/multiline-blocks': 'error', // jsdoc/recommended
    'jsdoc/no-bad-blocks': 0,
    'jsdoc/no-blank-block-descriptions': 0,
    'jsdoc/no-blank-blocks': 'error',
    'jsdoc/no-defaults': 0,
    'jsdoc/no-missing-syntax': 0,
    'jsdoc/no-multi-asterisks': [ 'error', { allowWhitespace: true } ], // jsdoc/recommended
    'jsdoc/no-restricted-syntax': 0,
    'jsdoc/no-types': 0,
    'jsdoc/no-undefined-types': 1, // jsdoc/recommended ... 🤔
    'jsdoc/require-asterisk-prefix': 'error',
    'jsdoc/require-description': 0,
    'jsdoc/require-description-complete-sentence': 0,
    'jsdoc/require-example': 0,
    'jsdoc/require-file-overview': 0,
    'jsdoc/require-hyphen-before-param-description': 0,
    'jsdoc/require-jsdoc': 0, // jsdoc/recommended
    'jsdoc/require-param': 'error', // jsdoc/recommended
    'jsdoc/require-param-description': 'warn', // jsdoc/recommended
    'jsdoc/require-param-name': 'error', // jsdoc/recommended
    'jsdoc/require-param-type': 'error', // jsdoc/recommended
    'jsdoc/require-property': 'error', // jsdoc/recommended
    'jsdoc/require-property-description': 'warn', // jsdoc/recommended
    'jsdoc/require-property-name': 'error', // jsdoc/recommended
    'jsdoc/require-property-type': 'error', // jsdoc/recommended
    'jsdoc/require-returns': 'error', // jsdoc/recommended
    'jsdoc/require-returns-check': 'error', // jsdoc/recommended
    'jsdoc/require-returns-description': 'warn', // jsdoc/recommended
    'jsdoc/require-returns-type': 'error', // jsdoc/recommended
    'jsdoc/require-throws': 0,
    'jsdoc/require-yields': 'error', // jsdoc/recommended
    'jsdoc/require-yields-check': 'error', // jsdoc/recommended
    'jsdoc/sort-tags': 0,
    'jsdoc/tag-lines': 0, // jsdoc/recommended
    'jsdoc/valid-types': 'error' // jsdoc/recommended
  },
  plugins: [ 'jsdoc' ]
};
