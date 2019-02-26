module.exports = {
    env: {
        browser: true,
        node: true,
        commonjs: true,

    },
    extends: [
        "plugin:react/recommended",
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "prettier",
    ],
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true
        },
        ecmaVersion: 6,
        sourceType: "module"
    },
    parser: "babel-eslint",
    plugins: ["react", "import", "prettier"],
    rules: {
        indent: [
            "error",
            4,
            {
                SwitchCase: 1
            }
        ],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "global-require": "off",
        // prettier
        "prettier/prettier": "error",
        // react
        "react/jsx-uses-vars": 1,
        "react/jsx-uses-react": 1,
        "react/prop-types": 2,
        "react/display-name": 0,
        // debug
        "no-console": 0,
        "no-debug": 0
    },
    settings: {
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".es6"]
            }
        }
    }
};
