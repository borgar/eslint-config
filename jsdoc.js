module.exports = {
  extends: [ './rules/jsdoc' ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: {
    jsdoc: { mode: 'jsdoc' }
  },
  rules: {
    'strict': [ 'error', 'never' ],
    // Would love to disable this for only comment lines that are " * ", but
    // no such filter is offered.
    'no-trailing-spaces': [ 'error', { ignoreComments: true } ],
    // JSDoc comments require a more relaxed line length
    'max-len': [ 'error', {
      code: 120,
      comments: 80,
      tabWidth: 2,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
      ignorePattern: '^\\s+\\*\\s+'
    } ]
  }
};
