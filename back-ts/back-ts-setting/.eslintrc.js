const OFF = 0; // eslint-disable-line no-unused-vars
const WARN = 1; // eslint-disable-line no-unused-vars
const ERROR = 2; // eslint-disable-line no-unused-vars

module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  env: {
    node: true,
    es2021: true,
  },
  rules: {
    camelcase: OFF,
    "no-console": ERROR,
    "import/prefer-default-export": OFF,
    "no-underscore-dangle": OFF,
    "@typescript-eslint/camelcase": OFF,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts", ".js"],
      },
    },
  },
};
