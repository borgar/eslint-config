module.exports = {
  extends: [
    './rules/style',
    './rules/safety',
    './rules/regexp',
    './rules/whoops'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module'
  },
  rules: {
    strict: [ 'error', 'never' ]
  }
}
