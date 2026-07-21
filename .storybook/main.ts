import type { StorybookConfig } from '@storybook/react-native-web-vite';

const config: StorybookConfig = {
  "stories": [
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [],
  "framework": {
    "name": "@storybook/react-native-web-vite",
    "options": {}
  },
  // Vite 8's dependency optimizer (rolldown) tries to pre-bundle
  // expo-modules-core, whose `ts-declarations/*.ts` files are type-only
  // `declare class` declarations with no runtime exports. That makes the
  // optimizer fail with "MISSING_EXPORT" for EventEmitter/NativeModule/etc.
  // Excluding it lets Vite serve those modules through its normal transform
  // pipeline (which strips the type-only declarations) instead.
  viteFinal: async (viteConfig) => {
    viteConfig.optimizeDeps = {
      ...viteConfig.optimizeDeps,
      exclude: [...(viteConfig.optimizeDeps?.exclude ?? []), 'expo-modules-core'],
    };
    return viteConfig;
  },
};
export default config;
