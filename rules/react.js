// Specific to React
module.exports = {
  rules: {
    'react/button-has-type': 'warn',
    'react/default-props-match-prop-types': 'warn',
    'react/display-name': 'warn',
    'react/hook-use-state': 'error',
    'react/iframe-missing-sandbox': 'warn',
    'react/jsx-boolean-value': 'error',
    'react/jsx-child-element-spacing': 'warn',
    'react/jsx-closing-bracket-location': [ 'error', 'props-aligned' ],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-brace-presence': [ 'error', { props: 'never', children: 'never' } ],
    'react/jsx-curly-spacing': [ 'error', { when: 'never', allowMultiline: true, children: { when: 'never' } } ],
    'react/jsx-equals-spacing': [ 'error', 'never' ],
    'react/jsx-filename-extension': [ 'error', { allow: 'as-needed', extensions: [ '.tsx', '.jsx' ] } ],
    'react/jsx-first-prop-new-line': [ 'error', 'multiline' ],
    'react/jsx-fragments': [ 'error', 'syntax' ],
    'react/jsx-handler-names': [ 'error', { eventHandlerPrefix: 'on', eventHandlerPropPrefix: 'on' } ],
    'react/jsx-indent': [ 'warn', 2, { checkAttributes: true, indentLogicalExpressions: true } ],
    'react/jsx-indent-props': [ 'warn', 2 ],
    'react/jsx-key': 'error',
    'react/jsx-max-props-per-line': [ 'warn', { maximum: 1, when: 'multiline' } ],
    'react/jsx-no-bind': [ 'warn', { ignoreRefs: true, allowArrowFunctions: true, allowBind: false } ],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-constructed-context-values': 'warn',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-leaked-render': 'warn',
    'react/jsx-no-script-url': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-tag-spacing': [ 'error', { closingSlash: 'never', beforeSelfClosing: 'always', afterOpening: 'never', beforeClosing: 'never' } ],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': 'error',
    'react/no-access-state-in-setstate': 'warn',
    'react/no-array-index-key': 'warn',
    'react/no-children-prop': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 'warn',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'warn',
    'react/no-find-dom-node': 'error',
    'react/no-invalid-html-attribute': 'warn',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': [ 'error', { ignoreStateless: true } ],
    'react/no-namespace': 'warn',
    'react/no-object-type-as-default-prop': 'warn',
    'react/no-redundant-should-component-update': 'error',
    'react/no-render-return-value': 'error',
    'react/no-string-refs': [ 'error', { noTemplateLiterals: true } ],
    'react/no-this-in-sfc': 'warn',
    'react/no-typos': 'warn',
    'react/no-unescaped-entities': [ 'error', { forbid: [ '>', '}' ] } ],
    'react/no-unknown-property': 'error',
    'react/no-unsafe': 'error',
    'react/no-unused-prop-types': 'error',
    'react/no-unused-state': 'warn',
    'react/no-will-update-set-state': 'warn',
    'react/prefer-es6-class': [ 'error', 'always' ],
    'react/prefer-stateless-function': 'warn',
    'react/prop-types': [ 'error', { ignore: [ 'children' ] } ],
    'react/react-in-jsx-scope': 'error',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': [ 'error', { order: [ 'static-variables', 'static-methods', 'lifecycle', '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/', '/^(on|handle).+$/', 'everything-else', '/^render.+$/', 'render' ] } ],
    'react/style-prop-object': 'warn',
    'react/void-dom-elements-no-children': 'error'
  },
  plugins: [ 'react' ]
};
