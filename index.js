module.exports = {
  extends: [
    './rules/style',
    './rules/safety',
    './rules/regexp',
    './rules/whoops'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    strict: [ 'error', 'never' ]
  }
};
