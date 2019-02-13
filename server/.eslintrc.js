module.exports = {
    "env": {
        "browser": true
    },
    "extends": "standard",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6
    },
    "rules": {
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "allow": [
            "log, warn, error"
        ],
        'vue/html-closing-bracket-newline': 0,
        'vue/singleline-html-element-content-newline': 0,
        'vue/multiline-html-element-content-newline': 0,
        'vue/max-attributes-per-line': 0
    }
};