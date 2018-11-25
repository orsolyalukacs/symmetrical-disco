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
        ]
    }
};