module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "airbnb",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": 0,
        "max-len": [1, {
            "code": 120,
            "ignoreUrls": true,
            "ignoreTrailingComments": true,
            "ignoreComments": true,
            "ignorePattern": "^\\s*(const|let|var)\\s+\\w+\\s+\\=\\s+\\/.*\\/(|i|g|m|ig|im|gm|igm);?$"
        }],
        "no-param-reassign": ["error", { "props": false }],

        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        "react/forbid-prop-types": [0],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "jsx-a11y/no-static-element-interactions": 0
    }
};
