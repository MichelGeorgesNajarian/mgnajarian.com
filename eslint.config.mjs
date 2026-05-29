import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      "dist/",
      "**/node_modules/*",
      "coverage",
      "**/.next/*",
      "*.lock",
      "**/out/*",
      "next-env.d.ts",
      "package.json",
      "package-lock.json",
    ],
  },
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    ignores: ["dist/**/*"],
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintPluginPrettierRecommended,
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "prettier/prettier": [
        "error",
        {
          singleQuote: false,
          endOfLine: "auto",
          trailingComma: "all",
          bracketSpacing: true,
          quoteProps: "consistent",
        },
      ],
    },
  },
];
