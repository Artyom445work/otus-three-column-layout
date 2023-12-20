module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: "eslint:recommended",
  ignorePatterns: ["dist"],
  overrides: [
    {
      files: ["babel.config.js", "webpack.config.js"],
      env: {
        node: true,
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {},
};
