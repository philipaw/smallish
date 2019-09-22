module.exports = {
  root: true,
  env: {
    mocha: true,
    browser: true,
    es6: true,
    node: true,
    "cypress/globals": true
  },
  extends: [
    "standard",
    "prettier",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "react-app-eslint-six"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  plugins: [
    "babel",
    "react",
    "node",
    "promise",
    "standard",
    "prettier",
    "sort-imports-es6-autofix",
    "import",
    "jsx-a11y",
    "graphql",
    "mocha",
    "cypress"
  ],
  rules: {
    "prettier/prettier": "error"
  }
};
