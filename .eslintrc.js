module.exports = {
  settings: {
    'import/resolver': {
      typescript: {},
      alias: {
        map: [
          ['@', './src'],
        ],
        extensions: ['.js', '.jsx', '.vue', '.ts'],
      },
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'airbnb-base',
    'plugin:jest/recommended',
    // 'plugin:prettier/recommended' // 添加 prettier 插件
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/valid-template-root': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-unused-vars': 'off',
  },
};
