import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import StorybookUI from '../.rnstorybook/';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  if (process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === 'true') {
    return (
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <StorybookUI />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="login" options={{ title: 'Login' }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="post/[id]" options={{ title: 'Post' }} />
        <Stack.Screen name="profile/[username]" options={{ title: 'Profile' }} />
        <Stack.Screen name="profile/edit" options={{ title: 'Edit Profile' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
