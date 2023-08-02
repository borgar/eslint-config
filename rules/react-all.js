// It's not a great idea to disable rules like this because the plugin can exist
// in a chain of plugins and could turn off something a wants to enable later.
//
// So this file exists to "use up" known rules, so that when new rules are added
// to the core/plugin, querying for unused ones will show the new rules.
module.exports = {
  rules: {
    ...require('./react').rules,
    'react/boolean-prop-naming': 'off',
    'react/destructuring-assignment': 'off',
    'react/forbid-component-props': 'off',
    'react/forbid-dom-props': 'off',
    'react/forbid-elements': 'off',
    'react/forbid-foreign-prop-types': 'off',
    'react/forbid-prop-types': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-curly-newline': 'off',
    'react/jsx-max-depth': 'off',
    'react/jsx-newline': 'off',
    'react/jsx-no-literals': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': 'off',
    'react/no-adjacent-inline-elements': 'off',
    'react/no-arrow-function-lifecycle': 'off',
    'react/no-danger': 'off',
    'react/no-set-state': 'off',
    'react/no-unstable-nested-components': 'off',
    'react/no-unused-class-component-methods': 'off',
    'react/prefer-exact-props': 'off',
    'react/prefer-read-only-props': 'off',
    'react/require-default-props': 'off',
    'react/require-optimization': 'off',
    'react/sort-default-props': 'off',
    'react/sort-prop-types': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off'
  },
  plugins: [ 'react' ]
};
