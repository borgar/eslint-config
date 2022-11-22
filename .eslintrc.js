const self = require('./index.js');

module.exports = Object.assign({}, self, {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true
    }
  },
  env: {
    node: true
  }
});
