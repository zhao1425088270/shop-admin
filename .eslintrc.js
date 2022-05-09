module.exports = {
  env: {
    browser: true,
    es2021: true,
    'vue/setup-compiler-macros': false
  },
  extends: [
    'plugin:vue/vue3-essential', // vue3-strongly-recommended
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
  }
}
