// "Whoops" rules: You probably didn't mean to do this...
module.exports = {
  "rules": {
    "accessor-pairs": "warn",
    "constructor-super": "error",
    "eqeqeq": ["error", "allow-null"],
    "no-const-assign": "error",
    "no-confusing-arrow": ["error", { allowParens: true }],
    "no-delete-var": "error",
    "no-debugger": "error",
    "no-dupe-args": "error",
    "no-dupe-class-members": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-duplicate-imports": "error",
    "no-loop-func": "error",
    "no-ex-assign": "error",
    "no-irregular-whitespace": "error",
    "no-unexpected-multiline": "error",
    "no-unmodified-loop-condition": "error",
    "no-unreachable": "error",
    "no-unused-vars": ["error", { "vars": "all", "args": "none" }],
    "no-var": "warn",
    "no-console": [ "warn", { allow: [ 'warn', 'error' ] } ],
    "radix": "warn",
    "prefer-const": "warn"
  }
}
