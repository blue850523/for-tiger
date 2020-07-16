module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "prefer-const": 0, //首選const,
    "quotes": [0, "single"],//引號類型 `` "" ''
    "semi": [0, "always"],//語句強制分號結尾
    "curly": [0, "all"],//必須使用 if(){} 中的{}
  }
}