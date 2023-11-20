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
  overrides: [
    {
      files: [".eslintrc.js", "babel.config.js", "jest.config.js"],
      env: {
        node: true,
      },
    },
  ],
};
