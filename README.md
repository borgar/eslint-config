# @borgar/eslint-config

I have opinions on how my code should look. This is a capture of those.

Look at the [example.js](./example.js) to get a feel for what the code looks like. The rules are a bit lax on space at times and depend on the programmer wanting to keep the code legible and clean (don't we all?).

## Installing it

Pull it into your package like this:

    npm install --save-dev eslint @borgar/eslint-config

Then add an .eslintrc file:

    { extends: [ '@borgar/eslint-config' ] }

Or perhaps you are using a babel/webpack combo, like I frequently do:

    {
      parser: 'babel-eslint',
      extends: [ '@borgar/eslint-config' ],
      rules: {
        "import/export": "error",
        "import/no-unresolved": "error"
      },
      plugins: [
        'import'
      ],
      settings: {
        'import/resolver': 'webpack'
      }
    }

This will additionally need any or all of the following modules:

    npm install --save-dev babel-core babel-eslint babel-loader babel-preset-env eslint-import-resolver-webpack eslint-plugin-import webpack webpack-cli

## React?

It comes with settings for React development as well. You'll need the react rules plugin:

    npm install --save-dev eslint-plugin-react

And a ref in your .eslintrc file:

    { extends: [ '@borgar/eslint-config', '@borgar/eslint-config/react' ] }

