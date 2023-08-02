module.exports = {
  extends: [
    './rules/react'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    strict: [ 'error', 'never' ]
  }
};
