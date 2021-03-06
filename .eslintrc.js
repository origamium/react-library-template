module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 6,
        project: "./tsconfig.json",
        sourceType: "module",
        createDefaultProgram: true
    },
    env: {
        es6: true,
        browser: true,
        node: true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
        "prettier/@typescript-eslint"
    ],
    plugins: ["@typescript-eslint", "react-hooks"],
    settings: {
        react: {
            version: "detect"
        },
        node: {
            tryExtensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".node"]
        }
    },
    overrides: [
        {
            files: ["**/*.ts", "**/*.tsx"],
            rules: {
                "semi": 1,
                "no-console": ["warn", {allow: ["info", "warn", "error"]}],
                "no-unused-vars": 0,
                "@typescript-eslint/no-unused-vars": [2, { args: "none" }],
                "@typescript-eslint/no-require-imports": 2,
                "@typescript-eslint/no-var-requires": 2,
                "@typescript-eslint/consistent-type-assertions": 2,
                "@typescript-eslint/no-unnecessary-type-assertion": 2,
                "@typescript-eslint/restrict-plus-operands": 2,
                '@typescript-eslint/return-await': 'error',
                "react-hooks/rules-of-hooks": "error",
                "react-hooks/exhaustive-deps": "warn",
                "@typescript-eslint/explicit-function-return-type": "off",
                "react/prop-types": "off"
            }
        },
        {
            files: [
                "**/__tests__/**",
                "**/*.test.tsx",
                "**/*.spec.tsx",
                "**/*.test.ts",
                "**/*.spec.ts",
                "**/*.test.visual.ts",
                "**/*.spec.visual.ts"],
            plugins: ["jest"],
            env: {
                jest: true
            },
            rules: {
                "no-invalid-this": 0
            }
        }
    ]
}