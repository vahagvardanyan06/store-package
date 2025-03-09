module.exports = {
    extends: ['prettier'],
    plugins: ['prettier', '@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    rules: {
        'prettier/prettier': 'error',
        '@typescript-eslint/array-type': 'off',
    },
};
