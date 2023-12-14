module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["eslint:recommended", "prettier", "eslint-config-prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["jest"],
  rules: {
    "no-console": "warn",
  },
  ignorePatterns: ["ymaps.js", "dist", "webpack.config.js", "coverage"], //  7:44  error  'ymaps3' is not defined  no-undef, не знаю как решить кроме как закинуть в игнор
  overrides: [
    {
      files: [".eslintrc.js", "babel.config.js", "jest.config.js"],
      env: {
        node: true,
      },
    },
  ],
};
