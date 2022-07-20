module.exports = {
  extends: ['taro/react', 'airbnb', 'airbnb/hooks', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-commonjs': 'off',
    'prettier/prettier': 'error',
    'no-undef': 'off',
    'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/function-component-definition': [2, { 'namedComponents': 'arrow-function' }]
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    // -   project: './tsconfig.json'
    project: './tsconfig.eslint.json'
  }
}
