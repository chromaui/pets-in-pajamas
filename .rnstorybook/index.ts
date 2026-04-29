import AsyncStorage from '@react-native-async-storage/async-storage';
import { view } from './storybook.requires';

const StorybookUIRoot = view.getStorybookUI({
  storage: {
    getItem: AsyncStorage.getItem,
    setItem: AsyncStorage.setItem,
  },
  enableWebsockets: process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === 'true',
  host: process.env.EXPO_PUBLIC_STORYBOOK_WEBSOCKET_HOST || 'localhost',
  port: parseInt(process.env.EXPO_PUBLIC_STORYBOOK_WEBSOCKET_PORT || '7007', 10),
  secured: process.env.EXPO_PUBLIC_STORYBOOK_WEBSOCKET_SECURED === 'true',
  onDeviceUI: process.env.EXPO_PUBLIC_STORYBOOK_DISABLE_UI !== 'true',
});

export default StorybookUIRoot;
