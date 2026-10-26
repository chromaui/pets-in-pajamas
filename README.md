# Pets In Pajamas

![The pets in pajamas app, showing a feed view of photos with pets wearing pajamas](.github/readme/screenshot.jpg)

A demo application for React Native Storybook.

## Storybook

To run React Native Storybook, set `EXPO_PUBLIC_STORYBOOK_ENABLED` to `true` in your environment variables.

This will replace the app root with Storybook when running via `npm run android` or `npm run ios`.

`metro.config.js` uses `withStorybook`, which swaps the app entry for `.rnstorybook` when Storybook is enabled and starts the websocket channel server on port 7007. Set `STORYBOOK_SERVER=false` to skip the server (e.g. in CI builds). The websocket host, port and on-device UI can be configured with `EXPO_PUBLIC_STORYBOOK_WEBSOCKET_HOST`, `EXPO_PUBLIC_STORYBOOK_WEBSOCKET_PORT`, `EXPO_PUBLIC_STORYBOOK_WEBSOCKET_SECURED` and `EXPO_PUBLIC_STORYBOOK_DISABLE_UI`.

To generate the story manifest Chromatic uses to navigate stories, run `npm run generate-manifest` (writes `storybook-static/manifest.json`).
