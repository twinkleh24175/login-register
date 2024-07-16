import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";


export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  {
    "env": {
      "es2021": true,
      "node": true
    },
    "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
    },
    "plugins": ["@typescript-eslint"],
    "rules": {
      "no-console": "warn",
      "quotes": ["error", "double"],
      "semi": ["error", "always"]
    }
  }
];

