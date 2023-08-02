// Deprecated stuff and "just don't" things that cause problems
module.exports = {
  rules: {
    'for-direction': 'warn',
    'getter-return': 'error',
    'new-cap': [ 'error', { newIsCap: true, capIsNew: false } ],
    'new-parens': 'error',
    'no-array-constructor': 'error',
    'no-async-promise-executor': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-constant-condition': 'error',
    'no-dupe-else-if': 'error',
    'no-empty': [ 'error', { allowEmptyCatch: false } ],
    'no-empty-pattern': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-semi': 'error',
    'no-fallthrough': 'warn',
    'no-func-assign': 'error',
    'no-global-assign': 'error',
    'no-implied-eval': 'error',
    'no-import-assign': 'error',
    'no-inner-declarations': [ 'error', 'functions' ],
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': [ 'error', { allowLoop: false, allowSwitch: false } ],
    'no-lone-blocks': 'warn',
    'no-misleading-character-class': 'error',
    'no-mixed-operators': [ 'error', { allowSamePrecedence: true } ],
    'no-multi-assign': 'error',
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-obj-calls': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-proto': 'error',
    'no-prototype-builtins': 'warn',
    'no-redeclare': 'error',
    'no-return-assign': [ 'error', 'except-parens' ],
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-setter-return': 'error',
    'no-shadow-restricted-names': 'error',
    'no-sparse-arrays': 'error',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-unneeded-ternary': [ 'error', { defaultAssignment: false } ],
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unsafe-optional-chaining': 'error',
    'no-unused-labels': 'error',
    'no-use-before-define': [ 'error', { functions: false, classes: true, variables: true } ],
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-with': 'error',
    'require-yield': 'error',
    'symbol-description': 'warn',
    'use-isnan': 'error',
    'valid-typeof': 'error',
    'wrap-iife': [ 'error', 'any' ]
  }
};
