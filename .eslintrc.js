module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: ['./tsconfig.json'],
    },
    plugins: [
        "react",
    ],
    rules: {
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-var-requires": "off",
        "react/prop-types": "off"
    }
}
