// @ts-check
import globals from 'globals';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import nodePlugin from 'eslint-plugin-n';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';

export default tseslint.config(
    {
        extends: [eslint.configs.recommended, ...tseslint.configs.recommended, eslintPluginPrettierRecommended],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: globals.node,
        },
        rules: {
            'typescript-eslint/consistent-type-imports': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            'no-case-declarations': 'off',
            '@typescript-eslint/ban-types': 'off',
            'no-param-reassign': ['warn', { props: true }],
            'no-console': 'warn',
        },
    },
    {
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: globals.node,
        },
        plugins: {
            unicorn: eslintPluginUnicorn,
        },
        rules: {
            'unicorn/no-await-expression-member': 'error',
            'unicorn/no-empty-file': 'error',
            'unicorn/no-instanceof-array': 'error',
            'unicorn/no-unnecessary-await': 'error',
            'unicorn/prefer-array-flat-map': 'error',
            'unicorn/throw-new-error': 'error',
            // 'unicorn/filename-case': ['error', { case: 'kebabCase' }],
        },
    },
    {
        plugins: {
            n: nodePlugin,
        },
        rules: {
            'n/no-extraneous-import': ['off'],
            'n/no-missing-import': ['off'],
            'n/file-extension-in-import': ['error', 'always'],
        },
    }
);
