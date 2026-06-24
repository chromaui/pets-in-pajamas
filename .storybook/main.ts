import path from 'path';
import { fileURLToPath } from 'url';
import type { StorybookConfig } from '@storybook/react-native-web-vite';
import type { InlineConfig } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const expoModulesCoreMock = path.resolve(__dirname, './mocks/expo-modules-core.js');

const config: StorybookConfig = {
  "stories": [
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": ["@chromatic-com/storybook"],
  "framework": {
    "name": "@storybook/react-native-web-vite",
    "options": {}
  },
  async viteFinal(config: InlineConfig) {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          'expo-modules-core': expoModulesCoreMock,
        },
      },
    };
  },
};
export default config;
