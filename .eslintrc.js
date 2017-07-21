module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  globals: {
    __static: true
  },
  plugins: [
    'html'
  ],
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    'prefer-promise-reject-errors': 0,
    'dot-notation': 1,
    'eqeqeq': 1,
    'no-bitwise': 1,
    'curly': [1, 'multi-line'],
    'guard-for-in': 1,
    'wrap-iife': [1, 'outside'],
    'no-use-before-define': [1, {'functions': true, 'classes': true}],
    'new-cap': 1,
    'no-caller': 1,
    'no-new': 1,
    'no-plusplus': 0,
    'no-unused-vars': 1,
    'no-undef': 1,
    'semi': 0,
    'no-console': 0,
    'no-empty': 1,
    'space-before-function-paren': 0,
    'indent': ['warn', 2],
    'brace-style': [2, 'stroustrup', { 'allowSingleLine': true }],
    'promise/param-names': 0,
    'no-return-await': 0
  }
}
