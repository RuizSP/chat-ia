import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import tseslint from "typescript-eslint"
import unusedImports from "eslint-plugin-unused-imports"
import { defineConfig, globalIgnores } from "eslint/config"

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      "prettier", // 🔴 ESSENCIAL — desliga regras de formatação do ESLint
    ],
    plugins: {
      "unused-imports": unusedImports,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      // ❌ ESLint NÃO formata
      semi: "off",
      quotes: "off",
      "jsx-quotes": "off",
      "comma-dangle": "off",
      "object-curly-spacing": "off",

      // ✅ Prettier manda

      // Remove imports não usados (AUTO FIX)
      "unused-imports/no-unused-imports": "error",

      // Remove variáveis não usadas, mas permite _
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],

      // Desliga regra duplicada
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",

      // TS relaxado
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
])
