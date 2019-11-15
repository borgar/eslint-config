module.exports = {
  extends: [
    './rules/react'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module'
  },
  rules: {
    strict: [ 'error', 'never' ]
  }
};
