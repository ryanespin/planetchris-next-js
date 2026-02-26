import stylistic from '@stylistic/eslint-plugin'
import mantine from 'eslint-config-mantine';
import perfectionist from 'eslint-plugin-perfectionist'
import { defineConfig } from 'eslint/config';

export default defineConfig(
  ...mantine,
  stylistic.configs.recommended,
  perfectionist.configs['recommended-natural'],
  { ignores: ['**/*.{mjs,cjs,js,d.ts,d.mts}', '.github/', '.next/'] },
  { rules: {
    '@typescript-eslint/no-require-imports': 'warn',
    'no-console': [
      "error", {
          "allow": [
              "debug",
              "error",
              "info",
              "warn"
          ]
      }]
  }}
);
