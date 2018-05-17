// "Whoops" rules: You probably didn't mean to do this...
module.exports = {
  rules: {
    'react/jsx-boolean-value': 'error',
    'react/jsx-closing-bracket-location': [ 'error', 'props-aligned' ],
    'react/jsx-curly-spacing': [ 'warn', 'never', { allowMultiline: true } ],
    'react/jsx-equals-spacing': [ 'error', 'never' ],
    'react/jsx-first-prop-new-line': [ 'error', 'multiline' ],
    'react/jsx-indent': [ 'warn', 2 ],
    'react/jsx-indent-props': [ 'warn', 2 ],
    'react/jsx-no-bind': [ 'warn', {
      ignoreRefs: true,
      allowArrowFunctions: true,
      allowBind: false
    } ],
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-tag-spacing': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': 'error',
    'react/no-deprecated': 'warn',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': [ 'error', {
      ignoreStateless: true
    } ],
    'react/no-unknown-property': 'error',
    'react/prefer-stateless-function': 'warn',
    'react/prop-types': [ 'error', { ignore: [ 'children' ] } ],
    'react/react-in-jsx-scope': 'error',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': [ 'error', {
      order: [
        'static-methods',
        'lifecycle',
        '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        '/^(on|handle).+$/',
        'everything-else',
        '/^render.+$/',
        'render'
      ]
    } ]
  },
  plugins: [ 'react' ]
};
